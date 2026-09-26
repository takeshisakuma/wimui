#!/usr/bin/env node
/**
 * Guard: 部品が自前で書くキーボードのフォーカス表示が、どのテーマでも見えるか（T270-③）。
 *
 * 起票の経緯（2026-09-26）。T270 ② で既定のフォーカス表示を outline（`--wim-color-focus-outline`）
 * にしたが、部品が `:focus` / `:focus-visible` で自前の表示を書くと既定は使われない。その
 * 自前の表示が **primary を直接使っていた箇所が 42 ブロック**あった。light ではフォーカス色と
 * primary が同じ値なので見え方は同じだが、**dark では primary（#055d87）が面（#393939）に
 * 対して 1.61:1** しかなく、ほぼ見えなかった。フォーカス色は dark では text-accent（6.56:1）。
 *
 * ## 何を見るか（`:focus` / `:focus-visible` のブロック自身の宣言。`:focus-within` は見ない）
 *
 *   1. focus-hidden      `outline: none` にして、同じブロックに代わりの表示（box-shadow /
 *                        枠 / 背景 / outline / 下線）が無い。フォーカスが消える。
 *   2. focus-primary     outline / box-shadow / 枠の値に `--wim-color-primary` を使っている。
 *                        `--wim-color-focus-outline` を使う（テーマごとに 3:1 以上になる色）。
 *   3. focus-faint-only  表示が淡い色だけ（透明度付きの色、`--wim-shadow-field-focus`）。
 *                        枠の色の変化など、はっきりした合図がほかにあれば通す。
 *   4. focus-double      outline の実線と、実線の輪（`--wim-shadow-focus` / `-ring`）を両方付けて
 *                        いる。同じ色の輪が二重に出る。
 *
 * **見ないもの**: 部品の本体（フォーカスでないセレクタ）の `outline: none`。その要素が
 * フォーカスできるかをコードから決められないので、全ストーリーで Tab を当てて測る方で補う
 * （T270 ② の実測。手順はメモリの focus-visibility-sweep）。
 *
 * ## 逃がし方
 *
 * 件数では凍結せず、同じ行か直上のコメントに `focus-indicator-ok: <理由>` を書く
 * （`check:component-slop` と同じ方式。lint-staged の部分集合で判定がぶれない）。
 *
 * ## 鳴ることの実証
 *
 *   node scripts/check-focus-indicator.js --probe <file...>   # 注記を無視して任意のファイルを見る
 *   npm run prove:focus-indicator
 */
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const args = process.argv.slice(2);
const probeIndex = args.indexOf('--probe');
const probeFiles = probeIndex >= 0 ? args.slice(probeIndex + 1) : [];
const stagedFiles = args.filter((a) => !a.startsWith('--') && !probeFiles.includes(a));
const EXCUSE = 'focus-indicator-ok:';

const FOCUS_SELECTOR = /:focus(-visible)?\b(?!-within)/;
const INDICATOR_PROP = /^(outline|outline-color|box-shadow|border|border-color|border-(top|right|bottom|left)(-color)?)$/;
const ALT_INDICATOR = /^(box-shadow|outline|outline-color|border|border-color|border-(top|right|bottom|left)(-color)?|background|background-color|text-decoration|text-decoration-line)$/;

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

/** 値が淡い色だけでできているか（透明度付きの色、field-focus）。 */
const isFaint = (value) => {
  if (/--wim-shadow-field-focus/.test(value)) return true;
  // 実線のフォーカス表示（トークン、または透明度を付けずに使ったフォーカス色）があれば淡くない
  const withoutAlphaUses = value.replace(/oklch\(from [^)]*\)[^)]*\)/g, '');
  if (/--wim-shadow-focus(-ring)?\b|var\(--wim-color-focus-outline\)/.test(withoutAlphaUses)) return false;
  return /\/\s*0?\.\d+\s*\)/.test(value);
};

export function scan(files, { honourExcuses = true } = {}) {
  const hits = [];
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const rawLines = raw.split('\n');
    const fileSource = stripComments(raw);
    const lines = fileSource.split('\n');
    const stack = [];
    let pending = '';
    lines.forEach((line, i) => {
      // この行を読み始めた時点のブロックが開いているなら、その宣言を集める
      const top = stack[stack.length - 1];
      const decl = line.match(/^\s*([\w-]+)\s*:\s*(.*?);?\s*$/);
      if (top && decl && !line.includes('{')) top.decls.push({ prop: decl[1], value: decl[2], line: i });
      for (const c of line) {
        if (c === '{') {
          stack.push({ sel: pending.trim(), decls: [], line: i });
          pending = '';
        } else if (c === '}') {
          const b = stack.pop();
          pending = '';
          if (!b || !FOCUS_SELECTOR.test(b.sel)) continue;
          const push = (rule, detail, at) => {
            if (honourExcuses && (excused(rawLines, at) || excused(rawLines, b.line))) return;
            hits.push({ file, line: at + 1, rule, detail, text: rawLines[at].trim().slice(0, 100) });
          };
          const indicators = b.decls.filter((d) => INDICATOR_PROP.test(d.prop));
          for (const d of indicators) {
            if (/var\(--wim-color-primary\)/.test(d.value)) push('focus-primary', 'フォーカスの表示に primary を使っている', d.line);
          }
          const outlineNone = b.decls.find((d) => d.prop === 'outline' && /^none\b/.test(d.value.trim()));
          const alts = b.decls.filter((d) => ALT_INDICATOR.test(d.prop) && !/^none\b/.test(d.value.trim()));
          // `:focus` だけで outline を消す書き方は、キーボード用の表示を別の規則で出し直して
          // いれば正当（マウスのときの輪だけを消す定番）。`:focus:not(:focus-visible)` は
          // 定義上キーボード操作に一致しない。同じファイルに `:focus-visible` / `:focus-within`
          // があれば、表示はそちらが持つとみなす（どちらが勝つかまでは見ない。実測で補う）。
          const pointerOnly =
            /:not\(:focus-visible\)/.test(b.sel) ||
            (!/:focus-visible/.test(b.sel) && /:focus-visible|:focus-within/.test(fileSource));
          if (outlineNone && alts.length === 0 && !pointerOnly) push('focus-hidden', 'outline を消して、代わりの表示が無い', outlineNone.line);
          // outline の実線と、実線の輪（--wim-shadow-focus / -ring）を同じブロックで両方付けると、
          // 同じ色の輪が二重に出る（T270 で Checkbox / Switch / Radio が踏んだ）。
          const solidOutline = b.decls.find((d) => d.prop === 'outline' && /\bsolid\b/.test(d.value));
          const solidRing = b.decls.find((d) => d.prop === 'box-shadow' && /--wim-shadow-focus(-ring)?\b/.test(d.value));
          if (solidOutline && solidRing) push('focus-double', 'outline と実線の輪が二重に出る', solidRing.line);
          if (alts.length > 0 && alts.every((d) => isFaint(d.value))) {
            push('focus-faint-only', '表示が淡い色だけ', alts[0].line);
          }
        } else if (c === ';') pending = '';
        else pending += c;
      }
      pending += ' ';
    });
  }
  return hits;
}

const normalise = (f) => (path.isAbsolute(f) ? path.relative(process.cwd(), f) : f).split(path.sep).join('/');

const isMain = normalise(process.argv[1] ?? '').endsWith('scripts/check-focus-indicator.js');
if (isMain) {
  const targets = probeFiles.length > 0 ? probeFiles : stagedFiles.length > 0 ? stagedFiles : null;
  const files = (targets ? targets.map(normalise) : globSync('src/components/**/*.scss', { posix: true }))
    .filter((f) => f.endsWith('.scss'))
    .filter((f) => probeFiles.length > 0 || f.startsWith('src/components/'))
    .filter((f) => fs.existsSync(f));

  console.log('--- check:focus-indicator (部品が自前で書くフォーカス表示) ---');
  console.log(`\n走査: SCSS ${files.length} ファイル${probeFiles.length > 0 ? '（--probe: 注記を無視）' : ''}`);
  if (files.length === 0 && !targets) {
    console.log('[FAIL] 走査対象が空です。glob のパターンが実態とずれています。');
    process.exit(1);
  }
  const hits = scan(files, { honourExcuses: probeFiles.length === 0 });
  if (hits.length > 0) {
    console.log(`\n[FAIL] ${hits.length} 件:`);
    for (const h of hits) {
      console.log(`  ${h.file}:${h.line}  [${h.rule}] ${h.detail}`);
      console.log(`      ${h.text}`);
    }
    console.log('\n  - focus-primary: `--wim-color-focus-outline` を使う（dark の primary は面に対して 1.61:1）。');
    console.log('  - focus-hidden: outline を消すなら、同じブロックに代わりの表示を書く。');
    console.log('  - focus-faint-only: 淡い輪だけにしない。枠の色の変化か、--wim-shadow-focus を足す。');
    console.log('  - focus-double: outline と実線の輪のどちらか一方にする。');
    console.log(`  どうしても残すなら、同じ行か直上のコメントに \`${EXCUSE} <理由>\` を書くこと。`);
    process.exit(1);
  }
  // 「フォーカスは見える」とは言わない。部品の本体の outline: none は見ていない。
  console.log('\n✓ :focus / :focus-visible のブロックの primary 直書き・消すだけ・淡い色だけ は 0 件です。');
}
