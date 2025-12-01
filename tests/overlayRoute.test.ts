import { beforeEach, describe, expect, test, vi } from "vitest";
import { Hono } from "hono";

const overlayMocks = vi.hoisted(() => ({
  formatOverlayRoomId: vi.fn(),
  isOverlayRelayConfigured: vi.fn(),
  sendOverlayMessage: vi.fn(),
}));

vi.mock("../src/lib/overlaySocket", () => overlayMocks);

describe("overlay test-message route", () => {
  const buildApp = async () => {
    const { registerOverlayRoutes } = await import(
      "../src/lib/app/routes/overlay"
    );
    const app = new Hono();
    registerOverlayRoutes(app as any);
    return app;
  };

  beforeEach(() => {
    vi.clearAllMocks();
    overlayMocks.formatOverlayRoomId.mockReset();
    overlayMocks.isOverlayRelayConfigured.mockReset();
    overlayMocks.sendOverlayMessage.mockReset();
  });

  test("returns 503 until the socket server is ready", async () => {
    overlayMocks.isOverlayRelayConfigured.mockReturnValue(false);
    const app = await buildApp();

    const response = await app.request(
      "/test-message",
      {
        method: "POST",
        body: JSON.stringify({ roomId: "1" }),
      },
      { OVERLAY_RELAY_URL: undefined } as any
    );

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      message: "Overlay relay not configured",
    });
  });

  test("returns 400 when JSON parsing fails", async () => {
    overlayMocks.isOverlayRelayConfigured.mockReturnValue(true);
    const app = await buildApp();

    const response = await app.request(
      "/test-message",
      {
        method: "POST",
        body: "{bad",
      },
      { OVERLAY_RELAY_URL: "https://relay.test/test-message" } as any
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ message: "Invalid JSON body" });
  });

  test("returns 400 when formatted roomId is empty", async () => {
    overlayMocks.isOverlayRelayConfigured.mockReturnValue(true);
    overlayMocks.formatOverlayRoomId.mockReturnValue("");
    const app = await buildApp();

    const response = await app.request(
      "/test-message",
      {
        method: "POST",
        body: JSON.stringify({ roomId: null }),
      },
      { OVERLAY_RELAY_URL: "https://relay.test/test-message" } as any
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ message: "roomId is required" });
  });

  test("propagates send failures", async () => {
    overlayMocks.isOverlayRelayConfigured.mockReturnValue(true);
    overlayMocks.formatOverlayRoomId.mockReturnValue("overlay-chat-1");
    overlayMocks.sendOverlayMessage.mockResolvedValue(null);
    const app = await buildApp();

    const response = await app.request(
      "/test-message",
      {
        method: "POST",
        body: JSON.stringify({ roomId: "1", text: "hi" }),
      },
      { OVERLAY_RELAY_URL: "https://relay.test/test-message" } as any
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      message: "Unable to publish chat message",
    });
  });

  test("sends synthetic chat messages", async () => {
    overlayMocks.isOverlayRelayConfigured.mockReturnValue(true);
    overlayMocks.formatOverlayRoomId.mockReturnValue("overlay-chat-abc");
    const overlayMessage = {
      roomId: "overlay-chat-abc",
      author: "tester",
      text: "Hi",
    };
    overlayMocks.sendOverlayMessage.mockResolvedValue(overlayMessage);
    const app = await buildApp();

    const response = await app.request(
      "/test-message",
      {
        method: "POST",
        body: JSON.stringify({ roomId: "abc", text: "Hi", platform: "kick" }),
      },
      { OVERLAY_RELAY_URL: "https://relay.test/test-message" } as any
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      status: "sent",
      message: overlayMessage,
    });
    expect(overlayMocks.formatOverlayRoomId).toHaveBeenCalledWith("abc");
    expect(overlayMocks.sendOverlayMessage).toHaveBeenCalledWith(
      {
        roomId: "overlay-chat-abc",
        text: "Hi",
        author: "hono:test",
        platform: "kick",
        avatarUrl: undefined,
      },
      {
        endpoint: "https://relay.test/test-message",
        authToken: undefined,
      }
    );
  });

  test("falls back to default text, author, and optional metadata", async () => {
    overlayMocks.isOverlayRelayConfigured.mockReturnValue(true);
    overlayMocks.formatOverlayRoomId.mockReturnValue("overlay-chat-fallback");
    const overlayMessage = {
      roomId: "overlay-chat-fallback",
      author: "hono:test",
      text: "Test message",
      platform: undefined,
      avatarUrl: undefined,
    };
    overlayMocks.sendOverlayMessage.mockResolvedValue(overlayMessage);
    const app = await buildApp();

    const response = await app.request(
      "/test-message",
      {
        method: "POST",
        body: JSON.stringify({
          roomId: "fallback",
          author: "   ",
          platform: "   ",
          avatarUrl: "  ",
        }),
      },
      { OVERLAY_RELAY_URL: "https://relay.test/test-message" } as any
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      status: "sent",
      message: overlayMessage,
    });
    expect(overlayMocks.sendOverlayMessage).toHaveBeenCalledWith(
      {
        roomId: "overlay-chat-fallback",
        text: "Test message",
        author: "hono:test",
        platform: undefined,
        avatarUrl: undefined,
      },
      {
        endpoint: "https://relay.test/test-message",
        authToken: undefined,
      }
    );
  });
});
