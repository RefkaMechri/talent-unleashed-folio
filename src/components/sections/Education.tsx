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

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-40 rounded-full"></div>
            
            <div className="space-y-16">
              {learningPath.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-28"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {/* Icon circle with glow */}
                  <div className="absolute left-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Card */}
                  <Card className="glass-card p-8 border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold gradient-text">{item.title}</h3>
                      <span className="text-base font-bold bg-gradient-tech bg-clip-text text-transparent mt-2 md:mt-0">{item.year}</span>
                    </div>
                    <p className="text-sm md:text-base font-semibold text-accent mb-3">{item.level}</p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{item.description}</p>
                    
                    {/* Accent line */}
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-tech transition-all duration-700 rounded-full mt-6" />
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
