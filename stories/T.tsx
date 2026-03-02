import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../.storybook/i18n";

// Sync locale from Storybook globals (e.g. ?globals=locale:ja)
const syncLocaleFromGlobals = () => {
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
    // ignore cross‑origin errors
  }
};

export const T = ({ k }: { k: string }) => {
  const { t } = useTranslation("translation", { i18n });
  const [, setTick] = useState(0);

  useEffect(() => {
    // Initial sync with Storybook toolbar
    syncLocaleFromGlobals();
    const handler = () => setTick((t) => t + 1);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  // Debug output – can be removed in production
  console.log("🔤 Translating", k, "→", t(k), `(lang=${i18n.language})`);
  return <span dangerouslySetInnerHTML={{ __html: t(k) }} />;
};
