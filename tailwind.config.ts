import type { Config } from "tailwindcss";
import TailwindRadix from "tailwindcss-radix";

export default {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
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
        },
      },
    ],
  },
  plugins: [TailwindRadix, require("daisyui")],
} satisfies Config;
