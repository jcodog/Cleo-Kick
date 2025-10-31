import { Hono } from "hono";
import type { KickWebhookValidationResult } from "./lib/functions/validateWebhook";
import { createKickWebhookValidationMiddleware } from "./lib/functions/middleware";
import {
  logErrorToD1,
  type ErrorLogEntry,
} from "./lib/functions/errors/logError";
import { notifyDeveloperOfError } from "./lib/functions/errors/notifyDeveloper";

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

app.post("/webhook", (c) => {
  const result = c.get("kickWebhook");

  console.log("Verified Kick webhook", {
    messageId: result.messageId,
    eventType: result.eventType,
    knownType: result.knownType,
  });

  return c.json({ received: true });
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
