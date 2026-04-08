import { defineConfig } from "vitest/config";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const isUMD = mode === "umd";

  return {
    plugins: [
      react(),
      svgr(),
      // 開発サーバーの起動高速化のため、imageminはビルド時のみ実行
      mode !== "development" &&
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
      // Only generate types once
      !isUMD &&
        dts({
          include: ["src/**/*.ts", "src/**/*.tsx"],
          exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
          insertTypesEntry: true,
        }),
    ].filter(Boolean),
    optimizeDeps: {
      // 依存関係の事前ビルド対象。ここに追加することで起動時の動的解決を減らし高速化
      include: [
        "react",
        "react-dom",
        "classnames",
        "@floating-ui/react",
        "recharts",
        "jsmediatags",
      ],
      // jsmediatags が Node.js 依存（fsなど）を持つのを回避
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
      },
    },
    build: {
      emptyOutDir: !isUMD,
      lib: isUMD
        ? {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "WimUI",
            formats: ["umd"],
            fileName: () => "wimui.umd.js",
          }
        : {
            entry: {
              index: path.resolve(__dirname, "src/index.ts"),
              layout: path.resolve(__dirname, "src/layout.ts"),
              form: path.resolve(__dirname, "src/form.ts"),
              feedback: path.resolve(__dirname, "src/feedback.ts"),
              navigation: path.resolve(__dirname, "src/navigation.ts"),
              "data-display": path.resolve(__dirname, "src/data-display.ts"),
              overlay: path.resolve(__dirname, "src/overlay.ts"),
              typography: path.resolve(__dirname, "src/typography.ts"),
              media: path.resolve(__dirname, "src/media.ts"),
              charts: path.resolve(__dirname, "src/charts.ts"),
              tokens: path.resolve(__dirname, "src/tokens.ts"),
            },
            formats: ["es", "cjs"],
          },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          // jsmediatags/build2/jsmediatags.js が ReactNativeFileReader 経由で
          // require("react-native-fs") を呼ぶため、ブラウザビルドでのエラーを防ぐために external 指定が必要
          "react-native-fs",
          "i18next",
          "react-i18next",
          "jsmediatags",
          "classnames",
          "@floating-ui/react",
          "recharts",
          "react-markdown",
          "remark-gfm",
          "qrcode.react",
        ],
        output: isUMD
          ? {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "react/jsx-runtime": "jsxRuntime",
                i18next: "i18next",
                "react-i18next": "reactI18next",
                recharts: "Recharts",
                "react-markdown": "ReactMarkdown",
                "remark-gfm": "remarkGfm",
                "qrcode.react": "QrcodeReact",
                "react-native-fs": "ReactNativeFs",
                jsmediatags: "jsmediatags",
                classnames: "classNames",
                "@floating-ui/react": "FloatingUI",
              },
            }
          : [
              {
                format: "es",
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: "[name].js",
              },
              {
                format: "cjs",
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: "[name].cjs",
              },
            ],
      },
      chunkSizeWarningLimit: 2000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@storybook/blocks": "@storybook/addon-docs/blocks"
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./test-setup.ts",
      exclude: ["**/node_modules/**", "**/dist/**", "**/vrt/**"],
      coverage: {
        provider: "v8" as const,
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
  };
});
