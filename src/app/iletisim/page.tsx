"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { contactInfo } from "@/data/contact";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Ad Soyad zorunludur.";
    if (!formData.email.trim()) newErrors.email = "E-posta zorunludur.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Geçerli bir e-posta adresi girin.";
    if (!formData.message.trim()) newErrors.message = "Mesaj zorunludur.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  return (
    <PageLayout title="İletişim" breadcrumb={["İletişim"]}>
      <section className="section-padding bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div>
              <div className="w-12 h-0.5 bg-[#3364ae] rounded-full mb-4" />
              <h2 className="text-lg font-bold text-[#1e293b] mb-0.5">
                {contactInfo.organization}
              </h2>
              <p className="text-[#64748b] text-xs mb-6">
                {contactInfo.branch}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-line text-[#3364ae]" />
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
                  <div className="w-10 h-10 rounded-xl bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-[#3364ae]" />
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
                  <div className="w-10 h-10 rounded-xl bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-[#3364ae]" />
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
                  <div className="w-10 h-10 rounded-xl bg-[#3364ae]/10 flex items-center justify-center shrink-0">
                    <i className="ri-time-line text-[#3364ae]" />
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

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-[#e2e8f0]">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karabük İl Şube Konumu"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="card bg-white p-6">
              <h2 className="text-lg font-bold text-[#1e293b] mb-5">
                Bize Yazın
              </h2>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                    <i className="ri-check-line text-2xl text-green-600" />
                  </div>
                  <h3 className="text-base font-bold text-[#1e293b] mb-1.5">
                    Mesajınız Gönderildi
                  </h3>
                  <p className="text-sm text-[#64748b] mb-4">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="btn-primary"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wider"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm ${
                        errors.name ? "border-red-300 bg-red-50/50" : "border-[#e2e8f0]"
                      } focus:ring-2 focus:ring-[#3364ae]/20 focus:border-[#3364ae] outline-none transition-all`}
                      placeholder="Adınız Soyadınız"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wider"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] focus:ring-2 focus:ring-[#3364ae]/20 focus:border-[#3364ae] outline-none transition-all text-sm"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wider"
                    >
                      E-posta *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm ${
                        errors.email ? "border-red-300 bg-red-50/50" : "border-[#e2e8f0]"
                      } focus:ring-2 focus:ring-[#3364ae]/20 focus:border-[#3364ae] outline-none transition-all`}
                      placeholder="ornek@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wider"
                    >
                      Konu
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] focus:ring-2 focus:ring-[#3364ae]/20 focus:border-[#3364ae] outline-none transition-all text-sm"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wider"
                    >
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm ${
                        errors.message ? "border-red-300 bg-red-50/50" : "border-[#e2e8f0]"
                      } focus:ring-2 focus:ring-[#3364ae]/20 focus:border-[#3364ae] outline-none transition-all resize-vertical`}
                      placeholder="Mesajınızı yazın..."
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    <i className="ri-send-plane-line" />
                    Mesaj Gönder
                  </button>

                  <p className="text-[10px] text-[#94a3b8] text-center">
                    * İşareti olan alanlar zorunludur. Bu form demo amaçlıdır;
                    gerçek bir backend&apos;e bağlanmamıştır.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
