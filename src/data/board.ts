/**
 * ============================================================
 * YÖNETİM KURULU VERİSİ
 * ============================================================
 * ⚠️ DEMO İÇERİK — Bu isimler ve bilgiler örnektir.
 *    Gerçek yönetim kurulu bilgileri eklendiğinde bu dosyayı güncelleyin.
 * ============================================================
 */

export interface BoardMember {
  id: number;
  name: string;
  position: string;
  institution?: string;
  bio?: string;
  imageUrl: string;
  isPresident?: boolean;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "[İl Başkanı Ad Soyad]",
    position: "İl Şube Başkanı",
    institution: "[Kurum Adı]",
    bio: "Genç Sağlık Sendikası Karabük İl Şube Başkanı olarak görev yapmaktadır.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b9332857b60?w=400&h=500&fit=crop",
    isPresident: true,
  },
  {
    id: 2,
    name: "[Başkan Yardımcısı Ad Soyad]",
    position: "Şube Başkan Yardımcısı",
    institution: "[Kurum Adı]",
    bio: "Genç Sağlık Sendikası Karabük İl Şube Başkan Yardımcısı olarak görev yapmaktadır.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5656a86b211f?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "[Sekreter Ad Soyad]",
    position: "Şube Sekreteri",
    institution: "[Kurum Adı]",
    bio: "Genç Sağlık Sendikası Karabük İl Şube Sekreteri olarak görev yapmaktadır.",
    imageUrl: "https://images.unsplash.com/photo-1519088932857-0049daba6fe0?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "[Mali İşler Başkanı Ad Soyad]",
    position: "Mali İşler Başkanı",
    institution: "[Kurum Adı]",
    bio: "Genç Sağlık Sendikası Karabük İl Şube Mali İşler Başkanı olarak görev yapmaktadır.",
    imageUrl: "https://images.unsplash.com/photo-1506794708836-f79d096abb9a?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    name: "[Teşkilatlanma Başkanı Ad Soyad]",
    position: "Teşkilatlanma Başkanı",
    institution: "[Kurum Adı]",
    bio: "Genç Sağlık Sendikası Karabük İl Şube Teşkilatlanma Başkanı olarak görev yapmaktadır.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-c0ff09968828?w=400&h=500&fit=crop",
  },
  {
    id: 6,
    name: "[Basın ve İletişim Başkanı Ad Soyad]",
    position: "Basın ve İletişim Başkanı",
    institution: "[Kurum Adı]",
    bio: "Genç Sağlık Sendikası Karabük İl Şube Basın ve İletişim Başkanı olarak görev yapmaktadır.",
    imageUrl: "https://images.unsplash.com/photo-1534528741908-b0e65f834bf8?w=400&h=500&fit=crop",
  },
  {
    id: 7,
    name: "[Mevzuat ve Toplu Sözleşme Başkanı Ad Soyad]",
    position: "Mevzuat ve Toplu Sözleşme Başkanı",
    institution: "[Kurum Adı]",
    bio: "Genç Sağlık Sendikası Karabük İl Şube Mevzuat ve Toplu Sözleşme Başkanı olarak görev yapmaktadır.",
    imageUrl: "https://images.unsplash.com/photo-1500648797746-1913fbaa0947?w=400&h=500&fit=crop",
  },
];

export function getPresident(): BoardMember | undefined {
  return boardMembers.find((m) => m.isPresident);
}
