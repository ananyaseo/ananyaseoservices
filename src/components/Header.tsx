import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home", href: "/" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Search Engine Optimization",
    href: "#seo",
    children: [
      { label: "SEO Services", href: "/search-engine-optimization" },
      { label: "On-Page SEO", href: "#" },
      { label: "Off-Page SEO", href: "#" },
      { label: "Technical SEO", href: "#" },
      { label: "Local SEO", href: "#" },
      { label: "SEO Pricing", href: "/seo-pricing" },
    ],
  },
  { label: "PPC Advertising", href: "/ppc-advertising" },
  { label: "Social Media Marketing", href: "/social-media-marketing" },
  { label: "Website Development", href: "/website-development" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Ananya SEO Services" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.label} <ChevronDown size={14} />
                </a>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[200px] border">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-background pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-6 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
