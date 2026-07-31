import { getPresident } from "@/data/board";

export default function PresidentMessage() {
  const president = getPresident();

  return (
    <section className="section-padding bg-white" aria-label="İl Başkanından Mesaj">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-xs">
              {/* Gradient background placeholder */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#3364ae]/20 to-[#a73f41]/10 rounded-xl" />
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#3364ae] to-[#2a5290]"
                />
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4h4v2H4v4h2v-4h4v-2H6zM6 4V0H4v4h4v2H4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="ri-user-line text-white/30 text-7xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="w-12 h-0.5 bg-[#3364ae] rounded-full mb-4" />
            <h2 className="section-title mb-1">İl Başkanımızdan</h2>
            <p className="text-[#3364ae] font-semibold text-xs uppercase tracking-wider mb-5">
              Genç Sağlık Sendikası Karabük İl Şube Başkanı
            </p>

            <blockquote className="text-[#475569] leading-relaxed mb-6 italic border-l-2 border-[#3364ae]/30 pl-4 text-sm lg:text-base">
              "Karabük'te görev yapan sağlık ve sosyal hizmet çalışanlarının
              haklarını korumak, sorunlarına çözüm üretmek ve güçlü bir
              dayanışma ortamı oluşturmak için çalışmalarımızı sürdürüyoruz.
              Her bir sağlık çalışanımızın sesini duyurmak, taleplerini genel
              merkezimize taşımak ve yerel düzeyde çözüm üretmek en büyük
              önceliğimizdir."
            </blockquote>

            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-lg font-bold text-[#1e293b]">
                {president?.name || "[İl Başkanı Ad Soyad]"}
              </h3>
            </div>

            <a
              href="/kurumsal/il-baskani"
              className="btn-outline inline-flex items-center gap-2 text-sm"
            >
              Başkanımızı Tanıyın
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
