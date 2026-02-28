import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Code2, Server, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Clean and user-friendly static web designs using HTML, CSS, and Bootstrap with modern aesthetics.",
    color: "from-primary to-accent",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with seamless frontend-backend integration.",
    color: "from-primary to-accent",
  },
  {
    icon: Server,
    title: "Backend API Development",
    description: "Developing RESTful CRUD APIs with thorough testing and debugging using Postman.",
    color: "from-primary to-accent",
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    description: "Mobile-friendly websites built with Bootstrap ensuring pixel-perfect experiences across devices.",
    color: "from-primary to-accent",
  },
  {
    icon: Layers,
    title: "Dynamic Websites",
    description: "Admin-managed dynamic websites with editable banners, content, and feature management.",
    color: "from-primary to-accent",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
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
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-7 hover:card-shadow-hover hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                <span className="text-xs font-bold text-primary/40 font-heading">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading font-semibold text-lg mb-2 mt-1">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
