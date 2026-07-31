import { contactInfo } from "@/data/contact";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-[#f8fafc]" aria-label="İletişim">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="card bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info */}
            <div className="p-6 lg:p-10">
              <div className="w-12 h-0.5 bg-[#3364ae] rounded-full mb-4" />
              <h2 className="section-title mb-2">Bize Ulaşın</h2>
              <p className="text-[#64748b] text-sm mb-6">
                Genç Sağlık Sendikası Karabük İl Şube Başkanlığı ile iletişime
                geçmek için aşağıdaki bilgileri kullanabilirsiniz.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-line text-[#3364ae] text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-[#1e293b] mb-0.5 uppercase tracking-wider">
                      Adres
                    </h3>
                    <p className="text-sm text-[#64748b]">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-[#3364ae] text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-[#1e293b] mb-0.5 uppercase tracking-wider">
                      Telefon
                    </h3>
                    <a
                      href="tel:[Telefon]"
                      className="text-sm text-[#64748b] hover:text-[#3364ae] transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-[#3364ae] text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-[#1e293b] mb-0.5 uppercase tracking-wider">
                      E-posta
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-[#64748b] hover:text-[#3364ae] transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-time-line text-[#3364ae] text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-[#1e293b] mb-0.5 uppercase tracking-wider">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-sm text-[#64748b]">
                      {contactInfo.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Link */}
              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=Karabük"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  <i className="ri-map-pin-line" />
                  Yol Tarifi Al
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-[#e2e8f0] min-h-[300px] lg:min-h-full">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karabük İl Şube Konumu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
