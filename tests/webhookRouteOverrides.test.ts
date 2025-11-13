import { beforeEach, describe, expect, test, vi } from "vitest";
import type { AppEnv } from "../src/lib/app/types";

const routeMocks = vi.hoisted(() => {
  const recordError = vi.fn(async () => undefined);
  const getDb = vi.fn(() => ({ db: true }));

  const followEvent = vi.fn(async (_event, _db, ctx) => ctx.json({ ok: true }));
  const livestreamStatusUpdate = vi.fn(async (_event, _db, ctx) =>
    ctx.json({ ok: true })
  );
  const newSubscriber = vi.fn(async (_event, _db, ctx) =>
    ctx.json({ ok: true })
  );
  const giftedSubs = vi.fn(async (_event, _db, ctx) => ctx.json({ ok: true }));
  const renewedSub = vi.fn(async (_event, _db, ctx) => ctx.json({ ok: true }));
  const kicksGifted = vi.fn(async (_event, _db, ctx) => ctx.json({ ok: true }));
  const commandReply = vi.fn(async (_event, _db, ctx) =>
    ctx.json({ ok: true })
  );

  const dispatchWebhookEvent = vi.fn(
    async (_result, _db, _ctx, handlers) =>
      new Response(JSON.stringify({ handlers: Object.keys(handlers) }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
  );

  const createKickWebhookValidationMiddleware = vi.fn(
    (_recordErrorParam: unknown) =>
      async (c: any, next: () => Promise<void>) => {
        c.set("kickWebhook", {
          knownType: true,
          eventType: "channel.followed",
          payload: { ping: true },
        });
        await next();
      }
  );

  return {
    recordError,
    getDb,
    followEvent,
    livestreamStatusUpdate,
    newSubscriber,
    giftedSubs,
    renewedSub,
    kicksGifted,
    commandReply,
    dispatchWebhookEvent,
    createKickWebhookValidationMiddleware,
  } as const;
});

vi.mock("../src/lib/functions/errors/logError", () => ({
  __esModule: true,
  recordError: routeMocks.recordError,
}));

vi.mock("../src/lib/prisma", () => ({
  __esModule: true,
  getDb: routeMocks.getDb,
  Prisma: {},
}));

vi.mock("../src/lib/events/follow", () => ({
  __esModule: true,
  followEvent: routeMocks.followEvent,
}));

vi.mock("../src/lib/events/livestream", () => ({
  __esModule: true,
  livestreamStatusUpdate: routeMocks.livestreamStatusUpdate,
}));

vi.mock("../src/lib/events/subscriptions", () => ({
  __esModule: true,
  newSubscriber: routeMocks.newSubscriber,
  giftedSubs: routeMocks.giftedSubs,
  renewedSub: routeMocks.renewedSub,
}));

vi.mock("../src/lib/events/kicks", () => ({
  __esModule: true,
  kicksGifted: routeMocks.kicksGifted,
}));

vi.mock("../src/lib/events/chat", () => ({
  __esModule: true,
  commandReply: routeMocks.commandReply,
}));

vi.mock("../src/lib/app/handlers/dispatchWebhookEvent", () => ({
  __esModule: true,
  dispatchWebhookEvent: routeMocks.dispatchWebhookEvent,
}));

vi.mock("../src/lib/functions/middleware", () => ({
  __esModule: true,
  createKickWebhookValidationMiddleware:
    routeMocks.createKickWebhookValidationMiddleware,
}));

import { createApp } from "../src/lib/app/createApp";

const recordErrorMock = routeMocks.recordError;
const getDbMock = routeMocks.getDb;
const followEventMock = routeMocks.followEvent;
const livestreamStatusUpdateMock = routeMocks.livestreamStatusUpdate;
const newSubscriberMock = routeMocks.newSubscriber;
const giftedSubsMock = routeMocks.giftedSubs;
const renewedSubMock = routeMocks.renewedSub;
const kicksGiftedMock = routeMocks.kicksGifted;
const commandReplyMock = routeMocks.commandReply;
const dispatchWebhookEventMock = routeMocks.dispatchWebhookEvent;
const createKickWebhookValidationMiddlewareMock =
  routeMocks.createKickWebhookValidationMiddleware;

describe("registerWebhookRoute dependency resolution", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getDbMock.mockReturnValue({ db: true });
  });

  test("uses default dependencies when no overrides provided", async () => {
    const app = createApp();
    const originalDatabaseUrl = process.env.DATABASE_URL;
    process.env.DATABASE_URL = "postgres://default";

    try {
      const response = await app.request("/webhook", {
        method: "POST",
        body: "{}",
      });

      expect(createKickWebhookValidationMiddlewareMock).toHaveBeenCalledTimes(
        1
      );
      const [recordErrorArgument] =
        createKickWebhookValidationMiddlewareMock.mock.calls[0];
      expect(recordErrorArgument).toBe(recordErrorMock);

      expect(getDbMock).toHaveBeenCalledWith("postgres://default");
      expect(dispatchWebhookEventMock).toHaveBeenCalledTimes(1);
      const [result, db, _ctx, handlers] =
        dispatchWebhookEventMock.mock.calls[0];
      expect(result).toEqual({
        knownType: true,
        eventType: "channel.followed",
        payload: { ping: true },
      });
      expect(db).toEqual({ db: true });
      expect(handlers.followEvent).toBe(followEventMock);
      expect(handlers.commandReply).toBe(commandReplyMock);

      expect(response.status).toBe(200);
      const body = await response.json();
      expect(body.handlers).toContain("followEvent");
    } finally {
      if (originalDatabaseUrl === undefined) {
        delete process.env.DATABASE_URL;
      } else {
        process.env.DATABASE_URL = originalDatabaseUrl;
      }
    }
  });

  test("merges handler overrides while preserving defaults", async () => {
    const overrideFollow = vi.fn(async (_event, _db, ctx) =>
      ctx.json({ override: true })
    );
    const app = createApp({
      webhook: {
        handlers: {
          followEvent: overrideFollow,
        },
      },
    });

    await app.request("/webhook", { method: "POST", body: "{}" });

    expect(dispatchWebhookEventMock).toHaveBeenCalledTimes(1);
    const [, db, _ctx, handlers] = dispatchWebhookEventMock.mock.calls[0];
    expect(db).toEqual({ db: true });
    expect(handlers.followEvent).toBe(overrideFollow);
    expect(handlers.commandReply).toBe(commandReplyMock);
    expect(getDbMock).toHaveBeenCalledWith("");
  });
});
