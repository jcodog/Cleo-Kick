import { beforeEach, describe, expect, test, vi } from "vitest";

const socketMocks = vi.hoisted(() => {
  let handlers: Record<string, (...args: any[]) => void> = {};
  const emit = vi.fn(() => true);
  const on = vi.fn((event: string, handler: (...args: any[]) => void) => {
    handlers[event] = handler;
  });
  const ws = vi.fn(() => ({
    emit: (...args: any[]) => emit(...args),
    on: (...args: any[]) => on(...args),
  }));

  const trigger = (event: string, ...args: any[]) => {
    handlers[event]?.(...args);
  };

  const reset = () => {
    handlers = {};
    emit.mockReset();
    emit.mockReturnValue(true);
    on.mockReset();
    ws.mockReset();
  };

  return { emit, on, ws, trigger, reset } as const;
});

const WebSocketStub = vi.hoisted(() => class {});

vi.mock("../src/lib/jstack", () => ({
  client: {
    overlays: {
      chat: {
        $ws: socketMocks.ws,
      },
    },
  },
}));

describe("sendOverlayMessage", () => {
  let sendOverlayMessage: typeof import("../src/lib/overlaySocket").sendOverlayMessage;
  let overlayInternals: typeof import("../src/lib/overlaySocket").__overlaySocketInternals;

  beforeEach(async () => {
    socketMocks.reset();
    vi.resetModules();
    vi.stubGlobal("WebSocket", WebSocketStub);
    vi.clearAllMocks();
    ({ sendOverlayMessage, __overlaySocketInternals: overlayInternals } =
      await import("../src/lib/overlaySocket"));
    overlayInternals.resetState();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    overlayInternals.resetState();
  });

  test("buffers overlay payload with optional fields until socket connects", () => {
    const payload = {
      roomId: "overlay-chat-123",
      author: "viewer",
      text: "hello",
      platform: "kick",
      avatarUrl: "https://cdn.example/avatar.png",
    };

    sendOverlayMessage(payload);

    expect(socketMocks.emit).not.toHaveBeenCalled();

    socketMocks.trigger("onConnect");

    expect(socketMocks.emit).toHaveBeenCalledTimes(1);
    expect(socketMocks.emit).toHaveBeenCalledWith("message", {
      roomId: "overlay-chat-123",
      author: "viewer",
      text: "hello",
      platform: "kick",
      avatarUrl: "https://cdn.example/avatar.png",
    });
  });

  test("emits overlay payload without optional fields once connected", () => {
    sendOverlayMessage({
      roomId: "overlay-chat-0",
      author: "seed",
      text: "priming",
    });
    socketMocks.trigger("onConnect");
    socketMocks.emit.mockClear();

    const payload = {
      roomId: "overlay-chat-456",
      author: "caster",
      text: "yo",
    };

    sendOverlayMessage(payload);

    expect(socketMocks.emit).toHaveBeenCalledTimes(1);
    expect(socketMocks.emit).toHaveBeenCalledWith("message", {
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
    socketMocks.trigger("onConnect");
    socketMocks.emit.mockClear();

    sendOverlayMessage({
      roomId: "overlay-chat-123",
      author: "a",
      text: "second",
    });

    expect(socketMocks.ws).toHaveBeenCalledTimes(1);
    expect(socketMocks.emit).toHaveBeenCalledTimes(1);
  });

  test("requeues buffered messages when emit fails", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    sendOverlayMessage({
      roomId: "overlay-chat-999",
      author: "tester",
      text: "first",
    });
    socketMocks.emit.mockReturnValueOnce(false).mockReturnValue(true);

    socketMocks.trigger("onConnect");
    expect(socketMocks.emit).toHaveBeenCalledTimes(1);

    socketMocks.trigger("onConnect");
    expect(socketMocks.emit).toHaveBeenCalledTimes(2);
    warnSpy.mockRestore();
  });

  test("requeues immediate emits that fail while connected", () => {
    sendOverlayMessage({
      roomId: "overlay-live",
      author: "caster",
      text: "ready",
    });
    socketMocks.trigger("onConnect");
    socketMocks.emit.mockClear();

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    socketMocks.emit.mockReturnValueOnce(false).mockReturnValue(true);

    sendOverlayMessage({
      roomId: "overlay-live",
      author: "caster",
      text: "message",
    });

    expect(socketMocks.emit).toHaveBeenCalledTimes(1);

    socketMocks.trigger("onConnect");
    expect(socketMocks.emit).toHaveBeenCalledTimes(2);
    warnSpy.mockRestore();
  });

  test("marks socket as not ready after websocket errors", () => {
    sendOverlayMessage({
      roomId: "overlay-error",
      author: "caster",
      text: "first",
    });
    socketMocks.trigger("onConnect");
    socketMocks.emit.mockClear();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    socketMocks.trigger("onError", new Error("boom"));
    sendOverlayMessage({
      roomId: "overlay-error",
      author: "caster",
      text: "second",
    });

    expect(socketMocks.emit).not.toHaveBeenCalled();

    socketMocks.trigger("onConnect");
    expect(socketMocks.emit).toHaveBeenCalledTimes(1);
    errorSpy.mockRestore();
  });

  test("flushPendingMessages no-ops when socket is missing", () => {
    overlayInternals.resetState();
    overlayInternals.flushPendingMessagesForTests();
    expect(socketMocks.emit).not.toHaveBeenCalled();
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

    expect(socketMocks.ws).not.toHaveBeenCalled();
    expect(socketMocks.emit).not.toHaveBeenCalled();
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
