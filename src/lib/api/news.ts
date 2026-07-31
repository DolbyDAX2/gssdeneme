export interface Branch {
  slug: string;
  name: string;
  city: string;
}

export interface NewsListItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsDetail extends NewsListItem {
  branch: Branch;
  content: string;
}

export interface NewsListResponse {
  branch: Branch;
  items: NewsListItem[];
}

export class NewsNotFoundError extends Error {
  constructor(slug: string) {
    super(`Haber bulunamadı: ${slug}`);
    this.name = "NewsNotFoundError";
  }
}

export class NewsApiError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "NewsApiError";
  }
}

function getApiBaseUrl(): string {
  const apiUrl = process.env.GSS_API_URL?.trim();

  if (!apiUrl) {
    throw new NewsApiError("GSS_API_URL ortam değişkeni tanımlı değil.");
  }

  return apiUrl.replace(/\/$/, "");
}

async function apiFetch<T>(path: string): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${getApiBaseUrl()}${path}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });
  } catch (error) {
    if (error instanceof NewsApiError) {
      throw error;
    }

    throw new NewsApiError("Haber servisine şu anda ulaşılamıyor.", {
      cause: error,
    });
  }

  if (!response.ok) {
    throw new NewsApiError(
      `Haber servisi ${response.status} durum kodunu döndürdü.`,
    );
  }

  try {
    return (await response.json()) as T;
  } catch (error) {
    throw new NewsApiError("Haber servisinden geçersiz bir cevap alındı.", {
      cause: error,
    });
  }
}

export async function getNews(): Promise<NewsListResponse> {
  const data = await apiFetch<NewsListResponse>(
    "/api/v1/branches/karabuk/news",
  );

  if (!data.branch || !Array.isArray(data.items)) {
    throw new NewsApiError("Haber listesi beklenen formatta değil.");
  }

  return data;
}

export async function getNewsBySlug(slug: string): Promise<NewsDetail> {
  let response: Response;

  try {
    response = await fetch(
      `${getApiBaseUrl()}/api/v1/branches/karabuk/news/${encodeURIComponent(slug)}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      },
    );
  } catch (error) {
    if (error instanceof NewsApiError) {
      throw error;
    }

    throw new NewsApiError("Haber servisine şu anda ulaşılamıyor.", {
      cause: error,
    });
  }

  if (response.status === 404) {
    throw new NewsNotFoundError(slug);
  }

  if (!response.ok) {
    throw new NewsApiError(
      `Haber servisi ${response.status} durum kodunu döndürdü.`,
    );
  }

  try {
    return (await response.json()) as NewsDetail;
  } catch (error) {
    throw new NewsApiError("Haber servisinden geçersiz bir cevap alındı.", {
      cause: error,
    });
  }
}

export function formatNewsDate(date: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
