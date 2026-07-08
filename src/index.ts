import "./layers.scss";
import "./reset.scss";
import "./base.scss";
import "./utilities.scss";
import "./lang.scss";

export * from "./tokens";
export * from "./layout";
export * from "./form";
export * from "./feedback";
export * from "./navigation";
export * from "./data-display";
export * from "./overlay";
export * from "./typography";
export * from "./media";
export * from "./charts";
export * from "./ai";
export * from "./hooks/useAutoResize";
export * from "./hooks/useMediaQuery";
export * from "./hooks/useBreakpoint";
// 個別アイコンの named import 用（tree-shaking 可能・登録副作用なし）。
// 文字列ベースの icon/name API を使う場合は `import "wimui/icons"` が別途必要。
export * from "./icon";
// ライブラリ内蔵の i18next インスタンス（言語切り替え: wimuiI18n.changeLanguage("ja")）
export { wimuiI18n } from "./i18n/instance";
