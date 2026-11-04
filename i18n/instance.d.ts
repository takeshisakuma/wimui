type LocaleListener = () => void;
/**
 * 名前空間 1 つ分の翻訳（generated/<ns>.ts が出す）。
 * `Key` は型だけ ── その名前空間のキーの union を運び、`t()` の引数を絞る。
 */
export interface WimNamespace<Name extends string = string, Key extends string = string> {
    readonly name: Name;
    /** resources[locale] = ネストしたキーの木 */
    readonly resources: Readonly<Record<string, unknown>>;
    /** 型だけ。実行時には存在しない。 */
    readonly __keys?: Key;
}
/** 現在のロケール（例: "en" / "ja" / "pt"）を返す。 */
export declare function getWimLocale(): string;
/**
 * ライブラリ内蔵コンポーネントの表示言語を切り替える。
 * 未対応の言語コードは言語サブタグ（"ja-JP" → "ja"）で解決を試みる。
 */
export declare function setWimLocale(locale: string): void;
/** ロケール変更を購読する（React 連携用）。返り値で解除。 */
export declare function subscribeWimLocale(listener: LocaleListener): () => void;
export interface WimTranslateOptions {
    /** キー未解決時に返す既定値。未指定ならキー文字列を返す。 */
    defaultValue?: string;
    /** 補間変数（{{name}}）。 */
    [key: string]: unknown;
}
/**
 * 渡された名前空間からキーを解決する。
 * 探索順: 渡した順の名前空間 → en フォールバック。
 * 見つからなければ defaultValue、それも無ければキー文字列を返す（i18next の既定挙動に準拠）。
 *
 * **渡していない名前空間は探さない。** 以前は残りの全名前空間へ探し直していた（fallbackNS 相当）が、
 * それには全部の翻訳を import している必要がある。名前空間の指定違いは、`t()` の型（その名前空間の
 * キーだけを受ける）で tsc が落とす。
 */
export declare function wimTranslate(namespaces: readonly WimNamespace[], key: string, options?: WimTranslateOptions): string;
export {};
