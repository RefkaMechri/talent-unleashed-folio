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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation, I craft solutions that make a real impact.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 hover-glow group cursor-pointer border-primary/30 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 gradient-text">{skill.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bio Card */}
        <motion.div
          className="glass-card p-10 md:p-14 max-w-5xl mx-auto rounded-3xl border-2 border-primary/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl -z-10" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 gradient-text">About Me</h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Highly motivated and versatile engineer, passionate about creating solutions that solve complex problems. I combine creativity with a collaborative mindset to deliver meaningful results.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Always eager to learn and adapt, I thrive in fast-paced environments where innovation meets efficiency. Committed to excellence and driven to contribute to impactful projects that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
