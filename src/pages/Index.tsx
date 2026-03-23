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
    canonicalUrl: "https://www.ananyaseo.com",
    breadcrumbs: [
      { name: "Home", url: "/" },
    ],
    additionalSchema: {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "SEO Explained for Business Owners | How SEO Works Step by Step",
      "description": "Learn how SEO works step-by-step for businesses. This video explains the complete SEO process including SEO audit, keyword research, on-page optimization, technical SEO, content strategy, and link building. Created by Ananya SEO Services, a digital marketing company in Bangalore offering professional SEO, PPC advertising and social media marketing services.",
      "thumbnailUrl": [
        "https://img.youtube.com/vi/MaJ2qa4MSDU/maxresdefault.jpg",
        "https://img.youtube.com/vi/MaJ2qa4MSDU/hqdefault.jpg"
      ],
      "uploadDate": "2026-03-14",
      "embedUrl": "https://www.youtube.com/embed/MaJ2qa4MSDU",
      "contentUrl": "https://youtu.be/MaJ2qa4MSDU",
      "publisher": {
        "@type": "Organization",
        "name": "Ananya SEO Services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ananyaseo.com/wp-content/uploads/2018/03/cropped-Ananya_nospace_528x150-1.jpg"
        }
      },
      "creator": { "@type": "Organization", "name": "Ananya SEO Services" },
      "about": ["Search Engine Optimization", "SEO Process", "SEO for Business Owners", "Digital Marketing", "Google Ranking"],
      "keywords": "SEO explained, how SEO works, SEO process, SEO tutorial, SEO for beginners, SEO services Bangalore, search engine optimization guide",
      "isPartOf": { "@type": "WebSite", "name": "Ananya SEO", "url": "https://www.ananyaseo.com" },
      "provider": {
        "@type": "LocalBusiness",
        "name": "Ananya SEO Services",
        "priceRange": "INR18000 – INR100000",
        "telephone": "+91-9845038936",
        "email": "sanand.rao@gmail.com",
        "url": "https://www.ananyaseo.com/",
        "logo": "https://www.ananyaseo.com/wp-content/uploads/2018/03/cropped-Ananya_nospace_528x150-1.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "49, 2nd Main, Arakere MICO Layout I Stage",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560076",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.linkedin.com/company/ananya-seo-services",
          "https://www.facebook.com/ananya.seo.services"
        ]
      }
    },
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
