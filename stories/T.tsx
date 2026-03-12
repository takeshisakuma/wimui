import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { addons } from "storybook/internal/preview-api";
import i18n from "../.storybook/i18n";

// Storybook event name for globals updates
const GLOBALS_UPDATED = "globalsUpdated";

export const T = ({ k }: { k: string }) => {
  const { t } = useTranslation(["common", "components", "docs"], { i18n });
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

    // Re-render when i18n language actually changes
    const langHandler = () => setTick((n) => n + 1);
    i18n.on("languageChanged", langHandler);

    return () => {
      i18n.off("languageChanged", langHandler);
      try {
        channel?.off(GLOBALS_UPDATED, globalsHandler);
      } catch {
        // ignore
      }
    };
  }, []);

  // Create a helper to process the translated text
  const processText = (text: any) => {
    if (typeof text !== "string") return text;

    // 1. Remove extra indentation (newline followed by multiple spaces)
    // 2. Convert literal \n to real newlines (if they were double escaped)
    // 3. Convert all newlines to <br />
    return text
      .replace(/\\n/g, "\n")              // Handle literal \n text
      .replace(/\n\s+/g, "\n")            // Remove indentation after newlines
      .replace(/`([^`]+)`/g, "<code>$1</code>") // Convert backticks to code tags
      .replace(/\n/g, "<br />");          // Convert to HTML line breaks
  };

  // Attempt to find the key in any of the namespaces if not explicitly prefixed
  const getTranslated = (key: string) => {
    if (key.includes(":")) return t(key);

    const namespaces = ["common", "components", "docs"];
    for (const ns of namespaces) {
      if (i18n.exists(`${ns}:${key}`)) {
        return t(`${ns}:${key}`);
      }
    }
    return t(key); // Fallback to default behavior
  };

  const translated = getTranslated(k);
  console.log("🔤 Translating", k, "→", translated, `(lang=${i18n.language})`);

  return <span className="wim-t" dangerouslySetInnerHTML={{ __html: processText(translated) }} />;
};
