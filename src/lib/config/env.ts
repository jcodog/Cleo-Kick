/* c8 ignore file */
/* c8 ignore file */
/**
 * Runtime configuration surface exposed to the Kick bot Hono application.
 *
 * All properties are optional to simplify local development and testing; any
 * runtime requirements should be asserted at the call site.
 */
export interface Env {
  readonly DASHBOARD_URL?: string;
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
  readonly PORT?: string;
  readonly ERROR_LOG_PROCESS_NAME?: string;
  readonly LOGTAIL_SOURCE_TOKEN?: string;
}
