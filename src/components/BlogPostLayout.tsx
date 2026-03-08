import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  heroImage?: string;
  children: React.ReactNode;
}

const BlogPostLayout = ({ title, date, heroImage, children }: BlogPostLayoutProps) => (
  <div className="min-h-screen">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="bg-primary py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        <p className="text-primary-foreground/70 mt-4 text-sm">{date}</p>
      </div>
    </section>

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
