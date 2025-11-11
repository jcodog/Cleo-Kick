import { Hono } from "hono";
import type { AppEnv } from "./types";
import { registerDashboardRoute } from "./routes/dashboard";
import { registerHealthRoute } from "./routes/health";
import {
  registerWebhookRoute,
  type WebhookRouteOverrides,
} from "./routes/webhook";

export interface CreateAppOptions {
  webhook?: WebhookRouteOverrides;
}

/**
 * Builds and configures the Hono application that powers the Kick bot API.
 */
export function createApp(options: CreateAppOptions = {}): Hono<AppEnv> {
  const app = new Hono<AppEnv>();

  registerDashboardRoute(app);
  registerWebhookRoute(app, options.webhook);
  registerHealthRoute(app);

  return app;
}
