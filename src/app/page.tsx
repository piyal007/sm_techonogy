import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FooterSection from "@/components/sections/FooterSection";
import CollectionSection from "@/components/sections/CollectionSection";
import BlogSection from "@/components/sections/BlogSection";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <>
      {/* Top Announcement Bar */}
      <TopAnnouncementBar />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="shop">
          <CollectionSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="product">
          <ProductsSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
      </main>
      
      {/* Footer */}
      <FooterSection />
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
}
