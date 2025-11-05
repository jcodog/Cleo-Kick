import { KicksGiftedEvent } from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import { context } from "../..";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { sendMessage } from "../functions/messages";

export const kicksGifted = async (
  event: KicksGiftedEvent,
  db: DbClient,
  ctx: context
) => {
  const broadcaster = await db.account.findFirst({
    where: {
      accountId: String(event.broadcaster.user_id),
    },
  });
  if (!broadcaster) {
    console.error(
      `[event:${event.eventType}:error] Broadcaster ${event.broadcaster.username}[${event.broadcaster.user_id}] is not registered.`
    );
    return ctx.json({ message: "Broadcaster not registered" }, { status: 404 });
  }

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
      accessToken: broadcaster.accessToken!,
    },
    message,
  });

  if (sent.sent) {
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  } else {
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }
};
