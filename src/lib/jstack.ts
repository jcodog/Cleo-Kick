import { createClient } from "jstack";
import { AppRouter } from "../server-types";

export const client = createClient<AppRouter>({
  baseUrl: process.env.JSTACK_API_URL ?? "https://api.cleoai.cloud/api",
  credentials: "include",
});
