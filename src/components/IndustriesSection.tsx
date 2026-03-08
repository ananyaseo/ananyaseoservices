import { Heart, Cpu, MapPin, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Nonprofit & Social Sector",
    items: ["NGOs & Charitable Organizations", "Educational Nonprofits", "Healthcare Nonprofits", "Environmental Organizations"],
  },
  {
    icon: Cpu,
    title: "Technology",
    items: ["SaaS Companies", "IT Services", "Software Development", "Tech Startups"],
  },
  {
    icon: MapPin,
    title: "Local Businesses",
    items: ["Restaurants & Hospitality", "Retail Stores", "Home Services", "Real Estate"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: ["Schools & Universities", "E-learning Platforms", "Coaching Institutes", "Educational Technology"],
  },
];

const IndustriesSection = () => (
  <section className="py-20 bg-light-green">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
          Industries We Serve
        </h2>
        <p className="text-foreground/80 max-w-xl mx-auto text-lg">
          We offer tailored digital marketing solutions for businesses across multiple industries.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind) => (
          <div
            key={ind.title}
            className="bg-background border rounded-xl p-6 text-center group hover:scale-105 transition-transform shadow-sm"
          >
            <ind.icon className="mx-auto mb-4 text-primary" size={36} />
            <h3 className="text-lg font-bold text-foreground font-heading mb-3">{ind.title}</h3>
            <ul className="space-y-1">
              {ind.items.map((item) => (
                <li key={item} className="text-foreground/70 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
