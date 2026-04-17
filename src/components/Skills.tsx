import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, Server, Wrench, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skills: {
  category: string;
  icon: LucideIcon;
  color: string;
  items: { name: string; level: number; icon?: string }[];
}[] = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    items: [
      { name: "HTML5", level: 90, icon: "🌐" },
      { name: "CSS3", level: 85, icon: "🎨" },
      { name: "JavaScript", level: 80, icon: "⚡" },
      { name: "React", level: 75, icon: "⚛️" },
      { name: "TypeScript", level: 70, icon: "🔷" },
      { name: "Tailwind CSS", level: 70, icon: "💨" },
      { name: "Bootstrap", level: 85, icon: "🅱️" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-blue-600 to-indigo-500",
    items: [
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "Express.js", level: 75, icon: "🚀" },
      { name: "REST APIs", level: 78, icon: "🔌" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    items: [
      { name: "MySQL", level: 80, icon: "🗄️" },
    ],
  },
  {
    category: "Tools & Other",
    icon: Wrench,
    color: "from-indigo-500 to-blue-400",
    items: [
      { name: "Git & GitHub", level: 80, icon: "🐙" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Vite", level: 72, icon: "⚡" },
      { name: "MS Office", level: 85, icon: "📄" },
    ],
  },
];

const SkillBar = ({ name, level, icon, delay }: { name: string; level: number; icon?: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          {icon && <span className="text-sm">{icon}</span>}
          <span className="text-sm font-medium text-foreground/80">{name}</span>
        </div>
        <span className="text-xs font-semibold text-primary">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">Technical expertise</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            A collection of technologies I've used to build real-world projects from frontend to backend.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:card-shadow-hover hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/40">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <group.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{group.category}</h3>
                  <p className="text-xs text-muted-foreground">{group.items.length} skills</p>
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={gi * 0.1 + si * 0.08 + 0.3}
                  />
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
