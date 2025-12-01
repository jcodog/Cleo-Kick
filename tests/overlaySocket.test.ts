import { beforeEach, describe, expect, test, vi } from "vitest";

const wsMocks = vi.hoisted(() => {
  const emit = vi.fn();
  const socket = { emit };
  const ws = vi.fn(() => socket);
  return { emit, socket, ws } as const;
});

const WebSocketStub = vi.hoisted(() => class {});

vi.mock("../src/lib/jstack", () => ({
  client: {
    overlays: {
      chat: {
        $ws: wsMocks.ws,
      },
    },
  },
}));

describe("sendOverlayMessage", () => {
  let sendOverlayMessage: typeof import("../src/lib/overlaySocket").sendOverlayMessage;

  beforeEach(async () => {
    vi.resetModules();
    vi.stubGlobal("WebSocket", WebSocketStub);
    vi.clearAllMocks();
    ({ sendOverlayMessage } = await import("../src/lib/overlaySocket"));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("emits overlay payload with optional fields", () => {
    const payload = {
      roomId: "overlay-chat-123",
      author: "viewer",
      text: "hello",
      platform: "kick",
      avatarUrl: "https://cdn.example/avatar.png",
    };

    sendOverlayMessage(payload);

    expect(wsMocks.emit).toHaveBeenCalledTimes(1);
    expect(wsMocks.emit).toHaveBeenCalledWith("message", {
      roomId: "overlay-chat-123",
      author: "viewer",
      text: "hello",
      platform: "kick",
      avatarUrl: "https://cdn.example/avatar.png",
    });
  });

  test("emits overlay payload without optional fields", () => {
    const payload = {
      roomId: "overlay-chat-456",
      author: "caster",
      text: "yo",
    };

    sendOverlayMessage(payload);

    expect(wsMocks.emit).toHaveBeenCalledTimes(1);
    expect(wsMocks.emit).toHaveBeenCalledWith("message", {
      roomId: "overlay-chat-456",
      author: "caster",
      text: "yo",
      platform: undefined,
      avatarUrl: undefined,
    });
  });

  test("reuses a single websocket connection across sends", () => {
    sendOverlayMessage({
      roomId: "overlay-chat-123",
      author: "a",
      text: "first",
    });

    sendOverlayMessage({
      roomId: "overlay-chat-123",
      author: "a",
      text: "second",
    });

    expect(wsMocks.ws).toHaveBeenCalledTimes(1);
    expect(wsMocks.emit).toHaveBeenCalledTimes(2);
  });

  test("skips sending when WebSocket API is unavailable", () => {
    vi.unstubAllGlobals();
    Reflect.deleteProperty(
      globalThis as typeof globalThis & { WebSocket?: unknown },
      "WebSocket"
    );

    sendOverlayMessage({
      roomId: "overlay-chat-000",
      author: "anon",
      text: "hello",
    });

    expect(wsMocks.ws).not.toHaveBeenCalled();
    expect(wsMocks.emit).not.toHaveBeenCalled();
  });

  test("logs the missing WebSocket warning only once", () => {
    vi.unstubAllGlobals();
    Reflect.deleteProperty(
      globalThis as typeof globalThis & { WebSocket?: unknown },
      "WebSocket"
    );
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    sendOverlayMessage({ roomId: "one", author: "a", text: "first" });
    sendOverlayMessage({ roomId: "one", author: "a", text: "second" });

    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
