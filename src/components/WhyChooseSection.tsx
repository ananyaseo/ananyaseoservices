import { Award, Heart, Eye, Cpu } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "14+ Years of Digital Marketing Excellence",
    description: "Established in 2010, we bring over a decade of proven expertise in SEO, PPC, and digital marketing strategies that deliver measurable results.",
  },
  {
    icon: Heart,
    title: "Specialized in Nonprofit & SMB Digital Marketing",
    description: "We understand the unique challenges faced by nonprofits, NGOs, startups, and small businesses. Our tailored solutions maximize impact within your budget.",
  },
  {
    icon: Eye,
    title: "Transparent Pricing – No Hidden Costs",
    description: "Clear, upfront pricing with no surprises. We believe in building trust through transparency and delivering exceptional value for every rupee spent.",
  },
  {
    icon: Cpu,
    title: "Future-Ready SEO – AI Overviews & SGE Optimization",
    description: "Stay ahead with cutting-edge SEO strategies optimized for Google's AI Overviews, Search Generative Experience, and E-E-A-T principles for 2025 and beyond.",
  },
];

const WhyChooseSection = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-base uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mt-2 mb-4">
          Affordable Excellence Since 2010
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-start max-w-3xl mx-auto">
          <p className="text-foreground/80 text-lg flex-1">
            As a leading SEO company in India and trusted digital marketing company, Ananya SEO Services delivers exceptional results without the premium agency pricing. We specialize in helping startups, nonprofits, NGOs, and small to medium-sized businesses achieve measurable online growth.
          </p>
          <div className="shrink-0 w-64 rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ecq6pSv9Se8"
                title="Ananya SEO Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="bg-background border rounded-xl p-8 group hover:bg-background hover:shadow-xl transition-all duration-300 cursor-default"
          >
            <reason.icon
              className="text-primary mb-4 group-hover:scale-125 transition-transform duration-300"
              size={36}
            />
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">{reason.title}</h3>
            <p className="text-foreground/80 text-base leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default WhyChooseSection;
