import { LivestreamStatusUpdatedEvent } from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import { sendMessage } from "../functions/messages";
import { ContentfulStatusCode } from "hono/utils/http-status";
import type { KickBroadcasterAuth } from "../functions/middleware";
import type { WebhookContext } from "../app/types";

/**
 * Notifies chat when a broadcaster toggles their livestream status.
 */
export const livestreamStatusUpdate = async (
  event: LivestreamStatusUpdatedEvent,
  _db: DbClient,
  ctx: WebhookContext
) => {
  const broadcasterAuth = ctx.get(
    "kickBroadcasterAuth"
  ) as KickBroadcasterAuth | null;
  if (!broadcasterAuth) {
    console.error(
      `[event:${event.eventType}:error] Broadcaster ${event.broadcaster.username}[${event.broadcaster.user_id}] is not registered.`
    );
    return ctx.json({ recieved: true, message: "Broadcaster not registered" });
  }

  console.log("[Live status] Broadcaster valid - sending message");

  const message = `${event.broadcaster.username} is now ${
    event.is_live ? "live" : "offline"
  }.`;
  const sent = await sendMessage({
    broadcaster: {
      name: event.broadcaster.username!,
      accessToken: broadcasterAuth.accessToken,
    },
    message,
  });

  if (sent.sent) {
    console.log("[Live status] Message sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  } else {
    console.log("[Live status] Message not sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }
};
