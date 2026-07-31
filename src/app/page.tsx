import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import PresidentMessage from "@/components/PresidentMessage";
import ActivityCards from "@/components/ActivityCards";
import AnnouncementsList from "@/components/AnnouncementsList";
import StatsCounter from "@/components/StatsCounter";
import GalleryGrid from "@/components/GalleryGrid";
import QuickAccess from "@/components/QuickAccess";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSlider />
      <PresidentMessage />
      <ActivityCards />
      <AnnouncementsList />
      <StatsCounter />
      <GalleryGrid />
      <QuickAccess />
      <ContactCTA />
      <Footer />
    </main>
  );
}
