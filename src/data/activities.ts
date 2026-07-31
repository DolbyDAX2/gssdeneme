/**
 * ============================================================
 * FAALİYETLER / ZİYARETLER VERİSİ
 * ============================================================
 * ⚠️ DEMO İÇERİK — Bu faaliyetler örnek amaçlıdır.
 *    Gerçek faaliyetler eklendiğinde bu dosyayı güncelleyin.
 * ============================================================
 */

export interface Activity {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  isDemo: boolean;
}

export const activities: Activity[] = [
  {
    id: 1,
    slug: "karabuk-egitim-arastirma-hastanesi-ziyareti",
    title: "Karabük Eğitim ve Araştırma Hastanesi Ziyaretimiz",
    category: "Hastane Ziyareti",
    date: "2025-01-15",
    excerpt:
      "Karabük Eğitim ve Araştırma Hastanesinde görev yapan sağlık çalışanlarımızla bir araya geldik, sorunlarını dinledik.",
    content: `
      <p>Karabük Eğitim ve Araştırma Hastanesinde görev yapan sağlık çalışanlarımızı ziyaret ettik. Ziyaret sırasında çalışanlarla birebir görüşmeler gerçekleştirerek yaşanan sorunları yerinde tespit etmeye çalıştık.</p>
      <p>Sağlık çalışanlarımız, özellikle nöbet sistemleri, maaş hakları ve iş koşulları konusunda şikayetlerini dile getirdi. Biz de bu sorunların çözümüne yönelik olarak genel merkezimizle koordineli şekilde çalışma yaptığımızı ifade ettik.</p>
      <p>Ziyaretimiz boyunca sağlık çalışanlarımızdan aldığımız geri bildirimler, sendikamızın çalışma planının önemli bir parçası haline gelecektir.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1519494025892-8b34e4b31e3a?w=800&h=500&fit=crop",
    isDemo: true,
  },
  {
    id: 2,
    slug: "safranbolu-devlet-hastanesi-calişanlarla-bulusma",
    title: "Safranbolu Devlet Hastanesi Çalışanlarıyla Buluşma",
    category: "Buluşma",
    date: "2025-01-22",
    excerpt:
      "Safranbolu Devlet Hastanesinde çalışan sağlık personeliyle bir araya gelerek sorunlarını dinledik.",
    content: `
      <p>Safranbolu Devlet Hastanesinde görev yapan sağlık personelinin çalışma koşullarını yerinde görmek amacıyla ziyaret gerçekleştirdik. Hastane yönetimiyle de görüşme gerçekleştirilerek çalışanların talepleri masaya yatırıldı.</p>
      <p>Sağlık çalışanlarımızın en büyük endişeleri arasında mesai saatleri, ek ödeme düzenlemeleri ve personelin yetersizliği yer alıyor. Bu konularda genel merkezimizle koordineli şekilde çalışma yürütüleceği belirtildi.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1551190226-b43df81e8e12?w=800&h=500&fit=crop",
    isDemo: true,
  },
  {
    id: 3,
    slug: "karabuk-il-saglik-mudurlugu-ziyareti",
    title: "Karabük İl Sağlık Müdürlüğü Ziyaretimiz",
    category: "Kurum Ziyareti",
    date: "2025-02-03",
    excerpt:
      "İl Sağlık Müdürlüğünü ziyaret ederek sağlık çalışanlarımızın sorunlarını masaya koyduk.",
    content: `
      <p>Karabük İl Sağlık Müdürlüğünü ziyaret ederek, bölgedeki sağlık çalışanlarının karşılaştığı sorunları ve taleplerini ilgili yetkililere ilettik.</p>
      <p>Ziyaret sırasında personelin yetersizliği, mesai saatleri ve ek ödeme düzenlemeleri gibi konular masaya yatırıldı. İl Sağlık Müdürlüğü yetkilileriyle de samimi bir ortamda görüşme gerçekleştirildi.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1586710249474-c35c187694ba?w=800&h=500&fit=crop",
    isDemo: true,
  },
  {
    id: 4,
    slug: "112-acil-saglik-hizmetleri-calişanlarla-bulusma",
    title: "112 Acil Sağlık Hizmetleri Çalışanlarımızla Buluşma",
    category: "Buluşma",
    date: "2025-02-10",
    excerpt:
      "112 Acil Sağlık Hizmetleri çalışanlarımızın yoğun çalışma koşullarını yerinde değerlendirdik.",
    content: `
      <p>112 Acil Sağlık Hizmetleri'nde görev yapan arkadaşlarımızı ziyaret ettik. Yoğun tempolu bir iş ortamında çalışan sağlık personelinin sorunlarını dinledik.</p>
      <p>Ambulans ekibi çalışanları, özellikle nöbet sayıları, ekipman eksiklikleri ve maddi hakları konusunda şikayetlerini dile getirdi. Bu konuların takipçisi olacağımızı bildirdik.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1504459143438-b03f18b5507f?w=800&h=500&fit=crop",
    isDemo: true,
  },
  {
    id: 5,
    slug: "aile-saglik-merkezi-ziyaretimiz",
    title: "Aile Sağlığı Merkezi Ziyaretimiz",
    category: "Hastane Ziyareti",
    date: "2025-02-18",
    excerpt:
      "Karabük'teki Aile Sağlık Merkezlerini ziyaret ederek aile sağlığı çalışanlarımızın sorunlarını dinledik.",
    content: `
      <p>Karabük ilindeki Aile Sağlık Merkezlerini tek tek ziyaret ederek, aile sağlığı hemşireleri ve ekip arkadaşlarımızla bir araya geldik.</p>
      <p>Aile sağlık merkezlerinde görev yapan çalışanlar, özellikle mesai saatleri, ek ödeme düzenlemeleri ve iş yükü konusunda şikayetlerini dile getirdi. Bu konuların genel merkezimize iletileceği belirtildi.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1576091168902-c1ec8b9b7745?w=800&h=500&fit=crop",
    isDemo: true,
  },
  {
    id: 6,
    slug: "uyelerimizle-istihare-toplantisi",
    title: "Üyelerimizle İstişare Toplantısı",
    category: "Toplantı",
    date: "2025-02-25",
    excerpt:
      "Karabük'teki üyelerimizle birlikte bir isticare toplantısı gerçekleştirerek, şube olarak yapmamız gerekenleri konuştuk.",
    content: `
      <p>Şubemize üye olan sağlık çalışanlarımızla bir araya gelerek, mevcut durumları ve beklentilerini dinledik. Toplantıda sendikal haklar, toplu sözleşme süreci ve yerel talepler masaya yatırıldı.</p>
      <p>Üyelerimizden gelen öneriler, şubemizdeki çalışma planının şekillendirilmesinde önemli bir rol oynayacaktır.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1552664739-d317ca8b0a91?w=800&h=500&fit=crop",
    isDemo: true,
  },
];

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}
