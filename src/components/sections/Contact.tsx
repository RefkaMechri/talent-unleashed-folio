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
    value: "ref.kaa2002@gmail.com",
    href: "mailto:ref.kaa2002@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 95 143 836",
    href: "tel:+21695143836",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Monastir, Tunisia",
    href: "https://www.bing.com/maps/search?mepi=0%7E%7EEmbedded%7ELargeMapLink&ty=18&vdpid=7214452655249162241&v=2&sV=1&FORM=MIRE&q=Monastir%2C+Gouvernorat+Monastir%2C+Tunisie&ss=id.sid%3Ab281cb3d-bf68-e4ac-1396-284768f3912e&ppois=35.77075958251953_10.828051567077637_Monastir%2C+Gouvernorat+Monastir%2C+Tunisie_%7E&cp=35.770760%7E10.828052&lvl=16&style=r",
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
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;contact /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Open to opportunities and collaborations
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="code-card p-6">
              <h3 className="text-xl font-semibold mb-6 font-mono">
                // Contact Info
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 p-3 rounded bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">{info.label}</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors font-mono">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Card className="glass-card p-6">
              <p className="text-muted-foreground">
             I’m always open to exploring new opportunities and collaborations.
              
            Whether it’s for an internship, a freelance project, or just to connect, don’t hesitate to reach out! 
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono">Name</label>
                <Input id="name" placeholder="Your name" required className="bg-secondary/30 border-primary/20 font-mono" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-secondary/30 border-primary/20 font-mono"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 font-mono">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  required
                  className="bg-secondary/30 border-primary/20 font-mono"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-secondary/30 border-primary/20 resize-none font-mono"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 hover:shadow-glow font-mono">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
