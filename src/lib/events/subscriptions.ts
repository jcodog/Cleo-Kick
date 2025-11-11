import {
  NewSubscriptionEvent,
  SubscriptionGiftEvent,
  SubscriptionRenewalEvent,
} from "kick-api-types/payloads";
import { DbClient } from "../prisma";
import { sendMessage } from "../functions/messages";
import { ContentfulStatusCode } from "hono/utils/http-status";
import type { KickBroadcasterAuth } from "../functions/middleware";
import type { WebhookContext } from "../app/types";

/**
 * Thanks viewers who start a new subscription.
 */
export const newSubscriber = async (
  event: NewSubscriptionEvent,
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

  console.log("[Sub new] Broadcaster valid - sending message");

  const message = `@${event.subscriber.username} thank you for subscribing to ${event.broadcaster.username}'s channel!`;
  const sent = await sendMessage({
    broadcaster: {
      name: event.broadcaster.username!,
      accessToken: broadcasterAuth.accessToken,
    },
    message,
  });

  if (sent.sent) {
    console.log("[Sub new] Message sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  } else {
    console.log("[Sub new] Message not sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }
};

/**
 * Celebrates subscription gift batches initiated by a viewer.
 */
export const giftedSubs = async (
  event: SubscriptionGiftEvent,
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

  console.log("[Sub gift] Broadcaster valid - sending message");

  const message = `@${event.gifter.username} thank you for gifting ${event.giftees.length} subs to ${event.broadcaster.username}'s channel!`;
  const sent = await sendMessage({
    broadcaster: {
      name: event.broadcaster.username!,
      accessToken: broadcasterAuth.accessToken,
    },
    message,
  });

  if (sent.sent) {
    console.log("[Sub gift] Message sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  } else {
    console.log("[Sub gift] Message not sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }
};

/**
 * Highlights viewers who renew their existing subscription.
 */
export const renewedSub = async (
  event: SubscriptionRenewalEvent,
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

  console.log("[Sub renew] Broadcaster valid - sending message");

  const message = `@${event.subscriber.username} thank you for subscribing to ${event.broadcaster.username}'s channel! You have been a subscriber for ${event.duration} months!`;
  const sent = await sendMessage({
    broadcaster: {
      name: event.broadcaster.username!,
      accessToken: broadcasterAuth.accessToken,
    },
    message,
  });

  if (sent.sent) {
    console.log("[Sub renew] Message sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  } else {
    console.log("[Sub renew] Message not sent");
    return ctx.json(
      { message: sent.message },
      { status: sent.status as ContentfulStatusCode }
    );
  }
};
