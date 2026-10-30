import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Code,
  Cpu,
  Eye,
  Heart,
  Mail,
  MousePointerClick,
  Phone,
  Search,
  Send,
  Share2,
  Users,
  Globe,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { DeckIcon, DeckSlideData } from "./deck-data";

const ICONS: Record<DeckIcon, typeof Search> = {
  search: Search,
  click: MousePointerClick,
  share: Share2,
  users: Users,
  heart: Heart,
  eye: Eye,
  cpu: Cpu,
  code: Code,
  award: Award,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const IconCircle = ({ icon, size = 80 }: { icon: DeckIcon; size?: number }) => {
  const Icon = ICONS[icon];
  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-primary/20 border border-primary/50 text-primary shrink-0"
      style={{ width: size, height: size }}
    >
      <Icon size={size * 0.45} />
    </div>
  );
};

const Header = ({ slide }: { slide: DeckSlideData }) => (
  <motion.div variants={item} className="absolute left-[100px] top-[76px] max-w-[1500px]">
    {slide.kicker && (
      <p className="as-kicker text-primary font-semibold mb-4">{slide.kicker}</p>
    )}
    <h2 className="as-title font-bold text-navy-foreground">{slide.title}</h2>
    {slide.subtitle && (
      <p className="as-subtitle text-navy-foreground/70 mt-5 max-w-[1250px]">{slide.subtitle}</p>
    )}
  </motion.div>
);

const Chrome = () => (
  <div className="absolute bottom-[34px] left-[100px] right-[100px] flex items-center justify-between">
    <span className="as-chrome text-navy-foreground/45">
      Ananya SEO Services at a Glance · ananyaseo.com
    </span>
    <span className="as-chrome text-navy-foreground/45">Affordable Excellence Since 2010</span>
  </div>
);

const Card = ({ card }: { card: { icon: DeckIcon; title: string; text: string } }) => (
  <motion.div
    variants={item}
    className="bg-navy-light/70 border border-white/10 rounded-3xl p-9 h-full"
  >
    <IconCircle icon={card.icon} />
    <h3 className="as-body-lg font-bold text-navy-foreground mt-6">{card.title}</h3>
    <p className="as-caption text-navy-foreground/70 mt-3 leading-relaxed">{card.text}</p>
  </motion.div>
);

const TitleSlide = ({ slide }: { slide: DeckSlideData }) => (
  <div className="absolute inset-0">
    {slide.image && (
      <>
        <img
          src={slide.image}
          alt={slide.imageAlt || ""}
          className="absolute right-0 top-0 h-full w-[62%] object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #092953 0%, #092953 42%, rgba(9,41,83,0.82) 55%, rgba(9,41,83,0.3) 78%, rgba(9,41,83,0.05) 100%)",
          }}
        />
      </>
    )}
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="absolute left-[100px] top-[180px] max-w-[980px]"
    >
      <motion.p variants={item} className="as-kicker text-accent font-semibold mb-6">
        {slide.kicker}
      </motion.p>
      <motion.h1 variants={item} className="as-title-lg font-bold text-navy-foreground">
        {slide.title}
      </motion.h1>
      <motion.p variants={item} className="as-subtitle text-primary mt-6 font-semibold">
        {slide.subtitle}
      </motion.p>
      {slide.logo && (
        <motion.div variants={item} className="mt-8">
          <div className="inline-flex bg-white rounded-3xl p-5 shadow-lg">
            <img src={slide.logo} alt="Ananya SEO Services logo" className="h-[100px] w-auto" />
          </div>
        </motion.div>
      )}
    </motion.div>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="absolute left-[100px] bottom-[110px] flex gap-16"
    >
      {(slide.stats || []).map((s) => (
        <motion.div key={s.label} variants={item}>
          <div className="text-[78px] leading-none font-heading font-bold text-primary">
            {s.value}
          </div>
          <div className="as-caption text-navy-foreground/75 mt-2">{s.label}</div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const CapabilitiesSlide = ({ slide }: { slide: DeckSlideData }) => (
  <>
    <Header slide={slide} />
    <div className="absolute left-[100px] top-[400px] flex gap-10 w-[1720px]">
      {(slide.cards || []).map((card) => (
        <div key={card.title} className="flex-1">
          <Card card={card} />
        </div>
      ))}
    </div>
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className="absolute left-[100px] bottom-[110px] flex gap-5"
    >
      {(slide.chips || []).map((chip) => (
        <span
          key={chip}
          className="as-caption px-7 py-3 rounded-full border border-white/25 text-navy-foreground/80"
        >
          {chip}
        </span>
      ))}
    </motion.div>
    <Chrome />
  </>
);

const AudienceSlide = ({ slide }: { slide: DeckSlideData }) => (
  <>
    <Header slide={slide} />
    <div className="absolute left-[100px] top-[380px] w-[980px] flex flex-col gap-6">
      {(slide.cards || []).map((card) => (
        <motion.div
          key={card.title}
          variants={item}
          className="flex items-center gap-7 bg-navy-light/70 border border-white/10 rounded-3xl px-9 py-7"
        >
          <IconCircle icon={card.icon} size={72} />
          <div>
            <h3 className="as-body font-bold text-navy-foreground">{card.title}</h3>
            <p className="as-caption text-navy-foreground/70 mt-1">{card.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
    {slide.image && (
      <motion.img
        variants={item}
        src={slide.image}
        alt={slide.imageAlt || ""}
        className="absolute right-[100px] top-[340px] w-[660px] h-[660px] object-cover rounded-3xl shadow-2xl"
      />
    )}
    <Chrome />
  </>
);

const StatsSlide = ({ slide }: { slide: DeckSlideData }) => (
  <>
    <Header slide={slide} />
    <div className="absolute left-[100px] top-[430px] w-[1720px] flex justify-center">
      {(slide.stats || []).map((s, i) => (
        <motion.div
          key={s.label}
          variants={item}
          className={`flex-1 flex flex-col items-center text-center px-8 ${
            i > 0 ? "border-l border-white/15" : ""
          }`}
        >
          <div className="text-[132px] leading-none font-heading font-bold text-primary">
            {s.value}
          </div>
          <div className="as-body text-navy-foreground/80 mt-5 max-w-[420px]">{s.label}</div>
        </motion.div>
      ))}
    </div>
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className="absolute left-0 right-0 bottom-[130px] flex justify-center gap-5"
    >
      {(slide.chips || []).map((chip) => (
        <span
          key={chip}
          className="as-caption px-7 py-3 rounded-full border border-white/25 text-navy-foreground/80"
        >
          {chip}
        </span>
      ))}
    </motion.div>
    <Chrome />
  </>
);

const ServiceSlide = ({ slide }: { slide: DeckSlideData }) => {
  const imageRight = slide.imageSide !== "left";
  return (
    <>
      <Header slide={slide} />
      <div className="absolute left-[100px] top-[440px] w-[1720px] flex gap-20 items-start">
        {!imageRight && slide.image && <ImageBlock slide={slide} />}
        <motion.div variants={item} className="flex-1 pt-2">
          <ul className="space-y-5">
            {(slide.bullets || []).map((b) => (
              <li key={b} className="flex items-start gap-4">
                <CheckCircle className="text-primary shrink-0 mt-1" size={32} />
                <span className="as-body text-navy-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
          {slide.link && (
            <a
              href={slide.link.href}
              className="inline-flex items-center gap-3 mt-9 bg-primary text-primary-foreground px-9 py-4 rounded-full as-caption font-semibold"
            >
              {slide.link.label} <ArrowRight size={26} />
            </a>
          )}
        </motion.div>
        {imageRight && slide.image && <ImageBlock slide={slide} />}
      </div>
      <Chrome />
    </>
  );
};

const ImageBlock = ({ slide }: { slide: DeckSlideData }) => (
  <motion.img
    variants={item}
    src={slide.image}
    alt={slide.imageAlt || ""}
    className="w-[740px] h-[560px] object-cover rounded-3xl shadow-2xl shrink-0"
  />
);

const StrengthsSlide = ({ slide }: { slide: DeckSlideData }) => (
  <>
    <Header slide={slide} />
    <div className="absolute left-[100px] top-[350px] w-[1720px] grid grid-cols-2 gap-9">
      {(slide.cards || []).map((card) => (
        <motion.div
          key={card.title}
          variants={item}
          className="flex items-start gap-7 bg-navy-light/70 border border-white/10 rounded-3xl px-9 py-8"
        >
          <IconCircle icon={card.icon} size={72} />
          <div>
            <h3 className="as-body-lg font-bold text-navy-foreground">{card.title}</h3>
            <p className="as-caption text-navy-foreground/70 mt-2 leading-relaxed">{card.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <Chrome />
  </>
);

const CtaSlide = ({ slide }: { slide: DeckSlideData }) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ fullName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ fullName: "", email: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please email us directly at sanand.rao@gmail.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: Mail, label: "sanand.rao@gmail.com", href: "mailto:sanand.rao@gmail.com" },
    { icon: Phone, label: "+91 98450 38936", href: "tel:+919845038936" },
    { icon: Globe, label: "www.ananyaseo.com", href: "https://www.ananyaseo.com" },
  ];

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute left-[100px] top-[170px] w-[860px]"
      >
        <motion.p variants={item} className="as-kicker text-accent font-semibold mb-5">
          {slide.kicker}
        </motion.p>
        <motion.h2 variants={item} className="as-title-lg font-bold text-navy-foreground">
          {slide.title}
        </motion.h2>
        <motion.p variants={item} className="as-body text-navy-foreground/75 mt-6">
          {slide.subtitle}
        </motion.p>
        <div className="flex flex-col gap-5 mt-12">
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              variants={item}
              href={c.href}
              className="flex items-center gap-5 group"
            >
              <span className="w-[64px] h-[64px] rounded-2xl bg-primary/20 border border-primary/50 text-primary flex items-center justify-center shrink-0">
                <c.icon size={30} />
              </span>
              <span className="as-body-lg text-navy-foreground group-hover:text-primary transition-colors">
                {c.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.form
        variants={item}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit}
        className="absolute right-[100px] top-[120px] w-[760px] bg-white rounded-3xl p-10 shadow-2xl flex flex-col gap-5"
      >
        <h3 className="as-body-lg font-bold font-heading text-foreground">Start the Conversation</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          value={form.fullName}
          onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
          required
          className="h-[68px] rounded-xl border border-input bg-background px-6 text-[26px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          required
          className="h-[68px] rounded-xl border border-input bg-background px-6 text-[26px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <textarea
          name="message"
          placeholder="Your Message *"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          required
          rows={4}
          className="rounded-xl border border-input bg-background px-6 py-4 text-[26px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="h-[72px] bg-primary text-primary-foreground rounded-xl as-body font-semibold flex items-center justify-center gap-3 hover:brightness-110 transition-all disabled:opacity-60"
        >
          <Send size={30} />
          {loading ? "Sending..." : "Elevate Your Business"}
        </button>
      </motion.form>
      <Chrome />
    </>
  );
};

/** Renders one slide at fixed 1920x1080 coordinates. */
const SlideCanvas = ({ slide }: { slide: DeckSlideData }) => {
  switch (slide.layout) {
    case "title":
      return <TitleSlide slide={slide} />;
    case "capabilities":
      return <CapabilitiesSlide slide={slide} />;
    case "audience":
      return <AudienceSlide slide={slide} />;
    case "stats":
      return <StatsSlide slide={slide} />;
    case "service":
      return <ServiceSlide slide={slide} />;
    case "strengths":
      return <StrengthsSlide slide={slide} />;
    case "cta":
      return <CtaSlide slide={slide} />;
    default:
      return null;
  }
};

export default SlideCanvas;
