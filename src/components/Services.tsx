import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Code2, Server, Smartphone, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web applications with seamless frontend-backend integration, from database design to polished UI.",
    tags: ["React", "Node.js", "MySQL"],
    number: "01",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust RESTful APIs built with Express.js, thoroughly tested with Postman and backed by MySQL databases.",
    tags: ["Express.js", "REST API", "Postman"],
    number: "02",
  },
  {
    icon: Palette,
    title: "Responsive Web Design",
    description: "Clean, modern, and mobile-first designs using Bootstrap and Tailwind CSS — pixel-perfect across all devices.",
    tags: ["Bootstrap", "Tailwind", "CSS3"],
    number: "03",
  },
  {
    icon: Layers,
    title: "Dynamic Admin Panels",
    description: "Admin-managed dashboards with complete CRUD functionality — editable banners, content, pricing and more.",
    tags: ["CRUD", "MySQL", "Node.js"],
    number: "04",
  },
  {
    icon: Smartphone,
    title: "Static Business Websites",
    description: "Fast, responsive static websites for businesses — delivered with email inquiry handling and clean code.",
    tags: ["HTML", "CSS", "JavaScript"],
    number: "05",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">What I offer</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            From design to deployment — I can help you build the web presence your business needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card rounded-2xl p-6 hover:card-shadow-hover hover:-translate-y-2 transition-all duration-500 relative overflow-hidden cursor-default"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.025] transition-opacity duration-500 rounded-2xl" />

              {/* Top row */}
              <div className="flex items-start justify-between mb-5 relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-400">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-heading text-4xl font-black text-muted/40 group-hover:text-primary/10 transition-colors duration-300 select-none">
                  {service.number}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 font-medium border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          {/* <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
            className="group glass-card rounded-2xl p-6 hover:card-shadow-hover hover:-translate-y-2 transition-all duration-500 bg-gradient-primary flex flex-col items-start justify-between min-h-[180px] cursor-pointer"
          >
            <div>
              <p className="text-white/70 text-sm font-medium mb-2">Have a project in mind?</p>
              <h3 className="font-heading font-bold text-white text-lg leading-snug">
                Let's build something great together
              </h3>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold text-sm mt-4 group-hover:gap-3 transition-all duration-300">
              Get in touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.a> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
