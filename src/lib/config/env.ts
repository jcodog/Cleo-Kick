/* c8 ignore file */
/* c8 ignore file */
/**
 * Cloudflare Worker bindings exposed to the Kick bot runtime.
 *
 * The optional properties align with the bindings configured in wrangler.toml
 * and allow the application to safely reference them at runtime.
 */
export interface Env {
  readonly DASHBOARD_URL?: string;
  readonly ERROR_LOG_DB?: D1Database;
  readonly DEVELOPER_EMAIL?: string;
  readonly MAILCHANNELS_API_KEY?: string;
  readonly MAILCHANNELS_DKIM_DOMAIN?: string;
  readonly MAILCHANNELS_DKIM_SELECTOR?: string;
  readonly MAILCHANNELS_DKIM_PRIVATE_KEY?: string;
  readonly MAILCHANNELS_FROM_EMAIL?: string;
  readonly MAILCHANNELS_FROM_NAME?: string;
  readonly DATABASE_URL?: string;
  readonly DIRECT_URL?: string;
  readonly KICK_CLIENT_ID?: string;
  readonly KICK_CLIENT_SECRET?: string;
}
