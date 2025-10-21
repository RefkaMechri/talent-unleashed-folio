import { Code2, Rocket, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  { icon: Code2, title: "Software Engineering", description: "Developing high-quality, scalable applications" },
  { icon: Users, title: "Collaboration", description: "Working seamlessly with teams to bring projects to life" },
  { icon: Rocket, title: "Creative Innovation", description: "Turning bold ideas into practical, high-impact solutions" },
  { icon: Zap, title: "Optimized Performance", description: "Ensuring every project runs efficiently and reliably" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;about /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Building digital experiences with passion and precision
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="code-card p-4 text-center group hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-sm font-semibold mb-1 font-mono">{skill.title}</h3>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <motion.div
            className="lg:col-span-2 code-card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-primary" />
              <h3 className="text-2xl font-bold font-mono text-primary">const me = {`{`}</h3>
            </div>
            
            <div className="space-y-4 pl-6 font-mono text-sm md:text-base">
              <p className="text-foreground/90">
                <span className="text-accent">role:</span> <span className="text-primary">"Software Engineer"</span>,
              </p>
              <p className="text-foreground/90">
                <span className="text-accent">passion:</span> <span className="text-foreground/80">"Building scalable solutions that solve real problems"</span>,
              </p>
              <p className="text-foreground/90">
                <span className="text-accent">focus:</span> <span className="text-foreground/80">["Full-Stack", "AI/ML", "Cloud"]</span>,
              </p>
              <p className="text-foreground/90">
                <span className="text-accent">mindset:</span> <span className="text-foreground/80">"Always learning, always building"</span>
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <h3 className="text-2xl font-bold font-mono text-primary">{`}`}</h3>
            </div>
          </motion.div>

          <motion.div
            className="code-card p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 font-mono text-primary">// Quick Facts</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent">▸</span>
                <span className="text-foreground/80">3+ Years Coding</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">▸</span>
                <span className="text-foreground/80">15+ Projects Built</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">▸</span>
                <span className="text-foreground/80">10+ Certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">▸</span>
                <span className="text-foreground/80">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.div
            className="code-card p-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-primary" />
              <h3 className="text-xl font-bold font-mono">Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To create innovative software solutions that make technology accessible and impactful for everyone.
            </p>
          </motion.div>

          <motion.div
            className="code-card p-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-accent" />
              <h3 className="text-xl font-bold font-mono">Values</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Clean code, continuous learning, collaboration, and delivering solutions that truly matter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
