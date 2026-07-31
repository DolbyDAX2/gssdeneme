import PageLayout from "@/components/PageLayout";
import { getPresident } from "@/data/board";

export default function IlBaskaniPage() {
  const president = getPresident();

  return (
    <PageLayout
      title="İl Başkanımız"
      breadcrumb={["Kurumsal", "İl Başkanımız"]}
    >
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          {/* Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#3364ae]/20 to-[#a73f41]/10 rounded-xl" />
                  <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#3364ae] to-[#2a5290]"
                    />
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4h4v2H4v4h2v-4h4v-2H6zM6 4V0H4v4h4v2H4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="ri-user-line text-white/20 text-6xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="w-12 h-0.5 bg-[#3364ae] rounded-full mb-4" />
              <h2 className="text-xl font-bold text-[#1e293b] mb-1">
                {president?.name || "[İl Başkanı Ad Soyad]"}
              </h2>
              <p className="text-[#3364ae] font-semibold text-xs uppercase tracking-wider mb-5">
                Genç Sağlık Sendikası Karabük İl Şube Başkanı
              </p>

              {/* Bio */}
              <div className="prose prose-sm text-[#475569] leading-relaxed mb-6">
                <p>{president?.bio || "Şube başkanının özgeçmiş bilgileri yakında eklenecektir."}</p>
                <p>
                  Genç Sağlık Sendikası Karabük İl Şube Başkanlığı görevini
                  yürütmektedir. Görevi boyunca ilimizdeki sağlık çalışanlarının
                  hak ve çıkarları için çalışmalarını sürdürmektedir.
                </p>
              </div>

              {/* Institution */}
              {president?.institution && (
                <div className="inline-flex items-center gap-2 bg-[#f8fafc] rounded-lg px-3 py-2 text-xs text-[#64748b] mb-5">
                  <i className="ri-hospital-line" />
                  {president.institution}
                </div>
              )}

              {/* Social Links */}
              <div className="flex items-center gap-2">
                <a
                  href="https://x.com/gencsagliksend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#3364ae]/10 text-[#3364ae] hover:bg-[#3364ae] hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <i className="ri-twitter-x-fill" />
                </a>
                <a
                  href="https://www.instagram.com/gencsagliksendikasi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#3364ae]/10 text-[#3364ae] hover:bg-[#3364ae] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line" />
                </a>
              </div>
            </div>
          </div>

          {/* President Message */}
          <div className="bg-[#f8fafc] rounded-xl p-5 lg:p-7 border border-[#e2e8f0]">
            <h3 className="text-base font-bold text-[#1e293b] mb-4 flex items-center gap-2">
              <i className="ri-quote-line text-[#3364ae]" />
              Başkanın Mesajı
            </h3>
            <blockquote className="text-[#475569] leading-relaxed italic border-l-2 border-[#3364ae]/30 pl-4 text-sm">
              <p>
                "Karabük'te görev yapan sağlık ve sosyal hizmet çalışanlarının
                haklarını korumak, sorunlarına çözüm üretmek ve güçlü bir
                dayanışma ortamı oluşturmak için çalışmalarımızı
                sürdürüyoruz. Her bir sağlık çalışanımızın sesini duyurmak,
                taleplerini genel merkezimize taşımak ve yerel düzeyde çözüm
                üretmek en büyük önceliğimizdir. Birlik ve beraberlikle daha
                güçlüyüz."
              </p>
            </blockquote>
          </div>

          {/* President Activities */}
          <div className="mt-10">
            <h3 className="text-base font-bold text-[#1e293b] mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#3364ae] rounded-sm" />
              Başkanımızın Faaliyetleri
            </h3>
            <p className="text-[#64748b] text-sm mb-4">
              Başkanımızın katılımıyla gerçekleştirilen faaliyetler
              &quot;Faaliyetler&quot; sayfasında yer almaktadır.
            </p>
            <a
              href="/faaliyetler"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              Faaliyetleri Görüntüle
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
