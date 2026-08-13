import { describe, it, expect } from "vitest";
import {
  LANGS,
  CANONICAL,
  ALIASES,
  ALIAS_USE_BASELINE,
  flatten,
  auditI18nAliases,
} from "./lib/i18n-aliases.js";

/**
 * 契約を実物と変異で固定する（T157）。
 *
 * 受け入れは「正本と別名が 3 言語とも同じ語」かつ「新しい資料が別名を増やさない」。
 * 削除は出荷物を壊すので、無いことを緑にしない。
 */

function emptyLocales() {
  const locales = {};
  for (const lang of LANGS) locales[lang] = {};
  return locales;
}

function withComponent(locales, lang, value) {
  const next = structuredClone(locales);
  const set = (ns, key) => {
    next[lang][ns] ??= {};
    next[lang][ns][key] = v;
  };
  const word = { en: "Component", ja: "コンポーネント", pt: "Componente" }[lang];
  const v = value ?? word;
  set(CANONICAL.ns, CANONICAL.key, v);
  for (const alias of ALIASES) set(alias.ns, alias.key, v);
  return next;
}

function alignedLocales() {
  let locales = emptyLocales();
  for (const lang of LANGS) locales = withComponent(locales, lang);
  return locales;
}

describe("check-i18n-aliases (T157)", () => {
  it("揃った locales と baseline どおりの使用は通る", () => {
    const sources = Array.from({ length: ALIAS_USE_BASELINE }, (_, i) => ({
      file: `docs/f${i}.mdx`,
      source: `<T k="table.header_component" />`,
    }));
    expect(auditI18nAliases(alignedLocales(), sources)).toEqual([]);
  });

  it("別名の値を正本からずらすと鳴る", () => {
    const locales = alignedLocales();
    locales.en.components["table.header_component"] = "Widget";
    const errors = auditI18nAliases(locales, [], { aliasUseBaseline: 0 });
    expect(errors.some((e) => e.includes("components:table.header_component"))).toBe(
      true,
    );
  });

  it("正本を消すと鳴る（削除は破壊的変更）", () => {
    const locales = alignedLocales();
    delete locales.ja.common["doc.std_column_component"];
    const errors = auditI18nAliases(locales, [], { aliasUseBaseline: 0 });
    expect(errors.some((e) => e.includes("正本") && e.includes("ja"))).toBe(true);
  });

  it("別名を消すと鳴る（出荷物に残す）", () => {
    const locales = alignedLocales();
    delete locales.pt["data-display"]["table.header_component"];
    const errors = auditI18nAliases(locales, [], { aliasUseBaseline: 0 });
    expect(errors.some((e) => e.includes("data-display:table.header_component"))).toBe(
      true,
    );
  });

  it("別名の使用が増えると鳴る", () => {
    const sources = [
      { file: "docs/a.mdx", source: `<T k="table.header_component" />`.repeat(2) },
    ];
    const errors = auditI18nAliases(alignedLocales(), sources, {
      aliasUseBaseline: 1,
    });
    expect(errors.some((e) => e.includes("2 回"))).toBe(true);
  });

  it("使用が減ったら baseline を下げろと鳴る", () => {
    const errors = auditI18nAliases(alignedLocales(), [], { aliasUseBaseline: 1 });
    expect(errors.some((e) => e.includes("ALIAS_USE_BASELINE"))).toBe(true);
  });

  it("複数形 table.header_components は数えない", () => {
    const sources = [
      { file: "docs/a.mdx", source: `<T k="table.header_components" />` },
    ];
    expect(
      auditI18nAliases(alignedLocales(), sources, { aliasUseBaseline: 0 }),
    ).toEqual([]);
  });

  it("flatten は入れ子をドットパスにする", () => {
    expect(flatten({ doc: { std_column_component: "Component" } })).toEqual({
      "doc.std_column_component": "Component",
    });
  });
});
