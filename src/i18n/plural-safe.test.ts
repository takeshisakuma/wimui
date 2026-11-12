import { describe, it, expect, afterEach } from "vitest";
import { setWimLocale, wimTranslate } from "./instance";
import { commonNs } from "./generated/common";
import { componentsNs } from "./generated/components";
import { formNs } from "./generated/form";

/**
 * 内蔵の翻訳（wimTranslate）は複数形を選ばない（T373）。数を差し込む文は、数で語形が変わらない
 * 形にしておく。以前は Gallery が 2 件以上で「3 item selected」、Reaction が 1 件で「1 reactions」、
 * DataGrid の pt が 1 件で「(1 selecionados)」と出ていた。部品が使うのと同じ経路で文を組み立てて、
 * 数 1 と 3 の両方で確かめる。
 */
const CASES = [
  { ns: componentsNs, key: "gallery.selected_count", vars: (n: number) => ({ count: n }) },
  { ns: commonNs, key: "reaction.react_with", vars: (n: number) => ({ emoji: "Thumbs up", count: n }) },
  { ns: commonNs, key: "dataGrid.rows_selected", vars: (n: number) => ({ selected: n }) },
  { ns: formNs, key: "transfer.status_moved_to_target", vars: (n: number) => ({ count: n }) },
  { ns: formNs, key: "transfer.status_moved_to_source", vars: (n: number) => ({ count: n }) },
] as const;

const EXPECTED: Record<string, Record<string, [string, string]>> = {
  en: {
    "gallery.selected_count": ["1 selected", "3 selected"],
    "reaction.react_with": ["Thumbs up, reactions: 1", "Thumbs up, reactions: 3"],
    "dataGrid.rows_selected": ["(1 selected)", "(3 selected)"],
    "transfer.status_moved_to_target": ["Moved to selected: 1", "Moved to selected: 3"],
    "transfer.status_moved_to_source": ["Moved to available: 1", "Moved to available: 3"],
  },
  pt: {
    "gallery.selected_count": ["Selecionados: 1", "Selecionados: 3"],
    "reaction.react_with": ["Thumbs up, reações: 1", "Thumbs up, reações: 3"],
    "dataGrid.rows_selected": ["(selecionados: 1)", "(selecionados: 3)"],
    "transfer.status_moved_to_target": ["Movidos para a lista selecionada: 1", "Movidos para a lista selecionada: 3"],
    "transfer.status_moved_to_source": ["Movidos para a lista disponível: 1", "Movidos para a lista disponível: 3"],
  },
};

afterEach(() => setWimLocale("en"));

describe("数を差し込む文は、数で語形が変わらない", () => {
  for (const lang of ["en", "pt"] as const) {
    for (const { ns, key, vars } of CASES) {
      it(`${lang}: ${key}（1 と 3）`, () => {
        setWimLocale(lang);
        const [one, three] = EXPECTED[lang][key];
        expect(wimTranslate([ns], key, vars(1))).toBe(one);
        expect(wimTranslate([ns], key, vars(3))).toBe(three);
      });
    }
  }
});
