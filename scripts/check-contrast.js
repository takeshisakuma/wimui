/**
 * check:contrast — intent × variant × サーフェスの可読性・可視性ガード（T34）。
 *
 * 個々のトークンが正しくても**組み合わせだけが壊れる**ことがある。実例:
 * `neutral` × `subtle` は light テーマで不可視だった（base = `--wim-color-disabled`
 * = #e5e5e5 を 15% で白に敷くと #fbfbfb 相当）。テキストのコントラストは 9:1 あって
 * axe も通り、**VRT でも捕まらなかった**（`vrt.spec.ts` の threshold 0.1 を下回る色差
 * のため差分ゼロ扱い。実際 dark 側のベースラインしか動かなかった）。
 *
 * ここでは `_token-common.scss` の導出規則を再現して実効色を求め、2 つを見る:
 *
 *   1. テキスト可読性 — WCAG 2.x のコントラスト比 >= 4.5（Badge 等は小さい文字なので
 *      large text の 3:1 ではなく通常テキストの基準を使う）
 *   2. 塗りの可視性  — 塗りとサーフェスの OKLab 距離 >= 0.015
 *
 * **2 のしきい値は WCAG 由来ではなく実測から決めている。** 既知の壊れていた組み合わせ
 * （neutral × subtle）は 0.0072〜0.0116、現存する最小の正常な組み合わせ（dark
 * info × subtle on surface）は 0.0217 で、その間に置いた。コントラスト比では
 * 明度差しか見ないため「色相だけ違う面」を区別できず、この用途には向かない。
 *
 * **outline の枠線は対象外**（意図的）。WCAG 1.4.11 の 3:1 を当てると `neutral`
 * (#e5e5e5) や `secondary` (#b6b6b6) の枠が軒並み落ち、システム全体の枠色見直しに
 * なるため。別途の判断が要る。
 *
 * 使い方: node scripts/check-contrast.js
 * 引数は取らない（lint-staged から部分集合を渡されても全量を見る）。
 */
import fs from 'node:fs';
import {
  parseColor,
  composite,
  contrastRatio,
  perceptualDistance,
  fmt,
} from './lib/color.js';
import { readThemes, resolveColorToken as resolve } from './lib/design-tokens.js';

const TEXT_MIN = 4.5;
const FILL_MIN = 0.015;

/**
 * subtle 変種のアルファは `_token-common.scss` の `subtle-bg()` が持つ。
 * ここに数値を写すと SCSS 側を変えたときに黙ってズレるので、実物から読む。
 * 読めなければ「導出規則が変わった」ということなので、推測せず落とす。
 */
function readSubtleAlpha() {
  const src = fs.readFileSync('src/styles/_token-common.scss', 'utf8');
  const fn = src.match(/@function\s+subtle-bg\s*\([\s\S]*?\n\}/);
  const m = fn && fn[0].match(/l\s+c\s+h\s*\/\s*([0-9.]+)\s*\)/);
  if (!m) {
    console.error(
      '✗ src/styles/_token-common.scss の subtle-bg() からアルファ値を読めませんでした。',
    );
    console.error('  導出規則が変わった可能性があります。scripts/check-contrast.js を追随させてください。');
    process.exit(1);
  }
  return Number(m[1]);
}

/**
 * 判定対象のサーフェス。indicator 類が実際に載る面。
 *
 * **3 面しか見ていなかった**（T56）。トークンには surface 系が 11 個あり、検査されて
 * いない面に載せた瞬間に AA を割る。実測（2026-08-02、T32 の 3 枚目で axe が serious を
 * 出して発覚）: dark の `text-danger` は `surface`(#393939) で 6.06:1 だが
 * `surface-variant`(#4f4f4f) では 4.30:1、`subtle` のティントが重なると 3.65:1。
 *
 * **通常の文字は両面とも余裕で通る**（`text-primary` 8.19〜19.26 / `text-secondary`
 * 5.70〜10.59）ので、面が悪いのではなく **intent の文字色だけが上の 3 面向けに
 * 調整されている**のが実態。
 */
const SURFACES = [
  'surface',
  'surface-app',
  'surface-subtle',
  // 中身が載る面。ここを見ていなかったのが T56。
  'surface-variant',
  'surface-hover',
  'surface-inset',
  'surface-subtle-alpha',
  'surface-variant-alpha',
];

/**
 * 検査しない面と、その理由。
 *
 * - `surface-inverse`(#262626) と `surface-void`(#000) は**両テーマとも暗く固定**で、
 *   載せるのは反転用の文字。intent × variant を検査しても意味がない（26 件出るが全部これ）
 * - `surface-tertiary` は light が #b6b6b6 の中間グレーで、intent のティントを載せると
 *   構造的に厳しい（10 件）。**ここに intent の variant を置くことを想定しない**という
 *   線引きであって、面が壊れているわけではない
 */
const SURFACES_OUT_OF_SCOPE = {
  'surface-inverse': '両テーマとも暗く固定。載せるのは反転用の文字',
  'surface-void': '完全な黒。Lightbox 等の背景で、intent の面は載らない',
  'surface-tertiary': '中間グレー。intent の variant を置くことを想定しない',
};


const themes = readThemes();

const { canonical } = JSON.parse(fs.readFileSync('tokens/intents.json', 'utf8'));
const SUBTLE_ALPHA = readSubtleAlpha();

const failures = [];
const unresolved = [];
let checked = 0;
let minText = Infinity;
let minFill = Infinity;

for (const [theme, vars] of themes) {
  for (const [intent, def] of Object.entries(canonical)) {
    if (!def.surface) continue; // 専用サーフェスを持たない intent は生成クラスも無い
    const roles =
      def.surface === true
        ? { base: def.color, on: `text-on-${def.color}`, text: `text-${def.color}` }
        : def.surface;

    const base = resolve(vars, roles.base);
    const on = resolve(vars, roles.on);
    const text = resolve(vars, roles.text);
    if (!base || !on || !text) {
      unresolved.push(`${theme} ${intent}: ${JSON.stringify(roles)}`);
      continue;
    }
    // subtle の背景は intents.json が明示していればそれ、無ければ base を SUBTLE_ALPHA で敷く
    // 明示された `subtle` が解決できないときに黙って進めない。`composite(null, s)`
    // は `s` をそのまま返すので、**「読めなかった」が「サーフェスと同じ色」に化け、
    // 知覚距離 0.0000 という“測れているように見える”数字になる**（2026-08-09 に
    // `neutral-fill-subtle` を足して実際に起きた）。
    const subtleFill = roles.subtle ? resolve(vars, roles.subtle) : { ...base, a: SUBTLE_ALPHA };
    if (roles.subtle && !subtleFill) {
      unresolved.push(`${theme} ${intent}: subtle=${roles.subtle} を解決できません`);
      continue;
    }

    // `surface-hover` / `*-alpha` は**半透明のまま**定義されている（例:
    // `surface-subtle-alpha` = surface-void の 2%）。下地として使うには素の
    // `surface` へ合成して実効色にしてからでないと、アルファを無視した
    // 相対輝度で比べることになり数字が意味を持たない。
    //
    // **2026-08-09 まで、この 3 面は 1 度も検査されていなかった。** 相対色を
    // 解決できず `resolve` が null を返し、すぐ下の `continue` で落ちていた
    // （検査数 189 → 解決できるようにした後 294。**36% が黙って抜けていた**）。
    // `if (!surface) continue;` は「その面はこのテーマに無い」の意味だったが、
    // 「読めなかった」も同じ扱いになっていたのが原因。読めない面は落とす。
    const plain = resolve(vars, 'surface');
    for (const surfaceName of SURFACES) {
      const raw = resolve(vars, surfaceName);
      if (!raw) {
        unresolved.push(`${theme} surface ${surfaceName}`);
        continue;
      }
      const surface = raw.a >= 1 ? raw : composite(raw, plain);

      const cases = [
        // solid: 不透明の base を敷き、その上に `on` の文字
        { variant: 'solid', fill: composite(base, surface), fg: on },
        // outline: 背景は transparent なのでサーフェスそのもの。文字は `text`
        { variant: 'outline', fill: surface, fg: text, skipFill: true },
        // subtle: 合成後の塗りの上に `text`
        { variant: 'subtle', fill: composite(subtleFill, surface), fg: text },
      ];

      for (const { variant, fill, fg, skipFill } of cases) {
        checked += 1;
        const where = `${theme} ${intent}/${variant} on ${surfaceName}`;

        const cr = contrastRatio(composite(fg, fill), fill);
        minText = Math.min(minText, cr);
        if (cr < TEXT_MIN) {
          failures.push(`${where}: 文字のコントラスト ${fmt(cr)} < ${TEXT_MIN}`);
        }

        if (skipFill) continue;
        const d = perceptualDistance(fill, surface);
        minFill = Math.min(minFill, d);
        if (d < FILL_MIN) {
          failures.push(
            `${where}: 塗りがサーフェスと見分けられない（知覚距離 ${d.toFixed(4)} < ${FILL_MIN}）`,
          );
        }
      }
    }
  }
}

console.log('--- check:contrast (intent × variant × surface) ---');
console.log(
  `\n${checked} 組を検査 / 最小: 文字 ${fmt(minText)}（基準 ${TEXT_MIN}）・塗り ${minFill.toFixed(4)}（基準 ${FILL_MIN}）`,
);

if (unresolved.length > 0) {
  console.log(`\n[FAIL] トークンを解決できない intent があります:`);
  for (const u of unresolved) console.log(`  ${u}`);
}

if (failures.length > 0) {
  console.log(`\n[FAIL] 以下の組み合わせが基準を下回っています:`);
  for (const f of failures) console.log(`  ${f}`);
  console.log(`\n  文字は WCAG 2.x の 4.5:1（通常サイズ）。`);
  console.log(`  塗りは OKLab 距離で「サーフェスから見分けられるか」を見ています。`);
  console.log(`  intent を足すときに base がサーフェス寄りの淡色なら、`);
  console.log(`  tokens/intents.json の surface に \`subtle\` を明示してください。`);
}

if (failures.length > 0 || unresolved.length > 0) {
  console.log('\n✗ check:contrast failed.');
  process.exit(1);
}

console.log('\n✓ すべての組み合わせが基準を満たしています。');
