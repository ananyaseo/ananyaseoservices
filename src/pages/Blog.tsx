import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, Link } from "react-router-dom";

import aiSmallBiz from "@/assets/blog/ai-smaller-businesses.jpg";
import aiSeo2026 from "@/assets/blog/ai-seo-2026.png";
import seoTrends from "@/assets/blog/seo-trends-2025.jpg";
import seoTips from "@/assets/blog/seo-tips-2021.png";
import instagramSales from "@/assets/blog/instagram-sales.png";
import seoNonprofits from "@/assets/blog/seo-nonprofits.png";
import aiToolsFiction from "@/assets/blog/ai-tools-fiction.jpg";
import seoBangalore from "@/assets/blog/seo-bangalore.jpg";
import impactInvestors from "@/assets/blog/impact-investors.jpg";
import nonprofitsSeo from "@/assets/blog/nonprofits-seo.jpg";
import ngoDiscount from "@/assets/blog/ngo-discount.jpg";
import messengerBots from "@/assets/blog/messenger-bots.jpg";
import bingWebmaster from "@/assets/blog/bing-webmaster.jpg";
import microInfluencers from "@/assets/blog/micro-influencers.jpg";
import smmGuide2018 from "@/assets/blog/smm-guide-2018.jpg";
import instagramMarketing from "@/assets/blog/instagram-marketing.jpg";
import fbCoverVideo from "@/assets/blog/fb-cover-video.jpg";
import fbAudienceTargeting from "@/assets/blog/fb-audience-targeting.jpg";
import seoAgencyHarm from "@/assets/blog/seo-agency-harm.jpg";
import ngoSpecialOffer from "@/assets/blog/ngo-special-offer.jpg";

const allBlogPosts = [
  // Page 1
  {
    title: "Should Smaller Businesses Implement AI Immediately?",
    date: "February 27, 2026",
    excerpt: "Using AI Chatbots for Customer Service Let's assume a company has: Is a chatbot viable? The Honest Answer: Yes — […]",
    image: aiSmallBiz,
    link: "/blog/should-smaller-businesses-implement-ai-immediately",
  },
  {
    title: "AI SEO in 2026: What Every Business Owner Must Know to Stay Visible",
    date: "February 25, 2026",
    excerpt: "Questions to Ask Your Agency AI SEO in 2026: What Every Business Owner Must Know to Stay Visible. The landscape is changing fast.",
    image: aiSeo2026,
    link: "/blog/ai-seo-in-2026",
  },
  {
    title: "SEO Trends and Best Practices for ranking on Google in 2025",
    date: "May 28, 2025",
    excerpt: "Comprehensive overview of SEO Trends and Best Practices for ranking on Google in 2025.",
    image: seoTrends,
    link: "/blog/seo-trends-2025",
  },
  {
    title: "Unlock Your Creative Potential: Using AI Tools to Write and Publish Fiction",
    date: "2024",
    excerpt: "Using ChatGPT and Kindle Publishing. Unlock Your Creative Potential: Using AI Tools to Write and Publish Fiction.",
    image: aiToolsFiction,
    link: "/blog/ai-tools-write-publish-fiction",
  },
  {
    title: "SEO Company in Bangalore | Your Guide to Digital Success",
    date: "2024",
    excerpt: "SEO Company in Bangalore: Your Guide to Top-Tier Digital Success.",
    image: seoBangalore,
    link: "/blog/seo-company-in-bangalore",
  },
  {
    title: "Success Stories of Impact Investors in India",
    date: "2024",
    excerpt: "Impact Feature Success Stories: Showcasing the Impact of Impact Investors in India.",
    image: impactInvestors,
    link: "/blog/impact-investors-india",
  },
  {
    title: "Empowering Nonprofits through SEO",
    date: "2023",
    excerpt: "Empowering Nonprofits through SEO and Fundraising. Establishing a strong online presence is crucial.",
    image: nonprofitsSeo,
    link: "/blog/empowering-nonprofits-seo",
  },
  {
    title: "Tips for Successful Local SEO in 2021",
    date: "2021",
    excerpt: "Local SEO is the process of improving search engine visibility for local businesses.",
    image: seoTips,
    link: "/blog/local-seo-tips-2021",
  },
  {
    title: "Tips to Increase Your Sales on Instagram",
    date: "2020",
    excerpt: "Brands and businesses can succeed in selling on Instagram with the right strategy.",
    image: instagramSales,
    link: "/blog/increase-sales-instagram",
  },
  {
    title: "Digital Marketing for Nonprofits",
    date: "2021",
    excerpt: "Digital Marketing Tips for Nonprofits. Most small and medium NGOs rely on traditional marketing.",
    image: seoNonprofits,
    link: "/blog/digital-marketing-nonprofits",
  },
  // Page 2
  {
    title: "Special Discount for Non-profits & NGO by Ananya SEO Services",
    date: "2018",
    excerpt: "Discount of up to 75% for Charities, Non-profits. SMEs do not have the bandwidth for full Digital Marketing.",
    image: ngoDiscount,
    link: "/blog/ngo-discount",
  },
  {
    title: "Facebook Messenger Bots are the New Frontier in Digital Marketing",
    date: "2018",
    excerpt: "Top 4 messaging apps have more monthly users than the top 4 social networks. Chatbots are the future.",
    image: messengerBots,
    link: "/blog/facebook-messenger-bots",
  },
  {
    title: "Guide to Bing Webmaster Tools",
    date: "2018",
    excerpt: "Bing Webmaster Tools is truly more advanced than Google Search Console in many ways.",
    image: bingWebmaster,
    link: "/blog/guide-bing-webmaster-tools",
  },
  {
    title: "How Small Businesses can Tap into the Power of Micro-influencers",
    date: "2018",
    excerpt: "Micro-influencers can help promote small businesses at a fraction of the cost of celebrities.",
    image: microInfluencers,
    link: "/blog/micro-influencers",
  },
  {
    title: "Guide to Social Media Marketing for Small Business 2018",
    date: "2018",
    excerpt: "93% of small businesses use social media but whether they do it effectively is debatable.",
    image: smmGuide2018,
    link: "/blog/social-media-marketing-guide-2018",
  },
  {
    title: "Instagram Marketing for Small Business",
    date: "2017",
    excerpt: "With over 500 million monthly active users, Instagram is a powerful platform for small businesses.",
    image: instagramMarketing,
    link: "/blog/instagram-marketing-small-business",
  },
  {
    title: "Have you set up a Creative Facebook Cover Video",
    date: "2017",
    excerpt: "Since May 2017, you can turn your cover photo into a cover video on Facebook.",
    image: fbCoverVideo,
    link: "/blog/facebook-cover-video",
  },
  {
    title: "The Secret Power of Facebook Audience Targeting for Ads",
    date: "2017",
    excerpt: "Reaching users has not been free for businesses on Facebook. Learn about Lookalike Audiences.",
    image: fbAudienceTargeting,
    link: "/blog/facebook-audience-targeting",
  },
  {
    title: "Is your SEO Agency Helping or Harming your Website",
    date: "2017",
    excerpt: "Your SEO agency can actually be hurting your website. Know the warning signs.",
    image: seoAgencyHarm,
    link: "/blog/seo-agency-helping-or-harming",
  },
  {
    title: "Ananya SEO Services announces a special offer for NGOs",
    date: "November 22, 2016",
    excerpt: "Launch of a special digital marketing program for not-for-profit organizations and NGOs.",
    image: ngoSpecialOffer,
    link: "/blog/ngo-special-offer",
  },
];

const POSTS_PER_PAGE = 10;
const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);

const Blog = () => {
  useSEO({
    title: "Insights and Tips on Digital Marketing | Ananya SEO Blog",
    description: "Read our latest articles on SEO, digital marketing, social media marketing, PPC advertising, and more from Ananya SEO experts.",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ],
  });

  const { page } = useParams();
  const currentPage = page ? parseInt(page) : 1;
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allBlogPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
            Insights and Tips on Digital Marketing
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.title}
                to={post.link}
                className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-accent/20">
                      <span className="text-4xl font-heading font-bold text-primary/30">Blog</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read Post <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Blog pagination">
            {currentPage > 1 && (
              <Link
                to={currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <ChevronLeft size={16} /> Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                to={p === 1 ? "/blog" : `/blog/page/${p}`}
                className={`inline-flex items-center justify-center w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                  p === currentPage
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {p}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link
                to={`/blog/page/${currentPage + 1}`}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Next <ChevronRight size={16} />
              </Link>
            )}
          </nav>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
