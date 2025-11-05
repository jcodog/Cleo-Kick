import { afterEach, describe, expect, test, vi } from "vitest";
import type { D1Database } from "@cloudflare/workers-types";
import type { Env } from "../src/index";

const mockValidateKickWebhook = vi.fn();
const mockLogErrorToD1 = vi.fn();
const mockNotifyDeveloperOfError = vi.fn();
const mockGetDb = vi.fn();
const mockFollowEvent = vi.fn(async (_event, _db, ctx) =>
  ctx.json({ received: true }, { status: 200 })
);
const mockLivestreamStatusUpdate = vi.fn(async (_event, _db, ctx) =>
  ctx.json({ recieved: true }, { status: 200 })
);
const mockNewSubscriber = vi.fn(async (_event, _db, ctx) =>
  ctx.json({ message: "ok" }, { status: 200 })
);
const mockGiftedSubs = vi.fn(async (_event, _db, ctx) =>
  ctx.json({ message: "ok" }, { status: 200 })
);
const mockRenewedSub = vi.fn(async (_event, _db, ctx) =>
  ctx.json({ message: "ok" }, { status: 200 })
);
const mockKicksGifted = vi.fn(async (_event, _db, ctx) =>
  ctx.json({ message: "ok" }, { status: 200 })
);
class MockKickWebhookError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "KickWebhookError";
    this.status = status;
  }
}

class MockKickWebhookSignatureError extends MockKickWebhookError {
  constructor(message: string) {
    super(message, 403);
    this.name = "KickWebhookSignatureError";
  }
}

vi.mock("../src/lib/functions/validateWebhook", () => ({
  __esModule: true,
  validateKickWebhook: mockValidateKickWebhook,
  KickWebhookError: MockKickWebhookError,
  KickWebhookSignatureError: MockKickWebhookSignatureError,
}));

vi.mock("../src/lib/functions/errors/logError", () => ({
  __esModule: true,
  logErrorToD1: mockLogErrorToD1,
}));

vi.mock("../src/lib/functions/errors/notifyDeveloper", () => ({
  __esModule: true,
  notifyDeveloperOfError: mockNotifyDeveloperOfError,
}));

vi.mock("../src/lib/prisma", () => ({
  __esModule: true,
  getDb: mockGetDb,
}));

vi.mock("../src/lib/events/follow", () => ({
  __esModule: true,
  followEvent: mockFollowEvent,
}));

vi.mock("../src/lib/events/livestream", () => ({
  __esModule: true,
  livestreamStatusUpdate: mockLivestreamStatusUpdate,
}));

vi.mock("../src/lib/events/subscriptions", () => ({
  __esModule: true,
  newSubscriber: mockNewSubscriber,
  giftedSubs: mockGiftedSubs,
  renewedSub: mockRenewedSub,
}));

vi.mock("../src/lib/events/kicks", () => ({
  __esModule: true,
  kicksGifted: mockKicksGifted,
}));

async function loadApp() {
  vi.resetModules();
  mockValidateKickWebhook.mockReset();
  mockLogErrorToD1.mockReset();
  mockNotifyDeveloperOfError.mockReset();
  mockGetDb.mockReset();
  mockGetDb.mockReturnValue({});
  mockFollowEvent.mockReset();
  mockLivestreamStatusUpdate.mockReset();
  mockNewSubscriber.mockReset();
  mockGiftedSubs.mockReset();
  mockRenewedSub.mockReset();
  mockKicksGifted.mockReset();
  mockFollowEvent.mockImplementation(async (_event, _db, ctx) =>
    ctx.json({ received: true }, { status: 200 })
  );
  mockLivestreamStatusUpdate.mockImplementation(async (_event, _db, ctx) =>
    ctx.json({ recieved: true }, { status: 200 })
  );
  mockNewSubscriber.mockImplementation(async (_event, _db, ctx) =>
    ctx.json({ message: "ok" }, { status: 200 })
  );
  mockGiftedSubs.mockImplementation(async (_event, _db, ctx) =>
    ctx.json({ message: "ok" }, { status: 200 })
  );
  mockRenewedSub.mockImplementation(async (_event, _db, ctx) =>
    ctx.json({ message: "ok" }, { status: 200 })
  );
  mockKicksGifted.mockImplementation(async (_event, _db, ctx) =>
    ctx.json({ message: "ok" }, { status: 200 })
  );
  return (await import("../src/index")).default;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("index routes", () => {
  test("GET / returns error when dashboard url missing", async () => {
    const app = await loadApp();

    const response = await app.request("/", {}, {} as Env);

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      error: "Dashboard URL not configured",
    });
  });

  test("GET / redirects to configured dashboard", async () => {
    const app = await loadApp();
    const env = {
      DASHBOARD_URL: "https://dashboard.cleo.dev",
    } satisfies Partial<Env>;

    const response = await app.request("/", {}, env as Env);

    expect(response.status).toBe(302);
    expect(response.headers.get("location")).toBe("https://dashboard.cleo.dev");
  });

  test("POST /webhook returns success when validation passes", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.followed",
      messageId: "msg-1",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: { eventType: "channel.followed" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ received: true });
    expect(mockValidateKickWebhook).toHaveBeenCalledTimes(1);
    expect(mockLogErrorToD1).not.toHaveBeenCalled();
    expect(mockNotifyDeveloperOfError).not.toHaveBeenCalled();
  });

  test("POST /webhook handles livestream status updates", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "livestream.status.updated",
      payload: { eventType: "livestream.status.updated" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(200);
    expect(mockLivestreamStatusUpdate).toHaveBeenCalledTimes(1);
  });

  test("POST /webhook handles new subscriptions", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.subscription.new",
      payload: { eventType: "channel.subscription.new" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(200);
    expect(mockNewSubscriber).toHaveBeenCalledTimes(1);
  });

  test("POST /webhook handles gifted subscriptions", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.subscription.gifts",
      payload: { eventType: "channel.subscription.gifts" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(200);
    expect(mockGiftedSubs).toHaveBeenCalledTimes(1);
  });

  test("POST /webhook handles subscription renewals", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "channel.subscription.renewal",
      payload: { eventType: "channel.subscription.renewal" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(200);
    expect(mockRenewedSub).toHaveBeenCalledTimes(1);
  });

  test("POST /webhook handles gifted kicks", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "kicks.gifted",
      payload: { eventType: "kicks.gifted" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(200);
    expect(mockKicksGifted).toHaveBeenCalledTimes(1);
  });

  test("POST /webhook returns 422 for unknown event types", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: false,
      eventType: "unexpected.event",
      payload: { some: "payload" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({ message: "Unknown event type" });
  });

  test("POST /webhook rejects requests with bad signatures", async () => {
    const app = await loadApp();
    const { KickWebhookSignatureError } = await import(
      "../src/lib/functions/validateWebhook"
    );
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValue(
      new KickWebhookSignatureError("invalid signature")
    );

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({ error: "Unauthorized" });
    expect(mockLogErrorToD1).not.toHaveBeenCalled();

    const missingWarnCount = warnSpy.mock.calls.filter(([message]) =>
      String(message).includes("Missing ERROR_LOG_DB binding")
    ).length;
    expect(missingWarnCount).toBe(1);

    warnSpy.mockClear();

    const secondResponse = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(secondResponse.status).toBe(403);
    expect(await secondResponse.json()).toEqual({ error: "Unauthorized" });
    expect(
      warnSpy.mock.calls.some(([message]) =>
        String(message).includes("Missing ERROR_LOG_DB binding")
      )
    ).toBe(false);

    expect(mockLogErrorToD1).not.toHaveBeenCalled();
    expect(mockNotifyDeveloperOfError).toHaveBeenCalledTimes(2);
  });

  test("POST /webhook records validation errors when DB configured", async () => {
    const app = await loadApp();
    const env = {
      ERROR_LOG_DB: { prepared: true } as unknown as D1Database,
      MAILCHANNELS_API_KEY: "key",
    } satisfies Partial<Env>;

    const { KickWebhookError } = await import(
      "../src/lib/functions/validateWebhook"
    );

    mockValidateKickWebhook.mockRejectedValueOnce(
      new KickWebhookError("bad payload", 422)
    );

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      env as Env
    );

    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({ error: "bad payload" });
    expect(mockLogErrorToD1).toHaveBeenCalledTimes(1);
    expect(mockNotifyDeveloperOfError).toHaveBeenCalledTimes(1);
  });

  test("recordError tolerates downstream failures", async () => {
    const app = await loadApp();
    const env = {
      ERROR_LOG_DB: { prepared: true } as unknown as D1Database,
    } satisfies Partial<Env>;

    const { KickWebhookError } = await import(
      "../src/lib/functions/validateWebhook"
    );
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValueOnce(
      new KickWebhookError("oops", 400)
    );
    mockLogErrorToD1.mockRejectedValueOnce(new Error("db down"));
    mockNotifyDeveloperOfError.mockRejectedValueOnce(new Error("mail down"));

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      env as Env
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "oops" });
    expect(
      errorSpy.mock.calls.filter(([message]) =>
        String(message).includes("Failed to persist error log")
      ).length
    ).toBe(1);
    expect(
      errorSpy.mock.calls.filter(([message]) =>
        String(message).includes("Failed to send developer notification")
      ).length
    ).toBe(1);
  });

  test("POST /webhook reports unexpected errors", async () => {
    const app = await loadApp();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValueOnce("boom");

    const env = {
      ERROR_LOG_DB: { prepared: true } as unknown as D1Database,
    } satisfies Partial<Env>;

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      env as Env
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(
      errorSpy.mock.calls.some(([message]) =>
        String(message).includes("Unexpected webhook failure")
      )
    ).toBe(true);
  });

  test("GET /health responds with ok", async () => {
    const app = await loadApp();

    const response = await app.request("/health");

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("ok");
  });
});
