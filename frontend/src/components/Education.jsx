import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const Education = () => {
  return (
    <section id="education" data-testid="education-section" className="relative z-10 bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionHeader index="05" label="Academics" title="The foundation." testId="education-header" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#0c0c0c] border border-white/10 p-8 hover:border-volt/50 hover:-translate-y-1 transition-all duration-300"
              data-testid={`education-item-${i}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="h-11 w-11 flex items-center justify-center border border-white/10 text-volt">
                  <GraduationCap size={20} />
                </span>
                <span className="font-mono text-xs text-volt">{e.period}</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl tracking-tight font-medium mb-1">{e.degree}</h3>
              <p className="text-zinc-300">{e.school}</p>
              <p className="text-zinc-600 text-sm font-mono mb-4">{e.location}</p>
              {e.coursework.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 mt-4">
                  {e.coursework.map((c) => (
                    <span key={c} className="px-2.5 py-1 bg-white/5 font-mono text-[11px] text-zinc-400">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
