import { motion } from "framer-motion";
import Section from "./Section";
import { pillars, profile } from "@/content/profile";

export default function About() {
  return (
    <Section
      id="about"
      label="// about"
      title="Engineer at the intersection of AI and robots."
      description={profile.bio[0]}
    >
      <div className="space-y-4 text-ink-muted">
        {profile.bio.slice(1).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="surface surface-hover p-5"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {pillar.tag}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-ink">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
