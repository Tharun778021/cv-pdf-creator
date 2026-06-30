import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Languages, Heart, Target, Rocket, BadgeCheck } from "lucide-react";

const AdditionalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const languages = [
    { name: "Telugu", level: "Native" },
    { name: "English", level: "Working" },
  ];

  const hobbies = ["Nature Photography", "Listening to music", "Cooking"];

  const goals = [
    {
      icon: Target,
      label: "Short-term",
      text: "Secure an internship to apply technical skills and gain industry exposure.",
    },
    {
      icon: Rocket,
      label: "Long-term",
      text: "Work in a reputed MNC and contribute to impactful projects while continuously learning.",
    },
  ];

  return (
    <section id="additional" className="section-padding relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">06. Additional</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              More about me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>
              <ul className="space-y-3">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between text-sm border-b border-border/40 pb-2 last:border-0"
                  >
                    <span className="font-medium">{l.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Hobbies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-semibold mb-5">Career Goals</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {goals.map((g) => (
                <div
                  key={g.label}
                  className="p-4 rounded-xl bg-card/40 border border-border/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <g.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">{g.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {g.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass rounded-2xl p-6 flex items-start gap-3"
          >
            <BadgeCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground italic">
              I hereby declare that the above information is correct and true as
              per my knowledge.
              <span className="block mt-2 not-italic text-foreground font-medium">
                — S. Tharun
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalSection;
