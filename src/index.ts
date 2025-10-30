import { Hono } from "hono";
import {
  KickWebhookError,
  KickWebhookSignatureError,
  validateKickWebhook,
} from "./lib/functions/validateWebhook";

export interface Env {
  readonly DASHBOARD_URL?: string;
}

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

app.get("/health", (c) => c.text("ok"));

export default app;
