import { mkdir, writeFile } from "node:fs/promises";
import { request } from "node:https";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const coverageDir = join(projectRoot, "coverage");
const badgeDir = join(coverageDir, "badges");

const repo = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
const branch = process.env.GITHUB_REF_NAME ?? "main";
const commitRef = process.env.GITHUB_SHA ?? branch;

function colorForStatus(status) {
  switch (status) {
    case "success":
      return "brightgreen";
    case "queued":
    case "in_progress":
      return "yellow";
    case "cancelled":
    case "neutral":
    case "skipped":
    case "stale":
      return "lightgrey";
    case "failure":
    case "timed_out":
    case "action_required":
      return "red";
    default:
      return "lightgrey";
  }
}

function messageForStatus(status) {
  switch (status) {
    case "success":
      return "deployed";
    case "failure":
      return "failed";
    case "timed_out":
      return "timed out";
    case "cancelled":
      return "cancelled";
    case "queued":
      return "queued";
    case "in_progress":
      return "building";
    case "neutral":
    case "skipped":
    case "stale":
      return status;
    default:
      return status ?? "unknown";
  }
}

async function writeBadge(status) {
  const badge = {
    schemaVersion: 1,
    label: "workers",
    message: messageForStatus(status),
    color: colorForStatus(status),
  };

  await mkdir(badgeDir, { recursive: true });
  const badgePath = join(badgeDir, "workers.json");
  await writeFile(badgePath, JSON.stringify(badge), "utf8");
  console.log(`Worker badge written with status: ${status ?? "unknown"}`);
}

function fetchWorkerChecks() {
  if (!repo || !token) {
    throw new Error("Missing GITHUB_REPOSITORY or GITHUB_TOKEN env vars");
  }

  const url = new URL(
    `/repos/${repo}/commits/${encodeURIComponent(commitRef)}/check-runs`,
    "https://api.github.com"
  );
  url.searchParams.set("per_page", "20");
  url.searchParams.set("status", "all");

  return new Promise((resolve, reject) => {
    const req = request(
      {
        hostname: "api.github.com",
        path: `${url.pathname}${url.search}`,
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "User-Agent": "worker-badge-script",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve(JSON.parse(data));
          } else {
            reject(
              new Error(`GitHub API responded with ${res.statusCode}: ${data}`)
            );
          }
        });
      }
    );

    req.on("error", reject);
    req.end();
  });
}

async function main() {
  let status = "unknown";

  try {
    const response = await fetchWorkerChecks();
    const runs = response.check_runs ?? [];
    const workerRun = runs.find((run) =>
      run.name?.toLowerCase().includes("workers builds")
    );

    if (!workerRun) {
      console.warn(
        "No Cloudflare Workers check run found for latest commit. Writing unknown badge."
      );
    } else {
      status = workerRun.conclusion ?? workerRun.status ?? "unknown";
    }
  } catch (error) {
    console.error("Unable to fetch Cloudflare Workers check run", error);
  }

  await writeBadge(status);
}

main().catch((error) => {
  console.error("Failed to render worker badge", error);
  process.exitCode = 1;
});
