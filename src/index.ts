import { Hono } from "hono";

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
    const event = await c.req.json<Record<string, unknown>>();

    console.log("Received Kick event", event);

    return c.json({ received: true });
  } catch (error) {
    console.error("Invalid webhook payload", error);
    return c.json({ error: "Invalid JSON payload" }, 400);
  }
});

app.get("/health", (c) => c.text("ok"));

export default app;
