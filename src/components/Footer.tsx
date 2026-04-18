import { ArrowUp, Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Github, href: "https://github.com/davidxavier421-byte", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/david-xavier-arulappan-872286403", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/917845269756", label: "WhatsApp" },
    { icon: Mail, href: "mailto:davidxavier621@gmail.com", label: "Email" },
  ];

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-primary opacity-40" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(hsl(217 91% 60%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <a href="#home" className="inline-block font-heading text-2xl font-extrabold mb-3">
              <span className="text-gradient">DX</span>
              <span className="text-background/30 font-light mx-1">/</span>
              <span className="text-background/80 text-lg font-medium">Portfolio</span>
            </a>
            <p className="text-background/50 text-sm leading-relaxed max-w-xs">
              Full Stack Developer based in Trichy, India. Building modern, real-world web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold text-background/40 uppercase tracking-wider mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-background/40 uppercase tracking-wider mb-4">Connect</p>
            <div className="space-y-2 mb-5">
              <a href="mailto:davidxavier621@gmail.com" className="block text-sm text-background/60 hover:text-background transition-colors duration-200">
                davidxavier621@gmail.com
              </a>
              <a href="tel:+917845269756" className="block text-sm text-background/60 hover:text-background transition-colors duration-200">
                +91 78452 69756
              </a>
              <p className="text-sm text-background/40">Trichy, Tamil Nadu, India</p>
            </div>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg border border-background/10 hover:border-background/30 hover:bg-background/10 text-background/50 hover:text-background flex items-center justify-center transition-all duration-200"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background/40 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} David Xavier A  Built with
            
            using React & Tailwind
          </p>
          <a
            href="https://david-resume-pdf-20260311-180430-0000.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-background/50 hover:text-background transition-colors duration-200"
          >
            Download Resume →
          </a>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#home"
        className="absolute right-6 bottom-6 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-glow hover:-translate-y-1 transition-all duration-300"
        title="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </footer>
  );
};

export default Footer;
