import { CheckCircle } from "lucide-react";
import seoImg from "@/assets/seo-services.jpg";
import socialImg from "@/assets/social-media.jpg";
import ppcImg from "@/assets/ppc-advertising.jpg";
import contentImg from "@/assets/content-marketing.jpg";
import webdevImg from "@/assets/web-development.jpg";

const services = [
  {
    id: "seo",
    number: "01",
    title: "SEO Services",
    description: "Future-proof your online visibility with our affordable SEO services designed for 2025 and beyond. We don't just rank websites—we make your brand the definitive answer across Google's AI Overviews, featured snippets, and traditional search results.",
    items: [
      "AI-Powered Search Optimization (SGE & Google AI Overviews)",
      "E-E-A-T Content Development",
      "Featured Snippets & Rich Results Optimization",
      "Visual & Video Search Integration",
      "Local SEO for Bangalore & India-wide businesses",
      "Technical SEO Excellence (Core Web Vitals, Mobile-First)",
    ],
    image: seoImg,
    imageRight: true,
    bgClass: "",
    textClass: "text-foreground",
    descClass: "text-foreground/90",
    itemTextClass: "text-foreground",
    btnClass: "bg-primary text-primary-foreground",
    link: "/search-engine-optimization",
  },
  {
    id: "smm",
    number: "02",
    title: "Social Media Marketing",
    description: "Build authentic connections and grow your brand presence across all major platforms. Our social media marketing experts create engaging content strategies that drive real business results.",
    items: [
      "Facebook & Instagram Marketing",
      "LinkedIn B2B Marketing",
      "Twitter (X.com) Engagement",
      "Pinterest Visual Marketing",
      "YouTube Content Strategy",
    ],
    image: socialImg,
    imageRight: false,
    bgClass: "bg-navy",
    textClass: "text-navy-foreground",
    descClass: "text-navy-foreground/90",
    itemTextClass: "text-navy-foreground",
    btnClass: "bg-primary text-primary-foreground",
    link: "/social-media-marketing",
  },
  {
    id: "ppc",
    number: "03",
    title: "PPC Advertising Services",
    description: "Get instant visibility and qualified leads with expert PPC advertising management. Our certified Google Ads specialists create high-converting campaigns that maximize your ROI.",
    items: [
      "Google Search Ads (High-Intent Keywords)",
      "Google Display Network (Visual Campaigns)",
      "Google Shopping Ads (E-commerce)",
      "Remarketing Campaigns",
      "YouTube Video Advertising",
      "Conversion Rate Optimization",
    ],
    image: ppcImg,
    imageRight: true,
    bgClass: "",
    textClass: "text-foreground",
    descClass: "text-foreground/90",
    itemTextClass: "text-foreground",
    btnClass: "bg-primary text-primary-foreground",
    link: "/ppc-advertising",
  },
  {
    id: "content",
    number: "04",
    title: "Content Marketing",
    description: "Quality content is the foundation of digital success. Our experienced content writers create SEO-optimized, conversion-focused content that resonates with your audience.",
    items: [
      "Optimized for AI search engines",
      "Structured for featured snippets",
      "E-E-A-T principles applied",
      "Conversion-focused copywriting",
    ],
    image: contentImg,
    imageRight: false,
    bgClass: "bg-primary",
    textClass: "text-primary-foreground",
    descClass: "text-primary-foreground/90",
    itemTextClass: "text-primary-foreground",
    btnClass: "bg-secondary text-secondary-foreground",
    link: "/contact",
  },
  {
    id: "webdev",
    number: "05",
    title: "Website Development",
    description: "Get a fast, mobile-friendly, SEO-optimized website that converts visitors into customers. We build websites designed for performance and user experience.",
    items: [
      "Responsive Web Design",
      "WordPress Development",
      "E-commerce Solutions",
      "Landing Page Design",
    ],
    image: webdevImg,
    imageRight: true,
    bgClass: "",
    textClass: "text-foreground",
    descClass: "text-foreground/90",
    itemTextClass: "text-foreground",
    btnClass: "bg-primary text-primary-foreground",
    link: "/website-development",
  },
];
const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container">
      <div className="text-center mb-16">
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
          Explore Our Comprehensive Digital Marketing Services
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
          We offer a full suite of digital marketing services to help your business grow online.
        </p>
      </div>
    </div>

    <div className="space-y-0">
      {services.map((service) => (
        <div key={service.id} id={service.id} className={`${service.bgClass} py-16`}>
          <div className={`container flex flex-col ${service.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
            <div className="flex-1">
              <span className={`font-bold text-lg font-heading ${service.bgClass ? service.textClass : "text-primary"}`}>{service.number}.</span>
              <h3 className={`text-2xl md:text-3xl font-bold font-heading mt-2 mb-4 ${service.textClass}`}>
                {service.title}
              </h3>
              <p className={`${service.descClass} mb-6 text-lg`}>{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className={`mt-0.5 shrink-0 ${service.bgClass ? service.textClass : "text-primary"}`} size={18} />
                    <span className={`${service.itemTextClass} text-base`}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={service.link}
                className={`inline-flex items-center gap-2 ${service.btnClass} px-6 py-3 rounded-md font-semibold hover:brightness-110 transition-all`}
              >
                Read More
              </a>
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
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
