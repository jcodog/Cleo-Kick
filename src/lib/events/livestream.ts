import { LivestreamStatusUpdatedEvent } from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import { context } from "../..";
import { sendMessage } from "../functions/messages";
import { ContentfulStatusCode } from "hono/utils/http-status";

export const livestreamStatusUpdate = async (
  event: LivestreamStatusUpdatedEvent,
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
    return ctx.json({ recieved: true, message: "Broadcaster not registered" });
  }

  const message = `${event.broadcaster.username} is now ${
    event.is_live ? "live" : "offline"
  }.`;
  const sent = await sendMessage({
    broadcaster: {
      name: event.broadcaster.username!,
      accessToken: broadcaster.accessToken!,
    },
    message,
  });

  if (sent.sent) {
    return ctx.json(
      { recieved: true, message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  } else {
    return ctx.json(
      { recieved: true, message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }
};
