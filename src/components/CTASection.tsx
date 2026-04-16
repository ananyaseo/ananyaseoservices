import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fullName: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      // Save to DB
      await supabase.from("contact_submissions").insert({
        full_name: form.fullName,
        phone: form.phone,
        email: form.email,
        message: form.message,
      });

      // Send email notification
      await supabase.functions.invoke("send-contact-email", {
        body: form,
      });

      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ fullName: "", phone: "", email: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative z-10 container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: CTA text + contact info */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Transform your online presence with future-ready SEO strategies, result-driven PPC advertising, and comprehensive digital marketing services from Bangalore's trusted agency since 2010.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919845038936"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-md font-semibold hover:brightness-95 transition-all w-fit"
              >
                <Phone size={18} /> Call: 9845038936
              </a>
              <a
                href="mailto:sanand.rao@gmail.com"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-all w-fit"
              >
                <Mail size={18} /> Email: sanand.rao@gmail.com
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <form onSubmit={handleSubmit} className="bg-background rounded-lg p-6 md:p-8 shadow-xl space-y-4">
            <h3 className="text-xl font-bold font-heading text-foreground mb-2">Contact Us</h3>
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
