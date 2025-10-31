import { afterEach, describe, expect, test, vi } from "vitest";
import { Hono } from "hono";
import type { KickWebhookValidationResult } from "../src/lib/functions/validateWebhook";
import { createKickWebhookValidationMiddleware } from "../src/lib/functions/middleware";

const mocks = vi.hoisted(() => {
  const validateWebhook = vi.fn();

  class KickWebhookError extends Error {
    status: number;

    constructor(message: string, status = 400) {
      super(message);
      this.name = "KickWebhookError";
      this.status = status;
    }
  }

  class KickWebhookSignatureError extends KickWebhookError {
    constructor(message: string) {
      super(message, 403);
      this.name = "KickWebhookSignatureError";
    }
  }

  return {
    validateWebhook,
    KickWebhookError,
    KickWebhookSignatureError,
  } as const;
});

vi.mock("../src/lib/functions/validateWebhook", () => ({
  validateKickWebhook: mocks.validateWebhook,
  KickWebhookError: mocks.KickWebhookError,
  KickWebhookSignatureError: mocks.KickWebhookSignatureError,
}));

const {
  validateWebhook: mockValidateKickWebhook,
  KickWebhookError: MockKickWebhookError,
  KickWebhookSignatureError: MockKickWebhookSignatureError,
} = mocks;

afterEach(() => {
  vi.restoreAllMocks();
  mockValidateKickWebhook.mockReset();
});

type TestEnv = {
  Bindings: Record<string, unknown>;
  Variables: { kickWebhook: KickWebhookValidationResult };
};

function buildApp(recordError = vi.fn().mockResolvedValue(undefined)) {
  const app = new Hono<TestEnv>();
  app.use("*", createKickWebhookValidationMiddleware<TestEnv>(recordError));
  app.post("/", (c) => {
    const result = c.get("kickWebhook");
    return c.json({ eventType: result.eventType });
  });
  return { app, recordError } as const;
}

describe("createKickWebhookValidationMiddleware", () => {
  test("stores validated webhook on context and calls next handler", async () => {
    const { app, recordError } = buildApp();

    mockValidateKickWebhook.mockResolvedValueOnce({
      knownType: true,
      eventType: "chat.message.sent",
      messageId: "msg-1",
      timestamp: new Date().toISOString(),
      signature: "sig",
      eventVersion: "1",
      rawBody: "{}",
      payload: { eventType: "chat.message.sent" },
    });

    const response = await app.request("/", { method: "POST", body: "{}" }, {});

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ eventType: "chat.message.sent" });
    expect(mockValidateKickWebhook).toHaveBeenCalledTimes(1);
    expect(recordError).not.toHaveBeenCalled();
  });

  test("handles signature errors by returning 403 and logging once", async () => {
    const recordError = vi.fn().mockResolvedValue(undefined);
    const { app } = buildApp(recordError);
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValueOnce(
      new MockKickWebhookSignatureError("bad signature")
    );

    const response = await app.request("/", { method: "POST", body: "{}" }, {});

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({ error: "Unauthorized" });
    expect(recordError).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith("Rejected Kick webhook", {
      reason: "bad signature",
    });

    warnSpy.mockRestore();
  });

  test("handles typed webhook errors with custom message", async () => {
    const recordError = vi.fn().mockResolvedValue(undefined);
    const { app } = buildApp(recordError);

    mockValidateKickWebhook.mockRejectedValueOnce(
      new MockKickWebhookError("bad payload", 422)
    );

    const response = await app.request("/", { method: "POST", body: "{}" }, {});

    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({ error: "bad payload" });
    expect(recordError).toHaveBeenCalledTimes(1);
  });

  test("handles unexpected failures with 500 response", async () => {
    const recordError = vi.fn().mockResolvedValue(undefined);
    const { app } = buildApp(recordError);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    mockValidateKickWebhook.mockRejectedValueOnce(new Error("boom"));

    const response = await app.request("/", { method: "POST", body: "{}" }, {});

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Internal Server Error" });
    expect(recordError).toHaveBeenCalledTimes(1);
    expect(
      errorSpy.mock.calls.some(([message]) =>
        String(message).includes("Unexpected webhook failure")
      )
    ).toBe(true);

    errorSpy.mockRestore();
  });
});
