import { Code, Award, Briefcase, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Briefcase,
    value: 3,
    suffix: "+",
    label: "Internships",
  },
  {
    icon: Code,
    value: 15,
    suffix: "+",
    label: "Projects",
  },
  {
    icon: Award,
    value: 4,
    suffix: "",
    label: "Competitions",
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    label: "Certifications",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="code-card p-6 text-center group hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="font-mono">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground mt-2 text-xs font-mono">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
