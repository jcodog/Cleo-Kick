import type { ContentfulStatusCode } from "hono/utils/http-status";

interface ErrorLogEntry {
  message: string;
  status?: number | ContentfulStatusCode;
  context?: Record<string, unknown>;
}

let schemaInitialised = false;

export async function logErrorToD1(
  d1: D1Database,
  entry: ErrorLogEntry
): Promise<void> {
  if (!schemaInitialised) {
    await d1
      .prepare(
        `CREATE TABLE IF NOT EXISTS error_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
          status INTEGER,
          message TEXT NOT NULL,
          context TEXT
        )`
      )
      .run();

    schemaInitialised = true;
  }

  const contextJson = entry.context
    ? JSON.stringify(entry.context).slice(0, 16_000)
    : null;

  await d1
    .prepare(
      `INSERT INTO error_logs (status, message, context)
       VALUES (?1, ?2, ?3)`
    )
    .bind(entry.status ?? null, entry.message, contextJson)
    .run();
}

export type { ErrorLogEntry };
