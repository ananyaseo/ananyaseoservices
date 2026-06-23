import { useEffect, useRef, useState } from "react";
import { useSEO } from "@/hooks/use-seo";
import { CheckCircle, Phone, Mail, ArrowRight, Rocket, IndianRupee, Cpu, Search, Smartphone, Edit3, LifeBuoy, Briefcase, Image as ImageIcon, Heart, Home, Database, Users, Code2 } from "lucide-react";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import fastImg from "@/assets/affordable-web-fast.jpg";
import typesImg from "@/assets/affordable-web-types.jpg";

// Smaller SD-sized MP4s stream more reliably across browsers + Vercel CDN
const heroVideos = [
  // Charity / children smiling
  "https://videos.pexels.com/video-files/6646776/6646776-sd_640_360_25fps.mp4",
  // Digital marketing / analytics dashboard
  "https://videos.pexels.com/video-files/3196284/3196284-sd_640_360_25fps.mp4",
  // Real estate / city apartments aerial
  "https://videos.pexels.com/video-files/8961583/8961583-sd_640_360_25fps.mp4",
  // Web / coding on screen
  "https://videos.pexels.com/video-files/3252100/3252100-sd_640_360_25fps.mp4",
];
import ctaBg from "@/assets/smm-cta-bg.jpg";

const features = [
  "Professional Design",
  "Mobile-Friendly Layout",
  "Fast Loading Pages",
  "Contact Forms & Lead Generation",
  "SEO-Friendly Structure",
  "Google Analytics Setup",
  "WhatsApp Integration",
  "Delivered Within 7 Days",
];

const whatWeBuild = [
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Perfect for local businesses, consultants, professionals, agencies, and service providers.",
    items: ["CA & Accounting Firms", "Doctors & Clinics", "Architects & Interior Designers", "Educational Institutions", "NGOs & Charitable Trusts", "Travel Agencies", "Manufacturing Companies", "Construction Firms"],
  },
  {
    icon: ImageIcon,
    title: "Portfolio Websites",
    desc: "Showcase your expertise, projects, achievements, and services.",
    items: ["Consultants", "Freelancers", "Trainers", "Authors", "Speakers", "Photographers"],
  },
  {
    icon: Heart,
    title: "NGO & Charity Websites",
    desc: "Donation pages, project showcases, volunteer forms, impact reports, and fundraising campaigns.",
    items: [],
  },
  {
    icon: Home,
    title: "Real Estate Websites",
    desc: "Property listings, advanced property search, location filters, inquiry forms, and lead management.",
    items: [],
  },
  {
    icon: Search,
    title: "Directory & Search Websites",
    desc: "Interactive search systems for multiple industries.",
    items: ["Real Estate", "Products", "Educational Institutions", "Hospitals", "Service Providers", "NGOs", "Job Listings", "Business Directories"],
  },
  {
    icon: Users,
    title: "Membership Websites",
    desc: "User registration, member dashboards, content access, and document libraries.",
    items: [],
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    desc: "Interactive portals tailored to your business processes and customer requirements.",
    items: [],
  },
];

const whyChoose = [
  { icon: Rocket, title: "Fast Delivery", desc: "Most websites delivered within 7 days." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Professional websites starting at just ₹15,000." },
  { icon: Cpu, title: "AI-Assisted Development", desc: "Modern AI-powered tools reduce development time while maintaining quality and customization." },
  { icon: Search, title: "SEO Ready", desc: "Every website follows search-engine-friendly practices to help your business get found online." },
  { icon: Smartphone, title: "Mobile First", desc: "Over 80% of users browse on mobile. Looks great on phones, tablets, and desktops." },
  { icon: Edit3, title: "Easy Content Updates", desc: "Simple editing options so you can update content without technical knowledge." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "Optional maintenance and support packages available." },
];

const packages = [
  {
    name: "Starter Website",
    price: "₹15,000",
    items: ["Up to 5 Pages", "Mobile Responsive Design", "Contact Form", "WhatsApp Integration", "Basic SEO Setup", "Delivery within 7 Days"],
  },
  {
    name: "Business Website",
    price: "₹30,000+",
    highlight: true,
    items: ["Up to 15 Pages", "Blog Setup", "Lead Capture Forms", "Analytics Integration", "Advanced SEO Structure", "Custom Design"],
  },
  {
    name: "Search & Directory Website",
    price: "₹50,000+",
    items: ["Database Driven", "Advanced Search Filters", "User Forms", "Interactive Listings", "Admin Dashboard"],
  },
  {
    name: "Custom Portal",
    price: "Custom Quote",
    items: ["Pricing based on requirements", "Tailored functionality", "Scalable architecture", "End-to-end consultation"],
  },
];

const included = [
  "Domain Guidance",
  "Hosting Guidance",
  "SSL Security",
  "Mobile Optimization",
  "Contact Forms",
  "WhatsApp Integration",
  "Google Maps Integration",
  "Google Analytics Setup",
  "Basic On-Page SEO",
  "Speed Optimization",
];

const HeroVideo = () => {
  const [index, setIndex] = useState(0);
  const [videosReady, setVideosReady] = useState<boolean[]>(() => heroVideos.map(() => false));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroVideos.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const v = videoRefs.current[index];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    const next = videoRefs.current[(index + 1) % heroVideos.length];
    if (next) next.play().catch(() => {});
  }, [index]);

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[640px] overflow-hidden bg-navy"
      style={{
        backgroundImage: `url(${heroFallback})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Cycling videos */}
      <div className="absolute inset-0">
        {heroVideos.map((src, i) => (
          <video
            key={src}
            ref={(el) => (videoRefs.current[i] = el)}
            src={src}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            onCanPlay={() =>
              setVideosReady((prev) => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              })
            }
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index && videosReady[i] ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Diagonal dark overlay — covers left, fades out diagonally to right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(110deg, hsl(var(--navy) / 0.92) 0%, hsl(var(--navy) / 0.88) 38%, hsl(var(--navy) / 0.55) 55%, hsl(var(--navy) / 0.05) 68%, transparent 78%)",
        }}
      />

      {/* Content — left aligned */}
      <div className="relative z-10 container py-20 lg:py-28 px-4">
        <div className="max-w-2xl text-left">
          <p className="text-primary font-semibold text-lg mb-3">
            Launch Your Professional Website in 7 Days or Less
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground mb-6 font-heading leading-tight">
            Affordable Website Development<br />Starting at ₹15,000
          </h1>
          <p className="text-lg text-navy-foreground/90 mb-8">
            Modern, mobile-friendly websites for businesses, NGOs, startups, real estate, education and healthcare — delivered in as little as 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919845038936"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:brightness-110 transition-all"
            >
              <Phone size={20} /> Call: 9845038936
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy-foreground/60 text-navy-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-navy-foreground/10 transition-all backdrop-blur-sm"
            >
              View Packages <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



const AffordableWebsiteDevelopment = () => {
  const seoSchemas = useSEO({
    title: "Affordable Website Development Starting at ₹15,000 | 7-Day Delivery",
    description: "Professional, mobile-friendly websites for businesses, NGOs, consultants & startups. Launch in 7 days starting at ₹15,000. SEO-ready, WhatsApp integration & analytics included.",
    schemaData: {
      name: "Affordable Website Development",
      description: "Professional websites for businesses, NGOs, consultants and startups starting at ₹15,000 with 7-day delivery.",
      serviceType: "Website Development",
    },
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Affordable Website Development", url: "/affordable-website-development" },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      {seoSchemas}
      <TopBar />
      <Header />

      {/* Hero with cycling video background */}
      <HeroVideo />


      {/* Features strip */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Starting at Just ₹15,000</h2>
            <p className="text-lg text-foreground/80">Everything your business needs to go online — professionally built, fully responsive, and ready to grow.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg border">
                <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-base text-foreground font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">What We Build</h2>
              <p className="text-lg text-foreground/80">From simple business sites to interactive directory portals — we cover every type of website your organization needs.</p>
            </div>
            <div className="flex-1">
              <img src={typesImg} alt="Types of websites we build" width={1024} height={768} className="rounded-lg shadow-lg w-full" loading="lazy" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeBuild.map((b) => (
              <div key={b.title} className="bg-background p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <b.icon className="text-primary mb-4" size={36} />
                <h3 className="text-xl font-bold text-foreground font-heading mb-3">{b.title}</h3>
                <p className="text-base text-foreground/80 mb-3">{b.desc}</p>
                {b.items.length > 0 && (
                  <ul className="space-y-2">
                    {b.items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                        <span className="text-sm text-foreground">{i}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="flex-1 order-2 lg:order-1">
              <img src={fastImg} alt="Fast website delivery in 7 days" width={1024} height={768} className="rounded-lg shadow-lg w-full" loading="lazy" />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Why Choose Us?</h2>
              <p className="text-lg text-foreground/80">A smarter, faster, and more affordable path to launching your website — backed by 25+ years of marketing experience.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="bg-background p-6 rounded-lg shadow-md border hover:shadow-lg hover:-translate-y-1 transition-all">
                <w.icon className="text-primary mb-3" size={32} />
                <h3 className="text-lg font-bold text-foreground font-heading mb-2">{w.title}</h3>
                <p className="text-sm text-foreground/80">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Sample Packages</h2>
            <p className="text-lg text-foreground/80">Transparent pricing with no hidden costs. Choose a package that fits your goals, or get a custom quote.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`bg-background p-8 rounded-lg shadow-md border-2 flex flex-col ${p.highlight ? "border-primary shadow-lg relative" : "border-border"}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                )}
                <h3 className="text-xl font-bold text-foreground font-heading mb-2">{p.name}</h3>
                <p className="text-3xl font-bold text-primary mb-5">{p.price}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-sm text-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+919845038936" className="block text-center bg-primary text-primary-foreground px-4 py-3 rounded-md font-semibold hover:brightness-110 transition-all">
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-8 text-center">What Is Included?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg border">
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span className="text-base text-foreground font-medium">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">About Us</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            With over <strong>25 years of experience</strong> in marketing, digital strategy, and website promotion, we focus on building websites that not only look professional but also help generate <strong>inquiries, leads, donations, and business growth</strong>.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Our experience includes websites for NGOs, professional services firms, educational organizations, and small to medium-sized businesses.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20"
        style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground font-heading mb-4">Get a Free Consultation</h2>
          <p className="text-navy-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Tell us about your business and we'll recommend the most suitable website solution. Get your business online in just 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+919845038936" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:brightness-110 transition-all text-lg">
              <Phone size={18} /> Call / WhatsApp: 9845038936
            </a>
            <a href="mailto:sanand.rao@gmail.com" className="inline-flex items-center gap-2 border-2 border-navy-foreground/50 text-navy-foreground px-8 py-4 rounded-md font-semibold hover:bg-navy-foreground/10 transition-all text-lg">
              <Mail size={18} /> sanand.rao@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffordableWebsiteDevelopment;
