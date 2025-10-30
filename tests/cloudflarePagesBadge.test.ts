import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import type { BadgeEnv } from "../src/lib/functions/cloudflarePagesBadge";

const fetchMock = vi.fn();

beforeAll(() => {
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  fetchMock.mockReset();
});

afterAll(() => {
  vi.unstubAllGlobals();
});

async function loadModule() {
  vi.resetModules();
  return import("../src/lib/functions/cloudflarePagesBadge");
}

describe("getPagesBadge", () => {
  test("returns badge details for successful project", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        success: true,
        result: {
          canonical_deployment: {
            latest_stage: {
              status: "success",
            },
          },
        },
      }),
    });

    const result = await getPagesBadge(env, "kick/pages");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.cloudflare.com/client/v4/accounts/acct/pages/projects/kick%2Fpages",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer token",
          "User-Agent": "kick-bot-pages-badge",
        },
      }
    );
    expect(result.rawStatus).toBe("success");
    expect(result.normalizedStatus).toBe("success");
    expect(result.badge).toEqual({
      schemaVersion: 1,
      label: "Cloudflare Pages",
      message: "success",
      color: "success",
      isError: false,
      namedLogo: "cloudflare",
      cacheSeconds: 60,
    });
  });

  test("normalizes unknown statuses to unknown badge", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        success: true,
        result: {
          canonical_deployment: {
            latest_stage: {
              status: "mystery",
            },
          },
        },
      }),
    });

    const result = await getPagesBadge(env, "kick-pages");

    expect(result.rawStatus).toBe("mystery");
    expect(result.normalizedStatus).toBe("unknown");
    expect(result.badge).toEqual({
      schemaVersion: 1,
      label: "Cloudflare Pages",
      message: "unknown",
      color: "inactive",
      isError: true,
      namedLogo: "cloudflare",
      cacheSeconds: 60,
    });
  });

  test("throws when Cloudflare credentials missing", async () => {
    const { getPagesBadge } = await loadModule();

    await expect(getPagesBadge({}, "kick-pages")).rejects.toThrow(
      "Missing Cloudflare API configuration"
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("throws when project not found", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ success: false }),
    });

    await expect(getPagesBadge(env, "missing")).rejects.toThrow(
      "Pages project 'missing' not found"
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("throws when response not ok", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ success: false }),
    });

    await expect(getPagesBadge(env, "kick-pages")).rejects.toThrow(
      "Cloudflare API responded with 500"
    );
  });

  test("throws when Cloudflare reports errors", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        success: false,
        errors: [
          { code: 1001, message: "Bad request" },
          { code: 1002, message: "Try again" },
        ],
      }),
    });

    await expect(getPagesBadge(env, "kick-pages")).rejects.toThrow(
      "Cloudflare API error: Bad request, Try again"
    );
  });

  test("throws generic message when Cloudflare errors missing", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: false }),
    });

    await expect(getPagesBadge(env, "kick-pages")).rejects.toThrow(
      "Cloudflare API error: Unknown error"
    );
  });

  test("memoizes project responses within cache ttl", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    const project = {
      canonical_deployment: {
        latest_stage: {
          status: "active",
        },
      },
    };

    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ success: true, result: project }),
    });

    const nowSpy = vi.spyOn(Date, "now");
    let currentTime = 0;
    nowSpy.mockImplementation(() => currentTime);

    const first = await getPagesBadge(env, "kick-pages");
    currentTime = 30_000;
    const second = await getPagesBadge(env, "kick-pages");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(first.badge).toEqual({
      schemaVersion: 1,
      label: "Cloudflare Pages",
      message: "active",
      color: "green",
      isError: false,
      namedLogo: "cloudflare",
      cacheSeconds: 60,
    });
    expect(second.normalizedStatus).toBe("active");

    nowSpy.mockRestore();
  });

  test("refreshes cached project after ttl expiry", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    const firstProject = {
      canonical_deployment: {
        latest_stage: {
          status: "success",
        },
      },
    };

    const secondProject = {
      canonical_deployment: {
        latest_stage: {
          status: "failure",
        },
      },
    };

    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ success: true, result: firstProject }),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ success: true, result: secondProject }),
      });

    const nowSpy = vi.spyOn(Date, "now");
    let currentTime = 0;
    nowSpy.mockImplementation(() => currentTime);

    await getPagesBadge(env, "kick-pages");
    currentTime = 61_000;
    const refreshed = await getPagesBadge(env, "kick-pages");

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(refreshed.badge).toEqual({
      schemaVersion: 1,
      label: "Cloudflare Pages",
      message: "failure",
      color: "critical",
      isError: true,
      namedLogo: "cloudflare",
      cacheSeconds: 60,
    });

    nowSpy.mockRestore();
  });

  test("caches missing projects to avoid repeated lookups", async () => {
    const { getPagesBadge } = await loadModule();

    const env: BadgeEnv = {
      CLOUDFLARE_ACCOUNT_ID: "acct",
      CLOUDFLARE_API_TOKEN: "token",
    };

    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ success: false }),
    });

    await expect(getPagesBadge(env, "gone")).rejects.toThrow(
      "Pages project 'gone' not found"
    );
    await expect(getPagesBadge(env, "gone")).rejects.toThrow(
      "Pages project 'gone' not found"
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
