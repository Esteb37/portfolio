export function asset(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const trimmed = path.startsWith("/") ? path.slice(1) : path;
  return `${base}assets/${trimmed}`;
}
