import PageLayout from "@/components/PageLayout";
import { getActivityBySlug, activities } from "@/data/activities";
import Link from "next/link";

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

export default async function HaberDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    return (
      <PageLayout title="Haber Bulunamadı" breadcrumb={[slug]}>
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <i className="ri-error-warning-line text-3xl text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-[#1e293b] mb-2">
              Haber Bulunamadı
            </h2>
            <p className="text-[#64748b] text-sm mb-6">
              Aradığınız haber bulunamadı veya kaldırılmış olabilir.
            </p>
            <Link href="/haberler" className="btn-primary inline-flex items-center gap-2">
              Haberlere Dön
              <i className="ri-arrow-left-line" />
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const idx = activities.findIndex((a) => a.id === activity.id);
  const related = activities.filter((a) => a.id !== activity.id).slice(0, 3);

  return (
    <PageLayout
      title={activity.title}
      breadcrumb={["Haberler", activity.title]}
    >
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#3364ae] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {activity.category}
            </span>
            <time className="text-xs text-[#94a3b8] flex items-center gap-1">
              <i className="ri-calendar-line" />
              {new Date(activity.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {activity.isDemo && (
              <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                DEMO İÇERİK
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-[#1e293b] mb-6 leading-tight">
            {activity.title}
          </h1>

          {/* Cover Image with gradient fallback */}
          <div className="rounded-xl overflow-hidden mb-8 aspect-[16/9]">
            <div
              className="absolute inset-0"
              style={{ background: gradients[idx % gradients.length] }}
            />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4h4v2H4v4h2v-4h4v-2H6zM6 4V0H4v4h4v2H4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Content */}
          <div
            className="prose prose-sm lg:prose-base max-w-none text-[#475569] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: activity.content }}
          />

          {/* Social Share */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#e2e8f0]">
            <span className="text-xs text-[#64748b]">Paylaş:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`/haber/${activity.slug}`)}&text=${encodeURIComponent(activity.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#3364ae]/10 text-[#3364ae] hover:bg-[#3364ae] hover:text-white transition-colors"
              aria-label="Twitter'da paylaş"
            >
              <i className="ri-twitter-x-fill text-sm" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/haber/${activity.slug}`)}`}
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
                {related.map((rel, i) => (
                  <Link
                    key={rel.id}
                    href={`/haber/${rel.slug}`}
                    className="card bg-[#f8fafc] p-3 group"
                  >
                    <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2">
                      <div
                        className="absolute inset-0"
                        style={{ background: gradients[(idx + i + 1) % gradients.length] }}
                      />
                    </div>
                    <h4 className="font-semibold text-xs text-[#1e293b] group-hover:text-[#3364ae] transition-colors line-clamp-2">
                      {rel.title}
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
