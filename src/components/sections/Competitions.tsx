import { Trophy, Award, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const competitions = [
  {
    name: "TWISE NIGHT 2025",
    position: "National Top 10",
    date: "April 2025",
    description: "Development of an intelligent AI platform for healthcare",
    award: "Trophy",
    color: "from-accent to-yellow-500",
  },
  {
    name: "Entrepreneurship Competition",
    position: "Initiator Status",
    date: "February 2025",
    description: "Presented an innovative project idea at University of Monastir competition",
    award: "Professional Mentorship",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "La Nuit de l'Info 2024",
    position: "1st Place",
    date: "December 2024",
    description: "National hackathon - developed innovative web application in one night",
    award: "Award",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "La Nuit de l'Info 2023",
    position: "1st Place",
    date: "December 2023",
    description: "National hackathon - developed innovative web application in one night",
    award: "Award",
    color: "from-purple-500 to-pink-500",
  },
];

const getIcon = (award: string) => {
  switch (award) {
    case "Trophy":
      return Trophy;
    case "Medal":
      return Medal;
    default:
      return Award;
  }
};

export const Competitions = () => {
  return (
    <section id="competitions" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
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
              &lt;achievements /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Competing</span> & Winning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Journey through competitions and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {competitions.map((comp, index) => {
            const Icon = getIcon(comp.award);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="code-card p-6 group relative overflow-hidden h-full hover:border-l-8 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative flex gap-4 h-full flex-col">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${comp.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg md:text-xl font-display font-bold group-hover:text-primary transition-colors">
                            {comp.name}
                          </h3>
                          <Badge variant="outline" className="border-primary/30 text-xs font-mono flex-shrink-0">
                            {comp.date}
                          </Badge>
                        </div>

                        <Badge className={`bg-gradient-to-r ${comp.color} text-white mb-3 text-xs font-mono`}>
                          {comp.position}
                        </Badge>

                        <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                          {comp.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${comp.color} transition-all duration-700 rounded-full mt-auto`} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
