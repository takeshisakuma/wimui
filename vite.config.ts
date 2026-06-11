import { defineConfig } from "vitest/config";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import i18nAutoNamespacePlugin from "./scripts/i18n-namespace-plugin.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const isUMD = mode === "umd";

  return {
    plugins: [
      react(),
      svgr(),
      i18nAutoNamespacePlugin(),
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
          exclude: ["**/*.stories.*", "**/*.test.*"],
          // d.ts は dist/src/ 配下に出力される（dist には node_modules / _virtual も
          // 含まれるため共通ルートがプロジェクトルートになる）。entryRoot 指定は
          // この環境（unplugin-dts + rolldown-vite）では効かないため、package.json の
          // types 側を ./dist/src/*.d.ts に合わせている
          insertTypesEntry: true,
        }),
    ].filter(Boolean),
    optimizeDeps: {
      // 依存関係の事前ビルド対象。ここに追加することで起動時の動的解決を減らし高速化
      // classnames は Vite が自動スキャンで発見するため明示指定不要
      // （明示指定すると Storybook との二重処理で esbuild 競合エラーが発生する）
      include: [
        "react",
        "react-dom",
        "@floating-ui/react",
        "recharts",
        "music-metadata",
      ],
    },
    build: {
      emptyOutDir: !isUMD,
      lib: isUMD
        ? {
            entry: path.resolve(__dirname, "src/index.umd.ts"),
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
              ai: path.resolve(__dirname, "src/ai.ts"),
              tokens: path.resolve(__dirname, "src/tokens.ts"),
              icons: path.resolve(__dirname, "src/icons.ts"),
            },
            formats: ["es", "cjs"],
          },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "i18next",
          "react-i18next",
          "music-metadata",
          "classnames",
          "@floating-ui/react",
          "recharts",
          "react-markdown",
          "remark-gfm",
          "qrcode.react",
          "diff",
          // 重量級ライブラリ — バンドルに含めると UMD が 160kB 制限を超過するため external に指定
          "@xyflow/react",
          "@fullcalendar/core",
          "@fullcalendar/daygrid",
          "@fullcalendar/interaction",
          "@fullcalendar/react",
          "@fullcalendar/timegrid",
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
                diff: "Diff",
                "music-metadata": "musicMetadata",
                classnames: "classNames",
                "@floating-ui/react": "FloatingUI",
                "@xyflow/react": "ReactFlow",
                "@fullcalendar/core": "FullCalendarCore",
                "@fullcalendar/daygrid": "FullCalendarDayGrid",
                "@fullcalendar/interaction": "FullCalendarInteraction",
                "@fullcalendar/react": "FullCalendarReact",
                "@fullcalendar/timegrid": "FullCalendarTimeGrid",
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
        "wimui": path.resolve(__dirname, "./src"),
        "@storybook/blocks": "@storybook/addon-docs/blocks"
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./test-setup.ts",
      css: {
        modules: {
          classNameStrategy: "non-scoped",
        },
      },
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
