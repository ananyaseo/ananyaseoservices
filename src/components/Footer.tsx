import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg font-heading mb-4">About</h3>
          <p className="text-navy-foreground/70 text-sm leading-relaxed">
            Ananya SEO Services is committed to providing top-notch digital marketing solutions with a focus on client satisfaction and transparency.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg font-heading mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "SEO Services", "PPC Advertising", "Social Media", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="text-navy-foreground/70 hover:text-primary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg font-heading mb-4">Contact</h3>
          <div className="space-y-3 text-sm text-navy-foreground/70">
            <p className="flex items-center gap-2"><Phone size={14} /> +91-9845038936</p>
            <p className="flex items-center gap-2"><Mail size={14} /> sanand.rao@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/20 mt-8 pt-8 text-center text-sm text-navy-foreground/50">
        © {new Date().getFullYear()} Ananya SEO Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
