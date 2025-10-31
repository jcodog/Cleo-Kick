import type { MiddlewareHandler } from "hono";
import {
  KickWebhookError,
  KickWebhookSignatureError,
  validateKickWebhook,
  type KickWebhookValidationResult,
} from "./validateWebhook";
import type { ErrorLogEntry } from "./errors/logError";
import { Env } from "../..";

export type AppVariables = {
  kickWebhook: KickWebhookValidationResult;
};

export function createKickWebhookValidationMiddleware<
  AppEnv extends {
    Bindings: Env;
    Variables: AppVariables & Record<string, unknown>;
  }
>(
  recordError: (env: AppEnv["Bindings"], entry: ErrorLogEntry) => Promise<void>
): MiddlewareHandler<AppEnv> {
  return async (c, next) => {
    try {
      const result = await validateKickWebhook(c.req.raw);
      c.set("kickWebhook", result);
      await next();
    } catch (error) {
      await recordError(c.env, {
        message:
          error instanceof Error ? error.message : "Unknown webhook error",
        status: error instanceof KickWebhookError ? error.status : 500,
        context: {
          path: c.req.path,
          eventType: c.req.header("Kick-Event-Type"),
          messageId: c.req.header("Kick-Event-Message-Id"),
        },
      });

      if (error instanceof KickWebhookSignatureError) {
        console.warn("Rejected Kick webhook", { reason: error.message });
        return c.json({ error: "Unauthorized" }, error.status);
      }

      if (error instanceof KickWebhookError) {
        console.error("Invalid Kick webhook", { reason: error.message });
        return c.json({ error: error.message }, error.status);
      }

      console.error("Unexpected webhook failure", error);
      return c.json({ error: "Internal Server Error" }, 500);
    }
  };
}
