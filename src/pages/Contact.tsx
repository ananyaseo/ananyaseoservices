import { useSEO } from "@/hooks/use-seo";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/contact-hero.jpg";

const socialLinks = [
  { icon: <Facebook size={22} />, href: "https://www.facebook.com/ananya.seo.services/", label: "Facebook" },
  { icon: <Instagram size={22} />, href: "https://www.instagram.com/ananyaseoservices/", label: "Instagram" },
  { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/company/ananya-seo-services", label: "LinkedIn" },
  { icon: <Twitter size={22} />, href: "https://twitter.com/ananya_seo", label: "Twitter" },
  { icon: <Youtube size={22} />, href: "http://www.youtube.com/c/AnanyaseoservicesBengaluru", label: "YouTube" },
];

const Contact = () => {
  const seoSchemas = useSEO({
    title: "Contact Ananya SEO Services | Get in Touch",
    description: "Connect with Ananya SEO Services for SEO, PPC, social media marketing, and website development services in Bangalore, India.",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
  });

  return (
    <div className="min-h-screen flex flex-col">
      {seoSchemas}
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Contact Ananya SEO" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-primary-foreground/70 uppercase tracking-widest text-sm mb-3 font-semibold">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground font-heading mb-6">
            Connect with Ananya SEO Services Today
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We're here to help you with all your digital marketing needs. Reach out and let's get started!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl shadow-md p-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Phone</h3>
              <a href="tel:+919845038936" className="text-lg text-foreground hover:text-primary transition-colors font-medium">
                09845038936
              </a>
            </div>
            <div className="bg-background rounded-xl shadow-md p-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Email</h3>
              <a href="mailto:sanand.rao@gmail.com" className="text-lg text-foreground hover:text-primary transition-colors font-medium">
                sanand.rao@gmail.com
              </a>
            </div>
            <div className="bg-background rounded-xl shadow-md p-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Address</h3>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                49, 2nd Main, Arekere MICO Layout I Stage<br />Bangalore 560076
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us + Map */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3 text-center">
            Reach Out for Expert Assistance
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
            Connect with us on social media or visit our office in Bangalore!
          </p>

          {/* Follow Us */}
          <div className="bg-muted rounded-xl p-8 mb-8 text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full bg-background shadow-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Ananya SEO Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.5!2d77.594993!3d12.889679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzIyLjgiTiA3N8KwMzUnNDEuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Partner with Bangalore's trusted digital marketing agency since 2010. Let's build your online success together.
          </p>
          <a
            href="tel:+919845038936"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-md font-semibold hover:brightness-95 transition-all text-lg"
          >
            <Phone size={18} /> Call Now: 9845038936
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
