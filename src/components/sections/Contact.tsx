import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@portfolio.com",
    href: "mailto:contact@portfolio.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 12 34 56 78",
    href: "tel:+33612345678",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Paris, France",
    href: "#",
  },
];

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !", {
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Contactez</span>-moi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Restons en contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Card className="glass-card p-6">
              <p className="text-muted-foreground">
                Je suis toujours ouvert à de nouvelles opportunités et collaborations.
                Que ce soit pour un stage, un projet freelance ou simplement pour échanger,
                n'hésitez pas à me contacter !
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  required
                  className="bg-secondary/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  className="bg-secondary/30"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <Input
                  id="subject"
                  placeholder="Sujet du message"
                  required
                  className="bg-secondary/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  rows={5}
                  required
                  className="bg-secondary/30 resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow">
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
