import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Consulted" },
  { icon: Clock, value: "14+", label: "Years of Digital Marketing Excellence" },
  { icon: Award, value: "95%", label: "Client Retention Rate" },
];

const StatsBar = () => (
  <section className="bg-primary py-8">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-2 animate-count-up">
          <stat.icon className="text-primary-foreground" size={32} />
          <span className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">
            {stat.value}
          </span>
          <span className="text-primary-foreground/80 text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
