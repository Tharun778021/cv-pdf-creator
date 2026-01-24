import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "tharun@example.com",
      href: "mailto:tharun@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tharun",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/tharun",
      href: "https://github.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ananthapuramu, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section header */}
          <span className="text-primary font-mono text-sm">05. Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-8 py-6 text-lg rounded-xl glow"
            >
              <a href="mailto:tharun@example.com">
                <Send className="w-5 h-5 mr-2" />
                Say Hello
              </a>
            </Button>
          </motion.div>

          {/* Contact links grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block p-6 rounded-xl glass hover:bg-card/80 transition-all duration-300 group"
                  >
                    <link.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                    <p className="text-foreground font-medium truncate">{link.value}</p>
                  </a>
                ) : (
                  <div className="p-6 rounded-xl glass">
                    <link.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                    <p className="text-foreground font-medium">{link.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-24 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Designed & Built by{" "}
          <span className="text-primary font-medium">S. Tharun</span>
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          © 2025 All rights reserved
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
