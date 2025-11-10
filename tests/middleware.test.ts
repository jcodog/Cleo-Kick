import { afterEach, describe, expect, test, vi } from "vitest";
import { Hono } from "hono";
import type { KickWebhookValidationResult } from "../src/lib/functions/validateWebhook";
import { createKickWebhookValidationMiddleware } from "../src/lib/functions/middleware";
import type { KickBroadcasterAuth } from "../src/lib/functions/middleware";

const mocks = vi.hoisted(() => {
  const validateWebhook = vi.fn();
  const mockDb = {
    account: {
      findFirst: vi.fn(),
      update: vi.fn(),
    },
  };
  const getDb = vi.fn(() => mockDb);

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
  } as const;
});

vi.mock("../src/lib/functions/validateWebhook", () => ({
  validateKickWebhook: mocks.validateWebhook,
  KickWebhookError: mocks.KickWebhookError,
  KickWebhookSignatureError: mocks.KickWebhookSignatureError,
}));

vi.mock("../src/lib/prisma", () => ({
  getDb: mocks.getDb,
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
    });
    expect(mockDb.account.update).not.toHaveBeenCalled();
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

    const json = await response.json();
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
  });
});
