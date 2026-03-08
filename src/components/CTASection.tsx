import { Phone, Mail } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-20 bg-primary">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
        Ready to Elevate Your Business?
      </h2>
      <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
        Transform your online presence with future-ready SEO strategies, result-driven PPC advertising, and comprehensive digital marketing services from Bangalore's trusted agency since 2010.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="tel:+919845038936"
          className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-md font-semibold hover:brightness-95 transition-all"
        >
          <Phone size={18} /> Call: 9845038936
        </a>
        <a
          href="mailto:anand@ananyaseo.com"
          className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-all"
        >
          <Mail size={18} /> Email: anand@ananyaseo.com
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
