import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        void: "#0a0a0f",
        elevated: "#1a1a24",
        border: "#2a2a3a",
        accent: { DEFAULT: "#7c5cfc", soft: "#9d7ffe" },
        text: { primary: "#f0eeff", secondary: "#a09abf", muted: "#60607a" },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,92,252,0.2)",
        "accent-sm": "0 0 20px rgba(124,92,252,0.15)",
        "accent-md": "0 0 40px rgba(124,92,252,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
