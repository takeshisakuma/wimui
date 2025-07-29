import React from 'react';
import type { Preview } from '@storybook/react'
import withI18n from 'storybook-react-i18next'
import i18n from '../stories/i18n'; // i18n設定ファイルをインポート
import '../src/reset.scss'; // reset.scssをインポート
import '../src/lang.scss'; // lang.scssをインポート

const preview: Preview = {
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
 i18n,
  },

}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'ja', right: '🇯🇵', title: '日本語' },
        { value: 'pt', right: '🇵🇹', title: 'Português' }
      ],
    },
  },
};






export const decorators = [
  (Story, context) => {
    const { locale } = context.globals;
    
     // 言語変更時にi18nのlanguageを更新し、iframeの中のbodyタグのlang属性も更新
    React.useEffect(() => {
      i18n.changeLanguage(locale);
      document.body.lang = locale; // ここを追加
    }, [locale]);

    return Story(context);
  },
];

export default preview