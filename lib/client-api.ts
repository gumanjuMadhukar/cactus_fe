type ApiSubmitResult<TData = unknown> = {
  ok: boolean;
  message: string;
  data: TData | null;
  errors?: Record<string, string[]>;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  source_page?: string;
};

type LaravelApiResponse<TData> = {
  success: boolean;
  message?: string;
  data?: TData | null;
  errors?: Record<string, string[]>;
};

const RAW_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const API_BASE_URL = RAW_API_BASE_URL.replace(/\/$/, "");
const API_TIMEOUT_MS = Number(process.env.NEXT_PUBLIC_API_TIMEOUT_MS ?? 8000);

function hasApiBaseUrl() {
  return API_BASE_URL.length > 0;
}

function buildApiUrl(endpoint: string) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
}

async function apiPost<TPayload, TData = unknown>(
  endpoint: string,
  payload: TPayload
): Promise<ApiSubmitResult<TData>> {
  if (!hasApiBaseUrl()) {
    return {
      ok: false,
      message: "API base URL is missing. Please set NEXT_PUBLIC_API_BASE_URL.",
      data: null,
    };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  try {
    const response = await fetch(buildApiUrl(endpoint), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });

    const json = (await response.json().catch(() => null)) as LaravelApiResponse<TData> | null;

    if (response.status === 422) {
      return {
        ok: false,
        message: json?.message ?? "Please check the form fields.",
        data: null,
        errors: json?.errors ?? {},
      };
    }

    if (!response.ok) {
      return {
        ok: false,
        message: json?.message ?? `Request failed with status ${response.status}.`,
        data: null,
      };
    }

    if (!json || json.success !== true) {
      return {
        ok: false,
        message: json?.message ?? "The request could not be completed.",
        data: null,
        errors: json?.errors,
      };
    }

    return {
      ok: true,
      message: json.message ?? "Thank you. Your inquiry has been sent successfully.",
      data: json.data ?? null,
    };
  } catch (error) {
    const isTimeout = error instanceof DOMException && error.name === "AbortError";

    return {
      ok: false,
      message: isTimeout
        ? "The request timed out. Please try again."
        : "Laravel API is unavailable. Please try again later.",
      data: null,
    };
  } finally {
    clearTimeout(timer);
  }
}

export async function submitContactInquiry(
  payload: ContactPayload
): Promise<ApiSubmitResult> {
  return apiPost<ContactPayload>("/contact", payload);
}