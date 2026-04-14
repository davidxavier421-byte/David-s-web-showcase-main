import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  
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
    number: "01",
  },
    {
  title: "FitForge – Gym & Fitness Web App",
  type: "Personal Project",
  description:
    "A fully responsive gym and fitness web app built with React.js + Vite, featuring immersive Three.js 3D dumbbell animation, multi-page routing across Home, Programs, Trainers, Pricing, and Contact. Includes EmailJS integration for direct contact form submissions, WhatsApp Business API for instant inquiries, a billing toggle with 15% annual discount, and a cyberpunk-inspired dark UI with neon accents — no backend required.",
  tech: ["React.js", "Vite", "Three.js", "EmailJS", "WhatsApp API", "Tailwind CSS"],
  role: "Full Stack Developer",
  roleDetail:
    "Designed and built the entire application independently — 3D animations, UI/UX, multi-page routing, pricing logic, EmailJS contact form, and WhatsApp integration.",
  liveUrl: "https://fitforge12.netlify.app/",
  githubUrl: "https://github.com/davidxavier421-byte",
  gradient: "from-cyan-500/10 to-green-500/10",
  accent: "from-cyan-400 to-green-400",
  number: "02",
},
 
    {
    title: "D Ai — Neural AI Chatbot",
    type: "Personal Project",
    description:
      "A full-stack AI chatbot web app built with React, TypeScript, and Node.js, powered by Google Gemini. Features user authentication with JWT, persistent chat history, voice input & text-to-speech, and a fully responsive design for mobile and desktop. Built and deployed independently on Render.",
    tech: ["React 19", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Google Gemini API", "JWT Auth", "Vite"],
    role: "Full Stack Developer",
    roleDetail: "Designed and built the entire application independently — UI, backend API, authentication, Gemini integration, voice I/O, and deployment.",
    liveUrl: "https://d-ai-1.onrender.com",
    githubUrl: "https://github.com/davidxavier421-byte",
    gradient: "from-violet-500/10 to-purple-500/10",
    accent: "from-violet-500 to-purple-400",
    number: "03",
  },
  {
    title: "BlessaTexports – Textile Website",
    type: "Client Project",
    description:
      "A static textile website delivered to a real client with responsive frontend design and backend email inquiry handling for customer communication.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MySQL"],
    role: "Full Stack Developer",
    roleDetail: "During Internship at Freshora Digital Technologies Built the entire website independently, including responsive design and backend email integration.",
    liveUrl: "https://www.blessatexports.com/",
    githubUrl: "https://github.com/davidxavier421-byte",
    gradient: "from-indigo-500/10 to-blue-500/10",
    accent: "from-indigo-500 to-blue-400",
    number: "04",
  },
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
    number: "05",
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
              {/* Browser preview header */}
              <div className="relative h-56 bg-muted/30 overflow-hidden flex flex-col">
                {/* Browser chrome bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/60 border-b border-border/40 shrink-0 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="flex-1 mx-2 bg-background/70 rounded text-[10px] text-muted-foreground px-2 py-0.5 truncate border border-border/30">
                    {project.liveUrl ?? `github.com/davidxavier421-byte`}
                  </span>
                  {/* Links */}
                  <div className="flex items-center gap-1.5 ml-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 bg-background/80 backdrop-blur-sm rounded flex items-center justify-center text-foreground hover:text-primary transition-colors"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="h-3 w-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 bg-background/80 backdrop-blur-sm rounded flex items-center justify-center text-foreground hover:text-primary transition-colors"
                        title="View Code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Preview area */}
                {project.liveUrl ? (
                  <div className="relative flex-1 overflow-hidden">
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                      className="absolute top-0 left-0 origin-top-left pointer-events-none border-none"
                      style={{ width: "250%", height: "250%", transform: "scale(0.4)" }}
                    />
                  </div>
                ) : (
                  <div className={`flex-1 relative bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className={`font-heading text-8xl font-black bg-gradient-to-br ${project.accent} bg-clip-text text-transparent opacity-20 select-none`}>
                      {project.number}
                    </span>
                    <div className={`absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-md`}>
                      <FolderGit2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
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
