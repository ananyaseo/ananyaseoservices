import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import heroImg from "@/assets/nonprofits-hero.jpg";
import caseStudyImg from "@/assets/nonprofits-casestudy.jpg";
import { Search, DollarSign, Share2, FileText, Globe, Mail } from "lucide-react";

const strategies = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "A strong online presence begins with discoverability. We ensure your website is search engine friendly, leveraging robust content management systems like WordPress, and implementing an effective SEO strategy. This helps your website rank higher in search results, making it easier for potential donors, volunteers, and beneficiaries to find and engage with your organization.",
    link: "/search-engine-optimization",
  },
  {
    icon: DollarSign,
    title: "PPC (Pay-Per-Click) Advertising",
    description:
      "Amplify your reach instantly with targeted advertising. Non-profits have a unique advantage through programs like Google for Nonprofits, which offers Ad Grants providing access to $10,000 USD of in-kind advertising every month. We help you maximize this invaluable resource.",
    link: "/ppc-advertising",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Connect with your community where they are. Establishing a dynamic presence on platforms like Facebook, LinkedIn, Twitter, and Instagram is crucial for engaging your audience. Our strategy focuses on compelling posts, utilizing photos and videos, sharing impactful case studies, and engaging storytelling.",
    link: "/social-media-marketing",
  },
  {
    icon: FileText,
    title: "Content & Storytelling",
    description:
      "Transform facts into feelings that fuel giving. Regularly posting informative articles, heartwarming beneficiary stories, and impactful event videos helps activate empathy in donors, build strong connections, and promote long-term donor retention.",
    link: "/search-engine-optimization",
  },
  {
    icon: Globe,
    title: "Listing on NGO Donation Sites",
    description:
      "Build trust and credibility. Being listed on reputable non-profit platforms like GiveIndia or GlobalGiving provides assurance to potential donors regarding your organization's legal status, program effectiveness, independent audits, and overall transparency.",
    link: "#",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture relationships and inspire action through direct communication. We help you adopt inbound marketing best practices, build an engaged email database through website subscription forms, and segment your audience effectively.",
    link: "#",
  },
];

const caseStudyResults = [
  { metric: "110%", label: "Increase in Organic Traffic over 3 years" },
  { metric: "7/10", label: "Keywords ranking on 1st page of Google" },
  { metric: "220%", label: "Increase in Google Ad Grants clicks over 2 years" },
  { metric: "₹20L+", label: "Raised through fundraising campaigns (~$24,000 USD)" },
];

const DigitalMarketingNonprofits = () => {
  useSEO({
    title: "Digital Marketing for Nonprofits & NGOs | Ananya SEO",
    description: "Specialized digital marketing services for nonprofits and NGOs. SEO, PPC with Google Ad Grants, social media marketing at up to 75% discount.",
  });

  return (
    <div className="min-h-screen flex flex-col">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="relative h-[350px] md:h-[450px] flex items-center justify-center">
      <img src={heroImg} alt="Digital Marketing for Nonprofits" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
          Digital Marketing for Nonprofits
        </h1>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-6">
          Best Digital Marketing Services for Non-Profits
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          At Ananya SEO, we understand the unique challenges and immense potential that non-profit organizations face in today's digital landscape. Effective digital marketing can significantly amplify your mission, reach more beneficiaries, engage volunteers, and attract vital donations – all often at a nominal cost with an impressive return on investment.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We specialize in crafting tailored digital strategies that resonate with your cause, ensuring your message reaches the right audience at the right time.
        </p>
      </div>
    </section>

    {/* Strategies */}
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
          Our Key Digital Marketing Strategies for Non-Profits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Case Study */}
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
          Case Study: SERUDS NGO
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          We are proud to highlight our impactful partnership with <strong>Sai Educational Rural &amp; Urban Development Society (SERUDS)</strong>, an NGO dedicated to community upliftment. Our comprehensive digital marketing efforts have yielded significant and measurable results for their noble cause:
        </p>

        <div className="mb-12 rounded-xl overflow-hidden">
          <img src={caseStudyImg} alt="SERUDS NGO children group" className="w-full h-auto object-cover" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {caseStudyResults.map((r) => (
            <div key={r.label} className="text-center p-6 bg-primary/5 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-primary font-heading mb-2">{r.metric}</div>
              <p className="text-muted-foreground text-sm">{r.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 max-w-4xl mx-auto text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Organic Traffic Growth:</strong> Over a period of three years, we achieved a remarkable 110% increase in organic traffic to SERUDS' website, demonstrating improved visibility and reach among their target audience.</p>
          <p><strong className="text-foreground">Top Search Rankings:</strong> Our diligent SEO efforts resulted in 7 out of 10 targeted keywords ranking on the 1st page of Google search results, significantly enhancing their discoverability for key initiatives.</p>
          <p><strong className="text-foreground">Google Ad Grants Impact:</strong> We effectively managed their Google Ads Grants campaign, leading to a 220% increase in clicks over two years, ensuring their message reached a wider audience interested in their work.</p>
          <p><strong className="text-foreground">Successful Fundraising Campaigns:</strong> Beyond traffic and visibility, we strategically executed fundraising campaigns, including a unique wedding registry initiative and a "donation in memory of a departed loved one" campaign. These efforts successfully raised over ₹2 million INR (approximately $24,000 USD), directly contributing to their impactful projects.</p>
        </div>
      </div>
    </section>

    {/* Special Offer */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
          Special Offer for Nonprofits
        </h2>
        <p className="text-primary-foreground/90 leading-relaxed mb-4">
          Ananya SEO Services is committed to supporting organizations that make a difference. We offer up to a <strong>75% discount</strong> in India for non-profits that provide free assistance to the poor, disabled, elders, and other needy populations.
        </p>
        <p className="text-primary-foreground/90 leading-relaxed">
          We have a proven track record of working with several NGOs, including Samarthanam Trust for the Disabled, Maya Organic, and Social Activities For Rural Development Society (SARDS). Partner with Ananya SEO to elevate your non-profit's digital presence and achieve your mission-critical goals.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
  );
};

export default DigitalMarketingNonprofits;
