import { Award, Users, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, end: 500, suffix: "+", label: "Clients Consulted" },
  { icon: Clock, end: 14, suffix: "+", label: "Years of Digital Marketing Excellence" },
  { icon: Award, end: 95, suffix: "%", label: "Client Retention Rate" },
];

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const CountUpStat = ({ icon: Icon, end, suffix, label }: typeof stats[number]) => {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <Icon className="text-primary-foreground" size={28} />
      <span className="text-2xl md:text-3xl font-bold text-primary-foreground font-heading">
        {count}{suffix}
      </span>
      <span className="text-primary-foreground/80 text-sm">{label}</span>
    </div>
  );
};

const StatsBar = () => (
  <section className="py-5 flex justify-center">
    <div className="w-[60%] grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-primary rounded-2xl py-5 px-6">
      {stats.map((stat) => (
        <CountUpStat key={stat.label} {...stat} />
      ))}
    </div>
  </section>
);

export default StatsBar;
