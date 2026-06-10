// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import svgr from "vite-plugin-svgr";
import path from "path";
import i18nAutoNamespacePlugin from "../scripts/i18n-namespace-plugin.js";
import docgenPlugin from "../scripts/docgen-plugin.js";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    "../docs/**/*.mdx",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "storybook-react-i18next",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: ["../public"], //言語ファイル

  viteFinal: async (config) => {
    // Viteの設定をマージ
    return mergeConfig(config, {
      base: "./",
      publicDir: false,
      resolve: {
        alias: [
          {
            find: "storybook/theming",
            replacement: path.resolve(
              process.cwd(),
              "node_modules/storybook/dist/theming",
            ),
          },
          {
            find: "wimui",
            replacement: path.resolve(process.cwd(), "src"),
          },
        ],
      },
      plugins: [
        i18nAutoNamespacePlugin(),
        docgenPlugin(),
        {
          name: 'force-resolve-storybook-blocks',
          enforce: 'pre',
          resolveId(id: string) {
            if (id === '@storybook/blocks') {
              return path.resolve(process.cwd(), 'node_modules/@storybook/blocks/dist/index.mjs');
            }
          }
        },
        {
          name: "fix-vitest-path",
          transformIndexHtml(html: string) {
            return html.replace(
              /\/vite-inject-mocker-entry\.js/g,
              "./vite-inject-mocker-entry.js",
            );
          },
        },
        svgr(),
        config.mode !== "development" &&
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
      ].filter(Boolean) as any,
      optimizeDeps: {
        include: [
          // React core — avoids per-request CJS→ESM transform
          "react",
          "react/jsx-runtime",
          "react-dom",
          "react-dom/client",
          // i18n
          "i18next",
          "react-i18next",
          // UI utilities bundled with components
          "classnames",
          "@floating-ui/react",
          // Heavy visualisation libraries
          "recharts",
          "@xyflow/react",
          "@fullcalendar/react",
          "@fullcalendar/core",
          "@fullcalendar/daygrid",
          "@fullcalendar/interaction",
          "@fullcalendar/timegrid",
          // Media tag reader
          "music-metadata",
        ],
        exclude: ["@storybook/blocks"],
      },
      build: {
        chunkSizeWarningLimit: 2000,
      },
    });
  },

};

export default config;
