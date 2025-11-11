import type {
  ChannelFollowEvent,
  ChatMessageEvent,
  KicksGiftedEvent,
  LivestreamStatusUpdatedEvent,
  NewSubscriptionEvent,
  SubscriptionGiftEvent,
  SubscriptionRenewalEvent,
} from "kick-api-types/payloads";
import type { KickWebhookValidationResult } from "../../functions/validateWebhook";
import type { DbClient } from "../../prisma";
import type { WebhookContext } from "../types";

/**
 * Typed collection of handlers invoked for each supported Kick webhook event.
 */
export interface WebhookEventHandlers {
  followEvent: (
    event: ChannelFollowEvent,
    db: DbClient,
    ctx: WebhookContext
  ) => Promise<Response>;
  livestreamStatusUpdate: (
    event: LivestreamStatusUpdatedEvent,
    db: DbClient,
    ctx: WebhookContext
  ) => Promise<Response>;
  newSubscriber: (
    event: NewSubscriptionEvent,
    db: DbClient,
    ctx: WebhookContext
  ) => Promise<Response>;
  giftedSubs: (
    event: SubscriptionGiftEvent,
    db: DbClient,
    ctx: WebhookContext
  ) => Promise<Response>;
  renewedSub: (
    event: SubscriptionRenewalEvent,
    db: DbClient,
    ctx: WebhookContext
  ) => Promise<Response>;
  kicksGifted: (
    event: KicksGiftedEvent,
    db: DbClient,
    ctx: WebhookContext
  ) => Promise<Response>;
  commandReply: (
    event: ChatMessageEvent,
    db: DbClient,
    ctx: WebhookContext
  ) => Promise<Response>;
}

/**
 * Dispatches a validated webhook payload to the appropriate event handler.
 */
export async function dispatchWebhookEvent(
  result: KickWebhookValidationResult,
  db: DbClient,
  ctx: WebhookContext,
  handlers: WebhookEventHandlers
): Promise<Response> {
  switch (result.eventType) {
    case "channel.followed":
      return handlers.followEvent(
        result.payload as ChannelFollowEvent,
        db,
        ctx
      );
    case "livestream.status.updated":
      return handlers.livestreamStatusUpdate(
        result.payload as LivestreamStatusUpdatedEvent,
        db,
        ctx
      );
    case "channel.subscription.new":
      return handlers.newSubscriber(
        result.payload as NewSubscriptionEvent,
        db,
        ctx
      );
    case "channel.subscription.gifts":
      return handlers.giftedSubs(
        result.payload as SubscriptionGiftEvent,
        db,
        ctx
      );
    case "channel.subscription.renewal":
      return handlers.renewedSub(
        result.payload as SubscriptionRenewalEvent,
        db,
        ctx
      );
    case "kicks.gifted":
      return handlers.kicksGifted(result.payload as KicksGiftedEvent, db, ctx);
    case "chat.message.sent":
      return handlers.commandReply(result.payload as ChatMessageEvent, db, ctx);
    default:
      return ctx.json({ message: "Unknown event type" }, 422);
  }
}
