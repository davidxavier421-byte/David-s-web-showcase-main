import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Web Application Builder",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const floatingTech = [
    { label: "React", top: "10%", right: "8%", delay: 0 },
    { label: "Node.js", top: "30%", right: "2%", delay: 0.3 },
    { label: "MySQL", bottom: "30%", right: "6%", delay: 0.6 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[80px] animate-float" style={{ animationDelay: "2s" }} />

      {/* Floating tech badges (desktop only) */}
      {floatingTech.map((t) => (
        <motion.div
          key={t.label}
          className="absolute hidden xl:flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border/60 rounded-full px-3 py-1.5 text-xs font-semibold text-foreground/70 shadow-sm"
          style={{ top: t.top, right: t.right, bottom: t.bottom, left: t.left }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + t.delay, duration: 0.4 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {t.label}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT: Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4 tracking-tight"
            >
              Hi, I'm
              <br />
              <span className="text-gradient">David Xavier</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl font-heading font-semibold text-foreground/70 mb-6 h-8 flex items-center justify-center lg:justify-start gap-1"
            >
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-6 bg-primary animate-pulse ml-0.5" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-lg mb-10 leading-relaxed text-base lg:text-lg"
            >
              M.Sc. Computer Science student at National College, Trichy — building real-world full stack web applications with modern frontend and backend technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 shadow-glow hover:shadow-none transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="https://david-resume-pdf-20260311-180430-0000.tiiny.site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-background/60 backdrop-blur-sm text-foreground font-semibold px-6 py-3 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social + Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center lg:items-end justify-center lg:justify-start gap-6"
            >
              {/* Socials */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/davidxavier421-byte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-primary/40 hover:bg-primary/8 text-muted-foreground hover:text-primary transition-all duration-200"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://linkedin.com/in/david-xavier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-primary/40 hover:bg-primary/8 text-muted-foreground hover:text-primary transition-all duration-200"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://wa.me/917845269756?text=Hello%20David%20I%20saw%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-primary/40 hover:bg-primary/8 text-muted-foreground hover:text-primary transition-all duration-200 text-sm font-bold"
                >
                  WA
                </a>
              </div>

              <div className="hidden sm:block w-px h-8 bg-border" />

              {/* Stats */}
              <div className="flex items-center gap-6">
                {[
                  { value: "4+", label: "Projects" },
                  { value: "1", label: "Internship" },
                  { value: "13+", label: "Skills" },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <p className="font-heading text-xl font-bold text-gradient leading-none">{s.value}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Photo */}
          <motion.div
            className="flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-10 blur-2xl animate-pulse" />

              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="David Xavier A"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
                {/* Overlay shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-full" />
              </div>

              {/* Floating info cards */}
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -left-4 sm:-left-10 top-8 bg-background/90 backdrop-blur-sm border border-border/60 rounded-2xl px-4 py-2.5 shadow-lg"
              >
                <p className="text-xs text-muted-foreground">Currently studying</p>
                <p className="text-sm font-semibold text-foreground">M.Sc. CS</p>
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -right-4 sm:-right-8 bottom-12 bg-primary text-primary-foreground rounded-2xl px-4 py-2.5 shadow-glow"
              >
                <p className="text-xs opacity-80">Full Stack </p>
                <p className="text-sm font-semibold">Developer</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-primary/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
