import React from 'react';
import type { Preview } from '@storybook/react'
import i18n from './i18n'; // i18n設定ファイルをインポート
import '../src/layers.css'; // レイヤー定義を最初にインポート
import '../src/reset.scss'; // reset.scssをインポート
import '../src/base.scss'; // base.scssをインポート
import '../src/utilities.scss'; // utilities.scssをインポート
import '../src/lang.scss'; // lang.scssをインポート
//import '../src/tokens/_semantic-colors.scss'; 

const preview: Preview = {
  initialGlobals: {
    locale: 'en',
    locales: {
      en: { title: 'English', right: '🇺🇸' },
      ja: { title: '日本語', right: '🇯🇵' },
      pt: { title: 'Português', right: '🇵🇹' },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    options: {
      storySort: {
        order: ['Configure', 'ToDo', '*'],
      },
    },
    i18n,
  },
}

export default preview