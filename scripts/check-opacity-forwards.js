#!/usr/bin/env node
/**
 * Guard: 「既定が透明で、アニメーションの終わり（`forwards`）で見えるようになる」書き方を落とす。
 *
 * 起票の経緯（2026-10-04・T297）。Tooltip と HoverCard は既定が `opacity: 0` で、
 * `animation: fadeIn … forwards` の終わりの値で 1 に留めていた。アニメーションが止められると
 * （`animation: none`）**消えたまま**になる。VRT は撮影時にアニメーションを止めるので、`open` の
 * ストーリーは吹き出しが写らないままベースラインになっていた（#796 で角丸と影を変えたのに 1 枚も
 * 動かなかったことで判明。#809 で直した）。利用者側でアニメーションを切っている環境でも同じことが起きる。
 *
 * ## 何を見るか
 *
 *   hidden-until-animation   1 つの規則が `opacity: 0` を持ち、**同じ要素**に `forwards` / `both` の
 *                            アニメーションが付いている。「同じ要素」は、その規則自身か、直下の
 *                            `&.visible` / `&[data-state="open"]` / `&:hover` のような修飾（結合子を
 *                            含まない `&…`）の規則。`animation` と `animation-fill-mode` の両方を見る。
 *
 * 直し方: 既定を「見えている」にし、入場は keyframes の `from`（opacity 0）から始める（`forwards` は外す）。
 *
 * ## 見ないもの（「0 件」が言えないこと）
 *
 *   - 別のファイル・別の規則に分かれた組（`.a { opacity: 0 }` と `.a.open { animation: … forwards }` を
 *     入れ子にせず書いた形）。セレクタの同一性を解かないので見えない。
 *   - `@include` の先で付く `opacity` / `animation`、TS / TSX のインラインスタイル。
 *   - 逆の形（既定は見えていて、`forwards` で 0 に留める）。止められても消えないので欠陥ではない
 *     （Video の `skipFadeIn` がこれ。印は JS のタイマーで外れる）。
 *
 * ## 逃がし方
 *
 * 件数では凍結せず、`animation` の行か直上のコメントに `opacity-forwards-ok: <理由>` を書く
 * （`check:radius-tokens` と同じ方式。lint-staged の部分集合で判定がぶれない）。
 *
 * ## 鳴ることの実証
 *
 *   node scripts/check-opacity-forwards.js --probe <file...>   # 注記を無視して任意のファイルを見る
 *   npm run prove:opacity-forwards
 */
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import postcssScss from 'postcss-scss';

const args = process.argv.slice(2);
const probeIndex = args.indexOf('--probe');
const probeFiles = probeIndex >= 0 ? args.slice(probeIndex + 1) : [];
const stagedFiles = args.filter((a) => !a.startsWith('--') && !probeFiles.includes(a));
const EXCUSE = 'opacity-forwards-ok:';
const RULE = 'hidden-until-animation';

const isZeroOpacity = (decl) => decl.prop === 'opacity' && /^0(\.0+)?%?$/.test(decl.value.trim());
const holdsEndState = (decl) =>
  (decl.prop === 'animation' || decl.prop === 'animation-fill-mode') && /(^|[\s,])(forwards|both)([\s,]|$)/.test(decl.value);
/** 同じ要素への修飾か（`&.visible` / `&:hover` / `&[data-x]`。結合子を含むものは別の要素）。 */
const isSameElementModifier = (selector) => selector.split(',').every((part) => /^&[^\s>+~&]+$/.test(part.trim()));
const ownDecls = (rule) => (rule.nodes ?? []).filter((n) => n.type === 'decl');

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
  const unread = [];
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const rawLines = raw.split(/\r?\n/);
    let root;
    try {
      root = postcssScss.parse(raw, { from: file });
    } catch (e) {
      unread.push({ file, reason: e.reason ?? e.message });
      continue;
    }
    root.walkRules((rule) => {
      if (!ownDecls(rule).some(isZeroOpacity)) return;
      const candidates = [
        ...ownDecls(rule),
        ...(rule.nodes ?? [])
          .filter((n) => n.type === 'rule' && isSameElementModifier(n.selector))
          .flatMap((n) => ownDecls(n)),
      ].filter(holdsEndState);
      for (const decl of candidates) {
        const i = decl.source.start.line - 1;
        if (honourExcuses && excused(rawLines, i)) continue;
        hits.push({ file, line: i + 1, rule: RULE, text: rawLines[i].trim().slice(0, 110), selector: rule.selector.split('\n')[0].slice(0, 60) });
      }
    });
  }
  return { hits, unread };
}

const normalise = (f) => (path.isAbsolute(f) ? path.relative(process.cwd(), f) : f).split(path.sep).join('/');
const IN_SCOPE = (f) => /^src\/(components|styles)\//.test(f) && f.endsWith('.scss');

const isMain = normalise(process.argv[1] ?? '').endsWith('scripts/check-opacity-forwards.js');
if (isMain) {
  const targets = probeFiles.length > 0 ? probeFiles : stagedFiles.length > 0 ? stagedFiles : null;
  const files = (targets ? targets.map(normalise) : globSync('src/{components,styles}/**/*.scss', { posix: true }))
    .filter((f) => probeFiles.length > 0 || IN_SCOPE(f))
    .filter((f) => fs.existsSync(f));

  console.log('--- check:opacity-forwards (既定が透明で、アニメーションの終わりで見える書き方が無いか) ---');
  console.log(`\n走査: ${files.length} ファイル${probeFiles.length > 0 ? '（--probe: 注記を無視）' : ''}`);
  if (files.length === 0 && !targets) {
    console.log('[FAIL] 走査対象が空です。glob のパターンが実態とずれています。');
    process.exit(1);
  }
  const { hits, unread } = scan(files, { honourExcuses: probeFiles.length === 0 });
  if (unread.length > 0) {
    console.log(`\n[FAIL] 読めなかったファイルが ${unread.length} 件あります（見ていないものを 0 件と数えない）:`);
    for (const u of unread) console.log(`  ${u.file}  ${u.reason}`);
    process.exit(1);
  }
  if (hits.length > 0) {
    console.log(`\n[FAIL] ${hits.length} 件:`);
    for (const h of hits) {
      console.log(`  ${h.file}:${h.line}  [${h.rule}]  ${h.selector}`);
      console.log(`      ${h.text}`);
    }
    console.log('\n  既定が opacity: 0 で、forwards / both のアニメーションの終わりで見えるようにしています。');
    console.log('  アニメーションが止められると（VRT の撮影・利用者側の animation: none）消えたままになります。');
    console.log('  直し方: 既定を「見えている」にし、入場は keyframes の from（opacity 0）から始める（forwards は外す）。');
    console.log(`  意図した形なら、animation の行か直上のコメントに \`${EXCUSE} <理由>\` を書くこと。`);
    process.exit(1);
  }
  // 「止めても消える部品は無い」とは言わない。別の規則に分かれた組・mixin の先・インラインスタイルは見ていない。
  console.log('\n✓ 同じ要素に opacity: 0 と forwards / both のアニメーションを持つ規則は 0 件です（注記つきを除く）。');
}
