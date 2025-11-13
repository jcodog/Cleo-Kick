import { afterEach, describe, expect, test, vi } from "vitest";
import { Hono } from "hono";
import type { KickWebhookValidationResult } from "../src/lib/functions/validateWebhook";
import * as middleware from "../src/lib/functions/middleware";
import type { KickBroadcasterAuth } from "../src/lib/functions/middleware";

const { createKickWebhookValidationMiddleware, formatStepMeta, __test } =
  middleware;

const mocks = vi.hoisted(() => {
  const validateWebhook = vi.fn();
  const mockDb = {
    account: {
      findFirst: vi.fn(),
      update: vi.fn(),
    },
    $accelerate: {
      invalidate: vi.fn(),
      invalidateAll: vi.fn(),
    },
  };
  const getDb = vi.fn(() => mockDb);

  class PrismaClientKnownRequestError extends Error {
    code: string;

    constructor(message: string, code: string) {
      super(message);
      this.name = "PrismaClientKnownRequestError";
      this.code = code;
    }
  }

  const Prisma = { PrismaClientKnownRequestError } as const;

  class KickWebhookError extends Error {
    status: number;

    constructor(message: string, status = 400) {
      super(message);
      this.name = "KickWebhookError";
      this.status = status;
    }
  }

  class KickWebhookSignatureError extends KickWebhookError {
    constructor(message: string) {
      super(message, 403);
      this.name = "KickWebhookSignatureError";
    }
  }

  return {
    validateWebhook,
    KickWebhookError,
    KickWebhookSignatureError,
    mockDb,
    getDb,
    Prisma,
  } as const;
});

vi.mock("../src/lib/functions/validateWebhook", () => ({
  validateKickWebhook: mocks.validateWebhook,
  KickWebhookError: mocks.KickWebhookError,
  KickWebhookSignatureError: mocks.KickWebhookSignatureError,
}));

vi.mock("../src/lib/prisma", () => ({
  getDb: mocks.getDb,
  Prisma: mocks.Prisma,
}));

const {
  validateWebhook: mockValidateKickWebhook,
  KickWebhookError: MockKickWebhookError,
  KickWebhookSignatureError: MockKickWebhookSignatureError,
  mockDb,
  getDb: mockGetDb,
} = mocks;

afterEach(() => {
  vi.clearAllMocks();
  vi.unstubAllGlobals();
  mockDb.account.findFirst.mockReset();
  mockDb.account.update.mockReset();
  mockDb.$accelerate.invalidate.mockReset();
  mockDb.$accelerate.invalidateAll.mockReset();
  mockGetDb.mockReset();
  mockValidateKickWebhook.mockReset();
});

type TestEnv = {
  Bindings: Record<string, unknown>;
  Variables: {
    kickWebhook: KickWebhookValidationResult;
    kickBroadcasterAuth: KickBroadcasterAuth | null;
  };
};

function buildApp({
  recordError = vi.fn().mockResolvedValue(undefined),
  bindings = {},
}: {
  recordError?: (env: TestEnv["Bindings"], entry: unknown) => Promise<void>;
  bindings?: TestEnv["Bindings"];
} = {}) {
  const app = new Hono<TestEnv>();
  app.use("*", createKickWebhookValidationMiddleware<TestEnv>(recordError));
  app.post("/", (c) => {
    const result = c.get("kickWebhook");
    return c.json({
      eventType: result.eventType,
      broadcasterAuth:
        (c.get("kickBroadcasterAuth") as KickBroadcasterAuth | null) ?? null,
    });
  });
  return { app, recordError, bindings } as const;
}

describe("createKickWebhookValidationMiddleware", () => {
  test("stores validated webhook on context and calls next handler", async () => {
    const { app, recordError, bindings } = buildApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "chat.message.sent",
      messageId: "msg-1",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: { eventType: "chat.message.sent" },
    });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      eventType: "chat.message.sent",
      broadcasterAuth: null,
    });
    expect(mockValidateKickWebhook).toHaveBeenCalledTimes(1);
    expect(recordError).not.toHaveBeenCalled();
  });

  test("handles signature errors by returning 403 and logging once", async () => {
    const recordError = vi.fn().mockResolvedValue(undefined);
    const { app, bindings } = buildApp({ recordError });
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValueOnce(
      new MockKickWebhookSignatureError("bad signature")
    );

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({ error: "Unauthorized" });
    expect(recordError).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith("Rejected Kick webhook", {
      reason: "bad signature",
    });

    warnSpy.mockRestore();
  });

  test("handles typed webhook errors with custom message", async () => {
    const recordError = vi.fn().mockResolvedValue(undefined);
    const { app, bindings } = buildApp({ recordError });

    mockValidateKickWebhook.mockRejectedValueOnce(
      new MockKickWebhookError("bad payload", 422)
    );

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({ error: "bad payload" });
    expect(recordError).toHaveBeenCalledTimes(1);
  });

  test("handles unexpected failures with 500 response", async () => {
    const recordError = vi.fn().mockResolvedValue(undefined);
    const { app, bindings } = buildApp({ recordError });
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValueOnce(new Error("boom"));

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(recordError).toHaveBeenCalledTimes(1);
    expect(
      errorSpy.mock.calls.some(([message]) =>
        String(message).includes("Unexpected webhook failure")
      )
    ).toBe(true);

    errorSpy.mockRestore();
  });

  test("populates broadcaster auth when account has valid token", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-1",
      accountId: "123",
      accessToken: "valid-token",
      refreshToken: "refresh-token",
      accessTokenExpiresAt: new Date(Date.now() + 120_000),
      refreshTokenExpiresAt: null,
    });

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-2",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: 123 },
      },
    });

    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    const { app } = buildApp({ bindings });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(await response.json()).toEqual({
      eventType: "channel.followed",
      broadcasterAuth: { accountId: "123", accessToken: "valid-token" },
    });
    expect(mockDb.account.findFirst).toHaveBeenCalledWith({
      where: { accountId: "123" },
      select: {
        id: true,
        accountId: true,
        accessToken: true,
        refreshToken: true,
        accessTokenExpiresAt: true,
        refreshTokenExpiresAt: true,
      },
      cacheStrategy: {
        ttl: 60 * 60,
        tags: ["account_123"],
      },
    });
    expect(mockDb.account.update).not.toHaveBeenCalled();
    expect(mockDb.$accelerate.invalidate).not.toHaveBeenCalled();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  test("refreshes token when access token is missing or expired", async () => {
    mockGetDb.mockReturnValue(mockDb);
    const now = Date.now();
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-2",
      accountId: "456",
      accessToken: "stale-token",
      refreshToken: "refresh-token",
      accessTokenExpiresAt: new Date(now - 5_000),
      refreshTokenExpiresAt: null,
    });

    const newToken = "new-access";
    const newRefresh = "new-refresh";

    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        access_token: newToken,
        refresh_token: newRefresh,
        expires_in: 3600,
        token_type: "bearer",
        scope: "",
      }),
    });
    vi.stubGlobal("fetch", fetchSpy);

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-3",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "456" },
      },
    });

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    const { app } = buildApp({ bindings });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    const json = (await response.json()) as {
      eventType: string;
      broadcasterAuth: KickBroadcasterAuth | null;
    };
    expect(json.eventType).toBe("channel.followed");
    expect(json.broadcasterAuth).toEqual({
      accountId: "456",
      accessToken: newToken,
    });

    expect(fetchSpy).toHaveBeenCalledWith(
      "https://id.kick.com" + "/oauth/token",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        }),
      })
    );
    expect(mockDb.account.update).toHaveBeenCalledWith({
      where: { id: "acct-2" },
      data: expect.objectContaining({
        accessToken: newToken,
        refreshToken: newRefresh,
      }),
    });
    expect(mockDb.$accelerate.invalidate).toHaveBeenCalledWith({
      tags: ["account_456"],
    });
  });

  test("logs a warning when cache invalidation is rate limited", async () => {
    mockGetDb.mockReturnValue(mockDb);
    const now = Date.now();
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-rate-limited",
      accountId: "654",
      accessToken: "expired-token",
      refreshToken: "refresh-token",
      accessTokenExpiresAt: new Date(now - 10_000),
      refreshTokenExpiresAt: null,
    });

    mockDb.$accelerate.invalidate.mockRejectedValueOnce({
      code: "P6003",
      message: "rate limit",
    });

    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        access_token: "refreshed-token",
        refresh_token: "refresh-token",
        expires_in: 3600,
        token_type: "bearer",
      }),
    });
    vi.stubGlobal("fetch", fetchSpy);

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-cache-rate-limited",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "654" },
      },
    });

    const { app } = buildApp({ bindings });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(200);
    expect(mockDb.account.update).toHaveBeenCalledWith({
      where: { id: "acct-rate-limited" },
      data: expect.objectContaining({ accessToken: "refreshed-token" }),
    });
    expect(mockDb.$accelerate.invalidate).toHaveBeenCalledWith({
      tags: ["account_654"],
    });
    expect(warnSpy).toHaveBeenCalledWith(
      "Accelerate cache invalidation rate limited",
      {
        broadcasterAccountId: "654",
        cacheTag: "account_654",
      }
    );

    warnSpy.mockRestore();
  });

  test("logs a warning when cache invalidation fails", async () => {
    mockGetDb.mockReturnValue(mockDb);
    const now = Date.now();
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-3",
      accountId: "654",
      accessToken: "expired-token",
      refreshToken: "refresh-token",
      accessTokenExpiresAt: new Date(now - 10_000),
      refreshTokenExpiresAt: null,
    });

    const newToken = "refreshed-token";
    mockDb.$accelerate.invalidate.mockRejectedValueOnce(
      new Error("accelerate down")
    );

    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        access_token: newToken,
        refresh_token: "refresh-token",
        expires_in: 3600,
        token_type: "bearer",
      }),
    });
    vi.stubGlobal("fetch", fetchSpy);

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-cache",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "654" },
      },
    });

    const { app } = buildApp({ bindings });
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    const json = (await response.json()) as {
      eventType: string;
      broadcasterAuth: KickBroadcasterAuth | null;
    };

    expect(response.status).toBe(200);
    expect(json.broadcasterAuth).toEqual({
      accountId: "654",
      accessToken: newToken,
    });
    expect(mockDb.account.update).toHaveBeenCalledWith({
      where: { id: "acct-3" },
      data: expect.objectContaining({ accessToken: newToken }),
    });
    expect(mockDb.$accelerate.invalidate).toHaveBeenCalledWith({
      tags: ["account_654"],
    });
    expect(warnSpy).toHaveBeenCalledWith(
      "Failed to invalidate account cache",
      expect.objectContaining({
        broadcasterAccountId: "654",
        cacheTag: "account_654",
        error: "accelerate down",
      })
    );

    warnSpy.mockRestore();
  });

  test("returns null broadcaster auth when account is not registered", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockDb.account.findFirst.mockResolvedValueOnce(null);

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-4",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster_user_id: "789",
      },
    });

    const bindings = {
      DATABASE_URL: "postgres://example",
    } satisfies TestEnv["Bindings"];

    const { app } = buildApp({ bindings });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(200);
    const json = (await response.json()) as {
      eventType?: string;
      broadcasterAuth: KickBroadcasterAuth | null;
    };
    expect(json.broadcasterAuth).toBeNull();
    expect(mockDb.account.findFirst).toHaveBeenCalled();
    expect(mockDb.$accelerate.invalidate).not.toHaveBeenCalled();
  });

  test("returns 500 when database binding is missing", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-db",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "999" },
      },
    });

    const recordError = vi.fn().mockResolvedValue(undefined);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { app } = buildApp({ recordError });
    const bindings = {} satisfies TestEnv["Bindings"];

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(recordError).toHaveBeenCalledWith(
      bindings,
      expect.objectContaining({
        message: "Missing DATABASE_URL binding",
      })
    );
    expect(mockDb.account.findFirst).not.toHaveBeenCalled();
    expect(mockDb.$accelerate.invalidate).not.toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("returns 500 when broadcaster account is missing a refresh token", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-3",
      accountId: "234",
      accessToken: null,
      refreshToken: null,
      accessTokenExpiresAt: null,
      refreshTokenExpiresAt: null,
    });

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-5",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "234" },
      },
    });

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    const recordError = vi.fn().mockResolvedValue(undefined);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { app } = buildApp({ bindings, recordError });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(recordError).toHaveBeenCalledWith(
      bindings,
      expect.objectContaining({
        message: expect.stringContaining("missing a refresh token"),
      })
    );
    expect(mockDb.account.update).not.toHaveBeenCalled();
    expect(mockDb.$accelerate.invalidate).not.toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("returns 500 when Kick OAuth credentials are missing", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-4",
      accountId: "345",
      accessToken: null,
      refreshToken: "refresh-token",
      accessTokenExpiresAt: null,
      refreshTokenExpiresAt: null,
    });

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-6",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "345" },
      },
    });

    const bindings = {
      DATABASE_URL: "postgres://example",
    } satisfies TestEnv["Bindings"];

    const recordError = vi.fn().mockResolvedValue(undefined);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { app } = buildApp({ bindings, recordError });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(recordError).toHaveBeenCalledWith(
      bindings,
      expect.objectContaining({
        message: expect.stringContaining(
          "Missing Kick OAuth client credentials"
        ),
      })
    );
    expect(mockDb.account.update).not.toHaveBeenCalled();
    expect(mockDb.account.findFirst).toHaveBeenCalledTimes(1);
    expect(mockDb.$accelerate.invalidate).not.toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("returns 500 when refreshing the access token fails", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-5",
      accountId: "456",
      accessToken: "stale-token",
      refreshToken: "refresh-token",
      accessTokenExpiresAt: new Date(Date.now() - 10_000),
      refreshTokenExpiresAt: null,
    });

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-7",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "456" },
      },
    });

    const fetchSpy = vi.fn().mockResolvedValue({
      ok: false,
      status: 502,
      text: async () => {
        throw new Error("unreadable");
      },
    });
    vi.stubGlobal("fetch", fetchSpy);

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    const recordError = vi.fn().mockResolvedValue(undefined);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { app } = buildApp({ bindings, recordError });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(recordError).toHaveBeenCalledWith(
      bindings,
      expect.objectContaining({
        message: expect.stringContaining("Failed to refresh Kick access token"),
      })
    );
    expect(fetchSpy).toHaveBeenCalled();
    expect(mockDb.$accelerate.invalidate).not.toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("returns 500 when refresh response omits an access token", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-6",
      accountId: "567",
      accessToken: "stale-token",
      refreshToken: "refresh-token",
      accessTokenExpiresAt: new Date(Date.now() - 10_000),
      refreshTokenExpiresAt: null,
    });

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-8",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "567" },
      },
    });

    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        refresh_token: "new-refresh",
        expires_in: 3600,
      }),
    });
    vi.stubGlobal("fetch", fetchSpy);

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    const recordError = vi.fn().mockResolvedValue(undefined);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { app } = buildApp({ bindings, recordError });

    const response = await app.request(
      "/",
      { method: "POST", body: "{}" },
      bindings
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(recordError).toHaveBeenCalledWith(
      bindings,
      expect.objectContaining({
        message: "Kick refresh response did not include an access_token",
      })
    );
    expect(fetchSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });
});

describe("resolveBroadcasterAuth (internal)", () => {
  test("returns null when broadcaster id is missing without a step logger", async () => {
    const result = {
      knownType: true,
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
      },
      eventType: "channel.followed",
      eventVersion: "1",
      messageId: "internal-1",
      timestamp: new Date().toISOString(),
      signature: "sig",
      rawBody: "{}",
    } as unknown as KickWebhookValidationResult;

    const auth = await __test.resolveBroadcasterAuth(
      { env: {} } as any,
      result
    );

    expect(auth).toBeNull();
    expect(mockGetDb).not.toHaveBeenCalled();
  });

  test("formats account cache tag with sanitized characters", () => {
    expect(__test.getAccountCacheTag("abc-123:XYZ")).toBe(
      "account_abc_123_XYZ"
    );
  });

  test("formats account cache tag when id is empty", () => {
    expect(__test.getAccountCacheTag("")).toBe("account__");
  });

  test("reuses stored refresh token when the refresh response omits one", async () => {
    mockGetDb.mockReturnValue(mockDb);
    mockDb.account.findFirst.mockResolvedValueOnce({
      id: "acct-internal",
      accountId: "777",
      accessToken: null,
      refreshToken: "persisted-refresh",
      accessTokenExpiresAt: undefined,
      refreshTokenExpiresAt: null,
    });
    mockDb.account.update.mockResolvedValueOnce(undefined);

    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        access_token: "refreshed-token",
        expires_in: 600,
        token_type: "bearer",
      }),
    });
    vi.stubGlobal("fetch", fetchSpy);

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    const result = {
      knownType: true,
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "777" },
      },
      eventType: "channel.followed",
      eventVersion: "1",
      messageId: "internal-2",
      timestamp: new Date().toISOString(),
      signature: "sig",
      rawBody: "{}",
    } as unknown as KickWebhookValidationResult;

    const auth = await __test.resolveBroadcasterAuth(
      { env: bindings } as any,
      result
    );

    expect(auth).toEqual({
      accountId: "777",
      accessToken: "refreshed-token",
    });
    expect(mockDb.account.update).toHaveBeenCalledWith({
      where: { id: "acct-internal" },
      data: expect.objectContaining({
        refreshToken: "persisted-refresh",
      }),
    });
    expect(mockDb.$accelerate.invalidate).toHaveBeenCalledWith({
      tags: ["account_777"],
    });
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  test("refreshes token even when Accelerate invalidate is unavailable", async () => {
    const dbWithoutAccelerate = {
      account: {
        findFirst: vi.fn().mockResolvedValue({
          id: "acct-lite",
          accountId: "888",
          accessToken: null,
          refreshToken: "refresh-token",
          accessTokenExpiresAt: null,
          refreshTokenExpiresAt: null,
        }),
        update: vi.fn().mockResolvedValue(undefined),
      },
    };

    mockGetDb.mockReturnValueOnce(dbWithoutAccelerate as any);

    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        access_token: "fresh-token",
        refresh_token: "refresh-token",
        expires_in: 1800,
        token_type: "bearer",
      }),
    });
    vi.stubGlobal("fetch", fetchSpy);

    const bindings = {
      DATABASE_URL: "postgres://example",
      KICK_CLIENT_ID: "client",
      KICK_CLIENT_SECRET: "secret",
    } satisfies TestEnv["Bindings"];

    const result = {
      knownType: true,
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster: { user_id: "888" },
      },
      eventType: "channel.followed",
      eventVersion: "1",
      messageId: "internal-lite",
      timestamp: new Date().toISOString(),
      signature: "sig",
      rawBody: "{}",
    } as unknown as KickWebhookValidationResult;

    const auth = await __test.resolveBroadcasterAuth(
      { env: bindings } as any,
      result
    );

    expect(auth).toEqual({
      accountId: "888",
      accessToken: "fresh-token",
    });
    expect(dbWithoutAccelerate.account.update).toHaveBeenCalledWith({
      where: { id: "acct-lite" },
      data: expect.objectContaining({ accessToken: "fresh-token" }),
    });
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  test("extracts broadcaster id from fallback payload shape", () => {
    const result = {
      knownType: true,
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster_user_id: 91234,
      },
      eventType: "channel.followed",
      eventVersion: "1",
      messageId: "internal-3",
      timestamp: new Date().toISOString(),
      signature: "sig",
      rawBody: "{}",
    } as unknown as KickWebhookValidationResult;

    expect(__test.extractBroadcasterAccountId(result)).toBe("91234");
  });

  test("returns null when fallback broadcaster id is invalid", () => {
    const result = {
      knownType: true,
      payload: {
        eventType: "channel.followed",
        eventVersion: "1",
        broadcaster_user_id: "   ",
      },
      eventType: "channel.followed",
      eventVersion: "1",
      messageId: "internal-4",
      timestamp: new Date().toISOString(),
      signature: "sig",
      rawBody: "{}",
    } as unknown as KickWebhookValidationResult;

    expect(__test.extractBroadcasterAccountId(result)).toBeNull();
  });
});

describe("formatStepMeta", () => {
  test("omits output when meta is empty or undefined", () => {
    expect(formatStepMeta()).toBe("");
    expect(formatStepMeta({ skip: undefined })).toBe("");
  });

  test("formats supported value types", () => {
    const stamp = new Date("2024-01-01T00:00:00.000Z");
    const formatted = formatStepMeta({
      nothing: null,
      text: "value",
      count: 5,
      flag: false,
      stamp,
      extra: { nested: true },
    });

    expect(formatted).toBe(
      ` nothing=null text="value" count=5 flag=false stamp="${stamp.toISOString()}" extra={"nested":true}`
    );
  });
});
