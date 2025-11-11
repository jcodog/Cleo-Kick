import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

function mockCrypto(
  verifyResult:
    | boolean
    | ((...args: unknown[]) => boolean | Promise<boolean>) = true
) {
  const importKeySpy = vi
    .spyOn(globalThis.crypto.subtle, "importKey")
    .mockResolvedValue({} as CryptoKey);

  const verifySpy = vi
    .spyOn(globalThis.crypto.subtle, "verify")
    .mockImplementation(async (...args) =>
      typeof verifyResult === "function"
        ? !!(await verifyResult(...args))
        : verifyResult
    );

  return { importKeySpy, verifySpy };
}

describe("validateKickWebhook", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("verifies signature and returns typed payload for known events", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );
    const fetcher = vi.fn().mockRejectedValue(new Error("network down"));
    const { importKeySpy, verifySpy } = mockCrypto(true);

    const timestamp = new Date().toISOString();
    const body = JSON.stringify({
      eventType: "chat.message.sent",
      eventVersion: "2",
      data: { body: "hi" },
    });

    const request = new Request("https://example.com", {
      method: "POST",
      body,
      headers: {
        "Kick-Event-Message-Id": "msg-1",
        "Kick-Event-Message-Timestamp": timestamp,
        "Kick-Event-Signature": "SGVsbG8=",
        "Kick-Event-Type": "chat.message.sent",
        "Kick-Event-Version": "2",
        "Content-Type": "application/json",
      },
    });

    const result = await validateKickWebhook(request, {
      toleranceSeconds: 600,
      fetcher,
    });

    expect(result.knownType).toBe(true);
    expect(result.payload.eventType).toBe("chat.message.sent");
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(importKeySpy).toHaveBeenCalledTimes(1);

    const importedKey = await importKeySpy.mock.results[0].value;

    expect(verifySpy).toHaveBeenCalledWith(
      { name: "RSASSA-PKCS1-v1_5" },
      importedKey,
      expect.any(ArrayBuffer),
      expect.any(Uint8Array)
    );

    const signatureBuffer = verifySpy.mock.calls[0][2] as ArrayBuffer;
    expect(Array.from(new Uint8Array(signatureBuffer))).toEqual(
      Array.from(new TextEncoder().encode("Hello"))
    );

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("handles every known event type", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );
    const { importKeySpy, verifySpy } = mockCrypto(true);
    const fetcher = vi.fn().mockRejectedValue(new Error("network down"));

    const eventTypes = [
      "chat.message.sent",
      "channel.followed",
      "channel.subscription.renewal",
      "channel.subscription.gifts",
      "channel.subscription.new",
      "livestream.status.updated",
      "kicks.gifted",
    ];

    for (const [index, eventType] of eventTypes.entries()) {
      const timestamp = new Date().toISOString();
      const body = JSON.stringify({
        eventType,
        eventVersion: "1",
        data: { value: index },
      });

      const request = new Request("https://example.com", {
        method: "POST",
        body,
        headers: {
          "Kick-Event-Message-Id": `msg-${index}`,
          "Kick-Event-Message-Timestamp": timestamp,
          "Kick-Event-Signature": "sha256=QUJDRA==",
          "Kick-Event-Type": eventType,
          "Kick-Event-Version": "1",
        },
      });

      const result = await validateKickWebhook(request, {
        toleranceSeconds: 600,
        fetcher,
      });

      expect(result.knownType).toBe(true);
      expect(result.payload.eventType).toBe(eventType);
    }

    expect(importKeySpy).toHaveBeenCalledTimes(1);
    expect(verifySpy.mock.calls).toHaveLength(eventTypes.length);

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("throws when required headers are missing", async () => {
    const { validateKickWebhook, KickWebhookSignatureError } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const request = new Request("https://example.com", {
      method: "POST",
      body: "{}",
      headers: {
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "SGVsbG8=",
      },
    });

    await expect(validateKickWebhook(request)).rejects.toBeInstanceOf(
      KickWebhookSignatureError
    );
  });

  test("throws when timestamp header is missing", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const request = new Request("https://example.com", {
      method: "POST",
      body: "{}",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Signature": "SGVsbG8=",
      },
    });

    await expect(validateKickWebhook(request)).rejects.toThrow(
      /Missing Kick-Event-Message-Timestamp/
    );
  });

  test("throws when signature header is missing", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const request = new Request("https://example.com", {
      method: "POST",
      body: "{}",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
      },
    });

    await expect(validateKickWebhook(request)).rejects.toThrow(
      /Missing Kick-Event-Signature/
    );
  });

  test("validates timestamp parse and tolerance window", async () => {
    const { validateKickWebhook, KickWebhookSignatureError } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const requestInvalid = new Request("https://example.com", {
      method: "POST",
      body: "{}",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": "not-a-timestamp",
        "Kick-Event-Signature": "SGVsbG8=",
      },
    });

    await expect(validateKickWebhook(requestInvalid)).rejects.toThrow(
      /Invalid Kick-Event-Message-Timestamp/
    );

    const oldTimestamp = new Date(Date.now() - 10 * 60 * 1000).toISOString();

    const requestOld = new Request("https://example.com", {
      method: "POST",
      body: "{}",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": oldTimestamp,
        "Kick-Event-Signature": "SGVsbG8=",
      },
    });

    await expect(
      validateKickWebhook(requestOld, { toleranceSeconds: 60 })
    ).rejects.toBeInstanceOf(KickWebhookSignatureError);
  });

  test("throws when signature verification fails", async () => {
    const { validateKickWebhook, KickWebhookSignatureError } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const { importKeySpy, verifySpy } = mockCrypto(false);

    const request = new Request("https://example.com", {
      method: "POST",
      body: "{}",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "SGVsbG8=",
      },
    });

    await expect(validateKickWebhook(request)).rejects.toBeInstanceOf(
      KickWebhookSignatureError
    );

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("rejects invalid JSON payloads", async () => {
    const { validateKickWebhook, KickWebhookError } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const { importKeySpy, verifySpy } = mockCrypto(true);

    const request = new Request("https://example.com", {
      method: "POST",
      body: "[]",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "SGVsbG8=",
      },
    });

    await expect(validateKickWebhook(request)).rejects.toBeInstanceOf(
      KickWebhookError
    );

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("returns raw payload for unknown event types", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const { importKeySpy, verifySpy } = mockCrypto(true);

    const request = new Request("https://example.com", {
      method: "POST",
      body: JSON.stringify({ foo: "bar" }),
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "SGVsbG8=",
        "Kick-Event-Type": "unknown.type",
        "Kick-Event-Version": "1",
      },
    });

    const result = await validateKickWebhook(request);

    expect(result.knownType).toBe(false);
    expect(result.payload).toEqual({ foo: "bar" });

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("defaults event metadata when headers are omitted", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const { importKeySpy, verifySpy } = mockCrypto(true);
    const timestamp = new Date().toISOString();

    const request = new Request("https://example.com", {
      method: "POST",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": timestamp,
        "Kick-Event-Signature": "SGVsbG8=",
      },
    });

    const result = await validateKickWebhook(request);

    expect(result.knownType).toBe(false);
    expect(result.payload).toEqual({});
    expect(result.eventVersion).toBe("1");

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("falls back to version 1 when event version header is empty", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const { importKeySpy, verifySpy } = mockCrypto(true);
    const timestamp = new Date().toISOString();

    const request = new Request("https://example.com", {
      method: "POST",
      body: JSON.stringify({ eventType: "chat.message.sent" }),
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": timestamp,
        "Kick-Event-Signature": "SGVsbG8=",
        "Kick-Event-Type": "chat.message.sent",
        "Kick-Event-Version": "",
      },
    });

    const result = await validateKickWebhook(request);

    expect(result.knownType).toBe(true);
    expect(result.eventVersion).toBe("1");

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("rejects invalid base64 signatures", async () => {
    const { validateKickWebhook, KickWebhookSignatureError } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const request = new Request("https://example.com", {
      method: "POST",
      body: "{}",
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "sha256=**",
      },
    });

    await expect(validateKickWebhook(request)).rejects.toBeInstanceOf(
      KickWebhookSignatureError
    );
  });

  test("caches public key when fetched value stays the same", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const pem =
      "-----BEGIN PUBLIC KEY-----\nQUJDRA==\n-----END PUBLIC KEY-----";

    const fetcher = vi.fn<typeof fetch>(
      async (_input, _init) =>
        new Response(JSON.stringify({ data: { public_key: pem } }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
    );

    const { importKeySpy, verifySpy } = mockCrypto(true);

    const makeRequest = (id: string) =>
      new Request("https://example.com", {
        method: "POST",
        body: JSON.stringify({
          eventType: "chat.message.sent",
          eventVersion: "1",
        }),
        headers: {
          "Kick-Event-Message-Id": id,
          "Kick-Event-Message-Timestamp": new Date().toISOString(),
          "Kick-Event-Signature": "SGVsbG8=",
          "Kick-Event-Type": "chat.message.sent",
          "Kick-Event-Version": "1",
        },
      });

    await validateKickWebhook(makeRequest("msg-a"), { fetcher });
    await validateKickWebhook(makeRequest("msg-b"), { fetcher });

    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(importKeySpy).toHaveBeenCalledTimes(1);
    expect(verifySpy).toHaveBeenCalledTimes(2);

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("uses provided PEM without fetching", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const pem =
      "-----BEGIN PUBLIC KEY-----\nAAAAAA==\n-----END PUBLIC KEY-----";

    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(new Response());
    const { importKeySpy, verifySpy } = mockCrypto(true);

    const request = new Request("https://example.com", {
      method: "POST",
      body: JSON.stringify({
        eventType: "chat.message.sent",
        eventVersion: "1",
      }),
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "SGVsbG8=",
        "Kick-Event-Type": "chat.message.sent",
        "Kick-Event-Version": "1",
      },
    });

    await validateKickWebhook(request, { publicKeyPEM: pem, fetcher });

    expect(fetcher).not.toHaveBeenCalled();
    expect(importKeySpy).toHaveBeenCalledTimes(1);
    expect(verifySpy).toHaveBeenCalledTimes(1);

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("falls back to embedded public key when remote payload invalid", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const fetcher = vi.fn<typeof fetch>(async (_input, _init) => {
      return new Response(
        JSON.stringify({ data: { public_key: "invalid-key" } }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    });

    const { importKeySpy, verifySpy } = mockCrypto(true);

    const request = new Request("https://example.com", {
      method: "POST",
      body: JSON.stringify({
        eventType: "chat.message.sent",
        eventVersion: "1",
      }),
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "SGVsbG8=",
        "Kick-Event-Type": "chat.message.sent",
        "Kick-Event-Version": "1",
      },
    });

    await validateKickWebhook(request, { fetcher });

    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(importKeySpy).toHaveBeenCalledTimes(1);
    expect(verifySpy).toHaveBeenCalledTimes(1);

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });

  test("falls back when public key endpoint responds with error", async () => {
    const { validateKickWebhook } = await import(
      "../src/lib/functions/validateWebhook"
    );

    const fetcher = vi.fn<typeof fetch>(async (_input, _init) => {
      return new Response("Unavailable", { status: 503 });
    });

    const { importKeySpy, verifySpy } = mockCrypto(true);

    const request = new Request("https://example.com", {
      method: "POST",
      body: JSON.stringify({
        eventType: "chat.message.sent",
        eventVersion: "1",
      }),
      headers: {
        "Kick-Event-Message-Id": "msg",
        "Kick-Event-Message-Timestamp": new Date().toISOString(),
        "Kick-Event-Signature": "SGVsbG8=",
        "Kick-Event-Type": "chat.message.sent",
        "Kick-Event-Version": "1",
      },
    });

    await validateKickWebhook(request, { fetcher });

    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(importKeySpy).toHaveBeenCalledTimes(1);
    expect(verifySpy).toHaveBeenCalledTimes(1);

    importKeySpy.mockRestore();
    verifySpy.mockRestore();
  });
});
