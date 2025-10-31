# Cleo Kick ChatBot

[![Vitest](https://img.shields.io/endpoint?url=https://jcodog.github.io/Cleo-Kick/badges/tests.json&cacheSeconds=300)](https://jcodog.github.io/Cleo-Kick/tests.html)
[![Coverage](https://img.shields.io/endpoint?url=https://jcodog.github.io/Cleo-Kick/badges/coverage.json&cacheSeconds=300)](https://jcodog.github.io/Cleo-Kick/)

A Cloudflare Workers project powered by [Bun](https://bun.sh/), [TypeScript](https://www.typescriptlang.org/), and [Hono](https://hono.dev/).

## Prerequisites

- [Bun](https://bun.sh/docs/installation)
- Cloudflare account with [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) authentication (`bunx wrangler login`)

## Setup

```bash
bun install
```

## Local Development

```bash
bun run dev
```

This starts Wrangler in development mode and serves the Worker locally.

## Type Checking

```bash
bun run typecheck
```

## Testing

Run the Vitest suite once:

```bash
bun run test
```

Run in watch mode:

```bash
bun run test:watch
```

Inspect the HTML coverage report (thresholds are locked at 100%):

```bash
bun run coverage
```

The CI workflow publishes the HTML report and a Vitest results summary (at `/tests.html`) to GitHub Pages at <https://jcodog.github.io/Cleo-Kick/> once it has run at least once, so the generated files stay out of the repository.

## Deployment

Deployment is handled automatically via the GitHub ➜ Cloudflare Workers integration. Pushes to the default branch trigger Cloudflare to build the Worker using Bun and publish it with the settings in `wrangler.json`.

## Observability & Error Logging

- Cloudflare observability is enabled in `wrangler.json` to surface traces and logs inside the Workers dashboard.
- Configure a Cloudflare D1 database and update the `ERROR_LOG_DB` binding in `wrangler.json` (`database_id`/`database_name`).
- Create the backing table once (Wrangler CLI or dashboard):

  ```bash
  bunx wrangler d1 execute kick-bot-errors --command "CREATE TABLE IF NOT EXISTS error_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')), status INTEGER, message TEXT NOT NULL, context TEXT);"
  ```

- Each webhook failure is recorded with status, message, and JSON context. Review entries via the Cloudflare dashboard or:

  ```bash
  bunx wrangler d1 execute kick-bot-errors --command "SELECT * FROM error_logs ORDER BY created_at DESC LIMIT 20;"
  ```

## Configuration

- Set `DASHBOARD_URL` in `wrangler.json` (or via Cloudflare dashboard) to tell the root route where to redirect users for chatbot management.

## Routes

- `GET /` — redirects to the configured dashboard URL.
- `POST /webhook` — accepts Kick webhook events (expects JSON payloads).
- `GET /health` — lightweight readiness probe.

## Project Structure

- `src/index.ts` — Hono application entry point exported as the Worker.
- `wrangler.json` — Cloudflare Workers configuration consumed by the CI deployment (includes observability + D1 bindings).
- `tsconfig.json` — TypeScript compiler settings tailored for Workers.
- `bunfig.toml` — Bun configuration.
