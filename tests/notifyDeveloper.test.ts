import { beforeEach, describe, expect, test, vi } from "vitest";

const sendEmailSpy = vi.fn();

vi.mock("@jconet-ltd/mailchannels-client", () => {
  class MailChannelsError extends Error {
    public status: number;
    public requestId?: string;
    public details?: unknown;

    constructor(
      message: string,
      init: number | { status: number; requestId?: string; details?: unknown },
      legacyDetails?: unknown
    ) {
      super(message);
      this.name = "MailChannelsError";

      if (typeof init === "number") {
        this.status = init;
        this.details = legacyDetails;
        return;
      }

      this.status = init.status;
      this.requestId = init.requestId;
      this.details = init.details;
    }
  }

  const MailChannelsClient = vi.fn(function MailChannelsClient() {
    return {
      sendEmail: sendEmailSpy,
    };
  });

  return {
    MailChannelsClient,
    MailChannelsError,
  };
});

const importNotifyModule = () =>
  vi.importActual<typeof import("../src/lib/functions/errors/notifyDeveloper")>(
    "../src/lib/functions/errors/notifyDeveloper.ts"
  );

describe("notifyDeveloperOfError", () => {
  beforeEach(() => {
    vi.resetModules();
    sendEmailSpy.mockClear();
  });

  test("warns once when configuration is incomplete", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const { notifyDeveloperOfError } = await importNotifyModule();

    const baseEntry = { message: "Test error" };
    const env = { MAILCHANNELS_API_KEY: undefined };

    await notifyDeveloperOfError(env, baseEntry, "2025-10-30T12:00:00Z");
    await notifyDeveloperOfError(env, baseEntry, "2025-10-30T12:05:00Z");

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(sendEmailSpy).not.toHaveBeenCalled();

    warnSpy.mockRestore();
  });

  test("sends formatted email when configuration is complete", async () => {
    sendEmailSpy.mockResolvedValueOnce(undefined);
    const { notifyDeveloperOfError } = await importNotifyModule();

    const timestamp = "2025-10-30T12:00:00Z";
    const env = {
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.dev",
      MAILCHANNELS_DKIM_SELECTOR: "selector",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "private",
      MAILCHANNELS_FROM_EMAIL: "alerts@cleo.dev",
      MAILCHANNELS_FROM_NAME: undefined,
      DEVELOPER_EMAIL: "dev@cleo.dev",
    };

    const longObject = {
      html: "<script>alert('x')</script>",
      data: "y".repeat(10_000),
    };

    await notifyDeveloperOfError(
      env,
      { message: "Boom", status: 502, context: longObject },
      timestamp
    );

    expect(sendEmailSpy).toHaveBeenCalledTimes(1);
    const payload = sendEmailSpy.mock.calls[0][0];
    expect(payload.personalizations[0].to[0]).toEqual({
      email: "dev@cleo.dev",
    });
    expect(payload.from).toEqual({
      email: "alerts@cleo.dev",
      name: "Cleo Kick Alerts",
    });
    expect(payload.subject).toContain("502");
    expect(payload.content[0].value).toContain("Boom");
    expect(payload.content[1].value).toContain("&lt;");
    expect(payload.content[1].value).toContain("…");
  });

  test("logs a structured error when MailChannels returns an error", async () => {
    const errorLog = vi.spyOn(console, "error").mockImplementation(() => {});

    sendEmailSpy.mockRejectedValueOnce(
      new (await import("@jconet-ltd/mailchannels-client")).MailChannelsError(
        "Send failed",
        {
          status: 429,
          requestId: "req-123",
          details: { reason: "rate limited" },
        }
      )
    );

    const { notifyDeveloperOfError } = await importNotifyModule();

    const env = {
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.dev",
      MAILCHANNELS_DKIM_SELECTOR: "selector",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "private",
      MAILCHANNELS_FROM_EMAIL: "alerts@cleo.dev",
      DEVELOPER_EMAIL: "dev@cleo.dev",
    };

    await notifyDeveloperOfError(
      env,
      { message: "Boom" },
      "2025-10-30T12:00:00Z"
    );

    expect(errorLog).toHaveBeenCalledWith("MailChannels send failed", {
      status: 429,
      requestId: "req-123",
      details: { reason: "rate limited" },
    });

    errorLog.mockRestore();
  });

  test("logs unexpected errors", async () => {
    const errorLog = vi.spyOn(console, "error").mockImplementation(() => {});

    sendEmailSpy.mockRejectedValueOnce(new Error("boom"));

    const { notifyDeveloperOfError } = await importNotifyModule();

    const env = {
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.dev",
      MAILCHANNELS_DKIM_SELECTOR: "selector",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "private",
      MAILCHANNELS_FROM_EMAIL: "alerts@cleo.dev",
      DEVELOPER_EMAIL: "dev@cleo.dev",
    };

    await notifyDeveloperOfError(
      env,
      { message: "Boom" },
      "2025-10-30T12:00:00Z"
    );

    expect(errorLog).toHaveBeenCalledWith(
      "Unexpected error while sending MailChannels notification",
      expect.any(Error)
    );

    errorLog.mockRestore();
  });

  test("serializes symbol context to empty object placeholder", async () => {
    sendEmailSpy.mockResolvedValueOnce(undefined);

    const { notifyDeveloperOfError } = await importNotifyModule();

    const env = {
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.dev",
      MAILCHANNELS_DKIM_SELECTOR: "selector",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "private",
      MAILCHANNELS_FROM_EMAIL: "alerts@cleo.dev",
      DEVELOPER_EMAIL: "dev@cleo.dev",
    };

    const symbolContext: Record<string, unknown> = {
      toJSON: () => undefined,
    };

    await notifyDeveloperOfError(
      env,
      { message: "Symbol context", context: symbolContext },
      "2025-10-30T12:10:00Z"
    );

    const payload = sendEmailSpy.mock.calls[0][0];
    expect(payload.content[0].value).toContain("{}");
    expect(payload.content[1].value).toContain("{}");
  });

  test("stringifies BigInt context via fallback", async () => {
    sendEmailSpy.mockResolvedValueOnce(undefined);

    const { notifyDeveloperOfError } = await import(
      "../src/lib/functions/errors/notifyDeveloper"
    );

    const env = {
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.dev",
      MAILCHANNELS_DKIM_SELECTOR: "selector",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "private",
      MAILCHANNELS_FROM_EMAIL: "alerts@cleo.dev",
      DEVELOPER_EMAIL: "dev@cleo.dev",
    };

    await notifyDeveloperOfError(
      env,
      {
        message: "BigInt context",
        context: BigInt(42) as unknown as Record<string, unknown>,
      },
      "2025-10-30T12:15:00Z"
    );

    const payload = sendEmailSpy.mock.calls[0][0];
    expect(payload.content[0].value).toContain("42");
    expect(payload.content[1].value).toContain("42");
  });

  test("preserves small JSON payloads without truncation", async () => {
    sendEmailSpy.mockResolvedValueOnce(undefined);

    const { notifyDeveloperOfError } = await import(
      "../src/lib/functions/errors/notifyDeveloper"
    );

    const env = {
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.dev",
      MAILCHANNELS_DKIM_SELECTOR: "selector",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "private",
      MAILCHANNELS_FROM_EMAIL: "alerts@cleo.dev",
      DEVELOPER_EMAIL: "dev@cleo.dev",
    };

    await notifyDeveloperOfError(
      env,
      { message: "Small", context: { foo: "bar" } },
      "2025-10-30T12:18:00Z"
    );

    const payload = sendEmailSpy.mock.calls[0][0];
    expect(payload.content[0].value).toContain('"foo": "bar"');
    expect(payload.content[0].value.includes("…")).toBe(false);
    expect(payload.content[1].value).toContain(
      "&quot;foo&quot;: &quot;bar&quot;"
    );
    expect(payload.content[1].value.includes("…")).toBe(false);
  });

  test("truncates oversized JSON payloads", async () => {
    sendEmailSpy.mockResolvedValueOnce(undefined);
    const stringifySpy = vi
      .spyOn(JSON, "stringify")
      .mockImplementationOnce(() => "x".repeat(6_500));

    const { notifyDeveloperOfError } = await import(
      "../src/lib/functions/errors/notifyDeveloper"
    );

    const env = {
      MAILCHANNELS_API_KEY: "key",
      MAILCHANNELS_DKIM_DOMAIN: "cleo.dev",
      MAILCHANNELS_DKIM_SELECTOR: "selector",
      MAILCHANNELS_DKIM_PRIVATE_KEY: "private",
      MAILCHANNELS_FROM_EMAIL: "alerts@cleo.dev",
      DEVELOPER_EMAIL: "dev@cleo.dev",
    };

    await notifyDeveloperOfError(
      env,
      { message: "Huge", context: { any: "value" } },
      "2025-10-30T12:20:00Z"
    );

    const payload = sendEmailSpy.mock.calls[0][0];
    expect(payload.content[0].value.endsWith("…")).toBe(true);
    expect(payload.content[1].value.includes("…")).toBe(true);

    stringifySpy.mockRestore();
  });
});
