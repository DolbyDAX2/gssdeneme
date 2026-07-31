import PageLayout from "@/components/PageLayout";
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

export default function FaaliyetlerPage() {
  return (
    <PageLayout title="Faaliyetler / Ziyaretler" breadcrumb={["Faaliyetler"]}>
      <section className="section-padding bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-[#64748b] text-sm mb-8">
            Şubemiz tarafından gerçekleştirilen ziyaretler ve faaliyetler.
          </p>

          {/* Timeline-style layout */}
          <div className="space-y-5">
            {activities.map((activity, index) => (
              <Link
                href={`/haber/${activity.slug}`}
                key={activity.id}
                className="card bg-white overflow-hidden group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="relative lg:col-span-2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ background: gradients[index % gradients.length] }}
                    />
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#3364ae] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded z-10">
                      {activity.category}
                    </span>
                    {activity.isDemo && (
                      <span className="absolute top-3 right-3 bg-yellow-400/90 backdrop-blur-sm text-yellow-900 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded z-10">
                        DEMO
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                    <time className="text-[11px] text-[#94a3b8] flex items-center gap-1 mb-2">
                      <i className="ri-calendar-line" />
                      {new Date(activity.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h3 className="text-lg font-bold text-[#1e293b] mb-3 group-hover:text-[#3364ae] transition-colors leading-snug">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-3">
                      {activity.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3364ae] group-hover:text-[#2a5290] transition-colors">
                      Devamını Oku
                      <i className="ri-arrow-right-line" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-10 p-6 bg-white rounded-xl border border-[#e2e8f0]">
            <i className="ri-information-line text-[#3364ae] text-xl mb-2" />
            <p className="text-sm text-[#64748b]">
              Bu faaliyetler demo amaçlıdır. Gerçek faaliyetler eklendiğinde
              güncellenecektir.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
