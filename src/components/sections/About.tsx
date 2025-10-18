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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 hover-glow group cursor-pointer border-primary/20">
                <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bio Card */}
        <motion.div
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Highly motivated and versatile engineer, passionate about creating solutions that solve complex problems. I combine creativity with a collaborative mindset to deliver meaningful results.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Always eager to learn and adapt, I thrive in fast-paced environments where innovation meets efficiency. Committed to excellence and driven to contribute to impactful projects that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
