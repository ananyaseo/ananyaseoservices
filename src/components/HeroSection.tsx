import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-[600px] flex items-center justify-center text-center"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-navy/75" />
    <div className="relative z-10 container py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-navy-foreground mb-4 font-heading">
        Leading SEO<br />Company in India
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 font-heading">
        Digital Marketing & PPC Advertising Experts
      </h2>
      <p className="text-lg text-navy-foreground/90 mb-2 max-w-2xl mx-auto">
        Your One-Stop Solution for Digital Marketing Success
      </p>
      <p className="text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
        Affordable Digital Marketing Solutions for Nonprofits, NGOs, Startups & Small Businesses
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:brightness-110 transition-all"
        >
          Get Started Today <ArrowRight size={20} />
        </a>
        <a
          href="#services"
          className="inline-flex items-center justify-center gap-2 border-2 border-navy-foreground/50 text-navy-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-navy-foreground/10 transition-all"
        >
          Our Services
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
