import { KicksGiftedEvent } from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { sendMessage } from "../functions/messages";
import type { KickBroadcasterAuth } from "../functions/middleware";
import type { WebhookContext } from "../app/types";

/**
 * Announces Kick gifts in chat, including optional custom messages from the
 * sender.
 */
export const kicksGifted = async (
  event: KicksGiftedEvent,
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
    return ctx.json({ message: "Broadcaster not registered" }, { status: 404 });
  }

  console.log("[Kicks] Broadcaster valid - sending message");

  const giftMessage =
    typeof event.gift.message === "string" ? event.gift.message.trim() : "";

  let message = `@${event.sender.username} thank you for gifting ${
    event.gift.name
  } for ${event.gift.amount}${
    giftMessage ? ` with the message ${giftMessage}` : ""
  } to ${event.broadcaster.username}'s channel!`;
  const sent = await sendMessage({
    broadcaster: {
      name: event.broadcaster.username!,
      accessToken: broadcasterAuth.accessToken,
    },
    message,
  });

  if (sent.sent) {
    console.log("[Kicks] Message sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  } else {
    console.log("[Kicks] Message not sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }
};
