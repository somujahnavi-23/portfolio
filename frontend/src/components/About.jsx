import { motion } from "framer-motion";
import { about, stats } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section id="about" data-testid="about-section" className="relative z-10 bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionHeader index="01" label="Who I Am" title="Data, but make it a decision." testId="about-header" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">{about.summary}</p>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">{about.summary2}</p>
            <div className="flex flex-wrap gap-3 pt-4">
              {about.highlights.map((h) => (
                <span
                  key={h}
                  className="px-4 py-2 border border-white/10 bg-white/5 font-mono text-xs text-zinc-300"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black p-7 flex flex-col justify-center group hover:bg-[#0c0c0c] transition-colors"
                data-testid={`stat-${i}`}
              >
                <span className="font-mono text-4xl sm:text-5xl font-bold text-volt group-hover:scale-105 transition-transform origin-left">
                  {s.value}
                </span>
                <span className="mt-2 text-sm text-zinc-500">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
