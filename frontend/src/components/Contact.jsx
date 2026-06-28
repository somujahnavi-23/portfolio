import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolioData";

export const Contact = () => {
  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, testId: "contact-email" },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`, testId: "contact-phone" },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, testId: "contact-linkedin" },
    { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github, testId: "contact-github" },
    { icon: MapPin, label: "Location", value: profile.location, href: null, testId: "contact-location" },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="relative z-10 bg-[#050505] py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-volt mb-4 flex items-center gap-3"
        >
          <span className="text-zinc-600">06</span>
          <span className="h-px w-8 bg-volt inline-block" />
          Get In Touch
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-semibold leading-[0.95]"
            >
              Let's <span className="text-volt">talk.</span>
            </motion.h2>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md">
              Open to data & business analyst roles. Have a question or an opportunity? The fastest way to reach me is email or LinkedIn — I read every message.
            </p>
            <a
              href={`mailto:${profile.email}`}
              data-testid="contact-cta-email"
              className="inline-flex items-center gap-2 mt-8 bg-volt hover:bg-volt-hover text-white px-7 py-3.5 font-medium transition-colors"
            >
              <Mail size={18} /> Email Me
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10"
            data-testid="contact-details"
          >
            {contactItems.map((c) => {
              const Inner = (
                <div className="bg-[#0c0c0c] p-6 h-full flex items-start justify-between gap-3 group hover:bg-[#111] transition-colors">
                  <div>
                    <span className="h-10 w-10 mb-4 flex items-center justify-center border border-white/10 text-zinc-400 group-hover:border-volt/50 group-hover:text-volt transition-colors">
                      <c.icon size={17} />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">{c.label}</p>
                    <p className="text-zinc-200 group-hover:text-volt transition-colors break-all text-sm mt-0.5">{c.value}</p>
                  </div>
                  {c.href && <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-volt transition-colors flex-shrink-0" />}
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" data-testid={c.testId}>
                  {Inner}
                </a>
              ) : (
                <div key={c.label} data-testid={c.testId}>{Inner}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
