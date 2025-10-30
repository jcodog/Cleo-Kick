import { Hono } from "hono";
import {
  KickWebhookError,
  KickWebhookSignatureError,
  validateKickWebhook,
} from "./lib/functions/validateWebhook";
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

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  const dashboardUrl = c.env.DASHBOARD_URL;
  if (!dashboardUrl) {
    return c.json({ error: "Dashboard URL not configured" }, 500);
  }

  return c.redirect(dashboardUrl, 302);
});

app.post("/webhook", async (c) => {
  try {
    const result = await validateKickWebhook(c.req.raw);

    console.log("Verified Kick webhook", {
      messageId: result.messageId,
      eventType: result.eventType,
      knownType: result.knownType,
    });

    return c.json({ received: true });
  } catch (error) {
    await recordError(c.env, {
      message: error instanceof Error ? error.message : "Unknown webhook error",
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
});

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

app.get("/health", (c) => c.text("ok"));

export default app;
