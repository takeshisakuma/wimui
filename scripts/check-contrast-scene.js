#!/usr/bin/env node
/**
 * Guard: **面の上に乗る「シーン」まで含めて**文字のコントラストを見る（T214）。
 *
 * `check:contrast`（T34）は intent × variant × サーフェスの組み合わせを見るが、
 * **塗りの上にさらに乗るものを見ていない**。solid のボタンは地色の上に
 * `--wim-glass-gradient`（白 0.08 → 透明）が重なるので、**素の地では通るのに
 * 白が乗る上側で落ちる**という形の欠陥ができる ── 宣言も導出も正しく、
 * axe も VRT も鳴らない（axe は SVG でない普通の要素の背景を合成して測れるが、
 * `color-contrast` はグラデーションを「決められない」として incomplete に落とす）。
 *
 * T206 の全量実測で実際に 2 件出た:
 *   - `intent=success` … 素 4.65（余裕 0.15）→ シーン込み 4.04
 *   - `soft` プリセットの primary … 素 5.19 → シーン込み 4.40
 *
 * **この 2 件は「たまたま余裕の無い色を選んだ」のではなく、素の地しか見ていない
 * 基準で色を選んだ**ことの帰結。`tokens/color/semantic.json` の
 * `text-on-success` のコメントが「4.65:1（AA）」と**素の値だけ**を根拠にしている
 * のがその証拠で、シーンを勘定に入れる場所がどこにも無かった。ここがその場所。
 *
 * ── 何を見るか ────────────────────────────────────────────────────────
 *   solid の各 intent（`button.module.scss` から読む）× テーマ（light / dark）
 *   × プリセット（既定 + `_presets.scss` の accent 上書き）について、
 *   **シーンが一番強い点**（グラデーションの白側の端）を地として 4.5:1 を要求する。
 *
 * ── ハードコードしないもの ────────────────────────────────────────────
 *   - シーンの白の濃さは `src/tokens/_effects.scss` の `--wim-glass-gradient` から読む
 *   - solid の intent と文字色は `button.module.scss` から読む（増えたら自動で対象になる）
 *   - プリセットの accent は `src/tokens/generated/_presets.scss` から読む
 *   どれも読めなければ**失敗する**。「読めなかった」を「違反なし」に混ぜない（T54）。
 *
 * ── 見ないもの（意図的。理由つき）──────────────────────────────────────
 *   - **`:disabled`** … 無効な部品の文字は WCAG 1.4.3 の対象外。
 *   - **`--wim-inner-highlight`**（上辺 1px の白 0.1）… 文字が 1px の縁に乗ることは無い。
 *     ただし**シーンより濃い**ので、縁に文字を置く設計が出てきたら見直すこと。
 *   - **`:hover`** … `calc(l * 0.9)` で地を**暗くする**。
 *     **明るい文字なら比は必ず上がる**ので見なくてよい。**暗い文字なら下がる**が、
 *     `oklch()` の逆変換（sRGB → OKLCH）をこのリポジトリの色ライブラリは持たないので
 *     静的には解けない ── **色計算を自前で足さない**（T108）。
 *     そこで暗い文字の組だけ**実測値を色で鍵をかけて凍結**する（下の `HOVER_MEASURED`）。
 *     地か文字が変われば鍵が外れて落ちるので、測り直しが強制される。
 *
 * Usage: node scripts/check-contrast-scene.js
 *   引数は取らない（lint-staged から部分集合を渡されても全量を見る）。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseColor, composite, contrastRatio, relativeLuminance, fmt } from "./lib/color.js";
import { readThemes, resolveColorToken } from "./lib/design-tokens.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EFFECTS = path.join(root, "src", "tokens", "_effects.scss");
const BUTTON = path.join(root, "src", "components", "form", "Button", "button.module.scss");
const PRESETS = path.join(root, "src", "tokens", "generated", "_presets.scss");

const TEXT_MIN = 4.5;
/** 「明るい文字」の下限（相対輝度）。白 1.0 / #767676 ≒ 0.18。 */
const LIGHT_TEXT_LUMINANCE = 0.5;

/**
 * **暗い文字 × solid の hover** だけの実測台帳。鍵は `地|文字` の hex。
 *
 * hover は `oklch(from <bg> calc(l * 0.9) c h)` で地を暗くするので、暗い文字では
 * 比が下がる。sRGB → OKLCH の逆変換は色ライブラリに無く、**足すと自前の色計算に
 * なる**（T108 で再実装が本物と食い違った）ので、**実際に出荷する CSS エンジンに
 * 解かせた値**をここに置く。`Chromium` に `oklch(from … calc(l*.9) c h)` を計算させ、
 * 返ってきた `oklch()` リテラルを `scripts/lib/color.js` に食わせて比を出している
 * （エンジンが相対色を、リポジトリの道具が比を担当する）。
 *
 * **色が変われば鍵が外れてこのガードが落ちる**ので、測り直しが強制される。
 * 測り直し方:
 *   node -e "…" で Chromium に `oklch(from <bg> calc(l * 0.9) c h)` を
 *   `getComputedStyle` させ、返り値を `contrastRatio` に渡す（シーンを合成した値も見る）。
 */
const HOVER_MEASURED = {
  // dark / danger: 地 #fb7482 に黒文字。hover は oklch(0.650284 0.165115 15.7924)
  // ＝ 比 6.00、シーン込み 6.62（2026-08-20 実測）。resting の 7.92 から下がるが余裕がある。
  "#fb7482|#000000": 6.62,
};

const toHex = (c) =>
  "#" + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

const failures = [];
const rows = [];

/** 読めなければ失敗させる。null を返して先へ進ませない。 */
const must = (value, what) => {
  if (value == null) failures.push(`${what} を読み取れなかった（形が変わったならこのガードも直すこと）`);
  return value;
};

// ── シーン: 一番強い白を取る ──────────────────────────────────────────
const effects = fs.readFileSync(EFFECTS, "utf-8");
const gradient = /--wim-glass-gradient:\s*([^;]+);/.exec(effects)?.[1];
must(gradient, "--wim-glass-gradient");

/** `rgb(255 255 255 / 0.08)` 形式の中で一番濃い白を拾う。 */
const strongestWhite = (() => {
  if (!gradient) return null;
  let best = null;
  for (const m of gradient.matchAll(/rgb\(\s*255\s+255\s+255\s*\/\s*([0-9.]+)\s*\)/g)) {
    const a = Number(m[1]);
    if (Number.isFinite(a) && (best === null || a > best)) best = a;
  }
  return best;
})();
if (gradient && (strongestWhite === null || strongestWhite === 0)) {
  failures.push(`--wim-glass-gradient に白の停止点が見つからない: ${gradient.replace(/\s+/g, " ").trim()}`);
}
const scene = strongestWhite ? parseColor(`rgba(255,255,255,${strongestWhite})`) : null;

// ── solid の intent と文字色を Button から読む ────────────────────────
const button = fs.readFileSync(BUTTON, "utf-8");
/** `&.default { --solid-bg: var(--wim-color-primary); color: var(--wim-color-text-on-primary); }` */
const variants = [];
for (const m of button.matchAll(/&\.([a-zA-Z][\w-]*)\s*\{([\s\S]*?)\n\s{4}\}/g)) {
  const [, name, block] = m;
  const bg = /--solid-bg:\s*var\(--wim-color-([a-z0-9-]+)\)/.exec(block)?.[1];
  const fg = /(?:^|\n)\s*color:\s*var\(--wim-color-([a-z0-9-]+)\)/.exec(block)?.[1];
  if (!bg || !fg) continue;
  if (name === "disabled") continue; // 無効な部品は 1.4.3 の対象外
  variants.push({ name, bg, fg });
}
if (variants.length === 0) {
  failures.push(`${path.relative(root, BUTTON)} から solid の intent を 1 つも読めなかった（走査が成立していない）`);
}

// ── プリセットの accent 上書き ────────────────────────────────────────
const presetsSrc = fs.readFileSync(PRESETS, "utf-8");
const presets = [{ name: "(既定)", overrides: {} }];
for (const m of presetsSrc.matchAll(/\[data-wim-preset="([^"]+)"\]\s*\{([\s\S]*?)\}/g)) {
  const [, name, block] = m;
  const overrides = {};
  for (const o of block.matchAll(/--wim-color-([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
    overrides[o[1]] = o[2];
  }
  if (Object.keys(overrides).length) presets.push({ name, overrides });
}
if (presets.length === 1) {
  failures.push(`${path.relative(root, PRESETS)} から accent を上書きするプリセットを 1 つも読めなかった`);
}

// ── 判定 ─────────────────────────────────────────────────────────────
if (scene) {
  for (const [theme, vars] of readThemes()) {
    for (const preset of presets) {
      for (const v of variants) {
        const bgHex = preset.overrides[v.bg];
        const bg = bgHex ? parseColor(bgHex) : resolveColorToken(vars, v.bg);
        const fg = resolveColorToken(vars, v.fg);
        const label = `solid.${v.name} / ${theme} / ${preset.name}`;
        if (!bg || !fg) {
          failures.push(`${label}: ${!bg ? v.bg : v.fg} を解決できなかった`);
          continue;
        }

        // hover は地を暗くする。明るい文字なら比は上がるので見なくてよい。
        // 暗い文字は下がるので、実測台帳に鍵があるかを見る（無ければ測り直させる）。
        if (relativeLuminance(fg) < LIGHT_TEXT_LUMINANCE) {
          const key = `${toHex(bg)}|${toHex(fg)}`;
          const measured = HOVER_MEASURED[key];
          if (measured === undefined) {
            failures.push(
              `${label}: 暗い文字（${v.fg}）× 地 ${toHex(bg)} の hover が未実測。` +
                `**solid の hover は地を暗くするので、暗い文字では比が下がる。** ` +
                `HOVER_MEASURED に鍵 "${key}" で実測値を足すこと（測り方はそのコメント）。`,
            );
          } else if (measured < TEXT_MIN) {
            failures.push(`${label}: hover + シーンの実測 ${fmt(measured)} が ${TEXT_MIN} を割っている`);
          } else {
            rows.push(`${label.padEnd(34)} hover+シーン ${fmt(measured).padStart(6)}（実測台帳）`);
          }
        }

        const bare = contrastRatio(fg, bg);
        const withScene = contrastRatio(fg, composite(scene, bg));
        const line =
          `${label.padEnd(34)} 素 ${fmt(bare).padStart(6)} → シーン込み ${fmt(withScene).padStart(6)}`;
        if (withScene < TEXT_MIN) {
          failures.push(`${line}  （要 ${TEXT_MIN}。素では通るのに、白が乗る上側で落ちている）`);
        } else {
          rows.push(line);
        }
      }
    }
  }
}

// ── 結果 ─────────────────────────────────────────────────────────────
if (failures.length > 0) {
  console.error("check:contrast-scene — シーンが乗った上面で 4.5 を割っています（T214）\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error(
    `\nシーンは白 ${strongestWhite ?? "?"} の重ね（--wim-glass-gradient）。` +
      `\n直し方は「地色を一段深いトーンにする」か「シーンを外す」の設計判断で、` +
      `\n色を選ぶときは**素の値だけを根拠にしない**こと（それがこの穴の入口だった）。`,
  );
  process.exit(1);
}

console.log(
  `check:contrast-scene — OK（solid ${variants.length} intent × テーマ 2 × プリセット ${presets.length}` +
    ` = ${rows.length} 通り。シーンは白 ${strongestWhite}）`,
);
for (const r of rows) console.log(`  ・${r}`);
