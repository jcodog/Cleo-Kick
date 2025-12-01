import { beforeEach, describe, expect, test, vi } from "vitest";
import { Hono } from "hono";

const overlayMocks = vi.hoisted(() => ({
  formatOverlayRoomId: vi.fn(),
  isOverlaySocketServerReady: vi.fn(),
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
    overlayMocks.isOverlaySocketServerReady.mockReset();
    overlayMocks.sendOverlayMessage.mockReset();
  });

  test("returns 503 until the socket server is ready", async () => {
    overlayMocks.isOverlaySocketServerReady.mockReturnValue(false);
    const app = await buildApp();

    const response = await app.request("/test-message", {
      method: "POST",
      body: JSON.stringify({ roomId: "1" }),
    });

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      message: "Socket server not ready",
    });
  });

  test("returns 400 when JSON parsing fails", async () => {
    overlayMocks.isOverlaySocketServerReady.mockReturnValue(true);
    const app = await buildApp();

    const response = await app.request("/test-message", {
      method: "POST",
      body: "{bad",
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ message: "Invalid JSON body" });
  });

  test("returns 400 when formatted roomId is empty", async () => {
    overlayMocks.isOverlaySocketServerReady.mockReturnValue(true);
    overlayMocks.formatOverlayRoomId.mockReturnValue("");
    const app = await buildApp();

    const response = await app.request("/test-message", {
      method: "POST",
      body: JSON.stringify({ roomId: null }),
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ message: "roomId is required" });
  });

  test("propagates send failures", async () => {
    overlayMocks.isOverlaySocketServerReady.mockReturnValue(true);
    overlayMocks.formatOverlayRoomId.mockReturnValue("overlay-chat-1");
    overlayMocks.sendOverlayMessage.mockReturnValue(null);
    const app = await buildApp();

    const response = await app.request("/test-message", {
      method: "POST",
      body: JSON.stringify({ roomId: "1", text: "hi" }),
    });

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      message: "Unable to publish chat message",
    });
  });

  test("sends synthetic chat messages", async () => {
    overlayMocks.isOverlaySocketServerReady.mockReturnValue(true);
    overlayMocks.formatOverlayRoomId.mockReturnValue("overlay-chat-abc");
    const overlayMessage = {
      roomId: "overlay-chat-abc",
      author: "tester",
      text: "Hi",
    };
    overlayMocks.sendOverlayMessage.mockReturnValue(overlayMessage);
    const app = await buildApp();

    const response = await app.request("/test-message", {
      method: "POST",
      body: JSON.stringify({ roomId: "abc", text: "Hi", platform: "kick" }),
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      status: "sent",
      message: overlayMessage,
    });
    expect(overlayMocks.formatOverlayRoomId).toHaveBeenCalledWith("abc");
    expect(overlayMocks.sendOverlayMessage).toHaveBeenCalledWith({
      roomId: "overlay-chat-abc",
      text: "Hi",
      author: "hono:test",
      platform: "kick",
      avatarUrl: undefined,
    });
  });
});
