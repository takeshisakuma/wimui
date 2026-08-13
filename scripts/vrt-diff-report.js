/**
 * VRT のベースライン更新を「本当に変わった枚」と「±1 階調のノイズ」に仕分ける（T165）。
 *
 * **なぜ要るか**: update は `--update-snapshots=all` で走る。これは意図的で、
 * 既定の `changed` は書き戻しを `threshold` / `maxDiffPixels` で判定するため
 * **閾値未満の変更がベースラインに反映されないまま残る**（T45 でページ色を
 * `#f5f5f5` → `#e5e5e5` にしたとき、light 937 枚のうち 852 枚が撮り直されず
 * 新旧混在でコミットバックされた）。`vrt.yml` のコメントを参照。
 *
 * その正しい代償として、**update のたびに 80〜190 枚が書き換わる**。中身は
 * 入力枠の縁などに乗る ±1 階調の丸め差で、目には見えない。実測（2026-08-13）:
 *
 *   dark-…-input--default   差 6 画素 / 最大 1-255   ← ノイズ
 *   light-…-label--default  差 11 画素 / 最大 1-255  ← ノイズ
 *   light-…-line（辺の色）   差 3,249 画素 / 最大 88-255 ← 本物
 *
 * 桁が違うので機械的に分けられる。**分けないと、本物の変更がノイズに埋もれる**
 * ── T45 は「ベースラインが黙って古びる」事故で、こちらは「新しさに埋もれて
 * 気づけない」側の同じ問題。
 *
 * Usage:
 *   node scripts/vrt-diff-report.js            # HEAD の変更を仕分ける
 *   node scripts/vrt-diff-report.js <commit>   # 指定コミットの変更を仕分ける
 */

import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { PNG } from "pngjs";

const commit = process.argv[2] || "HEAD";

/** ノイズと呼ぶ上限。これを超えたら人が見るべき変更として並べる。 */
const NOISE_MAX_LEVEL = 2; // 階調差（0-255）
const NOISE_MAX_PIXELS = 200; // 画素数

const SNAP_DIR = "vrt/vrt.spec.ts-snapshots/";

/**
 * **シェルを経由しないこと。** Windows の `execSync` は cmd.exe を挟むため、
 * PNG のようなバイナリ stdout が壊れる（実測: 別内容の 2 つの blob が
 * まったく同じ 46,120 バイトになり、差 0 と誤判定した）。
 * 引数配列で渡す `execFileSync` なら shell を通らない。
 */
function git(args, encoding) {
  return execFileSync("git", args, { encoding, maxBuffer: 1e9 });
}

function changedFiles(rev) {
  const out = git(["show", rev, "--name-status", "--format="], "utf8");
  return out
    .split("\n")
    .filter(Boolean)
    .map((l) => l.split("\t"))
    .filter(
      ([status, file]) =>
        file && file.startsWith(SNAP_DIR) && file.endsWith(".png"),
    )
    .map(([status, file]) => ({ status, file }));
}

function readBlob(rev, file) {
  try {
    return git(["show", `${rev}:${file}`], "buffer");
  } catch {
    return null;
  }
}

/** 2 枚の PNG を比べ、差のある画素数と最大階調差を返す。 */
function compare(a, b) {
  const A = PNG.sync.read(a);
  const B = PNG.sync.read(b);
  if (A.width !== B.width || A.height !== B.height) {
    return {
      resized: true,
      from: `${A.width}x${A.height}`,
      to: `${B.width}x${B.height}`,
    };
  }
  let pixels = 0;
  let maxLevel = 0;
  for (let i = 0; i < A.data.length; i += 4) {
    const d = Math.max(
      Math.abs(A.data[i] - B.data[i]),
      Math.abs(A.data[i + 1] - B.data[i + 1]),
      Math.abs(A.data[i + 2] - B.data[i + 2]),
    );
    if (d > 0) {
      pixels += 1;
      if (d > maxLevel) maxLevel = d;
    }
  }
  return { pixels, maxLevel, total: A.width * A.height };
}

const files = changedFiles(commit);
if (!files.length) {
  console.log(`${commit} にベースラインの変更はありません。`);
  process.exit(0);
}

const added = files.filter((f) => f.status === "A");
const modified = files.filter((f) => f.status === "M");
const removed = files.filter((f) => f.status === "D");

const real = [];
const noise = [];
const unreadable = [];

for (const { file } of modified) {
  const before = readBlob(`${commit}^`, file);
  const after = readBlob(commit, file);
  if (!before || !after) {
    unreadable.push(file);
    continue;
  }
  let r;
  try {
    r = compare(before, after);
  } catch (err) {
    unreadable.push(`${file}（${err.message}）`);
    continue;
  }
  const name = path.basename(file).replace("-chromium-linux.png", "");
  if (r.resized) {
    real.push({
      name,
      note: `寸法が変わった ${r.from} → ${r.to}`,
      sort: Infinity,
    });
  } else if (r.maxLevel <= NOISE_MAX_LEVEL && r.pixels <= NOISE_MAX_PIXELS) {
    noise.push({ name, pixels: r.pixels, maxLevel: r.maxLevel });
  } else {
    real.push({
      name,
      note: `${r.pixels.toLocaleString()} 画素 / 最大 ${r.maxLevel}-255`,
      sort: r.pixels * r.maxLevel,
    });
  }
}

real.sort((a, b) => b.sort - a.sort);

console.log(`--- VRT ベースラインの仕分け (${commit}) ---\n`);
console.log(
  `新規 ${added.length} / 更新 ${modified.length} / 削除 ${removed.length}` +
    `  ── 更新のうち **本物 ${real.length} / ノイズ ${noise.length}**` +
    (unreadable.length ? ` / 読めず ${unreadable.length}` : ""),
);
console.log(
  `（ノイズの定義: 最大階調差 ${NOISE_MAX_LEVEL} 以下 かつ 差のある画素 ${NOISE_MAX_PIXELS} 以下）\n`,
);

if (added.length) {
  console.log(`■ 新規（${added.length}）`);
  for (const { file } of added) {
    console.log(
      `   + ${path.basename(file).replace("-chromium-linux.png", "")}`,
    );
  }
  console.log("");
}

if (real.length) {
  console.log(`■ 人が見るべき変更（${real.length}）`);
  for (const r of real) console.log(`   ${r.note.padEnd(34)} ${r.name}`);
  console.log("");
} else if (modified.length) {
  console.log("■ 人が見るべき変更: なし（更新はすべて ±1 階調のノイズ）\n");
}

if (removed.length) {
  console.log(`■ 削除（${removed.length}）`);
  for (const { file } of removed) {
    console.log(
      `   - ${path.basename(file).replace("-chromium-linux.png", "")}`,
    );
  }
  console.log("");
}

if (unreadable.length) {
  console.log(
    `■ 読めなかった（${unreadable.length}）── **「問題なし」ではない**`,
  );
  for (const f of unreadable) console.log(`   ? ${f}`);
  console.log("");
}

if (noise.length) {
  const worst = noise.reduce((m, n) => (n.pixels > m.pixels ? n : m), noise[0]);
  console.log(
    `■ ノイズ（${noise.length}）── 最大でも ${worst.pixels} 画素 / ${worst.maxLevel}-255（${worst.name}）`,
  );
}
