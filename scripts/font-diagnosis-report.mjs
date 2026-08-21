/**
 * CI-8 ① — `vrt/font-diagnosis.spec.ts` が 2 つの条件（apt あり / なし）で採った
 * 計測を突き合わせて、**どの文字がどのファミリーへ落ちたか**を表にする。
 *
 * 見るのは 2 点:
 *   1. **文字ごとに、グリフを供給したファミリーが変わったか**（`CSS.getPlatformFontsForNode`）
 *   2. **その文字の幅が変わったか** ── VRT が落ちる直接の理由。ファミリー名が
 *      同じでも幅が違えば別物なので、両方見る。
 *
 * **対照（`role: "control"`）に差が出たら、そこを大きく出す。** 落ちなかった
 * ストーリーにも同じ差が出るなら、「フォント差が 4 枚の原因」という見立て自体が
 * 違うということ ── 表の数字より先にそれを疑う。
 *
 * 使い方:
 *   node scripts/font-diagnosis-report.mjs --a with-deps --b without-deps
 *
 * 出力は Markdown（そのまま `$GITHUB_STEP_SUMMARY` に流せる）。
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const baseDir = path.resolve(__dirname, "..", getArg("dir", "font-diagnosis"));
const labelA = getArg("a", "with-deps");
const labelB = getArg("b", "without-deps");

const dirA = path.join(baseDir, labelA);
const dirB = path.join(baseDir, labelB);

for (const [label, dir] of [
  [labelA, dirA],
  [labelB, dirB],
]) {
  if (!fs.existsSync(dir)) {
    console.error(`計測が見つからない: ${label} (${dir})`);
    console.error(
      "FONT_DIAG_LABEL=<label> npx playwright test vrt/font-diagnosis.spec.ts で採る。",
    );
    process.exit(1);
  }
}

const readStories = (dir) =>
  Object.fromEntries(
    fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => [
        f.replace(/\.json$/, ""),
        JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")),
      ]),
  );

const a = readStories(dirA);
const b = readStories(dirB);

const storyIds = Object.keys(a).filter((id) => id in b);
const onlyA = Object.keys(a).filter((id) => !(id in b));
const onlyB = Object.keys(b).filter((id) => !(id in a));

/** 文字プローブを「フォント指定 + 文字」で引けるようにする。 */
const charKey = (c) => `${c.fontFamily}|${c.fontWeight}|${c.fontSize}|${c.char}`;
const families = (c) => c.platformFonts.map((f) => f.family).join(" / ") || "(なし)";
const indexChars = (report) =>
  new Map(report.chars.map((c) => [charKey(c), c]));

const out = [];
const say = (line = "") => out.push(line);

say(`# CI-8 フォント診断 — \`${labelA}\` と \`${labelB}\` の差`);
say();

if (onlyA.length || onlyB.length) {
  say(
    `> **片方にしか無いストーリーがある** — ${labelA} のみ: ${onlyA.length ? onlyA.join(", ") : "なし"} / ${labelB} のみ: ${onlyB.length ? onlyB.join(", ") : "なし"}`,
  );
  say();
}

const summary = [];
let controlDiffs = 0;

for (const storyId of storyIds) {
  const ra = a[storyId];
  const rb = b[storyId];
  const ia = indexChars(ra);
  const ib = indexChars(rb);

  const rows = [];
  for (const [key, ca] of ia) {
    const cb = ib.get(key);
    if (!cb) {
      rows.push({ ca, cb: null, familyChanged: true, widthChanged: true });
      continue;
    }
    const familyChanged = families(ca) !== families(cb);
    // 幅は同じ計算経路なので、変われば字形が変わっている。
    const widthChanged = Math.abs(ca.width - cb.width) > 0.01;
    if (familyChanged || widthChanged) {
      rows.push({ ca, cb, familyChanged, widthChanged });
    }
  }

  summary.push({
    storyId,
    role: ra.role,
    chars: ia.size,
    changed: rows.length,
  });
  if (ra.role === "control" && rows.length) controlDiffs += rows.length;

  if (!rows.length) continue;

  say(`## ${storyId} <sub>(${ra.role})</sub>`);
  say();
  say(
    `| 文字 | コードポイント | CSS の font-family | ${labelA} | ${labelB} | 幅 ${labelA} → ${labelB} |`,
  );
  say("| --- | --- | --- | --- | --- | --- |");
  for (const { ca, cb, familyChanged, widthChanged } of rows) {
    const mark = (s, changed) => (changed ? `**${s}**` : s);
    say(
      `| \`${ca.char}\` | ${ca.codePoint} | \`${ca.fontFamily}\` | ` +
        `${mark(families(ca), familyChanged)} | ${mark(cb ? families(cb) : "(未計測)", familyChanged)} | ` +
        `${mark(`${ca.width.toFixed(2)} → ${cb ? cb.width.toFixed(2) : "?"}`, widthChanged)} |`,
    );
  }
  say();
}

say("## まとめ");
say();
say("| ストーリー | 区分 | 測った文字 | 変わった文字 |");
say("| --- | --- | --- | --- |");
for (const s of summary) {
  say(
    `| ${s.storyId} | ${s.role} | ${s.chars} | ${s.changed ? `**${s.changed}**` : "0"} |`,
  );
}
say();

if (controlDiffs) {
  say(
    `> **対照（落ちなかったストーリー）にも ${controlDiffs} 文字の差が出ている。** ` +
      "「フォントの差が 4 枚の原因」という見立てでは説明が付かないので、" +
      "表の中身より先にそこを疑うこと（測定条件がずれている / 別機構が効いている）。",
  );
} else if (summary.some((s) => s.role === "failing" && s.changed)) {
  say(
    "> 対照は 1 文字も動かず、落ちた側にだけ差が出た＝**フォントの差で説明が付く**。" +
      "上の表の「変わった側のファミリー」が、対策で塞ぐべき穴。",
  );
} else {
  say(
    "> **どちらにも差が出ていない。** 2 つの条件が実は同じだった可能性がある" +
      "（apt を抜いたつもりが走っていた等）。まず条件を確かめること。",
  );
}

process.stdout.write(`${out.join("\n")}\n`);
