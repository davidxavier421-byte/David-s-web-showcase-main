import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle2, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    "REST API development and testing using Postman",
    "MySQL CRUD operations and database management",
    "Frontend feature development with responsive design",
    "Independent development of a static textile website for a real client",
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">Where I've worked</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Side accent */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-primary rounded-l-2xl" />

            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Briefcase className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl mb-1">Full Stack Developer Intern</h3>
                <p className="text-primary font-semibold mb-2">Freshora Digital Technologies</p>
                <p className="text-muted-foreground text-sm flex items-center gap-1.5 mb-6">
                  <Calendar className="h-3.5 w-3.5" />
                  December 2025 – January 2026
                </p>

                <div className="space-y-3">
                  {responsibilities.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
