import { afterEach, describe, expect, test, vi } from "vitest";
import { sendMessage } from "../src/lib/functions/messages";

describe("sendMessage", () => {
  const fetchMock = vi.fn();

  afterEach(() => {
    fetchMock.mockReset();
    vi.unstubAllGlobals();
  });

  test("returns chat response when request succeeds", async () => {
    const responseBody = {
      data: { is_sent: true },
      message: "queued",
    };

    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => responseBody,
    });

    vi.stubGlobal("fetch", fetchMock);

    const result = await sendMessage({
      broadcaster: { name: "Streamer", accessToken: "token" },
      message: "hello world",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.kick.com/public/v1/chat",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({ content: "hello world", type: "bot" }),
      }
    );

    expect(result).toEqual({ sent: true, message: "queued", status: 200 });
  });

  test("returns API error when request fails", async () => {
    const responseBody = {
      data: { is_sent: false },
      message: "rate limited",
    };

    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 429,
      json: async () => responseBody,
    });

    vi.stubGlobal("fetch", fetchMock);

    const result = await sendMessage({
      broadcaster: { name: "Streamer", accessToken: "token" },
      message: "hello world",
    });

    expect(result).toEqual({
      sent: false,
      message: "rate limited",
      status: 429,
    });
  });
});
