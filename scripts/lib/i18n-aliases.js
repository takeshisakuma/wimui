/**
 * T157: 列見出し「コンポーネント」の正本と別名。
 *
 * 削除は出荷物を壊す（`common` / `components` / `data-display` は dist に入る）。
 * 残す以上、値が割れたら「同じ列なのに別の語」になるので、バイト同一を見る。
 *
 * 新しい資料の見出しは正本 `doc.std_column_component` を使う。
 * `table.header_component` の使用は増やさない（ラチェット）。
 */

export const LANGS = ["en", "ja", "pt"];

/** 正本。`check-choice-matrix.js` が新しい表に要求しているキーでもある。 */
export const CANONICAL = { ns: "common", key: "doc.std_column_component" };

/**
 * 正本と同じ値でなければならないキー。
 * ns は locale ファイル名（拡張子なし）。key は flatten したドットパス。
 */
export const ALIASES = [
  { ns: "common", key: "std.column_component" },
  { ns: "common", key: "std.std_column_component" },
  { ns: "components", key: "table.header_component" },
  { ns: "data-display", key: "table.header_component" },
  { ns: "docs_guide_common", key: "table.header_component" },
  { ns: "docs_guide_standardization", key: "doc.std_column_component" },
];

/**
 * docs / stories での `table.header_component` 使用上限。
 * 減らしたらこの値を下げてコミットする。増やしてはいけない。
 *
 * 2026-08-14 実測: MDX 35 + `ComponentDashboard` を正本へ移した分 0。
 * （起票時の 33 は `AppLayout` の 7 回を数え切れていなかった。）
 */
export const ALIAS_USE_BASELINE = 35;

/** `<T k="table.header_component" />` と `k={'table.header_component'}`。複数形は拾わない。 */
export const ALIAS_USE_RE = /k=\{?["']table\.header_component["']\}?/g;

export function flatten(obj, prefix = "", out = {}) {
  if (obj == null || typeof obj !== "object" || Array.isArray(obj)) {
    if (prefix) out[prefix] = obj;
    return out;
  }
  for (const [k, v] of Object.entries(obj)) {
    const next = prefix ? `${prefix}.${k}` : k;
    if (v != null && typeof v === "object" && !Array.isArray(v)) {
      flatten(v, next, out);
    } else {
      out[next] = v;
    }
  }
  return out;
}

/**
 * @param {Record<string, Record<string, Record<string, string>>>} locales
 *   locales[lang][ns] = flatten 済み { dottedKey: value }
 * @param {Array<{ file: string, source: string }>} sources
 *   docs / stories の本文
 * @param {{ aliasUseBaseline?: number }} [opts]
 * @returns {string[]}
 */
export function auditI18nAliases(locales, sources, opts = {}) {
  const baseline = opts.aliasUseBaseline ?? ALIAS_USE_BASELINE;
  const errors = [];

  for (const lang of LANGS) {
    const byNs = locales[lang];
    if (!byNs) {
      errors.push(`${lang}: locale が無い`);
      continue;
    }
    const canonicalNs = byNs[CANONICAL.ns];
    const canonical = canonicalNs?.[CANONICAL.key];
    if (typeof canonical !== "string") {
      errors.push(
        `${lang}: 正本 ${CANONICAL.ns}:${CANONICAL.key} が無い（削除は破壊的変更）`,
      );
      continue;
    }
    for (const alias of ALIASES) {
      const value = byNs[alias.ns]?.[alias.key];
      if (typeof value !== "string") {
        errors.push(
          `${lang}: 別名 ${alias.ns}:${alias.key} が無い（削除は破壊的変更。出荷物に残す）`,
        );
        continue;
      }
      if (value !== canonical) {
        errors.push(
          `${lang}: ${alias.ns}:${alias.key} が正本と違う（"${value}" ≠ "${canonical}"）`,
        );
      }
    }
  }

  let uses = 0;
  const byFile = [];
  for (const { file, source } of sources) {
    const n = (source.match(ALIAS_USE_RE) || []).length;
    if (n > 0) {
      uses += n;
      byFile.push(`${file} (${n})`);
    }
  }
  if (uses > baseline) {
    errors.push(
      `docs/stories の table.header_component が ${uses} 回（baseline ${baseline}）。` +
        `新しい資料は doc.std_column_component を使うこと。\n  ${byFile.join("\n  ")}`,
    );
  } else if (uses < baseline) {
    errors.push(
      `table.header_component の使用が ${uses} 回に減っている。` +
        `scripts/lib/i18n-aliases.js の ALIAS_USE_BASELINE を ${uses} に下げること。`,
    );
  }

  return errors;
}
