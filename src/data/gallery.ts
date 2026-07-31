/**
 * ============================================================
 * GALERİ VERİSİ
 * ============================================================
 * ⚠️ DEMO İÇERİK — Bu görseller örnektir.
 *    Gerçek şube fotoğrafları eklendiğinde bu dosyayı güncelleyin.
 * ============================================================
 */

export interface GalleryImage {
  id: number;
  title: string;
  category: "sube" | "ziyaretler" | "toplantilar" | "etkinlikler";
  imageUrl: string;
  date?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Şube Ofisi",
    category: "sube",
    imageUrl: "https://images.unsplash.com/photo-1497366216146-69efd7851449?w=600&h=400&fit=crop",
    date: "2025-01-10",
  },
  {
    id: 2,
    title: "Hastane Ziyareti",
    category: "ziyaretler",
    imageUrl: "https://images.unsplash.com/photo-1519494025892-8b34e4b31e3a?w=600&h=400&fit=crop",
    date: "2025-01-15",
  },
  {
    id: 3,
    title: "Yönetim Kurulu Toplantısı",
    category: "toplantilar",
    imageUrl: "https://images.unsplash.com/photo-1552664739-d317ca8b0a91?w=600&h=400&fit=crop",
    date: "2025-01-20",
  },
  {
    id: 4,
    title: "Üye Bilgilendirme Etkinliği",
    category: "etkinlikler",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c902fd?w=600&h=400&fit=crop",
    date: "2025-02-01",
  },
  {
    id: 5,
    title: "Şube Toplantısı",
    category: "sube",
    imageUrl: "https://images.unsplash.com/photo-1576045438943-f10b2c039948?w=600&h=400&fit=crop",
    date: "2025-02-05",
  },
  {
    id: 6,
    title: "Ziyaret Etkinliği",
    category: "ziyaretler",
    imageUrl: "https://images.unsplash.com/photo-1586710249474-c35c187694ba?w=600&h=400&fit=crop",
    date: "2025-02-10",
  },
  {
    id: 7,
    title: "Toplantı Anı",
    category: "toplantilar",
    imageUrl: "https://images.unsplash.com/photo-1560439879-2573b76d09dc?w=600&h=400&fit=crop",
    date: "2025-02-15",
  },
  {
    id: 8,
    title: "Bilgilendirme Toplantısı",
    category: "etkinlikler",
    imageUrl: "https://images.unsplash.com/photo-1475721087761-73cb07b95e6d?w=600&h=400&fit=crop",
    date: "2025-02-20",
  },
  {
    id: 9,
    title: "Şube Faaliyeti",
    category: "sube",
    imageUrl: "https://images.unsplash.com/photo-1551190226-b43df81e8e12?w=600&h=400&fit=crop",
    date: "2025-02-25",
  },
];

export const galleryCategories = [
  { key: "tumu", label: "Tümü" },
  { key: "sube", label: "Şube" },
  { key: "ziyaretler", label: "Ziyaretler" },
  { key: "toplantilar", label: "Toplantılar" },
  { key: "etkinlikler", label: "Etkinlikler" },
] as const;
