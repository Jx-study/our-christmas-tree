import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/our-christmas-tree/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/shared/styles/_variables" as *;
          @use "@/shared/styles/_mixins" as *;
        `,
      },
    },
  },
  build: {
    outDir: "docs",
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          r3f: ["@react-three/fiber", "@react-three/drei"],
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});
