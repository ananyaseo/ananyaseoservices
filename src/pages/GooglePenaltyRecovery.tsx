import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, TrendingDown, Search, Link2, Tag, BarChart3, ClipboardCheck, Trash2, FileText, Wrench, FileCheck, Activity } from "lucide-react";
import heroImg from "@/assets/penalty-hero.jpg";
import auditImg from "@/assets/penalty-audit.jpg";
import recoveryImg from "@/assets/penalty-recovery.jpg";

const signs = [
  { icon: TrendingDown, title: "Sudden Traffic Drop", desc: "Sharp decline in organic search traffic visible in Google Analytics" },
  { icon: Search, title: "Keyword Rankings Plummet", desc: "Previously ranking keywords disappear from search results entirely" },
  { icon: AlertTriangle, title: "Manual Penalty Notice", desc: "Google Search Console shows manual action notifications" },
  { icon: Link2, title: "Toxic Backlinks Detected", desc: "Spammy, low-quality, or artificial links pointing to your website" },
  { icon: Tag, title: "Brand Keywords Missing", desc: "Your website doesn't appear for your own brand name searches" },
  { icon: BarChart3, title: "Search Console Errors", desc: "Indexing issues, crawl errors, or coverage problems increasing" },
];

const process = [
  { icon: ClipboardCheck, title: "Comprehensive SEO Audit", desc: "Deep analysis to identify penalty causes: toxic backlinks, content issues, technical problems, and algorithm update correlations." },
  { icon: Trash2, title: "Backlink Analysis & Cleanup", desc: "Identify and remove toxic links through outreach. Create comprehensive disavow files for untouchable spammy links." },
  { icon: FileText, title: "Content Revamp", desc: "Fix thin, duplicate, or AI-spam content. Improve E-E-A-T signals and create valuable, user-focused content." },
  { icon: Wrench, title: "Technical Fixes", desc: "Resolve indexing issues, crawl errors, Core Web Vitals problems, and other technical SEO barriers." },
  { icon: FileCheck, title: "Reconsideration Requests", desc: "Submit detailed reconsideration requests for manual penalties with complete documentation of fixes made." },
  { icon: Activity, title: "Monitoring & Recovery", desc: "Continuous tracking of rankings, traffic restoration, and ongoing optimization to prevent future penalties." },
];

const GooglePenaltyRecovery = () => {
  useSEO({
    title: "Google Penalty Recovery Services Bangalore | Ananya SEO",
    description: "Expert Google penalty recovery services. Fix rankings & restore traffic from algorithmic updates and manual penalties with proven white-hat strategies.",
  });

  return (
    <div className="min-h-screen">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Google Penalty Recovery" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
          Google Penalty Recovery Services in Bangalore
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/80 mt-4 font-heading">
          Fix Rankings &amp; Restore Traffic
        </p>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
          Recover from algorithmic updates, manual penalties, and link spam with expert SEO recovery services. Get your website traffic back on track with proven white-hat strategies.
        </p>
        <a href="/contact" className="inline-block mt-8 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Start Recovery Now
        </a>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Is Your Website Suffering from a Google Penalty?
            </h2>
            <p className="text-muted-foreground mb-4">
              Algorithmic updates like Penguin, Panda, and the latest Helpful Content Updates can devastate your rankings overnight. Spammy backlinks, thin content, and technical issues trigger these penalties, causing massive traffic losses.
            </p>
            <p className="text-muted-foreground">
              Don't let penalties destroy your business. Our expert team in Bangalore specializes in fast, effective penalty recovery that restores your search visibility and brings back your customers.
            </p>
          </div>
          <img src={auditImg} alt="SEO Audit and Analysis" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="bg-destructive/10 py-10">
      <div className="container text-center">
        <p className="text-lg md:text-xl font-heading font-semibold text-foreground max-w-3xl mx-auto">
          Every day your site remains penalized costs you customers and revenue. Get immediate expert analysis and start your recovery journey today.
        </p>
        <a href="/contact" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Get Free Analysis
        </a>
      </div>
    </section>

    {/* What is a Google Penalty */}
    <section className="py-16 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-4">
          What is a Google Penalty?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ananya SEO company follows ethical SEO as per Google guidelines.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Algorithmic Penalties</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Penguin (Link Spam):</strong> Now part of Google's core algorithm, continuously monitoring and penalizing sites with spammy, artificial, or manipulative backlinks.</li>
              <li><strong className="text-foreground">Panda (Content Quality):</strong> Targets thin, duplicate, or low-quality content that doesn't provide value to users.</li>
              <li><strong className="text-foreground">Helpful Content Updates:</strong> Penalizes AI-generated spam and content not written primarily for humans.</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Manual Penalties</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Link Schemes:</strong> Google's team manually reviews and penalizes sites participating in link buying, selling, or artificial link networks.</li>
              <li><strong className="text-foreground">Unnatural Backlinks:</strong> Manual action for patterns of artificial, manipulative, or deceptive links pointing to your site.</li>
              <li><strong className="text-foreground">Content Violations:</strong> Penalties for thin content, keyword stuffing, or other content-related violations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Signs */}
    <section className="py-16 bg-background">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
          Signs Your Website May Be Penalized
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signs.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-sm text-center">
              <s.icon className="mx-auto mb-4 text-primary" size={36} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recovery Process */}
    <section className="py-16 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
          Our Google Penalty Recovery Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, i) => (
            <div key={step.title} className="relative bg-card rounded-xl p-6 border border-border shadow-sm">
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <step.icon className="mb-4 text-primary" size={32} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recovery Image + CTA */}
    <section className="py-16 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={recoveryImg} alt="Website Traffic Recovery" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Recover Your Website Traffic?
            </h2>
            <p className="text-muted-foreground mb-6">
              Don't let Google penalties destroy your business. Get expert penalty recovery services and restore your search rankings today.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default GooglePenaltyRecovery;
