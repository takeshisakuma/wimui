import { useTranslation } from "react-i18next";
import i18n from "../.storybook/i18n";
import { ALL_NAMESPACES } from "./i18nConstants";

// Storybook event name for globals updates

export const T = ({ k }: { k: string }) => {
  const { t } = useTranslation(ALL_NAMESPACES, { i18n });

  const processText = (text: unknown): string => {
    if (typeof text !== "string") {
      if (text === null || typeof text === "undefined") return "";
      return String(text);
    }

    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    return text
      .replace(/\\n/g, "\n")
      .replace(/\n\s+/g, "\n")
      .replace(/`([^`]+)`/g, (_match, code) => `<code>${escapeHtml(code)}</code>`)
      .replace(/\n/g, "<br />");
  };

  const translated = t(k);

  return (
    <span
      className="wim-t"
      dangerouslySetInnerHTML={{ __html: processText(translated) }}
    />
  );
};

