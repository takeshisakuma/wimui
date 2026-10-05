import { wimLocales } from "./generated/locales";

// ライブラリ内蔵の軽量 i18n ストア。
//
// i18next / react-i18next には依存しない（point 5: i18n 機構の脱結合）。コンポーネントが
// 実際に使用するキーのみを en / ja / pt の3言語分同梱し、利用側のセットアップなしで動作する。
// これらのライブラリが未インストールでもクラッシュせず、将来 i18n 機構を差し替えても
// 公開 API（setWimLocale / getWimLocale）は変わらない。
//
// **このファイルは翻訳の実体を import しない（T318）。** ロケールの状態と、渡された名前空間から
// キーを引く関数だけを持つ。翻訳は名前空間ごとのファイル（generated/<ns>.ts）にあり、部品が自分の
// 使う分だけを import する。ここで全部を import すると、`import { Button }` だけの利用者まで
// 全部品の文言を受け取る（以前の形。`{ Button }` 単体 15.15 kB のうち約 10 kB が翻訳だった）。
//
// アプリの i18next と言語を同期したい場合は、アプリ側の言語切替時に setWimLocale を呼ぶ:
//   import { setWimLocale } from "wimui";
//   i18n.on("languageChanged", (lng) => setWimLocale(lng));

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

const FALLBACK_LOCALE = "en";

let currentLocale: string = wimLocales.includes(FALLBACK_LOCALE)
  ? FALLBACK_LOCALE
  : (wimLocales[0] ?? FALLBACK_LOCALE);

const listeners = new Set<LocaleListener>();

/** 現在のロケール（例: "en" / "ja" / "pt"）を返す。 */
export function getWimLocale(): string {
  return currentLocale;
}

/**
 * ライブラリ内蔵コンポーネントの表示言語を切り替える。
 * 未対応の言語コードは言語サブタグ（"ja-JP" → "ja"）で解決を試みる。
 */
export function setWimLocale(locale: string): void {
  const base = typeof locale === "string" ? locale.split("-")[0] : "";
  const next = wimLocales.includes(locale)
    ? locale
    : wimLocales.includes(base)
      ? base
      : locale;
  if (next === currentLocale) return;
  currentLocale = next;
  for (const listener of listeners) listener();
}

/** ロケール変更を購読する（React 連携用）。返り値で解除。 */
export function subscribeWimLocale(listener: LocaleListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function resolvePath(source: unknown, dottedKey: string): unknown {
  return dottedKey.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);
}

function lookup(locale: string, namespaces: readonly WimNamespace[], key: string): unknown {
  // "common:a11y.close" のような明示 namespace 付きキーに対応
  const colon = key.indexOf(":");
  if (colon !== -1) {
    const explicit = namespaces.find((ns) => ns.name === key.slice(0, colon));
    const val = resolvePath(explicit?.resources[locale], key.slice(colon + 1));
    if (val !== undefined) return val;
  }
  for (const ns of namespaces) {
    const val = resolvePath(ns.resources[locale], key);
    if (val !== undefined) return val;
  }
  return undefined;
}

function interpolate(template: string, options?: Record<string, unknown>): string {
  if (!options) return template;
  return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, name: string) => {
    const value = options[name];
    return value === undefined || value === null ? match : String(value);
  });
}

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
export function wimTranslate(
  namespaces: readonly WimNamespace[],
  key: string,
  options?: WimTranslateOptions,
): string {
  let value = lookup(currentLocale, namespaces, key);
  if (value === undefined && currentLocale !== FALLBACK_LOCALE) {
    value = lookup(FALLBACK_LOCALE, namespaces, key);
  }

  if (typeof value === "string") return interpolate(value, options);
  return options?.defaultValue ?? key;
}
