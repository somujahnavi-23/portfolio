import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolioData";
import { ResumeDownload } from "./ResumeDownload";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => go("hero")}
          className="font-heading text-xl tracking-tight font-semibold flex items-center gap-2"
        >
          <span className="text-volt">/</span>JS
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="font-mono text-xs tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <ResumeDownload variant="primary" testIdPrefix="nav-resume" align="right" compact />
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-black/90 border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="font-mono text-sm tracking-[0.15em] uppercase text-zinc-300 hover:text-volt text-left"
                >
                  {l.label}
                </button>
              ))}
              <ResumeDownload variant="primary" testIdPrefix="nav-mobile-resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
