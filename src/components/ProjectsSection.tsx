import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Globe, MessageSquareText, Palette, FileText, Sparkles } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Globe, text: "Generate homepage copy with clear value proposition" },
    { icon: FileText, text: "Create service page descriptions tailored to business type" },
    { icon: MessageSquareText, text: "Write strong CTA sections (contact, booking, enquiry)" },
    { icon: Palette, text: "Adapt tone for different local businesses (salon, cafe, clinic, agency)" },
    { icon: Sparkles, text: "Ensure content is simple, persuasive, and website-ready" },
  ];

  const skills = [
    "Prompt Engineering",
    "Web Copywriting",
    "Conversion-Focused Messaging",
    "Client Requirement Analysis",
    "AI Content Workflows",
  ];

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">04. Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured Work
            </h2>
          </div>

          {/* Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl overflow-hidden"
          >
            {/* Project Header */}
            <div className="p-8 md:p-10 border-b border-border/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Bot className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">AI / NLP Project</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-1">
                    AI Website Copy Generator
                  </h3>
                  <p className="text-muted-foreground mt-1">for Local Businesses</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                An intelligent content generation system that crafts professional, conversion-optimized website copy for local businesses. Leverages prompt engineering and AI workflows to produce homepage content, service descriptions, and compelling CTAs — tailored to each business type and tone.
              </p>
            </div>

            {/* Features & Skills */}
            <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/50">
              {/* Key Features */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Key Features</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-0.5 p-1.5 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors shrink-0">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div className="md:col-span-2 p-8 md:p-10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Skills Gained</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.06 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Proficiency */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Project Proficiency</span>
                    <span className="text-sm font-mono text-primary font-bold">95%</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "95%" } : {}}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
