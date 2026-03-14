import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target, Sparkles, MapPin, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { emoji: "⚡", text: "Full Stack Developer Intern at Freshora Digital" },
    { emoji: "🎓", text: "M.Sc. Computer Science — National College, Trichy" },
    { emoji: "🌐", text: "Built & delivered real client projects" },
    { emoji: "📍", text: "Based in Trichy, Tamil Nadu, India" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">Get to know me</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* LEFT: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Target className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with real-world experience in building end-to-end web applications. From designing responsive UIs to building robust REST APIs and database management — I love owning the entire product lifecycle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my M.Sc. in Computer Science at National College, Trichy, I combine academic knowledge with practical internship experience. My goal is to join a team where I can contribute meaningful software and keep growing as an engineer.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 glass-card rounded-xl p-4 hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <span className="text-xl">{h.emoji}</span>
                  <p className="text-sm font-medium text-foreground/80">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold">Education</h3>
              </div>

              <div className="space-y-7">
                {[
                  {
                    degree: "M.Sc. Computer Science",
                    school: "National College, Trichy",
                    year: "2024 – Present",
                    status: "ongoing",
                  },
                  {
                    degree: "B.Sc. Computer Science",
                    school: "National College, Trichy",
                    year: "2021 – 2024",
                    status: "completed",
                  },
                ].map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="relative pl-5 border-l-2 border-primary/20"
                  >
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background" />
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-sm leading-snug">{edu.degree}</h4>
                      {edu.status === "ongoing" && (
                        <span className="flex-shrink-0 text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">Active</span>
                      )}
                    </div>
                    <p className="text-primary text-sm font-medium">{edu.school}</p>
                    <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" /> {edu.year}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Location card */}
              <div className="mt-7 pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Trichy, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
