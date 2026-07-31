import Link from "next/link";
import { contactInfo, generalCenterLinks } from "@/data/contact";

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Yönetim Kurulu", href: "/yonetim-kurulu" },
  { label: "Haberler", href: "/haberler" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

const corporateLinks = [
  {
    label: "Genel Merkez",
    href: generalCenterLinks.website,
    external: true,
  },
  {
    label: "Online Üyelik",
    href: generalCenterLinks.membership,
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1e293b] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3364ae] to-[#2a5290] flex items-center justify-center text-white font-bold shadow-sm">
                <span className="text-xs">GSS</span>
              </div>
              <div>
                <div className="font-bold text-xs leading-tight">
                  GENÇ SAĞLIK SENDİKASI
                </div>
                <div className="text-[10px] text-gray-400">
                  Karabük İl Şube Başkanlığı
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Karabük'te görev yapan sağlık ve sosyal hizmet çalışanlarının
              haklarını korumak, sorunlarına çözüm üretmek ve güçlü bir
              dayanışma ortamı oluşturmak için çalışıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <i className="ri-arrow-right-s-line" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Kurumsal Bağlantılar
            </h3>
            <ul className="space-y-2">
              {corporateLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <i className="ri-arrow-right-s-line" />
                    {link.label}
                    {link.external && (
                      <i className="ri-external-link-line text-[9px]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
              İletişim
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-xs text-gray-300">
                <i className="ri-map-pin-line mt-0.5 text-[#4a7fc9]" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-300">
                <i className="ri-phone-line mt-0.5 text-[#4a7fc9]" />
                <a
                  href="tel:[Telefon]"
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-300">
                <i className="ri-mail-line mt-0.5 text-[#4a7fc9]" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] text-gray-500">
            <p>
              © {year} Genç Sağlık Sendikası Karabük İl Şube Başkanlığı. Tüm
              hakları saklıdır.
            </p>
            <p className="text-center md:text-right">
              Bu site Genç Sağlık Sendikası Karabük İl Şube Başkanlığı için
              hazırlanmıştır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
