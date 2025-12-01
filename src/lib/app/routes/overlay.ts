import type { Hono } from "hono";
import type { AppEnv } from "../types";
import {
  formatOverlayRoomId,
  isOverlayRelayConfigured,
  sendOverlayMessage,
  type OverlayMessage,
} from "../../overlaySocket";

interface TestMessageRequest {
  roomId?: string;
  text?: string;
  author?: string;
  platform?: string;
  avatarUrl?: string;
}

const sanitizeOptional = (value?: string): string | undefined => {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export function registerOverlayRoutes(app: Hono<AppEnv>): void {
  app.post("/test-message", async (c) => {
    const overrides = {
      endpoint: c.env.WS_URL,
    };

    const hasEnvOverrides = Boolean(overrides.endpoint?.trim().length);
    if (!isOverlayRelayConfigured() && !hasEnvOverrides) {
      return c.json({ message: "Overlay relay not configured" }, 503);
    }

    const body = await c.req.json<TestMessageRequest>().catch(() => null);
    if (!body) {
      return c.json({ message: "Invalid JSON body" }, 400);
    }

    const formattedRoomId = formatOverlayRoomId(body.roomId ?? "");
    if (!formattedRoomId) {
      return c.json({ message: "roomId is required" }, 400);
    }

    const text = body.text?.trim() || "Test message";
    const author = body.author?.trim() || "hono:test";

    const message: OverlayMessage | null = await sendOverlayMessage(
      {
        roomId: formattedRoomId,
        text,
        author,
        platform: sanitizeOptional(body.platform),
        avatarUrl: sanitizeOptional(body.avatarUrl),
      },
      overrides
    );

    if (!message) {
      return c.json({ message: "Unable to publish chat message" }, 500);
    }

    return c.json({ status: "sent", message });
  });
}
