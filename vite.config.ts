import { defineConfig } from "vitest/config";
import type { Plugin } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import i18nAutoNamespacePlugin from "./scripts/i18n-namespace-plugin.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Next.js App Router (RSC) 対応: 出力チャンクの先頭に "use client" を付与する。
// ほぼ全コンポーネントが hooks（useTranslation 等）を使うため一律 client 扱いとし、
// サーバーコンポーネントからも参照しうる純粋データ・型のみのモジュールは除外する
// （"use client" 付きモジュールの非コンポーネントエクスポートは RSC から利用できないため）。
const SERVER_SAFE_MODULES = [/[\\/]src[\\/]tokens\.ts$/, /[\\/]src[\\/]types[\\/]/];

function useClientBanner(): Plugin {
  return {
    name: "wimui:use-client-banner",
    apply: "build",
    enforce: "post",
    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== "chunk") continue;
        const id = chunk.facadeModuleId;
        if (id && SERVER_SAFE_MODULES.some((re) => re.test(id))) continue;
        chunk.code = `"use client";\n${chunk.code}`;
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const isUMD = mode === "umd";

  // 抽出 CSS（cssCodeSplit=false のため 1 ファイル）を styles.css に固定する。
  // es/cjs 出力で同一の関数参照を共有しないと rolldown が
  // 「assetFileNames isn't equal for every output」と警告するため定数化する。
  const cssStylesAssetName = (asset: { names?: string[] }) =>
    asset.names?.some((n) => n.endsWith(".css")) ? "styles[extname]" : "[name][extname]";

  return {
    plugins: [
      react(),
      svgr(),
      i18nAutoNamespacePlugin(),
      // 開発サーバーの起動高速化のため、画像最適化はビルド時のみ実行
      mode !== "development" &&
        ViteImageOptimizer({
          png: { quality: 80 },
          jpeg: { quality: 80 },
          jpg: { quality: 80 },
          webp: { quality: 80 },
          svg: {
            multipass: true,
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                    removeEmptyAttrs: false,
                  },
                },
              },
            ],
          },
        }),
      // UMD は <script> 直読み用で RSC と無関係のためバナー不要
      !isUMD && useClientBanner(),
      // Only generate types once
      !isUMD &&
        dts({
          include: ["src/**/*.ts", "src/**/*.tsx"],
          exclude: ["**/*.stories.*", "**/*.test.*"],
          // d.ts は JS と同じレイアウトで dist/ 直下に出力される:
          //   エントリ型   → dist/index.d.ts, dist/form.d.ts, ...
          //   個別型       → dist/components/<category>/<Name>/<Name>.d.ts（JS と co-located）
          // package.json の types / exports.*.types はこのパスに合わせている
          // （per-component サブパスの types も dist/components/... を参照）。
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
              // UMD の CSS は wimui.umd.css として出力（非 UMD の styles.css と衝突させない）。
              assetFileNames: (asset) =>
                asset.names?.some((n) => n.endsWith(".css"))
                  ? "wimui.umd.css"
                  : "[name][extname]",
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "react/jsx-runtime": "jsxRuntime",
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
                // 抽出 CSS はコンポーネント専用として styles.css に固定する（トークン/
                // リセットは index.ts から除外済みのため、この CSS はコンポーネントのみ）。
                assetFileNames: cssStylesAssetName,
              },
              {
                format: "cjs",
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: "[name].cjs",
                assetFileNames: cssStylesAssetName,
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
