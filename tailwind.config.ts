import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#050608",
        obsidian: "#0b0d12",
        ember: "#ff3d1f",
        champagne: "#e7c987",
        platinum: "#eef1f7",
        graphite: "#151821"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(255,61,31,.28)",
        gold: "0 0 60px rgba(231,201,135,.2)"
      },
      backgroundImage: {
        "radial-lux": "radial-gradient(circle at 50% 0%, rgba(255,61,31,.22), transparent 34%), radial-gradient(circle at 90% 20%, rgba(231,201,135,.14), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
