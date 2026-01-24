import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 75 },
        { name: "JavaScript", level: 65 },
      ],
    },
    {
      name: "AI / ML",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis", level: 80 },
        { name: "Deep Learning", level: 70 },
      ],
    },
    {
      name: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Git", level: 75 },
        { name: "Docker", level: 60 },
      ],
    },
    {
      name: "Libraries",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">04. Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Technical expertise
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                  {category.name}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 0.8,
                            delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "TensorFlow",
                "Keras",
                "Matplotlib",
                "Jupyter",
                "VS Code",
                "Linux",
                "REST APIs",
                "Agile",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
