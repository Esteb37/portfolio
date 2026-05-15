import { motion } from "framer-motion";
import { ExternalLink, FlaskConical } from "lucide-react";
import Section from "./Section";
import { publications, thesis } from "@/content/publications";
import { asset } from "@/lib/asset";

const MEDIA_HEIGHT = "h-64 sm:h-72";

export default function Research() {
  const paper = publications[0];

  return (
    <Section
      id="research"
      label="// research"
      title="Publications & thesis."
      description="Selected research outputs: a peer-reviewed paper on language-conditioned navigation and an ongoing Master Thesis on floor-based behavioral odometry in Tokyo."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="surface surface-hover flex flex-col overflow-hidden"
        >
          <div
            className={`grid grid-cols-1 gap-px bg-border ${MEDIA_HEIGHT} flex-none`}
          >
            {paper.images.map((img) => (
              <div key={img} className="overflow-hidden bg-bg-elevated">
                <img
                  src={asset(img)}
                  alt="OpenFrontier figure"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="mt-3 text-xl font-semibold text-ink">
              {paper.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{paper.authors}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {paper.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-bg shadow-sm transition-transform hover:scale-[1.03] hover:bg-accent-soft"
                >
                  Read paper · {link.label} <ExternalLink size={12} />
                </a>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {paper.abstract}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              {paper.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="surface surface-hover flex flex-col overflow-hidden"
        >
          {thesis.image ? (
            <div className={`${MEDIA_HEIGHT} w-full flex-none overflow-hidden bg-bg-elevated`}>
              <img
                src={asset(thesis.image)}
                alt="Thesis context"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-accent">
                <FlaskConical size={12} /> {thesis.subtitle}
              </span>
              <span className="chip">{thesis.period}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-ink">
              {thesis.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{thesis.org}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-3.5 py-1.5 text-xs font-semibold text-gold">
                Master Thesis — in progress
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {thesis.summary}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              {thesis.objectives.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {thesis.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </Section>
  );
}
