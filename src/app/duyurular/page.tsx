import PageLayout from "@/components/PageLayout";
import { announcements } from "@/data/announcements";

export default function DuyurularPage() {
  return (
    <PageLayout title="Duyurular" breadcrumb={["Duyurular"]}>
      <section className="section-padding bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <p className="text-[#64748b] text-sm mb-6">
            Şubemizle ilgili güncel duyurular.
          </p>

          <div className="space-y-3">
            {announcements.map((announcement) => (
              <article
                key={announcement.id}
                className="card bg-white p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Date Badge */}
                  <div className="flex items-center justify-center sm:w-16 shrink-0">
                    <div className="bg-[#3364ae] text-white rounded-lg px-3 py-2.5 sm:w-14 sm:text-center shadow-sm">
                      <span className="text-sm font-bold block">
                        {new Date(announcement.date).getDate()}
                      </span>
                      <span className="text-[9px] text-blue-100 block uppercase tracking-wider">
                        {new Date(announcement.date).toLocaleDateString("tr-TR", {
                          month: "short",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1e293b] mb-1.5 text-sm">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {announcement.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-10 p-5 bg-white rounded-xl border border-[#e2e8f0]">
            <i className="ri-information-line text-[#3364ae] text-xl mb-2" />
            <p className="text-sm text-[#64748b]">
              Bu duyurular demo amaçlıdır. Gerçek duyurular eklendiğinde
              güncellenecektir.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
