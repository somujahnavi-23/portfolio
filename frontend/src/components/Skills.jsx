import { motion } from "framer-motion";
import { Briefcase, Sparkles, BarChart3, LineChart, Database, Cloud } from "lucide-react";
import { skillGroups } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

const iconMap = { Briefcase, Sparkles, BarChart3, LineChart, Database, Cloud };

// Bento spans for visual variety
const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
];

export const Skills = () => {
  return (
    <section id="skills" data-testid="skills-section" className="relative z-10 bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionHeader index="03" label="What I Bring" title="A full-stack analytics toolkit." testId="skills-header" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] || Sparkles;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className={`${spans[i]} group bg-[#0c0c0c] border border-white/10 p-7 hover:border-volt/50 hover:-translate-y-1 transition-all duration-300`}
                data-testid={`skill-group-${i}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-10 w-10 flex items-center justify-center border border-white/10 bg-black group-hover:border-volt/50 group-hover:text-volt transition-colors">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-heading text-xl tracking-tight font-medium">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
