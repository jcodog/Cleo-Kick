import { describe, expect, test, vi, beforeEach } from "vitest";
import type {
  ChannelFollowEvent,
  LivestreamStatusUpdatedEvent,
  NewSubscriptionEvent,
  SubscriptionGiftEvent,
  SubscriptionRenewalEvent,
  KicksGiftedEvent,
} from "kick-api-types/payloads";
import { followEvent } from "../src/lib/events/follow";
import { livestreamStatusUpdate } from "../src/lib/events/livestream";
import {
  newSubscriber,
  giftedSubs,
  renewedSub,
} from "../src/lib/events/subscriptions";
import { kicksGifted } from "../src/lib/events/kicks";
import type { DbClient } from "../src/lib/prisma";
import type { context } from "../src";

const mocks = vi.hoisted(() => ({
  sendMessage: vi.fn(),
}));

vi.mock("../src/lib/functions/messages", () => ({
  sendMessage: mocks.sendMessage,
}));

const mockSendMessage = mocks.sendMessage;

type JsonResponse = { body: unknown; init?: { status?: number } };

function createMockContext() {
  const json = vi
    .fn<(body: unknown, init?: { status?: number }) => JsonResponse>()
    .mockImplementation((body, init) => ({
      body,
      init,
    }));
  return { ctx: { json } as unknown as context, json } as const;
}

function createDbMock(broadcaster: unknown) {
  const findFirst = vi.fn().mockResolvedValue(broadcaster);
  const db = { account: { findFirst } };
  return { db: db as unknown as DbClient, findFirst } as const;
}

beforeEach(() => {
  mockSendMessage.mockReset();
});

describe("followEvent", () => {
  test("returns 404 when broadcaster is not registered", async () => {
    const { db } = createDbMock(null);
    const { ctx, json } = createMockContext();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const event = {
      eventType: "channel.followed",
      broadcaster: { username: "Streamer", user_id: 123 },
      follower: { username: "Viewer" },
    } as unknown as ChannelFollowEvent;

    const response = await followEvent(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { message: "Broadcaster not registered" },
      { status: 404 }
    );
    expect(response).toEqual({
      body: { message: "Broadcaster not registered" },
      init: { status: 404 },
    });
    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith(
      `[event:${event.eventType}:error] Broadcaster ${event.broadcaster.username}[${event.broadcaster.user_id}] is not registered.`
    );

    errorSpy.mockRestore();
  });

  test("thanks the follower when a broadcaster is registered", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "delivered",
      status: 204,
    });

    const event = {
      eventType: "channel.followed",
      broadcaster: { username: "Streamer", user_id: 123 },
      follower: { username: "Viewer" },
    } as unknown as ChannelFollowEvent;

    const response = await followEvent(event, db, ctx);

    expect(mockSendMessage).toHaveBeenCalledWith({
      broadcaster: { name: "Streamer", accessToken: "token" },
      message: "@Viewer, thank you for following Streamer's channel.",
    });
    expect(json).toHaveBeenCalledWith(
      { message: "delivered" },
      { status: 204 }
    );
    expect(response).toEqual({
      body: { message: "delivered" },
      init: { status: 204 },
    });
  });

  test("propagates chat failure responses", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "rate limited",
      status: 429,
    });

    const event = {
      eventType: "channel.followed",
      broadcaster: { username: "Streamer", user_id: 123 },
      follower: { username: "Viewer" },
    } as unknown as ChannelFollowEvent;

    await followEvent(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { message: "rate limited" },
      { status: 429 }
    );
  });
});

describe("livestreamStatusUpdate", () => {
  test("returns acknowledgement when broadcaster missing", async () => {
    const { db } = createDbMock(null);
    const { ctx, json } = createMockContext();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const event = {
      eventType: "livestream.status.updated",
      broadcaster: { username: "Streamer", user_id: 123 },
      is_live: true,
    } as unknown as LivestreamStatusUpdatedEvent;

    const response = await livestreamStatusUpdate(event, db, ctx);

    expect(json).toHaveBeenCalledWith({
      recieved: true,
      message: "Broadcaster not registered",
    });
    expect(response).toEqual({
      body: { recieved: true, message: "Broadcaster not registered" },
      init: undefined,
    });
    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith(
      `[event:${event.eventType}:error] Broadcaster ${event.broadcaster.username}[${event.broadcaster.user_id}] is not registered.`
    );

    errorSpy.mockRestore();
  });

  test("notifies chat when livestream status changes", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "ok",
      status: 200,
    });

    const event = {
      eventType: "livestream.status.updated",
      broadcaster: { username: "Streamer", user_id: 123 },
      is_live: true,
    } as unknown as LivestreamStatusUpdatedEvent;

    const response = await livestreamStatusUpdate(event, db, ctx);

    expect(mockSendMessage).toHaveBeenCalledWith({
      broadcaster: { name: "Streamer", accessToken: "token" },
      message: "Streamer is now live.",
    });
    expect(json).toHaveBeenCalledWith(
      { recieved: true, message: "ok" },
      { status: 200 }
    );
    expect(response).toEqual({
      body: { recieved: true, message: "ok" },
      init: { status: 200 },
    });
  });

  test("surfaces livestream send failures", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "offline",
      status: 503,
    });

    const event = {
      eventType: "livestream.status.updated",
      broadcaster: { username: "Streamer", user_id: 123 },
      is_live: false,
    } as unknown as LivestreamStatusUpdatedEvent;

    await livestreamStatusUpdate(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { recieved: true, message: "offline" },
      { status: 503 }
    );
  });
});

describe("subscription events", () => {
  test("newSubscriber thanks the subscriber", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "thanks",
      status: 200,
    });

    const event = {
      eventType: "channel.subscription.new",
      broadcaster: { username: "Streamer", user_id: 1 },
      subscriber: { username: "Fan" },
    } as unknown as NewSubscriptionEvent;

    await newSubscriber(event, db, ctx);

    expect(mockSendMessage).toHaveBeenCalledWith({
      broadcaster: { name: "Streamer", accessToken: "token" },
      message: "@Fan thank you for subscribing to Streamer's channel!",
    });
    expect(json).toHaveBeenCalledWith({ message: "thanks" }, { status: 200 });
  });

  test("newSubscriber returns 404 when broadcaster missing", async () => {
    const { db } = createDbMock(null);
    const { ctx, json } = createMockContext();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const event = {
      eventType: "channel.subscription.new",
      broadcaster: { username: "Streamer", user_id: 1 },
      subscriber: { username: "Fan" },
    } as unknown as NewSubscriptionEvent;

    await newSubscriber(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { message: "Broadcaster not registered" },
      { status: 404 }
    );
    expect(errorSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("newSubscriber returns failed send status", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "denied",
      status: 403,
    });

    const event = {
      eventType: "channel.subscription.new",
      broadcaster: { username: "Streamer", user_id: 1 },
      subscriber: { username: "Fan" },
    } as unknown as NewSubscriptionEvent;

    await newSubscriber(event, db, ctx);

    expect(json).toHaveBeenCalledWith({ message: "denied" }, { status: 403 });
  });

  test("giftedSubs handles failed sends with same response", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "rate-limited",
      status: 429,
    });

    const event = {
      eventType: "channel.subscription.gifts",
      broadcaster: { username: "Streamer", user_id: 1 },
      gifter: { username: "Generous" },
      giftees: [{ username: "One" }, { username: "Two" }],
    } as unknown as SubscriptionGiftEvent;

    await giftedSubs(event, db, ctx);

    expect(mockSendMessage).toHaveBeenCalledWith({
      broadcaster: { name: "Streamer", accessToken: "token" },
      message: "@Generous thank you for gifting 2 subs to Streamer's channel!",
    });
    expect(json).toHaveBeenCalledWith(
      { message: "rate-limited" },
      { status: 429 }
    );
  });

  test("giftedSubs acknowledges successful gifts", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "delivered",
      status: 200,
    });

    const event = {
      eventType: "channel.subscription.gifts",
      broadcaster: { username: "Streamer", user_id: 1 },
      gifter: { username: "Generous" },
      giftees: [{ username: "One" }],
    } as unknown as SubscriptionGiftEvent;

    await giftedSubs(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { message: "delivered" },
      { status: 200 }
    );
  });

  test("giftedSubs returns 404 when broadcaster missing", async () => {
    const { db } = createDbMock(null);
    const { ctx, json } = createMockContext();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const event = {
      eventType: "channel.subscription.gifts",
      broadcaster: { username: "Streamer", user_id: 1 },
      gifter: { username: "Generous" },
      giftees: [],
    } as unknown as SubscriptionGiftEvent;

    await giftedSubs(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { message: "Broadcaster not registered" },
      { status: 404 }
    );
    expect(errorSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("renewedSub acknowledges renewal with duration", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "cheers",
      status: 201,
    });

    const event = {
      eventType: "channel.subscription.renewal",
      broadcaster: { username: "Streamer", user_id: 1 },
      subscriber: { username: "Fan" },
      duration: 5,
    } as unknown as SubscriptionRenewalEvent;

    await renewedSub(event, db, ctx);

    expect(mockSendMessage).toHaveBeenCalledWith({
      broadcaster: { name: "Streamer", accessToken: "token" },
      message:
        "@Fan thank you for subscribing to Streamer's channel! You have been a subscriber for 5 months!",
    });
    expect(json).toHaveBeenCalledWith({ message: "cheers" }, { status: 201 });
  });

  test("renewedSub returns 404 when broadcaster missing", async () => {
    const { db } = createDbMock(null);
    const { ctx, json } = createMockContext();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const event = {
      eventType: "channel.subscription.renewal",
      broadcaster: { username: "Streamer", user_id: 1 },
      subscriber: { username: "Fan" },
      duration: 5,
    } as unknown as SubscriptionRenewalEvent;

    await renewedSub(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { message: "Broadcaster not registered" },
      { status: 404 }
    );
    expect(errorSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("renewedSub propagates failed send", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "cooldown",
      status: 429,
    });

    const event = {
      eventType: "channel.subscription.renewal",
      broadcaster: { username: "Streamer", user_id: 1 },
      subscriber: { username: "Fan" },
      duration: 5,
    } as unknown as SubscriptionRenewalEvent;

    await renewedSub(event, db, ctx);

    expect(json).toHaveBeenCalledWith({ message: "cooldown" }, { status: 429 });
  });
});

describe("kicksGifted", () => {
  test("includes thank-you message with gift message when present", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "sent",
      status: 200,
    });

    const event = {
      eventType: "kicks.gifted",
      broadcaster: { username: "Streamer", user_id: 1 },
      sender: { username: "Gifter" },
      gift: { name: "Gold Bar", amount: 3, message: "  keep grinding!  " },
    } as unknown as KicksGiftedEvent;

    await kicksGifted(event, db, ctx);

    const messageArg = mockSendMessage.mock.calls[0][0].message;
    expect(messageArg).toContain("with the message keep grinding!");
    expect(messageArg).toContain("thank you for gifting Gold Bar for 3");
    expect(json).toHaveBeenCalledWith({ message: "sent" }, { status: 200 });
  });

  test("omits gift message when message text is empty", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "sent",
      status: 200,
    });

    const event = {
      eventType: "kicks.gifted",
      broadcaster: { username: "Streamer", user_id: 1 },
      sender: { username: "Gifter" },
      gift: { name: "Gold Bar", amount: 3, message: "   " },
    } as unknown as KicksGiftedEvent;

    await kicksGifted(event, db, ctx);

    const messageArg = mockSendMessage.mock.calls[0][0].message;
    expect(messageArg.includes("with the message")).toBe(false);
  });

  test("omits gift message when message is missing", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "sent",
      status: 200,
    });

    const event = {
      eventType: "kicks.gifted",
      broadcaster: { username: "Streamer", user_id: 1 },
      sender: { username: "Gifter" },
      gift: { name: "Gold Bar", amount: 3 },
    } as unknown as KicksGiftedEvent;

    await kicksGifted(event, db, ctx);

    const messageArg = mockSendMessage.mock.calls[0][0].message;
    expect(messageArg.includes("with the message")).toBe(false);
  });

  test("returns 404 when broadcaster missing", async () => {
    const { db } = createDbMock(null);
    const { ctx, json } = createMockContext();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const event = {
      eventType: "kicks.gifted",
      broadcaster: { username: "Streamer", user_id: 1 },
      sender: { username: "Gifter" },
      gift: { name: "Gold Bar", amount: 3, message: "hello" },
    } as unknown as KicksGiftedEvent;

    await kicksGifted(event, db, ctx);

    expect(json).toHaveBeenCalledWith(
      { message: "Broadcaster not registered" },
      { status: 404 }
    );
    expect(errorSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("propagates failed kick gift messages", async () => {
    const { db } = createDbMock({ accessToken: "token" });
    const { ctx, json } = createMockContext();

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "blocked",
      status: 500,
    });

    const event = {
      eventType: "kicks.gifted",
      broadcaster: { username: "Streamer", user_id: 1 },
      sender: { username: "Gifter" },
      gift: { name: "Gold Bar", amount: 3, message: "cheers" },
    } as unknown as KicksGiftedEvent;

    await kicksGifted(event, db, ctx);

    expect(json).toHaveBeenCalledWith({ message: "blocked" }, { status: 500 });
  });
});
