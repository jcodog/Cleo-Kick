import type { Hono } from "hono";
import type { AppEnv } from "../types";

/**
 * Registers the dashboard redirect route which forwards traffic to the
 * configured dashboard URL when available.
 */
export function registerDashboardRoute(app: Hono<AppEnv>): void {
  app.get("/", (c) => {
    const dashboardUrl = c.env.DASHBOARD_URL;
    if (!dashboardUrl) {
      return c.json({ error: "Dashboard URL not configured" }, 500);
    }

    return c.redirect(dashboardUrl, 302);
  });
}
