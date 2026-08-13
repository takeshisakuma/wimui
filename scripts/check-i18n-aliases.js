/**
 * T157: 列見出しキーの正本と別名。
 *
 * `doc.std_column_component` と `table.header_component` は 3 言語とも
 * 「Component / コンポーネント / Componente」でバイト同一なのに、資料が
 * 2 つのキーに割れていた。揃えるのは書き手のため。
 *
 * 削除は出荷物を壊す（common / components / data-display は dist に入る）ので
 * 別名として残し、値が割れたときだけ落とす。使用は増やさない。
 *
 * **引数は取らない。** lint-staged が部分集合を渡しても全量を見る。
 * 別名の値一致も使用ラチェットも、触っていないファイル側で壊れる。
 *
 * Usage: node scripts/check-i18n-aliases.js
 */

import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";
import {
  LANGS,
  flatten,
  auditI18nAliases,
} from "./lib/i18n-aliases.js";

const ROOT = path.join(import.meta.dirname, "..");

function loadLocales() {
  const locales = {};
  for (const lang of LANGS) {
    locales[lang] = {};
    const dir = path.join(ROOT, "public/locales", lang);
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
      const ns = file.replace(/\.json$/, "");
      const json = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
      locales[lang][ns] = flatten(json);
    }
  }
  return locales;
}

function loadSources() {
  const files = [
    ...globSync("docs/**/*.mdx", { cwd: ROOT, posix: true }),
    ...globSync("stories/**/*.{mdx,tsx}", { cwd: ROOT, posix: true }),
  ];
  return files.map((file) => ({
    file,
    source: fs.readFileSync(path.join(ROOT, file), "utf8"),
  }));
}

const errors = auditI18nAliases(loadLocales(), loadSources());
if (errors.length > 0) {
  console.error("✗ i18n 列見出しの別名が契約を外れている（T157）");
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log("✓ 列見出しの正本と別名は値が一致し、別名の使用は増えていない");
