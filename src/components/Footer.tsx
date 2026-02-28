import { Heart, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-foreground text-background py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-6">
        <a href="#home" className="font-heading text-2xl font-bold text-gradient">
          {"<DX />"}
        </a>

        <div className="flex items-center gap-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-background/60 hover:text-background text-sm transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="w-full max-w-xs h-px bg-background/10" />

        <div className="flex items-center gap-2 text-background/50 text-sm">
          <span></span>
          {/* <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" /> */}
          <span>© {new Date().getFullYear()} David Xavier A</span>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#home"
        className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
