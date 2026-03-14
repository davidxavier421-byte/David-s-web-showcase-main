import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle2, Calendar, Building2, ArrowUpRight } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const responsibilities = [
    { text: "REST API development and thorough testing using Postman", tag: "Backend" },
    { text: "MySQL CRUD operations and database schema management", tag: "Database" },
    { text: "Frontend feature development with fully responsive design", tag: "Frontend" },
    { text: "Independent delivery of a static textile website for a real client", tag: "Client Work" },
  ];

  const tagColors: Record<string, string> = {
    Backend: "bg-blue-500/10 text-blue-600",
    Database: "bg-cyan-500/10 text-cyan-600",
    Frontend: "bg-indigo-500/10 text-indigo-600",
    "Client Work": "bg-primary/10 text-primary",
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">Where I've worked</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            {/* Header strip */}
            <div className="bg-gradient-primary p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-xl">Full Stack Developer Intern</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Building2 className="h-3.5 w-3.5 text-white/70" />
                      <p className="text-white/80 font-medium text-sm">Freshora Digital Technologies</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 self-start sm:self-auto">
                  <Calendar className="h-3.5 w-3.5 text-white/80" />
                  <span className="text-white/90 text-sm font-medium whitespace-nowrap">Dec 2025 – Jan 2026</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Completed a hands-on internship focused on full stack web development — from building REST APIs to delivering a real client project independently.
              </p>

              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Key Responsibilities</h4>
              <div className="space-y-3">
                {responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                    </div>
                    <div className="flex-1 flex items-start justify-between gap-3">
                      <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
                      <span className={`flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${tagColors[item.tag]}`}>
                        {item.tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills used */}
              <div className="mt-6 pt-5 border-t border-border/40">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Postman"].map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* "Open to work" note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-6 glass-card rounded-xl p-5 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <p className="text-sm text-foreground/70">
                <span className="font-semibold text-foreground">Open to full-time opportunities</span> — actively seeking roles in web development.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Hire Me <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
