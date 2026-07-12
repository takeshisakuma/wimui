/**
 * stories/*.stories.tsx の @/components/... インポートを
 * from "wimui" / "wimui/<subpath>" 形式に統一するスクリプト（複数行インポート対応）。
 *
 * Peer-heavy コンポーネントはカテゴリ subpath へ振り分ける:
 *   charts/*                                              → wimui/charts
 *   Markdown, QRCode, NodeGraph, ScheduleView,
 *     JsonDiffViewer                                      → wimui/data-display
 *   StreamingText, CodeDiffViewer, MarkdownRenderer,
 *     InteractiveGraph                                    → wimui/ai
 *   その他の公開コンポーネント                             → wimui
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
const TARGET_PATH_RE = /^@\/components\/(?!_internal)([^/]+)\/([^/]+)/;

/** @type {ReadonlySet<string>} */
const DATA_DISPLAY_PEER = new Set([
  "Markdown",
  "QRCode",
  "NodeGraph",
  "ScheduleView",
  "JsonDiffViewer",
]);

/** @type {ReadonlySet<string>} */
const AI_PEER = new Set([
  "StreamingText",
  "CodeDiffViewer",
  "MarkdownRenderer",
  "InteractiveGraph",
]);

/**
 * Map a @/components/... from-path to the package import path.
 * @param {string} from
 * @returns {string | null} package path, or null if not a target
 */
function resolvePackagePath(from) {
  const m = from.match(TARGET_PATH_RE);
  if (!m) return null;
  const category = m[1];
  const component = m[2];

  if (category === "charts") return "wimui/charts";
  if (category === "data-display" && DATA_DISPLAY_PEER.has(component)) {
    return "wimui/data-display";
  }
  if (category === "ai" && AI_PEER.has(component)) {
    return "wimui/ai";
  }
  return "wimui";
}

/**
 * 1ファイル処理。
 * @returns {boolean} 変更があった場合 true
 */
function processFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");

  // 1行 or 複数行の import 文を統一的にマッチ
  // import [type] { A, B,\n  C } from "...";
  const IMPORT_RE = /^import\s+(type\s+)?\{([^}]+)\}\s+from\s+"([^"]+)";?/gm;

  /** @type {Map<string, { values: string[], types: string[] }>} */
  const byPath = new Map();

  function bucket(pkg) {
    if (!byPath.has(pkg)) byPath.set(pkg, { values: [], types: [] });
    return byPath.get(pkg);
  }

  // マッチした範囲を記録して後で削除
  const toRemove = []; // { start, end }

  let m;
  IMPORT_RE.lastIndex = 0;
  while ((m = IMPORT_RE.exec(src)) !== null) {
    const isType = Boolean(m[1]);
    const names = m[2];
    const from = m[3];

    const pkg = resolvePackagePath(from);
    if (!pkg) continue;

    const extracted = names
      .split(",")
      .map((s) => s.trim().replace(/\n/g, "").replace(/\s+/g, " "))
      .filter(Boolean);

    const b = bucket(pkg);
    if (isType) {
      b.types.push(...extracted);
    } else {
      b.values.push(...extracted);
    }

    toRemove.push({ start: m.index, end: m.index + m[0].length });
  }

  if (byPath.size === 0) {
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

  // Prefer stable order: wimui, then category subpaths alphabetically
  const pkgOrder = (p) => {
    if (p === "wimui") return "0:" + p;
    return "1:" + p;
  };
  const packages = [...byPath.keys()].sort((a, b) =>
    pkgOrder(a).localeCompare(pkgOrder(b)),
  );

  let result = src;
  for (const pkg of packages) {
    const { values, types } = byPath.get(pkg);
    const valueNames = [...new Set(values)].sort();
    const typeNames = [...new Set(types)].sort();

    if (valueNames.length > 0) {
      result = mergeOrInsert(result, pkg, valueNames, false);
    }
    if (typeNames.length > 0) {
      result = mergeOrInsert(result, pkg, typeNames, true);
    }
  }

  if (result !== fs.readFileSync(filePath, "utf8")) {
    fs.writeFileSync(filePath, result, "utf8");
    return true;
  }
  return false;
}

/**
 * Merge into an existing import from the same package path, or insert a new line.
 * @param {string} content
 * @param {string} pkg
 * @param {string[]} newNames
 * @param {boolean} isType
 */
function mergeOrInsert(content, pkg, newNames, isType) {
  const escaped = pkg.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = isType
    ? new RegExp(`^import\\s+type\\s+\\{([^}]+)\\}\\s+from\\s+"${escaped}";?`, "m")
    : new RegExp(`^import\\s+\\{([^}]+)\\}\\s+from\\s+"${escaped}";?`, "m");

  const em = content.match(re);
  if (em) {
    const existing = em[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const merged = [...new Set([...existing, ...newNames])].sort();
    const prefix = isType ? "import type " : "import ";
    return content.replace(em[0], `${prefix}{ ${merged.join(", ")} } from "${pkg}";`);
  }

  const line = isType
    ? `import type { ${newNames.join(", ")} } from "${pkg}";`
    : `import { ${newNames.join(", ")} } from "${pkg}";`;
  return insertAfterLastImport(content, [line]);
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
