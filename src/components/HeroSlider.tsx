"use client";

import { useState, useEffect, useCallback } from "react";

interface Slide {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  gradient: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Karabük Eğitim ve Araştırma Hastanesi Ziyaretimiz",
    category: "Hastane Ziyareti",
    excerpt:
      "Sağlık çalışanlarımızın sorunlarını yerinde dinledik, taleplerini genel merkezimize ilettik.",
    date: "2025-01-15",
    gradient: "linear-gradient(135deg, #1a3a5c 0%, #2d5f8a 40%, #3364ae 100%)",
    link: "/faaliyetler",
  },
  {
    id: 2,
    title: "Sağlık Çalışanlarımızla Bir Araya Geldik",
    category: "Buluşma",
    excerpt:
      "Karabük'teki sağlık ve sosyal hizmet çalışanlarıyla bir araya gelerek, haklarını korumak için çalışmaya devam ediyoruz.",
    date: "2025-01-22",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #34495e 40%, #3364ae 100%)",
    link: "/faaliyetler",
  },
  {
    id: 3,
    title: "Karabük İl Sağlık Müdürlüğü Ziyaretimiz",
    category: "Kurum Ziyareti",
    excerpt:
      "İl Sağlık Müdürlüğü yetkilileriyle görüşme gerçekleştirerek sağlık çalışanlarının taleplerini ilettik.",
    date: "2025-02-03",
    gradient: "linear-gradient(135deg, #1e293b 0%, #3364ae 50%, #4a7fc9 100%)",
    link: "/faaliyetler",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden" aria-label="Manşet haberler">
      {/* Slide Content */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[540px]">
        {/* Gradient Background - always visible, no broken images */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{ background: slide.gradient }}
        />

        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4h4v2H4v4h2v-4h4v-2H6zM6 4V0H4v4h4v2H4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded mb-4 border border-white/20">
              <i className="ri-calendar-event-line" />
              {slide.category}
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-tight mb-3 drop-shadow-sm">
              {slide.title}
            </h1>
            <p className="text-sm lg:text-base text-white/85 mb-6 leading-relaxed max-w-lg drop-shadow-sm">
              {slide.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs text-white/70 flex items-center gap-1.5">
                <i className="ri-calendar-line" />
                {new Date(slide.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <a
                href={slide.link}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#3364ae] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-black/20"
              >
                Devamını Oku
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white w-8"
                  : "bg-white/30 w-2 hover:bg-white/50"
              }`}
              aria-label={`Slayt ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Arrows */}
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors hidden sm:flex"
          aria-label="Önceki slayt"
        >
          <i className="ri-arrow-left-s-line text-xl" />
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors hidden sm:flex"
          aria-label="Sonraki slayt"
        >
          <i className="ri-arrow-right-s-line text-xl" />
        </button>
      </div>
    </section>
  );
}
