import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  title: string;
  breadcrumb?: string[];
  children: React.ReactNode;
}

export default function PageLayout({
  title,
  breadcrumb,
  children,
}: PageLayoutProps) {
  return (
    <>
      <Header />
      {/* Page Header */}
      <div className="bg-[#1e293b] text-white py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="text-xs mb-2">
              <ol className="flex items-center gap-1.5 text-gray-400 flex-wrap">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Ana Sayfa
                  </a>
                </li>
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <i className="ri-arrow-right-s-line" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="text-xl lg:text-2xl font-bold leading-tight">{title}</h1>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 min-h-[60vh]">{children}</div>
      <Footer />
    </>
  );
}
