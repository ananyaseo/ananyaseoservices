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
    <article className="py-12 md:py-16 bg-background">
      <div className="container max-w-3xl">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Back to Blog
        </a>

        {heroImage && (
          <img
            src={heroImage}
            alt={title}
            className="w-full rounded-xl mb-10 shadow-md"
          />
        )}

        <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-headings:font-heading prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
          {children}
        </div>
      </div>
    </article>

    <Footer />
  </div>
);

export default BlogPostLayout;