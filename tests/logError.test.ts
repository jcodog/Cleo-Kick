import { beforeEach, describe, expect, test, vi } from "vitest";

describe("logErrorToD1", () => {
  beforeEach(() => {
    vi.resetModules();
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
