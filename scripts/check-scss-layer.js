/**
 * check:scss-layer — すべての `module.scss` が `@layer component` を持つか（T243）。
 *
 * **レイヤーの外の宣言はレイヤーの中より常に強い。詳細度は比較にすら入らない。**
 * 1 file でも外にあると、その file のクラス 1 つが、他のどんな指定にも勝つ。
 * 実際に T240 がそれで出た ── `datagrid.module.scss` の `.cellFixed`（クラス 1・
 * layer の外）が `table.module.scss` の `.scope .root.mobileCard tbody tr
 * td.stickyLeft`（クラス 4 + 要素 3・layer の中）に勝ち、カード表示の固定列の解除が
 * 効かないまま出荷されていた。**表側からはどう書いても直せない。**
 *
 * 2026-08-30 に 32 file を層へ入れて 212/212 にした。**この検査はその状態を保つためだけ
 * にある** ── 入れた直後は当然 0 件で通るので、**「0 件」を成果として受け取らないこと。**
 * 完成の判定は「故意に 1 file を層の外へ出して鳴ること」で行った。
 *
 * **サードパーティ向けの上書きは層の外に置くのが正しい**（React Flow / FullCalendar の
 * CSS はどのレイヤーにも属さないので、層の中からでは詳細度に関わらず負ける）。
 * それらの file も `@layer component` のブロック自体は持っているので、この検査は通る。
 * 見ているのは「層が 1 つも無い file」だけ。
 *
 * 使い方: node scripts/check-scss-layer.js
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const TARGET = path.join(ROOT, "src", "components");

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".module.scss")) out.push(p);
  }
  return out;
};

/**
 * **BOM とコメントで両方向に間違えたことがある（記録）。**
 * `grep -L "@layer"` で数えたとき、①`Carousel` ほか 4 file は**先頭に BOM が付いた
 * 状態で 1 行目に `@layer component {`** があり「外」と数えられ、
 * ②`datagrid.module.scss` は**コメントに `@layer` と書いてあるだけ**で「中」と
 * 数えられていた。BOM を落としてから、**ブロックを開いている形**だけを見る。
 */
const opensLayer = (src) => /@layer\s+component\s*\{/.test(src.replace(/^﻿/, ""));

const files = walk(TARGET);
const missing = files.filter((f) => !opensLayer(fs.readFileSync(f, "utf8")));

if (missing.length) {
  console.error("\n--- check:scss-layer（カスケードレイヤー） ---\n");
  console.error("✗ `@layer component` を持たない module.scss:");
  for (const f of missing) console.error(`  - ${path.relative(ROOT, f)}`);
  console.error("");
  console.error("  レイヤーの外の宣言は、レイヤーの中のどんな詳細度にも勝つ。");
  console.error("  1 file 外にあるだけで、他の部品からは上書きできなくなる（T240）。");
  console.error("");
  console.error("  直し方: `@use` の後ろで `@layer component {` を開き、本文を包む。");
  console.error("  サードパーティ（React Flow / FullCalendar）向けの上書きだけは");
  console.error("  層の外に残してよい ── 相手の CSS が層の外にいるため。");
  console.error("");
  process.exit(1);
}

console.log(`✓ module.scss ${files.length} file すべてが @layer component を持つ。`);
