import { defineConfig } from "vitest/config";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import viteImagemin from "vite-plugin-imagemin";
import svgr from "vite-plugin-svgr";

import dts from "vite-plugin-dts";

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
    dts({
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "WimUI",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-native-fs",
        "i18next",
        "react-i18next",
      ],
      output: [
        {
          format: "es" as const,
          dir: "dist",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          assetFileNames: "assets/[name][extname]",
        },
        {
          format: "umd" as const,
          dir: "dist",
          name: "WimUI",
          entryFileNames: "wimui.umd.js",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
            i18next: "i18next",
            "react-i18next": "reactI18next",
          },
          assetFileNames: "assets/[name][extname]",
        },
      ],
    },
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test-setup.ts",
    exclude: ["**/node_modules/**", "**/dist/**", "**/vrt/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "json-summary"],
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: [
        "node_modules/",
        "test-setup.ts",
        "**/*.stories.tsx",
        "**/*.test.tsx",
        "dist/",
        "src/index.ts",
      ],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
});
