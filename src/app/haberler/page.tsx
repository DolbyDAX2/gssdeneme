import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { formatNewsDate, getNews, type NewsListItem } from "@/lib/api/news";

export const dynamic = "force-dynamic";

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e94b 0%, #38f780 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
];

export default async function HaberlerPage() {
  let news: NewsListItem[] = [];
  let hasError = false;

  try {
    const response = await getNews();
    news = response.items;
  } catch {
    hasError = true;
  }

  return (
    <PageLayout title="Haberler" breadcrumb={["Haberler"]}>
      <section className="section-padding bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-[#64748b] text-sm mb-8">
            Şubemizin haber ve faaliyetleri burada yer almaktadır.
          </p>

          {hasError ? (
            <div className="card bg-white px-6 py-12 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#3364ae]/10 flex items-center justify-center">
                <i className="ri-wifi-off-line text-2xl text-[#3364ae]" />
              </div>
              <h2 className="text-base font-bold text-[#1e293b] mb-2">
                Haberler şu anda yüklenemiyor
              </h2>
              <p className="text-sm text-[#64748b]">
                Lütfen kısa bir süre sonra sayfayı yeniden deneyin.
              </p>
            </div>
          ) : news.length === 0 ? (
            <div className="card bg-white px-6 py-12 text-center">
              <i className="ri-newspaper-line text-3xl text-[#94a3b8] mb-3" />
              <p className="text-sm text-[#64748b]">
                Henüz yayımlanmış bir haber bulunmamaktadır.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {news.map((item, index) => (
                <Link
                  href={`/haber/${item.slug}`}
                  key={item.id}
                  className="card bg-white overflow-hidden group flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ background: gradients[index % gradients.length] }}
                    />
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#3364ae] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded z-10">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <time className="text-[11px] text-[#94a3b8] flex items-center gap-1 mb-2">
                      <i className="ri-calendar-line" />
                      {formatNewsDate(item.publishedAt)}
                    </time>
                    <h3 className="font-bold text-[#1e293b] mb-2 leading-snug group-hover:text-[#3364ae] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {item.summary}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3364ae] group-hover:text-[#2a5290] transition-colors mt-auto">
                      Devamını Oku
                      <i className="ri-arrow-right-line" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
