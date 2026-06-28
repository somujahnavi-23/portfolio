import { motion } from "framer-motion";

export const SectionHeader = ({ index, label, title, testId }) => (
  <div className="mb-16" data-testid={testId}>
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="font-mono text-xs tracking-[0.25em] uppercase text-volt mb-4 flex items-center gap-3"
    >
      <span className="text-zinc-600">{index}</span>
      <span className="h-px w-8 bg-volt inline-block" />
      {label}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-semibold max-w-3xl"
    >
      {title}
    </motion.h2>
  </div>
);
