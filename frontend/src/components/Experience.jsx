import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const Experience = () => {
  return (
    <section id="experience" data-testid="experience-section" className="relative z-10 bg-[#050505] py-24 sm:py-32 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionHeader index="02" label="Where I've Worked" title="Experience that ships impact." testId="experience-header" />

        <div className="relative border-l border-white/10 ml-2 sm:ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative pl-8 sm:pl-12 pb-16 last:pb-0"
              data-testid={`experience-item-${i}`}
            >
              <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 bg-volt rounded-full ring-4 ring-black" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading text-2xl sm:text-3xl tracking-tight font-medium">{exp.role}</h3>
                <span className="font-mono text-xs sm:text-sm text-volt whitespace-nowrap">{exp.dates}</span>
              </div>
              <p className="text-zinc-300 font-medium">{exp.company}</p>
              <p className="text-zinc-500 text-sm font-mono mb-1">{exp.client}</p>
              <p className="text-zinc-600 text-sm mb-5">{exp.location}</p>

              <ul className="space-y-3">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-zinc-400 leading-relaxed text-[15px]">
                    <span className="text-volt mt-1.5 flex-shrink-0 h-1.5 w-1.5 bg-volt" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
