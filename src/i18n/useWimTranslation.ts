import { useContext } from "react";
import { I18nContext, getI18n, useTranslation } from "react-i18next";
import { wimuiI18n } from "./instance";

type Namespace = Parameters<typeof useTranslation>[0];

// コンポーネント内部用の useTranslation ラッパー。
// 優先順位: I18nextProvider のコンテキスト > initReactI18next で登録された
// グローバルインスタンス > ライブラリ内蔵インスタンス（英/日/葡の使用キーのみ同梱）。
// これにより利用側が i18next をセットアップしなくても aria-label 等が正しく表示され、
// セットアップ済みの場合は従来どおりアプリの言語設定に追従する。
// 注意: アプリ側インスタンスを使う場合、wimui の翻訳キー（dist/locales/）の
// ロードはアプリ側の責務になる。
export function useWimTranslation(ns?: Namespace) {
  const context = useContext(I18nContext);
  const hasExternal = Boolean(context?.i18n ?? getI18n());
  return useTranslation(ns, hasExternal ? undefined : { i18n: wimuiI18n });
}
