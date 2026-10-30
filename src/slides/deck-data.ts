import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import aboutTeam from "@/assets/about-team.jpg";
import seoImg from "@/assets/seo-services.jpg";
import socialImg from "@/assets/social-media.jpg";
import ppcImg from "@/assets/ppc-advertising.jpg";
import webdevImg from "@/assets/web-development.jpg";

export type DeckLayout =
  | "title"
  | "capabilities"
  | "audience"
  | "stats"
  | "service"
  | "strengths"
  | "cta";

export type DeckIcon =
  | "search"
  | "click"
  | "share"
  | "users"
  | "heart"
  | "eye"
  | "cpu"
  | "code"
  | "award";

export interface DeckCard {
  icon: DeckIcon;
  title: string;
  text: string;
}

export interface DeckSlideData {
  id: string;
  layout: DeckLayout;
  kicker?: string;
  title: string;
  subtitle?: string;
  logo?: string;
  bullets?: string[];
  cards?: DeckCard[];
  stats?: { value: string; label: string }[];
  chips?: string[];
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  link?: { label: string; href: string };
}

/**
 * Single source of truth for the company deck.
 * Both the React renderer (SlideCanvas.tsx) and the PPTX export (pptx-export.ts)
 * read from this file — edit slide copy here only.
 */
export const deckSlides: DeckSlideData[] = [
  {
    id: "title",
    layout: "title",
    kicker: "Established in Bangalore · Since 2010",
    title: "Ananya SEO Services",
    subtitle: "Your One-Stop Solution for Digital Marketing Success",
    logo,
    stats: [
      { value: "500+", label: "Clients Consulted" },
      { value: "14+", label: "Years of Excellence" },
      { value: "95%", label: "Client Retention" },
    ],
    image: heroBg,
    imageAlt: "Digital marketing dashboards",
  },
  {
    id: "capabilities",
    layout: "capabilities",
    kicker: "Core Capabilities",
    title: "What We Do Best",
    cards: [
      {
        icon: "search",
        title: "Search Engine Optimization",
        text: "AI Overviews & SGE optimization, E-E-A-T content, featured snippets, rich results and technical excellence.",
      },
      {
        icon: "click",
        title: "PPC Advertising",
        text: "High-intent Google Search, Display & Shopping campaigns, remarketing and YouTube video ads that maximize ROI.",
      },
      {
        icon: "share",
        title: "Social Media Marketing",
        text: "Facebook & Instagram, LinkedIn B2B, YouTube strategy and engaging content that drives real business results.",
      },
    ],
    chips: ["Website Development", "Content Marketing", "Video Production"],
  },
  {
    id: "audience",
    layout: "audience",
    kicker: "Target Audience",
    title: "Who We Serve",
    subtitle:
      "Tailored digital marketing for organizations that need measurable growth — without premium agency pricing.",
    cards: [
      {
        icon: "heart",
        title: "Nonprofits & NGOs",
        text: "Mission-driven campaigns that maximize impact within limited budgets.",
      },
      {
        icon: "cpu",
        title: "Startups",
        text: "Launch-ready SEO and PPC foundations that turn early visibility into leads.",
      },
      {
        icon: "users",
        title: "Small & Medium Businesses",
        text: "Measurable online growth with affordable, transparent monthly plans.",
      },
    ],
    image: aboutTeam,
    imageAlt: "The Ananya SEO Services team",
    imageSide: "right",
  },
  {
    id: "results",
    layout: "stats",
    kicker: "Proven Track Record",
    title: "Results You Can Measure",
    stats: [
      { value: "500+", label: "Clients Consulted" },
      { value: "14+", label: "Years of Digital Marketing Excellence" },
      { value: "95%", label: "Client Retention Rate" },
    ],
    chips: ["Nonprofit & Social Sector", "Technology & SaaS", "Local Businesses", "Education"],
  },
  {
    id: "seo",
    layout: "service",
    kicker: "Service Deep Dive · 01",
    title: "Search Engine Optimization",
    subtitle:
      "We don't just rank websites — we make your brand the definitive answer across Google's AI Overviews, featured snippets and traditional search.",
    bullets: [
      "AI-Powered Search Optimization (SGE & AI Overviews)",
      "E-E-A-T Content Development",
      "Featured Snippets & Rich Results Optimization",
      "Visual & Video Search Integration",
      "Local SEO for Bangalore & India-wide businesses",
      "Technical SEO Excellence (Core Web Vitals, Mobile-First)",
    ],
    image: seoImg,
    imageAlt: "SEO services",
    imageSide: "right",
    link: { label: "Explore SEO Services", href: "/search-engine-optimization" },
  },
  {
    id: "smm",
    layout: "service",
    kicker: "Service Deep Dive · 02",
    title: "Social Media Marketing",
    subtitle:
      "Build authentic connections and grow your brand presence across all major platforms with strategies that drive real business results.",
    bullets: [
      "Facebook & Instagram Marketing",
      "LinkedIn B2B Marketing",
      "Twitter (X.com) Engagement",
      "Pinterest Visual Marketing",
      "YouTube Content Strategy",
    ],
    image: socialImg,
    imageAlt: "Social media marketing",
    imageSide: "left",
    link: { label: "Explore Social Media Marketing", href: "/social-media-marketing" },
  },
  {
    id: "ppc",
    layout: "service",
    kicker: "Service Deep Dive · 03",
    title: "PPC Advertising Services",
    subtitle:
      "Instant visibility and qualified leads with expert campaign management from certified Google Ads specialists.",
    bullets: [
      "Google Search Ads (High-Intent Keywords)",
      "Google Display Network (Visual Campaigns)",
      "Google Shopping Ads (E-commerce)",
      "Remarketing Campaigns",
      "YouTube Video Advertising",
      "Conversion Rate Optimization",
    ],
    image: ppcImg,
    imageAlt: "PPC advertising",
    imageSide: "right",
    link: { label: "Explore PPC Advertising", href: "/ppc-advertising" },
  },
  {
    id: "webdev",
    layout: "service",
    kicker: "Service Deep Dive · 04",
    title: "Website Development",
    subtitle:
      "Fast, mobile-friendly, SEO-optimized websites designed for performance — and built to convert visitors into customers.",
    bullets: [
      "Responsive Web Design",
      "WordPress Development",
      "E-commerce Solutions",
      "Landing Page Design",
    ],
    image: webdevImg,
    imageAlt: "Website development",
    imageSide: "left",
    link: { label: "Explore Website Development", href: "/website-development" },
  },
  {
    id: "strengths",
    layout: "strengths",
    kicker: "Why Choose Us",
    title: "Key Strengths",
    cards: [
      {
        icon: "award",
        title: "14+ Years of Excellence",
        text: "Established in 2010 — over a decade of proven SEO, PPC and digital marketing expertise.",
      },
      {
        icon: "eye",
        title: "Transparent Pricing",
        text: "Clear, upfront pricing with no hidden costs — trust built through full transparency.",
      },
      {
        icon: "cpu",
        title: "Future-Ready SEO",
        text: "Optimized for Google's AI Overviews, Search Generative Experience and E-E-A-T principles.",
      },
      {
        icon: "heart",
        title: "Nonprofit & SMB Focus",
        text: "Specialized solutions that maximize impact within your budget.",
      },
    ],
  },
  {
    id: "cta",
    layout: "cta",
    kicker: "Get Started Today",
    title: "Elevate Your Business",
    subtitle:
      "Tell us about your goals — we'll get back to you within one business day.",
  },
];

/** Literal hex values (PPTX files cannot read CSS tokens) mirroring src/index.css tokens. */
export const BRAND = {
  navy: "092953",
  navyLight: "1A3B66",
  green: "20A267",
  orange: "F98C1F",
  white: "FFFFFF",
  softText: "B9C7D8",
  lightGreen: "E2F3EB",
};
