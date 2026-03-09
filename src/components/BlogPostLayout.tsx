import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Blog posts data for navigation
const allBlogPosts = [
  {
    title: "Should Smaller Businesses Implement AI Immediately?",
    date: "February 27, 2026",
    excerpt: "Using AI Chatbots for Customer Service Let's assume a company has: Is a chatbot viable? The Honest Answer: Yes — […]",
    image: "/src/assets/blog/ai-smaller-businesses.jpg",
    link: "/blog/should-smaller-businesses-implement-ai-immediately",
  },
  {
    title: "AI SEO in 2026: What Every Business Owner Must Know to Stay Visible",
    date: "February 25, 2026",
    excerpt: "Questions to Ask Your Agency AI SEO in 2026: What Every Business Owner Must Know to Stay Visible. The landscape is changing fast.",
    image: "/src/assets/blog/ai-seo-2026.png",
    link: "/blog/ai-seo-in-2026",
  },
  {
    title: "SEO Trends and Best Practices for ranking on Google in 2025",
    date: "May 28, 2025",
    excerpt: "Comprehensive overview of SEO Trends and Best Practices for ranking on Google in 2025.",
    image: "/src/assets/blog/seo-trends-2025.jpg",
    link: "/blog/seo-trends-2025",
  },
  {
    title: "Unlock Your Creative Potential: Using AI Tools to Write and Publish Fiction",
    date: "2024",
    excerpt: "Using ChatGPT and Kindle Publishing. Unlock Your Creative Potential: Using AI Tools to Write and Publish Fiction.",
    image: "/src/assets/blog/ai-tools-fiction.jpg",
    link: "/blog/ai-tools-write-publish-fiction",
  },
  {
    title: "SEO Company in Bangalore | Your Guide to Digital Success",
    date: "2024",
    excerpt: "SEO Company in Bangalore: Your Guide to Top-Tier Digital Success.",
    image: "/src/assets/blog/seo-bangalore.jpg",
    link: "/blog/seo-company-in-bangalore",
  },
  {
    title: "Success Stories of Impact Investors in India",
    date: "2024",
    excerpt: "Impact Feature Success Stories: Showcasing the Impact of Impact Investors in India.",
    image: "/src/assets/blog/impact-investors.jpg",
    link: "/blog/impact-investors-india",
  },
  {
    title: "Empowering Nonprofits through SEO",
    date: "2023",
    excerpt: "Empowering Nonprofits through SEO and Fundraising. Establishing a strong online presence is crucial.",
    image: "/src/assets/blog/nonprofits-seo.jpg",
    link: "/blog/empowering-nonprofits-seo",
  },
  {
    title: "Tips for Successful Local SEO in 2021",
    date: "2021",
    excerpt: "Local SEO is the process of improving search engine visibility for local businesses.",
    image: "/src/assets/blog/seo-tips-2021.png",
    link: "/blog/local-seo-tips-2021",
  },
  {
    title: "Tips to Increase Your Sales on Instagram",
    date: "2020",
    excerpt: "Brands and businesses can succeed in selling on Instagram with the right strategy.",
    image: "/src/assets/blog/instagram-sales.png",
    link: "/blog/increase-sales-instagram",
  },
  {
    title: "Digital Marketing for Nonprofits",
    date: "2021",
    excerpt: "Digital Marketing Tips for Nonprofits. Most small and medium NGOs rely on traditional marketing.",
    image: "/src/assets/blog/seo-nonprofits.png",
    link: "/blog/digital-marketing-nonprofits",
  },
  {
    title: "Special Discount for Non-profits & NGO by Ananya SEO Services",
    date: "2018",
    excerpt: "Discount of up to 75% for Charities, Non-profits. SMEs do not have the bandwidth for full Digital Marketing.",
    image: "/src/assets/blog/ngo-discount.jpg",
    link: "/blog/ngo-discount",
  },
  {
    title: "Facebook Messenger Bots are the New Frontier in Digital Marketing",
    date: "2018",
    excerpt: "Top 4 messaging apps have more monthly users than the top 4 social networks. Chatbots are the future.",
    image: "/src/assets/blog/messenger-bots.jpg",
    link: "/blog/facebook-messenger-bots",
  },
  {
    title: "Guide to Bing Webmaster Tools",
    date: "2018",
    excerpt: "Bing Webmaster Tools is truly more advanced than Google Search Console in many ways.",
    image: "/src/assets/blog/bing-webmaster.jpg",
    link: "/blog/guide-bing-webmaster-tools",
  },
  {
    title: "How Small Businesses can Tap into the Power of Micro-influencers",
    date: "2018",
    excerpt: "Micro-influencers can help promote small businesses at a fraction of the cost of celebrities.",
    image: "/src/assets/blog/micro-influencers.jpg",
    link: "/blog/micro-influencers",
  },
  {
    title: "Guide to Social Media Marketing for Small Business 2018",
    date: "2018",
    excerpt: "93% of small businesses use social media but whether they do it effectively is debatable.",
    image: "/src/assets/blog/smm-guide-2018.jpg",
    link: "/blog/social-media-marketing-guide-2018",
  },
  {
    title: "Instagram Marketing for Small Business",
    date: "2017",
    excerpt: "With over 500 million monthly active users, Instagram is a powerful platform for small businesses.",
    image: "/src/assets/blog/instagram-marketing.jpg",
    link: "/blog/instagram-marketing-small-business",
  },
  {
    title: "Have you set up a Creative Facebook Cover Video",
    date: "2017",
    excerpt: "Since May 2017, you can turn your cover photo into a cover video on Facebook.",
    image: "/src/assets/blog/fb-cover-video.jpg",
    link: "/blog/facebook-cover-video",
  },
  {
    title: "The Secret Power of Facebook Audience Targeting for Ads",
    date: "2017",
    excerpt: "Reaching users has not been free for businesses on Facebook. Learn about Lookalike Audiences.",
    image: "/src/assets/blog/fb-audience-targeting.jpg",
    link: "/blog/facebook-audience-targeting",
  },
  {
    title: "Is your SEO Agency Helping or Harming your Website",
    date: "2017",
    excerpt: "Your SEO agency can actually be hurting your website. Know the warning signs.",
    image: "/src/assets/blog/seo-agency-harm.jpg",
    link: "/blog/seo-agency-helping-or-harming",
  },
  {
    title: "Ananya SEO Services announces a special offer for NGOs",
    date: "November 22, 2016",
    excerpt: "Launch of a special digital marketing program for not-for-profit organizations and NGOs.",
    image: "/src/assets/blog/ngo-special-offer.jpg",
    link: "/blog/ngo-special-offer",
  },
];

interface BlogPostLayoutProps {
  title: string;
  date: string;
  heroImage?: string;
  heroSideImage?: string;
  youtubeVideoId?: string;
  currentPostLink?: string;
  children: React.ReactNode;
}

const BlogPostLayout = ({ title, date, heroImage, heroSideImage, youtubeVideoId, currentPostLink, children }: BlogPostLayoutProps) => {
  // Find current post index and get prev/next
  const currentIndex = allBlogPosts.findIndex(post => post.link === currentPostLink);
  const prevPost = currentIndex > 0 ? allBlogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allBlogPosts.length - 1 ? allBlogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className={`${heroSideImage ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center' : 'text-center'}`}>
            <div className={heroSideImage ? '' : ''}>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground max-w-4xl leading-tight">
                {title}
              </h1>
              <p className="text-primary-foreground/70 mt-4 text-sm">{date}</p>
            </div>
            {heroSideImage && (
              <div className="flex justify-center md:justify-end">
                <img
                  src={heroSideImage}
                  alt={title}
                  className="rounded-xl shadow-lg max-h-80 w-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      {youtubeVideoId && (
        <section className="py-10 bg-background">
          <div className="container max-w-3xl">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <article className="py-16 md:py-20 bg-secondary/30">
        <div className="container max-w-4xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-base text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft size={18} /> Back to Blog
          </a>

          {heroImage && (
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-12">
              <img
                src={heroImage}
                alt={title}
                className="w-full rounded-xl"
              />
            </div>
          )}

          <div 
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            style={{ fontSize: '18px', lineHeight: '1.6', color: '#1a1a1a' }}
          >
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-heading prose-headings:mb-4 prose-p:mb-4 prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-foreground prose-a:text-primary [&>p]:text-[#1a1a1a] [&>ul]:text-[#1a1a1a] [&>ol]:text-[#1a1a1a] [&>li]:text-[#1a1a1a] [&_li]:text-[#1a1a1a]">
              {children}
            </div>
          </div>

          {/* Previous/Next Post Navigation */}
          {(prevPost || nextPost) && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost ? (
                <Link
                  to={prevPost.link}
                  className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={prevPost.image}
                      alt={prevPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ChevronLeft size={16} />
                      <span>Previous Post</span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {prevPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {prevPost.excerpt}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  to={nextPost.link}
                  className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={nextPost.image}
                      alt={nextPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      <span>Next Post</span>
                      <ChevronRight size={16} />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2 text-right">
                      {nextPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 text-right">
                      {nextPost.excerpt}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostLayout;
