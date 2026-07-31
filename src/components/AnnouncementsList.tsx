import { announcements } from "@/data/announcements";

export default function AnnouncementsList() {
  return (
    <section className="section-padding bg-white" aria-label="Duyurular">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Heading + CTA */}
          <div className="lg:col-span-1 flex flex-col justify-center h-full">
            <div className="w-12 h-0.5 bg-[#3364ae] rounded-full mb-4" />
            <h2 className="section-title mb-2">Duyurular</h2>
            <p className="text-[#64748b] text-sm leading-relaxed mb-6">
              Şubemizle ilgili güncel duyuruları takip edebilirsiniz.
            </p>
            <a
              href="/duyurular"
              className="btn-outline inline-flex items-center gap-2 text-sm"
            >
              Tüm Duyurular
              <i className="ri-arrow-right-line" />
            </a>
          </div>

          {/* Right: Announcements */}
          <div className="lg:col-span-2 space-y-3">
            {announcements.map((announcement) => (
              <article
                key={announcement.id}
                className="card bg-[#f8fafc] border-0 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 hover:bg-white transition-colors"
              >
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
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="font-semibold text-[#1e293b] mb-1 text-sm truncate">
                    {announcement.title}
                  </h3>
                  <p className="text-xs text-[#64748b] leading-relaxed line-clamp-2">
                    {announcement.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <i className="ri-arrow-right-line text-[#94a3b8] shrink-0 self-center" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
