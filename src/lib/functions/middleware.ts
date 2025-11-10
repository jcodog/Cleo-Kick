import type { MiddlewareHandler } from "hono";
import {
  KickWebhookError,
  KickWebhookSignatureError,
  validateKickWebhook,
  type KickWebhookValidationResult,
} from "./validateWebhook";
import type { ErrorLogEntry } from "./errors/logError";
import { Env } from "../..";
import { getDb } from "../prisma";
import {
  OAuth2AuthorizationUrl,
  Routes,
  type RESTPostOAuth2RefreshTokenResult,
} from "kick-api-types/rest";

export type AppVariables = {
  kickWebhook: KickWebhookValidationResult;
  kickBroadcasterAuth: KickBroadcasterAuth | null;
};

export interface KickBroadcasterAuth {
  accountId: string;
  accessToken: string;
}

const TOKEN_REFRESH_THRESHOLD_MS = 60_000;

export function createKickWebhookValidationMiddleware<
  AppEnv extends {
    Bindings: Env;
    Variables: AppVariables & Record<string, unknown>;
  }
>(
  recordError: (env: AppEnv["Bindings"], entry: ErrorLogEntry) => Promise<void>
): MiddlewareHandler<AppEnv> {
  return async (c, next) => {
    try {
      const result = await validateKickWebhook(c.req.raw);
      c.set("kickWebhook", result);

      const broadcasterAuth = await resolveBroadcasterAuth<AppEnv>(c, result);
      c.set("kickBroadcasterAuth", broadcasterAuth);
      await next();
    } catch (error) {
      await recordError(c.env, {
        message:
          error instanceof Error ? error.message : "Unknown webhook error",
        status: error instanceof KickWebhookError ? error.status : 500,
        context: {
          path: c.req.path,
          eventType: c.req.header("Kick-Event-Type"),
          messageId: c.req.header("Kick-Event-Message-Id"),
        },
      });

      if (error instanceof KickWebhookSignatureError) {
        console.warn("Rejected Kick webhook", { reason: error.message });
        return c.json({ error: "Unauthorized" }, error.status);
      }

      if (error instanceof KickWebhookError) {
        console.error("Invalid Kick webhook", { reason: error.message });
        return c.json({ error: error.message }, error.status);
      }

      console.error("Unexpected webhook failure", error);
      return c.json({ error: "Internal Server Error" }, 500);
    }
  };
}

async function resolveBroadcasterAuth<
  AppEnv extends {
    Bindings: Env;
    Variables: AppVariables & Record<string, unknown>;
  }
>(
  c: Parameters<MiddlewareHandler<AppEnv>>[0],
  result: KickWebhookValidationResult
): Promise<KickBroadcasterAuth | null> {
  const broadcasterAccountId = extractBroadcasterAccountId(result);
  if (!broadcasterAccountId) {
    return null;
  }

  const databaseUrl = c.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("Missing DATABASE_URL binding");
  }

  const db = getDb(databaseUrl);
  const account = await db.account.findFirst({
    where: { accountId: broadcasterAccountId },
    select: {
      id: true,
      accountId: true,
      accessToken: true,
      refreshToken: true,
      accessTokenExpiresAt: true,
      refreshTokenExpiresAt: true,
    },
  });

  if (!account) {
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
      throw new Error(
        `Kick broadcaster account ${account.accountId} is missing a refresh token`
      );
    }

    const clientId = c.env.KICK_CLIENT_ID;
    const clientSecret = c.env.KICK_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      throw new Error("Missing Kick OAuth client credentials");
    }

    const refreshed = await refreshAccessToken({
      refreshToken: account.refreshToken,
      clientId,
      clientSecret,
    });

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
  }

  if (!account.accessToken) {
    throw new Error(
      `Kick broadcaster account ${account.accountId} does not have a valid access token`
    );
  }

  return {
    accountId: account.accountId,
    accessToken: account.accessToken,
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
