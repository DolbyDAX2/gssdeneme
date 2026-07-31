import PageLayout from "@/components/PageLayout";
import {
  formatNewsDate,
  getNews,
  getNewsBySlug,
  NewsNotFoundError,
  type NewsDetail,
} from "@/lib/api/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e94b 0%, #38f780 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
];

function getGradientIndex(value: string): number {
  return Array.from(value).reduce((total, character) => {
    return total + character.charCodeAt(0);
  }, 0) % gradients.length;
}

export default async function HaberDetailPage({ params }: Props) {
  const { slug } = await params;
  let article: NewsDetail;

  try {
    article = await getNewsBySlug(slug);
  } catch (error) {
    if (error instanceof NewsNotFoundError) {
      notFound();
    }

    return (
      <PageLayout title="Haberler" breadcrumb={["Haberler"]}>
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <div className="card bg-white px-6 py-12">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#3364ae]/10 flex items-center justify-center">
                <i className="ri-wifi-off-line text-2xl text-[#3364ae]" />
              </div>
              <h2 className="text-base font-bold text-[#1e293b] mb-2">
                Haber şu anda yüklenemiyor
              </h2>
              <p className="text-sm text-[#64748b] mb-6">
                Lütfen kısa bir süre sonra yeniden deneyin.
              </p>
              <Link href="/haberler" className="btn-primary inline-flex items-center gap-2">
                <i className="ri-arrow-left-line" />
                Haberlere Dön
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  const related = await getNews()
    .then(({ items }) => items.filter((item) => item.id !== article.id).slice(0, 3))
    .catch(() => []);
  const gradientIndex = getGradientIndex(article.id);

  return (
    <PageLayout
      title={article.title}
      breadcrumb={["Haberler", article.title]}
    >
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#3364ae] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {article.category}
            </span>
            <time className="text-xs text-[#94a3b8] flex items-center gap-1">
              <i className="ri-calendar-line" />
              {formatNewsDate(article.publishedAt)}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-[#1e293b] mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Cover Image with gradient fallback */}
          <div className="relative rounded-xl overflow-hidden mb-8 aspect-[16/9]">
            <div
              className="absolute inset-0"
              style={{ background: gradients[gradientIndex] }}
            />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4h4v2H4v4h2v-4h4v-2H6zM6 4V0H4v4h4v2H4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Content */}
          <div
            className="prose prose-sm lg:prose-base max-w-none text-[#475569] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Social Share */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#e2e8f0]">
            <span className="text-xs text-[#64748b]">Paylaş:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`/haber/${article.slug}`)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#3364ae]/10 text-[#3364ae] hover:bg-[#3364ae] hover:text-white transition-colors"
              aria-label="Twitter'da paylaş"
            >
              <i className="ri-twitter-x-fill text-sm" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/haber/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#3364ae]/10 text-[#3364ae] hover:bg-[#3364ae] hover:text-white transition-colors"
              aria-label="Facebook'ta paylaş"
            >
              <i className="ri-facebook-fill text-sm" />
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
              <h3 className="text-base font-bold text-[#1e293b] mb-5">
                İlgili Haberler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/haber/${item.slug}`}
                    className="card bg-[#f8fafc] p-3 group"
                  >
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-2">
                      <div
                        className="absolute inset-0"
                        style={{ background: gradients[getGradientIndex(item.id)] }}
                      />
                    </div>
                    <h4 className="font-semibold text-xs text-[#1e293b] group-hover:text-[#3364ae] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-8">
            <Link
              href="/haberler"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#64748b] hover:text-[#3364ae] transition-colors"
            >
              <i className="ri-arrow-left-line" />
              Haberlere Dön
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
