import type { Preview } from "@storybook/react";
import { addons } from "storybook/internal/preview-api";

import i18n from "./i18n";
import "../src/layers.scss";
import "../src/reset.scss";
import "../src/base.scss";
import "../src/utilities.scss";
import "../src/lang.scss";
import "./docs-dark-mode.scss";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const darkMQ =
  typeof window !== "undefined"
    ? window.matchMedia?.("(prefers-color-scheme: dark)")
    : null;

const prefersDark = darkMQ?.matches ?? false;

// 純粋な MDX ページ（デコレーターが動作しないページ）のために初期 data-theme を設定する
// これがないと prefers-color-scheme でトークンは dark になるが Storybook docs 背景は white のままになる
if (typeof document !== "undefined" && !document.documentElement.getAttribute("data-theme")) {
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

// システムのダーク/ライト切り替えに追従して data-theme を更新する
darkMQ?.addEventListener("change", (e) => {
  // ユーザーがツールバーで手動切替している場合は上書きしない
  const current = document.documentElement.getAttribute("data-theme");
  if (current === "light" && e.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (current === "dark" && !e.matches) {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

// ─────────────────────────────────────────────────
// 動的タイポグラフィ最適化
// lang.scss の body[lang="ja"] セレクタを機能させるため
// html/body の lang 属性を言語切替に連動して更新する
// ─────────────────────────────────────────────────
const GLOBALS_UPDATED = "globalsUpdated";

/** html と body の lang 属性を同時更新 */
const applyLang = (lang: string): void => {
  document.documentElement.lang = lang;
  document.body.lang = lang;
};

// ① i18n の言語変更イベントを購読（モジュールレベル = 常に有効）
//    T.tsx や他のコードが i18n.changeLanguage() を呼んだ際にも確実に反映される
i18n.on("languageChanged", applyLang);

// ② Storybook ツールバーの切替イベントを直接検知（モジュールレベル）
//    ツールバーでロケールを変えると GLOBALS_UPDATED が発火する
try {
  const channel = addons.getChannel();
  channel.on(
    GLOBALS_UPDATED,
    ({ globals }: { globals: Record<string, unknown> }) => {
      const locale = globals?.locale as string | undefined;
      if (locale) {
        applyLang(locale);
        if (i18n.language !== locale) i18n.changeLanguage(locale);
      }
    },
  );
} catch {
  // チャンネルが初期化前の場合は無視（③ の URL 読み取りでカバー）
}

// ③ iframe のフルリロード時: URL の globals パラメータから初期言語を読み取る
//    ロケール切替で iframe がリロードされる場合はこちらが機能する
try {
  const topWin = window.top || window;
  const globals = new URLSearchParams(topWin.location.search).get("globals");
  const match = globals?.match(/locale:([^;]+)/);
  if (match) {
    const locale = match[1];
    applyLang(locale);
    if (i18n.language !== locale) i18n.changeLanguage(locale);
  }
} catch {
  // cross-origin エラーは無視
}

// ─────────────────────────────────────────────────

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: prefersDark ? "dark" : "light",
      attributeName: "data-theme",
    }),
  ],
  initialGlobals: {
    locale: "en",
    locales: {
      en: { title: "English", right: "🇺🇸" },
      ja: { title: "日本語", right: "🇯🇵" },
      pt: { title: "Português", right: "🇵🇹" },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "error",
    },
    options: {
      storySort: {
        order: [
          "Architecture",
          ["Standardization Overview", "QA & Standardization Summary"],
          "Components",
          [
            "Internal",
            ["Overview", "*"],
            "Application Shell",
            ["Overview", "*"],
            "Basic Inputs",
            ["Overview", "*"],
            "Advanced Inputs",
            ["Overview", "*"],
            "Buttons",
            ["Overview", "*"],
            "Form Layout",
            ["Overview", "*"],
            "Selection Controls",
            ["Overview", "*"],
            "Pickers & Sliders",
            ["Overview", "*"],
            "Data Containers",
            ["Overview", "*"],
            "Data Indicators",
            ["Overview", "*"],
            "Data Structures",
            ["Overview", "*"],
            "Alerts & Notifications",
            ["Overview", "*"],
            "Overlays",
            ["Overview", "*"],
            "Loading States",
            ["Overview", "*"],
            "Navigation Elements",
            ["Overview", "*"],
            "Navigation Utilities",
            ["Overview", "*"],
            "Layout",
            ["Overview", "*"],
            "Media",
            ["Overview", "*"],
            "Typography & Icons",
            ["Overview", "*"],
            "Visualization",
            ["Overview", "*"],
            "Utilities",
            ["Overview", "*"],
            "*",
          ],
          "Configure",
          "ToDo",
          "*",
        ],
      },
    },
    i18n,
  },
};

export default preview;
