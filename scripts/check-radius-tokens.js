#!/usr/bin/env node
/**
 * Guard: 面の角丸に、値トークン（`--wim-radius-md` / `lg` / `xl` / `2xl`）を直に使っていないか。
 *
 * 起票の経緯（2026-10-03）。テーマのプリセット（`data-wim-preset`。Soft / Bold / Minimal）が上書き
 * するのは `--wim-radius-component` / `-container` / `-overlay` の 3 つだけ。値トークンを直に使った
 * 面は、プリセットを替えても角が動かない。`docs/rules/tokens.md` に「値トークンを直接使うな」と
 * 書いてあったが検査は無く、Tag・SegmentedControl・ToggleGroup・Tour・QRCode・DescriptionList が
 * 元の角のまま残り、Card は `radius="xl"` が Soft で `lg` より小さくなっていた
 * （computed style の実測。Soft: Button 12px に対し Tag 2px、Card は lg 16px / xl 12px）。
 *
 * ## 何を見るか
 *
 *   1. radius-value-token   `border-radius`（各辺・各角を含む）の値が値トークンだけでできている。
 *                           役割トークンを使う。同じ宣言に役割トークンがあれば通す
 *                           （`calc(var(--wim-radius-container) + var(--wim-radius-md))` は
 *                           「役割から 1 段足す」で、プリセットに付いていく）。
 *   2. radius-value-mixin   `@mixin` / `@include` の `$radius:` に値トークンを渡している
 *                           （既定値の形で入り込む。SegmentedControl のトラックがこれだった）。
 *   3. radius-value-inline  TS / TSX の `borderRadius: "var(--wim-radius-md)"`。
 *
 * **`--wim-radius-sm` と `--wim-radius-full` は見ない。** 部品の中のサブ要素・ピル形・円のためのもので、
 * 代わりになる役割トークンが無い（`docs/rules/tokens.md`）。ただし **外側が役割トークンで、内側が
 * `sm` 固定**だとプリセットで外側だけ丸くなる。これはコードから決められないので、プリセットを当てて
 * computed style で確かめること（SegmentedControl は `calc(component - 余白)` で導いている）。
 *
 * ## 逃がし方
 *
 * 件数では凍結せず、同じ行か直上のコメントに `radius-value-ok: <理由>` を書く
 * （`check:focus-indicator` と同じ方式。lint-staged の部分集合で判定がぶれない）。
 * 正当なのは「prop のキーが値スケールそのもの」（Image / Video / Audio / ImageCompare の `radius`）と、
 * テーマの面ではないもの（スクロールバーのつまみ）。
 *
 * ## 鳴ることの実証
 *
 *   node scripts/check-radius-tokens.js --probe <file...>   # 注記を無視して任意のファイルを見る
 *   npm run prove:radius-tokens
 */
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const args = process.argv.slice(2);
const probeIndex = args.indexOf('--probe');
const probeFiles = probeIndex >= 0 ? args.slice(probeIndex + 1) : [];
const stagedFiles = args.filter((a) => !a.startsWith('--') && !probeFiles.includes(a));
const EXCUSE = 'radius-value-ok:';

const VALUE_TOKEN = /--wim-radius-(md|lg|xl|2xl)\b/;
const ROLE_TOKEN = /--wim-radius-(component|container|overlay)\b/;
const RADIUS_PROP = /^\s*border(-(top|bottom|start|end)-(left|right|start|end))?-radius\s*:\s*(.*?);?\s*$/;
const MIXIN_RADIUS = /@(mixin|include)\b.*\$radius\s*:\s*var\(\s*--wim-radius-(md|lg|xl|2xl)\b/;
const INLINE_RADIUS = /border(Top|Bottom|Start|End)?(Left|Right|Start|End)?Radius\s*:\s*["'`][^"'`]*--wim-radius-(md|lg|xl|2xl)\b/;

/** コメントを空白に置き換える（行数は保つ）。 */
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p) => p + ' '.repeat(m.length - p.length));
}

function excused(rawLines, i) {
  if (rawLines[i]?.includes(EXCUSE)) return true;
  for (let k = i - 1; k >= 0; k -= 1) {
    const prev = rawLines[k].trim();
    if (!prev.startsWith('//') && !prev.startsWith('*') && !prev.startsWith('/*')) return false;
    if (prev.includes(EXCUSE)) return true;
  }
  return false;
}

export function scan(files, { honourExcuses = true } = {}) {
  const hits = [];
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const rawLines = raw.split(/\r?\n/);
    const isStyle = file.endsWith('.scss');
    const lines = (isStyle ? stripComments(rawLines.join('\n')) : rawLines.join('\n')).split('\n');
    lines.forEach((line, i) => {
      let rule = null;
      if (isStyle) {
        const decl = line.match(RADIUS_PROP);
        if (decl && VALUE_TOKEN.test(decl[4]) && !ROLE_TOKEN.test(decl[4])) rule = 'radius-value-token';
        else if (MIXIN_RADIUS.test(line)) rule = 'radius-value-mixin';
      } else if (INLINE_RADIUS.test(line)) rule = 'radius-value-inline';
      if (!rule) return;
      if (honourExcuses && excused(rawLines, i)) return;
      hits.push({ file, line: i + 1, rule, text: rawLines[i].trim().slice(0, 110) });
    });
  }
  return hits;
}

const normalise = (f) => (path.isAbsolute(f) ? path.relative(process.cwd(), f) : f).split(path.sep).join('/');
const IN_SCOPE = (f) => /^src\/(components|styles)\//.test(f) && /\.(scss|ts|tsx)$/.test(f) && !/\.(test|stories)\.tsx?$/.test(f);

const isMain = normalise(process.argv[1] ?? '').endsWith('scripts/check-radius-tokens.js');
if (isMain) {
  const targets = probeFiles.length > 0 ? probeFiles : stagedFiles.length > 0 ? stagedFiles : null;
  const files = (targets ? targets.map(normalise) : globSync('src/{components,styles}/**/*.{scss,ts,tsx}', { posix: true }))
    .filter((f) => probeFiles.length > 0 || IN_SCOPE(f))
    .filter((f) => fs.existsSync(f));

  console.log('--- check:radius-tokens (面の角丸に値トークンを直に使っていないか) ---');
  console.log(`\n走査: ${files.length} ファイル${probeFiles.length > 0 ? '（--probe: 注記を無視）' : ''}`);
  if (files.length === 0 && !targets) {
    console.log('[FAIL] 走査対象が空です。glob のパターンが実態とずれています。');
    process.exit(1);
  }
  const hits = scan(files, { honourExcuses: probeFiles.length === 0 });
  if (hits.length > 0) {
    console.log(`\n[FAIL] ${hits.length} 件:`);
    for (const h of hits) {
      console.log(`  ${h.file}:${h.line}  [${h.rule}]`);
      console.log(`      ${h.text}`);
    }
    console.log('\n  値トークン（--wim-radius-md / lg / xl / 2xl）はテーマのプリセットで動きません。');
    console.log('  役割トークンを使う: 小〜中の部品は --wim-radius-component、Card などの面は --wim-radius-container、');
    console.log('  浮遊する面は --wim-radius-overlay。入れ子の内側は calc(var(--wim-radius-component) - <余白>) で導く。');
    console.log(`  prop のキーが値スケールそのものなら、同じ行か直上のコメントに \`${EXCUSE} <理由>\` を書くこと。`);
    console.log('  規則: docs/rules/tokens.md「角丸（Radius）の設計指針」');
    process.exit(1);
  }
  // 「プリセットで全部動く」とは言わない。sm 固定の内側と、開いた状態でしか出ない面は見ていない。
  console.log('\n✓ 値トークンを直に使った角丸は 0 件です（注記つきを除く）。');
}
