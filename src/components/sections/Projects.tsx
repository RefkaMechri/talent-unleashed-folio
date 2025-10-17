import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import pharmaImg from "@/assets/pharma.png"; 
import epilepImg from "@/assets/epilepTrack.png"; 
import fungiImage from "@/assets/fungi.png";
import ISIMMImage from "@/assets/ISIMM.png";


const projects = [
{
  title: "PharmaLab – Fattouma Bourguiba Hospital",
  description: "Desktop application automating clinical decision-making with AI-driven predictive models. Recommends optimal drug dosages and provides healthcare professionals with an intuitive interface to manage patient treatments.",
  technologies: ["Python", "electron.js","Machine Learning", "Desktop App", "AI", "Healthcare"],
  image: pharmaImg ,
  github: "https://github.com/RefkaMechri/PharmaLab",
  demo: "https://demo.com",
},


  {
    title: "EpilepTrack",
  description: "An AI-powered platform that assists non-specialists in interpreting EEG signals, developed in collaboration with doctors at Sahloul Hospital, and enabling remote validation by a neurophysiologist.",
    technologies: ["React.js", "Flask", "MySQL", "Machine Learning", "AI", "Healthcare"],
    image: epilepImg,
    github: "https://github.com/RefkaMechri/epilepTrack",
    demo: "https://demo.com",
  },
  {
    title: "FungiScan ",
    description: "FungiScan AI is an innovative AI-based solution designed to automatically detect fungal diseases affecting crops. Using computer vision and machine learning, the system can analyze plant images captured via drones, smartphones, or emedded sensors to identify infections and recommend precise actions.",
 technologies: [
      "Python",
      "TensorFlow / PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Flask",
      "React.js",
    ],   
     image: fungiImage,
    github: "https://github.com/RefkaMechri/FungiScan-AI",
    demo: "https://drive.google.com/drive/u/2/folders/1CnIGGxvr7ubnRcycVZSCyS-Tq3arf79E",
  },
  {
    title: "ISIMM Website",
    description: "The ISIMM website is an online platform dedicated to education, training, and professional development. It provides comprehensive information on training programs, educational resources, and events organized by the institute.",
    technologies: ["React.js", "Tailwind", "Node.js","MySQL"],
    image: ISIMMImage,
    github: "https://github.com/RefkaMechri/isimm?tab=readme-ov-file",
    demo: "https://github.com/RefkaMechri/isimm?tab=readme-ov-file",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ideas <span className="gradient-text">in</span> action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
           A glimpse into my creations and experiments          </p>
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
