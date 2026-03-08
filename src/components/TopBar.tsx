import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-sm py-2">
    <div className="container flex justify-between items-center">
      <span className="font-semibold tracking-wide">SEO & DIGITAL MARKETING AGENCY INDIA | ANANYA SEO</span>
      <div className="hidden md:flex items-center gap-6">
        <a href="tel:+919845038936" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone size={14} /> +91 9845038936
        </a>
        <a href="mailto:sanand.rao@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail size={14} /> sanand.rao@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
