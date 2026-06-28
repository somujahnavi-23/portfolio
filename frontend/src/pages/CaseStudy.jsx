import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Target, Lightbulb, CheckCircle2, Quote } from "lucide-react";
import { getProjectBySlug } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="font-heading text-4xl">Case study not found.</p>
        <button
          data-testid="casestudy-back-home"
          onClick={() => navigate("/")}
          className="bg-volt hover:bg-volt-hover text-white px-6 py-3 font-medium"
        >
          Back to portfolio
        </button>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <div className="min-h-screen bg-black text-white" data-testid="casestudy-page">
      <div className="grain" />

      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <Link
            to="/#projects"
            data-testid="casestudy-back-link"
            className="group flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-zinc-400 hover:text-volt transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <Link to="/" className="font-heading text-xl tracking-tight font-semibold">
            <span className="text-volt">/</span>JS
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10">
        {/* Hero */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          className="font-mono text-xs tracking-[0.25em] uppercase text-volt mb-5 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-volt inline-block" />
          {cs.domain}
        </motion.p>
        <motion.h1
          variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-semibold leading-[1.02]"
        >
          {project.name}
        </motion.h1>
        {project.subtitle && (
          <p className="mt-3 font-mono text-sm text-zinc-500">{project.subtitle}</p>
        )}
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate="visible"
          className="mt-6 text-xl sm:text-2xl text-zinc-300 leading-relaxed max-w-3xl"
        >
          {cs.tagline}
        </motion.p>

        {/* Meta */}
        <motion.div
          variants={fadeUp} custom={3} initial="hidden" animate="visible"
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10"
        >
          {[
            { k: "Role", v: cs.role },
            { k: "Timeline", v: cs.timeline },
            { k: "Domain", v: cs.domain },
            { k: "Headline", v: project.metric + " " + project.metricLabel },
          ].map((m) => (
            <div key={m.k} className="bg-black p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">{m.k}</p>
              <p className="text-sm text-zinc-200 mt-1">{m.v}</p>
            </div>
          ))}
        </motion.div>

        {/* Stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-xs text-zinc-300">
              {s}
            </span>
          ))}
        </div>

        {/* Context + Problem */}
        <Block icon={Target} label="01 / The Context">
          <p>{cs.context}</p>
        </Block>
        <Block icon={Lightbulb} label="02 / The Problem">
          <p>{cs.problem}</p>
        </Block>

        {/* Approach */}
        <section className="mt-20">
          <SectionTitle label="03 / The Approach" />
          <div className="mt-8 space-y-px bg-white/10 border border-white/10">
            {cs.approach.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-black p-7 flex gap-6"
                data-testid={`approach-step-${i}`}
              >
                <span className="font-mono text-3xl font-bold text-volt/40 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl tracking-tight font-medium mb-1.5">{a.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-[15px]">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-20">
          <SectionTitle label="04 / Key Challenges" />
          <ul className="mt-8 space-y-4">
            {cs.challenges.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-4 text-zinc-300 leading-relaxed text-[15px]"
              >
                <span className="text-volt mt-2 flex-shrink-0 h-1.5 w-1.5 bg-volt" />
                {c}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section className="mt-20">
          <SectionTitle label="05 / The Results" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {cs.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#0c0c0c] border border-white/10 p-7 hover:border-volt/50 transition-colors"
                data-testid={`result-${i}`}
              >
                <span className="font-mono text-5xl font-bold text-volt leading-none flex items-center gap-2">
                  <CheckCircle2 size={20} className="opacity-60" />
                  {r.metric}
                </span>
                <p className="mt-3 text-white font-medium">{r.label}</p>
                <p className="mt-1 text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-l-2 border-volt pl-8 py-2"
        >
          <Quote size={28} className="text-volt mb-4" />
          <p className="font-heading text-2xl sm:text-3xl tracking-tight font-medium leading-snug text-zinc-100">
            {cs.reflection}
          </p>
        </motion.blockquote>

        {/* Footer CTA */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 mb-2">Next</p>
            <p className="font-heading text-2xl tracking-tight font-medium">Explore more of my work</p>
          </div>
          <Link
            to="/#projects"
            data-testid="casestudy-back-projects"
            className="group flex items-center gap-2 bg-volt hover:bg-volt-hover text-white px-7 py-3.5 font-medium transition-colors"
          >
            All Projects
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </main>
    </div>
  );
}

const SectionTitle = ({ label }) => (
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="font-mono text-xs tracking-[0.25em] uppercase text-volt flex items-center gap-3"
  >
    <span className="h-px w-8 bg-volt inline-block" />
    {label}
  </motion.h2>
);

const Block = ({ icon: Icon, label, children }) => (
  <section className="mt-20">
    <div className="flex items-center gap-3 mb-5">
      <span className="h-10 w-10 flex items-center justify-center border border-white/10 text-volt">
        <Icon size={18} />
      </span>
      <SectionTitle label={label} />
    </div>
    <div className="text-lg text-zinc-300 leading-relaxed max-w-3xl">{children}</div>
  </section>
);
