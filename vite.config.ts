import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      webp: { quality: 80 },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test-setup.ts",
  },
});
