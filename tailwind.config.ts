import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Times New Romans"],
      inter: ["var(--font-inter)"],
    },
  },
  plugins: [],
} satisfies Config;
