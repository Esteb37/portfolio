import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  showLabel?: string;
  hideLabel?: string;
  breakpoint?: "sm" | "md" | "lg";
  className?: string;
};

const desktopShowClass: Record<NonNullable<Props["breakpoint"]>, string> = {
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
};

const mobileOnlyClass: Record<NonNullable<Props["breakpoint"]>, string> = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
};

export default function CollapsibleOnMobile({
  children,
  showLabel = "Show details",
  hideLabel = "Hide details",
  breakpoint = "md",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${desktopShowClass[breakpoint]} ${className}`}>
        {children}
      </div>

      <div className={mobileOnlyClass[breakpoint]}>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className={className}>{children}</div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
        >
          {open ? hideLabel : showLabel}
          <ChevronDown
            size={12}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </>
  );
}
