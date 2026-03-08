import { useSEO } from "@/hooks/use-seo";
import { CheckCircle, ArrowRight, Target, BarChart3, Search, Layout, Users, TrendingUp } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ppcHero from "@/assets/ppc-hero.jpg";
import ppcKeywords from "@/assets/ppc-keywords.jpg";
import ppcLanding from "@/assets/ppc-landing.jpg";

const platforms = [
  "Google Ads",
  "Microsoft Ads (Bing)",
  "Facebook & Instagram Ads",
  "LinkedIn Ads",
  "YouTube Ads",
  "Google Performance Max campaigns",
];

const services = [
  {
    icon: Search,
    title: "AI-Powered Keyword Research & Audience Targeting",
    description: "Successful PPC campaigns begin with intelligent keyword and audience research. We use advanced analytics and AI tools to identify high-intent keywords and audience segments likely to convert.",
    items: [
      "High-intent keywords",
      "Buyer-stage search terms",
      "Competitor gaps",
      "Audience segments likely to convert",
    ],
    image: ppcKeywords,
  },
  {
    icon: Layout,
    title: "Landing Page Conversion Optimization",
    description: "Even the best ads fail without high-converting landing pages. Our team works with designers, developers, and content specialists to create conversion-optimized landing pages.",
    items: [
      "Conversion rates improvement",
      "Quality Score optimization",
      "Cost per lead reduction",
      "User experience enhancement",
    ],
    image: ppcLanding,
  },
];

const campaignManagement = [
  "Campaign structure and setup",
  "Smart bidding strategies",
  "AI optimization tools",
  "A/B ad testing",
  "Negative keyword management",
  "Budget optimization",
];

const googleAdsServices = [
  "Google Search Ads",
  "Performance Max campaigns",
  "Display remarketing",
  "YouTube advertising",
  "Local service ads",
];

const socialPlatforms = [
  { name: "Facebook Ads", icon: Users },
  { name: "Instagram Ads", icon: Users },
  { name: "LinkedIn Ads", icon: Users },
  { name: "YouTube Ads", icon: Users },
];

const reportingFeatures = [
  "Real-time campaign dashboards",
  "Conversion tracking",
  "ROAS and CPA reporting",
  "Audience performance analysis",
  "AI-driven optimization insights",
];

const whyChoose = [
  "AI-driven campaign optimization",
  "Experienced PPC specialists",
  "Conversion-focused landing pages",
  "Transparent performance reporting",
  "Scalable campaigns for growing businesses",
];

const PpcAdvertising = () => {
  useSEO({
    title: "PPC Advertising Agency Bangalore | Google Ads Management | Ananya SEO",
    description: "AI-driven PPC management for maximum ROI. Expert Google Ads, Facebook Ads, and LinkedIn Ads campaign management in Bangalore.",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ppcHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 container py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            PPC Advertising Agency in Bangalore
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6 font-heading">
            AI-Driven PPC Management for Maximum ROI
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:brightness-110 transition-all"
          >
            Get Free PPC Consultation <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              At Ananya SEO, we combine AI-powered advertising tools with human strategy to deliver high-performance pay-per-click campaigns. Our goal is simple: <strong>maximize your return on ad spend (ROAS)</strong> while lowering acquisition costs.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Modern PPC is no longer just about bidding on keywords. In 2026, successful campaigns require data intelligence, AI automation, audience targeting, and continuous optimization.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground font-heading mb-4">
              Our PPC experts design campaigns that help businesses:
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {["Generate high-intent leads", "Increase conversion rates", "Reduce cost per acquisition (CPA)", "Scale advertising profitably"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-foreground leading-relaxed">
              Whether you want more enquiries, e-commerce sales, or brand visibility, our PPC strategies are designed to deliver measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Data-Driven Campaigns Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
              Data-Driven PPC Campaigns That Deliver Results
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              As a results-focused PPC agency in Bangalore, Ananya SEO helps businesses grow with precision targeting, AI optimization and real-time analytics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground font-heading mb-6 text-center">
              We manage campaigns across major advertising platforms:
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="bg-background p-4 rounded-lg shadow-sm border flex items-center gap-3"
                >
                  <Target className="text-primary shrink-0" size={20} />
                  <span className="text-foreground font-medium">{platform}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-foreground text-center mt-8">
              Every campaign is continuously optimized using AI insights, audience behavior analysis, and conversion tracking to ensure your advertising budget generates the best possible return.
            </p>
          </div>
        </div>
      </section>

      {/* PPC Services Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-12 text-center">
            Our PPC Services
          </h2>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="text-primary" size={28} />
                    <h3 className="text-2xl font-bold text-foreground font-heading">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Management Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <BarChart3 className="text-primary" size={28} />
              <h2 className="text-3xl font-bold text-foreground font-heading">
                PPC Campaign Management
              </h2>
            </div>
            <p className="text-lg text-foreground text-center mb-8">
              Our experienced PPC specialists manage every aspect of your campaigns including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campaignManagement.map((item) => (
                <div
                  key={item}
                  className="bg-background p-4 rounded-lg shadow-sm border flex items-center gap-3"
                >
                  <CheckCircle className="text-primary shrink-0" size={18} />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-foreground text-center mt-8">
              This ensures your campaigns consistently deliver high-quality traffic and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Google Ads Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  Google Ads & Paid Search Advertising
                </h2>
              </div>
              <p className="text-lg text-foreground mb-6">
                We create high-performance paid search campaigns that place your business in front of customers at the exact moment they are searching for your services.
              </p>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our expertise includes:</h4>
              <ul className="space-y-3 mb-6">
                {googleAdsServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground font-medium">
                The focus is always on capturing high-intent traffic that converts.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  Social Media Advertising
                </h2>
              </div>
              <p className="text-lg text-foreground mb-6">
                Social media platforms provide powerful targeting opportunities to reach the right audience. We manage highly targeted campaigns on:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {socialPlatforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="bg-muted p-4 rounded-lg flex items-center gap-3"
                  >
                    <platform.icon className="text-primary shrink-0" size={20} />
                    <span className="text-foreground font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground">
                Whether your goal is lead generation, brand awareness, or online sales, we design campaigns that align with your marketing objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <TrendingUp className="text-primary" size={28} />
              <h2 className="text-3xl font-bold text-foreground font-heading">
                Transparent Reporting & Measurable Results
              </h2>
            </div>
            <p className="text-lg text-foreground text-center mb-8">
              One of the biggest advantages of PPC advertising is complete transparency and measurable ROI. At Ananya SEO, we provide clear performance insights through:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {reportingFeatures.map((item) => (
                <div
                  key={item}
                  className="bg-background p-4 rounded-lg shadow-sm border flex items-center gap-3"
                >
                  <CheckCircle className="text-primary shrink-0" size={18} />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-foreground text-center">
              This allows you to clearly see how your ad budget translates into leads, sales, and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-8 text-center">
            Why Choose Ananya SEO for PPC Management?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur p-4 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-white/90 text-center max-w-3xl mx-auto">
            Our approach ensures that every rupee you spend on advertising contributes to sustainable business growth.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
            Start Growing with PPC Today
          </h2>
          <p className="text-lg text-foreground mb-4 max-w-2xl mx-auto">
            If you want to generate more leads, increase online sales, and grow your brand visibility, Ananya SEO can help.
          </p>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Our PPC specialists will create a custom advertising strategy tailored to your business goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:brightness-110 transition-all"
          >
            Contact Ananya SEO Today <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default PpcAdvertising;
