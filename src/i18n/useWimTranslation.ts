import { useCallback, useSyncExternalStore } from "react";
import {
  getWimLocale,
  setWimLocale,
  subscribeWimLocale,
  wimTranslate,
  type WimTranslateOptions,
} from "./instance";

type Namespace = string | readonly string[];

export interface WimTFunction {
  (key: string, options?: WimTranslateOptions): string;
}

// コンポーネント内部用の翻訳フック。i18next / react-i18next には依存しない。
// 内蔵リソース（en/ja/pt、使用キーのみ同梱）からキーを解決し、言語切替は setWimLocale に追従する。
// これにより利用側が i18n をセットアップしていなくても aria-label 等が正しく表示される。
// アプリの言語と同期したい場合はアプリ側で setWimLocale(lng) を呼ぶ。
export function useWimTranslation(ns?: Namespace) {
  const language = useSyncExternalStore(
    subscribeWimLocale,
    getWimLocale,
    getWimLocale, // SSR: 既定ロケールを返す
  );

  const nsKey = Array.isArray(ns) ? ns.join(",") : (ns as string | undefined);
  const t = useCallback<WimTFunction>(
    (key, options) => wimTranslate(ns, key, options),
    // ns の内容が同じなら参照が変わっても t を安定させる
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nsKey],
  );

  return { t, i18n: { language, changeLanguage: setWimLocale } };
}
