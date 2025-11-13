import type { ContentfulStatusCode } from "hono/utils/http-status";
import { notifyDeveloperOfError } from "./notifyDeveloper";
import type { Env } from "../../config/env";
import { getDb } from "../../prisma";

interface ErrorLogEntry {
  message: string;
  status?: number | ContentfulStatusCode;
  context?: Record<string, unknown>;
  stack?: string;
}

let missingDatabaseWarningShown = false;
let logtailClient: {
  error: (message: string, meta?: Record<string, unknown>) => Promise<unknown>;
} | null = null;
let logtailToken: string | null = null;
let logtailInitialisationWarned = false;

const CONTEXT_MAX_LENGTH = 16_000;

function safeStringify(
  value: unknown,
  spacing = 2,
  maxLength = CONTEXT_MAX_LENGTH
): string {
  try {
    const json = JSON.stringify(
      value,
      (_key, innerValue) => {
        if (innerValue instanceof Error) {
          return {
            name: innerValue.name,
            message: innerValue.message,
            stack: innerValue.stack,
          };
        }

        if (typeof innerValue === "bigint") {
          return Number(innerValue);
        }

        return innerValue;
      },
      spacing
    );

    if (!json) {
      return "{}";
    }

    return json.length > maxLength ? `${json.slice(0, maxLength)}…` : json;
  } catch (error) {
    return String(error ?? value);
  }
}

async function getLogtail(env: Env) {
  const token = env.LOGTAIL_SOURCE_TOKEN;
  const endpoint = env.LOGTAIL_ENDPOINT;
  if (!token) {
    logtailClient = null;
    logtailToken = null;
    return null;
  }

  if (logtailClient && logtailToken === token) {
    return logtailClient;
  }

  try {
    const { Logtail } = await import("@logtail/node");
    logtailClient = new Logtail(token, {
      endpoint,
    });
    logtailToken = token;
    return logtailClient;
  } catch (error) {
    if (!logtailInitialisationWarned) {
      console.error("Failed to initialise Logtail client", error);
      logtailInitialisationWarned = true;
    }
    logtailClient = null;
    logtailToken = null;
    return null;
  }
}

async function persistError(env: Env, entry: ErrorLogEntry, timestamp: Date) {
  const databaseUrl = env.DATABASE_URL;
  if (!databaseUrl) {
    if (!missingDatabaseWarningShown) {
      console.warn(
        "Missing DATABASE_URL configuration; skipping persisted error logs."
      );
      missingDatabaseWarningShown = true;
    }
    return;
  }

  try {
    const db = getDb(databaseUrl);
    await db.errorLog.create({
      data: {
        process: env.ERROR_LOG_PROCESS_NAME ?? "kick-bot",
        message: entry.message,
        status: typeof entry.status === "number" ? entry.status : null,
        stackTrace: entry.stack ?? null,
        context: entry.context ? safeStringify(entry.context) : null,
        createdAt: timestamp,
      },
    });
  } catch (error) {
    console.error("Failed to persist error log", error);
  }
}

async function forwardToLogtail(
  env: Env,
  entry: ErrorLogEntry,
  timestamp: Date
) {
  const client = await getLogtail(env);
  if (!client) {
    return;
  }

  try {
    await client.error(entry.message, {
      status: entry.status ?? null,
      process: env.ERROR_LOG_PROCESS_NAME ?? "kick-bot",
      timestamp: timestamp.toISOString(),
      context: entry.context ?? null,
    });
  } catch (error) {
    console.error("Failed to send error to Logtail", error);
  }
}

export async function recordError(
  env: Env,
  entry: ErrorLogEntry
): Promise<void> {
  const timestamp = new Date();
  const isoTimestamp = timestamp.toISOString();

  await persistError(env, entry, timestamp);
  await forwardToLogtail(env, entry, timestamp);

  try {
    await notifyDeveloperOfError(env, entry, isoTimestamp);
  } catch (error) {
    console.error("Failed to send developer notification", error);
  }
}

export type { ErrorLogEntry };
