// Filename - Plugins.ts
import { PluginOption } from "vite";

// For React Support
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

const plugins = (mode: string): PluginOption[] => {
  return [
    react(),
    viteTsconfigPaths(),
    svgr({
      include: "**/*.svg?react",
      exclude: "",
    }),
  ];
};

export default plugins;
