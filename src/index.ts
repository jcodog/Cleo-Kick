import { Context, Hono } from "hono";
import type {
  KickWebhookEventType,
  KickWebhookValidationResult,
} from "./lib/functions/validateWebhook";
import { createKickWebhookValidationMiddleware } from "./lib/functions/middleware";
import {
  logErrorToD1,
  type ErrorLogEntry,
} from "./lib/functions/errors/logError";
import { notifyDeveloperOfError } from "./lib/functions/errors/notifyDeveloper";
import { getDb } from "./lib/prisma";
import { env } from "hono/adapter";
import { followEvent } from "./lib/events/follow";
import {
  ChannelFollowEvent,
  ChatMessageEvent,
  KicksGiftedEvent,
  LivestreamStatusUpdatedEvent,
  NewSubscriptionEvent,
  SubscriptionGiftEvent,
  SubscriptionRenewalEvent,
} from "kick-api-types/payloads";
import { BlankInput } from "hono/types";
import { livestreamStatusUpdate } from "./lib/events/livestream";
import {
  giftedSubs,
  newSubscriber,
  renewedSub,
} from "./lib/events/subscriptions";
import { kicksGifted } from "./lib/events/kicks";
import { commandReply } from "./lib/events/chat";

export interface Env {
  readonly DASHBOARD_URL?: string;
  readonly ERROR_LOG_DB?: D1Database;
  readonly DEVELOPER_EMAIL?: string;
  readonly MAILCHANNELS_API_KEY?: string;
  readonly MAILCHANNELS_DKIM_DOMAIN?: string;
  readonly MAILCHANNELS_DKIM_SELECTOR?: string;
  readonly MAILCHANNELS_DKIM_PRIVATE_KEY?: string;
  readonly MAILCHANNELS_FROM_EMAIL?: string;
  readonly MAILCHANNELS_FROM_NAME?: string;
  readonly DATABASE_URL?: string;
  readonly DIRECT_URL?: string;
}

let missingErrorDbWarningShown = false;

type AppEnv = {
  Bindings: Env;
  Variables: {
    kickWebhook: KickWebhookValidationResult;
  };
};

const app = new Hono<AppEnv>();

const validateKickWebhookMiddleware =
  createKickWebhookValidationMiddleware<AppEnv>(recordError);

app.get("/", (c) => {
  const dashboardUrl = c.env.DASHBOARD_URL;
  if (!dashboardUrl) {
    return c.json({ error: "Dashboard URL not configured" }, 500);
  }

  return c.redirect(dashboardUrl, 302);
});

app.use("/webhook", validateKickWebhookMiddleware);

export type context = Context<AppEnv, "/webhook", BlankInput>;

app.post("/webhook", async (c) => {
  const result = c.get("kickWebhook");
  const db = getDb(env(c).DATABASE_URL ?? "");

  console.log(result.eventType);

  switch (result.eventType as KickWebhookEventType) {
    case "channel.followed":
      return await followEvent(result.payload as ChannelFollowEvent, db, c);

    case "livestream.status.updated":
      return await livestreamStatusUpdate(
        result.payload as LivestreamStatusUpdatedEvent,
        db,
        c
      );

    case "channel.subscription.new":
      return await newSubscriber(result.payload as NewSubscriptionEvent, db, c);

    case "channel.subscription.gifts":
      return await giftedSubs(result.payload as SubscriptionGiftEvent, db, c);

    case "channel.subscription.renewal":
      return await renewedSub(
        result.payload as SubscriptionRenewalEvent,
        db,
        c
      );

    case "kicks.gifted":
      return await kicksGifted(result.payload as KicksGiftedEvent, db, c);

    case "chat.message.sent":
      return await commandReply(result.payload as ChatMessageEvent, db, c);

    default:
      return c.json(
        {
          message: "Unknown event type",
        },
        { status: 422 }
      );
  }
});

app.get("/health", (c) => c.text("ok"));

export default app;

async function recordError(env: Env, entry: ErrorLogEntry): Promise<void> {
  const timestamp = new Date().toISOString();

  if (!env.ERROR_LOG_DB) {
    if (!missingErrorDbWarningShown) {
      console.warn(
        "Missing ERROR_LOG_DB binding; skipping persisted error logs."
      );
      missingErrorDbWarningShown = true;
    }
  } else {
    try {
      await logErrorToD1(env.ERROR_LOG_DB, entry);
    } catch (persistError) {
      console.error("Failed to persist error log", persistError);
    }
  }

  try {
    await notifyDeveloperOfError(env, entry, timestamp);
  } catch (notifyError) {
    console.error("Failed to send developer notification", notifyError);
  }
}
