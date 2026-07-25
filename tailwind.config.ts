import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#070812",
          raised: "#0C0E1C",
          card: "#0F1224",
        },
        accent: {
          purple: "#9B5CFF",
          blue: "#22D3EE",
          white: "#F5F5F5",
          gray: "#8B8B99",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hover: "rgba(155,92,255,0.4)",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "120px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(155,92,255,0.35)",
        "glow-blue": "0 0 40px -10px rgba(34,211,238,0.35)",
        card: "0 8px 40px -12px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "gradient-purple-blue": "linear-gradient(135deg, #9B5CFF 0%, #22D3EE 100%)",
        "gradient-radial-glow":
          "radial-gradient(circle at center, rgba(155,92,255,0.25) 0%, transparent 70%)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        
      },
      animation: {
        "pulse-slow": "pulse-slow 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "border-glow": "border-glow 2.5s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
