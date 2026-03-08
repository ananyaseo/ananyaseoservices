import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import SeoPricing from "./pages/SeoPricing";
import SeoServices from "./pages/SeoServices";
import PpcAdvertising from "./pages/PpcAdvertising";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import GooglePenaltyRecovery from "./pages/GooglePenaltyRecovery";

// Blog post pages
import SmallerBusinessesAI from "./pages/blog/SmallerBusinessesAI";
import AiSeo2026 from "./pages/blog/AiSeo2026";
import SeoTrends2025 from "./pages/blog/SeoTrends2025";
import AiToolsFiction from "./pages/blog/AiToolsFiction";
import SeoBangalore from "./pages/blog/SeoBangalore";
import ImpactInvestors from "./pages/blog/ImpactInvestors";
import NonprofitsSeo from "./pages/blog/NonprofitsSeo";
import LocalSeo2021 from "./pages/blog/LocalSeo2021";
import InstagramSales from "./pages/blog/InstagramSales";
import DigitalMarketingNonprofits from "./pages/blog/DigitalMarketingNonprofits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/should-smaller-businesses-implement-ai-immediately" element={<SmallerBusinessesAI />} />
          <Route path="/blog/ai-seo-in-2026" element={<AiSeo2026 />} />
          <Route path="/blog/seo-trends-2025" element={<SeoTrends2025 />} />
          <Route path="/blog/ai-tools-write-publish-fiction" element={<AiToolsFiction />} />
          <Route path="/blog/seo-company-in-bangalore" element={<SeoBangalore />} />
          <Route path="/blog/impact-investors-india" element={<ImpactInvestors />} />
          <Route path="/blog/empowering-nonprofits-seo" element={<NonprofitsSeo />} />
          <Route path="/blog/local-seo-tips-2021" element={<LocalSeo2021 />} />
          <Route path="/blog/increase-sales-instagram" element={<InstagramSales />} />
          <Route path="/blog/digital-marketing-nonprofits" element={<DigitalMarketingNonprofits />} />
          <Route path="/seo-pricing" element={<SeoPricing />} />
          <Route path="/google-penalty-recovery" element={<GooglePenaltyRecovery />} />
          <Route path="/search-engine-optimization" element={<SeoServices />} />
          <Route path="/ppc-advertising" element={<PpcAdvertising />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
