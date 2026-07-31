import PageLayout from "@/components/PageLayout";

export default function KurumsalPage() {
  return (
    <PageLayout title="Kurumsal" breadcrumb={["Kurumsal"]}>
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Hakkımızda */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#1e293b] mb-3 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#3364ae] rounded-sm" />
              Hakkımızda
            </h2>
            <div className="text-[#475569] leading-relaxed space-y-3 text-sm">
              <p>
                Genç Sağlık Sendikası, Türkiye genelinde sağlık ve sosyal hizmet
                çalışanlarının hak ve çıkarlarını korumak amacıyla kurulmuş
                bağımsız bir sendikadır. Karabük İl Şube Başkanlığı olarak,
                ilimizde görev yapan sağlık çalışanlarının sorunlarına yerinde
                çözüm üretmek, taleplerini genel merkezimize iletmek ve güçlü
                bir dayanışma ortamı oluşturmak için çalışıyoruz.
              </p>
              <p>
                Sendikamız; memur haklarının korunması, adil ücret politikaları,
                sağlıklı çalışma koşulları ve saygın bir meslek ortamının
                sağlanması hedefleriyle faaliyet göstermektedir. Karabük şubesi
                olarak bu hedeflere ilimiz özelinde katkıda bulunmak için
                çalışıyoruz.
              </p>
            </div>
          </div>

          {/* Misyon */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#1e293b] mb-3 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#3364ae] rounded-sm" />
              Misyonumuz
            </h2>
            <div className="bg-[#f8fafc] rounded-xl p-5 border border-[#e2e8f0]">
              <p className="text-[#475569] leading-relaxed text-sm">
                Karabük ilinde görev yapan sağlık ve sosyal hizmet çalışanlarının
                haklarını korumak, mesleki onurlarını güçlendirmek, çalışma
                koşullarını iyileştirmek ve güçlü bir sendikacı dayanışma
                ortamı oluşturmak.
              </p>
            </div>
          </div>

          {/* Vizyon */}
          <div>
            <h2 className="text-base font-bold text-[#1e293b] mb-3 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#3364ae] rounded-sm" />
              Vizyonumuz
            </h2>
            <div className="bg-[#f8fafc] rounded-xl p-5 border border-[#e2e8f0]">
              <p className="text-[#475569] leading-relaxed text-sm">
                Karabük ilinde sağlık ve sosyal hizmet çalışanlarının ilk tercih
                ettiği, güvenilir, şeffaf ve etkin bir sendika olmak. Her sağlık
                çalışanın haklarını bilmesi ve savunması için öncü bir rol
                oynamak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
