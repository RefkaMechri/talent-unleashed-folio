import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Stage de Développement",
    company: "Entreprise Tech",
    period: "Juin 2024 - Août 2024",
    description: "Développement d'applications web modernes avec React et Node.js. Collaboration avec l'équipe sur des projets innovants.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Stage Full Stack",
    company: "Digital Agency",
    period: "Jan 2024 - Mars 2024",
    description: "Création de solutions web complètes pour des clients variés. Participation à toutes les phases du développement.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "AWS"],
  },
  {
    title: "Stage Frontend",
    company: "Startup Innovation",
    period: "Été 2023",
    description: "Design et développement d'interfaces utilisateur modernes et responsive. Focus sur l'expérience utilisateur.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Mon <span className="gradient-text">Expérience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parcours professionnel enrichissant à travers différents stages
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-card p-6 md:p-8 hover-glow group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
