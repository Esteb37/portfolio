import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Section from "./Section";
import { gallery } from "@/content/gallery";
import { asset } from "@/lib/asset";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i + gallery.length - 1) % gallery.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  const current = index !== null ? gallery[index] : null;

  return (
    <Section
      id="gallery"
      label="// gallery"
      title="Visual archive."
      description="A scrolling collage of the work — hardware builds, demos, simulations and field captures. Click any tile to open the lightbox."
    >
      <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
        {gallery.map((item, idx) => (
          <motion.button
            key={item.src}
            type="button"
            onClick={() => setIndex(idx)}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: (idx % 6) * 0.03 }}
            className="group relative block w-full overflow-hidden rounded-xl border border-border bg-bg-subtle text-left transition-all duration-300 hover:border-accent/60 hover:shadow-glow"
          >
            <img
              src={asset(item.src)}
              alt={item.alt}
              loading="lazy"
              className="block w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
                // gallery
              </div>
              <div className="mt-0.5 text-xs text-ink">
                {item.caption ?? item.alt}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-h-[90vh] max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={asset(current.src)}
                alt={current.alt}
                className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain"
              />
              {current.caption ? (
                <div className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-ink-muted">
                  {current.caption}
                  <span className="ml-2 text-ink-subtle">
                    {(index ?? 0) + 1} / {gallery.length}
                  </span>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
