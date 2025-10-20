import { Code2, Database, Cloud, Smartphone, Brain, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code2,
    category: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    color: "from-primary to-blue-500",
  },
  {
    icon: Database,
    category: "Backend & Database",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Flask"],
    color: "from-accent to-yellow-500",
  },
  {
    icon: Cloud,
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Azure"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    category: "Mobile Development",
    skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GitBranch,
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
    color: "from-orange-500 to-red-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;skills /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Building the future with modern tech stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="code-card p-6 h-full group relative overflow-hidden transition-all duration-500 hover:border-l-8">
                {/* Hover effect background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  {/* Category title */}
                  <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                  
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="text-xs font-mono px-3 py-1.5 rounded-md bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Animated bottom accent */}
                  <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${category.color} transition-all duration-700 mt-4 rounded-full`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Code-style decoration */}
        <motion.div 
          className="mt-16 text-center font-mono text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-primary">const</span> passion <span className="text-accent">=</span> <span className="text-green-500">"continuous learning"</span><span className="text-muted-foreground">;</span>
        </motion.div>
      </div>
    </section>
  );
};
