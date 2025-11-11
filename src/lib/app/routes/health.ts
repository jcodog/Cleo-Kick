import type { Hono } from "hono";
import type { AppEnv } from "../types";

/**
 * Registers a lightweight health endpoint for uptime and diagnostics checks.
 */
export function registerHealthRoute(app: Hono<AppEnv>): void {
  app.get("/health", (c) => c.text("ok"));
}
