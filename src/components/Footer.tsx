import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold gradient-text mb-2">
              Refka Mechri
            </h3>
            <p className="text-sm text-muted-foreground">
             Final-year Software Engineering Student 
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/RefkaMechri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/refka-mechri-4377a2274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ref.kaa2002@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
© {currentYear} RefkaMechri . With <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and care
          </p>
        </div>
      </div>
    </footer>
  );
};
