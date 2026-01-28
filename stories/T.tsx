import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../.storybook/i18n";

let isSyncRunning = false;

const startGlobalSync = () => {
  if (isSyncRunning) return;
  isSyncRunning = true;

  setInterval(() => {
    try {
      // Storybookの親フレームのURLを確認
      const topWin = window.top || window;
      const urlParams = new URLSearchParams(topWin.location.search);
      const globalsParam = urlParams.get("globals");

      let targetLocale = null;

      if (globalsParam) {
        // globals=locale:ja; などのパラメーターがある場合
        const match = globalsParam.match(/locale:([^;]+)/);
        if (match) {
          targetLocale = match[1];
        }
      } else if (urlParams.has("path")) {
        // globalsパラメーターがないが Storybook のパスがある場合 -> デフォルト言語(en)とみなす
        targetLocale = "en";
      }

      // どちらでも取れない場合は localStorage (初期表示用)
      if (!targetLocale) {
        targetLocale = localStorage.getItem("i18nextLng");
      }

      // 最終的なフォールバック
      if (!targetLocale) {
        targetLocale = "en";
      }

      const currentLang = i18n.language;
      if (targetLocale && currentLang !== targetLocale) {
        // 言語コードが部分的に一致（en-US と en など）しているだけの場合は無視する
        if (
          !currentLang.startsWith(targetLocale) &&
          !targetLocale.startsWith(currentLang)
        ) {
          console.log(
            `[T-GlobalSync] Detection: target=${targetLocale}, current=${currentLang}`,
          );
          i18n.changeLanguage(targetLocale);
        } else if (currentLang.length !== targetLocale.length) {
          // 精密な比較が必要な場合（例: en と en-US を厳密に分けたい場合）はここを調整
          // 今回は簡易的に en への切り替えを優先
          if (targetLocale === "en" && currentLang !== "en") {
            console.log(
              `[T-GlobalSync] Force switching to en: current=${currentLang}`,
            );
            i18n.changeLanguage("en");
          }
        }
      }
    } catch {
      // 異なるドメインの iframe などで window.top にアクセスできない場合のセーフティ
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

  return <>{t(k)}</>;
};
