#!/usr/bin/env node
/**
 * prove:doc-token-values — `check:doc-token-values` を故意に壊して実証する（T260）。
 *
 * AGENTS.md の約束「未実証のガード、および『0 件』という結果は信用しない」。
 * このガードは**正規化で許すもの**が多いので、「鳴る」だけでなく
 * **「鳴ってはいけないところで鳴らない」**ことも確かめる。
 *
 *   1. 揃っているときは鳴らない
 *   2. ライトの値を 1 文字変えたら鳴る（DESIGN.md）
 *   3. ダークの値を変えたら鳴る（docs/design/color.md の 3 列表）
 *   4. 併記の**値のほう**を変えたら鳴る（`0.5rem (8px)` の `0.5rem`）
 *   5. 併記の**注記のほう**だけ変えても鳴らない（`(8px)` は読み手向けの補助）
 *   6. 参照表記（`--wim-radius-md`）は解決して比べるので鳴らない
 *   7. 2 層の box-shadow や `rgba(…)` を「値 + 併記」と読み違えない
 *   8. **別トークンへの参照**（`= text-tertiary`）を別の実在トークンに変えたら鳴る
 *        ── 2026-09-20（T262ⓑ）まではここが死角で、**変えても鳴らなかった**。
 *   8-2. 族に実在しない名前（`= nope`）は説明文として扱い、鳴らない（解決できないものは比べない）
 *   8-3. CSS のキーワード値（`underline`）を変えたら鳴る
 *   8-4. **アルファ派生**（`primary 8%`）の比率を変えたら鳴る（T262ⓒ・2026-09-20）
 *   8-5. `60%` と `60.0%` は同じ `0.6` に解決する（表記ゆれで誤検出しない）
 *        ── T262ⓐ まで `LITERAL` の語彙が 4 語しか無く、**値そのものなのに説明文扱い**だった。
 *   9. ダークに上書きの無いトークンは、飛ばさずライトの値と比べる
 *
 * Usage: npm run prove:doc-token-values
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILES = ['DESIGN.md', 'docs/design/color.md', 'docs/design/typography.md'];
const abs = (rel) => path.join(ROOT, rel);

const backup = Object.fromEntries(FILES.map((f) => [f, fs.readFileSync(abs(f), 'utf8')]));
const restore = () => {
  for (const f of FILES) fs.writeFileSync(abs(f), backup[f], 'utf8');
};
/** 1 か所だけ置き換える。置き換わらなければ実証にならないので落とす。 */
const patch = (rel, from, to) => {
  const before = fs.readFileSync(abs(rel), 'utf8');
  if (!before.includes(from)) throw new Error(`実証用の置換対象が無い: ${rel} / ${from}`);
  fs.writeFileSync(abs(rel), before.replace(from, to), 'utf8');
};

const run = () => {
  try {
    execFileSync('node', ['scripts/check-doc-token-values.js'], { cwd: ROOT, encoding: 'utf8' });
    return 0;
  } catch (e) {
    return e.status ?? 1;
  }
};

const results = [];
const check = (name, ok) => {
  results.push(ok);
  console.log(`${ok ? 'OK ' : 'NG '} ${name}`);
};

try {
  check('1. 揃っているとき鳴らない', run() === 0);

  patch('DESIGN.md', '| `--wim-spacing-md` | 0.5rem', '| `--wim-spacing-md` | 0.6rem');
  check('2. ライトの値を変えたら鳴る', run() !== 0);

  restore();
  patch('docs/design/color.md', '| `dk12` (#355935) | #b7e3b6 |', '| `dk12` (#355935) | #b7e3b7 |');
  check('3. ダークの値を変えたら鳴る', run() !== 0);

  restore();
  patch('DESIGN.md', '| `--wim-spacing-2xl` | 1rem (16px)', '| `--wim-spacing-2xl` | 2rem (16px)');
  check('4. 併記の値のほうを変えたら鳴る', run() !== 0);

  restore();
  patch('DESIGN.md', '| `--wim-spacing-2xl` | 1rem (16px)', '| `--wim-spacing-2xl` | 1rem (999px)');
  check('5. 併記の注記だけなら鳴らない', run() === 0);

  restore();
  // 参照表記（`--wim-shadow-md`）を、その参照が指す実体そのものに書き換えても緑のまま
  // ＝ 解決して比べている。書き換えずに緑を見るだけでは、何も実証していない。
  patch(
    'docs/design/color.md',
    '| `--wim-color-shadow-glass` | `--wim-shadow-md` |',
    '| `--wim-color-shadow-glass` | 0 4px 12px oklch(0 0 0 / 0.08), 0 2px 4px oklch(0 0 0 / 0.12) |',
  );
  check('6. 参照表記を実体へ書き換えても緑（解決して比べている）', run() === 0);

  restore();
  patch(
    'docs/design/color.md',
    '| `--wim-color-shadow-glass` | `--wim-shadow-md` |',
    '| `--wim-color-shadow-glass` | `--wim-shadow-lg` |',
  );
  check('6-2. 別のトークンへの参照に変えたら鳴る', run() !== 0);

  restore();
  patch('DESIGN.md', '| `--wim-shadow-md` | 0 4px 12px', '| `--wim-shadow-md` | 0 5px 12px');
  check('7. 2 層の box-shadow を読み違えず、変えれば鳴る', run() !== 0);

  // 8 系: 参照とキーワード値。T262 でここを死角から外した。**鳴ることと、
  // 鳴ってはいけないところで鳴らないことの両方**を見る。
  restore();
  patch('docs/design/color.md', '| `--wim-color-text-placeholder` | = text-tertiary', '| `--wim-color-text-placeholder` | = text-secondary');
  check('8. 参照表記を別の実在トークンに変えたら鳴る', run() !== 0);

  restore();
  patch('docs/design/color.md', '| `--wim-color-text-placeholder` | = text-tertiary', '| `--wim-color-text-placeholder` | = nope');
  check('8-2. 族に実在しない名前は説明文扱いで鳴らない', run() === 0);

  restore();
  patch('docs/design/typography.md', '| `--wim-decoration-underline` | underline |', '| `--wim-decoration-underline` | overline |');
  check('8-3. キーワード値を変えたら鳴る', run() !== 0);

  // 9 / 9-2: ダークに上書きが無いトークンを 3 列表に置いたとき、**飛ばさずライトと比べる**。
  // 飛ばす実装でもこの行は緑になるので、**誤った値で赤くなること**まで見ないと実証にならない。
  const ghostRow = '| `--wim-color-ghost-bg` | oklch(from var(--wim-color-surface-void) l c h / 0.03) |';
  restore();
  patch('docs/design/color.md', ghostRow, `| \`--wim-spacing-md\` | 0.5rem | 9rem |\n${ghostRow}`);
  check('9. ダーク未上書きのトークンは、ダーク列が違えば鳴る', run() !== 0);

  restore();
  patch('docs/design/color.md', ghostRow, `| \`--wim-spacing-md\` | 0.5rem | 0.5rem |\n${ghostRow}`);
  check('9-2. 同じ値なら鳴らない', run() === 0);
  // 8-4 / 8-5: アルファ派生。`primary 8%` は
  // `oklch(from var(--wim-color-primary) l c h / 0.08)` の人間向けの書き方。
  restore();
  patch('docs/design/color.md', '| `--wim-color-surface-hover` | primary 8% |', '| `--wim-color-surface-hover` | primary 9% |');
  check("8-4. アルファ派生の比率を変えたら鳴る", run() !== 0);

  restore();
  patch('docs/design/color.md', '| `--wim-color-frosted-bg` | overlay-soft | surface 60% |', '| `--wim-color-frosted-bg` | overlay-soft | surface 60.0% |');
  check("8-5. 60% と 60.0% は同じ 0.6 に解決する（表記ゆれで鳴らない）", run() === 0);
} finally {
  restore();
}

check("10. 後始末で元どおり（3 ファイル一致・緑）", FILES.every((f) => fs.readFileSync(abs(f), 'utf8') === backup[f]) && run() === 0);

process.exit(results.every(Boolean) ? 0 : 1);
