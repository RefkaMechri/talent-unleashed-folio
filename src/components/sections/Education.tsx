import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Software Engineering",
    school: "Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)",
    period: "2021 - 2026",
    description: "Specializing in full-stack development, AI/ML, and cloud computing with hands-on projects.",
    status: "In Progress",
  },
  {
    degree: "Baccalaureate in Mathematics",
    school: "Pioneer High School Monastir",
    period: "2020 - 2021",
    description: "Graduated with honors, building a strong foundation in analytical thinking and problem-solving.",
    status: "Completed",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
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
              &lt;education /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Building expertise through structured learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="code-card p-6 md:p-8 group hover:border-l-8 hover:border-l-primary transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 grid md:grid-cols-12 gap-6 items-start">
                  {/* Icon */}
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-10 space-y-3">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-display font-bold">
                        {item.degree}
                      </h3>
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                        item.status === "In Progress" 
                          ? "bg-primary/10 text-primary border border-primary/30" 
                          : "bg-accent/10 text-accent border border-accent/30"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-base md:text-lg text-primary font-medium">
                      {item.school}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-mono">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Animated accent line */}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-700 mt-6 rounded-full" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
