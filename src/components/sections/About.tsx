import { Target, Rocket, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;about /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Who <span className="gradient-text">Am I?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            A passionate problem solver building the future
          </p>
        </motion.div>

        {/* Main content - side by side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto mb-16">
          {/* Bio Card - takes 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="code-card p-8 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-primary font-mono text-sm">01.</span>
                  <h3 className="text-2xl font-display font-bold">Introduction</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-mono text-sm md:text-base">
                    I'm a final-year software engineering student with a passion for turning complex problems into elegant solutions. My journey in tech is driven by curiosity and a desire to create meaningful impact.
                  </p>
                  <p className="font-mono text-sm md:text-base">
                    From building AI-powered healthcare platforms to crafting seamless web experiences, I thrive on challenges that push the boundaries of what's possible. I believe in writing clean, maintainable code and designing systems that scale.
                  </p>
                  <p className="font-mono text-sm md:text-base">
                    When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects, or exploring the latest in tech innovation.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary">
                    {"{ passionate }"}
                  </span>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent">
                    {"{ innovative }"}
                  </span>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    {"{ driven }"}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Quick Stats - takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 h-full flex flex-col">
              <Card className="code-card p-6 flex-1 relative overflow-hidden group hover:border-primary/40 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative z-10">
                  <Target className="h-8 w-8 text-primary mb-3" />
                  <h4 className="text-lg font-display font-bold mb-2">Mission</h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    Build scalable, user-centric solutions that make a difference
                  </p>
                </div>
              </Card>

              <Card className="code-card p-6 flex-1 relative overflow-hidden group hover:border-accent/40 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="relative z-10">
                  <Rocket className="h-8 w-8 text-accent mb-3" />
                  <h4 className="text-lg font-display font-bold mb-2">Vision</h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    Leverage technology to solve real-world challenges
                  </p>
                </div>
              </Card>

              <Card className="code-card p-6 flex-1 relative overflow-hidden group hover:border-blue-500/40 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                <div className="relative z-10">
                  <Lightbulb className="h-8 w-8 text-blue-400 mb-3" />
                  <h4 className="text-lg font-display font-bold mb-2">Values</h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    Innovation, quality, and continuous learning
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
