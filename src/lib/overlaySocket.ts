import { client } from "./jstack";

type OverlayMessage = {
  roomId: string;
  author: string;
  text: string;
  platform?: string;
  avatarUrl?: string;
};

type OverlaySocket = ReturnType<typeof client.overlays.chat.$ws>;

let socket: OverlaySocket | null = null;
let socketReady = false;
let webSocketWarningLogged = false;
const pendingMessages: OverlayMessage[] = [];

const missingWebSocketWarning =
  "[OverlaySocket] WebSocket API is not available in this environment. Overlay messages will be skipped.";

function getSocket(): OverlaySocket | null {
  if (socket) {
    return socket;
  }

  if (typeof globalThis.WebSocket === "undefined") {
    if (!webSocketWarningLogged) {
      console.warn(missingWebSocketWarning);
      webSocketWarningLogged = true;
    }
    return null;
  }

  console.log("[OverlaySocket] Opening overlays chat WebSocket connection");
  socket = client.overlays.chat.$ws();
  socketReady = false;

  socket.on("onConnect", () => {
    console.log(
      `[OverlaySocket] WebSocket connected; flushing ${pendingMessages.length} buffered message(s)`
    );
    socketReady = true;
    flushPendingMessages();
  });

  socket.on("onError", (error: unknown) => {
    console.error("[OverlaySocket] WebSocket error", error);
    socketReady = false;
  });

  return socket;
}

function bufferMessage(msg: OverlayMessage) {
  pendingMessages.push(msg);
  console.debug(
    `[OverlaySocket] Buffering overlay message room=${msg.roomId} reason=waiting-for-connection queueSize=${pendingMessages.length}`
  );
}

function emitOverlayMessage(
  target: OverlaySocket,
  msg: OverlayMessage
): boolean {
  console.debug(
    `[OverlaySocket] Emitting overlay message room=${msg.roomId} author=${msg.author}`
  );
  const sent = target.emit("message", {
    roomId: msg.roomId,
    author: msg.author,
    text: msg.text,
    platform: msg.platform,
    avatarUrl: msg.avatarUrl,
  });

  if (!sent) {
    console.warn(
      `[OverlaySocket] Socket not ready, message buffered room=${msg.roomId}`
    );
    socketReady = false;
  }

  return sent;
}

function flushPendingMessages() {
  const activeSocket = socket;
  if (!activeSocket || !socketReady) {
    return;
  }

  while (pendingMessages.length > 0) {
    const next = pendingMessages.shift()!;
    const sent = emitOverlayMessage(activeSocket, next);
    if (!sent) {
      pendingMessages.unshift(next);
      break;
    }
  }
}

export function sendOverlayMessage(msg: OverlayMessage) {
  const activeSocket = getSocket();
  if (!activeSocket) {
    console.debug(
      `[OverlaySocket] Skipping emit room=${msg.roomId} reason=no-socket`
    );
    return;
  }

  if (!socketReady) {
    bufferMessage(msg);
    return;
  }

  if (!emitOverlayMessage(activeSocket, msg)) {
    pendingMessages.unshift(msg);
  }
}

// Internal helpers exposed solely for tests to reset and probe socket state.
export const __overlaySocketInternals = {
  resetState() {
    socket = null;
    socketReady = false;
    webSocketWarningLogged = false;
    pendingMessages.length = 0;
  },
  flushPendingMessagesForTests() {
    flushPendingMessages();
  },
};
