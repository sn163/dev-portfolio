import { defineConfig } from "vite";
import plugins from "./plugins";

export default defineConfig(({ mode }) => {
  return {
    base: "/",
    plugins: plugins(mode),
    build: {
      outDir: "build",
    },
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000
      port: 3000,
    },
  };
});
