import { client } from "./jstack";

type OverlayMessage = {
  roomId: string;
  author: string;
  text: string;
  platform?: string;
  avatarUrl?: string;
};

let socket: ReturnType<typeof client.overlays.chat.$ws> | null = null;
let webSocketWarningLogged = false;

const missingWebSocketWarning =
  "[OverlaySocket] WebSocket API is not available in this environment. Overlay messages will be skipped.";

function getSocket() {
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
  return socket;
}

export function sendOverlayMessage(msg: OverlayMessage) {
  const activeSocket = getSocket();
  if (!activeSocket) {
    console.debug(
      `[OverlaySocket] Skipping emit room=${msg.roomId} reason=no-socket`
    );
    return;
  }

  console.debug(
    `[OverlaySocket] Emitting overlay message room=${msg.roomId} author=${msg.author}`
  );
  activeSocket.emit("message", {
    roomId: msg.roomId,
    author: msg.author,
    text: msg.text,
    platform: msg.platform,
    avatarUrl: msg.avatarUrl,
  });
}
