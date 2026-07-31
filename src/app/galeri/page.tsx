"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { galleryImages, galleryCategories } from "@/data/gallery";

const gradientMap: Record<string, string> = {
  sube: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  ziyaretler: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  toplantilar: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  etkinlikler: "linear-gradient(135deg, #43e94b 0%, #38f780 100%)",
};

const iconMap: Record<string, string> = {
  sube: "ri-building-line",
  ziyaretler: "ri-hospital-line",
  toplantilar: "ri-team-line",
  etkinlikler: "ri-event-line",
};

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("tumu");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "tumu"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <PageLayout title="Galeri" breadcrumb={["Galeri"]}>
      <section className="section-padding bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {galleryCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeFilter === cat.key
                    ? "bg-[#3364ae] text-white shadow-sm"
                    : "bg-white text-[#64748b] hover:bg-gray-50 border border-[#e2e8f0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((image) => (
              <button
                key={image.id}
                onClick={() => setLightboxIndex(image.id)}
                className="relative aspect-[3/2] rounded-lg overflow-hidden group cursor-zoom-in"
                aria-label={`${image.title} fotoğrafını aç`}
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-0"
                  style={{ background: gradientMap[image.category] || gradientMap["sube"] }}
                />
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                {/* Category icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${iconMap[image.category] || "ri-image-line"} text-white/40 text-3xl`} />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-200 flex items-end">
                  <div className="p-3 w-full transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform">
                    <span className="text-white text-xs font-semibold block truncate">
                      {image.title}
                    </span>
                    {image.date && (
                      <span className="text-white/70 text-[10px]">
                        {new Date(image.date).toLocaleDateString("tr-TR")}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-image-add-line text-4xl text-[#94a3b8] mb-3" />
              <p className="text-[#64748b] text-sm">Bu kategoride henüz fotoğraf bulunmamaktadır.</p>
            </div>
          )}

          {/* Lightbox */}
          {lightboxIndex !== null && (
            <div
              className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center cursor-zoom-out"
              onClick={() => setLightboxIndex(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Fotoğraf görüntüleyici"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors z-10"
                aria-label="Kapat"
              >
                <i className="ri-close-line text-xl" />
              </button>
              <div
                className="w-[80vw] h-[60vh] rounded-xl overflow-hidden relative"
                style={{
                  background: gradientMap[
                    galleryImages.find((img) => img.id === lightboxIndex)?.category || "sube"
                  ]
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <i className={`${iconMap[galleryImages.find((img) => img.id === lightboxIndex)?.category || "sube"]} text-5xl mb-3 opacity-60`} />
                  <span className="text-lg font-semibold">
                    {galleryImages.find((img) => img.id === lightboxIndex)?.title}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
