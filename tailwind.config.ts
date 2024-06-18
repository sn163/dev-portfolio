import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
