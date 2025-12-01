import { ChatMessageEvent } from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import type { WebhookContext } from "../app/types";
import { sendOverlayMessage } from "../overlaySocket";
import { sendMessage } from "../functions/messages";
import { KickBroadcasterAuth } from "../functions/middleware";
import { ContentfulStatusCode } from "hono/utils/http-status";

/**
 * Processes incoming chat commands and responds when the payload starts with
 * the bot command prefix.
 */
export const chatHandler = async (
  event: ChatMessageEvent,
  _db: DbClient,
  ctx: WebhookContext
): Promise<Response> => {
  const content = event.content ?? "";
  const trimmedContent = content.trim();
  const username = event.sender?.username ?? event.broadcaster.username ?? "";
  const avatarUrl = event.sender?.profile_picture ?? undefined;
  const roomId = `overlay-chat-${event.broadcaster.user_id}`;

  console.log(
    `[Chat] Received message broadcaster=${event.broadcaster.username}[${
      event.broadcaster.user_id
    }] sender=${username || "<unknown>"} contentLength=${content.length}`
  );

  if (trimmedContent.length > 0) {
    const overlayOverrides = ctx.env.WS_URL
      ? {
          endpoint: ctx.env.WS_URL,
        }
      : undefined;

    console.debug(
      `[Chat] Forwarding overlay message room=${roomId} sender=${
        username || "<unknown>"
      }`
    );
    const overlayPayload = await sendOverlayMessage(
      {
        roomId,
        author: username,
        text: content,
        platform: "kick",
        avatarUrl,
      },
      overlayOverrides
    );

    if (!overlayPayload) {
      const displayName = username || "<unknown>";
      console.debug(
        `[Chat] Overlay relay not ready; skipped room=${roomId} sender=${displayName}`
      );
    }
  } else {
    console.debug(
      `[Chat] Ignoring blank message broadcaster=${event.broadcaster.user_id}`
    );
  }

  const prefix = "!";

  if (content.startsWith(prefix)) {
    const [command] = content.slice(prefix.length).trim().split(/\s+/);
    console.log(
      `[Chat] Command detected broadcaster=${event.broadcaster.username}[${
        event.broadcaster.user_id
      }] command=${command || "<none>"}`
    );
    if (!command) {
      return ctx.json({ ok: true }, { status: 200 });
    }

    if (command === "ping") {
      const broadcasterAuth = ctx.get(
        "kickBroadcasterAuth"
      ) as KickBroadcasterAuth | null;
      if (!broadcasterAuth) {
        console.error(
          `[event:${event.eventType}:error] Broadcaster ${event.broadcaster.username}[${event.broadcaster.user_id}] is not registered.`
        );
        return ctx.json(
          { message: "Broadcaster not registered" },
          { status: 404 }
        );
      }

      const message = "Pong!";
      const sent = await sendMessage({
        broadcaster: {
          name: event.broadcaster.username!,
          accessToken: broadcasterAuth.accessToken,
        },
        message,
      });

      if (sent.sent) {
        console.log("[Chat-Command] Message sent");
        return ctx.json(
          { message: sent.message },
          { status: sent.status as ContentfulStatusCode }
        );
      } else {
        console.log("[Chat-Command] Message not sent");
        return ctx.json(
          { message: sent.message },
          { status: sent.status as ContentfulStatusCode }
        );
      }
    } else {
      console.debug(
        `[Chat] Unknown command ignored broadcaster=${event.broadcaster.user_id} command=${command}`
      );
    }
  }

  return ctx.json({ ok: true }, { status: 200 });
};
