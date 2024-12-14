import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Override the default sans font
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff4d59",
          secondary: "#cc3d47",
          accent: "#37cdbe",
          neutral: "#3a3a3a",
          "base-100": "#fbfcfa",
          "base-200": "#dedede",
          "base-300": "#1a1a1a",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;
