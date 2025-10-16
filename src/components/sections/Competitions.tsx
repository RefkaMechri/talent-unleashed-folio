import { Trophy, Award, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const competitions = [
  {
    name: "Hackathon Innovation 2024",
    position: "1ère Place",
    date: "Mars 2024",
    description: "Développement d'une solution IA innovante pour l'agriculture durable.",
    award: "Trophy",
    color: "text-yellow-500",
  },
  {
    name: "Code Challenge National",
    position: "Top 10",
    date: "Janvier 2024",
    description: "Compétition d'algorithmique et résolution de problèmes complexes.",
    award: "Medal",
    color: "text-blue-500",
  },
  {
    name: "Web Design Contest",
    position: "2ème Place",
    date: "Novembre 2023",
    description: "Création d'une interface utilisateur innovante pour une application mobile.",
    award: "Award",
    color: "text-purple-500",
  },
  {
    name: "Startup Weekend",
    position: "Finaliste",
    date: "Septembre 2023",
    description: "Développement d'un MVP en 48h avec une équipe multidisciplinaire.",
    award: "Trophy",
    color: "text-orange-500",
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
            <span className="gradient-text">Compétitions</span> & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mes participations et réussites dans diverses compétitions
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
