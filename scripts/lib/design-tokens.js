import fs from 'node:fs';

import { parseColor } from './color.js';

/**
 * 生成済み CSS 変数の読み出しと解決。
 *
 * `check-contrast.js` が持っていたものをここへ出した。**同じ処理を 2 度書くと、
 * 片方だけが実物とずれても双方が緑を返す**（片方がもう片方の答え合わせにならない）。
 * 実際 2026-08-09 に、この解決処理を別スクリプトで書き直したところ最小コントラストが
 * 4.62 のはずのところ 1.01 と出て、**再実装のほうが壊れていた**。以後、トークンを
 * 読む処理はここだけに置くこと。
 */

/** テーマ名 → 生成済み CSS 変数ファイル。 */
export const THEME_VAR_FILES = [
  ['light', 'src/tokens/generated/_css-vars.scss'],
  ['dark', 'src/tokens/generated/_css-vars-dark.scss'],
];

/** `--wim-*` の宣言を集める。同名が複数回出る場合は最初（`:root`）を採る。 */
export function readVars(file) {
  const src = fs.readFileSync(file, 'utf8');
  const map = {};
  for (const m of src.matchAll(/^\s*(--wim-[a-z0-9-]+):\s*([^;]+);/gim)) {
    if (!(m[1] in map)) map[m[1]] = m[2].trim();
  }
  return map;
}

/**
 * `oklch(from var(--wim-color-X) <channels>)` の相対色。
 * モデル化できるのは**アルファを差し替えるだけ**の `l c h / <a>`（および `l c h`）に限る。
 *
 * `calc(c * 0.85)` のような**チャンネル自体をいじる式は扱えない**。そこは
 * 推測せず投げる ── 黙って null を返すと `composite(null, surface)` が
 * サーフェスをそのまま返し、**「解決できなかった」が「サーフェスと同じ色」に化ける**。
 * 実際 2026-08-09 に `neutral-fill-subtle` を足したとき、この経路で
 * 知覚距離 0.0000 が出た（値が読めていないだけなのに、面が消えているように見えた）。
 */
// チャンネル部は `.*` で貪欲に取る。`[^)]*` だと `calc(c * 0.5)` の閉じ括弧で
// マッチが切れ、**判定に到達しないまま `parseColor` へ落ちて null になる**
// ＝ 解釈できない式ほど黙って通ってしまう。実際その形で書いて試すまで
// 気付かなかった（2026-08-09）。
const RELATIVE = /^oklch\(\s*from\s+var\(\s*--wim-color-([a-z0-9-]+)\s*\)\s*(.*)\)\s*$/i;

function applyRelative(baseColor, channels, token) {
  const spec = channels.trim();
  const m = spec.match(/^l\s+c\s+h(?:\s*\/\s*([0-9.]+))?$/i);
  if (!m) {
    throw new Error(
      `--wim-color-${token} の相対色 "oklch(from … ${spec})" は解釈できません。` +
        ' アルファ差し替え（l c h / <a>）以外はモデル化していないので、' +
        ' scripts/lib/design-tokens.js を追随させてください。',
    );
  }
  return m[1] === undefined ? baseColor : { ...baseColor, a: Number(m[1]) };
}

/**
 * `--wim-color-<token>` を実際の色まで解決する。
 * `var(--wim-color-X)` の別名と、アルファ差し替えの相対色を辿る。
 * トークンが存在しなければ null、**存在するが解釈できない**なら例外。
 */
export function resolveColorToken(vars, token, depth = 0) {
  if (depth > 10) return null;
  const raw = vars[`--wim-color-${token}`];
  if (!raw) return null;

  const ref = raw.match(/^var\(\s*--wim-color-([a-z0-9-]+)/i);
  if (ref) return resolveColorToken(vars, ref[1], depth + 1);

  const rel = raw.match(RELATIVE);
  if (rel) {
    const base = resolveColorToken(vars, rel[1], depth + 1);
    if (!base) return null;
    return applyRelative(base, rel[2], token);
  }

  return parseColor(raw);
}

/** テーマ名 → 解決済み変数マップの配列。 */
export function readThemes() {
  return THEME_VAR_FILES.map(([name, file]) => [name, readVars(file)]);
}
