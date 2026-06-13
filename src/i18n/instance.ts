import { createInstance, type i18n } from "i18next";
import { wimNamespaces, wimResources } from "./generated/resources";

// ライブラリ内蔵の i18next インスタンス。コンポーネントが実際に使用するキーのみを
// en / ja / pt の3言語分バンドルし、利用側のセットアップなしで動作する。
// アプリ側が i18next を初期化している場合（I18nextProvider または initReactI18next）、
// useWimTranslation はそちらを優先するため、このインスタンスは使われない。
//
// 言語の切り替え:
//   import { wimuiI18n } from "wimui";
//   wimuiI18n.changeLanguage("ja");
export const wimuiI18n: i18n = createInstance({
  lng: "en",
  fallbackLng: "en",
  defaultNS: "common",
  ns: wimNamespaces,
  fallbackNS: wimNamespaces,
  resources: wimResources,
  interpolation: { escapeValue: false },
  // resources 同梱のため同期初期化できる（初回レンダリングから翻訳が解決される）
  initAsync: false,
  react: { useSuspense: false },
});

void wimuiI18n.init();
