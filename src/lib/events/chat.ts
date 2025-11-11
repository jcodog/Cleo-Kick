import { ChatMessageEvent } from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import { sendMessage } from "../functions/messages";
import { ContentfulStatusCode } from "hono/utils/http-status";
import type { KickBroadcasterAuth } from "../functions/middleware";
import type { WebhookContext } from "../app/types";

/**
 * Processes incoming chat commands and responds when the payload starts with
 * the bot command prefix.
 */
export const commandReply = async (
  event: ChatMessageEvent,
  _db: DbClient,
  ctx: WebhookContext
): Promise<Response> => {
  if (!event.content.startsWith("!")) {
    console.log("[Chat] No command - Returning null");
    return ctx.json(
      { message: "No command" },
      { status: 200 as ContentfulStatusCode }
    );
  }

  const broadcasterAuth = ctx.get(
    "kickBroadcasterAuth"
  ) as KickBroadcasterAuth | null;
  if (!broadcasterAuth) {
    console.error(
      `[event:${event.eventType}:error] Broadcaster ${event.broadcaster.username}[${event.broadcaster.user_id}] is not registered.`
    );
    return ctx.json({ message: "Broadcaster not registered" }, { status: 404 });
  }

  console.log("[Chat] Broadcaster valid - sending message");

  const message = event.content.slice(1).trim();
  if (!message) {
    return ctx.json(
      { message: "No command" },
      { status: 200 as ContentfulStatusCode }
    );
  }

  const [command, ...argParts] = message.split(/\s+/);

  const args = argParts.join(" ");
  if (command === "echo") {
    const message = args;
    const sent = await sendMessage({
      broadcaster: {
        name: event.broadcaster.username!,
        accessToken: broadcasterAuth.accessToken,
      },
      message,
    });

    if (sent.sent) {
      console.log("[Chat] Message sent");
      return ctx.json(
        { message: sent.message },
        { status: sent.status as ContentfulStatusCode }
      );
    }

    console.log("[Chat] Message not sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }

  console.log("[Chat] Unknown command", { command, args });
  return ctx.json(
    { message: "Unknown command" },
    { status: 200 as ContentfulStatusCode }
  );
};
