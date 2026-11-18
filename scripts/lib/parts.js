/**
 * 部品の内側の部位名（`data-part="…"`）を、部品のソースから集める（T384）。
 *
 * 部位名は利用者が CSS で狙う公開の約束（`[data-part="day"]`）なので、
 * `check:part-api` はこれをスナップショットで凍らせ、docgen は文書の Anatomy 節に出す。
 * **2 つが同じ関数を通る**ようにここへ置く（片方だけ数え方を直して食い違わないため）。
 *
 * 値は文字列の直書きだけを認める。`data-part={x}` のように式で渡すと、ソースからは
 * 名前が読めず、凍らせられない ── `dynamic` として返し、検査で落とす。
 */
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';

const LITERAL = /data-part=(?:"([^"]*)"|'([^']*)'|\{\s*"([^"]*)"\s*\}|\{\s*'([^']*)'\s*\})/g;
const ANY = /data-part=/g;
/** 部位名の書き方: 小文字の kebab-case（`nav-button`）。 */
export const PART_NAME = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;

/**
 * 1 ファイルの中身から部位名を読む。
 * @returns {{ parts: string[], dynamic: number[], invalid: { name: string, line: number }[] }}
 *   parts は重複を除いて並べたもの。dynamic / invalid は行番号（1 始まり）。
 */
export function extractParts(source) {
  const lineOf = (index) => source.slice(0, index).split('\n').length;
  const names = new Set();
  const literalAt = new Set();
  const invalid = [];
  for (const m of source.matchAll(LITERAL)) {
    const name = m[1] ?? m[2] ?? m[3] ?? m[4];
    literalAt.add(m.index);
    if (!PART_NAME.test(name)) invalid.push({ name, line: lineOf(m.index) });
    else names.add(name);
  }
  const dynamic = [];
  for (const m of source.matchAll(ANY)) {
    if (!literalAt.has(m.index)) dynamic.push(lineOf(m.index));
  }
  return { parts: [...names].sort(), dynamic, invalid };
}

/**
 * 全部品の部位名を集める。キーはファイル名（`Calendar.tsx` → `Calendar`）。
 * 部位を 1 つも持たないファイルは返さない。
 */
export function collectParts(rootDir) {
  const files = globSync('src/components/**/[A-Z]*.tsx', {
    cwd: rootDir,
    posix: true,
    ignore: ['src/components/**/*.test.tsx', 'src/components/_internal/**'],
  }).sort();
  const parts = {};
  const problems = [];
  for (const file of files) {
    const source = fs.readFileSync(path.join(rootDir, file), 'utf8');
    if (!source.includes('data-part')) continue;
    const { parts: names, dynamic, invalid } = extractParts(source);
    for (const line of dynamic) problems.push(`${file}:${line}: data-part は文字列の直書きにする（式では名前が読めず、凍らせられない）`);
    for (const { name, line } of invalid) problems.push(`${file}:${line}: 部位名 "${name}" は小文字の kebab-case にする`);
    if (names.length > 0) parts[path.basename(file, '.tsx')] = names;
  }
  return { parts, problems, files: files.length };
}
