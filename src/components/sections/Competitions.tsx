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
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
  <span className="gradient-text">Competing</span> & Winning
</h2>
<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
  Highlights of my journey through competitions and the achievements I earned along the way.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {competitions.map((comp, index) => {
            const Icon = getIcon(comp.award);
            return (
              <Card
                key={index}
                className="glass-card p-6 hover-glow group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
                
                <div className="relative flex gap-4">
                  <div className={`flex-shrink-0 ${comp.color}`}>
                    <Icon className="h-10 w-10" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-display font-semibold">
                        {comp.name}
                      </h3>
                      <Badge variant="outline" className="border-primary/50">
                        {comp.date}
                      </Badge>
                    </div>

                    <Badge className="bg-gradient-primary mb-3">
                      {comp.position}
                    </Badge>

                    <p className="text-muted-foreground text-sm">
                      {comp.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
