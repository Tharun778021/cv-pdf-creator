import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "AWS AI & ML Virtual Intern",
      company: "EduSkills Foundation",
      location: "Virtual",
      duration: "April - June 2025",
      period: "10 weeks",
      description: [
        "Developed machine learning models for employee promotion prediction using Python",
        "Gained hands-on experience with AWS cloud services for AI/ML deployment",
        "Performed data preprocessing, cleaning, and feature engineering on real-world datasets",
        "Created flexible model objects capable of handling various data inputs",
        "Collaborated with team members and followed Agile methodologies",
      ],
      technologies: ["Python", "AWS", "Machine Learning", "Data Analysis", "Cloud Computing"],
    },
  ];

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">02. Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Where I've worked
            </h2>
          </div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-6 top-16 bottom-0 w-px bg-border hidden md:block" />

                <div className="glass rounded-2xl p-8 hover:bg-card/80 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
