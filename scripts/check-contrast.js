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

// 判定対象のサーフェス。indicator 類が実際に載る面。
const SURFACES = ['surface', 'surface-app', 'surface-subtle'];

function readVars(file) {
  const src = fs.readFileSync(file, 'utf8');
  const map = {};
  // 同名が複数回出る場合は最初（:root）を採る
  for (const m of src.matchAll(/^\s*(--wim-[a-z0-9-]+):\s*([^;]+);/gim)) {
    if (!(m[1] in map)) map[m[1]] = m[2].trim();
  }
  return map;
}

function resolve(vars, token, depth = 0) {
  if (depth > 10) return null;
  const raw = vars[`--wim-color-${token}`];
  if (!raw) return null;
  const ref = raw.match(/^var\(\s*--wim-color-([a-z0-9-]+)/i);
  if (ref) return resolve(vars, ref[1], depth + 1);
  return parseColor(raw);
}

const themes = [
  ['light', readVars('src/tokens/generated/_css-vars.scss')],
  ['dark', readVars('src/tokens/generated/_css-vars-dark.scss')],
];

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
    const subtleFill = roles.subtle ? resolve(vars, roles.subtle) : { ...base, a: SUBTLE_ALPHA };

    for (const surfaceName of SURFACES) {
      const surface = resolve(vars, surfaceName);
      if (!surface) continue;

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
