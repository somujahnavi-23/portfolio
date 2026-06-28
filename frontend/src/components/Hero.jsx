import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "../data/portfolioData";
import { ResumeDownload } from "./ResumeDownload";

const word = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 * i },
  }),
};

export const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${profile.heroImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-black/85" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full pt-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-volt mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-volt inline-block" />
          {profile.headline}
        </motion.p>

        <h1 className="font-heading text-[clamp(3rem,11vw,9.5rem)] leading-[0.92] tracking-tighter font-semibold">
          <span className="block overflow-hidden">
            <motion.span variants={word} custom={0} initial="hidden" animate="visible" className="inline-block">
              {profile.firstName}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} custom={1} initial="hidden" animate="visible" className="inline-block text-zinc-500">
              {profile.lastName}.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed"
        >
          Turning data into decisions across healthcare & enterprise — with{" "}
          <span className="text-white font-mono text-base">SQL</span>,{" "}
          <span className="text-white font-mono text-base">BI dashboards</span>, and{" "}
          <span className="text-white font-mono text-base">GenAI</span> workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-contact-btn"
            onClick={() => scrollTo("contact")}
            className="bg-volt hover:bg-volt-hover text-white px-7 py-3.5 font-medium transition-colors"
          >
            Get in touch
          </button>
          <ResumeDownload variant="secondary" testIdPrefix="hero-resume" />
          <span className="flex items-center gap-2 text-zinc-500 text-sm font-mono ml-2">
            <MapPin size={15} className="text-volt" /> {profile.location}
          </span>
        </motion.div>
      </div>

      <motion.button
        data-testid="hero-scroll-down"
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-zinc-500 hover:text-volt"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
};
