import PageLayout from "@/components/PageLayout";
import { boardMembers } from "@/data/board";

export default function YonetimKuruluPage() {
  const president = boardMembers.find((m) => m.isPresident);
  const otherMembers = boardMembers.filter((m) => !m.isPresident);

  return (
    <PageLayout
      title="Karabük İl Şube Yönetim Kurulu"
      breadcrumb={["Yönetim Kurulu"]}
    >
      <section className="section-padding bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* President - Featured */}
          {president && (
            <div className="mb-10">
              <div className="text-center mb-6">
                <span className="inline-block bg-[#3364ae]/10 text-[#3364ae] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded mb-2">
                  İl Şube Başkanı
                </span>
              </div>
              <div className="max-w-sm mx-auto card bg-white overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
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
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-[#1e293b]">
                    {president.name}
                  </h3>
                  <p className="text-[#3364ae] font-semibold text-xs mt-1 mb-1.5">
                    {president.position}
                  </p>
                  {president.institution && (
                    <p className="text-[11px] text-[#64748b] flex items-center justify-center gap-1">
                      <i className="ri-hospital-line" />
                      {president.institution}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Other Members */}
          <div>
            <h2 className="text-center text-base font-bold text-[#1e293b] mb-6">
              Yönetim Kurulu Üyeleri
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {otherMembers.map((member) => (
                <div key={member.id} className="card bg-white overflow-hidden group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#3364ae]/80 to-[#2a5290]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="ri-user-line text-white/15 text-5xl" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1e293b] text-sm">{member.name}</h3>
                    <p className="text-[#3364ae] font-semibold text-xs mt-1 mb-1.5">
                      {member.position}
                    </p>
                    {member.institution && (
                      <p className="text-[11px] text-[#64748b] flex items-center gap-1">
                        <i className="ri-hospital-line" />
                        {member.institution}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="text-center mt-10 p-5 bg-white rounded-xl border border-[#e2e8f0]">
            <i className="ri-information-line text-[#3364ae] text-xl mb-2" />
            <p className="text-sm text-[#64748b]">
              Yönetim kurulu bilgileri demo amaçlıdır. Gerçek bilgiler
              eklendiğinde güncellenecektir.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
