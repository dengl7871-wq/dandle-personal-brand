import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      colors: {
        ink: "#111111",
        paper: "#f7f5ef",
        graphite: "#5f625f",
        line: "#d8d4ca",
        signal: "#7a5c32",
        moss: "#53624e"
      },
      boxShadow: {
        soft: "0 30px 80px rgba(17, 17, 17, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
