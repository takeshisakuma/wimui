import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import svgr from "vite-plugin-svgr";
import path from "path";
import i18nAutoNamespacePlugin from "../scripts/i18n-namespace-plugin.js";

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
            find: "jsmediatags",
            replacement: path.resolve(
              process.cwd(),
              "node_modules/jsmediatags/dist/jsmediatags.min.js",
            ),
          },
          {
            find: "storybook/theming",
            replacement: path.resolve(
              process.cwd(),
              "node_modules/storybook/dist/theming",
            ),
          },

        ],
      },
      plugins: [
        i18nAutoNamespacePlugin(),
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
        include: ["jsmediatags"],
        exclude: ["@storybook/blocks"],
        esbuildOptions: {
          define: {
            global: "globalThis",
          },
        },
      },
      build: {
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
          // jsmediatags/build2/jsmediatags.js が ReactNativeFileReader 経由で
          // require("react-native-fs") を呼ぶため、ブラウザビルドでのエラーを防ぐために external 指定が必要
          external: ["react-native-fs"],
        },
      },
    });
  },
};

export default config;
