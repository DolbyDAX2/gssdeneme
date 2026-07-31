import { stats } from "@/data/stats";

export default function StatsCounter() {
  return (
    <section
      className="section-padding bg-gradient-to-r from-[#3364ae] to-[#2a5290] text-white"
      aria-label="İstatistikler"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title text-white text-lg sm:text-xl">
            Sayılarla Karabük Şubesi
          </h2>
          <p className="text-blue-100 text-sm">
            Şubemizin faaliyet alanındaki yerini sayılarla gösteriyoruz
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/15 flex items-center justify-center">
                <i className={`${stat.icon} text-xl`} />
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
