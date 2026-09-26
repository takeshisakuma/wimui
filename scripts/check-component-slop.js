#!/usr/bin/env node
/**
 * Guard: 部品本体の SCSS に入った**質感と動きの AI-slop**を止める。
 *
 * 起票の経緯（2026-09-26）。T250 / T251 / #689 で部品の既定（intent・variant・揃え・
 * 斜めグラデ）は採点の対象になったが、**質感と動き**はどの基準も見ていなかった。
 * `check:slop` が部品 SCSS で見ているのは斜めグラデだけで、読んでみると次が既定に
 * 埋まっていた:
 *
 *   - solid の `Button` のホバーが「浮く（translateY）＋大きい影（shadow-lg）＋光沢
 *     （inner-highlight）＋行き過ぎて戻る easing（out-back）」の 4 重。合図は色の変化
 *     だけで足りる。画面に一番多く出る部品なので、ここが弾むと画面全体が弾む。
 *   - ページ内に置く部品（`TreeView` / `Alert` / `Banner` / `Toast`）が**既定で**すりガラス。
 *     composition.md の禁止表「量産グラスを既定や第一の見本にしない」そのもの。
 *   - `Card` / `Badge` / `Chip` / `Tag` ほかが interactive のホバーで浮く。
 *   - `blur()` に**別カテゴリのトークン**を流し込んでいる（`blur(var(--wim-radius-sm))` /
 *     `blur(var(--wim-spacing-lg))`）。テーマで角丸や余白を変えるとぼかしまで変わる。
 *     `check-hardcoded-values.js` は `\d+px` の綴りを探す作りなので、これには構造的に
 *     届かない（T266 と同じ形の穴）。
 *
 * ## 何を見るか（4 種）
 *
 *   1. blur-token     `blur(...)` の中身が blur のトークン（`--wim-blur-*` /
 *                     `--wim-color-glass-blur*`）でない。別カテゴリのトークン・生の長さ・
 *                     部品変数の生のフォールバック（`var(--x, 8px)`）はすべて鳴る。
 *   2. bounce-easing  `--wim-easing-out-back`（行き過ぎて戻る）を使っている。
 *   3. hover-lift     `:hover` の中の `transform` で**上へ動かす**（負の translateY。
 *                     中央寄せの `-50%` は除く）か**拡大する**（scale > 1）。
 *   4. default-glass  `backdrop-filter` が**選んだときだけの形**の外にある。セレクタの
 *                     入れ子に opt-in の印（`glass` / `frosted` / `blur-*` / `hasBackdrop`）
 *                     か、背後を覆うための層（`overlay` / `backdrop` / `scrim` / `mask`）
 *                     が無いものを鳴らす。背後を覆う層のぼかしは「何が起きたか」を
 *                     伝える機能なので対象外。
 *
 * ## 逃がし方（ベースラインを持たない理由）
 *
 * 件数のベースラインではなく、**1 件ずつ注記**させる: 同じ行か直上のコメント行に
 * `component-slop-ok: <理由>`。件数で凍結すると lint-staged が部分集合しか渡さない
 * 経路で判定がぶれる（`check:slop` のラチェットが常に素通りしていた穴）。注記方式なら
 * 1 ファイルだけ走査しても答えは変わらない（`check:numeric-length-defaults` と同じ）。
 *
 * ## 鳴ることの実証
 *
 *   node scripts/check-component-slop.js --probe <file...>
 *
 * で任意のファイルを注記を無視して走査できる（`--probe` は注記も見ない＝「消したら
 * 鳴るか」を確かめる経路）。導入時の実証は `npm run prove:component-slop`。
 */
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const args = process.argv.slice(2);
const probeIndex = args.indexOf('--probe');
const probeFiles = probeIndex >= 0 ? args.slice(probeIndex + 1) : [];
const stagedFiles = args.filter((a) => !a.startsWith('--') && !probeFiles.includes(a));

const EXCUSE = 'component-slop-ok:';

// blur のトークン。`--wim-color-glass-blur*` は名前が color の下にあるが中身は blur の値
// （12px / 8px / 16px）で、glass の組トークンとして公開されている。
const BLUR_TOKEN = /--wim-(blur-[\w-]+|color-glass-blur[\w-]*)/;
const OTHER_CATEGORY_TOKEN = /--wim-(spacing|radius|size|border|font|line-height|shadow|z|duration)-/;
const RAW_LENGTH = /(^|[\s,(])-?\d*\.?\d+(px|rem|em|vw|vh)\b/;

// 選んだときだけの形・背後を覆う層を表すセレクタの印。
const GLASS_OPT_IN = /glass|frosted|blur|hasBackdrop/i;
const SCRIM_LAYER = /overlay|backdrop|scrim|mask/i;

/** `blur(` の直後から対応する `)` までを返す（入れ子の var() を含む）。 */
function blurArgs(line) {
  const out = [];
  let from = 0;
  for (;;) {
    const at = line.indexOf('blur(', from);
    if (at < 0) return out;
    let depth = 0;
    let end = at + 4;
    for (; end < line.length; end += 1) {
      if (line[end] === '(') depth += 1;
      else if (line[end] === ')') {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    out.push(line.slice(at + 5, end));
    from = end;
  }
}

function blurProblem(arg) {
  const a = arg.trim();
  if (a === '0' || a === '') return null;
  if (OTHER_CATEGORY_TOKEN.test(a)) return '別カテゴリのトークンを blur に流している';
  if (!BLUR_TOKEN.test(a)) return 'blur のトークン（--wim-blur-*）を通っていない';
  // `var(--wim-foo-blur, 8px)` のように、部品変数の既定が生の長さなら、その 8px が
  // 既定の見た目になる（blur トークンは外側に無い）。blur トークンの**内側**にある
  // 生の長さ（あり得ないが）以外、生の長さは鳴らす。
  const stripped = a.replace(/var\(\s*--wim-(blur-[\w-]+|color-glass-blur[\w-]*)\s*\)/g, '');
  if (RAW_LENGTH.test(stripped)) return '部品変数のフォールバックが生の長さ';
  return null;
}

function hoverLiftProblem(value) {
  // 上へ動かす: lift トークン（none を除く）か、負の長さ。`-50%` は中央寄せ。
  if (/translateY\(\s*var\(--wim-lift-(?!none)/.test(value)) return '上へ浮かせている（lift トークン）';
  const ty = value.match(/translateY\(\s*(-\d*\.?\d+)(px|rem|em)\s*\)/);
  if (ty) return `上へ浮かせている（${ty[1]}${ty[2]}）`;
  const sc = value.match(/scale\(\s*(\d*\.?\d+)\s*\)/);
  if (sc && Number(sc[1]) > 1) return `拡大している（scale(${sc[1]})）`;
  return null;
}

/**
 * コメントを空白に置き換える（行数と桁は保つ）。`//` は SCSS の行コメント。
 * 文字列中の `//`（`url(https://…)`）を拾わないよう、引用符の中は飛ばす。
 */
function stripComments(src) {
  let out = '';
  let inBlock = false;
  let quote = null;
  for (let i = 0; i < src.length; i += 1) {
    const c = src[i];
    const n = src[i + 1];
    if (inBlock) {
      if (c === '*' && n === '/') {
        inBlock = false;
        out += '  ';
        i += 1;
      } else out += c === '\n' ? '\n' : ' ';
      continue;
    }
    if (quote) {
      out += c;
      if (c === quote && src[i - 1] !== '\\') quote = null;
      continue;
    }
    if (c === '"' || c === "'") {
      quote = c;
      out += c;
    } else if (c === '/' && n === '*') {
      inBlock = true;
      out += '  ';
      i += 1;
    } else if (c === '/' && n === '/') {
      while (i < src.length && src[i] !== '\n') {
        out += ' ';
        i += 1;
      }
      if (i < src.length) out += '\n';
    } else out += c;
  }
  return out;
}

function excused(rawLines, i) {
  if (rawLines[i].includes(EXCUSE)) return true;
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
    const rawLines = raw.split('\n');
    const lines = stripComments(raw).split('\n');
    const stack = [];
    let pending = '';
    lines.forEach((line, i) => {
      const push = (rule, detail) => {
        if (honourExcuses && excused(rawLines, i)) return;
        hits.push({ file, line: i + 1, rule, detail, text: rawLines[i].trim().slice(0, 110) });
      };
      // 宣言の判定は、この行を読み始めた時点の入れ子で行う（1 行 1 宣言が前提）。
      const selectors = stack.join(' ');
      const decl = line.match(/^\s*([\w-]+)\s*:\s*(.*)$/);
      if (decl) {
        const [, prop, value] = decl;
        for (const arg of blurArgs(value)) {
          const p = blurProblem(arg);
          if (p) push('blur-token', p);
        }
        if (/--wim-easing-out-back\b/.test(value)) push('bounce-easing', '行き過ぎて戻る easing');
        // `&:not(:hover)` はホバーしていないときなので外す。
        if (prop === 'transform' && /:hover/.test(selectors.replace(/:not\([^)]*\)/g, ''))) {
          const p = hoverLiftProblem(value);
          if (p) push('hover-lift', p);
        }
        if (prop === 'backdrop-filter' && !/^\s*none\b/.test(value)) {
          if (!GLASS_OPT_IN.test(selectors) && !SCRIM_LAYER.test(selectors)) {
            push('default-glass', `既定の面がすりガラス（${stack[stack.length - 1] ?? '?'}）`);
          }
        }
      } else if (/--wim-easing-out-back\b/.test(line)) {
        // transition の 2 行目以降（`transform var(--wim-duration-fast) var(--wim-easing-out-back);`）
        push('bounce-easing', '行き過ぎて戻る easing');
      }
      for (const c of line) {
        if (c === '{') {
          stack.push(pending.trim());
          pending = '';
        } else if (c === '}') {
          stack.pop();
          pending = '';
        } else if (c === ';') pending = '';
        else pending += c;
      }
      pending += ' ';
    });
  }
  return hits;
}

// lint-staged は**絶対パス**で渡す。相対に直さないと `src/components/` の判定に当たらず、
// 何も見ずに緑を返す（部分集合の経路での素通り＝`check:slop` のラチェットと同じ形）。
const normalise = (f) =>
  (path.isAbsolute(f) ? path.relative(process.cwd(), f) : f).split(path.sep).join('/');

const isMain = normalise(process.argv[1] ?? '').endsWith('scripts/check-component-slop.js');
if (isMain) {
  const targets = probeFiles.length > 0 ? probeFiles : stagedFiles.length > 0 ? stagedFiles : null;
  const files = (targets ? targets.map(normalise) : globSync('src/components/**/*.scss', { posix: true }))
    .filter((f) => f.endsWith('.scss'))
    // lint-staged は stories の SCSS も渡す。見るのは部品本体だけ（--probe は任意の場所を見る）。
    .filter((f) => probeFiles.length > 0 || f.startsWith('src/components/'))
    .filter((f) => fs.existsSync(f));

  console.log('--- check:component-slop (部品 SCSS の質感と動き) ---');
  console.log(`\n走査: SCSS ${files.length} ファイル${probeFiles.length > 0 ? '（--probe: 注記を無視）' : ''}`);

  // 母数 0 は「緑」ではなく「測っていない」。全量走査のときだけ落とす。
  if (files.length === 0 && !targets) {
    console.log('[FAIL] 走査対象が空です。glob のパターンが実態とずれています。');
    process.exit(1);
  }

  const hits = scan(files, { honourExcuses: probeFiles.length === 0 });
  if (hits.length > 0) {
    const byRule = hits.reduce((acc, h) => ((acc[h.rule] = (acc[h.rule] ?? 0) + 1), acc), {});
    console.log(
      `\n[FAIL] ${hits.length} 件（${Object.entries(byRule).map(([k, v]) => `${k} ${v}`).join(' / ')}）:`,
    );
    for (const h of hits) {
      console.log(`  ${h.file}:${h.line}  [${h.rule}] ${h.detail}`);
      console.log(`      ${h.text}`);
    }
    console.log('\n  - blur-token: `blur()` には --wim-blur-* を渡す（部品変数のフォールバックも同じ）。');
    console.log('  - bounce-easing / hover-lift: ホバーの合図は 1 つ（色・枠・影のどれか）に絞る。');
    console.log('    浮き上がりは、浮いている部品（FloatButton / BackTop）の opt-in だけにする。');
    console.log('  - default-glass: すりガラスは `&.glass` のような選んだときだけの variant に置き、');
    console.log('    既定の面はサーフェス階層トークンで作る（composition.md 禁止表「量産グラス」）。');
    console.log(`  どうしても残すなら、同じ行か直上のコメントに \`${EXCUSE} <理由>\` を書くこと。`);
    process.exit(1);
  }

  // 「質感と動きに slop はありません」とは言わない。見ているのは上の 4 種だけ。
  console.log('\n✓ blur のトークン / 弾む easing / ホバーの浮き上がり / 既定のすりガラス は基準内です。');
}
