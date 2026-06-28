import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown, FileText } from "lucide-react";
import { resumes } from "../data/portfolioData";

export const ResumeDownload = ({ variant = "primary", testIdPrefix = "resume", align = "left", compact = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const triggerClass =
    variant === "primary"
      ? "bg-volt hover:bg-volt-hover text-white"
      : "border border-white/20 hover:bg-white/5 text-white";
  const padClass = compact ? "px-5 py-2.5 text-sm" : "px-6 py-3.5";

  return (
    <div className="relative" ref={ref}>
      <button
        data-testid={`${testIdPrefix}-trigger`}
        onClick={() => setOpen((v) => !v)}
        className={`group flex items-center gap-2 font-medium transition-colors ${padClass} ${triggerClass}`}
      >
        <Download size={compact ? 16 : 18} className="group-hover:text-white transition-colors" />
        {compact ? "Resume" : "Download Resume"}
        <ChevronDown size={15} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${align === "right" ? "right-0" : "left-0"} top-full mt-2 w-72 z-50 bg-[#0c0c0c] border border-white/10 shadow-2xl`}
            data-testid={`${testIdPrefix}-menu`}
          >
            {resumes.map((r, i) => (
              <a
                key={r.url}
                href={r.url}
                download
                data-testid={`${testIdPrefix}-option-${i}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-4 hover:bg-white/5 border-b border-white/10 last:border-b-0 transition-colors group"
              >
                <FileText size={18} className="text-volt flex-shrink-0" />
                <span>
                  <span className="block text-sm text-white group-hover:text-volt transition-colors">{r.label}</span>
                  <span className="block font-mono text-[11px] text-zinc-500">{r.role}</span>
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
