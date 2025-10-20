import { Code, Award, Briefcase, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Briefcase,
    value: 3,
    suffix: "+",
    label: "Internships",
    color: "from-primary to-blue-500",
  },
  {
    icon: Code,
    value: 15,
    suffix: "+",
    label: "Projects",
    color: "from-accent to-yellow-500",
  },
  {
    icon: Award,
    value: 4,
    suffix: "",
    label: "Competitions",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    label: "Certifications",
    color: "from-green-500 to-emerald-500",
  },
];

export const Stats = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="code-card p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-muted-foreground font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
