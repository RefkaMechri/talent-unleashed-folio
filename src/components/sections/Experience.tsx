import { Code, Lightbulb, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with modern technologies and best practices",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Flask"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems for healthcare and agriculture using ML algorithms",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Problem Solving",
    description: "Participating in hackathons and coding competitions to sharpen technical skills",
    technologies: ["Algorithms", "Data Structures", "System Design"],
    gradient: "from-cyan-500 to-blue-500",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core competencies and areas of focus as a software engineering student
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 h-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-20 h-20 mb-6 flex items-center justify-center rounded-3xl bg-gradient-to-br ${item.gradient} shadow-tech-glow group-hover:shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-gradient-tech hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-700 rounded-full mt-6`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
