import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Remova a linha abaixo
// import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Remova o uso do componentTagger
    // mode === 'development' &&
    // componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));