import { Trophy, Award, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const competitions = [
  {
    name: "TWISE NIGHT 2025",
    position: "National Top 10",
    date: "April 2025",
    description: "Development of an intelligent AI platform for healthcare",
    award: "Trophy",
    color: "text-yellow-500",
  },
  {
    name: "Entrepreneurship Competition",
    position: " Initiator Status ",
    date: "Febrary 2025",
    description: "Competition organized by the University of Monastir, where our team presented an innovative project idea.",
    award: "Professional Mentorship",
    color: "text-blue-500",
  },
  {
    name: "La Nuit de l'Info",
    position: "1st Place",
    date: "December 2024",
    description: "National hackathon where our team developed an innovative web application in one night, guided by professional mentors and evaluated on design, architecture, and collaboration.",
    award: "Award",
    color: "text-purple-500",
  },
    {
    name: "La Nuit de l'Info",
    position: "1st Place",
    date: "December 2023",
    description: "National hackathon where our team developed an innovative web application in one night, guided by professional mentors and evaluated on design, architecture, and collaboration.",
    award: "Award",
    color: "text-purple-500",
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
    <section id="competitions" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;achievements /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Competitions <span className="gradient-text">&amp; Wins</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Recognition earned through hackathons and challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {competitions.map((comp, index) => {
            const Icon = getIcon(comp.award);
            return (
              <div
                key={index}
                className="code-card p-6 group"
              >
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-primary/10 ${comp.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold font-mono">
                        {comp.name}
                      </h3>
                      <Badge variant="outline" className="border-primary/30 font-mono text-xs">
                        {comp.date}
                      </Badge>
                    </div>

                    <Badge className="bg-primary/20 text-primary border border-primary/30 mb-3 font-mono text-xs">
                      {comp.position}
                    </Badge>

                    <p className="text-muted-foreground text-sm">
                      {comp.description}
                    </p>

                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-primary transition-all duration-500 mt-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
