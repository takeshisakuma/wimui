// UMD（script タグ）利用ではバンドル分割の余地がないため、単一の CSS 成果物
// （wimui.umd.css）にトークン・リセット・コンポーネントを全て含める。
// また、アイコンを自動登録して文字列ベースの icon/name API をそのまま使えるようにする。
import "./styles/tokens.entry.scss";
import "./styles/reset.entry.scss";
import "./icons";
export * from "./index";
