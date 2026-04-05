import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerenderPlugin({
      routes: [
        "/",
        "/search-engine-optimization",
        "/ppc-advertising",
        "/social-media-marketing",
        "/website-development",
        "/blog",
        "/blog/seo-bangalore-businesses-2026-guide",
        "/blog/should-smaller-businesses-implement-ai-immediately",
        "/blog/ai-seo-in-2026",
        "/blog/seo-trends-2025",
        "/blog/ai-tools-write-publish-fiction",
        "/blog/seo-company-in-bangalore",
        "/blog/impact-investors-india",
        "/blog/empowering-nonprofits-seo",
        "/blog/local-seo-tips-2021",
        "/blog/increase-sales-instagram",
        "/blog/digital-marketing-nonprofits",
        "/blog/ngo-discount",
        "/blog/facebook-messenger-bots",
        "/blog/guide-bing-webmaster-tools",
        "/blog/micro-influencers",
        "/blog/social-media-marketing-guide-2018",
        "/blog/instagram-marketing-small-business",
        "/blog/facebook-cover-video",
        "/blog/facebook-audience-targeting",
        "/blog/seo-agency-helping-or-harming",
        "/blog/ngo-special-offer",
        "/testimonials",
        "/seo-pricing",
        "/google-penalty-recovery",
        "/about-us",
        "/microfinance-consulting",
        "/digital-marketing-nonprofits",
        "/taj-mahal-chronicles-and-other-stories",
        "/contact",
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
