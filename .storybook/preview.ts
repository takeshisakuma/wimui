import * as React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { addons } from "storybook/internal/preview-api";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../stories/i18nConstants";

import i18n from "./i18n";
// wimui コンポーネントは react-i18next に依存せず内蔵ストア（setWimLocale）で言語を切り替える。
// Storybook のツールバー言語切替を内蔵ストアへ橋渡しし、docs 上でも言語追従させる。
import { setWimLocale } from "../src/i18n/instance";
import { setWimDensity, type WimDensity } from "../src/density";
// 文字列ベースの icon/name API を Storybook 全体で有効化（全アイコン登録）
import "../src/icons";
// 配布と同じ分割エントリを読み込む（tokens = :root トークン, reset = リセット/base）。
// base.scss 単体はトークンを出力しないため、必ず tokens.entry を併せて読み込むこと。
import "../src/styles/tokens.entry.scss";
import "../src/styles/reset.entry.scss";
import "./docs-common.scss";
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

/** html と body の lang 属性を同時更新し、wimui 内蔵ストアの言語も同期する */
const applyLang = (lang: string): void => {
  document.documentElement.lang = lang;
  document.body.lang = lang;
  setWimLocale(lang);
};

const isWimDensity = (v: unknown): v is WimDensity =>
  v === "comfortable" || v === "compact";

const applyDensity = (density: unknown): void => {
  if (isWimDensity(density)) setWimDensity(density);
};

// 初期言語を内蔵ストアへ反映（languageChanged は変更時のみ発火するため）
setWimLocale(i18n.language ?? "en");
setWimDensity("comfortable");

// ① i18n の言語変更イベントを購読（モジュールレベル = 常に有効）
//    T.tsx や他のコードが i18n.changeLanguage() を呼んだ際にも確実に反映される
i18n.on("languageChanged", applyLang);

/** data-theme を document.documentElement に適用（純粋な MDX ページ用） */
const applyTheme = (theme: string): void => {
  if (theme === "dark" || theme === "light") {
    document.documentElement.setAttribute("data-theme", theme);
  }
};

// ② Storybook ツールバーの切替イベントを直接検知（モジュールレベル）
const initChannel = () => {
  try {
    const channel = addons.getChannel();
    if (channel) {
      channel.on(
        GLOBALS_UPDATED,
        ({ globals }: { globals: Record<string, unknown> }) => {
          const locale = globals?.locale as string | undefined;
          if (locale) {
            applyLang(locale);
            if (i18n.language !== locale) i18n.changeLanguage(locale);
          }
          const theme = globals?.theme as string | undefined;
          if (theme) applyTheme(theme);
          applyDensity(globals?.density);
        },
      );
    }
  } catch {
    // チャンネルが初期化前の場合は無視
  }
};
initChannel();

// ③ iframe のフルリロード時: URL の globals パラメータから初期値を読み取る
const syncFromUrl = () => {
  try {
    // window.top へのアクセスは、オリジンが異なる場合に SecurityError を投げる可能性があるため慎重に行う
    const topWin = window.top !== window ? window.top : window;
    if (!topWin) return;

    const search = topWin.location.search;
    const globals = new URLSearchParams(search).get("globals");

    const localeMatch = globals?.match(/locale:([^;]+)/);
    if (localeMatch) {
      const locale = localeMatch[1];
      applyLang(locale);
      if (i18n.language !== locale) i18n.changeLanguage(locale);
    }

    const themeMatch = globals?.match(/theme:([^;]+)/);
    if (themeMatch) applyTheme(themeMatch[1]);

    const densityMatch = globals?.match(/density:([^;]+)/);
    if (densityMatch) applyDensity(densityMatch[1]);
  } catch {
    // クロスオリジンや初期化中のエラーは無視
  }
};
syncFromUrl();


// ─────────────────────────────────────────────────

/** 翻訳ロード完了までストーリーを描画しないゲート（詳細は decorators のコメント） */
const I18nReadyGate = ({ story }: { story: React.ComponentType }) => {
  const { ready } = useTranslation(ALL_NAMESPACES);
  if (!ready) return null;
  return React.createElement(story);
};

const preview: Preview = {
  globalTypes: {
    density: {
      description: "UI density (control heights / paddings)",
      toolbar: {
        title: "Density",
        icon: "collapse",
        items: [
          { value: "comfortable", title: "Comfortable", right: "Default" },
          { value: "compact", title: "Compact", right: "Dense" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    // 翻訳ロード完了前に描画すると、defaultValue / useState に t() を渡す
    // ストーリーで生キーが初期値に固定される（useSuspense: false のため）。
    // VRT/a11y はルートが空の間 waitForStoryReady で待つので、ready まで
    // 何も描画しないことでベースライン汚染（生キーで撮れる）を防ぐ。
    // 注: デコレーターと Story の hooks は同一コンポーネントに合成されるため、
    // Story() の呼び分けを直接書くと hooks 数が変わり React #310 になる。
    // 独立コンポーネント境界（I18nReadyGate）でゲートする。
    ((Story) => React.createElement(I18nReadyGate, { story: Story })) satisfies Decorator,
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: prefersDark ? "dark" : "light",
      attributeName: "data-theme",
    }),
    (Story, context) => {
      applyDensity(context.globals.density ?? "comfortable");
      return Story();
    },
  ],
  initialGlobals: {
    locale: "en",
    density: "comfortable",
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
          "Getting Started",
          ["Installation", "Registry", "Using with AI", "Playground"],
          "Foundation",
          ["Philosophy", "Accessibility", "Voice & Tone", "*"],
          "Token",
          [
            "Overview",
            "Colors",
            "Typography Tokens",
            "Spacings & Radius",
            "Density",
            "Presets",
            "Effects",
            "Breakpoints",
            "PCCS",
            "*",
          ],
          "Standardization",
          [
            "Overview",
            "Styling Standardization",
            "Labeling Standardization",
            "Action Standardization",
            "Input Area Standardization",
            "Numeric Input Standardization",
            "Text Area Standardization",
            "Selection Group Standardization",
            "Range Selection Standardization",
            "Data Display Standardization",
            "Data Indicator Standardization",
            "List Item Standardization",
            "Table Standardization",
            "State Area Standardization",
            "Sequence Standardization",
            "Feedback Standardization",
            "Progress Indicator Standardization",
            "Overlay Standardization",
            "Navigation Standardization",
            "App Layout",
            "QA & Standardization Summary",
            "*",
          ],
          "Architecture",
          [
            "Internal Core Components",
            "CSS Strategy",
            "Z-Index System",
            "Unit Selection",
            "*",
          ],
          "Components",
          [
            "Typography & Icons",
            ["Overview", "*"],
            "Layout",
            ["Overview", "*"],
            "App Shell",
            ["Overview", "*"],
            "Buttons",
            ["Overview", "*"],
            "Basic Inputs",
            ["Overview", "*"],
            "Advanced Inputs",
            ["Overview", "*"],
            "Selection Controls",
            ["Overview", "*"],
            "Pickers & Sliders",
            ["Overview", "*"],
            "Form Layout",
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
            "Media",
            ["Overview", "*"],
            "Visualization",
            ["Overview", "*"],
            "Utilities",
            ["Overview", "*"],
            "Internal",
            ["Overview", "*"],
            "*",
          ],
          "Patterns",
          ["Recipes", "*"],
          "ToDo",
          "*",
        ],
      },
    },
    i18n,
  },
};

export default preview;
