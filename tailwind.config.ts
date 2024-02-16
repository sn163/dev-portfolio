import type { Config } from "tailwindcss";
import TailwindRadix from "tailwindcss-radix";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [TailwindRadix],
} satisfies Config;
