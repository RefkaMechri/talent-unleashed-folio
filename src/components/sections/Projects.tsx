import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Application E-Commerce",
    description: "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser et analyser des données en temps réel.",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "App Mobile Social",
    description: "Application mobile de réseau social avec messagerie instantanée et partage de contenu.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Generator",
    description: "Outil de création de portfolios personnalisés avec templates modernes.",
    technologies: ["Next.js", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations et projets personnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden hover-glow group perspective-1000"
            >
              <div className="relative h-48 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-accent-glow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              <div className="p-6 relative">
                <div className="absolute -top-3 right-6 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <ExternalLink className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
