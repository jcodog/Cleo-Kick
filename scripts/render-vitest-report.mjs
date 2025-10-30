import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const coverageDir = join(projectRoot, "coverage");
const jsonPath = join(coverageDir, "vitest-report.json");
const outputPath = join(coverageDir, "tests.html");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDuration(start, end) {
  if (!start || !end) {
    return "n/a";
  }
  const ms = end - start;
  if (ms < 1000) {
    return `${ms.toFixed(0)} ms`;
  }
  return `${(ms / 1000).toFixed(2)} s`;
}

function renderSummary(data) {
  const fields = [
    ["Suites", data.numTotalTestSuites ?? 0],
    ["Tests", data.numTotalTests ?? 0],
    ["Passed", data.numPassedTests ?? 0],
    ["Failed", data.numFailedTests ?? 0],
    ["Skipped", data.numPendingTests ?? 0],
  ];

  const statusBadge = data.success
    ? '<span class="badge badge--pass">Pass</span>'
    : '<span class="badge badge--fail">Fail</span>';

  return `
    <section>
      <h2>Summary ${statusBadge}</h2>
      <dl class="metrics">
        ${fields
          .map(
            ([label, value]) => `
              <div>
                <dt>${label}</dt>
                <dd>${escapeHtml(value)}</dd>
              </div>
            `
          )
          .join("")}
      </dl>
    </section>
  `;
}

function renderSuite(result) {
  const tests = result.assertionResults ?? [];
  const failed = tests.filter((test) => test.status === "failed");

  return `
    <section class="suite">
      <h3>${escapeHtml(result.name ?? "Unknown suite")}</h3>
      <div class="suite__meta">
        <span>Status: <strong>${escapeHtml(
          result.status ?? "unknown"
        )}</strong></span>
        <span>Duration: ${escapeHtml(
          formatDuration(result.startTime, result.endTime)
        )}</span>
        <span>Total: ${tests.length}</span>
      </div>
      <ul class="tests">
        ${tests
          .map((test) => {
            const indicator =
              test.status === "passed"
                ? "badge--pass"
                : test.status === "failed"
                ? "badge--fail"
                : "badge--skip";
            const message =
              test.failureMessages && test.failureMessages.length > 0
                ? `<details><summary>Failure details</summary><pre>${escapeHtml(
                    test.failureMessages.join("\n\n")
                  )}</pre></details>`
                : "";

            return `
              <li>
                <span class="badge ${indicator}">${escapeHtml(
              test.status ?? "unknown"
            )}</span>
                <span class="test-name">${escapeHtml(
                  test.fullName ?? test.title ?? "(anonymous test)"
                )}</span>
                ${message}
              </li>
            `;
          })
          .join("")}
      </ul>
      ${failed.length === 0 ? "" : ""}
    </section>
  `;
}

async function main() {
  let raw;
  try {
    raw = await readFile(jsonPath, "utf8");
  } catch (error) {
    console.warn("Vitest JSON report not found at", jsonPath, error);
    return;
  }

  const data = JSON.parse(raw);
  await mkdir(coverageDir, { recursive: true });

  const suites = (data.testResults ?? []).map(renderSuite).join("");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Vitest Results</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        color-scheme: light dark;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #0f172a;
        color: #e2e8f0;
      }
      body {
        margin: 0;
        padding: 24px;
        max-width: 960px;
      }
      a {
        color: #38bdf8;
      }
      h1 {
        margin-top: 0;
      }
      section {
        margin-bottom: 32px;
        padding: 24px;
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(148, 163, 184, 0.2);
        border-radius: 12px;
      }
      .metrics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
        margin: 0;
      }
      .metrics div {
        background: rgba(30, 41, 59, 0.6);
        padding: 12px;
        border-radius: 8px;
      }
      dt {
        margin: 0;
        font-size: 14px;
        color: #cbd5f5;
      }
      dd {
        margin: 4px 0 0;
        font-size: 20px;
        font-weight: 600;
      }
      .suite__meta {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        font-size: 14px;
        color: #cbd5f5;
        margin-bottom: 16px;
      }
      .tests {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
      }
      .tests li {
        padding: 12px;
        border-radius: 8px;
        border: 1px solid rgba(148, 163, 184, 0.2);
        background: rgba(15, 23, 42, 0.5);
      }
      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 70px;
        padding: 4px 8px;
        border-radius: 999px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-right: 12px;
      }
      .badge--pass {
        background: rgba(34, 197, 94, 0.2);
        color: #4ade80;
        border: 1px solid rgba(34, 197, 94, 0.3);
      }
      .badge--fail {
        background: rgba(248, 113, 113, 0.2);
        color: #f87171;
        border: 1px solid rgba(248, 113, 113, 0.3);
      }
      .badge--skip {
        background: rgba(148, 163, 184, 0.2);
        color: #cbd5f5;
        border: 1px solid rgba(148, 163, 184, 0.3);
      }
      details {
        margin-top: 12px;
      }
      pre {
        white-space: pre-wrap;
        word-break: break-word;
        background: rgba(15, 23, 42, 0.8);
        padding: 12px;
        border-radius: 8px;
        border: 1px solid rgba(148, 163, 184, 0.2);
      }
      footer {
        font-size: 13px;
        color: #94a3b8;
      }
    </style>
  </head>
  <body>
    <h1>Vitest Results</h1>
    ${renderSummary(data)}
    ${suites}
    <footer>
      Generated from <code>vitest --reporter=json</code> on ${escapeHtml(
        new Date(data.startTime ?? Date.now()).toISOString()
      )}
    </footer>
  </body>
</html>`;

  await writeFile(outputPath, html, "utf8");
  console.log("Test results written to", outputPath);
}

main().catch((error) => {
  console.error("Failed to render Vitest report", error);
  process.exitCode = 1;
});
