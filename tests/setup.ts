import { Buffer } from "node:buffer";

if (typeof globalThis.atob !== "function") {
  globalThis.atob = (value: string): string =>
    Buffer.from(value, "base64").toString("binary");
}
