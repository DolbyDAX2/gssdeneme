"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Yönetim Kurulu", href: "/yonetim-kurulu" },
  { label: "Haberler", href: "/haberler" },
  { label: "Faaliyetler", href: "/faaliyetler" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

const membershipUrl =
  "https://www.gencsagliksendikasi.org.tr/sayfa/online-uyelik";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between bg-[#3364ae] text-white text-xs py-2 px-4">
        <div className="flex items-center gap-5">
          <a
            href="tel:[Telefon]"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <i className="ri-phone-fill" />
            <span>[Telefon]</span>
          </a>
          <a
            href="mailto:[E-posta]"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <i className="ri-mail-line" />
            <span>[E-posta]</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://x.com/gencsagliksend"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-7 h-7 flex items-center justify-center rounded bg-white/15 hover:bg-white/25 transition-colors"
          >
            <i className="ri-twitter-x-fill text-sm" />
          </a>
          <a
            href="https://www.instagram.com/gencsagliksendikasi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-7 h-7 flex items-center justify-center rounded bg-white/15 hover:bg-white/25 transition-colors"
          >
            <i className="ri-instagram-line text-sm" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md shadow-black/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-[#3364ae] to-[#2a5290] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-xs lg:text-sm tracking-tight">GSS</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs lg:text-[13px] font-bold text-[#1e293b] leading-none tracking-tight">
                  GENÇ SAĞLIK SENDİKASI
                </div>
                <div className="text-[10px] lg:text-xs text-[#64748b] font-medium mt-0.5">
                  Karabük İl Şube Başkanlığı
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Ana menü">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[#475569] hover:text-[#3364ae] transition-colors relative px-3 py-2 rounded-md hover:bg-[#3364ae]/[0.04]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={membershipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 bg-[#a73f41] hover:bg-[#8b3537] text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                <i className="ri-user-star-line" />
                Üye Ol
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={mobileOpen}
              >
                <i
                  className={`text-xl text-[#3364ae] ${
                    mobileOpen ? "ri-close-line" : "ri-menu-2-line"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5" aria-label="Mobil menü">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#475569] hover:bg-[#3364ae]/[0.04] hover:text-[#3364ae] transition-colors font-medium text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href={membershipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#a73f41] hover:bg-[#8b3537] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors text-sm"
                >
                  <i className="ri-user-star-line" />
                  Üye Ol
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
