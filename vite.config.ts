import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ToDoAppForMB/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },
  server: {
    open: true,
  },
});
