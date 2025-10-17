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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="glass-card p-6 text-center hover-glow group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
