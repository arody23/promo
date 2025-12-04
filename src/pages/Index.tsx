import HeroSection from "@/components/HeroSection";
import VideoTestimonial from "@/components/VideoTestimonial";
import WhyMeSection from "@/components/WhyMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingGrid from "@/components/PricingGrid";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta - would be in Head for Next.js */}
      <title>Offre Spéciale Décembre - Campagnes Pub Pro | Aroman Emetshu</title>
      
      <HeroSection />
      <VideoTestimonial />
      <WhyMeSection />
      <TestimonialsSection />
      <PricingGrid />
      <ExperienceSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
