import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#eef3ff",
          100: "#d9e3fb",
          200: "#b6c8f4",
          300: "#8aa5e8",
          400: "#5478d1",
          500: "#2b53b4",
          600: "#12409b",
          700: "#0e3480",
          800: "#0b2660",
          900: "#081b45",
        },
        gold: {
          50: "#fffaeb",
          100: "#fff4d1",
          200: "#ffedb5",
          300: "#ffdd7a",
          400: "#ffcb33",
          500: "#f5b90b",
          600: "#d19a00",
        },
        ink: "#0a1733",
        paper: "#fbfaf7",
        line: "#e4e0d6",
      },
      fontFamily: {
        sans: ["General Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,23,51,0.04), 0 12px 32px -18px rgba(10,23,51,0.22)",
        lift: "0 2px 4px rgba(10,23,51,0.05), 0 28px 60px -28px rgba(10,23,51,0.35)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
