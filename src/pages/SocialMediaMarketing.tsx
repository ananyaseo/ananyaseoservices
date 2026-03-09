import { useSEO } from "@/hooks/use-seo";
import { CheckCircle, Phone, Mail, ArrowRight, Users, BarChart3, Megaphone, Calendar, Target, Eye } from "lucide-react";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/smm-hero.jpg";
import ctaBg from "@/assets/smm-cta-bg.jpg";
import servicesImg from "@/assets/smm-services.jpg";
import approachImg from "@/assets/smm-approach.jpg";
import paidAdsImg from "@/assets/smm-paid-ads.jpg";
import instagramImg from "@/assets/smm-instagram.jpg";
import facebookImg from "@/assets/smm-facebook.jpg";
import linkedinImg from "@/assets/smm-linkedin.jpg";
import calendarImg from "@/assets/smm-calendar.jpg";
import whyChooseImg from "@/assets/smm-why-choose.jpg";
import faqImg from "@/assets/smm-faq.jpg";

const services = [
  {
    icon: <Target className="text-primary" size={28} />,
    title: "Social Media Strategy Development",
    desc: "Customized social media strategies aligned with your business goals, target audience, and industry trends.",
  },
  {
    icon: <Megaphone className="text-primary" size={28} />,
    title: "Content Creation & Visual Design",
    desc: "Engaging posts, short-form videos, reels, graphics, and storytelling content designed to capture attention.",
  },
  {
    icon: <BarChart3 className="text-primary" size={28} />,
    title: "AI-Powered Content Optimization",
    desc: "Using AI tools and analytics, we identify content formats and topics that generate the highest engagement.",
  },
  {
    icon: <Eye className="text-primary" size={28} />,
    title: "Paid Social Media Advertising",
    desc: "Targeted advertising campaigns across Facebook, Instagram, and LinkedIn to generate leads and brand awareness.",
  },
  {
    icon: <Users className="text-primary" size={28} />,
    title: "Social Media Account Management",
    desc: "From posting schedules to community interaction, we manage your social media presence professionally.",
  },
  {
    icon: <Calendar className="text-primary" size={28} />,
    title: "Performance Tracking & Analytics",
    desc: "We track campaign performance, audience engagement, and advertising ROI to continuously improve results.",
  },
];

const platforms = [
  {
    name: "Instagram Marketing",
    image: instagramImg,
    items: ["Reels and short-form video marketing", "Daily stories and engagement content", "Influencer collaborations", "Interactive posts such as polls and countdowns"],
  },
  {
    name: "Facebook Marketing",
    image: facebookImg,
    items: ["Page management and content publishing", "Audience targeting and ad campaigns", "Lead generation campaigns", "Community engagement strategies"],
  },
  {
    name: "LinkedIn Marketing",
    image: linkedinImg,
    items: ["Thought leadership content", "Company page growth", "Professional networking campaigns", "LinkedIn lead generation ads"],
  },
];

const faqs = [
  {
    q: "What is social media marketing?",
    a: "Social media marketing involves promoting your brand, products, or services through platforms like Facebook, Instagram, and LinkedIn. It includes content creation, audience engagement, and paid advertising campaigns designed to increase brand visibility and generate leads.",
  },
  {
    q: "Which social media platforms are best for business?",
    a: "The best platform depends on your target audience and industry. Instagram is ideal for visual brands, Facebook is strong for community engagement and advertising, and LinkedIn is best for B2B marketing and professional networking.",
  },
  {
    q: "How long does social media marketing take to show results?",
    a: "Organic social media growth usually takes 3–6 months to build strong engagement. Paid advertising campaigns can generate leads and traffic much faster.",
  },
  {
    q: "Do I need paid advertising for social media success?",
    a: "While organic content builds brand engagement, paid advertising helps reach a wider targeted audience quickly and can significantly increase leads and sales.",
  },
  {
    q: "How do you measure social media marketing success?",
    a: "We measure success through key metrics such as engagement rate, follower growth, website traffic, lead generation, and return on advertising spend (ROAS).",
  },
];

const SocialMediaMarketing = () => {
  useSEO({
    title: "Social Media Marketing Services Bangalore | Ananya SEO",
    description: "AI-driven social media marketing strategies for business growth. Facebook, Instagram, LinkedIn marketing services by Ananya SEO in Bangalore.",
    schemaData: {
      name: "Social Media Marketing Services",
      description: "AI-driven social media marketing strategies for business growth. Facebook, Instagram, LinkedIn marketing services.",
      serviceType: "Social Media Marketing"
    },
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Social Media Marketing", url: "/social-media-marketing" },
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
        <p className="text-primary font-semibold text-lg mb-2">Social Media Marketing Services in Bangalore</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground mb-6 font-heading">
          AI-Driven Social Media Marketing<br />Strategies for Business Growth
        </h1>
        <p className="text-lg text-navy-foreground/90 max-w-3xl mx-auto mb-8">
          We help businesses grow their brand, generate leads, and build loyal communities through AI-powered social media marketing strategies.
        </p>
        <a
          href="#contact-smm"
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
            Social media today is more than posting content. In 2026, successful brands combine creative storytelling, short-form video, targeted advertising, and AI-driven analytics to reach the right audience at the right time.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Our social media experts create strategies that help businesses:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-6">
            {["Build strong brand visibility", "Engage audiences across multiple platforms", "Generate qualified leads and sales", "Improve ROI from paid social campaigns"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-foreground text-base">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-foreground leading-relaxed">
            We design customized strategies for platforms like Facebook, Instagram, and LinkedIn to ensure your brand stands out in an increasingly competitive digital environment.
          </p>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Our Social Media Marketing Services</h2>
            <p className="text-lg text-foreground">
              Comprehensive social media marketing solutions designed to help businesses grow their brand and generate leads online.
            </p>
          </div>
          <div className="flex-1">
            <img src={servicesImg} alt="Social media marketing services dashboard" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-foreground font-heading mb-3">{s.title}</h3>
              <p className="text-base text-foreground/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach - Creative Content */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <img src={approachImg} alt="Social media marketing approach and strategy planning" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Our Social Media Marketing Approach</h2>
            <p className="text-lg text-foreground leading-relaxed">
              We combine creative storytelling with AI-powered analytics to create high-impact campaigns that drive real engagement and business results.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Creative Content */}
          <div className="bg-muted/20 p-8 rounded-lg border">
            <h3 className="text-2xl font-bold text-foreground font-heading mb-4">Creative & AI-Enhanced Content Campaigns</h3>
            <p className="text-base text-foreground leading-relaxed mb-4">
              We create high-impact content including posts, reels, stories, and short-form videos that capture attention and encourage interaction. Our approach combines creative storytelling with AI content insights.
            </p>
            <ul className="space-y-3">
              {["Reels and short-form video content", "Product highlights and service explainers", "Brand storytelling campaigns", "Interactive content formats"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-base text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand & Event */}
          <div className="bg-muted/20 p-8 rounded-lg border">
            <h3 className="text-2xl font-bold text-foreground font-heading mb-4">Brand & Event Promotions</h3>
            <p className="text-base text-foreground leading-relaxed mb-4">
              Social media is a powerful platform for brand launches, product promotions, and event marketing. We create engaging promotional campaigns using:
            </p>
            <ul className="space-y-3">
              {["Teaser campaigns and countdowns", "Influencer collaborations", "Branded contests and giveaways", "Live updates and event coverage"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-base text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Engagement */}
          <div className="bg-muted/20 p-8 rounded-lg border">
            <h3 className="text-2xl font-bold text-foreground font-heading mb-4">Community Engagement & Audience Growth</h3>
            <p className="text-base text-foreground leading-relaxed mb-4">
              Building a loyal community is essential for long-term social media success. We help brands develop meaningful engagement through:
            </p>
            <ul className="space-y-3">
              {["Interactive polls and quizzes", "Q&A sessions", "User-generated content", "Comment and message engagement"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-base text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Remarketing */}
          <div className="bg-muted/20 p-8 rounded-lg border">
            <h3 className="text-2xl font-bold text-foreground font-heading mb-4">Remarketing Campaigns</h3>
            <p className="text-base text-foreground leading-relaxed mb-4">
              Many customers do not convert the first time. We implement social media remarketing campaigns that reconnect with users who have:
            </p>
            <ul className="space-y-3">
              {["Visited your website", "Interacted with your ads", "Engaged with your social media content"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-base text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Paid Advertising */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Paid Social Media Advertising</h2>
            <p className="text-lg text-foreground">
              Paid advertising is one of the fastest ways to reach highly targeted audiences. Our team designs data-driven social media ad campaigns with advanced audience targeting and AI campaign optimization.
            </p>
          </div>
          <div className="flex-1">
            <img src={paidAdsImg} alt="Paid social media advertising campaigns" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {["Facebook Ads", "Instagram Ads", "LinkedIn Ads"].map((platform) => (
            <div key={platform} className="bg-background p-6 rounded-lg shadow-md border text-center">
              <h3 className="text-xl font-bold text-foreground font-heading">{platform}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["Local customers", "Urban professionals", "Decision makers", "Niche audience segments"].map((audience) => (
            <div key={audience} className="flex items-center gap-3">
              <CheckCircle className="text-primary shrink-0" size={18} />
              <span className="text-base text-foreground font-medium">{audience}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-lg text-foreground font-semibold mt-8">
          Our focus is always on maximizing return on ad spend (ROAS).
        </p>
      </div>
    </section>

    {/* Platform Strategies */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Platform-Specific Strategies</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((p) => (
            <div key={p.name} className="bg-background rounded-lg shadow-md border overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground font-heading mb-4">{p.name}</h3>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                      <span className="text-base text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Content Calendar & Reporting */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <img src={calendarImg} alt="Content calendar planning for social media" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-4">Strategic Content Calendar Planning</h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              Consistency is critical in social media marketing. We create a structured monthly content calendar that ensures your brand maintains an active and engaging presence online.
            </p>
            <ul className="space-y-3">
              {["Scheduled posts across platforms", "Mix of educational, promotional, and engaging content", "Polls, contests, and interactive posts", "Storytelling and behind-the-scenes content"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-base text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-background p-8 rounded-lg shadow-md border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-4">Transparent Performance Tracking</h2>
          <p className="text-base text-foreground leading-relaxed mb-4">
            We provide detailed insights into your social media performance through:
          </p>
          <ul className="space-y-3">
            {["Engagement analytics", "Audience insights", "Campaign performance reports", "Paid advertising ROI analysis"].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                <span className="text-base text-foreground">{i}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-foreground leading-relaxed mt-4">
            These insights help continuously refine and improve your social media strategy.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Why Businesses Choose Ananya SEO</h2>
          </div>
          <div className="flex-1">
            <img src={whyChooseImg} alt="Why choose Ananya SEO for social media marketing" className="rounded-lg shadow-lg w-full" loading="lazy" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "AI-Driven Strategies", desc: "We combine human creativity with AI-powered analytics to design campaigns that deliver measurable results." },
            { title: "Industry Experience", desc: "Our team has experience working with businesses across multiple industries, helping them grow their online presence." },
            { title: "Content + Advertising Expertise", desc: "We combine organic social media content with targeted advertising campaigns to maximize reach and conversions." },
            { title: "Data-Driven Optimization", desc: "Every campaign is continuously optimized using performance data and audience insights." },
            { title: "Transparent Reporting", desc: "We provide clear analytics reports so you can track engagement, leads, and return on investment." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <h3 className="text-lg font-bold text-foreground font-heading mb-1">{item.title}</h3>
                <p className="text-base text-foreground/80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <img src={faqImg} alt="Social media marketing frequently asked questions" className="rounded-lg shadow-lg w-full max-w-md" loading="lazy" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Social Media Marketing FAQs</h2>
            <p className="text-lg text-foreground">Find answers to common questions about our social media marketing services.</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold text-foreground font-heading mb-2">{faq.q}</h3>
              <p className="text-base text-foreground/80 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA with background image */}
    <section
      id="contact-smm"
      className="relative py-20"
      style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative z-10 container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground font-heading mb-4">
          Ready to Grow Your Brand on Social Media?
        </h2>
        <p className="text-navy-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
          With the right mix of creativity, AI-driven insights, and targeted advertising, social media can become one of the most powerful growth channels for your business. Partner with Ananya SEO to build a social media strategy that drives real business results.
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

export default SocialMediaMarketing;
