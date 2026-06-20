import type {
  BlogPost,
  HomePageData,
  Job,
  Project,
  Service,
  SiteConfig,
} from "@/types/content";

const RAW_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const API_BASE_URL = RAW_API_BASE_URL.replace(/\/$/, "");
const API_TIMEOUT_MS = Number(process.env.NEXT_PUBLIC_API_TIMEOUT_MS ?? 8000);
const API_REVALIDATE_SECONDS = Number(
  process.env.NEXT_PUBLIC_API_REVALIDATE_SECONDS ?? 60,
);

type LaravelApiEnvelope<T> = {
  success?: boolean;
  message?: string;
  data?: T | null;
  meta?: Record<string, unknown>;
  errors?: Record<string, string[]>;
};

type ApiFetchOptions = {
  revalidate?: number;
  tag?: string;
};

function buildApiUrl(endpoint: string): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is missing.");
  }

  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  return `${API_BASE_URL}${cleanEndpoint}`;
}

function normalizeApiData<T>(payload: unknown): T | null {
  if (!payload) {
    return null;
  }

  if (typeof payload === "object" && "data" in payload) {
    const envelope = payload as LaravelApiEnvelope<T>;

    if (envelope.success === false) {
      return null;
    }

    return envelope.data ?? null;
  }

  return payload as T;
}

function logApiWarning(endpoint: string, error?: unknown): void {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const reason =
    error instanceof Error ? error.message : "Unknown API fetch issue.";

  console.warn(`[Cactus API] ${endpoint}: ${reason}`);
}

async function apiGet<T>(
  endpoint: string,
  options: ApiFetchOptions = {},
): Promise<T | null> {
  if (!API_BASE_URL) {
    logApiWarning(endpoint, new Error("API base URL is not configured."));
    return null;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  try {
    const response = await fetch(buildApiUrl(endpoint), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
      next: {
        revalidate: options.revalidate ?? API_REVALIDATE_SECONDS,
        tags: options.tag ? [options.tag] : undefined,
      },
    });

    if (response.status === 404 || response.status === 204) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();

    return normalizeApiData<T>(payload);
  } catch (error) {
    logApiWarning(endpoint, error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function apiList<T>(
  endpoint: string,
  options: ApiFetchOptions = {},
): Promise<T[]> {
  const data = await apiGet<T[]>(endpoint, options);

  if (!Array.isArray(data)) {
    return [];
  }

  return data;
}

/**
 * Home / Settings
 */

export async function getHomeData(): Promise<HomePageData | null> {
  return apiGet<HomePageData>("/home", {
    revalidate: 300,
    tag: "home",
  });
}

export async function getSiteSettings(): Promise<SiteConfig | null> {
  return apiGet<SiteConfig>("/settings/site", {
    revalidate: 3600,
    tag: "settings",
  });
}

/**
 * Services
 */

export async function getServices(): Promise<Service[]> {
  return apiList<Service>("/services", {
    revalidate: 1800,
    tag: "services",
  });
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return apiGet<Service>(`/services/${slug}`, {
    revalidate: 1800,
    tag: `service:${slug}`,
  });
}

/**
 * Projects / Portfolio
 */

export async function getProjects(): Promise<Project[]> {
  return apiList<Project>("/projects", {
    revalidate: 1800,
    tag: "projects",
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return apiGet<Project>(`/projects/${slug}`, {
    revalidate: 1800,
    tag: `project:${slug}`,
  });
}

/**
 * Blogs
 */

export async function getBlogs(): Promise<BlogPost[]> {
  return apiList<BlogPost>("/blogs", {
    revalidate: 600,
    tag: "blogs",
  });
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  return apiGet<BlogPost>(`/blogs/${slug}`, {
    revalidate: 600,
    tag: `blog:${slug}`,
  });
}

/**
 * Careers
 */

export async function getJobs(): Promise<Job[]> {
  return apiList<Job>("/careers", {
    revalidate: 900,
    tag: "careers",
  });
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  return apiGet<Job>(`/careers/${slug}`, {
    revalidate: 900,
    tag: `career:${slug}`,
  });
}