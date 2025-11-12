import { afterEach, describe, expect, test, vi } from "vitest";
import type { Env } from "../src/index";

const mockValidateKickWebhook = vi.fn();
const mockRecordError = vi.fn();
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
const mockCommandReply = vi.fn(async (_event, _db, ctx) =>
  ctx.json({ message: "ok" }, { status: 200 })
);
const mockNotifyDeveloper = vi.fn();
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

vi.mock("../src/lib/functions/errors/notifyDeveloper", () => ({
  notifyDeveloperOfError: mockNotifyDeveloper,
}));

async function loadApp() {
  vi.resetModules();
  mockValidateKickWebhook.mockReset();
  mockRecordError.mockReset();
  mockRecordError.mockResolvedValue(undefined);
  mockGetDb.mockReset();
  mockGetDb.mockReturnValue({});
  mockFollowEvent.mockReset();
  mockLivestreamStatusUpdate.mockReset();
  mockNewSubscriber.mockReset();
  mockGiftedSubs.mockReset();
  mockRenewedSub.mockReset();
  mockKicksGifted.mockReset();
  mockCommandReply.mockReset();
  mockNotifyDeveloper.mockReset();
  mockNotifyDeveloper.mockResolvedValue(undefined);
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
  mockCommandReply.mockImplementation(async (_event, _db, ctx) =>
    ctx.json({ message: "ok" }, { status: 200 })
  );

  const { createApp } = await import("../src/lib/app/createApp");

  return createApp({
    webhook: {
      recordError: mockRecordError,
      getDb: mockGetDb,
      handlers: {
        followEvent: mockFollowEvent,
        livestreamStatusUpdate: mockLivestreamStatusUpdate,
        newSubscriber: mockNewSubscriber,
        giftedSubs: mockGiftedSubs,
        renewedSub: mockRenewedSub,
        kicksGifted: mockKicksGifted,
        commandReply: mockCommandReply,
      },
    },
  });
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
    expect(mockRecordError).not.toHaveBeenCalled();
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

  test("POST /webhook routes chat messages", async () => {
    const app = await loadApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "chat.message.sent",
      payload: { eventType: "chat.message.sent" },
    });

    const response = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(response.status).toBe(200);
    expect(mockCommandReply).toHaveBeenCalledTimes(1);
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
    expect(mockRecordError).toHaveBeenCalledTimes(1);

    const secondResponse = await app.request(
      "/webhook",
      { method: "POST", body: "{}" },
      {} as Env
    );

    expect(secondResponse.status).toBe(403);
    expect(await secondResponse.json()).toEqual({ error: "Unauthorized" });
    expect(mockRecordError).toHaveBeenCalledTimes(2);
  });

  test("POST /webhook records validation errors when DB configured", async () => {
    const app = await loadApp();
    const env = {
      DATABASE_URL: "postgres://example",
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
    expect(mockRecordError).toHaveBeenCalledTimes(1);

    const [recordedEnv, entry] = mockRecordError.mock.calls[0];
    expect(recordedEnv).toBe(env);
    expect(entry).toMatchObject({ message: "bad payload", status: 422 });
  });

  test("POST /webhook reports unexpected errors", async () => {
    const app = await loadApp();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValueOnce("boom");

    const env = {
      DATABASE_URL: "postgres://example",
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
    expect(mockRecordError).toHaveBeenCalledTimes(1);
  });

  test("GET /health responds with ok", async () => {
    const app = await loadApp();

    const response = await app.request("/health");

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("ok");
  });

  test("POST /debug/test-email returns 400 when developer email missing", async () => {
    const app = await loadApp();

    const response = await app.request(
      "/debug/test-email",
      { method: "POST", body: JSON.stringify({ message: "hello" }) },
      {} as Env
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: "Developer email not configured",
    });
    expect(mockNotifyDeveloper).not.toHaveBeenCalled();
  });

  test("POST /debug/test-email sends a test message", async () => {
    const app = await loadApp();
    mockNotifyDeveloper.mockResolvedValueOnce(undefined);

    const env = {
      DEVELOPER_EMAIL: "dev@example.com",
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.ai",
      MAILCHANNELS_DKIM_SELECTOR: "cleo",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "---key---",
      MAILCHANNELS_FROM_EMAIL: "cleo@example.com",
    } satisfies Partial<Env>;

    const response = await app.request(
      "/debug/test-email",
      {
        method: "POST",
        body: JSON.stringify({ message: "Ping" }),
        headers: { "Content-Type": "application/json" },
      },
      env as Env
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "sent" });
    expect(mockNotifyDeveloper).toHaveBeenCalledTimes(1);
    const [notifyEnv, entry, timestamp] = mockNotifyDeveloper.mock.calls[0];
    expect(notifyEnv).toBe(env);
    expect(entry).toMatchObject({
      message: "Ping",
      status: 200,
    });
    expect(typeof timestamp).toBe("string");
  });

  test("default index export initialises the app", async () => {
    const module = await import("../src/index");
    expect(module.default).toBeDefined();
  });
});
