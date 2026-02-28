import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Real Estate Management System",
    type: "Personal Project",
    description:
      "A fully dynamic real estate web application featuring an admin panel for managing banners, properties, images, pricing, and features with complete CRUD functionality.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL"],
    role: "Full Stack Developer – Designed and developed the complete application from frontend UI to backend APIs and database management.",
  },
  {
    title: "BlessaTexports – Textile Website",
    type: "Client Project",
    description:
      "A static textile website delivered to a real client with responsive frontend design and backend email inquiry handling for customer communication.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MySQL"],
    role: "Full Stack Developer – Built the entire website independently, including responsive design and backend email integration.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">What I've built</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden hover:card-shadow-hover hover:-translate-y-2 transition-all duration-500"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-primary" />

              {/* Header area with icon */}
              <div className="p-7 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FolderGit2 className="h-6 w-6 text-primary" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" />
                </div>

                <Badge
                  variant="secondary"
                  className="font-medium text-xs mb-3 bg-primary/10 text-primary border-0"
                >
                  {project.type}
                </Badge>

                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
              </div>

              <div className="px-7 pb-7">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <p className="text-sm mb-5">
                  <span className="font-semibold text-foreground/80">Role:</span>{" "}
                  <span className="text-muted-foreground">{project.role}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
