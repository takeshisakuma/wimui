// stories/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { ALL_NAMESPACES } from "../stories/i18nConstants";

i18n
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
      bindI18nStore: "added",
    },
  });

export default i18n;
