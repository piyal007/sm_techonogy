import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      {/* Top Announcement Bar */}
      <TopAnnouncementBar />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <TestimonialsSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </>
  );
}
