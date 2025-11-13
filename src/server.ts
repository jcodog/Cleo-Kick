import { serve } from "@hono/node-server";
import { createApp } from "./lib/app/createApp";
import type { Env } from "./lib/config/env";

const parsePort = (value: string | undefined): number => {
  const fallback = 8787;
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    console.warn(
      `Invalid PORT environment value "${value}"; defaulting to ${fallback}.`
    );
    return fallback;
  }

  return parsed;
};

const bindings: Env = {
  DASHBOARD_URL: process.env.DASHBOARD_URL,
  DEVELOPER_EMAIL: process.env.DEVELOPER_EMAIL,
  MAILCHANNELS_API_KEY: process.env.MAILCHANNELS_API_KEY,
  MAILCHANNELS_DKIM_DOMAIN: process.env.MAILCHANNELS_DKIM_DOMAIN,
  MAILCHANNELS_DKIM_SELECTOR: process.env.MAILCHANNELS_DKIM_SELECTOR,
  MAILCHANNELS_DKIM_PRIVATE_KEY: process.env.MAILCHANNELS_DKIM_PRIVATE_KEY,
  MAILCHANNELS_FROM_EMAIL: process.env.MAILCHANNELS_FROM_EMAIL,
  MAILCHANNELS_FROM_NAME: process.env.MAILCHANNELS_FROM_NAME,
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
  KICK_CLIENT_ID: process.env.KICK_CLIENT_ID,
  KICK_CLIENT_SECRET: process.env.KICK_CLIENT_SECRET,
  PORT: process.env.PORT,
  ERROR_LOG_PROCESS_NAME: process.env.ERROR_LOG_PROCESS_NAME,
  LOGTAIL_SOURCE_TOKEN: process.env.LOGTAIL_SOURCE_TOKEN,
  LOGTAIL_ENDPOINT: process.env.LOGTAIL_ENDPOINT,
};

const port = parsePort(process.env.PORT);
const app = createApp();

serve({
  port,
  fetch: (request) => app.fetch(request, bindings),
});

console.log(`Kick bot server listening on http://localhost:${port}`);

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled promise rejection", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception", error);
});
