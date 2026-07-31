import { generalCenterLinks } from "@/data/contact";

const quickAccessItems = [
  {
    icon: "ri-user-star-line",
    title: "Online Üyelik",
    description: "Genç Sağlık Sendikası'na online olarak üye olun",
    href: generalCenterLinks.membership,
    external: true,
  },
  {
    icon: "ri-global-line",
    title: "Genel Merkez",
    description: "Genç Sağlık Sendikası Genel Merkezi resmi web sitesi",
    href: generalCenterLinks.website,
    external: true,
  },
  {
    icon: "ri-file-list-3-line",
    title: "Mevzuat / Dilekçeler",
    description: "İşçi hakları ve mevzuata dair örnek dilekçeler",
    href: `${generalCenterLinks.website}/sayfa/ornek-dilekceler`,
    external: true,
  },
  {
    icon: "ri-phone-line",
    title: "İletişim",
    description: "Karabük İl Şube ile iletişime geçin",
    href: "/iletisim",
    external: false,
  },
];

export default function QuickAccess() {
  return (
    <section className="section-padding bg-[#f8fafc]" aria-label="Hızlı erişim">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-12 h-0.5 bg-[#3364ae] rounded-full mx-auto mb-4" />
          <h2 className="section-title">Hızlı Erişim</h2>
          <p className="text-[#64748b] text-sm mt-1.5">
            Sık kullanılan bağlantılara hızlıca ulaşın
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccessItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="card bg-white border-0 p-6 text-center group hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#3364ae]/10 flex items-center justify-center group-hover:bg-[#3364ae] transition-colors">
                <i className={`${item.icon} text-xl text-[#3364ae] group-hover:text-white transition-colors`} />
              </div>
              <h3 className="font-bold text-[#1e293b] mb-1.5 text-sm">{item.title}</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
