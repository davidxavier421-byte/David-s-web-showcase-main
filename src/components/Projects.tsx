import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Real Estate Management System",
    type: "Personal Project",
    description:
      "A fully dynamic real estate web application featuring an admin panel for managing banners, properties, images, pricing, and features with complete CRUD functionality.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL"],
    role: "Full Stack Developer",
    roleDetail: "Designed and developed the complete application from frontend UI to backend APIs and database management.",
    liveUrl: null,
    githubUrl: "https://github.com/davidxavier421-byte",
    gradient: "from-blue-500/10 to-cyan-500/10",
    accent: "from-blue-500 to-cyan-400",
    number: "01",
  },
  {
    title: "BlessaTexports – Textile Website",
    type: "Client Project",
    description:
      "A static textile website delivered to a real client with responsive frontend design and backend email inquiry handling for customer communication.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MySQL"],
    role: "Full Stack Developer",
    roleDetail: "Built the entire website independently, including responsive design and backend email integration.",
    liveUrl: null,
    githubUrl: "https://github.com/davidxavier421-byte",
    gradient: "from-indigo-500/10 to-blue-500/10",
    accent: "from-indigo-500 to-blue-400",
    number: "02",
  },
  {
    title: "DXplore – Travel Agency Web App",
    type: "Personal Project",
    description:
      "A fully responsive travel agency web app built with React.js + Vite and Tailwind CSS, featuring 30+ curated tour packages across India and the world. Includes a Standard/Luxury pricing toggle, direct WhatsApp Business API integration for instant booking inquiries, and smooth page transitions — no backend required.",
    tech: ["React.js", "Vite", "Tailwind CSS", "WhatsApp API"],
    role: "Full Stack Developer",
    roleDetail: "Designed and built the entire application independently — UI, routing, package data, pricing toggle, and WhatsApp integration.",
    liveUrl: "https://dxplore.vercel.app/",
    githubUrl: "https://github.com/davidxavier421-byte",
    gradient: "from-orange-500/10 to-amber-500/10",
    accent: "from-orange-500 to-amber-400",
    number: "03",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/4 blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">What I've built</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Real-world applications I've designed and built from scratch — frontend to backend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden hover:card-shadow-hover hover:-translate-y-2 transition-all duration-500"
            >
              {/* Visual header */}
              <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: "linear-gradient(hsl(221 83% 53% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(221 83% 53% / 0.1) 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                  }}
                />
                {/* Big project number */}
                <span className={`font-heading text-8xl font-black bg-gradient-to-br ${project.accent} bg-clip-text text-transparent opacity-20 select-none`}>
                  {project.number}
                </span>
                {/* Icon */}
                <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-md`}>
                  <FolderGit2 className="h-5 w-5 text-white" />
                </div>
                {/* Links */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      title="Live Demo"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      title="View Code"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge className="text-xs bg-primary/10 text-primary border-0 font-medium">
                    {project.type}
                  </Badge>
                </div>

                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="text-xs text-muted-foreground mb-4 bg-muted/40 rounded-lg px-3 py-2">
                  <span className="font-semibold text-foreground/70">Role: </span>
                  {project.role} — {project.roleDetail}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/davidxavier421-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border/60 hover:border-primary/40 px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" />
            View all projects on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
