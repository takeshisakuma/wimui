#!/usr/bin/env node
/**
 * Guard: 出荷アイコンの**出所**が `NOTICE` の記述とずれていないか（T80）。
 *
 * 2026-08-05 に分かったこと: `src/icon/` の 74 個はほぼ Feather / Lucide と
 * **バイト一致**しているのに、リポジトリには出所の表記が 1 つも無かった。
 * 経緯を辿ると、アイコンは **AI に生成させたもの**で、そのとき既存セットから
 * 採られたのかは記録されていない。**同じことがこの日の作業中にも起きた** ──
 * 「契約に沿って描いた」と報告した `loading` と `square` が、あとで照合したら
 * Lucide の `loader-circle` / `square` と**バイト一致**だった。
 *
 * つまり「自分で描いたつもり」は出所の証拠にならず、**中身を突き合わせる以外に
 * 検出手段が無い**。人が覚えている限り正しい、という前提を捨ててここで機械化する。
 *
 * 仕組み:
 *   - `scripts/icon-upstream-fingerprints.json` … 上流セットの指紋（正規化した
 *     図形の SHA-1）。**lucide-static は 56MB あり devDependency には重すぎる**ので、
 *     パッケージを入れず指紋だけを置く。照合バージョンが固定される利点もある。
 *   - `scripts/icon-provenance.json` … 出荷アイコン 1 つずつの、期待される出所。
 *
 * 検出できること:
 *   - 新しいアイコンが増えた（出所が未記録）
 *   - 既存アイコンの中身が変わり、出所が変わった（自前 → 上流と一致、など）
 *   - 記録が現実と食い違っている
 *
 * どれも `NOTICE` を書き換える必要がある変化なので、ここで止める。
 *
 * Usage:
 *   node scripts/check-icon-provenance.js
 *   node scripts/check-icon-provenance.js --update   # 記録を現実に合わせる
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const ICON_DIR = path.join(root, "src", "icon");
const FINGERPRINTS = path.join(__dirname, "icon-upstream-fingerprints.json");
const MANIFEST = path.join(__dirname, "icon-provenance.json");

/**
 * 図形だけを取り出して指紋にする。**指紋の作り方は上流表の生成側と同一でなければ
 * ならない**（片方だけ変えると全件が「出所不明」に落ちる）。
 * 色や線幅は出所の判定に関係しないので除く。並び順も問わない。
 */
const fingerprint = (svg) => {
  const body = svg.includes("<svg") ? svg.slice(svg.indexOf(">", svg.indexOf("<svg")) + 1) : svg;
  const shapes = [];
  for (const m of body.matchAll(/<(path|circle|rect|line|polyline|polygon|ellipse)\b([^>]*)>/g)) {
    const attrs = [...m[2].matchAll(/([a-zA-Z][\w-]*)\s*=\s*"([^"]*)"/g)]
      .filter(([, k]) => !["fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "fill-opacity", "class"].includes(k))
      .map(([, k, v]) => `${k}=${v.replace(/\s+/g, " ").trim()}`)
      .sort();
    shapes.push(`${m[1]}|${attrs.join(",")}`);
  }
  shapes.sort();
  return crypto.createHash("sha1").update(shapes.join(" ;; ")).digest("hex").slice(0, 16);
};

const upstream = JSON.parse(fs.readFileSync(FINGERPRINTS, "utf8"));

/**
 * 照合するセット。**Feather / Lucide だけでは足りない** ── アイコンは AI に
 * 生成させたもので、どのセットを再現したかは分からない。2026-08-05 に
 * Heroicons / Bootstrap Icons / Tabler も加えて約 11,500 個と突き合わせた
 * （残り 8 個はどれとも一致しなかった）。**ここに無いセットと一致した場合は
 * 素通りする** ── 「一致なし」は「自前」の証明ではない。
 */
const SETS = ["feather", "lucide", "heroicons", "bootstrap", "tabler"];

const lookup = (fp) => {
  for (const set of SETS) {
    const hit = upstream[set]?.[fp];
    if (hit) return `${set}:${hit}`;
  }
  return null;
};

const actual = {};
for (const file of fs.readdirSync(ICON_DIR).filter((f) => f.endsWith(".svg")).sort()) {
  const src = fs.readFileSync(path.join(ICON_DIR, file), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  actual[file.replace(/\.svg$/, "")] = lookup(fingerprint(src));
}

if (process.argv.includes("--update")) {
  const out = {
    $comment:
      "出荷アイコンの出所。null は「上流セットのどれとも一致しない」。NOTICE の記述はこの表に対応する。更新したら NOTICE も直すこと。",
    upstreamVersions: upstream.versions,
    icons: actual,
  };
  fs.writeFileSync(MANIFEST, `${JSON.stringify(out, null, 2)}\n`, "utf8");
  const matched = Object.values(actual).filter(Boolean).length;
  console.log(`✓ icon-provenance.json を更新しました（${Object.keys(actual).length} 個中 ${matched} 個が上流と一致）。`);
  console.log("  NOTICE の記述も合わせて直してください。");
  process.exit(0);
}

if (!fs.existsSync(MANIFEST)) {
  console.error("✗ scripts/icon-provenance.json がありません。`node scripts/check-icon-provenance.js --update` で作成してください。");
  process.exit(1);
}

/**
 * **TSX に直書きされた SVG も見る。** `src/icon/` だけを見ていると、
 * コンポーネントの中にインラインで描かれたアイコンが射程から外れる。実際
 * `RichTextEditor` は 9 個を内製しており、**うち 4 個（bold / italic /
 * underline / link）が Feather とバイト一致**していた ── ファイル内に埋まって
 * いたので、どのガードにも表記にも引っかからなかった（T78 で解消）。
 *
 * `Spinner` / `ProgressRing` / `VoiceVisualizer` / `Image`（duotone フィルタ）の
 * ように**生成される図形**は上流と一致しないので、ここでは鳴らない。
 */
const inlineHits = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".tsx") && !e.name.includes(".test.")) {
      const src = fs.readFileSync(p, "utf8");
      for (const m of src.matchAll(/<svg[\s\S]*?<\/svg>/g)) {
        const hit = lookup(fingerprint(m[0]));
        if (hit) inlineHits.push([path.relative(root, p).replace(/\\/g, "/"), hit]);
      }
    }
  }
};
walk(path.join(root, "src"));

const expected = JSON.parse(fs.readFileSync(MANIFEST, "utf8")).icons;
const added = [];
const removed = [];
const changed = [];

for (const [name, from] of Object.entries(actual)) {
  if (!(name in expected)) added.push([name, from]);
  else if (expected[name] !== from) changed.push([name, expected[name], from]);
}
for (const name of Object.keys(expected)) if (!(name in actual)) removed.push(name);

const counts = { none: 0 };
for (const set of SETS) counts[set] = 0;
for (const v of Object.values(actual)) {
  if (!v) counts.none += 1;
  else counts[v.split(":")[0]] += 1;
}

const total = SETS.reduce((n, s) => n + Object.keys(upstream[s] ?? {}).length, 0);
console.log("--- check:icons:provenance（出荷アイコンの出所と NOTICE の整合）---\n");
console.log(
  `照合先: ${Object.entries(upstream.versions).map(([k, v]) => `${k} ${v}`).join(" / ")}（合計 ${total} 個）`,
);
console.log(
  `アイコン ${Object.keys(actual).length} 個: ` +
    `${SETS.filter((s) => counts[s]).map((s) => `${s} ${counts[s]}`).join(" / ")} / どのセットとも非一致 ${counts.none}`,
);

if (!added.length && !removed.length && !changed.length && !inlineHits.length) {
  console.log("\n✓ 記録どおりです（TSX 内のインライン SVG にも上流と一致するものはありません）。");
  process.exit(0);
}

if (inlineHits.length) {
  console.error(`\n✗ TSX に直書きされた SVG が上流のアイコンと一致します（${inlineHits.length} 件）:`);
  for (const [file, hit] of inlineHits) console.error(`  - ${file}  →  ${hit}`);
  console.error(
    "\n  `src/icon/` へ出してください。ファイルの中に埋まったままだと、出所の記録にも\n" +
      "  NOTICE にも載らず、誰の目にも触れません。",
  );
}

if (added.length) {
  console.error(`\n✗ 出所が未記録のアイコンが ${added.length} 件:`);
  for (const [n, f] of added) console.error(`  - ${n}  →  ${f ?? "上流のどれとも一致しない"}`);
}
if (changed.length) {
  console.error(`\n✗ 出所が変わったアイコンが ${changed.length} 件:`);
  for (const [n, was, now] of changed) console.error(`  - ${n}  記録: ${was ?? "非一致"}  →  実際: ${now ?? "非一致"}`);
}
if (removed.length) {
  console.error(`\n✗ 記録にあるのに存在しないアイコンが ${removed.length} 件:`);
  for (const n of removed) console.error(`  - ${n}`);
}

console.error(
  "\n  アイコンを足す・変えるときは、**描いた本人の記憶ではなく照合で**出所を確かめること。\n" +
    "  `node scripts/check-icon-provenance.js --update` で記録を更新し、**NOTICE も合わせて直す**。\n" +
    "  上流と一致していれば、その表示が NOTICE に必要になる。",
);
process.exit(1);
