# Kick Bot

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

## Deployment

```bash
bun run deploy
```

Wrangler will use the configuration in `wrangler.json` to deploy the Worker to Cloudflare.

## Configuration

- Set `DASHBOARD_URL` in `wrangler.json` (or via Cloudflare dashboard) to tell the root route where to redirect users for chatbot management.

## Routes

- `GET /` — redirects to the configured dashboard URL.
- `POST /webhook` — accepts Kick webhook events (expects JSON payloads).
- `GET /health` — lightweight readiness probe.

## Project Structure

- `src/index.ts` — Hono application entry point exported as the Worker.
- `wrangler.json` — Cloudflare Workers configuration for Wrangler.
- `tsconfig.json` — TypeScript compiler settings tailored for Workers.
- `bunfig.toml` — Bun configuration.
