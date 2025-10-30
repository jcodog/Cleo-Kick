const API_BASE = "https://api.cloudflare.com/client/v4";
const CACHE_TTL_MS = 60_000;

export interface BadgeEnv {
  readonly CLOUDFLARE_ACCOUNT_ID?: string;
  readonly CLOUDFLARE_API_TOKEN?: string;
}

interface CloudflareResponse<T> {
  success: boolean;
  errors?: Array<{ code: number; message: string }>;
  result?: T;
}

interface Project {
  canonical_deployment?: {
    latest_stage?: {
      status?: string;
      name?: string;
    };
  };
}

export interface ShieldBadgeResponse {
  schemaVersion: number;
  label: string;
  message: string;
  color: string;
  isError: boolean;
  namedLogo: string;
  cacheSeconds: number;
}

type ProjectStageStatus =
  | "success"
  | "canceled"
  | "idle"
  | "active"
  | "failure";

const ALLOWED_STATUSES = new Set<ProjectStageStatus>([
  "success",
  "canceled",
  "idle",
  "active",
  "failure",
]);

const STATUS_COLORS: Record<ProjectStageStatus | "unknown", string> = {
  success: "success",
  idle: "informational",
  failure: "critical",
  canceled: "inactive",
  active: "green",
  unknown: "inactive",
};

const ERROR_STATUSES = new Set<ProjectStageStatus | "unknown">([
  "failure",
  "canceled",
  "unknown",
]);

type CachedProject = {
  project?: Project;
  cachedAt: number;
};

const projectCache = new Map<string, CachedProject>();

function normalizeStatus(status: unknown): ProjectStageStatus | "unknown" {
  if (
    typeof status === "string" &&
    ALLOWED_STATUSES.has(status as ProjectStageStatus)
  ) {
    return status as ProjectStageStatus;
  }

  return "unknown";
}

function createBadge(
  status: ProjectStageStatus | "unknown"
): ShieldBadgeResponse {
  return {
    schemaVersion: 1,
    label: "Cloudflare Pages",
    message: status,
    color: STATUS_COLORS[status],
    isError: ERROR_STATUSES.has(status),
    namedLogo: "cloudflare",
    cacheSeconds: 60,
  };
}

function buildProjectUrl(accountId: string, projectName: string): string {
  return `${API_BASE}/accounts/${encodeURIComponent(
    accountId
  )}/pages/projects/${encodeURIComponent(projectName)}`;
}

async function requestProject(
  env: BadgeEnv,
  projectName: string
): Promise<Project | undefined> {
  const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = env;

  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN) {
    throw new Error("Missing Cloudflare API configuration");
  }

  const cacheKey = projectName;
  const cached = projectCache.get(cacheKey);
  if (cached && Date.now() - cached.cachedAt < CACHE_TTL_MS) {
    return cached.project;
  }

  const url = buildProjectUrl(CLOUDFLARE_ACCOUNT_ID, projectName);
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      "User-Agent": "kick-bot-pages-badge",
    },
  });

  if (response.status === 404) {
    projectCache.set(cacheKey, { cachedAt: Date.now(), project: undefined });
    return undefined;
  }

  if (!response.ok) {
    throw new Error(`Cloudflare API responded with ${response.status}`);
  }

  const data = (await response.json()) as CloudflareResponse<Project>;

  if (!data.success) {
    const message =
      data.errors?.map((error) => error.message).join(", ") ?? "Unknown error";
    throw new Error(`Cloudflare API error: ${message}`);
  }

  projectCache.set(cacheKey, { cachedAt: Date.now(), project: data.result });
  return data.result;
}

export async function getPagesBadge(
  env: BadgeEnv,
  projectName: string
): Promise<{
  badge: ShieldBadgeResponse;
  rawStatus: string | undefined;
  normalizedStatus: ProjectStageStatus | "unknown";
}> {
  const project = await requestProject(env, projectName);

  if (!project) {
    throw new Error(`Pages project '${projectName}' not found`);
  }

  const status = project.canonical_deployment?.latest_stage?.status;
  const normalizedStatus = normalizeStatus(status);

  return {
    badge: createBadge(normalizedStatus),
    rawStatus: status,
    normalizedStatus,
  };
}
