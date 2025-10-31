import { beforeEach, describe, expect, test, vi } from "vitest";

const { notifyDeveloperOfErrorMock } = vi.hoisted(() => ({
  notifyDeveloperOfErrorMock: vi.fn(),
}));

vi.mock("../src/lib/functions/errors/notifyDeveloper", () => ({
  notifyDeveloperOfError: notifyDeveloperOfErrorMock,
}));

describe("logErrorToD1", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
    notifyDeveloperOfErrorMock.mockReset();
  });

  test("initializes schema once and stores error entry", async () => {
    const createRun = vi.fn().mockResolvedValue(undefined);
    const insertRun = vi.fn().mockResolvedValue(undefined);
    const bind = vi.fn().mockReturnValue({ run: insertRun });

    const prepare = vi.fn().mockImplementation((sql: string) => {
      if (sql.includes("CREATE TABLE")) {
        return { run: createRun };
      }
      return { bind };
    });

    const d1 = { prepare } as unknown as D1Database;

    const longContextValue = "x".repeat(20_000);
    const { logErrorToD1 } = await import(
      "../src/lib/functions/errors/logError"
    );

    await logErrorToD1(d1, {
      message: "Boom",
      status: 500,
      context: { info: longContextValue },
    });

    expect(prepare).toHaveBeenCalledTimes(2);
    expect(createRun).toHaveBeenCalledTimes(1);
    expect(bind).toHaveBeenCalledWith(
      500,
      "Boom",
      JSON.stringify({ info: longContextValue }).slice(0, 16_000)
    );
    expect(insertRun).toHaveBeenCalledTimes(1);
  });

  test("skips schema creation on subsequent calls and handles missing context", async () => {
    const createRun = vi.fn().mockResolvedValue(undefined);
    const insertRun = vi.fn().mockResolvedValue(undefined);
    const bind = vi.fn().mockReturnValue({ run: insertRun });

    const prepare = vi.fn().mockImplementation((sql: string) => {
      if (sql.includes("CREATE TABLE")) {
        return { run: createRun };
      }
      return { bind };
    });

    const d1 = { prepare } as unknown as D1Database;

    const { logErrorToD1 } = await import(
      "../src/lib/functions/errors/logError"
    );

    await logErrorToD1(d1, { message: "First" });
    await logErrorToD1(d1, { message: "Second", status: 404 });

    const createSqlCount = prepare.mock.calls.filter(([sql]) =>
      sql.includes("CREATE TABLE")
    ).length;

    expect(createSqlCount).toBe(1);
    expect(bind).toHaveBeenNthCalledWith(1, null, "First", null);
    expect(bind).toHaveBeenNthCalledWith(2, 404, "Second", null);
    expect(insertRun).toHaveBeenCalledTimes(2);
  });
});

describe("recordError", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
    notifyDeveloperOfErrorMock.mockReset();
  });

  test("warns once when missing ERROR_LOG_DB and still notifies developers", async () => {
    notifyDeveloperOfErrorMock.mockResolvedValue(undefined);

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const module = await import("../src/lib/functions/errors/logError");
    const logErrorSpy = vi.spyOn(module, "logErrorToD1");

    const env = {} as Record<string, unknown>;
    const entry = { message: "boom" };

    await module.recordError(env as any, entry);
    await module.recordError(env as any, entry);

    expect(logErrorSpy).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(notifyDeveloperOfErrorMock).toHaveBeenCalledTimes(2);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("persists error logs when ERROR_LOG_DB is configured", async () => {
    notifyDeveloperOfErrorMock.mockResolvedValue(undefined);

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const module = await import("../src/lib/functions/errors/logError");
    const createRun = vi.fn().mockResolvedValue(undefined);
    const insertRun = vi.fn().mockResolvedValue(undefined);
    const bind = vi.fn().mockReturnValue({ run: insertRun });
    const prepare = vi.fn().mockImplementation((sql: string) => {
      if (sql.includes("CREATE TABLE")) {
        return { run: createRun };
      }
      return { bind };
    });

    const env = { ERROR_LOG_DB: { prepare } };
    const entry = { message: "boom" };

    await module.recordError(env as any, entry);

    expect(prepare).toHaveBeenCalled();
    expect(bind).toHaveBeenCalledWith(null, "boom", null);
    expect(insertRun).toHaveBeenCalledTimes(1);
    expect(warnSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
    expect(notifyDeveloperOfErrorMock).toHaveBeenCalledTimes(1);
  });

  test("logs persistence failures but keeps processing", async () => {
    notifyDeveloperOfErrorMock.mockResolvedValue(undefined);

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const module = await import("../src/lib/functions/errors/logError");
    const createRun = vi.fn().mockResolvedValue(undefined);
    const insertRun = vi.fn().mockRejectedValue(new Error("persist failed"));
    const bind = vi.fn().mockReturnValue({ run: insertRun });
    const prepare = vi.fn().mockImplementation((sql: string) => {
      if (sql.includes("CREATE TABLE")) {
        return { run: createRun };
      }
      return { bind };
    });

    const env = { ERROR_LOG_DB: { prepare } };
    const entry = { message: "boom" };

    await module.recordError(env as any, entry);

    expect(prepare).toHaveBeenCalled();
    expect(bind).toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
    expect(notifyDeveloperOfErrorMock).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith(
      "Failed to persist error log",
      expect.any(Error)
    );
  });

  test("logs notification failures", async () => {
    notifyDeveloperOfErrorMock.mockRejectedValue(new Error("notify failed"));

    vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const module = await import("../src/lib/functions/errors/logError");
    const createRun = vi.fn().mockResolvedValue(undefined);
    const insertRun = vi.fn().mockResolvedValue(undefined);
    const bind = vi.fn().mockReturnValue({ run: insertRun });
    const prepare = vi.fn().mockImplementation((sql: string) => {
      if (sql.includes("CREATE TABLE")) {
        return { run: createRun };
      }
      return { bind };
    });

    const env = { ERROR_LOG_DB: { prepare } };
    const entry = { message: "boom" };

    await module.recordError(env as any, entry);

    expect(prepare).toHaveBeenCalled();
    expect(bind).toHaveBeenCalled();
    expect(notifyDeveloperOfErrorMock).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith(
      "Failed to send developer notification",
      expect.any(Error)
    );
  });
});
