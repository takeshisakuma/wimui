// stories/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Backendの設定で、ファイルが `/locales/` パス以下にあることを指定
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en", // 翻訳ファイルがない場合のフォールバック言語
    debug: true, // 開発中はtrueにしておくとデバッグ情報が出力されます
    interpolation: {
      escapeValue: false, // ReactはXSSから保護するため不要
    },
    // Storybookのi18nパネルと連携するために、サポートする言語と初期言語を設定
    supportedLngs: ["en", "ja", "pt"],
    ns: [
      "common",
      "components",
      "docs",
      "docs_actions",
      "docs_display",
      "docs_inputs",
      "docs_layout",
      "docs_navigation",
      "docs_overlay",
      "docs_stories",
      "docs_feedback",
      "docs_media",
      "docs_utility",
      "docs_guide_layout",
      "docs_guide_navigation",
      "docs_guide_forms",
      "docs_guide_data",
      "docs_guide_components",
      "docs_guide_philosophy",
      "docs_guide_common"
    ],
    fallbackNS: [
      "docs_stories",
      "docs_feedback",
      "docs_media",
      "docs_utility",
      "docs_guide_layout",
      "docs_guide_navigation",
      "docs_guide_forms",
      "docs_guide_data",
      "docs_guide_components",
      "docs_guide_philosophy",
      "docs_guide_common",
      "docs_actions",
      "docs_inputs",
      "docs_display",
      "docs_navigation",
      "docs_overlay",
      "docs_layout",
      "common",
      "components",
    ],
    defaultNS: "common",
    lng: "en", // 初期言語
  });

export default i18n;
