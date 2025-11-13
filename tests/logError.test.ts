import { beforeEach, describe, expect, test, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const notifyDeveloperOfError = vi.fn();
  const errorLogCreate = vi.fn();
  const getDb = vi.fn(() => ({
    errorLog: {
      create: errorLogCreate,
    },
  }));
  const logtailInstance = {
    error: vi.fn().mockResolvedValue(undefined),
  };
  const Logtail = vi.fn(function mockLogtail(this: unknown, _token: string) {
    return logtailInstance;
  });

  return {
    notifyDeveloperOfError,
    errorLogCreate,
    getDb,
    logtailInstance,
    Logtail,
  } as const;
});

vi.mock("../src/lib/functions/errors/notifyDeveloper", () => ({
  notifyDeveloperOfError: mocks.notifyDeveloperOfError,
}));

vi.mock("../src/lib/prisma", () => ({
  getDb: mocks.getDb,
}));

vi.mock("@logtail/node", () => ({
  __esModule: true,
  Logtail: mocks.Logtail,
}));

describe("recordError", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
    mocks.notifyDeveloperOfError.mockReset();
    mocks.notifyDeveloperOfError.mockResolvedValue(undefined);
    mocks.errorLogCreate.mockReset();
    mocks.errorLogCreate.mockResolvedValue(undefined);
    mocks.getDb.mockReset();
    mocks.getDb.mockImplementation(() => ({
      errorLog: {
        create: mocks.errorLogCreate,
      },
    }));
    mocks.logtailInstance.error.mockReset();
    mocks.logtailInstance.error.mockResolvedValue(undefined);
    mocks.Logtail.mockReset();
    mocks.Logtail.mockImplementation(function mockLogtailInstance() {
      return mocks.logtailInstance;
    });
  });

  test("warns once when database url is missing and still notifies developers", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const entry = { message: "boom" };
    await recordError({} as any, entry);
    await recordError({} as any, entry);

    expect(mocks.getDb).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(mocks.notifyDeveloperOfError).toHaveBeenCalledTimes(2);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("persists error logs when database configuration is present", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
      ERROR_LOG_PROCESS_NAME: "worker",
    };

    await recordError(env as any, {
      message: "boom",
      status: 500,
      context: { foo: "bar" },
    });

    expect(mocks.getDb).toHaveBeenCalledWith("postgres://example");
    expect(mocks.errorLogCreate).toHaveBeenCalledTimes(1);
    const [[createArgs]] = mocks.errorLogCreate.mock.calls;
    expect(createArgs.data).toMatchObject({
      process: "worker",
      message: "boom",
      status: 500,
    });
    expect(createArgs.data.context).toContain('"foo": "bar"');
    expect(warnSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
    expect(mocks.notifyDeveloperOfError).toHaveBeenCalledTimes(1);
  });

  test("logs persistence failures but continues processing", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    mocks.errorLogCreate.mockRejectedValueOnce(new Error("persist failed"));

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    await recordError({ DATABASE_URL: "postgres://example" } as any, {
      message: "boom",
    });

    expect(mocks.errorLogCreate).toHaveBeenCalledTimes(1);
    expect(warnSpy).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith(
      "Failed to persist error log",
      expect.any(Error)
    );
    expect(mocks.notifyDeveloperOfError).toHaveBeenCalledTimes(1);
  });

  test("forwards errors to Logtail when configured", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    await recordError(
      {
        DATABASE_URL: "postgres://example",
        LOGTAIL_SOURCE_TOKEN: "test-token",
      } as any,
      { message: "boom", status: 502 }
    );

    expect(mocks.Logtail).toHaveBeenCalledWith("test-token");
    expect(mocks.logtailInstance.error).toHaveBeenCalledWith("boom", {
      context: null,
      process: "kick-bot",
      status: 502,
      timestamp: expect.any(String),
    });
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("logs Logtail failures but continues", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    mocks.logtailInstance.error.mockRejectedValueOnce(
      new Error("logtail down")
    );

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    await recordError(
      {
        DATABASE_URL: "postgres://example",
        LOGTAIL_SOURCE_TOKEN: "test-token",
      } as any,
      { message: "boom" }
    );

    expect(mocks.logtailInstance.error).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith(
      "Failed to send error to Logtail",
      expect.any(Error)
    );
    expect(mocks.notifyDeveloperOfError).toHaveBeenCalledTimes(1);
  });

  test("logs notification failures", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    mocks.notifyDeveloperOfError.mockRejectedValueOnce(
      new Error("notify failed")
    );

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    await recordError({ DATABASE_URL: "postgres://example" } as any, {
      message: "boom",
    });

    expect(errorSpy).toHaveBeenCalledWith(
      "Failed to send developer notification",
      expect.any(Error)
    );
  });

  test("serialises complex contexts safely", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
    } as any;

    await recordError(env, {
      message: "boom",
      context: {
        nested: { error: new Error("bad") },
        value: BigInt(42),
        filler: "x".repeat(20_000),
      },
    });

    const [[createArgs]] = mocks.errorLogCreate.mock.calls;
    const contextString = createArgs.data.context as string;
    expect(contextString).toContain('"value": 42');
    expect(contextString).toContain('"name": "Error"');
    expect(contextString.includes("…")).toBe(true);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("stringifies non-serialisable contexts with fallbacks", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
    } as any;

    const circular: Record<string, unknown> & { self?: unknown } = {};
    circular.self = circular;

    await recordError(env, {
      message: "loop",
      context: circular,
    });

    const [[createArgs]] = mocks.errorLogCreate.mock.calls.slice(-1);
    const contextString = createArgs.data.context as string;
    expect(contextString).toContain("Converting circular structure to JSON");
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("treats custom toJSON returning undefined as empty context", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
    } as any;

    await recordError(env, {
      message: "void",
      context: {
        toJSON() {
          return undefined;
        },
      },
    });

    const [[createArgs]] = mocks.errorLogCreate.mock.calls.slice(-1);
    expect(createArgs.data.context).toBe("{}");
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("stores stack traces and normalises non-numeric statuses", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
    } as any;

    await recordError(env, {
      message: "boom",
      status: "500" as unknown as number,
      stack: "stack-trace",
    });

    const [[createArgs]] = mocks.errorLogCreate.mock.calls.slice(-1);
    expect(createArgs.data.status).toBeNull();
    expect(createArgs.data.stackTrace).toBe("stack-trace");
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("logs Logtail initialisation failures only once", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    mocks.Logtail.mockImplementation(() => {
      throw new Error("logtail init failed");
    });

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
      LOGTAIL_SOURCE_TOKEN: "token",
    } as any;

    await recordError(env, { message: "first" });
    await recordError(env, { message: "second" });

    const initFailures = errorSpy.mock.calls.filter(
      ([message]) => message === "Failed to initialise Logtail client"
    );
    expect(initFailures).toHaveLength(1);
    expect(mocks.Logtail).toHaveBeenCalledTimes(2);
    expect(mocks.logtailInstance.error).not.toHaveBeenCalled();
  });

  test("reuses existing Logtail client when token matches", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
      LOGTAIL_SOURCE_TOKEN: "token",
    } as any;

    await recordError(env, { message: "first" });
    await recordError(env, { message: "second", context: { ok: true } });

    expect(mocks.Logtail).toHaveBeenCalledTimes(1);
    expect(mocks.logtailInstance.error).toHaveBeenCalledTimes(2);
    expect(mocks.logtailInstance.error).toHaveBeenLastCalledWith("second", {
      status: null,
      process: "kick-bot",
      timestamp: expect.any(String),
      context: { ok: true },
    });
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("falls back to error string when JSON.stringify throws", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const realStringify = JSON.stringify;
    const stringifySpy = vi
      .spyOn(JSON, "stringify")
      .mockImplementationOnce(() => {
        throw new TypeError("unexpected failure");
      })
      .mockImplementation((...args) => realStringify.call(JSON, ...args));

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
    } as any;

    await recordError(env, {
      message: "boom",
      context: { trigger: "stringify-error" },
    });

    const [[createArgs]] = mocks.errorLogCreate.mock.calls;
    expect(createArgs.data.context).toBe("TypeError: unexpected failure");
    expect(stringifySpy).toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test("falls back to original value when thrown error is undefined", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const realStringify = JSON.stringify;
    vi.spyOn(JSON, "stringify")
      .mockImplementationOnce(() => {
        throw undefined;
      })
      .mockImplementation((...args) => realStringify.call(JSON, ...args));

    const { recordError } = await import(
      "../src/lib/functions/errors/logError"
    );

    const env = {
      DATABASE_URL: "postgres://example",
    } as any;

    const context = { source: "undefined-error" };
    await recordError(env, {
      message: "boom",
      context,
    });

    const [[createArgs]] = mocks.errorLogCreate.mock.calls;
    expect(createArgs.data.context).toBe(String(context));
    expect(errorSpy).not.toHaveBeenCalled();
  });
});
