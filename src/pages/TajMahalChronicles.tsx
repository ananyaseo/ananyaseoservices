import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, BookOpen, ExternalLink } from "lucide-react";

import coverImg from "@/assets/taj-mahal-cover.jpg";
import fullCoverImg from "@/assets/taj-mahal-full-cover.png";
import shahJahanImg from "@/assets/taj-shah-jahan.jpg";
import m4mImg from "@/assets/taj-m4m.jpg";
import hisSecretImg from "@/assets/taj-his-secret.jpg";
import voicesImg from "@/assets/taj-voices.jpg";
import pandemicImg from "@/assets/taj-pandemic.jpg";

const StarRating = () => (
  <div className="flex items-center gap-1 text-accent">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={18} fill="currentColor" />
    ))}
    <span className="text-sm text-muted-foreground ml-2">Rated 5 out of 5</span>
  </div>
);

const stories = [
  {
    title: "Taj Mahal Chronicles",
    image: shahJahanImg,
    description: `"Taj Chronicles" is a gripping tale of power, betrayal, and justice set against the backdrop of a wealthy Indian business family. After Zayan's mysterious death, his sister Zara fights to uncover the truth, driven by their father Shah Mirza Khan's cryptic dying words. Her relentless pursuit pits her against her ambitious brother Mohammed, unraveling a web of deceit and conspiracy. Blending family drama, courtroom battles, and investigative intrigue, the story explores the dark side of ambition and the unwavering quest for justice.`,
    tags: ["#historicalfiction", "#familysaga"],
  },
  {
    title: "M4M Seeking LTR",
    subtitle: '"All his later failures in love were a punishment for abandoning her"',
    image: m4mImg,
    description: `M4M Seeking LTR [Male for Male Seeking Long Term Relationship] is the story of a middle-aged gay man who sought a long-term relationship all his life. Now he faces old age and mortality.`,
    tags: ["#LGBTQ", "#Ageing"],
  },
  {
    title: "His Secret",
    image: hisSecretImg,
    description: `His Secret is about a mother who grapples with the painful fact that her son had not confided in her.`,
    tags: ["#psychological", "#mentalhealth"],
  },
  {
    title: "Voices",
    image: voicesImg,
    description: `A surgeon struggles with a debilitating condition. Will she risk patients' lives to continue her work?`,
    tags: ["#psychological", "#mentalhealth"],
  },
  {
    title: "Pandemic Love",
    image: pandemicImg,
    description: `Gaurav tries to save the life of his friend in "Pandemic Love". Nirav is haunted by separation from his daughter, who has been taken away by his estranged wife.`,
    tags: ["#shortstories", "#mentalhealth"],
  },
];

const TajMahalChronicles = () => {
  useSEO({
    title: "Taj Mahal Chronicles and Other Stories | Ananya SEO",
    description: "Experience the power of masterful storytelling with Taj Mahal Chronicles and Other Stories — five compelling short stories depicting people facing crises in their lives.",
    url: "/taj-mahal-chronicles-and-other-stories",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Taj Mahal Chronicles", url: "/taj-mahal-chronicles-and-other-stories" },
    ],
  });

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight">
                Taj Mahal Chronicles
                <span className="block text-xl md:text-2xl mt-2 font-normal text-primary-foreground/80">
                  M4M Seeking LTR &amp; 3 more stories
                </span>
              </h1>
              <p className="text-primary-foreground/70 mt-6 text-lg leading-relaxed">
                Experience the power of masterful storytelling. This compelling book invites you to step into the vividly drawn world of four short stories, each depicting people facing crises in their lives.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["#literaryfiction", "#historicalfiction", "#psychological", "#LGBTQ", "#shortstories", "#mentalhealth"].map(tag => (
                  <span key={tag} className="bg-primary-foreground/10 text-primary-foreground/80 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://www.amazon.in/Taj-Mahal-Chronicles-Other-Stories-ebook/dp/B0DT1N5RQC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <BookOpen size={18} /> Amazon Kindle — ₹50
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://www.amazon.com/dp/B0F3851KSZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <BookOpen size={18} /> Amazon Paperback — $3.9
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={coverImg}
                alt="Taj Mahal Chronicles and Other Stories - Book Cover"
                className="rounded-2xl shadow-2xl max-h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Cover */}
      <section className="py-12 bg-muted">
        <div className="container max-w-5xl">
          <img
            src={fullCoverImg}
            alt="Taj Mahal Chronicles - Full front and back cover"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Amazing Stories That Will Touch You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Shah Mirza Khan built an empire on vision, integrity, and love. But the betrayal of his son, Mohammed Ibrahim, shattered not only his legacy but also his family. Forced into exile in the twilight of his life, Shah Mirza Khan watches from a retirement home as his once-thriving business empire crumbles under greed and corruption.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
            In "Voices", a surgeon struggles with a debilitating condition and must choose between her work and risking her patients' lives. "His Secret" explores the painful reality of a mother grappling with her son's hidden struggles.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="space-y-16">
            {stories.map((story, index) => (
              <div
                key={story.title}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-2/5">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-3/5">
                  <StarRating />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3">
                    {story.title}
                  </h3>
                  {story.subtitle && (
                    <p className="text-muted-foreground italic mt-2">{story.subtitle}</p>
                  )}
                  <p className="text-muted-foreground mt-4 leading-relaxed text-lg">
                    {story.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {story.tags.map(tag => (
                      <span key={tag} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
            Get Your Copy Today
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.amazon.in/Taj-Mahal-Chronicles-Other-Stories-ebook/dp/B0DT1N5RQC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              <BookOpen size={20} /> Amazon Kindle — ₹50
            </a>
            <a
              href="https://www.amazon.com/dp/B0F3851KSZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              <BookOpen size={20} /> Amazon Paperback — $3.9
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TajMahalChronicles;
