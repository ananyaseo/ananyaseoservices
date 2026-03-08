import { CheckCircle } from "lucide-react";

const reasons = [
  "14+ Years of Digital Marketing Excellence",
  "Specialized in Nonprofit & SMB Digital Marketing",
  "Transparent Pricing – No Hidden Costs",
  "Future-Ready SEO – AI Overviews & SGE Optimization",
];

const WhyChooseSection = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Affordable Excellence Since 2010
          </h2>
          <p className="text-muted-foreground mb-8">
            As a leading SEO company in India and trusted digital marketing company, Ananya SEO Services delivers exceptional results without the premium agency pricing. We specialize in helping startups, nonprofits, NGOs, and small to medium-sized businesses achieve measurable online growth.
          </p>
          <ul className="space-y-4">
            {reasons.map((reason, i) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground font-medium">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="bg-primary rounded-xl p-8 text-center">
            <span className="text-4xl font-bold text-primary-foreground font-heading">14+</span>
            <p className="text-primary-foreground/80 text-sm mt-2">Years Experience</p>
          </div>
          <div className="bg-secondary rounded-xl p-8 text-center">
            <span className="text-4xl font-bold text-secondary-foreground font-heading">500+</span>
            <p className="text-secondary-foreground/80 text-sm mt-2">Clients Served</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
