import { Code, Database, Cloud, Brain, Smartphone, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    color: "hsl(142 76% 36%)",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    icon: Database,
    title: "Backend",
    color: "hsl(217 91% 60%)",
    skills: ["Node.js", "Python", "Flask", "Express", "MySQL", "PostgreSQL"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "hsl(47 96% 53%)",
    skills: ["AWS", "Docker", "Git/GitHub", "CI/CD"]
  },
  {
    icon: Brain,
    title: "AI/ML",
    color: "hsl(271 76% 53%)",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"]
  },
  {
    icon: Smartphone,
    title: "Mobile",
    color: "hsl(187 92% 69%)",
    skills: ["React Native", "Electron.js"]
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    color: "hsl(142 76% 36%)",
    skills: ["VS Code", "Postman", "Figma", "Jira"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;skills /&gt;
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies and tools I work with to build modern solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="code-card p-6 group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="p-3 rounded-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                    border: `1px solid ${category.color}30`
                  }}
                >
                  <category.icon 
                    className="h-6 w-6" 
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-xl font-semibold font-mono">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Animated bottom accent */}
              <div 
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-4 rounded-full"
                style={{ background: category.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
