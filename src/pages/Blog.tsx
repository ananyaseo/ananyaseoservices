import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

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

const blogPosts = [
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
    excerpt: "Comprehensive overview of SEO Trends and Best Practices for ranking on Google in 2025. Artificial intelligence and machine learning have transformed search.",
    image: seoTrends,
    link: "/blog/seo-trends-2025",
  },
  {
    title: "Unlock Your Creative Potential: Using AI Tools to Write and Publish Fiction",
    date: "2024",
    excerpt: "Using ChatGPT and Kindle Publishing. Unlock Your Creative Potential: Using AI Tools to Write and Publish Fiction. Writing fiction is evolving.",
    image: aiToolsFiction,
    link: "/blog/ai-tools-write-publish-fiction",
  },
  {
    title: "SEO Company in Bangalore | Your Guide to Digital Success",
    date: "2024",
    excerpt: "SEO Company in Bangalore: Your Guide to Top-Tier Digital Success. In the bustling tech hub of Bangalore, standing out in the digital space is key.",
    image: seoBangalore,
    link: "/blog/seo-company-in-bangalore",
  },
  {
    title: "Success Stories of Impact Investors in India",
    date: "2024",
    excerpt: "Impact Feature Success Stories: Showcasing the Impact of Impact Investors in India. India's vibrant impact investing landscape boasts numerous success stories.",
    image: impactInvestors,
    link: "/blog/impact-investors-india",
  },
  {
    title: "Empowering Nonprofits through SEO: Ananya SEO Takes Online Fundraising to New Heights",
    date: "2023",
    excerpt: "Empowering Nonprofits through SEO and Fundraising. In the digital age, establishing a strong online presence is crucial for nonprofits seeking support.",
    image: null,
    link: "/blog/empowering-nonprofits-seo",
  },
  {
    title: "Tips for Successful Local SEO in 2021",
    date: "2021",
    excerpt: "Local SEO (Search Engine Optimization) is the process of improving search engine visibility for local businesses, primarily those with brick-and-mortar locations.",
    image: seoTips,
    link: "/blog/local-seo-tips-2021",
  },
  {
    title: "Tips to Increase Your Sales on Instagram",
    date: "2020",
    excerpt: "Brands and businesses can succeed in selling on Instagram with the right strategy. Instagram has over 1 billion active users worldwide.",
    image: instagramSales,
    link: "/blog/increase-sales-instagram",
  },
  {
    title: "Digital Marketing for Nonprofits",
    date: "2021",
    excerpt: "Digital Marketing Tips for Nonprofits. Most small and medium NGOs rely on traditional marketing, despite proven digital strategies being available.",
    image: seoNonprofits,
    link: "/blog/digital-marketing-nonprofits",
  },
];

const Blog = () => (
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
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.link}
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
            </a>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Blog;
