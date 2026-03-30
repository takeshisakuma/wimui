import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { addons } from "storybook/internal/preview-api";
import i18n from "../.storybook/i18n";
import { ALL_NAMESPACES } from "./i18nConstants";

// Storybook event name for globals updates
const GLOBALS_UPDATED = "globalsUpdated";

export const T = ({ k }: { k: string }) => {
  const { t } = useTranslation(ALL_NAMESPACES, { i18n });
  const [, setTick] = useState(0);

  useEffect(() => {
    // Initial sync: read locale from URL globals on mount
    try {
      const topWin = window.top || window;
      const urlParams = new URLSearchParams(topWin.location.search);
      const globals = urlParams.get("globals");
      const match = globals?.match(/locale:([^;]+)/);
      const locale = match ? match[1] : null;
      if (locale && i18n.language !== locale) {
        i18n.changeLanguage(locale);
      }
    } catch {
      // ignore cross-origin errors
    }

    // Listen for Storybook toolbar locale changes via the channel
    let channel: ReturnType<typeof addons.getChannel> | null = null;
    const globalsHandler = ({ globals }: { globals: Record<string, unknown> }) => {
      const locale = globals?.locale as string | undefined;
      if (locale && i18n.language !== locale) {
        i18n.changeLanguage(locale);
      }
    };
    try {
      channel = addons.getChannel();
      channel.on(GLOBALS_UPDATED, globalsHandler);
    } catch {
      // ignore if channel is unavailable
    }

    // Force re-render on language change (react-i18next bindI18n handles this,
    // but explicit tick ensures URL-driven changes also propagate)
    const langHandler = () => setTick((n) => n + 1);
    i18n.on("languageChanged", langHandler);
    i18n.store.on("added", langHandler);

    return () => {
      i18n.off("languageChanged", langHandler);
      i18n.store.off("added", langHandler);
      try {
        channel?.off(GLOBALS_UPDATED, globalsHandler);
      } catch {
        // ignore
      }
    };
  }, []);

  // Create a helper to process the translated text
  const processText = (text: unknown) => {
    if (typeof text !== "string") return text;

    // Helper to escape HTML characters
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

  return <span className="wim-t" dangerouslySetInnerHTML={{ __html: processText(translated) as string }} />;
};
