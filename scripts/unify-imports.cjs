/**
 * stories/*.stories.tsx の @/components/... インポートを
 * from "wimui" 形式に統一するスクリプト（複数行インポート対応）。
 *
 * 対象外（変換しない）:
 *   - @/components/_internal/...  (公開APIではない)
 *   - @/media/...                 (静的アセット)
 *   - @/types/...                 (型定義ファイル)
 *   - その他 @/ パス
 *
 * Run: node scripts/unify-imports.cjs
 */

const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

// @/components/(公開カテゴリ)/... のみが対象（_internal は除外）
const TARGET_PATH_RE = /^@\/components\/(?!_internal)/;

/**
 * 1ファイル処理。
 * @returns {boolean} 変更があった場合 true
 */
function processFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");

  // 1行 or 複数行の import 文を統一的にマッチ
  // import [type] { A, B,\n  C } from "...";
  const IMPORT_RE = /^import\s+(type\s+)?\{([^}]+)\}\s+from\s+"([^"]+)";?/gm;

  const wimui_names = [];       // value imports
  const wimui_type_names = [];  // type imports

  // マッチした範囲を記録して後で削除
  const toRemove = []; // { start, end }

  let m;
  IMPORT_RE.lastIndex = 0;
  while ((m = IMPORT_RE.exec(src)) !== null) {
    const isType = Boolean(m[1]);
    const names = m[2];
    const from = m[3];

    if (!TARGET_PATH_RE.test(from)) continue;

    const extracted = names
      .split(",")
      .map((s) => s.trim().replace(/\n/g, "").replace(/\s+/g, " "))
      .filter(Boolean);

    if (isType) {
      wimui_type_names.push(...extracted);
    } else {
      wimui_names.push(...extracted);
    }

    toRemove.push({ start: m.index, end: m.index + m[0].length });
  }

  if (wimui_names.length === 0 && wimui_type_names.length === 0) {
    return false;
  }

  // 後ろから削除（インデックスがずれないよう逆順に処理）
  toRemove.sort((a, b) => b.start - a.start);
  for (const { start, end } of toRemove) {
    // 前後の改行も取り除く
    let s = start;
    let e = end;
    // 行頭まで後退
    while (s > 0 && src[s - 1] !== "\n") s--;
    // 行末の改行まで進む
    while (e < src.length && src[e] === "\n") e++;
    src = src.slice(0, s) + src.slice(e);
  }

  // 新しい import 行を生成
  const newLines = [];
  if (wimui_names.length > 0) {
    const sorted = [...new Set(wimui_names)].sort();
    newLines.push(`import { ${sorted.join(", ")} } from "wimui";`);
  }
  if (wimui_type_names.length > 0) {
    const sorted = [...new Set(wimui_type_names)].sort();
    newLines.push(`import type { ${sorted.join(", ")} } from "wimui";`);
  }

  // 既存の "wimui" import がある場合はそれと合体させる
  const EXISTING_RE = /^import\s+\{([^}]+)\}\s+from\s+"wimui";?/m;
  const EXISTING_TYPE_RE = /^import\s+type\s+\{([^}]+)\}\s+from\s+"wimui";?/m;

  function mergeInto(content, re, newNames) {
    if (newNames.length === 0) return content;
    const em = content.match(re);
    if (em) {
      const existing = em[1]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const merged = [...new Set([...existing, ...newNames])].sort();
      const isType = re.source.includes("type");
      const prefix = isType ? "import type " : "import ";
      return content.replace(em[0], `${prefix}{ ${merged.join(", ")} } from "wimui";`);
    }
    return content;
  }

  // まず既存 wimui import にマージを試みる
  let result = src;
  if (wimui_names.length > 0) {
    const before = result;
    result = mergeInto(result, EXISTING_RE, wimui_names);
    if (result === before) {
      // 既存がなければ最後の import 行の後に挿入
      result = insertAfterLastImport(result, newLines.filter((l) => !l.includes("import type")));
    }
  }
  if (wimui_type_names.length > 0) {
    const before = result;
    result = mergeInto(result, EXISTING_TYPE_RE, wimui_type_names);
    if (result === before) {
      result = insertAfterLastImport(result, newLines.filter((l) => l.includes("import type")));
    }
  }

  if (result !== src || result !== fs.readFileSync(filePath, "utf8")) {
    fs.writeFileSync(filePath, result, "utf8");
    return true;
  }
  return false;
}

function insertAfterLastImport(content, lines) {
  if (lines.length === 0) return content;
  const contentLines = content.split("\n");
  let lastImportIdx = -1;
  for (let i = 0; i < contentLines.length; i++) {
    if (/^import\s/.test(contentLines[i])) lastImportIdx = i;
  }
  const insertAt = lastImportIdx + 1;
  contentLines.splice(insertAt, 0, ...lines);
  return contentLines.join("\n");
}

const files = globSync("stories/**/*.stories.{tsx,ts}", {
  cwd: path.join(__dirname, ".."),
  absolute: true,
  posix: false,
});

let changed = 0;
for (const f of files) {
  if (processFile(f)) {
    console.log("Updated:", path.relative(process.cwd(), f));
    changed++;
  }
}

console.log(`\nDone. ${changed} file(s) updated.`);
