import { motion } from "framer-motion";
import {
  BrainCircuit,
  Compass,
  FileText,
  Hand,
  Rocket,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import Section from "./Section";
import { pillars, profile } from "@/content/profile";

const pillarIcons: ReactNode[] = [
  <BrainCircuit key="brain" size={20} />,
  <Compass key="compass" size={20} />,
  <Hand key="hand" size={20} />,
];

const stats: { value: string; label: string; icon: ReactNode }[] = [
  {
    value: "RSS 2026",
    label: "First-author paper",
    icon: <FileText size={14} />,
  },
  {
    value: "4 ×",
    label: "Meta internships",
    icon: <Rocket size={14} />,
  },
  {
    value: "600+",
    label: "Manipulation demos collected",
    icon: <Hand size={14} />,
  },
  {
    value: "99.7%",
    label: "ML pipeline speedup",
    icon: <Sparkles size={14} />,
  },
  {
    value: "77 %",
    label: "ObjectNav zero-shot success",
    icon: <Compass size={14} />,
  },
];

export default function About() {
  return (
    <Section id="about" label="// about" title="What I work on.">
      <div className="relative">
        <div className="pointer-events-none absolute -top-12 right-0 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-1/3 -z-10 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-ink sm:text-xl">
              {profile.bio[0]}
            </p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              {profile.bio.slice(1).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              // by the numbers
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className={`surface relative overflow-hidden p-4 ${
                    idx === 0 ? "col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-ink-subtle">
                    <span className="text-accent">{stat.icon}</span>
                    {stat.label}
                  </div>
                  <div className="mt-2 bg-gradient-to-br from-ink via-ink to-accent-soft bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          // focus areas
        </div>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group surface surface-hover relative overflow-hidden p-6"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  {pillarIcons[idx]}
                </span>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {pillar.tag}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
