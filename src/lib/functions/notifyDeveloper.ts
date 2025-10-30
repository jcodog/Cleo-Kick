import {
  MailChannelsClient,
  MailChannelsError,
} from "@jconet-ltd/mailchannels-client";
import type { ErrorLogEntry } from "./logError";

interface MailChannelsEnv {
  MAILCHANNELS_API_KEY?: string;
  MAILCHANNELS_DKIM_DOMAIN?: string;
  MAILCHANNELS_DKIM_SELECTOR?: string;
  MAILCHANNELS_DKIM_PRIVATE_KEY?: string;
  MAILCHANNELS_FROM_EMAIL?: string;
  MAILCHANNELS_FROM_NAME?: string;
  DEVELOPER_EMAIL?: string;
}

let missingMailChannelsWarningShown = false;

export async function notifyDeveloperOfError(
  env: MailChannelsEnv,
  entry: ErrorLogEntry,
  timestamp: string
): Promise<void> {
  const {
    MAILCHANNELS_API_KEY,
    MAILCHANNELS_DKIM_DOMAIN,
    MAILCHANNELS_DKIM_SELECTOR,
    MAILCHANNELS_DKIM_PRIVATE_KEY,
    MAILCHANNELS_FROM_EMAIL,
    MAILCHANNELS_FROM_NAME,
    DEVELOPER_EMAIL,
  } = env;

  if (
    !MAILCHANNELS_API_KEY ||
    !MAILCHANNELS_DKIM_DOMAIN ||
    !MAILCHANNELS_DKIM_SELECTOR ||
    !MAILCHANNELS_DKIM_PRIVATE_KEY ||
    !MAILCHANNELS_FROM_EMAIL ||
    !DEVELOPER_EMAIL
  ) {
    if (!missingMailChannelsWarningShown) {
      console.warn(
        "Missing MailChannels configuration (API key, DKIM, sender, or developer email). Skipping error notification emails."
      );
      missingMailChannelsWarningShown = true;
    }
    return;
  }

  const fromName = MAILCHANNELS_FROM_NAME ?? "Cleo Kick Alerts";
  const status = entry.status ?? "n/a";

  const contextPretty = entry.context
    ? safeStringify(entry.context, 2, 6000)
    : "No additional context provided.";

  const subject = `[Kick Bot] Error ${status} at ${timestamp}`;

  const textContent = [
    "Kick Bot encountered an error.",
    "",
    `Timestamp: ${timestamp}`,
    `Status: ${status}`,
    `Message: ${entry.message}`,
    "",
    "Context:",
    contextPretty,
  ].join("\n");

  const htmlContent = `<!doctype html>
<html><body style="font-family: Arial, sans-serif;">
  <p><strong>Kick Bot encountered an error.</strong></p>
  <ul>
    <li><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</li>
    <li><strong>Status:</strong> ${escapeHtml(String(status))}</li>
    <li><strong>Message:</strong> ${escapeHtml(entry.message)}</li>
  </ul>
  <p><strong>Context</strong></p>
  <pre style="background:#f5f5f5;padding:12px;border-radius:4px;white-space:pre-wrap;word-break:break-word;">${escapeHtml(
    contextPretty
  )}</pre>
</body></html>`;

  const client = new MailChannelsClient({
    apiKey: MAILCHANNELS_API_KEY,
    dkim: {
      domain: MAILCHANNELS_DKIM_DOMAIN,
      selector: MAILCHANNELS_DKIM_SELECTOR,
      privateKey: MAILCHANNELS_DKIM_PRIVATE_KEY,
    },
  });

  try {
    await client.sendEmail({
      personalizations: [
        {
          to: [{ email: DEVELOPER_EMAIL }],
        },
      ],
      from: {
        email: MAILCHANNELS_FROM_EMAIL,
        name: fromName,
      },
      subject,
      content: [
        { type: "text/plain", value: textContent },
        { type: "text/html", value: htmlContent },
      ],
    });
  } catch (error) {
    if (error instanceof MailChannelsError) {
      console.error("MailChannels send failed", {
        status: error.status,
        requestId: error.requestId,
        details: error.details,
      });
      return;
    }
    console.error(
      "Unexpected error while sending MailChannels notification",
      error
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeStringify(value: unknown, spacing = 0, maxLength = 8000): string {
  try {
    const json = JSON.stringify(value, null, spacing);
    if (!json) {
      return "{}";
    }
    return json.length > maxLength ? `${json.slice(0, maxLength)}…` : json;
  } catch {
    return String(value);
  }
}
