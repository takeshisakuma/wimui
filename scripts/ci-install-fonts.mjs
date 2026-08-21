#!/usr/bin/env node
/**
 * CI-8 ② — **日本語のフォントを、CSS ではなく OS のフォントとして CI に入れる。**
 *
 * ── なぜ CSS ではないのか（実測で 2 回外した）───────────────────────────
 * 最初は `@font-face` ＋ `unicode-range` で Storybook 側から配った。**latin の
 * 行ボックスまで動いた** ── 日本語を 1 文字も含まない `snackbar--success` の箱が
 * `32.998px → 34.175px` に伸び、CI では**面が読み終わる前後でどちらにもなる**ため
 * 回ごとに絵が変わった（#474 以降、`Snackbar` の 6 枚が入れ替わりで落ちた）。
 *
 * 別ファミリー名にしてスタックの**末尾**へ置いても消えなかった（34.018px）。
 * `ascent-override` / `descent-override` を当てても縮んだのは差の 8% だけ。
 * **Chrome は「読み込まれている候補ファミリー」の metrics を行ボックスの計算に
 * 入れる** ── グリフを 1 つも供給していなくても。つまり CSS 側でこの汚染を
 * 消すのは筋が悪い。
 *
 * OS のフォントとして置けば **CSS は 1 行も変わらない**ので、この問題は原理的に
 * 起きない。apt が `fonts-wqy-zenhei` でやっていたことを、apt 抜きで自前でやる。
 *
 * ── 何を入れるか ─────────────────────────────────────────────────────
 * `@fontsource/noto-sans-jp` の `japanese` サブセット（既に依存にある）。ただし
 * **fontconfig は woff2 を読まない**ので、`wawoff2` で TTF に戻してから置く。
 *
 * ── 冪等・非 Linux では何もしない ────────────────────────────────────
 * `fc-cache` が無い環境（ローカルの Windows / macOS）では黙って抜ける。CI の
 * ubuntu-latest だけが対象。
 */
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";
import { decompress } from "wawoff2";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** 入れる面。VRT が使うのは 400 / 500 / 700。 */
const FACES = [400, 500, 700].map((weight) => ({
  weight,
  src: path.join(
    root,
    "node_modules/@fontsource/noto-sans-jp/files",
    `noto-sans-jp-japanese-${weight}-normal.woff2`,
  ),
  out: `NotoSansJP-${weight}.ttf`,
}));

const hasFcCache = () => {
  try {
    execFileSync("fc-cache", ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};

if (!hasFcCache()) {
  console.log("fc-cache が無いので何もしない（CI の Linux 以外は対象外）。");
  process.exit(0);
}

const fontDir = path.join(os.homedir(), ".local", "share", "fonts");
fs.mkdirSync(fontDir, { recursive: true });

let written = 0;
for (const face of FACES) {
  if (!fs.existsSync(face.src)) {
    console.error(`✗ 元ファイルが無い: ${face.src}`);
    console.error("  npm ci を先に走らせること。");
    process.exit(1);
  }
  const ttf = await decompress(fs.readFileSync(face.src));
  fs.writeFileSync(path.join(fontDir, face.out), Buffer.from(ttf));
  written += 1;
}

execFileSync("fc-cache", ["-f", fontDir], { stdio: "inherit" });

// **入ったことを確かめる。** 置いただけで fontconfig が拾わない形（権限・パス）は
// 静かに失敗するので、`fc-list` に出るところまでを成功条件にする。
const listed = execFileSync("fc-list", [":family"], { encoding: "utf8" });
if (!/Noto Sans JP/.test(listed)) {
  console.error("✗ fc-cache 後も fc-list に Noto Sans JP が出てこない。");
  console.error(`  置いた先: ${fontDir}`);
  process.exit(1);
}

console.log(`✓ 日本語フォントを ${written} 面入れた（${fontDir}）。`);
