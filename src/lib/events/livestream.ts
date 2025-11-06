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

  console.log("[Live status] Broadcaster valid - sending message");

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
      console.log("[Live status] Message sent");
      return ctx.json(
        { message: sent.message },
        { status: sent.status as ContentfulStatusCode }
      );
    } else {
      console.log("[Live status] Message not sent")
      return ctx.json(
        { message: sent.message },
        { status: sent.status as ContentfulStatusCode }
      );
    }
};
