import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Phone, Mail, Search, Settings, FileText, Link2, MapPin, Bot, Target } from "lucide-react";
import heroImg from "@/assets/seo-page-hero.jpg";
import assessmentImg from "@/assets/seo-assessment.jpg";
import targetImg from "@/assets/seo-target.jpg";
import strategyImg from "@/assets/seo-strategy.jpg";

const whySeoMatters = [
  {
    title: "AI-Powered Search (SGE & Overviews)",
    desc: "Google now answers questions directly using AI. We optimize your content so it can be cited inside these AI results.",
  },
  {
    title: "E-E-A-T (Experience, Expertise, Authoritativeness, Trust)",
    desc: "Content quality is the new currency of visibility. We build trust signals into every page.",
  },
  {
    title: "Featured Snippets & Rich Results",
    desc: "From lists and FAQs to videos and tables, we structure content to win zero-click searches.",
  },
  {
    title: "Visual & Video Search",
    desc: "With more image packs and video carousels appearing in SERPs, we integrate visual SEO into your strategy.",
  },
];

const seoServices = [
  {
    icon: Bot,
    number: "01",
    title: "AI & Future-Ready SEO",
    items: [
      "Optimize for Google AI Overviews & SGE",
      "Content structured for featured snippets and People Also Ask",
      "Schema markup for FAQs, reviews, products, services",
      "Short, authoritative answers built into service pages",
    ],
  },
  {
    icon: Settings,
    number: "02",
    title: "Technical SEO Excellence",
    items: [
      "Core Web Vitals & site speed optimization",
      "Mobile-first and crawl budget optimization",
      "Fix broken links, redirects, duplicate content",
      "XML sitemaps, robots.txt, HTTPS, indexing fixes",
    ],
  },
  {
    icon: FileText,
    number: "03",
    title: "Content & Topic Authority",
    items: [
      "Pillar + cluster model → comprehensive guide + supporting posts",
      "Evergreen resources (guides, FAQs, checklists) that stay relevant",
      "Visual and video content optimized for SERPs",
      "Semantic keyword integration for topical authority",
    ],
  },
  {
    icon: Link2,
    number: "04",
    title: "Authority & Digital PR",
    items: [
      "High-quality link building via guest posts & PR coverage",
      "Local citations in trusted business directories",
      "Mentions in industry sites and media for stronger authority",
    ],
  },
  {
    icon: MapPin,
    number: "05",
    title: "Local SEO Domination",
    items: [
      "Google Business Profile optimization",
      "Location-based landing pages (city, state, country)",
      "Reviews management + schema markup for star ratings",
      "Citations on Yelp, Bing Places, Apple Maps, YellowPages",
    ],
  },
];

const seoProcess = [
  {
    step: "1",
    title: "Keyword Research & Topic Clustering",
    desc: "Identify high-intent keywords, research AI Overview triggers, map search intent, and create topical authority clusters.",
  },
  {
    step: "2",
    title: "Technical SEO",
    desc: "Fix crawlability issues, optimize Core Web Vitals, implement security measures, and ensure mobile-first indexing.",
  },
  {
    step: "3",
    title: "On-Page Optimization",
    desc: "Optimize titles, meta descriptions, headings, content structure, image optimization, and semantic keyword integration.",
  },
  {
    step: "4",
    title: "Content Strategy",
    desc: "Create evergreen content, case studies, FAQ sections, how-to guides, and content optimized for featured snippets.",
  },
  {
    step: "5",
    title: "Schema & Structured Data",
    desc: "Implement comprehensive schema markup for organization, services, FAQs, reviews, and local business information.",
  },
  {
    step: "6",
    title: "Local & Reviews",
    desc: "Google Business Profile optimization, citation building, review management, and location-based content creation.",
  },
  {
    step: "7",
    title: "Analytics & Reporting",
    desc: "GA4 setup, Search Console monitoring, ROI tracking, monthly reports on rankings, traffic, and conversion metrics.",
  },
];

const SeoServices = () => (
  <div className="min-h-screen">
    <TopBar />
    <Header />

    {/* Hero */}
    <section
      className="relative min-h-[400px] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 container py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-navy-foreground mb-4 font-heading">
          Affordable Search Engine Optimization (SEO) Services
        </h1>
        <p className="text-xl text-primary font-semibold font-heading">
          Future-Ready SEO That Delivers Visibility, Traffic & Conversions
        </p>
      </div>
    </section>

    {/* Why SEO Matters */}
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-4">
          Why SEO Matters More in 2026
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            {whySeoMatters.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground font-heading">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={strategyImg} alt="SEO Strategy" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Intro Text */}
    <section className="py-16">
      <div className="container max-w-4xl text-center">
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Search has changed. Ranking in Google is no longer just about being on page one — it's about being the <strong className="text-foreground">definitive answer</strong> across AI Overviews, featured snippets, video carousels, and local results. At Ananya SEO, we help businesses <strong className="text-foreground">future-proof their online presence</strong> with strategies built for 2025 and beyond.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our SEO approach blends <strong className="text-foreground">technical excellence, authoritative content, and AI-driven optimization</strong> to ensure your brand shows up wherever your customers are searching — whether in Google's AI results, voice search, or traditional rankings.
        </p>
      </div>
    </section>

    {/* Our SEO Services */}
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-4">
          Our SEO Services
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Comprehensive SEO Strategy for 2026 and beyond. Modern SEO isn't just about keywords anymore. It's about understanding the customer journey, optimizing for AI-powered search results, and building true topical authority.
        </p>

        <div className="space-y-12">
          {seoServices.map((service, i) => (
            <div
              key={service.number}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
            >
              <div className="flex-1">
                <span className="text-primary font-bold text-lg font-heading">{service.number}.</span>
                <h3 className="text-2xl font-bold text-foreground font-heading mt-2 mb-4 flex items-center gap-2">
                  <service.icon className="text-primary" size={24} />
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                {i === 0 && <img src={assessmentImg} alt="SEO Assessment" className="rounded-lg shadow-lg w-full max-w-md mx-auto" loading="lazy" />}
                {i === 1 && <img src={targetImg} alt="SEO Target" className="rounded-lg shadow-lg w-full max-w-md mx-auto" loading="lazy" />}
                {i === 2 && <img src={strategyImg} alt="Content Strategy" className="rounded-lg shadow-lg w-full max-w-md mx-auto" loading="lazy" />}
                {i === 3 && <img src={assessmentImg} alt="Authority Building" className="rounded-lg shadow-lg w-full max-w-md mx-auto" loading="lazy" />}
                {i === 4 && <img src={targetImg} alt="Local SEO" className="rounded-lg shadow-lg w-full max-w-md mx-auto" loading="lazy" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Strategy & AI Optimization */}
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground font-heading mb-4">
              <Target className="inline text-primary mr-2" size={28} />
              Strategy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We start by mapping your customer journey across four critical stages: unaware, awareness, research/consideration, and purchase. This allows us to create targeted content that attracts prospects at every stage and guides them toward conversion through strategic keyword targeting and content optimization.
            </p>

            <h2 className="text-3xl font-bold text-foreground font-heading mb-4">
              <Bot className="inline text-primary mr-2" size={28} />
              AI Search Optimization (SGE)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Search Generative Experience optimization ensures your content gets cited in Google's AI-generated answers. We optimize for AI Overviews, structure content for better AI parsing, and implement schema markup for enhanced visibility in the new search landscape.
            </p>
          </div>
          <div>
            <img src={assessmentImg} alt="SEO Services by Ananya" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* SEO Process */}
    <section className="py-16 bg-navy text-navy-foreground">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Our SEO Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {seoProcess.map((item) => (
            <div key={item.step} className="bg-navy-foreground/10 rounded-lg p-6 border border-navy-foreground/20">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold font-heading mb-4">
                {item.step}
              </div>
              <h3 className="font-bold font-heading text-lg mb-2">{item.title}</h3>
              <p className="text-navy-foreground/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
          Ready to Dominate Online Search?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Let's build a strategy that makes your brand the definitive answer online.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:+919845038936"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-md font-semibold hover:brightness-95 transition-all"
          >
            <Phone size={18} /> Call: 9845038936
          </a>
          <a
            href="mailto:anand@ananyaseo.com"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-all"
          >
            <Mail size={18} /> Email: anand@ananyaseo.com
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SeoServices;
