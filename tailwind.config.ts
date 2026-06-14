import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00bf63",
          dark: "#009e52",
          light: "#e6f9f0",
          // AA-safe deep green reserved for small green text on cream
          // (#00bf63 only reaches ~2.3:1 on cream; this clears 4.5:1).
          text: "#007a3f",
        },
        // Warm near-black charcoal — headings, body text, and warm-dark
        // anchor surfaces (hero overlay, footer, CTA). Replaces cold navy.
        ink: {
          DEFAULT: "#2a271f",
          soft: "#2e2a24",
          mute: "#5a5246",
          olive: "#2e3322",
        },
        // Warm cream / sage / sand page surfaces (sampled from the 2026
        // Capability Statement palette).
        surface: {
          base: "#fcf8ef",
          sage: "#f1f3e6",
          "sage-deep": "#e7efdd",
          mid: "#f8f1e4",
          sand: "#f3ead9",
          "sand-deep": "#f2e8d6",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      maxWidth: {
        site: "76rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,39,31,0.04), 0 1px 1px rgba(42,39,31,0.03)",
        card: "0 18px 40px -24px rgba(42,39,31,0.22)",
        lift: "0 36px 70px -30px rgba(42,39,31,0.32)",
        glow: "0 18px 50px -16px rgba(0,191,99,0.55)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
        "spring-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 6s ease infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
