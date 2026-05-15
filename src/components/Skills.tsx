import { motion } from "framer-motion";
import Section from "./Section";
import { languages, skillGroups } from "@/content/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="// stack"
      title="Skills & languages."
      description="A working toolbox for embodied AI: model training, robotic systems, control, and the systems plumbing that ties them together."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="surface p-5"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {group.group}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-bg/40 px-2.5 py-1 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="surface mt-6 p-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          // languages
        </div>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {languages.map((l) => (
            <div key={l.language} className="flex items-baseline gap-2">
              <span className="text-ink">{l.language}</span>
              <span className="text-ink-subtle">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
