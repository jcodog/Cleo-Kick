import { beforeEach, describe, expect, test, vi } from "vitest";

const jstackMocks = vi.hoisted(() => {
  const createClient = vi.fn(() => ({ api: true }));
  return { createClient } as const;
});

vi.mock("jstack", () => ({
  createClient: jstackMocks.createClient,
}));

vi.mock("../src/server-types", () => ({
  AppRouter: {},
}));

describe("lib/jstack", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    delete process.env.JSTACK_API_URL;
  });

  test("uses custom base URL when provided", async () => {
    process.env.JSTACK_API_URL = "https://local.dev/api";

    const module = await import("../src/lib/jstack");

    expect(jstackMocks.createClient).toHaveBeenCalledWith({
      baseUrl: "https://local.dev/api",
      credentials: "include",
    });
    expect(module.client).toEqual({ api: true });
  });

  test("falls back to production base URL", async () => {
    const module = await import("../src/lib/jstack");

    expect(jstackMocks.createClient).toHaveBeenCalledWith({
      baseUrl: "https://api.cleoai.cloud/api",
      credentials: "include",
    });
    expect(module.client).toEqual({ api: true });
  });
});
