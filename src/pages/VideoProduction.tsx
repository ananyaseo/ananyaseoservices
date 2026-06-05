import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, CheckCircle, Video, Film, Building2, Hotel, Sparkles, Globe, Clock, IndianRupee, Layers, Languages } from "lucide-react";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const PEXELS_VIDEO = "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";
const PEXELS_POSTER = "https://images.pexels.com/videos/2022395/free-video-2022395.jpg";

const videoServices = [
  {
    icon: <Sparkles className="text-primary" size={28} />,
    title: "NGO Impact Videos",
    desc: "Show donors the real impact of your programs through authentic storytelling.",
    items: ["Annual reports", "Fundraising campaigns", "Child sponsorship programs", "Women's empowerment projects", "Education initiatives", "Healthcare programs", "Disaster relief projects"],
  },
  {
    icon: <Film className="text-primary" size={28} />,
    title: "Startup Explainer Videos",
    desc: "Explain your product or service clearly in under two minutes.",
    items: ["Investor presentations", "Product launches", "SaaS platforms", "Mobile apps", "Technology companies"],
  },
  {
    icon: <Hotel className="text-primary" size={28} />,
    title: "Hospitality & Tourism Videos",
    desc: "Showcase your hotel, resort, restaurant or travel destination with engaging visuals.",
    items: ["Hotels", "Resorts", "Restaurants", "Homestays", "Tour operators", "Event venues"],
  },
  {
    icon: <Building2 className="text-primary" size={28} />,
    title: "Corporate Videos",
    desc: "Build credibility and strengthen your brand.",
    items: ["Company profiles", "Recruitment campaigns", "Employee onboarding", "Training videos", "Client presentations"],
  },
  {
    icon: <Video className="text-primary" size={28} />,
    title: "Social Media Reels & Short Videos",
    desc: "Create attention-grabbing short-form content for Instagram, Facebook, YouTube Shorts and LinkedIn.",
    items: ["Promotions", "Awareness campaigns", "Product highlights", "Event coverage", "Customer testimonials"],
  },
];

const whyChoose = [
  { icon: <Clock className="text-primary" size={28} />, title: "Faster Turnaround", desc: "Create professional videos in days instead of weeks." },
  { icon: <IndianRupee className="text-primary" size={28} />, title: "Affordable Production", desc: "Reduce production costs without compromising quality." },
  { icon: <Sparkles className="text-primary" size={28} />, title: "Professional Storytelling", desc: "Every video is structured to engage viewers and encourage action." },
  { icon: <Layers className="text-primary" size={28} />, title: "Multi-Platform Delivery", desc: "Optimized for websites, social media, WhatsApp, email and presentations." },
  { icon: <Languages className="text-primary" size={28} />, title: "Multilingual Videos", desc: "Available in English, Hindi, Telugu, Kannada and other Indian languages." },
  { icon: <Globe className="text-primary" size={28} />, title: "AI-Assisted Production", desc: "Combining professional editing with AI tools for speed and scale." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We understand your goals, audience and message." },
  { step: "02", title: "Content Collection", desc: "Share photos, videos, brochures, reports or website content." },
  { step: "03", title: "Script Development", desc: "We create a compelling script and storyboard." },
  { step: "04", title: "Video Production", desc: "Voiceovers, animations, captions and editing are professionally produced." },
  { step: "05", title: "Delivery", desc: "Receive ready-to-publish videos in multiple formats." },
];

const packages = [
  { title: "NGO Impact Package", items: ["2-minute impact video", "60-second fundraising video", "Social media version", "Subtitles included"] },
  { title: "Startup Launch Package", items: ["Product explainer video", "Website hero video", "Investor presentation video"] },
  { title: "Business Growth Package", items: ["Company profile video", "Social media reels", "Promotional video"] },
];

const moreExamples = [
  "NGO Video Production Services",
  "Charity Fundraising Videos",
  "Nonprofit Storytelling Videos",
  "Startup Explainer Video Services",
  "AI Video Production Services India",
  "Hotel Promotional Video Services",
  "Corporate Video Production Bangalore",
  "Social Media Reel Creation Services",
  "Business Explainer Videos India",
];

const VideoProduction = () => {
  const seoSchemas = useSEO({
    title: "Video Production for NGOs, Startups & Businesses | Ananya SEO",
    description: "Professional video production for NGOs, startups, hospitality and growing businesses. Impact videos, explainers, reels and corporate videos using AI-assisted production.",
    url: "/video-production",
    schemaData: {
      name: "Video Production Services",
      description: "Professional video production for NGOs, startups, hospitality and growing businesses using AI-assisted production.",
      serviceType: "Video Production",
      url: "/video-production",
    },
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Social Media Marketing", url: "/social-media-marketing" },
      { name: "Video Production", url: "/video-production" },
    ],
  });

  return (
    <div className="min-h-screen">
      {seoSchemas}
      <TopBar />
      <Header />

      {/* Hero with video background */}
      <section className="relative min-h-[640px] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={PEXELS_POSTER}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={PEXELS_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 container py-24 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-foreground mb-4 font-heading">
            Professional Video Production for<br />NGOs, Startups & Growing Businesses
          </h1>
          <p className="text-xl text-navy-foreground/90 mb-3 max-w-3xl mx-auto">
            Turn Your Photos, Stories and Ideas into Professional Videos
          </p>
          <p className="text-navy-foreground/80 mb-8 max-w-3xl mx-auto">
            Need engaging videos for fundraising, marketing, social media or your website? We help you create high-quality videos quickly and affordably using a combination of professional editing, storytelling and AI-assisted production. No expensive film crew. No complicated process. Just compelling videos that get results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:brightness-110 transition-all"
          >
            Get a Free Video Strategy Consultation <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Video Services */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">Video Services We Offer</h2>
            <p className="text-muted-foreground text-lg">From impact stories to investor pitches — videos tailored to your audience and goals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoServices.map((s) => (
              <div key={s.title} className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2 font-heading">{s.title}</h3>
                <p className="text-muted-foreground mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">Why Clients Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="bg-background rounded-lg p-6 shadow-sm">
                <div className="mb-3">{w.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2 font-heading">{w.title}</h3>
                <p className="text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">Our Process</h2>
            <p className="text-muted-foreground text-lg">A simple five-step path from idea to ready-to-publish video.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-card border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-3 font-heading">{p.step}</div>
                <h3 className="text-lg font-bold text-navy mb-2 font-heading">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">Popular Video Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.title} className="bg-background border rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy mb-5 font-heading">{p.title}</h3>
                <ul className="space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                      <span className="text-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More examples */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center font-heading">More Video Examples</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {moreExamples.map((e) => (
              <span key={e} className="inline-flex items-center gap-2 bg-sky-50 border border-primary/20 text-navy px-4 py-2 rounded-full text-sm">
                <Video size={14} className="text-primary" /> {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default VideoProduction;
