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
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Educational <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building a solid foundation in computer science and software engineering
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
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Card */}
                  <Card className="glass-card p-6 hover-glow border-primary/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <span className="text-sm font-medium text-accent mt-2 md:mt-0">{item.year}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{item.level}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
