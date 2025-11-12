import { Prisma, PrismaClient } from "../prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const createDbClient = (databaseUrl: string) =>
  new PrismaClient({ datasourceUrl: databaseUrl }).$extends(withAccelerate());

export type DbClient = ReturnType<typeof createDbClient>;

declare global {
  // eslint-disable-next-line no-var
  var prismaClients: Record<string, DbClient> | undefined;
}

/**
 * Lazily instantiate and cache Accelerate-enabled Prisma clients by
 * connection string to keep connection usage efficient on long-lived hosts.
 */
export const getDb = (databaseUrl: string): DbClient => {
  if (!databaseUrl) {
    throw new Error("Missing DATABASE_URL configuration");
  }

  if (!globalThis.prismaClients) {
    globalThis.prismaClients = {};
  }

  if (!globalThis.prismaClients[databaseUrl]) {
    globalThis.prismaClients[databaseUrl] = createDbClient(databaseUrl);
  }

  return globalThis.prismaClients[databaseUrl]!;
};

export { Prisma };
