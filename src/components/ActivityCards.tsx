import Link from "next/link";
import { activities } from "@/data/activities";

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e94b 0%, #38f780 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
];

export default function ActivityCards() {
  const recentActivities = activities.slice(0, 6);

  return (
    <section className="section-padding bg-[#f8fafc]" aria-label="Son faaliyetler">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-0.5 bg-[#3364ae] rounded-full mx-auto mb-4" />
          <h2 className="section-title">Karabük'ten Son Faaliyetler</h2>
          <p className="text-[#64748b] text-sm mt-1.5">
            Şubemiz tarafından gerçekleştirilen son ziyaretler ve faaliyetler
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentActivities.map((activity, index) => (
            <Link
              href={`/haber/${activity.slug}`}
              key={activity.id}
              className="card bg-white overflow-hidden group flex flex-col"
            >
              {/* Image Area with gradient fallback */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* Gradient background (always visible) */}
                <div
                  className="absolute inset-0"
                  style={{ background: gradients[index % gradients.length] }}
                />
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#3364ae] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded z-10">
                  {activity.category}
                </span>
                {/* DEMO badge */}
                {activity.isDemo && (
                  <span className="absolute top-3 right-3 bg-yellow-400/90 backdrop-blur-sm text-yellow-900 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded z-10">
                    DEMO
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <time className="text-[11px] text-[#94a3b8] flex items-center gap-1 mb-2">
                  <i className="ri-calendar-line" />
                  {new Date(activity.date).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h3 className="font-bold text-[#1e293b] mb-2 leading-snug group-hover:text-[#3364ae] transition-colors line-clamp-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed line-clamp-2 mb-4 flex-1">
                  {activity.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3364ae] group-hover:text-[#2a5290] transition-colors mt-auto">
                  Devamını Oku
                  <i className="ri-arrow-right-line" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <Link
            href="/faaliyetler"
            className="btn-primary inline-flex items-center gap-2"
          >
            Tüm Faaliyetleri Görüntüle
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
