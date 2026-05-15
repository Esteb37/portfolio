import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Star } from "lucide-react";
import type { Project } from "@/lib/types";
import { asset } from "@/lib/asset";

type Props = {
  project: Project;
  onOpen: (p: Project) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  const hasVideo = (project.videos?.length ?? 0) > 0;

  return (
    <motion.button
      layout
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.35 }}
      className="surface surface-hover group relative flex flex-col overflow-hidden text-left"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-subtle">
        <img
          src={asset(project.cover)}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-elevated/95 via-bg-elevated/10 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-bg shadow-md">
            {project.category}
          </span>
          {project.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-bg shadow-md">
              <Star size={11} /> Featured
            </span>
          ) : null}
          {hasVideo ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg/85 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur-sm">
              <PlayCircle size={11} /> Video
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-subtle">
            {project.period}
          </div>
          <h3 className="mt-1 text-lg font-semibold leading-snug text-ink">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
            {project.subtitle}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 ? (
            <span className="chip">+{project.tags.length - 4}</span>
          ) : null}
        </div>
        <div className="flex items-center justify-between pt-2 text-sm">
          <span className="text-ink-subtle">{project.org}</span>
          <span className="inline-flex items-center gap-1 text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Details <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
