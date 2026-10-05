import { useCallback, useSyncExternalStore } from "react";
import {
  getWimLocale,
  setWimLocale,
  subscribeWimLocale,
  wimTranslate,
  type WimNamespace,
  type WimTranslateOptions,
} from "./instance";

/** 名前空間が受けるキー（bare と "ns:key" の両方）。 */
export type WimKeyOf<N> =
  N extends WimNamespace<infer Name, infer Key> ? Key | `${Name}:${Key}` : never;

export interface WimTFunction<Key extends string = string> {
  (key: Key, options?: WimTranslateOptions): string;
}

const NONE: readonly WimNamespace[] = [];

// コンポーネント内部用の翻訳フック。i18next / react-i18next には依存しない。
// 内蔵リソース（en/ja/pt、使用キーのみ同梱）からキーを解決し、言語切替は setWimLocale に追従する。
// これにより利用側が i18n をセットアップしていなくても aria-label 等が正しく表示される。
// アプリの言語と同期したい場合はアプリ側で setWimLocale(lng) を呼ぶ。
//
// **名前空間は、文字列ではなく実体（generated/<ns>.ts の定数）で渡す（T318）。**
//   import { commonNs } from "@/i18n/generated/common";
//   const { t } = useWimTranslation(commonNs);
// 文字列で渡す形だと、どの部品がどの翻訳を使うかがバンドラーから見えず、全部の翻訳を 1 つの塊で
// 同梱するしかなかった。`t()` は、渡した名前空間のキーだけを受ける（指定違いは tsc が落とす）。
// 言語だけが要るとき（`i18n.language`）は、引数なしで呼ぶ。
export function useWimTranslation<N extends WimNamespace = never>(ns?: N | readonly N[]) {
  const language = useSyncExternalStore(
    subscribeWimLocale,
    getWimLocale,
    getWimLocale, // SSR: 既定ロケールを返す
  );

  const namespaces: readonly WimNamespace[] =
    ns == null ? NONE : Array.isArray(ns) ? (ns as readonly N[]) : [ns as N];
  const nsKey = namespaces.map((n) => n.name).join(",");
  const t = useCallback<WimTFunction<WimKeyOf<N>>>(
    (key, options) => wimTranslate(namespaces, key, options),
    // 名前空間は定数なので、名前が同じなら配列の参照が変わっても t を安定させる
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nsKey],
  );

  return { t, i18n: { language, changeLanguage: setWimLocale } };
}
