/**
 * ============================================================
 * DUYURULAR VERİSİ
 * ============================================================
 * ⚠️ DEMO İÇERİK — Bu duyurular örnektir.
 *    Gerçek duyurular eklendiğinde bu dosyayı güncelleyin.
 * ============================================================
 */

export interface Announcement {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Üye Bilgilendirme Toplantısı",
    date: "2025-03-01",
    excerpt:
      "Üyelerimiz için düzenlenecek bilgilendirme toplantısına davetlisiniz. Toplantıda toplu sözleşme süreci ve sendikal haklar hakkında bilgi verilecektir.",
  },
  {
    id: 2,
    title: "Yönetim Kurulu Toplantısı",
    date: "2025-03-05",
    excerpt:
      "İl şube yönetim kurulu toplantısı yapılacaktır. Toplantıda şube faaliyetleri ve gelecek planlaması görüşülecektir.",
  },
  {
    id: 3,
    title: "Hukuki Danışmanlık Bilgilendirmesi",
    date: "2025-03-10",
    excerpt:
      "Üyelerimiz için ücretsiz hukuki danışmanlık hizmeti sunulmaktadır. İşçi hakları, tazminat davaları ve iş sözleşmeleri konusunda bilgi alabilirsiniz.",
  },
];
