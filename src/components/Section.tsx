import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-sub">{description}</p> : null}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
