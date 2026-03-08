import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, BarChart3, Search, Target, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/seo-pricing-hero.jpg";
import strategyImg from "@/assets/seo-strategy.jpg";
import reportingImg from "@/assets/seo-reporting.jpg";

const plans = [
  {
    name: "Starter",
    price: "$450",
    keywords: "10 Keywords",
    popular: false,
    features: [
      { text: "Website Audit & Optimization", included: true },
      { text: "Keyword Research – 15 Keywords", included: true },
      { text: "Canonical Error Fixing", included: true },
      { text: "Schema Markup", included: false },
      { text: "Meta Tag Optimization – 10 Pages", included: true },
      { text: "Blog Posts – 2 / Month", included: true },
      { text: "Directory Submissions – 50", included: true },
      { text: "Article Submissions – 5", included: true },
      { text: "Google My Business Optimization", included: false },
    ],
  },
  {
    name: "Growth Plan",
    price: "$600",
    keywords: "20 Keywords",
    popular: true,
    features: [
      { text: "Website Audit & Optimization", included: true },
      { text: "Keyword Research – 20 Keywords", included: true },
      { text: "Canonical Error Fixing", included: true },
      { text: "Schema Markup Implementation", included: true },
      { text: "Speed & Performance Checks", included: true },
      { text: "Meta Tag Optimization – 20 Pages", included: true },
      { text: "Blog Posts – 4 / Month", included: true },
      { text: "Directory Submissions – 100", included: true },
      { text: "Article Submissions – 10", included: true },
      { text: "Google My Business Optimization", included: true },
    ],
  },
  {
    name: "Performance Plan",
    price: "$800",
    keywords: "40 Keywords",
    popular: false,
    features: [
      { text: "Website Audit & Optimization", included: true },
      { text: "Keyword Research – 25 Keywords", included: true },
      { text: "Canonical Error Fixing", included: true },
      { text: "Schema Markup Implementation", included: true },
      { text: "Speed & Performance Checks", included: true },
      { text: "Meta Tag Optimization – 40 Pages", included: true },
      { text: "Blog Posts – 8 / Month", included: true },
      { text: "Directory Submissions – 200", included: true },
      { text: "Article Submissions – 15", included: true },
      { text: "Google My Business Optimization", included: true },
    ],
  },
];

const approach = [
  { icon: BarChart3, title: "Understand Your Business", desc: "We focus on understanding your business, products/services, and target audience" },
  { icon: Search, title: "Competitive Analysis", desc: "Conducting competitive analysis to identify strengths and opportunities" },
  { icon: Target, title: "Keyword Research", desc: "Researching nationally focused keywords to form a strong campaign foundation" },
  { icon: Rocket, title: "Implementation", desc: "Expert content optimization, technical SEO, and white-hat backlink building" },
];

const SeoPricing = () => {
  useSEO({
    title: "SEO Pricing Packages Bangalore | Affordable SEO Plans | Ananya SEO",
    description: "Affordable SEO pricing packages with 90-day performance guarantee. Starter, Growth, and Enterprise SEO plans for businesses of all sizes.",
  });

  return (
    <div className="min-h-screen">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="relative py-24 md:py-32 flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-[hsl(var(--navy))]/80" />
      <div className="relative z-10 container">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-[var(--font-heading)] mb-4">
          SEO Pricing Packages in Bangalore
        </h1>
        <p className="text-lg md:text-xl text-accent font-semibold">
          90-day Performance Guarantee with all of our National SEO services
        </p>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-[var(--font-heading)] mb-6">
            SEO Packages Tailored for First-Page Google Rankings
          </h2>
          <p className="text-muted-foreground mb-4">
            Are you an e-commerce business targeting customers across India, or a nationwide service provider seeking a stronger online presence? Ananya SEO offers specialized National SEO Services designed to boost your organic search visibility, attract more customers, and grow your business.
          </p>
          <p className="text-muted-foreground mb-6">
            We deliver stable and effective SEO and SEM solutions that enhance your brand's visibility while adhering to Google's guidelines. Our strategies ensure that your website remains protected against frequent algorithm updates.
          </p>
          <ul className="space-y-3">
            {["Local SEO: Attract customers in your area.", "National SEO: Expand your reach for enterprise leads.", "eCommerce SEO: Increase product visibility and sales."].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={strategyImg} alt="SEO Strategy" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="py-16 md:py-20 bg-[hsl(var(--section-alt))]">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-[var(--font-heading)] text-center mb-4">
          SEO Pricing Packages
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Choose from our range of flexible pricing options that cater to your specific needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border bg-card shadow-md overflow-hidden flex flex-col ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-bold text-center py-1 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="p-6 text-center border-b">
                <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)]">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.keywords}</p>
                <Button className="mt-4 w-full" size="lg">
                  Get Started
                </Button>
              </div>
              <ul className="p-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle
                      size={16}
                      className={`mt-0.5 shrink-0 ${f.included ? "text-primary" : "text-muted-foreground/40"}`}
                    />
                    <span className={!f.included ? "line-through opacity-50" : ""}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-[var(--font-heading)] text-center mb-12">
          Our Approach to National SEO
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          We create custom national SEO campaigns tailored to your business, focusing on key strategies and proven methodologies.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {approach.map((item) => (
            <div key={item.title} className="text-center p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-foreground mb-2 font-[var(--font-heading)]">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ROI & Reporting */}
    <section className="py-16 md:py-20 bg-[hsl(var(--section-alt))]">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={reportingImg} alt="SEO Reporting" className="rounded-lg shadow-lg w-full" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-[var(--font-heading)] mb-6">
            Guaranteed ROI and Transparent Reporting
          </h2>
          <p className="text-muted-foreground mb-6">
            We prioritize delivering a tangible return on investment. Our strategies are designed to drive measurable results, and we provide clear, transparent reporting. This includes detailed insights into links, published content, and campaign performance, ensuring complete clarity on your SEO investment.
          </p>
          <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mb-3">
            Commitment & Performance Guarantee
          </h3>
          <p className="text-muted-foreground mb-4">
            SEO requires time to deliver meaningful results. All our National SEO Packages require a minimum commitment of 6 months.
          </p>
          <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
            <Shield className="text-primary shrink-0 mt-0.5" size={24} />
            <p className="text-sm text-foreground">
              <strong>90-Day Performance Guarantee:</strong> If your keyword rankings don't improve within 90 days, we'll continue working for free until they do. Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 bg-[hsl(var(--navy))] text-center">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground font-[var(--font-heading)] mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Partner with Ananya SEO to transform your online presence. Contact us today to learn more about our tailored SEO packages and take the first step towards dominating search engine rankings!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+919845038936">Call: 9845038936</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <a href="mailto:sanand.rao@gmail.com">Email: sanand.rao@gmail.com</a>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SeoPricing;
