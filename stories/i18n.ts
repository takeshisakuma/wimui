// stories/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Backendの設定で、ファイルが `/locales/` パス以下にあることを指定します
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en', // 翻訳ファイルがない場合のフォールバック言語
    debug: true, // 開発中はtrueにしておくとデバッグ情報が出力されます
    interpolation: {
      escapeValue: false, // ReactはXSSから保護するため不要
    },
    // Storybookのi18nパネルと連携するために、サポートする言語と初期言語を設定します
    supportedLngs: ['en', 'ja'],
    lng: 'en', // 初期言語
  });

export default i18n;