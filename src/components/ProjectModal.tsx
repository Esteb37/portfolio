import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/lib/types";
import { asset } from "@/lib/asset";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-t-3xl border border-border bg-bg-elevated sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="max-h-[92vh] overflow-y-auto">
              <div className="aspect-[16/9] w-full overflow-hidden bg-bg-subtle">
                <img
                  src={asset(project.cover)}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip chip-accent">{project.category}</span>
                  <span className="chip">{project.period}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-muted">{project.org}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {project.summary}
                </p>

                {project.highlights.length > 0 ? (
                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      // highlights
                    </div>
                    <ul className="mt-2 space-y-2 text-sm text-ink-muted">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.gallery && project.gallery.length > 0 ? (
                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      // media
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {project.gallery.map((g) => (
                        <div
                          key={g}
                          className="overflow-hidden rounded-xl border border-border bg-bg-subtle"
                        >
                          <img
                            src={asset(g)}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
                      >
                        {link.label} <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
