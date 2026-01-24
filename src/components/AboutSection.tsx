import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cloud, Code2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and intelligent systems",
    },
    {
      icon: Cloud,
      title: "AWS Cloud",
      description: "Deploying scalable AI solutions on AWS",
    },
    {
      icon: Code2,
      title: "Python Development",
      description: "Creating efficient, clean, and maintainable code",
    },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">01. About</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Get to know me
            </h2>
          </div>

          {/* About content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student specializing in{" "}
                <span className="text-foreground font-medium">
                  Artificial Intelligence & Machine Learning
                </span>{" "}
                at Srinivasa Ramanujan Institute of Technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through my AWS AI & ML Virtual Internship, I've gained hands-on experience in building machine learning models, data preprocessing, and deploying AI solutions on cloud infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm driven by the challenge of transforming raw data into actionable insights and creating intelligent systems that solve real-world problems.
              </p>
            </motion.div>

            {/* Profile visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-subtle border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-gradient opacity-20">ST</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-sm text-muted-foreground font-mono">234G1A33H6</p>
                  <p className="text-foreground font-medium">CSE (AI & ML)</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
