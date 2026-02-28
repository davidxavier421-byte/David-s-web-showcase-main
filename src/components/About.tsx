import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="h-4 w-4 text-primary-foreground" />
              </div>
              Who I Am
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an aspiring Full Stack Developer with hands-on experience in both frontend and backend development. 
              Having completed a Full Stack Development course and internship, I bring practical knowledge of building 
              end-to-end web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to leverage modern web technologies to create impactful, user-friendly applications. 
              I'm passionate about clean code, responsive design, and continuous learning in the ever-evolving 
              world of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              Education
            </h3>
            <div className="space-y-6">
              {[
                { degree: "M.Sc. Computer Science", school: "National College, Trichy", year: "2024 – Present" },
                { degree: "B.Sc. Computer Science", school: "National College, Trichy", year: "2021 – 2024" },
              ].map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background" />
                  <h4 className="font-heading font-semibold">{edu.degree}</h4>
                  <p className="text-primary text-sm font-medium">{edu.school}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                    <Calendar className="h-3 w-3" /> {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
