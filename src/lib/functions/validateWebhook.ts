import type {
  ChannelFollowEvent,
  ChatMessageEvent,
  KicksGiftedEvent,
  LivestreamStatusUpdatedEvent,
  NewSubscriptionEvent,
  SubscriptionGiftEvent,
  SubscriptionRenewalEvent,
} from "kick-api-types/payloads";
import type { ContentfulStatusCode } from "hono/utils/http-status";

const PUBLIC_KEY_ENDPOINT = "https://api.kick.com/public/v1/public-key";
const DEFAULT_TOLERANCE_SECONDS = 5 * 60;

const HEADER_NAMES = {
  messageId: "Kick-Event-Message-Id",
  subscriptionId: "Kick-Event-Subscription-Id",
  signature: "Kick-Event-Signature",
  timestamp: "Kick-Event-Message-Timestamp",
  eventType: "Kick-Event-Type",
  eventVersion: "Kick-Event-Version",
} as const;

const KICK_PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq/+l1WnlRrGSolDMA+A8
6rAhMbQGmQ2SapVcGM3zq8ANXjnhDWocMqfWcTd95btDydITa10kDvHzw9WQOqp2
MZI7ZyrfzJuz5nhTPCiJwTwnEtWft7nV14BYRDHvlfqPUaZ+1KR4OCaO/wWIk/rQ
L/TjY0M70gse8rlBkbo2a8rKhu69RQTRsoaf4DVhDPEeSeI5jVrRDGAMGL3cGuyY
6CLKGdjVEM78g3JfYOvDU/RvfqD7L89TZ3iN94jrmWdGz34JNlEI5hqK8dd7C5EF
BEbZ5jgB8s8ReQV8H+MkuffjdAj3ajDDX3DOJMIut1lBrUVD1AaSrGCKHooWoL2e
twIDAQAB
-----END PUBLIC KEY-----`;

const textEncoder = new TextEncoder();

let cachedCryptoKey: CryptoKey | null = null;
let cachedPemSource: string | null = null;

export type KickWebhookPayload =
  | ChatMessageEvent
  | ChannelFollowEvent
  | SubscriptionRenewalEvent
  | SubscriptionGiftEvent
  | NewSubscriptionEvent
  | LivestreamStatusUpdatedEvent
  | KicksGiftedEvent;

export type KickWebhookEventType = KickWebhookPayload["eventType"];

export interface KickWebhookValidationOptions {
  /**
   * Optional PEM string to override the Kick public key, useful for testing.
   */
  publicKeyPEM?: string;
  /**
   * Maximum allowed age (in seconds) of a webhook message. Defaults to 300s.
   */
  toleranceSeconds?: number;
  /**
   * Provide a custom fetch implementation (handy for unit tests).
   */
  fetcher?: typeof fetch;
}

export interface KickWebhookMetadata {
  messageId: string;
  timestamp: string;
  signature: string;
  subscriptionId?: string;
  eventType: string;
  eventVersion: string;
  rawBody: string;
}

export type KickWebhookValidationResult =
  | ({ knownType: true; payload: KickWebhookPayload } & KickWebhookMetadata)
  | ({
      knownType: false;
      payload: Record<string, unknown>;
    } & KickWebhookMetadata);

export class KickWebhookError extends Error {
  constructor(message: string, readonly status: ContentfulStatusCode) {
    super(message);
    this.name = "KickWebhookError";
  }
}

export class KickWebhookSignatureError extends KickWebhookError {
  constructor(message: string) {
    super(message, 403);
    this.name = "KickWebhookSignatureError";
  }
}

/**
 * Validates the incoming Kick webhook request by verifying the RSA signature,
 * applying a replay-window tolerance, and returning the typed payload.
 */
export async function validateKickWebhook(
  request: Request,
  options: KickWebhookValidationOptions = {}
): Promise<KickWebhookValidationResult> {
  const headers = request.headers;

  const messageId = headers.get(HEADER_NAMES.messageId);
  if (!messageId) {
    throw new KickWebhookSignatureError("Missing Kick-Event-Message-Id header");
  }

  const timestamp = headers.get(HEADER_NAMES.timestamp);
  if (!timestamp) {
    throw new KickWebhookSignatureError(
      "Missing Kick-Event-Message-Timestamp header"
    );
  }

  const signatureHeader = headers.get(HEADER_NAMES.signature);
  if (!signatureHeader) {
    throw new KickWebhookSignatureError("Missing Kick-Event-Signature header");
  }

  const eventType = headers.get(HEADER_NAMES.eventType) ?? "";
  const eventVersion = headers.get(HEADER_NAMES.eventVersion) ?? "1";
  const subscriptionId = headers.get(HEADER_NAMES.subscriptionId) ?? undefined;

  const rawBody = await request.text();

  const timestampMs = Date.parse(timestamp);
  if (Number.isNaN(timestampMs)) {
    throw new KickWebhookSignatureError(
      "Invalid Kick-Event-Message-Timestamp header"
    );
  }

  const toleranceMs = Math.max(
    0,
    (options.toleranceSeconds ?? DEFAULT_TOLERANCE_SECONDS) * 1000
  );
  if (toleranceMs > 0) {
    const now = Date.now();
    if (Math.abs(now - timestampMs) > toleranceMs) {
      throw new KickWebhookSignatureError(
        "Webhook timestamp outside the allowed tolerance window"
      );
    }
  }

  const publicKey = await getKickPublicKey({
    publicKeyPEM: options.publicKeyPEM,
    fetcher: options.fetcher,
  });

  const signingPayload = `${messageId}.${timestamp}.${rawBody}`;
  const signatureBytes = decodeBase64(normalizeSignature(signatureHeader));

  const verified = await crypto.subtle.verify(
    { name: "RSASSA-PKCS1-v1_5" },
    publicKey,
    toArrayBuffer(signatureBytes),
    textEncoder.encode(signingPayload)
  );

  if (!verified) {
    throw new KickWebhookSignatureError(
      "Webhook signature verification failed"
    );
  }

  const jsonPayload = rawBody.length ? JSON.parse(rawBody) : {};
  if (!isRecord(jsonPayload)) {
    throw new KickWebhookError(
      "Expected webhook payload to be a JSON object",
      400
    );
  }

  const payload = coercePayload(eventType, eventVersion, jsonPayload);

  if (payload) {
    return {
      knownType: true,
      payload,
      messageId,
      timestamp,
      signature: signatureHeader,
      subscriptionId,
      eventType: payload.eventType,
      eventVersion: payload.eventVersion,
      rawBody,
    };
  }

  return {
    knownType: false,
    payload: jsonPayload,
    messageId,
    timestamp,
    signature: signatureHeader,
    subscriptionId,
    eventType,
    eventVersion,
    rawBody,
  };
}

interface PublicKeyOptions {
  publicKeyPEM?: string;
  fetcher?: typeof fetch;
}

async function getKickPublicKey(options: PublicKeyOptions): Promise<CryptoKey> {
  if (options.publicKeyPEM) {
    return importPublicKey(options.publicKeyPEM);
  }

  if (cachedCryptoKey && cachedPemSource === KICK_PUBLIC_KEY_PEM) {
    return cachedCryptoKey;
  }

  const pem = await fetchKickPublicKey(options.fetcher);

  if (cachedCryptoKey && pem === cachedPemSource) {
    return cachedCryptoKey;
  }

  const cryptoKey = await importPublicKey(pem);
  cachedCryptoKey = cryptoKey;
  cachedPemSource = pem;
  return cryptoKey;
}

async function fetchKickPublicKey(
  fetcher: typeof fetch | undefined
): Promise<string> {
  const effectiveFetcher = fetcher ?? fetch;
  try {
    const response = await effectiveFetcher(PUBLIC_KEY_ENDPOINT, {
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      const data = (await response.json()) as {
        data?: { public_key?: string };
      };
      const pem = data?.data?.public_key;
      if (typeof pem === "string" && pem.includes("BEGIN PUBLIC KEY")) {
        return pem;
      }
    }
  } catch {
    // Ignore network errors and fall back to the embedded key.
  }

  return KICK_PUBLIC_KEY_PEM;
}

async function importPublicKey(pem: string): Promise<CryptoKey> {
  const binaryDer = pemToArrayBuffer(pem);
  return crypto.subtle.importKey(
    "spki",
    binaryDer,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    true,
    ["verify"]
  );
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const b64 = pem
    .replace("-----BEGIN PUBLIC KEY-----", "")
    .replace("-----END PUBLIC KEY-----", "")
    .replace(/\s+/g, "");

  return toArrayBuffer(decodeBase64(b64));
}

function normalizeSignature(signature: string): string {
  const trimmed = signature.trim();
  if (trimmed.startsWith("sha256=")) {
    return trimmed.slice(7);
  }
  return trimmed;
}

function decodeBase64(input: string): Uint8Array {
  try {
    const normalized = input.replace(/\s+/g, "");
    const binary = atob(normalized);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  } catch {
    throw new KickWebhookSignatureError(
      "Invalid base64 encoding in signature header"
    );
  }
}

function toArrayBuffer(view: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(view.length);
  copy.set(view);
  return copy.buffer;
}

function coercePayload(
  eventType: string,
  eventVersion: string,
  payload: Record<string, unknown>
): KickWebhookPayload | null {
  if (!eventType) {
    return null;
  }

  const version = (eventVersion || "1") as KickWebhookPayload["eventVersion"];

  switch (eventType as KickWebhookEventType | string) {
    case "chat.message.sent":
      return {
        eventType: "chat.message.sent",
        eventVersion: version,
        ...payload,
      } as ChatMessageEvent;
    case "channel.followed":
      return {
        eventType: "channel.followed",
        eventVersion: version,
        ...payload,
      } as ChannelFollowEvent;
    case "channel.subscription.renewal":
      return {
        eventType: "channel.subscription.renewal",
        eventVersion: version,
        ...payload,
      } as SubscriptionRenewalEvent;
    case "channel.subscription.gifts":
      return {
        eventType: "channel.subscription.gifts",
        eventVersion: version,
        ...payload,
      } as SubscriptionGiftEvent;
    case "channel.subscription.new":
      return {
        eventType: "channel.subscription.new",
        eventVersion: version,
        ...payload,
      } as NewSubscriptionEvent;
    case "livestream.status.updated":
      return {
        eventType: "livestream.status.updated",
        eventVersion: version,
        ...payload,
      } as LivestreamStatusUpdatedEvent;
    case "kicks.gifted":
      return {
        eventType: "kicks.gifted",
        eventVersion: version,
        ...payload,
      } as KicksGiftedEvent;
    default:
      return null;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
