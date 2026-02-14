import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import svgr from "vite-plugin-svgr";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../docs/**/*.mdx",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
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
      resolve: {
        alias: [
          {
            find: "storybook/internal/theming",
            replacement: path.resolve(
              process.cwd(),
              "node_modules/storybook/dist/theming/index.js"
            ),
          },
        ],
      },
      plugins: [
        {
          name: "fix-vitest-path",
          transformIndexHtml(html: string) {
            return html.replace(
              /\/vite-inject-mocker-entry\.js/g,
              "./vite-inject-mocker-entry.js"
            );
          },
        },
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
    });
  },
};

export default config;
