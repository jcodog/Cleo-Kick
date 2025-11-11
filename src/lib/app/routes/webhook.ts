import type { Hono } from "hono";
import { env as honoEnv } from "hono/adapter";
import { createKickWebhookValidationMiddleware } from "../../functions/middleware";
import { recordError } from "../../functions/errors/logError";
import { getDb } from "../../prisma";
import { followEvent } from "../../events/follow";
import { livestreamStatusUpdate } from "../../events/livestream";
import {
  newSubscriber,
  giftedSubs,
  renewedSub,
} from "../../events/subscriptions";
import { kicksGifted } from "../../events/kicks";
import { commandReply } from "../../events/chat";
import type { AppEnv, WebhookContext } from "../types";
import {
  dispatchWebhookEvent,
  type WebhookEventHandlers,
} from "../handlers/dispatchWebhookEvent";
import type { DbClient } from "../../prisma";

/**
 * Concrete functions used by the webhook route when no overrides are
 * provided.
 */
export interface WebhookRouteDependencies {
  recordError: typeof recordError;
  getDb: typeof getDb;
  handlers: WebhookEventHandlers;
}

/**
 * Optional overrides that allow tests and integrations to swap out webhook
 * dependencies such as persistence and event handlers.
 */
export interface WebhookRouteOverrides {
  recordError?: typeof recordError;
  getDb?: typeof getDb;
  handlers?: Partial<WebhookEventHandlers>;
}

const defaultDependencies: WebhookRouteDependencies = {
  recordError,
  getDb,
  handlers: {
    followEvent,
    livestreamStatusUpdate,
    newSubscriber,
    giftedSubs,
    renewedSub,
    kicksGifted,
    commandReply,
  },
};

/**
 * Merges optional overrides with the production webhook dependencies.
 */
function resolveDependencies(
  overrides?: WebhookRouteOverrides
): WebhookRouteDependencies {
  const resolvedHandlers: WebhookEventHandlers = {
    ...defaultDependencies.handlers,
    ...(overrides?.handlers ?? {}),
  };

  return {
    recordError: overrides?.recordError ?? defaultDependencies.recordError,
    getDb: overrides?.getDb ?? defaultDependencies.getDb,
    handlers: resolvedHandlers,
  };
}

/**
 * Wires up the Kick webhook middleware and request handler.
 */
export function registerWebhookRoute(
  app: Hono<AppEnv>,
  overrides?: WebhookRouteOverrides
): void {
  const dependencies = resolveDependencies(overrides);
  const webhookMiddleware = createKickWebhookValidationMiddleware<AppEnv>(
    dependencies.recordError
  );

  app.use("/webhook", webhookMiddleware);

  app.post("/webhook", async (c: WebhookContext) => {
    const result = c.get("kickWebhook");
    const databaseUrl = honoEnv(c).DATABASE_URL ?? "";
    const db: DbClient = dependencies.getDb(databaseUrl);

    return dispatchWebhookEvent(result, db, c, dependencies.handlers);
  });
}
