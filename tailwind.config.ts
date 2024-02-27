import type { Config } from "tailwindcss";
import TailwindRadix from "tailwindcss-radix";

export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [TailwindRadix],
} satisfies Config;
