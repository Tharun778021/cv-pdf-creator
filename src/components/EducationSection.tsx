import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">03. Education</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Academic background
            </h2>
          </div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">
                      Bachelor of Technology
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Computer Science & Engineering (AI & ML)
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-foreground font-medium">
                      Srinivasa Ramanujan Institute of Technology
                    </p>
                    <p className="text-muted-foreground">
                      Ananthapuramu, Andhra Pradesh
                    </p>
                    <p className="text-muted-foreground">
                      2023 - 2027 (Expected)
                    </p>
                  </div>

                  {/* Accreditations */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">NAAC 'A' Grade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">NBA Accredited</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">AICTE Approved</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-8 border-t border-border"
              >
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Data Structures",
                    "Algorithms",
                    "Database Systems",
                    "Python Programming",
                    "Cloud Computing",
                    "Natural Language Processing",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
