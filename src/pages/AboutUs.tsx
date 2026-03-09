import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Search, Share2, MousePointerClick, BarChart3, Users, Target } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutWhyChoose from "@/assets/about-why-choose.jpg";
import aboutFounder from "@/assets/about-founder.jpg";
import aboutPresenting from "@/assets/about-presenting.jpg";
import aboutNonprofits from "@/assets/about-nonprofits.jpg";

const expertise = [
  {
    icon: Search,
    title: "SEO Mastery",
    description: "Our team excels in search engine optimization, employing advanced techniques to enhance your website's visibility and drive organic traffic.",
  },
  {
    icon: Share2,
    title: "Social Media Savvy",
    description: "We create engaging social media strategies that build brand awareness and foster community interaction, helping you connect with your audience effectively.",
  },
  {
    icon: MousePointerClick,
    title: "PPC Excellence",
    description: "Our expertise in PPC advertising ensures your ads achieve maximum ROI through targeted strategies and continuous performance monitoring.",
  },
];

const AboutUs = () => {
  useSEO({
    title: "About Ananya SEO Services | Digital Marketing Agency Bangalore",
    description: "Learn about Ananya SEO Services - a Bangalore-based digital marketing agency founded in 2009 by an IIM Ahmedabad alumnus, offering SEO, PPC, and social media marketing.",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about-us" },
    ],
  });

  return (
    <div className="min-h-screen">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="bg-accent/30 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Our Journey</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">About Us</h1>
          </div>
          <div className="flex-1">
            <img src={aboutHero} alt="Digital marketing and SEO concept" className="rounded-lg shadow-xl w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Leading the Way */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="w-16 h-1 bg-primary mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Leading the Way in Digital Marketing Solutions</h2>
          </div>
          <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ananya is a Digital Marketing Agency committed to improving our customer's sales through developing online marketing strategy and implementing it through Search engine optimization (SEO), Social Media Marketing and Search Advertising (PPC) campaign management. This start-up internet company was founded in 2009 by an IIM Ahmedabad alumnus.
            </p>
            <p>
              In Ananya you will find an experienced team of marketing, and IT technical professionals. We practice ethical SEO techniques, and are transparent in our approach. Our core business:
            </p>
            <ul className="space-y-1 font-semibold text-foreground">
              <li>Search Engine Optimization</li>
              <li>Search Engine Advertising Services (Adwords PPC ads)</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose */}
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <img src={aboutWhyChoose} alt="SEO pricing packages" className="rounded-lg shadow-xl w-full" loading="lazy" />
          </div>
          <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Why Choose Ananya SEO Company?</h2>
            <p>
              We look at your online marketing campaign holistically. We will synergize SEO, paid search advertising (PPC), and social media marketing. Our focus is on improving traffic to your website, and converting them to sales. It encompasses web analytics to study visitor behavior, information architecture of website, creating engaging content, and landing pages that call to action.
            </p>
            <p>
              We are not a big team of SEO/SEM consultants. That works to your advantage. With Ananya, the person you will meet to close the deal will be the same person who is responsible for your SEO and PPC campaigns. We are proud to have been rated as one of the best SEO Companies in India by our customers. Ananya is headed by an IIMA alumnus who has 25 years of solid experience in internet marketing and IT services. Ananya is the choice of small and medium businesses which are looking for professional company for affordable SEO services and Adwords PPC Management. We have been serving companies in USA, UK, Bangalore, Chennai and Hyderabad since 2009.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Holds B. Tech from National Institute of Technology and PGDM from Indian Institute of Management, Ahmedabad. He has over 20 years of marketing experience in the IT industry in India.
            </p>
            <p>
              He has worked in sales and marketing of leading IT Services companies in India like Tata Consultancy Services and Hinduja TMT. He has extensive experience in SEO and internet marketing. He is an expert in SEO, Adwords and Social Media Marketing.
            </p>
            <p className="text-lg font-bold text-foreground">Anand Rao</p>
          </div>
          <div className="flex-1">
            <img src={aboutFounder} alt="SEO company Bangalore - Founder" className="rounded-lg shadow-xl w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Images row */}
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <img src={aboutPresenting} alt="Ananya SEO presenting digital services" className="rounded-lg shadow-lg w-full" loading="lazy" />
          <img src={aboutNonprofits} alt="SEO for Nonprofits" className="rounded-lg shadow-lg w-full" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Expertise */}
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">Our Expertise</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Combining years of experience and specialized knowledge, our team is dedicated to delivering successful digital marketing strategies tailored to your business needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item) => (
            <div key={item.title} className="bg-card border rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
  );
};

export default AboutUs;
