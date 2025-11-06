import { ChatMessageEvent } from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import { context } from "../..";
import { sendMessage } from "../functions/messages";
import { ContentfulStatusCode } from "hono/utils/http-status";

export const commandReply = async (
  event: ChatMessageEvent,
  db: DbClient,
  ctx: context
) => {
  console.log(event.content);
  if (!event.content.startsWith("!"))
    return ctx.json({}, { status: 204 as ContentfulStatusCode });

  const broadcaster = await db.account.findFirst({
    where: {
      accountId: String(event.broadcaster.user_id),
    },
    cacheStrategy: {
      ttl: 3600,
    },
  });
  if (!broadcaster) {
    console.error(
      `[event:${event.eventType}:error] Broadcaster ${event.broadcaster.username}[${event.broadcaster.user_id}] is not registered.`
    );
    return ctx.json({ message: "Broadcaster not registered" }, { status: 404 });
  }

  console.log("[Chat] Broadcaster valid - sending message");

  const message = event.content.slice(1).trim();
  if (!message) return;

  const [command, ...argParts] = message.split(/\s+/);
  if (!command) return;

  const args = argParts.join(" ");
  if (command === "echo") {
    const message = args;
    const sent = await sendMessage({
      broadcaster: {
        name: event.broadcaster.username!,
        accessToken: broadcaster.accessToken!,
      },
      message,
    });

    if (sent.sent) {
      console.log("[Follow] Message sent");
      return ctx.json(
        { message: sent.message },
        { status: sent.status as ContentfulStatusCode }
      );
    } else {
      console.log("[Follow] Message not sent");
      return ctx.json(
        { message: sent.message },
        { status: sent.status as ContentfulStatusCode }
      );
    }
  }

  console.log("[Chat] Unknown command:", JSON.stringify({ command, args }));
  return ctx.json({}, { status: 204 as ContentfulStatusCode });
};
