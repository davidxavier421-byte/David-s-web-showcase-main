import { motion } from "framer-motion";
import { ArrowDown, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Open to Opportunities
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">David Xavier A</span>
            </h1>

            <p className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-foreground/80">
              Aspiring Full Stack Developer
            </p>

            <p className="text-muted-foreground max-w-xl mb-10 leading-relaxed text-base lg:text-lg">
              Currently pursuing an M.Sc. in Computer Science with hands-on experience from a Full Stack Development internship. Passionate about building real-world web applications using modern frontend and backend technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="shadow-glow" asChild>
                <a href="#projects">
                  <ArrowDown className="mr-2 h-4 w-4" /> View Projects
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Send className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
  <a 
    href="https://wa.me/917845269756?text=Hello%20David%20I%20saw%20your%20portfolio"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Send className="mr-2 h-4 w-4" /> WhatsApp
  </a>
</Button>
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "2+", label: "Projects" },
                { value: "1", label: "Internship" },
                { value: "10+", label: "Skills" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-heading text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse-ring" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="David Xavier A"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 -right-2 w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xs text-center leading-tight shadow-glow rotate-6"
              >
                Full Stack<br />Dev
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        {/* <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
