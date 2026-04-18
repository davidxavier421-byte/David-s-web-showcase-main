import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ad4h5zo";
const EMAILJS_TEMPLATE_ID = "template_zvw1tv3";
const EMAILJS_PUBLIC_KEY = "wNcE5bGAuF7TAG3Yn";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name.trim(), from_email: form.email.trim(), message: form.message.trim() },
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Message sent! 🎉", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "Failed to send", description: "Please try again or reach out via WhatsApp.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "davidxavier621@gmail.com",
      href: "mailto:davidxavier621@gmail.com",
      desc: "Drop me a message anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 78452 69756",
      href: "tel:+917845269756",
      desc: "Mon–Sat, 9am – 7pm IST",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Trichy, Tamil Nadu",
      href: null,
      desc: "Open to remote & relocation",
    },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/davidxavier421-byte", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/david-xavier-arulappan-872286403", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/917845269756?text=Hello%20David%20I%20saw%20your%20portfolio", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[80px]" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">Let's talk</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Whether it's a job opportunity, freelance project, or just a chat — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact info cards */}
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="font-semibold text-sm text-foreground hover:text-primary transition-colors duration-200 block truncate">
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm">{info.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground/70 mt-0.5">{info.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-xl p-5"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/8 text-muted-foreground hover:text-primary flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <s.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick contact buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-3"
            >
              <a
                href="https://wa.me/917845269756?text=Hello%20David%20I%20saw%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 hover:bg-green-500/20 hover:border-green-500/40 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="mailto:davidxavier621@gmail.com"
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-7 space-y-4"
            >
              <div className="mb-2">
                <h3 className="font-heading font-semibold text-lg">Send a Message</h3>
                <p className="text-muted-foreground text-sm">I typically reply within 24 hours.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Your Name</label>
                  <Input
                    placeholder="David Xavier"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="h-11 rounded-xl bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email Address</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="h-11 rounded-xl bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Message</label>
                <Textarea
                  placeholder="Hi David, I'd like to talk about..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="rounded-xl bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full h-12 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 shadow-glow hover:shadow-none transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                {sending ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="h-4 w-4" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
