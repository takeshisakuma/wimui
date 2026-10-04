type LocaleListener = () => void;
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
 * 内蔵リソースからキーを解決する。
 * 探索順: 指定 namespace → 残り全 namespace（fallbackNS 相当） → en フォールバック。
 * 見つからなければ defaultValue、それも無ければキー文字列を返す（i18next の既定挙動に準拠）。
 */
export declare function wimTranslate(ns: string | readonly string[] | undefined, key: string, options?: WimTranslateOptions): string;
export {};
