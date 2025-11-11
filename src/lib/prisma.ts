import { PrismaClient } from "../prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Instantiates a Prisma client that uses the Accelerate extension for
 * improved latency when running on the edge runtime.
 */
function createDbClient(url: string) {
  return new PrismaClient({ datasourceUrl: url }).$extends(withAccelerate());
}
export type DbClient = ReturnType<typeof createDbClient>;

// Cache Prisma clients by their connection URL on the global object
declare global {
  var prismaClients: Record<string, DbClient> | undefined;
}

/**
 * Returns a cached Prisma client for the given database URL, avoiding multiple
 * instances within the worker execution context.
 */
export const getDb = (DATABASE_URL: string): DbClient => {
  if (!globalThis.prismaClients) {
    globalThis.prismaClients = {};
  }
  if (!globalThis.prismaClients[DATABASE_URL]) {
    globalThis.prismaClients[DATABASE_URL] = createDbClient(DATABASE_URL);
  }
  return globalThis.prismaClients[DATABASE_URL]!;
};
