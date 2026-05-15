import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0b",
          elevated: "#111114",
          subtle: "#16161a",
        },
        border: {
          DEFAULT: "#1f1f23",
          strong: "#2a2a30",
        },
        ink: {
          DEFAULT: "#e8e8ea",
          muted: "#a1a1aa",
          subtle: "#71717a",
        },
        accent: {
          DEFAULT: "#a78bfa",
          soft: "#c4b5fd",
          deep: "#7c3aed",
        },
        gold: {
          DEFAULT: "#fbbf24",
          soft: "#fcd34d",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(167, 139, 250, 0.28), 0 12px 40px -12px rgba(167, 139, 250, 0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(167,139,250,0.10), transparent 60%)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
