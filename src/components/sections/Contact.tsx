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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="gradient-text">Get in</span> Touch
           </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Questions? Projects? Reach out anytime!          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">
                    Stay connected              </h3>
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
             I’m always open to exploring new opportunities and collaborations.
              
            Whether it’s for an internship, a freelance project, or just to connect, don’t hesitate to reach out! 
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
           <form onSubmit={handleSubmit} className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Name
    </label>
    <Input
      id="name"
      placeholder="Your name"
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
      placeholder="your@email.com"
      required
      className="bg-secondary/30"
    />
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium mb-2">
      Subject
    </label>
    <Input
      id="subject"
      placeholder="Message subject"
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
      placeholder="Your message..."
      rows={5}
      required
      className="bg-secondary/30 resize-none"
    />
  </div>

  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow">
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
