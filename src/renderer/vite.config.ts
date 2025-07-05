import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: __dirname, // garante que ele use src/renderer como raiz
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: path.resolve(__dirname, "../../dist/renderer"), // output correto para Electron
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
});
