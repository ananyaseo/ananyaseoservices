import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { deckSlides } from "./deck-data";
import SlideCanvas from "./SlideCanvas";

const AUTOPLAY_MS = 6000;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 120 : -120, scale: 0.98 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -120 : 120, scale: 0.98 }),
};

/** Renders the fixed 1920x1080 slide, scaled to fit the container width. */
const SlideFrame = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / 1920);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className="ananya-slide-content absolute left-1/2 top-1/2"
        style={{
          transform: `translate(-50%, -50%) scale(${scale || 0.001})`,
          transformOrigin: "center center",
          opacity: scale ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const AnanyaDeck = () => {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoStarted = useRef(false);

  // Start autoplay as soon as any part of the deck scrolls into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && !autoStarted.current) {
          autoStarted.current = true;
          setPlaying(true);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const go = useCallback((next: number, direction: number) => {
    setState(() => [(next + deckSlides.length) % deckSlides.length, direction]);
  }, []);

  // Advance automatically while playing, visible and not hovered.
  useEffect(() => {
    if (!inView || hovered || !playing) return;
    const t = setInterval(() => go(index + 1, 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [inView, hovered, playing, index, go]);

  return (
    <section ref={sectionRef} id="deck" className="relative py-10 bg-muted overflow-hidden">
      <div className="container relative z-10">
        <div
          className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-navy/10"
          style={{
            aspectRatio: "16 / 9",
            width: "min(100%, calc(74vh * 16 / 9))",
            maxHeight: "74vh",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-navy"
            >
              <SlideFrame>
                <SlideCanvas slide={deckSlides[index]} />
              </SlideFrame>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1, -1)}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setPlaying((p) => !p)}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
          >
            {playing ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1, 1)}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex items-center gap-2 mx-1">
            {deckSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i, i > index ? 1 : -1)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-primary" : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <span className="text-white/70 text-sm font-medium tabular-nums">
            {String(index + 1).padStart(2, "0")} / {deckSlides.length}
          </span>

        </div>
      </div>
    </section>
  );
};

export default AnanyaDeck;
