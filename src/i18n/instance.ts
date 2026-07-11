import { wimNamespaces, wimResources } from "./generated/resources";

// ライブラリ内蔵の軽量 i18n ストア。
//
// i18next / react-i18next には依存しない（point 5: i18n 機構の脱結合）。コンポーネントが
// 実際に使用するキーのみを en / ja / pt の3言語分同梱し、利用側のセットアップなしで動作する。
// これらのライブラリが未インストールでもクラッシュせず、将来 i18n 機構を差し替えても
// 公開 API（setWimLocale / getWimLocale）は変わらない。
//
// アプリの i18next と言語を同期したい場合は、アプリ側の言語切替時に setWimLocale を呼ぶ:
//   import { setWimLocale } from "wimui";
//   i18n.on("languageChanged", (lng) => setWimLocale(lng));

type LocaleListener = () => void;

const SUPPORTED_LOCALES = Object.keys(wimResources);
const FALLBACK_LOCALE = "en";
const DEFAULT_NS = "common";

let currentLocale: string = SUPPORTED_LOCALES.includes(FALLBACK_LOCALE)
  ? FALLBACK_LOCALE
  : (SUPPORTED_LOCALES[0] ?? FALLBACK_LOCALE);

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
  const next = SUPPORTED_LOCALES.includes(locale)
    ? locale
    : SUPPORTED_LOCALES.includes(base)
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

function lookup(locale: string, nsList: string[], key: string): unknown {
  const bundle = wimResources[locale] as Record<string, unknown> | undefined;
  if (!bundle) return undefined;
  // "common:a11y.close" のような明示 namespace 付きキーに対応
  const colon = key.indexOf(":");
  if (colon !== -1) {
    const explicitNs = key.slice(0, colon);
    const rest = key.slice(colon + 1);
    const val = resolvePath(bundle[explicitNs], rest);
    if (val !== undefined) return val;
  }
  for (const ns of nsList) {
    const val = resolvePath(bundle[ns], key);
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
 * 内蔵リソースからキーを解決する。
 * 探索順: 指定 namespace → 残り全 namespace（fallbackNS 相当） → en フォールバック。
 * 見つからなければ defaultValue、それも無ければキー文字列を返す（i18next の既定挙動に準拠）。
 */
export function wimTranslate(
  ns: string | readonly string[] | undefined,
  key: string,
  options?: WimTranslateOptions,
): string {
  const requested = ns == null ? [DEFAULT_NS] : Array.isArray(ns) ? [...ns] : [ns as string];
  const searchNs = [
    ...requested,
    ...wimNamespaces.filter((n) => !requested.includes(n)),
  ];

  let value = lookup(currentLocale, searchNs, key);
  if (value === undefined && currentLocale !== FALLBACK_LOCALE) {
    value = lookup(FALLBACK_LOCALE, searchNs, key);
  }

  if (typeof value === "string") return interpolate(value, options);
  return options?.defaultValue ?? key;
}
