import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  return (
    <section id="projects" data-testid="projects-section" className="relative z-10 bg-[#050505] py-24 sm:py-32 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <SectionHeader index="04" label="Selected Work" title="Projects where the data is the hero." testId="projects-header" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <Link
                to={`/project/${p.slug}`}
                data-testid={`project-card-${i}`}
                className="group relative block bg-[#0c0c0c] border border-white/10 p-8 sm:p-10 hover:border-volt/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="flex flex-col">
                    <span className="font-mono text-6xl sm:text-7xl font-bold text-volt leading-none">{p.metric}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mt-2">{p.metricLabel}</span>
                  </div>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-volt group-hover:rotate-45 transition-all duration-300 flex-shrink-0" size={28} />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl tracking-tight font-medium mb-1">{p.name}</h3>
                {p.subtitle && <p className="text-zinc-500 text-sm font-mono mb-4">{p.subtitle}</p>}
                <p className="text-zinc-400 leading-relaxed text-[15px] mb-6 line-clamp-3">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-xs text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-volt flex items-center gap-2">
                  Read case study
                  <span className="h-px w-6 bg-volt inline-block group-hover:w-10 transition-all" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
