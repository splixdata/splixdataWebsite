import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1220",
        brand: { blue: "#2F6BFF" },
        slatex: "#5A677B",
        paper: "#F8FAFC"
      }
    }
  },
  plugins: [],
};

export default config;
