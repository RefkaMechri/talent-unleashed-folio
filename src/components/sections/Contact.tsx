import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ref.kaa2002@gmail.com",
    href: "mailto:ref.kaa2002@gmail.com",
    color: "from-primary to-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 95 143 836",
    href: "tel:+21695143836",
    color: "from-accent to-yellow-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Monastir, Tunisia",
    href: "https://www.bing.com/maps/search?mepi=0%7E%7EEmbedded%7ELargeMapLink&ty=18&vdpid=7214452655249162241&v=2&sV=1&FORM=MIRE&q=Monastir%2C+Gouvernorat+Monastir%2C+Tunisie&ss=id.sid%3Ab281cb3d-bf68-e4ac-1396-284768f3912e&ppois=35.77075958251953_10.828051567077637_Monastir%2C+Gouvernorat+Monastir%2C+Tunisie_%7E&cp=35.770760%7E10.828052&lvl=16&style=r",
    color: "from-green-500 to-emerald-500",
  },
];

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;contact /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info - 2 columns */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="code-card p-5 group hover:scale-105 hover:border-l-8 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground font-mono mb-1">{info.label}</p>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}

            <Card className="code-card p-6">
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                Open to opportunities, collaborations, and new challenges. Let's connect!
              </p>
            </Card>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="code-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-secondary/30 border-border/50 font-mono text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-secondary/30 border-border/50 font-mono text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-mono font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    required
                    className="bg-secondary/30 border-border/50 font-mono text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-secondary/30 border-border/50 resize-none font-mono text-sm"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-tech hover:shadow-glow font-mono group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
