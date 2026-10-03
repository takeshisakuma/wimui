// stories/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { ALL_NAMESPACES } from "../stories/i18nConstants";

/**
 * 初期化（＝ `ns` の全 namespace の読み込みと、最初の `languageChanged`）が終わると解決する。
 * `preview.ts` の loader がこれを待ってから描画を始める（理由はそちらのコメント）。
 */
export const i18nReady = i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "ja", "pt"],
    ns: ALL_NAMESPACES,
    fallbackNS: ALL_NAMESPACES,
    defaultNS: "common",
    lng: "en",
    react: {
      useSuspense: false,
      bindI18n: "languageChanged",
      bindI18nStore: "added",
    },

  });

export default i18n;
