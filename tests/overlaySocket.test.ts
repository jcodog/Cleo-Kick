import { beforeEach, describe, expect, test, vi } from "vitest";

const socketFactory = vi.hoisted(() => vi.fn());

vi.mock("socket.io-client", () => ({
  io: (...args: any[]) => socketFactory(...args),
}));

type SocketStub = ReturnType<typeof createSocketStub>;

const createSocketStub = () => {
  const onceHandlers = new Map<string, ((...args: any[]) => void)[]>();
  const socket = {
    emit: vi.fn(),
    disconnect: vi.fn(),
    once: vi.fn((event: string, handler: (...args: any[]) => void) => {
      const handlers = onceHandlers.get(event) ?? [];
      handlers.push(handler);
      onceHandlers.set(event, handlers);
      return socket;
    }),
    off: vi.fn(),
  } as const;

  return {
    socket,
    trigger(event: string, ...args: any[]) {
      const handlers = onceHandlers.get(event) ?? [];
      onceHandlers.delete(event);
      handlers.forEach((handler) => handler(...args));
    },
  } as const;
};

describe("overlaySocket", () => {
  let sendOverlayMessage: typeof import("../src/lib/overlaySocket").sendOverlayMessage;
  let configureOverlayRelay: typeof import("../src/lib/overlaySocket").configureOverlayRelay;
  let formatOverlayRoomId: typeof import("../src/lib/overlaySocket").formatOverlayRoomId;
  let isOverlayRelayConfigured: typeof import("../src/lib/overlaySocket").isOverlayRelayConfigured;
  let __overlaySocketInternals: typeof import("../src/lib/overlaySocket").__overlaySocketInternals;
  let sockets: SocketStub[];

  beforeEach(async () => {
    vi.resetModules();
    socketFactory.mockClear();
    sockets = [];
    socketFactory.mockImplementation(() => {
      const stub = createSocketStub();
      sockets.push(stub);
      return stub.socket;
    });

    ({
      sendOverlayMessage,
      configureOverlayRelay,
      formatOverlayRoomId,
      isOverlayRelayConfigured,
      __overlaySocketInternals,
    } = await import("../src/lib/overlaySocket"));
    __overlaySocketInternals.reset();
  });

  test("warns only once when the relay endpoint is missing", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const message = { roomId: "overlay-chat-1", author: "bot", text: "hello" };
    expect(await sendOverlayMessage(message)).toBeNull();
    expect(await sendOverlayMessage(message)).toBeNull();

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(socketFactory).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  test("emits payloads over the socket client", async () => {
    configureOverlayRelay({
      endpoint: "https://relay.test",
      authToken: "token",
    });

    const sendPromise = sendOverlayMessage({
      roomId: " overlay-chat-123 ",
      author: "  caster  ",
      text: "  hi team  ",
      platform: " kick ",
      avatarUrl: " https://avatar ",
    });

    const stub = sockets[0];
    expect(stub).toBeDefined();

    expect(socketFactory).toHaveBeenCalledWith(
      "https://relay.test",
      expect.objectContaining({
        query: { roomId: "overlay-chat-123" },
        auth: { token: "token" },
      })
    );

    stub.trigger("connect");
    const payload = await sendPromise;

    expect(payload).toEqual({
      roomId: "overlay-chat-123",
      author: "caster",
      text: "hi team",
      platform: "kick",
      avatarUrl: "https://avatar",
    });

    expect(stub.socket.emit).toHaveBeenCalledWith("chat:send", {
      text: "hi team",
      author: "caster",
      platform: "kick",
      avatarUrl: "https://avatar",
    });
    expect(stub.socket.disconnect).toHaveBeenCalled();
  });

  test("guards against duplicate finalize calls", async () => {
    configureOverlayRelay({
      endpoint: "https://relay.test",
      authToken: "token",
    });

    const sendPromise = sendOverlayMessage({
      roomId: "overlay-chat-dup",
      author: "caster",
      text: "hi",
    });

    const stub = sockets[0];
    stub.trigger("connect");
    stub.trigger("connect_error", new Error("late"));

    const payload = await sendPromise;
    expect(payload).toEqual({
      roomId: "overlay-chat-dup",
      author: "caster",
      text: "hi",
      platform: undefined,
      avatarUrl: undefined,
    });
    expect(stub.socket.disconnect).toHaveBeenCalledTimes(1);
  });

  test("returns null when the socket connection fails", async () => {
    configureOverlayRelay({ endpoint: "https://relay.test" });

    const sendPromise = sendOverlayMessage({
      roomId: "overlay-chat-500",
      author: "tester",
      text: "hello",
    });

    const stub = sockets[0];
    stub.trigger("connect_error", new Error("boom"));

    expect(await sendPromise).toBeNull();
    expect(stub.socket.disconnect).toHaveBeenCalled();
  });

  test("returns null when the socket emit fails", async () => {
    configureOverlayRelay({ endpoint: "https://relay.test" });

    const sendPromise = sendOverlayMessage({
      roomId: "overlay-chat-emit",
      author: "tester",
      text: "hi",
    });

    const stub = sockets[0];
    stub.socket.emit.mockImplementation(() => {
      throw new Error("emit failure");
    });

    stub.trigger("connect");

    expect(await sendPromise).toBeNull();
    expect(stub.socket.disconnect).toHaveBeenCalled();
  });

  test("formatOverlayRoomId ensures the expected prefix", () => {
    expect(formatOverlayRoomId("123")).toBe("overlay-chat-123");
    expect(formatOverlayRoomId(" overlay-chat-999 ")).toBe("overlay-chat-999");
    expect(formatOverlayRoomId("   ")).toBe("");
  });

  test("reports relay readiness state", () => {
    expect(isOverlayRelayConfigured()).toBe(false);
    configureOverlayRelay({ endpoint: "https://relay.test" });
    expect(isOverlayRelayConfigured()).toBe(true);
  });

  test("exposes relay config snapshots", () => {
    configureOverlayRelay({
      endpoint: "https://relay.test",
      authToken: "secret",
    });
    expect(__overlaySocketInternals.getConfig()).toEqual({
      endpoint: "https://relay.test",
      authToken: "secret",
    });
  });

  test("treats blank relay config values as unset", () => {
    configureOverlayRelay({ endpoint: "   ", authToken: "   " });

    expect(isOverlayRelayConfigured()).toBe(false);
    expect(__overlaySocketInternals.getConfig()).toEqual({
      endpoint: undefined,
      authToken: undefined,
    });
  });

  test("skips emitting when roomId or text are missing", async () => {
    configureOverlayRelay({ endpoint: "https://relay.test" });
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const result = await sendOverlayMessage({
      roomId: "   ",
      text: "   ",
    });

    expect(result).toBeNull();
    expect(socketFactory).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
  });

  test("sanitizes optional payload fields", async () => {
    configureOverlayRelay({ endpoint: "https://relay.test" });

    const sendPromise = sendOverlayMessage({
      roomId: "overlay-chat-optional",
      author: "   ",
      text: "hi",
      platform: "   ",
      avatarUrl: "   ",
    });

    const stub = sockets[0];
    stub.trigger("connect");

    const payload = await sendPromise;
    expect(payload).toEqual({
      roomId: "overlay-chat-optional",
      author: "server",
      text: "hi",
      platform: undefined,
      avatarUrl: undefined,
    });
  });

  test("defaults the author to server when omitted", async () => {
    configureOverlayRelay({ endpoint: "https://relay.test" });

    const sendPromise = sendOverlayMessage({
      roomId: "overlay-chat-default-author",
      text: "hello",
    });

    const stub = sockets[0];
    stub.trigger("connect");

    const payload = await sendPromise;
    expect(payload?.author).toBe("server");
  });
});
