import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../.storybook/i18n";

let isSyncRunning = false;

const startGlobalSync = () => {
  if (isSyncRunning) return;
  isSyncRunning = true;

  setInterval(() => {
    try {
      // Check the URL of Storybook's parent frame
      const topWin = window.top || window;
      const urlParams = new URLSearchParams(topWin.location.search);
      const globalsParam = urlParams.get("globals");

      let targetLocale = null;

      if (globalsParam) {
        // If there are parameters like globals=locale:ja;
        const match = globalsParam.match(/locale:([^;]+)/);
        if (match) {
          targetLocale = match[1];
        }
      } else if (urlParams.has("path")) {
        // If there is no globals parameter but a Storybook path exists -> assume default language (en)
        targetLocale = "en";
      }

      // If neither can be obtained, use localStorage (for initial display)
      if (!targetLocale) {
        targetLocale = localStorage.getItem("i18nextLng");
      }

      // Final fallback
      if (!targetLocale) {
        targetLocale = "en";
      }

      const currentLang = i18n.language;
      if (targetLocale && currentLang !== targetLocale) {
        // Ignore if the language code matches only partially (e.g. en-US and en)
        if (
          !currentLang.startsWith(targetLocale) &&
          !targetLocale.startsWith(currentLang)
        ) {
          i18n.changeLanguage(targetLocale);
        } else if (currentLang.length !== targetLocale.length) {
          // Adjust here if precise comparison is needed (e.g. if you want to strictly separate en and en-US)
          // This time, prioritize switching to en simply
          if (targetLocale === "en" && currentLang !== "en") {
            i18n.changeLanguage("en");
          }
        }
      }
    } catch {
      // Safety for cases where window.top cannot be accessed (e.g. iframe of a different domain)
    }
  }, 500);
};

export const T = ({ k }: { k: string }) => {
  const { t } = useTranslation("translation", { i18n });
  const [, setTick] = useState(0);

  useEffect(() => {
    startGlobalSync();

    const handleLangChange = () => {
      setTick((tick) => tick + 1);
    };

    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, []);

  console.log('Translating:', k, 'to:', t(k), 'language:', i18n.language);
  return <>{t(k)}</>;
};
