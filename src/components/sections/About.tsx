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

        {/* Skills Grid - Enhanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass-card p-8 h-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    {/* Icon with enhanced glow */}
                    <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-3xl bg-gradient-tech shadow-tech-glow group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <skill.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                      {skill.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {skill.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-tech transition-all duration-700 rounded-full" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bio Card - Enhanced */}
        <motion.div
          className="glass-card p-12 md:p-16 max-w-6xl mx-auto rounded-3xl border-2 border-primary/30 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
        >
          {/* Enhanced decorative gradients */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-accent/30 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-tech opacity-10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-gradient-tech rounded-full" />
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h3>
              <div className="h-1 flex-1 bg-gradient-tech rounded-full opacity-30" />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Highly motivated and versatile <span className="gradient-text font-semibold">software engineer</span>, passionate about creating solutions that solve complex problems. I combine creativity with a collaborative mindset to deliver meaningful results.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Always eager to learn and adapt, I thrive in fast-paced environments where <span className="gradient-text font-semibold">innovation meets efficiency</span>. Committed to excellence and driven to contribute to impactful projects that make a difference.
              </p>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-primary/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
