import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skills: { category: string; icon: LucideIcon; items: { name: string; level: number }[] }[] = [
  { category: "Frontend", icon: Code2, items: [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Bootstrap", level: 85 },
  ]},
  { category: "Backend", icon: Server, items: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 75 },
  ]},
  { category: "Database", icon: Database, items: [
    { name: "MySQL", level: 80 },
  ]},
  { category: "Tools", icon: Wrench, items: [
    { name: "Git & GitHub", level: 80 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "MS Office", level: 85 },
  ]},
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">What I know</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:card-shadow-hover hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <group.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-primary"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: gi * 0.1 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
