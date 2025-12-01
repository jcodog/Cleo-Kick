import { beforeEach, describe, expect, test, vi } from "vitest";

const wsMocks = vi.hoisted(() => {
  const emit = vi.fn();
  const socket = { emit };
  const ws = vi.fn(() => socket);
  return { emit, socket, ws } as const;
});

vi.mock("../src/lib/jstack", () => ({
  client: {
    overlays: {
      chat: {
        $ws: wsMocks.ws,
      },
    },
  },
}));

import { sendOverlayMessage } from "../src/lib/overlaySocket";

describe("sendOverlayMessage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("emits overlay payload with optional fields", () => {
    const payload = {
      roomId: "overlay-chat-123",
      author: "viewer",
      text: "hello",
      platform: "kick",
      avatarUrl: "https://cdn.example/avatar.png",
    };

    sendOverlayMessage(payload);

    expect(wsMocks.emit).toHaveBeenCalledTimes(1);
    expect(wsMocks.emit).toHaveBeenCalledWith("message", {
      roomId: "overlay-chat-123",
      author: "viewer",
      text: "hello",
      platform: "kick",
      avatarUrl: "https://cdn.example/avatar.png",
    });
  });

  test("emits overlay payload without optional fields", () => {
    const payload = {
      roomId: "overlay-chat-456",
      author: "caster",
      text: "yo",
    };

    sendOverlayMessage(payload);

    expect(wsMocks.emit).toHaveBeenCalledTimes(1);
    expect(wsMocks.emit).toHaveBeenCalledWith("message", {
      roomId: "overlay-chat-456",
      author: "caster",
      text: "yo",
      platform: undefined,
      avatarUrl: undefined,
    });
  });
});
