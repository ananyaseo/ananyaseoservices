import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  heroImage?: string;
  heroSideImage?: string;
  youtubeVideoId?: string;
  children: React.ReactNode;
}

const BlogPostLayout = ({ title, date, heroImage, heroSideImage, youtubeVideoId, children }: BlogPostLayoutProps) => (
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
      </div>
    </article>

    <Footer />
  </div>
);

export default BlogPostLayout;