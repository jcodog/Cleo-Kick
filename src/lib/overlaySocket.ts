import type { Server as SocketIOServer, Socket } from "socket.io";

export type OverlayMessage = {
  roomId: string;
  author: string;
  text: string;
  platform?: string;
  avatarUrl?: string;
};

export type OverlayMessageInput = {
  roomId: string;
  text: string;
  author?: string;
  platform?: string;
  avatarUrl?: string;
};

let overlayServer: SocketIOServer | null = null;
const socketRooms = new Map<string, string>();
const OVERLAY_ROOM_PREFIX = "overlay-chat-";
let serverNotReadyWarningLogged = false;

const SERVER_NOT_READY_WARNING =
  "[OverlaySocket] Socket.IO server is not ready; overlay messages will be dropped";

const trimToOptional = (value: unknown): string | undefined => {
  if (typeof value !== "string") {
    return undefined;
  }
  const text = value.trim();
  return text.length > 0 ? text : undefined;
};

const normalizeRoomId = (value: unknown): string => {
  if (Array.isArray(value)) {
    value = value[0];
  }
  return typeof value === "string" ? value.trim() : "";
};

export const formatOverlayRoomId = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }
  return trimmed.startsWith(OVERLAY_ROOM_PREFIX)
    ? trimmed
    : `${OVERLAY_ROOM_PREFIX}${trimmed}`;
};

const coerceText = (value: unknown): string => {
  if (typeof value === "string") {
    return value.trim();
  }
  return String(value ?? "").trim();
};

const emitSocketError = (socket: Socket, message: string) => {
  socket.emit("server:error", { message });
};

function handleSocketConnection(socket: Socket) {
  const roomId = normalizeRoomId(socket.handshake.query.roomId);
  if (!roomId) {
    emitSocketError(socket, "roomId query parameter is required");
    socket.disconnect(true);
    return;
  }

  socketRooms.set(socket.id, roomId);
  socket.join(roomId);
  socket.emit("server:ack", { type: "join", roomId });

  socket.on("chat:send", (payload?: Partial<OverlayMessageInput>) => {
    try {
      const text = coerceText(payload?.text).trim();
      if (!text) {
        emitSocketError(socket, "text is required");
        return;
      }

      const author = coerceText(payload?.author ?? socket.id) || socket.id;

      sendOverlayMessage({
        roomId,
        text,
        author,
        platform: trimToOptional(payload?.platform),
        avatarUrl: trimToOptional(payload?.avatarUrl),
      });
    } catch (error) {
      emitSocketError(
        socket,
        error instanceof Error
          ? error.message
          : "Failed to dispatch chat message"
      );
    }
  });

  socket.on("disconnect", () => {
    socketRooms.delete(socket.id);
  });
}

export function initializeOverlaySocketServer(server: SocketIOServer): void {
  overlayServer = server;
  serverNotReadyWarningLogged = false;
  socketRooms.clear();
  overlayServer.on("connection", handleSocketConnection);
}

export function isOverlaySocketServerReady(): boolean {
  return overlayServer !== null;
}

export function sendOverlayMessage(
  message: OverlayMessageInput
): OverlayMessage | null {
  if (!overlayServer) {
    if (!serverNotReadyWarningLogged) {
      console.warn(SERVER_NOT_READY_WARNING);
      serverNotReadyWarningLogged = true;
    }
    return null;
  }

  const roomId = message.roomId?.trim();
  const text = message.text?.trim();

  if (!roomId || !text) {
    console.warn(
      "[OverlaySocket] Missing roomId or text; overlay message was not dispatched",
      { roomId }
    );
    return null;
  }

  const author = (message.author ?? "server").toString().trim() || "server";

  const payload: OverlayMessage = {
    roomId,
    author,
    text,
    platform: trimToOptional(message.platform),
    avatarUrl: trimToOptional(message.avatarUrl),
  };

  overlayServer.to(roomId).emit("chat:message", payload);
  return payload;
}

export const __overlaySocketInternals = {
  reset() {
    overlayServer = null;
    socketRooms.clear();
    serverNotReadyWarningLogged = false;
  },
  getSocketRooms() {
    return new Map(socketRooms);
  },
  handleSocketConnection,
};
