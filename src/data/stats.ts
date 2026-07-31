/**
 * ============================================================
 * SAYILARLA KARABÜK ŞUBESİ — İSTATİSTİK VERİSİ
 * ============================================================
 * ⚠️ DEMO İÇERİK — Bu sayılar örnektir.
 *    Gerçek istatistikler eklendiğinde bu dosyayı güncelleyin.
 * ============================================================
 */

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  {
    icon: "ri-group-line",
    value: "XXX+",
    label: "Üye",
  },
  {
    icon: "ri-building-line",
    value: "XX+",
    label: "Kurum Temsilcisi",
  },
  {
    icon: "ri-calendar-check-line",
    value: "XX+",
    label: "Gerçekleştirilen Ziyaret",
  },
  {
    icon: "ri-headphone-line",
    value: "7/24",
    label: "Üye Desteği",
  },
];
