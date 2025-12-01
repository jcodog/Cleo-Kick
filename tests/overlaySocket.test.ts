import { beforeEach, describe, expect, test, vi } from "vitest";

const createServerMock = () => {
  const broadcastEmit = vi.fn();
  const to = vi.fn(() => ({ emit: broadcastEmit }));
  const registeredHandlers = new Map<string, ((...args: any[]) => void)[]>();

  const on = vi.fn((event: string, handler: (...args: any[]) => void) => {
    const handlers = registeredHandlers.get(event) ?? [];
    handlers.push(handler);
    registeredHandlers.set(event, handlers);
  });

  return {
    io: { on, to } as unknown as import("socket.io").Server,
    emit: broadcastEmit,
    to,
    trigger(event: string, ...args: any[]) {
      registeredHandlers.get(event)?.forEach((handler) => handler(...args));
    },
  } as const;
};

const createSocketStub = (roomId?: unknown) => {
  const handlers = new Map<string, (...args: any[]) => void>();
  const socket = {
    id: "socket-1",
    handshake: { query: { roomId } },
    emit: vi.fn(),
    join: vi.fn(),
    disconnect: vi.fn(),
    on: vi.fn((event: string, handler: (...args: any[]) => void) => {
      handlers.set(event, handler);
    }),
  };

  return {
    socket,
    trigger(event: string, ...args: any[]) {
      handlers.get(event)?.(...args);
    },
  } as const;
};

describe("overlaySocket", () => {
  let sendOverlayMessage: typeof import("../src/lib/overlaySocket").sendOverlayMessage;
  let initializeOverlaySocketServer: typeof import("../src/lib/overlaySocket").initializeOverlaySocketServer;
  let formatOverlayRoomId: typeof import("../src/lib/overlaySocket").formatOverlayRoomId;
  let __overlaySocketInternals: typeof import("../src/lib/overlaySocket").__overlaySocketInternals;

  beforeEach(async () => {
    vi.resetModules();
    ({
      sendOverlayMessage,
      initializeOverlaySocketServer,
      formatOverlayRoomId,
      __overlaySocketInternals,
    } = await import("../src/lib/overlaySocket"));
    __overlaySocketInternals.reset();
  });

  test("warns only once when socket server is unavailable", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const message = { roomId: "overlay-chat-1", author: "bot", text: "hello" };
    expect(sendOverlayMessage(message)).toBeNull();
    expect(sendOverlayMessage(message)).toBeNull();

    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });

  test("emits chat messages once Socket.IO server is initialized", () => {
    const server = createServerMock();
    initializeOverlaySocketServer(server.io);

    const payload = sendOverlayMessage({
      roomId: " overlay-chat-123 ",
      author: "  caster  ",
      text: "  hi team  ",
      platform: " kick ",
      avatarUrl: " ",
    });

    expect(payload).toEqual({
      roomId: "overlay-chat-123",
      author: "caster",
      text: "hi team",
      platform: "kick",
      avatarUrl: undefined,
    });
    expect(server.to).toHaveBeenCalledWith("overlay-chat-123");
    expect(server.emit).toHaveBeenCalledWith("chat:message", payload);
  });

  test("formatOverlayRoomId ensures the expected prefix", () => {
    expect(formatOverlayRoomId("123")).toBe("overlay-chat-123");
    expect(formatOverlayRoomId(" overlay-chat-999 ")).toBe("overlay-chat-999");
    expect(formatOverlayRoomId("   ")).toBe("");
  });

  test("disconnects sockets that do not declare a roomId", () => {
    const server = createServerMock();
    initializeOverlaySocketServer(server.io);

    const { socket } = createSocketStub(undefined);
    server.trigger("connection", socket as any);

    expect(socket.emit).toHaveBeenCalledWith(
      "server:error",
      expect.objectContaining({ message: expect.stringContaining("roomId") })
    );
    expect(socket.disconnect).toHaveBeenCalledWith(true);
    expect(socket.join).not.toHaveBeenCalled();
  });

  test("handles chat:send payloads and defaults the author", () => {
    const server = createServerMock();
    initializeOverlaySocketServer(server.io);

    const stub = createSocketStub("room-a");
    server.trigger("connection", stub.socket as any);

    stub.trigger("chat:send", { text: "  hello overlay  " });

    expect(server.emit).toHaveBeenCalledWith(
      "chat:message",
      expect.objectContaining({
        roomId: "room-a",
        text: "hello overlay",
        author: stub.socket.id,
      })
    );
  });

  test("reports chat validation errors back to the socket", () => {
    const server = createServerMock();
    initializeOverlaySocketServer(server.io);

    const stub = createSocketStub(["room-b"]);
    server.trigger("connection", stub.socket as any);

    stub.trigger("chat:send", { text: "   " });

    expect(stub.socket.emit).toHaveBeenCalledWith(
      "server:error",
      expect.objectContaining({ message: "text is required" })
    );
    expect(server.emit).not.toHaveBeenCalled();
  });
});
