import { useSEO } from "@/hooks/use-seo";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import { useState } from "react";
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
  useSEO({
    title: "Contact Ananya SEO Services | Get in Touch",
    description: "Connect with Ananya SEO Services for SEO, PPC, social media marketing, and website development services in Bangalore, India.",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
  });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
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

      {/* Form + Sidebar */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
                Reach Out for Expert Assistance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form, and let's get started on growing your business online!
              </p>
              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
                  <Send className="mx-auto text-primary mb-4" size={40} />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Your Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition-all text-lg"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-secondary rounded-xl p-8 text-secondary-foreground">
                <h3 className="font-heading font-bold text-xl mb-4">Contact Details</h3>
                <div className="space-y-4 text-secondary-foreground/90">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919845038936" className="hover:text-primary transition-colors">09845038936</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:sanand.rao@gmail.com" className="hover:text-primary transition-colors">sanand.rao@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>49, 2nd Main, Arekere MICO Layout I Stage, Bangalore 560076</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-muted rounded-xl p-8">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.176!2d77.6!3d12.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzQ4LjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
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
