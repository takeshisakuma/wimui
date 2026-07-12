// グローバル CSS（トークン / リセット）はバレルから import しない。
// バンドル成果物では styles.css をコンポーネント専用に保ち、トークンとリセットは
// それぞれ wimui/tokens.css・wimui/reset.css として opt-in で読み込ませる。
//   import "wimui/tokens.css";  // 必須: :root{--wim-*}
//   import "wimui/styles.css";  // 必須: コンポーネント CSS
//   import "wimui/reset.css";   // 任意: 意見の強いリセット/base
// Root barrel must import cleanly in non-bundler/Node contexts, so it excludes
// components that eagerly import an optional peer: the whole `charts` category
// (recharts) and the peer-heavy members of ai/data-display. Those remain
// available via their category subpath (`wimui/charts`, `wimui/data-display`,
// `wimui/ai`) or per-component subpath — see src/{ai,data-display}.ts.
export * from "./tokens";
export * from "./layout";
export * from "./form";
export * from "./feedback";
export * from "./navigation";
export * from "./data-display-core";
export * from "./overlay";
export * from "./typography";
export * from "./media";
export * from "./ai-core";
export * from "./hooks/useAutoResize";
export * from "./hooks/useMediaQuery";
export * from "./hooks/useBreakpoint";
// 個別アイコンの named import 用（tree-shaking 可能・登録副作用なし）。
// 文字列ベースの icon/name API を使う場合は `import "wimui/icons"` が別途必要。
export * from "./icon";
// ライブラリ内蔵コンポーネントの表示言語制御（i18next 非依存）。
//   setWimLocale("ja");  // 内蔵 UI 文言を日本語へ
//   getWimLocale();      // 現在のロケール
// アプリの i18next と同期したい場合は言語切替時に setWimLocale(lng) を呼ぶ。
export { setWimLocale, getWimLocale } from "./i18n/instance";
