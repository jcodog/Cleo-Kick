import { createClient } from "jstack";
import { AppRouter } from "../server-types";

export const client = createClient<AppRouter>({
  baseUrl: `${process.env.JSTACK_API_URL}/api`,
  credentials: "include",
});
