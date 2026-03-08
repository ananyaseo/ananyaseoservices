import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useSEO({
    title: "SEO & Digital Marketing Agency India | Ananya SEO",
    description: "Grow your business with Ananya SEO. We provide SEO, responsive WordPress web development, and digital marketing solutions across industries.",
  });

  return (
    <div className="min-h-screen">
    <TopBar />
    <Header />
    <HeroSection />
    <StatsBar />
    <ServicesSection />
    <AboutSection />
    <WhyChooseSection />
    <IndustriesSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
  );
};

export default Index;
