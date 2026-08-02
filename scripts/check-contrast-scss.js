#!/usr/bin/env node
/**
 * check:contrast:scss — **実際に書かれている `color` / `background-color` の対**から
 * コントラストを解く（T41 案②）。
 *
 * 既存の 2 本は、どちらもここを見ていない:
 *
 *   - `check:contrast`（T34）は `tokens/intents.json` の**宣言**から
 *     intent × variant × surface の組を作って検査する。SCSS が
 *     `text-{intent}` ではなく塗り色を使っていても、その事実が見えない。
 *     実際 dark の `outline` × `danger` は **126 組すべて緑のまま 4.35:1 で出荷**された
 *   - `check:intent-text-color`（T41 案①）は「塗り用 intent 色を `color:` に使っている」
 *     という**迂回の形**だけを見る。迂回していない箇所の実効コントラストは見ていないし、
 *     `--wim-comp-*` や surface 系の組み合わせは端から対象外
 *
 * ここでは SCSS を入れ子のまま読み、宣言された 2 色をそのまま合成して比を出す。
 * **トークンが正しいか**でも**規約に沿っているか**でもなく、**描いたら何:1 になるか**を見る。
 *
 * ## 何を見て、何を見ないか（重要）
 *
 * 静的解析なので、解けない組み合わせは**黙って飛ばす**。飛ばした数を必ず出力するのは、
 * 「見ていないから緑」を緑と読み違えないため（T37 で表を 1 行も読めていないのに
 * 緑になった失敗、T36 でセレクタが空振りしたら全ケース緑になる形と同型）。
 * 評価できた組が 0 なら、それは検査ではないので落とす。
 *
 *   見る:   同じブロックの `color` + `background-color`、および入れ子の親から
 *           継承した背景。`var(--wim-*)` は生成 CSS 変数から解決し、半透明は
 *           祖先の背景（無ければ `--wim-color-surface`）へ合成する
 *   見ない: mixin 経由で色が決まるもの（`@include token-variants` 等）、
 *           `currentColor` / `inherit`、SCSS 変数、背景が親のどこにも無いブロック
 *
 * ## 使い方
 *
 *   node scripts/check-contrast-scss.js
 *   node scripts/check-contrast-scss.js --probe <file...>   # 受け入れ条件の検証
 *   node scripts/check-contrast-scss.js --list              # 評価できた組を全部出す
 *
 * 大きい文字だけに使うブロックなど、4.5 を当てるのが妥当でない箇所は
 * `contrast-ok` を直前のコメントに書いて理由を残すこと。
 */
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';
import { parseColor, composite, contrastRatio, fmt } from './lib/color.js';

const TEXT_MIN = 4.5;
const EXCUSE = 'contrast-ok';

/**
 * 無効化されたコントロールは WCAG 1.4.3 の対象外（"part of an inactive user interface
 * component ... have no contrast requirement"）。axe も同じ扱いをする。ここで除外
 * しないと `text-disabled` が構造的に全部落ち、**規格が求めていない赤**でガードが
 * 埋まって、本物（下の badge や link）が見えなくなる。
 */
const DISABLED_SELECTOR = /:disabled|\.disabled\b|\[disabled\]|aria-disabled/i;

const argv = process.argv.slice(2);
const probeIdx = argv.indexOf('--probe');
const probeFiles = probeIdx >= 0 ? argv.slice(probeIdx + 1).filter((f) => fs.existsSync(f)) : [];
const listAll = argv.includes('--list');

// --- トークン解決（check-contrast.js と同じ規則） --------------------------
function readVars(file) {
  const src = fs.readFileSync(file, 'utf8');
  const map = {};
  for (const m of src.matchAll(/^\s*(--wim-[a-z0-9-]+):\s*([^;]+);/gim)) {
    if (!(m[1] in map)) map[m[1]] = m[2].trim();
  }
  return map;
}

const THEMES = [
  ['light', readVars('src/tokens/generated/_css-vars.scss')],
  ['dark', readVars('src/tokens/generated/_css-vars-dark.scss')],
];

/**
 * 値を色へ。`var(--x, fallback)` は x → fallback の順に試す。
 * 解けなければ null（＝この組は評価しない）。
 */
function resolveValue(vars, raw, depth = 0) {
  if (depth > 10 || typeof raw !== 'string') return null;
  const value = raw.trim().replace(/\s*!important\s*$/, '');
  if (value === '' || /^(inherit|currentcolor|initial|unset|revert|none)$/i.test(value)) return null;
  if (/^transparent$/i.test(value)) return { r: 0, g: 0, b: 0, a: 0 };

  const varMatch = value.match(/^var\(\s*(--[a-z0-9-]+)\s*(?:,([\s\S]+))?\)$/i);
  if (varMatch) {
    const [, name, fallback] = varMatch;
    if (vars[name] !== undefined) {
      const resolved = resolveValue(vars, vars[name], depth + 1);
      if (resolved) return resolved;
    }
    return fallback ? resolveValue(vars, fallback, depth + 1) : null;
  }

  // rgba(var(--x-rgb), a) — 不透明度の扱い（DESIGN.md の RGB トークン）
  const rgbaVar = value.match(/^rgba?\(\s*var\(\s*(--[a-z0-9-]+)\s*\)\s*,\s*([0-9.]+)\s*\)$/i);
  if (rgbaVar) {
    const triple = vars[rgbaVar[1]];
    if (!triple) return null;
    const base = parseColor(`rgb(${triple})`);
    return base ? { ...base, a: Number(rgbaVar[2]) } : null;
  }

  // グラデーション・画像・複数レイヤは面が一意に決まらないので見ない
  if (/gradient|url\(|,/.test(value)) return null;
  return parseColor(value);
}

// --- SCSS を入れ子のまま読む ---------------------------------------------
/**
 * ブロックの木を作る。セレクタの解決はしない（背景の継承さえ追えればよい）。
 * `@media` 等の at-rule も 1 ノードとして通すので、宣言を持たないまま
 * 祖先の背景がその下へ届く。
 */
function parseBlocks(source) {
  const lines = source.split(/\r?\n/);
  const root = { selector: '(root)', line: 0, parent: null, decls: {}, children: [] };
  let current = root;
  let inComment = false;

  lines.forEach((rawLine, i) => {
    let line = rawLine;
    if (inComment) {
      const end = line.indexOf('*/');
      if (end < 0) return;
      line = line.slice(end + 2);
      inComment = false;
    }
    line = line.replace(/\/\*[\s\S]*?\*\//g, '');
    const open = line.indexOf('/*');
    if (open >= 0) {
      line = line.slice(0, open);
      inComment = true;
    }
    line = line.replace(/\/\/.*$/, '');

    // 宣言（`prop: value;`）。`{` を含む行は宣言ではなくセレクタ。
    const decl = line.match(/^\s*([a-z-]+)\s*:\s*([^;{]+);/i);
    if (decl && !line.includes('{')) {
      const prop = decl[1].toLowerCase();
      if (prop === 'color' || prop === 'background-color' || prop === 'background') {
        current.decls[prop === 'background' ? 'background-color' : prop] = {
          value: decl[2].trim(),
          line: i + 1,
        };
      }
      return;
    }

    for (const ch of line) {
      if (ch === '{') {
        const selector = line.split('{')[0].trim() || '(block)';
        const node = { selector, line: i + 1, parent: current, decls: {}, children: [] };
        current.children.push(node);
        current = node;
      } else if (ch === '}') {
        current = current.parent ?? root;
      }
    }
  });
  return root;
}

/**
 * そのブロックに効く背景。自分 → 親 と遡り、**不透明な面に出会うまで**重ねる。
 * 半透明しか無いまま根まで来たら、ページの面（`--wim-color-surface`）に載せる。
 * 面がどこにも書かれていなければ null（＝評価しない）。
 */
function effectiveBackground(vars, node) {
  const layers = [];
  for (let n = node; n; n = n.parent) {
    const bg = n.decls['background-color'];
    if (!bg) continue;
    const color = resolveValue(vars, bg.value);
    if (!color) return null; // 解けない面があるなら、その下は判定しない
    if (color.a === 0) continue; // transparent は面を作らない
    layers.push(color);
    if (color.a === undefined || color.a >= 1) break;
  }
  if (layers.length === 0) return null;
  const bottom = layers[layers.length - 1];
  const base =
    bottom.a === undefined || bottom.a >= 1 ? layers.pop() : resolveValue(vars, 'var(--wim-color-surface)');
  if (!base) return null;
  return layers.reduceRight((acc, layer) => composite(layer, acc), base);
}

// --- 検査 -----------------------------------------------------------------
const files =
  probeFiles.length > 0
    ? probeFiles
    : globSync('src/**/*.scss', { posix: true }).filter((f) => !f.includes('/generated/'));

const failures = [];
const evaluated = [];
let skippedNoBg = 0;
let skippedUnresolved = 0;
let skippedDisabled = 0;

/** そのブロックに効くセレクタを根まで連ねる（無効状態の判定に使う）。 */
const selectorChain = (node) => {
  const parts = [];
  for (let n = node; n && n.parent; n = n.parent) parts.unshift(n.selector);
  return parts.join(' ');
};

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const srcLines = source.split(/\r?\n/);
  const excusedAt = (lineNo) => {
    for (let k = lineNo - 2; k >= 0; k -= 1) {
      const prev = srcLines[k].trim();
      if (!prev.startsWith('//') && !prev.startsWith('*') && !prev.startsWith('/*')) return false;
      if (prev.includes(EXCUSE)) return true;
    }
    return false;
  };

  const root = parseBlocks(source);
  const walk = (node) => {
    const fgDecl = node.decls.color;
    if (fgDecl && DISABLED_SELECTOR.test(selectorChain(node))) {
      skippedDisabled += 1;
    } else if (fgDecl && !excusedAt(fgDecl.line)) {
      for (const [theme, vars] of THEMES) {
        const fgRaw = resolveValue(vars, fgDecl.value);
        if (!fgRaw) {
          if (theme === 'light') skippedUnresolved += 1;
          continue;
        }
        const bg = effectiveBackground(vars, node);
        if (!bg) {
          if (theme === 'light') skippedNoBg += 1;
          continue;
        }
        const fg = composite(fgRaw, bg);
        const cr = contrastRatio(fg, bg);
        const where = `${file}:${fgDecl.line} ${theme} \`${node.selector}\``;
        evaluated.push({ where, cr });
        if (cr < TEXT_MIN) {
          failures.push(`${where}: ${fmt(cr)} < ${TEXT_MIN}（${fgDecl.value} on 実効背景）`);
        }
      }
    }
    node.children.forEach(walk);
  };
  walk(root);
}

console.log('--- check:contrast:scss (SCSS に書かれた color / background の実効比) ---');
console.log(
  `\n${files.length} ファイル / 評価できた組 ${evaluated.length}` +
    `（背景が辿れず飛ばした ${skippedNoBg} ・色を解決できず飛ばした ${skippedUnresolved}` +
    ` ・無効状態で規格の対象外 ${skippedDisabled}）`,
);

if (listAll) {
  for (const e of [...evaluated].sort((a, b) => a.cr - b.cr)) {
    console.log(`  ${fmt(e.cr).padStart(6)}  ${e.where}`);
  }
}

// 「何も見ずに緑」を緑と読ませない。セレクタや宣言の書き方が変わって解析が
// 空振りしたら、それは合格ではなく故障。
if (evaluated.length === 0) {
  console.error('\n✗ 1 組も評価できませんでした（解析が空振りしています）。');
  process.exit(1);
}

if (probeFiles.length > 0) {
  console.log(`\n${failures.length} 件が基準を下回りました（probe: ${probeFiles.length} ファイル）。`);
  for (const f of failures) console.log(`  ${f}`);
  process.exit(failures.length > 0 ? 1 : 0);
}

if (failures.length > 0) {
  console.log(`\n[FAIL] 実際に描かれる組み合わせが AA を下回っています:`);
  for (const f of failures) console.log(`  ${f}`);
  console.log(`\n  文字は WCAG 2.x の 4.5:1（通常サイズ）。塗り用の \`--wim-color-<intent>\` ではなく`);
  console.log(`  文字用の \`--wim-color-text-<intent>\` を使うと 1 段暗くなり AA に入ります。`);
  console.log(`  大きい文字にしか使わないブロックなら \`${EXCUSE}\` を直前のコメントに書いて理由を残すこと。`);
  console.log('\n✗ check:contrast:scss failed.');
  process.exit(1);
}

const min = evaluated.reduce((a, b) => (a.cr < b.cr ? a : b));
console.log(`\n最小: ${fmt(min.cr)} — ${min.where}`);
console.log('\n✓ 解決できた組み合わせはすべて AA を満たしています。');
