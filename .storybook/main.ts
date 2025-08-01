import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    'storybook-react-i18next',
    '@storybook/addon-controls',
    '@storybook/addon-toolbars',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: ['../public'],//言語ファイル

  viteFinal: async (config) => {
    // Viteの設定をマージ
    return mergeConfig(config, {
      plugins: [
        viteImagemin({
          gifsicle: { optimizationLevel: 7 },
          mozjpeg: { quality: 80 },
          pngquant: { quality: [0.65, 0.8] },
          webp: { quality: 80 },
          svgo: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false
              },
              {
                name: 'removeEmptyAttrs',
                active: false
              }
            ]
          }
        })
      ]
    })
  }
}

export default config