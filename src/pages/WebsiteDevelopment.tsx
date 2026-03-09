import { useSEO } from "@/hooks/use-seo";
import { CheckCircle, Phone, Mail, ArrowRight, Heart, Cpu, MapPin, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/webdev-hero.jpg";
import seoStructureImg from "@/assets/webdev-seo-structure.jpg";
import responsiveImg from "@/assets/webdev-responsive.jpg";
import wordpressImg from "@/assets/webdev-wordpress.jpg";
import typesImg from "@/assets/webdev-types.jpg";
import processImg from "@/assets/webdev-process.jpg";
import speedImg from "@/assets/webdev-speed.jpg";
import industriesImg from "@/assets/webdev-industries.jpg";
import ctaBg from "@/assets/smm-cta-bg.jpg";

const industries = [
  {
    icon: Heart,
    title: "Nonprofit & Social Sector",
    items: ["NGOs & Charitable Organizations", "Educational Nonprofits", "Healthcare Nonprofits", "Environmental Organizations"],
  },
  {
    icon: Cpu,
    title: "Technology",
    items: ["SaaS Companies", "IT Services", "Software Development", "Tech Startups", "Digital Marketing & SEO Agencies"],
  },
  {
    icon: MapPin,
    title: "Local Businesses",
    items: ["Restaurants & Hospitality", "Retail Stores", "Home Services", "Real Estate"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: ["Schools & Universities", "E-learning Platforms", "Coaching Institutes", "Educational Technology"],
  },
];

const WebsiteDevelopment = () => {
  useSEO({
    title: "Website Development Services | WordPress Development | Ananya SEO",
    description: "Professional, SEO-ready & high-performance WordPress website development services. Responsive web design, e-commerce solutions, and landing page design.",
    schemaData: {
      name: "Website Development Services",
      description: "Professional, SEO-ready & high-performance WordPress website development services. Responsive web design, e-commerce solutions, and landing page design.",
      serviceType: "Website Development"
    },
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Website Development", url: "/website-development" },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
    <TopBar />
    <Header />

    {/* Hero */}
    <section
      className="relative min-h-[500px] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 container py-20 px-4">
        <p className="text-primary font-semibold text-lg mb-2">Professional, SEO-Ready & High-Performance Websites</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground mb-6 font-heading">
          Website Development Services
        </h1>
        <p className="text-lg text-navy-foreground/90 max-w-3xl mx-auto mb-8">
          We build modern, fast, and SEO-optimized websites that not only look professional but also convert visitors into customers.
        </p>
        <a
          href="#contact-webdev"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:brightness-110 transition-all"
        >
          Get a Free Consultation <ArrowRight size={20} />
        </a>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            At <strong>Ananya SEO</strong>, we build <strong>modern, fast, and SEO-optimized websites</strong> that not only look professional but also convert visitors into customers. Our websites are designed with <strong>search engines, users, and business growth</strong> in mind.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Whether you need a <strong>business website, service website, NGO site, or a lead-generation platform</strong>, our WordPress development services deliver performance, flexibility, and scalability.
          </p>
        </div>
      </div>
    </section>

    {/* Development Approach */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Our Website Development Approach</h2>
            <p className="text-lg text-foreground leading-relaxed">
              We follow a <strong>SEO-first and conversion-focused development process</strong>, ensuring your website supports long-term digital growth.
            </p>
          </div>
          <div className="flex-1">
            <img src={processImg} alt="Website development process" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* SEO-Optimized Structure */}
          <div className="bg-background rounded-lg shadow-md border overflow-hidden">
            <img src={seoStructureImg} alt="SEO optimized website structure" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-foreground font-heading mb-4">SEO-Optimized Structure</h3>
              <ul className="space-y-3">
                {["Clean URL structure", "Schema-ready pages", "Optimized heading hierarchy (H1–H6)", "Fast loading & Core Web Vitals friendly"].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                    <span className="text-base text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile-Responsive Design */}
          <div className="bg-background rounded-lg shadow-md border overflow-hidden">
            <img src={responsiveImg} alt="Mobile responsive web design" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-foreground font-heading mb-4">Mobile-Responsive Design</h3>
              <ul className="space-y-3">
                {["Fully responsive across mobile, tablet, and desktop", "Optimized layouts for touch and readability", "Google mobile-first indexing compliant"].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                    <span className="text-base text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Speed & Performance */}
          <div className="bg-background rounded-lg shadow-md border overflow-hidden">
            <img src={speedImg} alt="Website speed and performance optimization" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-foreground font-heading mb-4">Speed & Performance Focused</h3>
              <ul className="space-y-3">
                {["Lightweight themes and optimized assets", "Image compression and caching readiness", "Minimal plugin dependency"].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                    <span className="text-base text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* WordPress Development Options */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">WordPress Development Options We Offer</h2>

            <div className="space-y-8">
              <div className="bg-muted/20 p-8 rounded-lg border">
                <h3 className="text-2xl font-bold text-foreground font-heading mb-4">Gutenberg (Block Editor) Development</h3>
                <ul className="space-y-3">
                  {["Clean, future-proof WordPress builds", "Faster loading and better SEO control", "Easy content editing without page-builder lock-in", "Ideal for long-term scalability"].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                      <span className="text-base text-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/20 p-8 rounded-lg border">
                <h3 className="text-2xl font-bold text-foreground font-heading mb-4">Elementor Development</h3>
                <ul className="space-y-3">
                  {["Advanced layouts and visual design", "Pixel-perfect landing pages", "Best for marketing-focused websites", "Built without requiring Elementor Pro (optional upgrade)"].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                      <span className="text-base text-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-lg text-foreground leading-relaxed mt-6">
              We recommend <strong>Gutenberg for core pages</strong> and <strong>Elementor for high-conversion landing pages</strong>—a balanced, SEO-friendly approach.
            </p>
          </div>
          <div className="flex-1">
            <img src={wordpressImg} alt="WordPress development with Gutenberg and Elementor" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Types of Websites */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <img src={typesImg} alt="Different types of websites we build" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">Types of Websites We Build</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Corporate & Business Websites",
                "SEO & Digital Marketing Agency Websites",
                "NGO & Non-Profit Websites",
                "Service-Based Business Websites",
                "Local Business Websites",
                "Landing Pages for Ads & Campaigns",
                "Informational & Content-Driven Websites",
              ].map((type) => (
                <div key={type} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-base text-foreground font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Industries We Serve */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
              We Develop Websites for a Wide Range of Industries
            </h2>
            <p className="text-lg text-foreground">
              Our team has experience building high-performance websites across multiple sectors.
            </p>
          </div>
          <div className="flex-1">
            <img src={industriesImg} alt="Industries we serve for website development" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div key={ind.title} className="bg-background p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <ind.icon className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-bold text-foreground font-heading mb-3">{ind.title}</h3>
              <ul className="space-y-2">
                {ind.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section
      id="contact-webdev"
      className="relative py-20"
      style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative z-10 container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground font-heading mb-4">
          Ready to Build a High-Performance Website?
        </h2>
        <p className="text-navy-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
          Whether you're launching a new website or upgrading an existing one, <strong>Ananya SEO</strong> delivers websites that align with <strong>business goals, SEO best practices, and user experience</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:+919845038936"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:brightness-110 transition-all text-lg"
          >
            <Phone size={18} /> Call: 9845038936
          </a>
          <a
            href="mailto:anand@ananyaseo.com"
            className="inline-flex items-center gap-2 border-2 border-navy-foreground/50 text-navy-foreground px-8 py-4 rounded-md font-semibold hover:bg-navy-foreground/10 transition-all text-lg"
          >
            <Mail size={18} /> Email: anand@ananyaseo.com
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default WebsiteDevelopment;
