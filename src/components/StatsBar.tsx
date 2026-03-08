import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Consulted" },
  { icon: Clock, value: "14+", label: "Years of Digital Marketing Excellence" },
  { icon: Award, value: "95%", label: "Client Retention Rate" },
];

const StatsBar = () => (
  <section className="py-5 flex justify-center">
    <div className="w-[60%] grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-primary rounded-2xl py-5 px-6">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 animate-count-up">
          <stat.icon className="text-primary-foreground" size={28} />
          <span className="text-2xl md:text-3xl font-bold text-primary-foreground font-heading">
            {stat.value}
          </span>
          <span className="text-primary-foreground/80 text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
