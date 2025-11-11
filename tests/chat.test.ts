import { describe, expect, test, vi, type Mock } from "vitest";
import type { ChatMessageEvent } from "kick-api-types/payloads";
import { commandReply } from "../src/lib/events/chat";
import type { KickBroadcasterAuth } from "../src/lib/functions/middleware";
import type { WebhookContext } from "../src/lib/app/types";
import { sendMessage } from "../src/lib/functions/messages";
import type { DbClient } from "../src/lib/prisma";

vi.mock("../src/lib/functions/messages", () => ({
  sendMessage: vi.fn(),
}));

const mockSendMessage = sendMessage as unknown as Mock;

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
    content: "hello world",
    ...overrides,
  } as ChatMessageEvent;
}

function createContext(auth: KickBroadcasterAuth | null) {
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
  const ctx = {
    get: (key: string) => store.get(key),
    json: jsonMock,
  } as unknown as WebhookContext;
  return { ctx, jsonMock } as const;
}

describe("commandReply", () => {
  const db = {} as DbClient;

  test("returns 200 when message does not start with a command", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: "just chatting" });

    const response = await commandReply(event, db, ctx);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "No command" });
  });

  test("returns 404 when broadcaster is not registered", async () => {
    const { ctx } = createContext(null);
    const event = createEvent({ content: "!echo hello" });
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const response = await commandReply(event, db, ctx);

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({
      message: "Broadcaster not registered",
    });

    errorSpy.mockRestore();
  });

  test("returns 200 when command payload is empty", async () => {
    const auth: KickBroadcasterAuth = {
      accountId: "123",
      accessToken: "token",
    };
    const { ctx } = createContext(auth);
    const event = createEvent({ content: "!   " });

    const response = await commandReply(event, db, ctx);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "No command" });
  });

  test("echo command returns API success response", async () => {
    const auth: KickBroadcasterAuth = {
      accountId: "123",
      accessToken: "token",
    };
    const { ctx } = createContext(auth);
    const event = createEvent({ content: "!echo hello world" });

    mockSendMessage.mockResolvedValueOnce({
      sent: true,
      message: "hello world",
      status: 200,
    });

    const response = await commandReply(event, db, ctx);

    expect(mockSendMessage).toHaveBeenCalledWith({
      broadcaster: {
        name: "caster",
        accessToken: "token",
      },
      message: "hello world",
    });
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "hello world" });
  });

  test("echo command surfaces API errors", async () => {
    const auth: KickBroadcasterAuth = {
      accountId: "123",
      accessToken: "token",
    };
    const { ctx } = createContext(auth);
    const event = createEvent({ content: "!echo too fast" });

    mockSendMessage.mockResolvedValueOnce({
      sent: false,
      message: "rate limited",
      status: 429,
    });

    const response = await commandReply(event, db, ctx);

    expect(response.status).toBe(429);
    expect(await response.json()).toEqual({ message: "rate limited" });
  });

  test("returns 200 for unknown commands", async () => {
    const auth: KickBroadcasterAuth = {
      accountId: "123",
      accessToken: "token",
    };
    const { ctx } = createContext(auth);
    const event = createEvent({ content: "!dance" });

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const response = await commandReply(event, db, ctx);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "Unknown command" });

    logSpy.mockRestore();
  });
});
