import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genç Sağlık Sendikası — Karabük İl Şube Başkanlığı",
  description:
    "Genç Sağlık Sendikası Karabük İl Şube Başkanlığı resmi web sitesi. Karabük şubemizin faaliyetleri, haberleri, duyuruları ve iletişim bilgileri.",
  keywords: [
    "Genç Sağlık Sendikası",
    "Karabük",
    "Sağlık Sendikası",
    "Karabük Sağlık",
    "Sendika",
    "İl Şube",
  ],
  authors: [{ name: "Genç Sağlık Sendikası Karabük İl Şube" }],
  creator: "Genç Sağlık Sendikası",
  publisher: "Genç Sağlık Sendikası",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Genç Sağlık Sendikası Karabük İl Şube Başkanlığı",
    title: "Genç Sağlık Sendikası — Karabük İl Şube Başkanlığı",
    description:
      "Genç Sağlık Sendikası Karabük İl Şube Başkanlığı resmi web sitesi.",
    url: "https://karabuk.gencsagliksendikasi.org.tr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genç Sağlık Sendikası — Karabük İl Şube Başkanlığı",
    description:
      "Genç Sağlık Sendikası Karabük İl Şube Başkanlığı resmi web sitesi.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#3364ae" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        />
      </head>
      <body className="font-sans antialiased bg-[#f8fafc] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
