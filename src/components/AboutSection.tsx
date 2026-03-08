import { Target, Lightbulb, Users } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Delivering affordable excellence in digital marketing",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with AI-powered SEO strategies",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your success is our top priority",
  },
];

const AboutSection = () => (
  <section className="py-20 bg-navy text-navy-foreground">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Your Trusted Digital Marketing Partner Since 2010
          </h2>
          <p className="text-navy-foreground/80 mb-6 leading-relaxed text-lg">
            Ananya SEO Services, established in 2010 in Bangalore, is a company committed to helping businesses succeed in the digital world. With a team of experienced professionals, Ananya SEO offers a range of digital marketing services, including search engine optimization, social media marketing, and Adwords PPC ads management.
          </p>
          <p className="text-navy-foreground/80 leading-relaxed text-lg">
            Their mission is to provide affordable, high-quality digital marketing solutions to businesses of all sizes. By leveraging their expertise in SEO and digital marketing, Ananya SEO helps businesses increase their online visibility, attract more customers, and achieve their business goals.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="Ananya SEO Team"
            className="rounded-lg shadow-xl w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Mission / Innovation / Client Focus boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-navy-light rounded-xl p-8 text-center hover:bg-primary transition-colors duration-300 group"
          >
            <v.icon className="mx-auto mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" size={40} />
            <h3 className="text-xl font-bold font-heading text-navy-foreground mb-2">{v.title}</h3>
            <p className="text-navy-foreground/80 text-base">{v.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
