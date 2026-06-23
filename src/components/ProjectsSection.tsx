import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Globe, MessageSquareText, Palette, FileText, Sparkles, Github, Camera, ScanLine, Cpu, Car, CloudSun, CloudRain, Wind, Thermometer, LineChart, TrendingUp, BarChart3, Database, Activity, Briefcase, GraduationCap, Users, Target, Compass } from "lucide-react";

const projects = [
  {
    icon: Bot,
    tag: "AI / NLP Project",
    title: "AI Website Copy Generator",
    subtitle: "for Local Businesses",
    description:
      "An intelligent content generation system that crafts professional, conversion-optimized website copy for local businesses. Leverages prompt engineering and AI workflows to produce homepage content, service descriptions, and compelling CTAs — tailored to each business type and tone.",
    features: [
      { icon: Globe, text: "Generate homepage copy with clear value proposition" },
      { icon: FileText, text: "Create service page descriptions tailored to business type" },
      { icon: MessageSquareText, text: "Write strong CTA sections (contact, booking, enquiry)" },
      { icon: Palette, text: "Adapt tone for different local businesses (salon, cafe, clinic, agency)" },
      { icon: Sparkles, text: "Ensure content is simple, persuasive, and website-ready" },
    ],
    skills: [
      "Prompt Engineering",
      "Web Copywriting",
      "Conversion-Focused Messaging",
      "Client Requirement Analysis",
      "AI Content Workflows",
    ],
    proficiency: 95,
    repo: null as string | null,
  },
  {
    icon: Car,
    tag: "Computer Vision Project",
    title: "Licence Plate Detector",
    subtitle: "Real-time vehicle plate recognition",
    description:
      "A computer vision system that automatically detects and recognizes vehicle licence plates from images and video streams. Combines object detection with OCR to extract plate numbers — useful for parking automation, traffic monitoring, and security applications.",
    features: [
      { icon: Camera, text: "Detect vehicle licence plates from images and video" },
      { icon: ScanLine, text: "Extract plate text using OCR for accurate recognition" },
      { icon: Cpu, text: "Process frames in near real-time for live use cases" },
      { icon: Sparkles, text: "Handle varying lighting, angles, and plate formats" },
    ],
    skills: [
      "Computer Vision",
      "OpenCV",
      "OCR",
      "Python",
      "Image Processing",
    ],
    proficiency: 90,
    repo: "https://github.com/Tharun778021/licence-plate-detector",
  },
  {
    icon: CloudSun,
    tag: "Data Science Project",
    title: "Weather Analysis",
    subtitle: "Climate data insights & visualization",
    description:
      "An end-to-end weather data analysis project that explores historical climate patterns, visualizes trends across temperature, humidity, and precipitation, and uncovers actionable insights using Python data science tools.",
    features: [
      { icon: Thermometer, text: "Analyze temperature trends across time periods" },
      { icon: CloudRain, text: "Study precipitation and humidity patterns" },
      { icon: Wind, text: "Compare wind speed and seasonal variations" },
      { icon: LineChart, text: "Visualize insights with clean, interactive charts" },
    ],
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "EDA"],
    proficiency: 92,
    repo: "https://github.com/Tharun778021/weather-analysis",
  },
  {
    icon: Compass,
    tag: "Web App Project",
    title: "Talent Pathways",
    subtitle: "Career discovery & guidance platform",
    description:
      "A modern web application designed to help students and early-career professionals explore career pathways, discover relevant skills, and connect with the right opportunities. Built with a clean, responsive interface to guide users from learning to landing the right role.",
    features: [
      { icon: Compass, text: "Explore curated career paths across multiple domains" },
      { icon: GraduationCap, text: "Personalized skill and learning recommendations" },
      { icon: Briefcase, text: "Browse internships, jobs, and growth opportunities" },
      { icon: Target, text: "Goal-oriented roadmap for each chosen pathway" },
      { icon: Users, text: "Clean, accessible UI for students and mentors" },
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "UI/UX Design",
      "Responsive Web Apps",
    ],
    proficiency: 88,
    repo: "https://github.com/Tharun778021/talent-pathways-08",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">04. Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Work</h2>
          </div>

          <div className="space-y-10">
            {projects.map((project, pIndex) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + pIndex * 0.15 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="p-8 md:p-10 border-b border-border/50">
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <project.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                          {project.tag}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mt-1">{project.title}</h3>
                        <p className="text-muted-foreground mt-1">{project.subtitle}</p>
                      </div>
                    </div>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/50">
                  <div className="md:col-span-3 p-8 md:p-10">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                      Key Features
                    </h4>
                    <div className="space-y-4">
                      {project.features.map((feature, index) => (
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

                  <div className="md:col-span-2 p-8 md:p-10">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
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

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="mt-8"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Project Proficiency</span>
                        <span className="text-sm font-mono text-primary font-bold">
                          {project.proficiency}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${project.proficiency}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
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

export default ProjectsSection;
