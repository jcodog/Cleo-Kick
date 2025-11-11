/* c8 ignore file */
/* c8 ignore file */
import type { Context } from "hono";
import type { BlankInput } from "hono/types";
import type { KickWebhookValidationResult } from "../functions/validateWebhook";
import type { KickBroadcasterAuth } from "../functions/middleware";
import type { Env } from "../config/env";

/**
 * Shared set of variable slots placed onto the Hono context during webhook
 * validation.
 */
export interface AppVariables extends Record<string, unknown> {
  kickWebhook: KickWebhookValidationResult;
  kickBroadcasterAuth: KickBroadcasterAuth | null;
}

/**
 * Binding and variable definition used throughout the Kick bot application.
 */
export interface AppEnv {
  Bindings: Env;
  Variables: AppVariables;
}

/**
 * Strongly typed context shape for handlers mounted under the `/webhook`
 * endpoint.
 */
export type WebhookContext = Context<AppEnv, "/webhook", BlankInput>;
