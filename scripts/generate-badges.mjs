import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const coverageDir = join(projectRoot, "coverage");
const badgeDir = join(coverageDir, "badges");

const vitestReportPath = join(coverageDir, "vitest-report.json");
const lcovPath = join(coverageDir, "lcov.info");

function coverageColor(pct) {
  if (pct >= 100) return "brightgreen";
  if (pct >= 95) return "green";
  if (pct >= 90) return "yellowgreen";
  if (pct >= 80) return "yellow";
  return "orange";
}

function testsColor(success, failed) {
  if (success && failed === 0) return "brightgreen";
  if (failed === 0) return "green";
  return "red";
}

async function loadJson(path) {
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw);
}

function parseCoverageFromLcov(content) {
  const lines = content.split(/\r?\n/);
  let totalFound = 0;
  let totalHit = 0;

  for (const line of lines) {
    if (line.startsWith("LF:")) {
      totalFound += Number.parseInt(line.slice(3), 10) || 0;
    } else if (line.startsWith("LH:")) {
      totalHit += Number.parseInt(line.slice(3), 10) || 0;
    }
  }

  if (totalFound === 0) {
    return 0;
  }

  return (totalHit / totalFound) * 100;
}

async function main() {
  const [lcovRaw, vitestReport] = await Promise.all([
    readFile(lcovPath, "utf8"),
    loadJson(vitestReportPath),
  ]);

  const linePct = parseCoverageFromLcov(lcovRaw);
  const coverageBadge = {
    schemaVersion: 1,
    label: "coverage",
    message: `${Math.round(linePct)}%`,
    color: coverageColor(linePct),
  };

  const total = vitestReport.numTotalTests ?? 0;
  const passed = vitestReport.numPassedTests ?? 0;
  const failed = vitestReport.numFailedTests ?? 0;
  const success = Boolean(vitestReport.success);

  const testsBadge = {
    schemaVersion: 1,
    label: "tests",
    message:
      failed > 0 ? `${failed}/${total} failed` : `${passed}/${total} passed`,
    color: testsColor(success, failed),
  };

  await mkdir(badgeDir, { recursive: true });
  await Promise.all([
    writeFile(
      join(badgeDir, "coverage.json"),
      JSON.stringify(coverageBadge),
      "utf8"
    ),
    writeFile(join(badgeDir, "tests.json"), JSON.stringify(testsBadge), "utf8"),
  ]);

  console.log("Badge endpoints written to", badgeDir);
}

main().catch((error) => {
  console.error("Failed to generate badge endpoints", error);
  process.exitCode = 1;
});
