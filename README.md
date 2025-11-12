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

### VPS / Node Runtime

To run the Kick bot on a traditional VPS (or any Node-compatible host), use
the bundled Hono Node server:

```bash
bun run start
```

Provide the required environment variables (for example via a `.env` file or
your process manager). At minimum you will need `DATABASE_URL`,
`KICK_CLIENT_ID`, `KICK_CLIENT_SECRET`, and any MailChannels settings you rely
on. If you are using Prisma Accelerate, expose `PRISMA_ACCELERATE_URL` with your
Accelerate connection string so the cached reads remain active.

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

Cloudflare Workers deployment is still supported and handled automatically via
the GitHub ➜ Cloudflare Workers integration. Pushes to the default branch
trigger Cloudflare to build the Worker using Bun and publish it with the
settings in `wrangler.json`.

For self-hosted deployments, run `bun install` followed by `bun run start`
under your preferred process supervisor.

## Observability & Error Logging

- Cloudflare observability remains enabled in `wrangler.json` so Workers deployments still surface traces and logs in the dashboard.
- Runtime failures are now persisted through Prisma’s `ErrorLog` model in the primary Postgres database. Apply the latest schema with:

  ```bash
  bunx prisma migrate dev --name add_error_log_table
  ```

  You can review entries locally with Prisma Studio:

  ```bash
  bunx prisma studio --browser none
  ```

- Tag persisted records (and outbound notifications) with a friendly name by setting `ERROR_LOG_PROCESS_NAME` in your environment.
- Forward structured error data to Logtail by creating a source at <https://logtail.com>, copying the source token, and setting `LOGTAIL_SOURCE_TOKEN` in your environment (or `.env`). The app will stream errors automatically whenever the token is present.
- Verify your MailChannels configuration without triggering real errors by calling the diagnostic route:

  ```bash
  curl -X POST http://localhost:8787/debug/test-email \
    -H "Content-Type: application/json" \
    -d '{"message":"Test from Cleo Kick"}'
  ```

  The route returns `{ "status": "sent" }` once the email dispatch is queued.

## Configuration

- Set `DASHBOARD_URL` in `wrangler.json` (or via Cloudflare dashboard) to tell the root route where to redirect users for chatbot management.

## Routes

- `GET /` — redirects to the configured dashboard URL.
- `POST /webhook` — accepts Kick webhook events (expects JSON payloads).
- `GET /health` — lightweight readiness probe.
- `POST /debug/test-email` — sends a MailChannels test message to the configured developer inbox.

## Project Structure

- `src/index.ts` — Hono application entry point exported as the Worker.
- `wrangler.json` — Cloudflare Workers configuration consumed by the CI deployment (observability, routes, and legacy Worker settings).
- `tsconfig.json` — TypeScript compiler settings tailored for Workers.
- `bunfig.toml` — Bun configuration.
