import { beforeEach, describe, expect, test, vi } from "vitest";

const prismaMocks = vi.hoisted(() => {
  const PrismaClient = vi.fn(function PrismaClient(
    this: unknown,
    {
      datasourceUrl,
    }: {
      datasourceUrl: string;
    }
  ) {
    const extendMock = vi.fn().mockImplementation((extension: unknown) => ({
      datasourceUrl,
      extension,
      extended: true,
    }));

    return {
      datasourceUrl,
      $extends: extendMock,
    };
  });

  return { PrismaClient } as const;
});

vi.mock("../src/prisma", () => ({
  PrismaClient: prismaMocks.PrismaClient,
  Prisma: {},
}));

const accelerateMocks = vi.hoisted(() => ({
  withAccelerate: vi.fn(() => "accelerate-extension"),
}));

vi.mock("@prisma/extension-accelerate", () => ({
  withAccelerate: accelerateMocks.withAccelerate,
}));

import { getDb } from "../src/lib/prisma";

type GlobalWithPrismaCache = typeof globalThis & {
  prismaClients?: Record<string, unknown>;
};

beforeEach(() => {
  delete (globalThis as GlobalWithPrismaCache).prismaClients;
  prismaMocks.PrismaClient.mockClear();
  accelerateMocks.withAccelerate.mockClear();
});

describe("getDb", () => {
  test("creates a new Prisma client for an unseen datasource", () => {
    const client = getDb("postgres://first");

    expect(prismaMocks.PrismaClient).toHaveBeenCalledTimes(1);
    expect(prismaMocks.PrismaClient).toHaveBeenCalledWith({
      datasourceUrl: "postgres://first",
    });

    const prismaInstance = prismaMocks.PrismaClient.mock.results[0]?.value;
    expect(prismaInstance?.$extends).toHaveBeenCalledWith(
      "accelerate-extension"
    );
    expect(client).toEqual({
      datasourceUrl: "postgres://first",
      extension: "accelerate-extension",
      extended: true,
    });
    expect(accelerateMocks.withAccelerate).toHaveBeenCalledTimes(1);
  });

  test("reuses cached client for the same datasource", () => {
    const first = getDb("postgres://repeat");
    const second = getDb("postgres://repeat");

    expect(first).toBe(second);
    expect(prismaMocks.PrismaClient).toHaveBeenCalledTimes(1);
  });

  test("creates distinct clients for different datasources", () => {
    const first = getDb("postgres://one");
    const second = getDb("postgres://two");

    expect(first).not.toBe(second);
    expect(prismaMocks.PrismaClient).toHaveBeenCalledTimes(2);
  });

  test("throws when database url is missing", () => {
    expect(() => getDb("" as string)).toThrow(
      "Missing DATABASE_URL configuration"
    );
  });
});
