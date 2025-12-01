import { io, type Socket } from "socket.io-client";

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

export type OverlayRelayConfig = {
  endpoint?: string;
};

type ResolvedOverlayRelayConfig = {
  endpoint: string;
};

const OVERLAY_ROOM_PREFIX = "overlay-chat-";
const SERVER_NOT_READY_WARNING =
  "[OverlaySocket] Overlay relay endpoint is not configured; overlay messages will be dropped";

const trimToOptional = (value: unknown): string | undefined => {
  if (typeof value !== "string") {
    return undefined;
  }
  const text = value.trim();
  return text.length > 0 ? text : undefined;
};

const sanitizeEndpoint = (value?: string): string | null => {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

let relayEndpoint: string | null = null;
let serverNotReadyWarningLogged = false;

export const formatOverlayRoomId = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }
  return trimmed.startsWith(OVERLAY_ROOM_PREFIX)
    ? trimmed
    : `${OVERLAY_ROOM_PREFIX}${trimmed}`;
};

const resolveRelayConfig = (
  overrides?: OverlayRelayConfig
): ResolvedOverlayRelayConfig | null => {
  const endpoint =
    sanitizeEndpoint(overrides?.endpoint) ?? relayEndpoint ?? null;

  if (!endpoint) {
    return null;
  }

  return { endpoint };
};

export function configureOverlayRelay(config: OverlayRelayConfig): void {
  relayEndpoint = sanitizeEndpoint(config.endpoint);
  serverNotReadyWarningLogged = false;
}

export function isOverlayRelayConfigured(): boolean {
  return Boolean(relayEndpoint);
}

export async function sendOverlayMessage(
  message: OverlayMessageInput,
  overrides?: OverlayRelayConfig
): Promise<OverlayMessage | null> {
  const resolvedConfig = resolveRelayConfig(overrides);

  if (!resolvedConfig) {
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

  const dispatched = await emitOverlayMessage(roomId, payload, resolvedConfig);
  return dispatched ? payload : null;
}

const emitOverlayMessage = async (
  roomId: string,
  payload: OverlayMessage,
  config: ResolvedOverlayRelayConfig
): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    const socket = createSocketClient(roomId, config);

    let settled = false;

    const finalize = (success: boolean) => {
      if (settled) {
        return;
      }
      settled = true;
      socket.off("connect", handleConnect);
      socket.off("connect_error", handleError);
      socket.disconnect();
      resolve(success);
    };

    const handleConnect = () => {
      try {
        socket.emit("chat:send", {
          text: payload.text,
          author: payload.author,
          platform: payload.platform,
          avatarUrl: payload.avatarUrl,
        });
        finalize(true);
      } catch (error) {
        console.error("[OverlaySocket] Failed to emit chat payload", error);
        finalize(false);
      }
    };

    const handleError = (error: unknown) => {
      console.error(
        "[OverlaySocket] Overlay socket client failed to connect",
        error
      );
      finalize(false);
    };

    socket.once("connect", handleConnect);
    socket.once("connect_error", handleError);
  });
};

const createSocketClient = (
  roomId: string,
  config: ResolvedOverlayRelayConfig
): Socket => {
  return io(config.endpoint, {
    transports: ["websocket"],
    forceNew: true,
    query: { roomId },
  });
};

export const __overlaySocketInternals = {
  reset() {
    relayEndpoint = null;
    serverNotReadyWarningLogged = false;
  },
  getConfig(): OverlayRelayConfig {
    return {
      endpoint: relayEndpoint ?? undefined,
    };
  },
};
