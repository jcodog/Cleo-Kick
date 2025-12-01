import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type Mock,
} from "vitest";
import type { ChatMessageEvent } from "kick-api-types/payloads";
import { chatHandler } from "../src/lib/events/chat";
import type { KickBroadcasterAuth } from "../src/lib/functions/middleware";
import type { WebhookContext } from "../src/lib/app/types";
import { sendMessage } from "../src/lib/functions/messages";
import { sendOverlayMessage } from "../src/lib/overlaySocket";
import type { Env } from "../src/lib/config/env";
import type { DbClient } from "../src/lib/prisma";

vi.mock("../src/lib/functions/messages", () => ({
  sendMessage: vi.fn(),
}));

vi.mock("../src/lib/overlaySocket", () => ({
  sendOverlayMessage: vi.fn(),
}));

const mockSendMessage = sendMessage as unknown as Mock;
const mockSendOverlayMessage = sendOverlayMessage as unknown as Mock;
const originalFetch = globalThis.fetch;
const fetchMock = vi.fn();

beforeAll(() => {
  globalThis.fetch = fetchMock as typeof fetch;
});

afterAll(() => {
  globalThis.fetch = originalFetch;
});

function createEvent(
  overrides: Partial<ChatMessageEvent> = {}
): ChatMessageEvent {
  return {
    eventType: "chat.message.sent",
    eventVersion: "1",
    broadcaster: {
      username: "caster",
      user_id: "123",
    },
    sender: {
      username: "viewer",
      profile_picture: "https://example.com/avatar.png",
    },
    content: "hello world",
    ...overrides,
  } as ChatMessageEvent;
}

function createContext(
  auth: KickBroadcasterAuth | null,
  envOverrides: Partial<Env> = {}
) {
  const store = new Map<string, unknown>();
  store.set("kickBroadcasterAuth", auth);
  const jsonMock = vi.fn((body: unknown, init?: ResponseInit) => {
    const status = init?.status ?? 200;
    return {
      status,
      async json() {
        return body;
      },
    } as unknown as Response;
  });
  const env: Env = {
    WS_URL: undefined,
    ...envOverrides,
  };
  const ctx = {
    get: (key: string) => store.get(key),
    json: jsonMock,
    env,
  } as unknown as WebhookContext;
  return { ctx, jsonMock } as const;
}

describe("chatHandler", () => {
  const db = {} as DbClient;

  beforeEach(() => {
    fetchMock.mockReset();
    fetchMock.mockImplementation(async (input: URL | Request | string) => {
      const url =
        typeof input === "string"
          ? input
          : input instanceof URL
          ? input.href
          : input.url;
      const streamer = new URL(url).searchParams.get("streamer") ?? "";
      return {
        ok: true,
        status: 200,
        async json() {
          return { profile_pic: `https://avatars.test/${streamer}.png` };
        },
      } as Response;
    });
    mockSendOverlayMessage.mockReset();
    mockSendOverlayMessage.mockResolvedValue({
      roomId: "overlay-chat-123",
      author: "tester",
      text: "hello",
    });
    mockSendMessage.mockReset();
  });

  test("emits overlay events even when broadcaster auth is missing", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: "just chatting" });

    const response = await chatHandler(event, db, ctx);

    expect(mockSendOverlayMessage).toHaveBeenCalledWith(
      {
        roomId: "overlay-chat-123",
        author: "viewer",
        text: "just chatting",
        platform: "kick",
        avatarUrl: "https://avatars.test/viewer.png",
      },
      undefined
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });

  test("falls back to broadcaster info when sender is missing", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ sender: undefined });

    const response = await chatHandler(event, db, ctx);

    expect(mockSendOverlayMessage).toHaveBeenCalledWith(
      {
        roomId: "overlay-chat-123",
        author: "caster",
        text: "hello world",
        platform: "kick",
        avatarUrl: "https://avatars.test/caster.png",
      },
      undefined
    );
    expect(response.status).toBe(200);
  });

  test("defaults author to empty string when no sender or broadcaster username", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({
      sender: undefined,
      broadcaster: {
        username: undefined as unknown as string,
        user_id: "123",
      },
    });

    const response = await chatHandler(event, db, ctx);

    expect(mockSendOverlayMessage).toHaveBeenCalledWith(
      {
        roomId: "overlay-chat-123",
        author: "",
        text: "hello world",
        platform: "kick",
        avatarUrl: undefined,
      },
      undefined
    );
    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("does not emit overlay events for blank messages", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: "   " });

    const response = await chatHandler(event, db, ctx);

    expect(mockSendOverlayMessage).not.toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });

  test("continues when overlay socket is unavailable", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: "hey" });
    mockSendOverlayMessage.mockResolvedValueOnce(null);
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

    const response = await chatHandler(event, db, ctx);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(mockSendOverlayMessage).toHaveBeenCalled();

    debugSpy.mockRestore();
  });

  test("reports overlay skip with unknown sender when usernames are missing", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({
      content: "hey there",
      sender: {
        username: undefined as unknown as string,
        profile_picture: undefined,
      },
      broadcaster: {
        username: undefined as unknown as string,
        user_id: "123",
      },
    });
    mockSendOverlayMessage.mockResolvedValueOnce(null);
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

    await chatHandler(event, db, ctx);

    expect(mockSendOverlayMessage).toHaveBeenCalled();
    expect(
      debugSpy.mock.calls.some(
        ([message]) =>
          typeof message === "string" && message.includes("sender=<unknown>")
      )
    ).toBe(true);

    debugSpy.mockRestore();
  });

  test("uses sender avatar when lookup fails", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({
      sender: {
        username: "viewer",
        profile_picture: "https://kick-cdn.test/viewer.png",
      },
    });
    fetchMock.mockImplementationOnce(
      async () =>
        ({
          ok: false,
          status: 502,
          async json() {
            return { profile_pic: null };
          },
        } as Response)
    );

    await chatHandler(event, db, ctx);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(mockSendOverlayMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        avatarUrl: "https://kick-cdn.test/viewer.png",
      }),
      undefined
    );
  });

  test("uses fallback avatar when lookup throws", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({
      sender: {
        username: "viewer",
        profile_picture: "https://kick-cdn.test/viewer.png",
      },
    });
    fetchMock.mockImplementationOnce(async () => {
      throw new Error("network boom");
    });

    await chatHandler(event, db, ctx);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(mockSendOverlayMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        avatarUrl: "https://kick-cdn.test/viewer.png",
      }),
      undefined
    );
  });

  test("uses sender avatar when lookup returns blank avatar", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({
      sender: {
        username: "viewer",
        profile_picture: "https://kick-cdn.test/fallback.png",
      },
    });
    fetchMock.mockImplementationOnce(
      async () =>
        ({
          ok: true,
          status: 200,
          async json() {
            return { profile_pic: "   " };
          },
        } as Response)
    );

    await chatHandler(event, db, ctx);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(mockSendOverlayMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        avatarUrl: "https://kick-cdn.test/fallback.png",
      }),
      undefined
    );
  });

  test("returns 404 when broadcaster is not registered for ping command", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: "!ping" });
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const response = await chatHandler(event, db, ctx);

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({
      message: "Broadcaster not registered",
    });
    expect(mockSendOverlayMessage).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    errorSpy.mockRestore();
  });

  test("ping command returns API success response", async () => {
    const auth: KickBroadcasterAuth = {
      accountId: "123",
      accessToken: "token",
    };
    const { ctx } = createContext(auth);
    const event = createEvent({ content: "!ping" });

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "Pong!",
      status: 200,
    });

    const response = await chatHandler(event, db, ctx);

    expect(mockSendMessage).toHaveBeenCalledWith({
      broadcaster: {
        name: "caster",
        accessToken: "token",
      },
      message: "Pong!",
    });
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "Pong!" });
  });

  test("ping command surfaces API errors", async () => {
    const auth: KickBroadcasterAuth = {
      accountId: "123",
      accessToken: "token",
    };
    const { ctx } = createContext(auth);
    const event = createEvent({ content: "!ping" });

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "rate limited",
      status: 429,
    });

    const response = await chatHandler(event, db, ctx);

    expect(response.status).toBe(429);
    expect(await response.json()).toEqual({ message: "rate limited" });
  });

  test("returns success when command prefix has no command", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: "!   " });

    const response = await chatHandler(event, db, ctx);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("ignores events with missing content", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: undefined });

    const response = await chatHandler(event, db, ctx);

    expect(mockSendOverlayMessage).not.toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });

  test("ignores unknown commands", async () => {
    const auth: KickBroadcasterAuth = {
      accountId: "123",
      accessToken: "token",
    };
    const { ctx } = createContext(auth);
    const event = createEvent({ content: "!dance" });

    const response = await chatHandler(event, db, ctx);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });

  test("supplies relay overrides when env bindings exist", async () => {
    const { ctx } = createContext(null, {
      WS_URL: "https://relay.test/test-message",
    });
    const event = createEvent({ content: "hello" });

    await chatHandler(event, db, ctx);

    expect(mockSendOverlayMessage).toHaveBeenCalledWith(
      expect.objectContaining({ roomId: "overlay-chat-123" }),
      {
        endpoint: "https://relay.test/test-message",
      }
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
