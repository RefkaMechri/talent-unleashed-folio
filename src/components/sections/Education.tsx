import { Book, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const learningPath = [
  { 
    icon: GraduationCap, 
    title: "ISIMM – Software Engineering Cycle", 
    year: "2023 - Present", 
    description: "3rd year in Software Engineering, exploring AI, Full-Stack Development, and modern frameworks",
    level: "Engineering Degree"
  },
  { 
    icon: Book, 
    title: "ISIMM – Integrated Preparatory Cycle", 
    year: "2021 - 2023", 
    description: "Graduated with honors, laying the foundation for my tech journey",
    level: "Preparatory Studies"
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;education /&gt;
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Academic <span className="gradient-text">Path</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Foundation in computer science and software engineering
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
            
            <div className="space-y-12">
              {learningPath.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Icon circle */}
                  <div className="absolute left-0 w-14 h-14 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Card */}
                  <div className="code-card p-6 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold font-mono">{item.title}</h3>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded mt-2 md:mt-0">{item.year}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2 font-mono">{item.level}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-primary transition-all duration-500 mt-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
