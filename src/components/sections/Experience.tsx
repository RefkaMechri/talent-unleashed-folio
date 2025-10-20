import { Code, Lightbulb, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with modern technologies",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Flask"],
    gradient: "from-primary to-blue-500",
  },
  {
    icon: Lightbulb,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems for healthcare and agriculture",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    gradient: "from-accent to-yellow-500",
  },
  {
    icon: Trophy,
    title: "Problem Solving",
    description: "Participating in hackathons and coding competitions",
    technologies: ["Algorithms", "Data Structures", "System Design"],
    gradient: "from-purple-500 to-pink-500",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
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
              &lt;expertise /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Technical <span className="gradient-text">Focus</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Core competencies as a software engineer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="code-card p-6 h-full group relative overflow-hidden hover:border-l-8 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow font-mono">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300 font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-700 rounded-full mt-5`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
