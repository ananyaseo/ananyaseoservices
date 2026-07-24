import { useState } from "react";
import { Menu, X, ChevronDown, CheckCircle } from "lucide-react";
import logo from "@/assets/ananya-logo-footer.jpg";
import seoPricingImg from "@/assets/seo-pricing-hero.jpg";
import ppcImg from "@/assets/ppc-advertising.jpg";
import smmImg from "@/assets/smm-paid-ads.jpg";

type MegaColumn = {
  heading: string;
  href?: string;
  links?: { label: string; href: string }[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  body?: string;
  priceLabel?: string;
  priceValue?: string;
  priceSuffix?: string;
};

type NavItem = {
  label: string;
  href: string;
  mega?: MegaColumn[];
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Microfinance Consulting", href: "/microfinance-consulting" },
    ],
  },
  {
    label: "Search Engine Optimization",
    href: "/search-engine-optimization",
    mega: [
      {
        heading: "SEO Services",
        links: [
          { label: "SEO Services", href: "/search-engine-optimization" },
          { label: "Google Penalty Recovery", href: "/google-penalty-recovery" },
          { label: "Digital Marketing for Nonprofits", href: "/digital-marketing-nonprofits" },
        ],
      },
      {
        heading: "SEO Pricing",
        href: "/seo-pricing",
        priceLabel: "Starter",
        priceValue: "$450",
        priceSuffix: "/mo",
        body: "10 Keywords",
        image: seoPricingImg,
        imageAlt: "SEO Pricing Packages",
      },
    ],
  },
  {
    label: "PPC Advertising",
    href: "/ppc-advertising",
    mega: [
      {
        heading: "We manage campaigns across major advertising platforms",
        href: "/ppc-advertising",
        bullets: [
          "Google Ads",
          "Microsoft Ads (Bing)",
          "Facebook & Instagram Ads",
          "LinkedIn Ads",
          "YouTube Ads",
          "Google Performance Max campaigns",
        ],
        image: ppcImg,
        imageAlt: "PPC Advertising",
      },
    ],
  },
  {
    label: "Social Media Marketing",
    href: "/social-media-marketing",
    mega: [
      {
        heading: "Social Media Marketing",
        href: "/social-media-marketing",
        body:
          "Data-driven social media ad campaigns with advanced audience targeting and AI campaign optimization.",
        bullets: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
        image: smmImg,
        imageAlt: "Social Media Marketing",
      },
      {
        heading: "More",
        links: [
          { label: "Social Media Marketing", href: "/social-media-marketing" },
          { label: "Video Production", href: "/video-production" },
        ],
      },
    ],
  },
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
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Ananya SEO Services" className="h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const hasMega = !!item.mega;
            const hasChildren = !!item.children;
            if (!hasMega && !hasChildren) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              );
            }

            return (
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

                {openDropdown === item.label && hasChildren && !hasMega && (
                  <div className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[220px] border">
                    {item.children!.map((child) => (
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

                {openDropdown === item.label && hasMega && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-background shadow-2xl rounded-lg border p-6 mt-0 z-50"
                       style={{ width: item.mega!.length > 1 ? "760px" : "520px" }}>
                    <div className={`grid gap-6 ${item.mega!.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {item.mega!.map((col, idx) => (
                        <div key={idx} className="space-y-3">
                          {col.href ? (
                            <a href={col.href} className="block">
                              <h4 className="font-bold text-foreground font-[var(--font-heading)] hover:text-primary transition-colors">
                                {col.heading}
                              </h4>
                            </a>
                          ) : (
                            <h4 className="font-bold text-foreground font-[var(--font-heading)]">
                              {col.heading}
                            </h4>
                          )}

                          {col.image && (
                            <a href={col.href || item.href} className="block overflow-hidden rounded-md">
                              <img
                                src={col.image}
                                alt={col.imageAlt || col.heading}
                                className="w-full h-28 object-cover hover:scale-105 transition-transform"
                              />
                            </a>
                          )}

                          {col.priceValue && (
                            <div className="flex items-baseline gap-1">
                              {col.priceLabel && (
                                <span className="text-sm font-semibold text-foreground mr-1">
                                  {col.priceLabel}
                                </span>
                              )}
                              <span className="text-2xl font-extrabold text-primary">{col.priceValue}</span>
                              {col.priceSuffix && (
                                <span className="text-sm text-muted-foreground">{col.priceSuffix}</span>
                              )}
                            </div>
                          )}

                          {col.body && (
                            <p className="text-sm text-muted-foreground">{col.body}</p>
                          )}

                          {col.bullets && (
                            <ul className="space-y-1.5">
                              {col.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={14} />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {col.links && (
                            <ul className="space-y-1">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <a
                                    href={l.href}
                                    className="block text-sm text-foreground hover:text-primary transition-colors py-1"
                                  >
                                    {l.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

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
          {navItems.map((item) => {
            const mobileChildren =
              item.children ||
              (item.mega
                ? item.mega.flatMap((c) =>
                    c.links && c.links.length
                      ? c.links
                      : c.href
                      ? [{ label: c.heading, href: c.href }]
                      : []
                  )
                : null);
            return mobileChildren && mobileChildren.length ? (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-6 py-3 text-sm font-bold text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {mobileChildren.map((child) => (
                  <a
                    key={child.href + child.label}
                    href={child.href}
                    className="block px-10 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block px-6 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
