import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Développement",
    description: "Expertise en développement web full-stack avec des technologies modernes",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Création d'interfaces utilisateur élégantes et intuitives",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Toujours à la recherche de solutions créatives et performantes",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation et excellence dans chaque ligne de code",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            À Propos de <span className="gradient-text">Moi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionné par la technologie et l'innovation, je crée des solutions digitales qui font la différence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover-glow group"
            >
              <div className="mb-4 inline-block p-3 bg-gradient-primary rounded-lg">
                <skill.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Je suis un développeur créatif avec une passion pour transformer des idées en réalité digitale. 
            Mon parcours m'a permis d'acquérir une expertise technique solide tout en développant une approche 
            créative de résolution de problèmes.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Chaque projet est une opportunité d'apprendre, d'innover et de repousser les limites du possible. 
            Je m'engage à livrer des solutions qui allient excellence technique et design exceptionnel.
          </p>
        </div>
      </div>
    </section>
  );
};
