import type { Config } from "tailwindcss";
import TailwindRadix from "tailwindcss-radix";

export default {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [TailwindRadix],
} satisfies Config;
