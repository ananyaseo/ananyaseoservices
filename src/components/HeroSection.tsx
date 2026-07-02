import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-[600px] flex items-center"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center right",
    }}
  >
    {/* Left-side gradient overlay so dashboards on the right stay visible */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--navy) / 0.92) 0%, hsl(var(--navy) / 0.78) 40%, hsl(var(--navy) / 0.35) 65%, hsl(var(--navy) / 0) 90%)",
      }}
    />
    <div className="relative z-10 container py-20 px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground mb-4 font-heading leading-tight">
          Leading SEO Company in India | Digital Marketing &amp; PPC Advertising Experts
        </h1>
        <p className="text-lg text-navy-foreground/90 mb-2">
          Your One-Stop Solution for Digital Marketing Success
        </p>
        <p className="text-navy-foreground/80 mb-8">
          Affordable Digital Marketing Solutions for Nonprofits, NGOs, Startups & Small Businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
    </div>
  </section>
);

export default HeroSection;
