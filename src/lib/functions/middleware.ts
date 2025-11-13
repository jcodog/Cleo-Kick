import type { MiddlewareHandler } from "hono";
import {
  KickWebhookError,
  KickWebhookSignatureError,
  validateKickWebhook,
  type KickWebhookValidationResult,
} from "./validateWebhook";
import type { ErrorLogEntry } from "./errors/logError";
import type { Env } from "../config/env";
import { getDb, Prisma, type DbClient } from "../prisma";
import {
  OAuth2AuthorizationUrl,
  Routes,
  type RESTPostOAuth2RefreshTokenResult,
} from "kick-api-types/rest";
import type { AppVariables } from "../app/types";

export interface KickBroadcasterAuth {
  accountId: string;
  accessToken: string;
}

const TOKEN_REFRESH_THRESHOLD_MS = 60_000;
const LOG_PREFIX = "[kick-webhook-middleware]";
const ACCOUNT_CACHE_TTL_SECONDS = 60;
const ACCOUNT_CACHE_TTL_MS = ACCOUNT_CACHE_TTL_SECONDS * 1_000;
const ACCOUNT_CACHE_TAG_PREFIX = "account";
const ACCOUNT_CACHE_TAG_MAX_LENGTH = 64;

type AccountRecord = {
  id: string;
  accountId: string;
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenExpiresAt: Date | null;
  refreshTokenExpiresAt: Date | null;
};

type CachedAccount = {
  value: AccountRecord;
  expiresAt: number;
};

const accountCache = new Map<string, CachedAccount>();

function getAccountCacheTag(accountId: string): string {
  const sanitized = accountId.replace(/[^0-9A-Za-z_]/g, "_");
  const maxIdLength = Math.max(
    1,
    ACCOUNT_CACHE_TAG_MAX_LENGTH - (ACCOUNT_CACHE_TAG_PREFIX.length + 1)
  );
  const trimmed = sanitized.slice(0, maxIdLength);
  const normalized = trimmed || "_";
  return `${ACCOUNT_CACHE_TAG_PREFIX}_${normalized}`;
}

async function invalidateAccountCache(
  db: DbClient,
  accountId: string,
  steps?: StepLogger
): Promise<void> {
  const cacheTag = getAccountCacheTag(accountId);
  const removed = accountCache.delete(accountId);
  if (removed) {
    steps?.note("Cleared local account cache", {
      broadcasterAccountId: accountId,
    });
  }
  if (!db.$accelerate?.invalidate) {
    steps?.note("Accelerate invalidate unavailable", { cacheTag });
    return;
  }

  try {
    await db.$accelerate.invalidate({ tags: [cacheTag] });
    steps?.note("Invalidated account cache", {
      broadcasterAccountId: accountId,
      cacheTag,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const maybeCode =
      typeof error === "object" && error !== null && "code" in error
        ? (error as { code?: string }).code
        : undefined;

    if (
      (error instanceof Prisma.PrismaClientKnownRequestError ||
        maybeCode === "P6003") &&
      maybeCode === "P6003"
    ) {
      steps?.note("Accelerate invalidate rate limited", {
        broadcasterAccountId: accountId,
        cacheTag,
      });
      console.warn("Accelerate cache invalidation rate limited", {
        broadcasterAccountId: accountId,
        cacheTag,
      });
      return;
    }

    console.warn("Failed to invalidate account cache", {
      broadcasterAccountId: accountId,
      cacheTag,
      error: errorMessage,
    });
  }
}

type StepHandle = {
  id: number;
  label: string;
};

type StepLogger = {
  start: (label: string, meta?: Record<string, unknown>) => StepHandle;
  success: (handle: StepHandle, meta?: Record<string, unknown>) => void;
  fail: (handle: StepHandle, error: unknown) => void;
  note: (label: string, meta?: Record<string, unknown>) => void;
};

export function formatStepMeta(meta?: Record<string, unknown>): string {
  if (!meta) {
    return "";
  }

  const entries = Object.entries(meta).filter(
    ([, value]) => value !== undefined
  );
  if (entries.length === 0) {
    return "";
  }

  const formatted = entries.map(([key, value]) => {
    if (value === null) {
      return `${key}=null`;
    }

    if (typeof value === "string") {
      return `${key}="${value}"`;
    }

    if (typeof value === "number" || typeof value === "boolean") {
      return `${key}=${String(value)}`;
    }

    if (value instanceof Date) {
      return `${key}="${value.toISOString()}"`;
    }

    return `${key}=${JSON.stringify(value)}`;
  });

  return ` ${formatted.join(" ")}`;
}

function createStepLogger(prefix: string): StepLogger {
  let counter = 1;

  const write = (
    symbol: string,
    handle: StepHandle,
    meta?: Record<string, unknown>,
    level: "log" | "error" = "log"
  ) => {
    console[level](
      `${prefix} #${handle.id} ${symbol} ${handle.label}${formatStepMeta(meta)}`
    );
  };

  return {
    start: (label, meta) => {
      const handle = { id: counter++, label } satisfies StepHandle;
      write("▶", handle, meta);
      return handle;
    },
    success: (handle, meta) => {
      write("✓", handle, meta);
    },
    fail: (handle, error) => {
      const meta: Record<string, unknown> =
        error instanceof Error
          ? { name: error.name, message: error.message }
          : { error };
      write("✗", handle, meta, "error");
    },
    note: (label, meta) => {
      const handle = { id: counter++, label } satisfies StepHandle;
      write("•", handle, meta);
    },
  };
}

function cloneAccountRecord(account: AccountRecord): AccountRecord {
  return {
    ...account,
    accessTokenExpiresAt: account.accessTokenExpiresAt
      ? new Date(account.accessTokenExpiresAt)
      : null,
    refreshTokenExpiresAt: account.refreshTokenExpiresAt
      ? new Date(account.refreshTokenExpiresAt)
      : null,
  };
}

function storeAccountInCache(account: AccountRecord): void {
  accountCache.set(account.accountId, {
    value: cloneAccountRecord(account),
    expiresAt: Date.now() + ACCOUNT_CACHE_TTL_MS,
  });
}

function getCachedAccount(accountId: string): AccountRecord | null {
  const cached = accountCache.get(accountId);
  if (!cached) {
    return null;
  }

  if (cached.expiresAt <= Date.now()) {
    accountCache.delete(accountId);
    return null;
  }

  return cloneAccountRecord(cached.value);
}

async function fetchAccountWithCache(
  db: DbClient,
  accountId: string
): Promise<{ account: AccountRecord | null; fromCache: boolean }> {
  const cached = getCachedAccount(accountId);
  if (cached) {
    return { account: cached, fromCache: true };
  }

  const record = await db.account.findFirst({
    where: { accountId },
    select: {
      id: true,
      accountId: true,
      accessToken: true,
      refreshToken: true,
      accessTokenExpiresAt: true,
      refreshTokenExpiresAt: true,
    },
  });

  if (!record) {
    return { account: null, fromCache: false };
  }

  const account = cloneAccountRecord(record as AccountRecord);
  storeAccountInCache(account);
  return { account, fromCache: false };
}

function clearAccountCacheEntries(accountId?: string): void {
  if (typeof accountId === "string") {
    accountCache.delete(accountId);
    return;
  }

  accountCache.clear();
}
function isInvalidGrantError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  return error.message.toLowerCase().includes("invalid_grant");
}

/**
 * Creates a Hono middleware that validates Kick webhook requests, persists
 * validation failures, and enriches the context with the parsed webhook payload
 * and broadcaster authentication state.
 */
export function createKickWebhookValidationMiddleware<
  Environment extends {
    Bindings: Env;
    Variables: AppVariables;
  }
>(
  recordError: (
    env: Environment["Bindings"],
    entry: ErrorLogEntry
  ) => Promise<void>
): MiddlewareHandler<Environment> {
  return async (c, next) => {
    const steps = createStepLogger(LOG_PREFIX);
    const runStep = async <T>(
      label: string,
      action: () => Promise<T>,
      options: {
        startMeta?: Record<string, unknown>;
        completeMeta?: (result: T) => Record<string, unknown> | undefined;
      } = {}
    ): Promise<T> => {
      const handle = steps.start(label, options.startMeta);
      try {
        const result = await action();
        const successMeta = options.completeMeta?.(result);
        steps.success(handle, successMeta);
        return result;
      } catch (error) {
        steps.fail(handle, error);
        throw error;
      }
    };

    steps.note("Webhook received", {
      path: c.req.path,
      method: c.req.method,
      eventType: c.req.header("Kick-Event-Type") ?? null,
      messageId: c.req.header("Kick-Event-Message-Id") ?? null,
    });

    try {
      const result = await runStep(
        "Validate Kick webhook",
        () => validateKickWebhook(c.req.raw),
        {
          completeMeta: (payload) => ({
            knownType: payload.knownType,
            eventType: payload.eventType,
            messageId: payload.messageId,
          }),
        }
      );
      c.set("kickWebhook", result);
      steps.note("Webhook payload stored", { eventType: result.eventType });

      const broadcasterAuth = await runStep(
        "Resolve broadcaster auth",
        () => resolveBroadcasterAuth<Environment>(c, result, steps),
        {
          completeMeta: (auth) => ({
            accountId: auth?.accountId ?? null,
            hasAccessToken: Boolean(auth?.accessToken),
          }),
        }
      );
      c.set("kickBroadcasterAuth", broadcasterAuth);
      steps.note("Broadcaster auth stored", {
        registered: Boolean(broadcasterAuth),
      });

      await runStep("Invoke downstream handlers", () => next());
    } catch (error) {
      steps.note("Preparing failure context", {
        error:
          error instanceof Error
            ? `${error.name}: ${error.message}`
            : String(error),
        path: c.req.path,
      });

      await runStep("Record webhook failure", () =>
        recordError(c.env, {
          message:
            error instanceof Error ? error.message : "Unknown webhook error",
          status: error instanceof KickWebhookError ? error.status : 500,
          context: {
            path: c.req.path,
            eventType: c.req.header("Kick-Event-Type"),
            messageId: c.req.header("Kick-Event-Message-Id"),
          },
        })
      );

      if (error instanceof KickWebhookSignatureError) {
        console.warn("Rejected Kick webhook", { reason: error.message });
        steps.note("Responding with signature failure", {
          status: error.status,
        });
        return c.json({ error: "Unauthorized" }, error.status);
      }

      if (error instanceof KickWebhookError) {
        steps.note("Responding with webhook error", {
          status: error.status,
          reason: error.message,
        });
        return c.json({ error: error.message }, error.status);
      }

      console.error("Unexpected webhook failure", error);
      steps.note("Responding with unexpected error", { status: 500 });
      return c.json({ error: "Internal Server Error" }, 500);
    }
  };
}

/**
 * Resolves the broadcaster account associated with a validated webhook payload,
 * refreshing the access token when necessary.
 */
async function resolveBroadcasterAuth<
  Environment extends {
    Bindings: Env;
    Variables: AppVariables;
  }
>(
  c: Parameters<MiddlewareHandler<Environment>>[0],
  result: KickWebhookValidationResult,
  steps?: StepLogger
): Promise<KickBroadcasterAuth | null> {
  const idStep = steps?.start("Extract broadcaster account id");
  const broadcasterAccountId = extractBroadcasterAccountId(result);
  if (steps && idStep) {
    steps.success(idStep, {
      broadcasterAccountId: broadcasterAccountId ?? null,
    });
  }
  if (!broadcasterAccountId) {
    steps?.note("Broadcaster account id missing", {
      eventType: result.eventType,
    });
    return null;
  }
  steps?.note("Resolving broadcaster account", { broadcasterAccountId });

  const databaseUrl = c.env.DATABASE_URL;
  if (!databaseUrl) {
    steps?.note("Database binding missing");
    throw new Error("Missing DATABASE_URL binding");
  }

  const db = getDb(databaseUrl);
  const lookupStep = steps?.start("Lookup broadcaster account", {
    broadcasterAccountId,
  });
  const { account: fetchedAccount, fromCache } = await fetchAccountWithCache(
    db,
    broadcasterAccountId
  );
  console.log(
    "[account-lookup-result]",
    JSON.stringify({ account: fetchedAccount, fromCache })
  );

  if (steps && lookupStep) {
    steps.success(lookupStep, {
      found: Boolean(fetchedAccount),
      cacheHit: fromCache,
    });
  }

  let account = fetchedAccount;

  if (!account) {
    steps?.note("Broadcaster account not registered", {
      broadcasterAccountId,
    });
    return null;
  }

  const now = Date.now();
  const accessTokenExpiresAt = account.accessTokenExpiresAt
    ? new Date(account.accessTokenExpiresAt).getTime()
    : null;
  const shouldRefresh =
    !account.accessToken ||
    !accessTokenExpiresAt ||
    accessTokenExpiresAt - now <= TOKEN_REFRESH_THRESHOLD_MS;

  if (shouldRefresh) {
    if (!account.refreshToken) {
      steps?.note("Missing refresh token for broadcaster", {
        broadcasterAccountId,
      });
      throw new Error(
        `Kick broadcaster account ${account.accountId} is missing a refresh token`
      );
    }

    const clientId = c.env.KICK_CLIENT_ID;
    const clientSecret = c.env.KICK_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      steps?.note("Missing Kick OAuth client credentials", {
        hasClientId: Boolean(clientId),
        hasClientSecret: Boolean(clientSecret),
      });
      throw new Error("Missing Kick OAuth client credentials");
    }

    const expiresAtMeta =
      account.accessTokenExpiresAt == null
        ? null
        : account.accessTokenExpiresAt;

    let validationStep: StepHandle | undefined;
    let introspection: TokenIntrospectionResult | undefined;
    if (steps) {
      validationStep = steps.start("Validate refresh token", {
        broadcasterAccountId,
      });
    }

    try {
      introspection = await validateRefreshToken({
        refreshToken: account.refreshToken,
        clientId,
        clientSecret,
      });

      if (steps && validationStep) {
        const meta: Record<string, unknown> = {
          active: introspection.active,
        };
        if (typeof introspection.exp === "number") {
          meta.expiresAt = new Date(introspection.exp * 1000);
        }
        if (typeof introspection.token_type === "string") {
          meta.tokenType = introspection.token_type;
        }
        steps.success(validationStep, meta);
      }
    } catch (error) {
      if (steps && validationStep) {
        steps.fail(validationStep, error);
      }
    }

    if (introspection && !introspection.active) {
      const reason =
        typeof introspection.error_description === "string"
          ? introspection.error_description
          : typeof introspection.error === "string"
          ? introspection.error
          : "inactive";
      throw new Error(
        `Kick refresh token for account ${account.accountId} is not active (${reason})`
      );
    }

    let refreshStep: StepHandle | undefined;
    if (steps) {
      refreshStep = steps.start("Refresh broadcaster access token", {
        broadcasterAccountId,
        expiresAt: expiresAtMeta,
      });
    }

    let refreshed: RESTPostOAuth2RefreshTokenResult;
    try {
      refreshed = await refreshAccessToken({
        refreshToken: account.refreshToken,
        clientId,
        clientSecret,
      });
    } catch (error) {
      if (steps && refreshStep) {
        steps.fail(refreshStep, error);
      }

      if (isInvalidGrantError(error)) {
        steps?.note("Clearing invalid broadcaster tokens", {
          broadcasterAccountId,
        });

        await db.account.update({
          where: { id: account.id },
          data: {
            accessToken: null,
            accessTokenExpiresAt: null,
            refreshToken: null,
            refreshTokenExpiresAt: null,
          },
        });

        account.accessToken = null;
        account.refreshToken = null;
        account.accessTokenExpiresAt = null;
        account.refreshTokenExpiresAt = null;

        await invalidateAccountCache(db, account.accountId, steps);

        throw new Error(
          `Kick refresh token for account ${account.accountId} is invalid or expired`
        );
      }

      throw error;
    }

    const refreshedExpiresAt = new Date(
      Date.now() + refreshed.expires_in * 1000
    );

    await db.account.update({
      where: { id: account.id },
      data: {
        accessToken: refreshed.access_token,
        accessTokenExpiresAt: refreshedExpiresAt,
        refreshToken: refreshed.refresh_token ?? account.refreshToken,
      },
    });

    account.accessToken = refreshed.access_token;
    account.refreshToken = refreshed.refresh_token ?? account.refreshToken;
    account.accessTokenExpiresAt = refreshedExpiresAt;

    await invalidateAccountCache(db, account.accountId, steps);
    storeAccountInCache(account);

    if (steps && refreshStep) {
      steps.success(refreshStep, {
        expiresAt: refreshedExpiresAt,
      });
    }
  }

  return {
    accountId: account.accountId,
    accessToken: account.accessToken!,
  };
}

function extractBroadcasterAccountId(
  result: KickWebhookValidationResult
): string | null {
  if (!result.knownType) {
    return null;
  }

  const payload = result.payload;

  const broadcasterCandidate = normalizeAccountId(payload.broadcaster?.user_id);
  if (broadcasterCandidate) {
    return broadcasterCandidate;
  }

  if (
    typeof payload === "object" &&
    payload !== null &&
    "broadcaster_user_id" in payload
  ) {
    const candidate = normalizeAccountId(
      (payload as { broadcaster_user_id?: unknown }).broadcaster_user_id
    );
    if (candidate) {
      return candidate;
    }
  }

  return null;
}

function normalizeAccountId(value: unknown): string | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }

  return null;
}

interface RefreshOptions {
  refreshToken: string;
  clientId: string;
  clientSecret: string;
}

type RefreshTokenValidationOptions = RefreshOptions & {
  tokenTypeHint?: "access_token" | "refresh_token";
};

type TokenIntrospectionResult = {
  active: boolean;
  scope?: string;
  token_type?: string;
  exp?: number;
  client_id?: string;
  sub?: string;
  error?: string;
  error_description?: string;
  [key: string]: unknown;
};

async function validateRefreshToken(
  options: RefreshTokenValidationOptions
): Promise<TokenIntrospectionResult> {
  const url = `${OAuth2AuthorizationUrl}${Routes.TokenIntrospect()}`;
  const params = new URLSearchParams({
    token: options.refreshToken,
    token_type_hint: options.tokenTypeHint ?? "refresh_token",
    client_id: options.clientId,
    client_secret: options.clientSecret,
  });

  let encodedCredentials: string | undefined;
  if (typeof btoa === "function") {
    encodedCredentials = btoa(`${options.clientId}:${options.clientSecret}`);
  } else if (typeof Buffer !== "undefined") {
    encodedCredentials = Buffer.from(
      `${options.clientId}:${options.clientSecret}`,
      "utf8"
    ).toString("base64");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  if (encodedCredentials) {
    headers.Authorization = `Basic ${encodedCredentials}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: params.toString(),
  });

  const rawBody = await safeReadBody(response);

  if (!response.ok) {
    const detail = extractKickErrorDetail(rawBody);
    throw new Error(
      `Kick token introspection failed (${response.status}): ${detail}`
    );
  }

  if (!rawBody || rawBody === "<no response body>") {
    throw new Error("Kick token introspection returned an empty response");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody) as TokenIntrospectionResult;
  } catch {
    throw new Error("Kick token introspection returned malformed JSON");
  }

  if (
    typeof parsed !== "object" ||
    parsed === null ||
    typeof (parsed as TokenIntrospectionResult).active !== "boolean"
  ) {
    throw new Error("Kick token introspection returned unexpected payload");
  }

  return parsed as TokenIntrospectionResult;
}

function extractKickErrorDetail(raw: string): string {
  if (!raw) {
    return "<empty response body>";
  }

  if (raw === "<no response body>") {
    return raw;
  }

  try {
    const parsed = JSON.parse(raw) as {
      error?: unknown;
      error_description?: unknown;
    };

    if (typeof parsed === "object" && parsed !== null) {
      if (typeof parsed.error_description === "string") {
        return parsed.error_description;
      }

      if (typeof parsed.error === "string") {
        return parsed.error;
      }
    }
  } catch {
    // fall through to raw output
  }

  return raw;
}

async function refreshAccessToken(
  options: RefreshOptions
): Promise<RESTPostOAuth2RefreshTokenResult> {
  const url = `${OAuth2AuthorizationUrl}${Routes.OAuthRefresh()}`;
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: options.clientId,
    client_secret: options.clientSecret,
    refresh_token: options.refreshToken,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const detail = await safeReadBody(response);
    throw new Error(
      `Failed to refresh Kick access token (${response.status}): ${detail}`
    );
  }

  const data = (await response.json()) as RESTPostOAuth2RefreshTokenResult;

  if (!data?.access_token) {
    throw new Error("Kick refresh response did not include an access_token");
  }

  return data;
}

async function safeReadBody(response: Response): Promise<string> {
  try {
    return await response.text();
  } catch (error) {
    console.error("Failed to read Kick refresh response body", error);
    return "<no response body>";
  }
}

export const __test = {
  resolveBroadcasterAuth,
  refreshAccessToken,
  validateRefreshToken,
  extractBroadcasterAccountId,
  getAccountCacheTag,
  clearAccountCacheEntries,
} as const;
