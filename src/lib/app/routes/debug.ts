import type { Hono } from "hono";
import type { AppEnv } from "../types";
import { notifyDeveloperOfError } from "../../functions/errors/notifyDeveloper";

interface TestEmailRequestBody {
  message?: string;
  context?: Record<string, unknown>;
}

function resolveMessage(body: TestEmailRequestBody | null): string {
  if (!body?.message) {
    return "Kick bot test notification";
  }

  const trimmed = body.message.trim();
  return trimmed.length > 0 ? trimmed : "Kick bot test notification";
}

function resolveContext(body: TestEmailRequestBody | null) {
  if (!body?.context || typeof body.context !== "object") {
    return undefined;
  }

  return body.context;
}

export function registerDiagnosticsRoute(app: Hono<AppEnv>): void {
  app.post("/debug/test-email", async (c) => {
    if (!c.env.DEVELOPER_EMAIL) {
      return c.json({ error: "Developer email not configured" }, 400);
    }

    let body: TestEmailRequestBody | null = null;
    if (c.req.header("Content-Type")?.includes("application/json")) {
      try {
        body = (await c.req.json()) as TestEmailRequestBody;
      } catch (error) {
        return c.json({ error: "Invalid JSON payload" }, 400);
      }
    }

    const message = resolveMessage(body);
    const context = resolveContext(body);
    const timestamp = new Date().toISOString();

    await notifyDeveloperOfError(
      c.env,
      {
        message,
        status: 200,
        context: {
          trigger: "debug/test-email",
          ...(context ?? {}),
        },
      },
      timestamp
    );

    return c.json({ status: "sent" });
  });
}
