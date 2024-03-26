import type { Config } from "tailwindcss";
import TailwindRadix from "tailwindcss-radix";

export default {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [TailwindRadix],
} satisfies Config;
