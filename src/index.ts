import { createApp } from "./lib/app/createApp";

export type { Env } from "./lib/config/env";
export type { WebhookContext as context } from "./lib/app/types";

const app = createApp();

export default app;
