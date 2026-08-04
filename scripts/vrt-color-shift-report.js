/**
 * vrt:report — ベースラインを撮り直したときに「何が変わったのか」を人が見ずに確定
 * しないための順位表（T69）。
 *
 * **なぜ平均色シフトなのか。** 2026-07-30 に 226 枚を仕分けたとき、位置による分類も
 * 履歴による帰属も決め手にならず、効いたのは**差分領域の平均色の移動量**だった。
 * フォントのにじみは**同じ前景色と背景色の間で画素が入れ替わるだけ**なので平均色が
 * ほとんど動かない。逆に塗りや文字色が変わったものは大きく動く。実測での境界は
 * シフト 41〜69 のあたりで、再現時（このスクリプト）も順位 61 が 46.3、順位 121 が
 * 23.7 と、当時の仕分け（61 は実変更・121 はフォント差）と同じ並びになった。
 *
 * **平均色シフトだけでは足りない（T67 で判明）。** 書体そのものが変わると、画素は
 * やはり同じ前景色と背景色の間で入れ替わるので**平均色は動かない**のに、これは
 * まぎれもない実変更である。実例: `token-presets--overview` はシフト 0 なのに
 * 差分画素が約 7 万（画像の数十 %）あった。**そこで面積を第 2 軸に置く** ──
 * 「色は動いていないのに広い」は、にじみではなく描かれ方が変わった印。
 *
 * 分類（`shift` = 差分画素の平均色移動量、`area` = 差分画素の割合）:
 *   reflow  … 寸法が変わった。レイアウトが動いているので必ず実変更
 *   repaint … shift >= 41。塗り・文字色が動いた
 *   glyph   … shift < 41 かつ area >= 1%。色は動かず広い＝書体や描かれ方の変化
 *   noise   … 残り。フォントのにじみ・アンチエイリアスの揺れ
 *
 * 使い方:
 *   node scripts/vrt-color-shift-report.js                    # HEAD ↔ 作業ツリー
 *   node scripts/vrt-color-shift-report.js --base <rev> --head <rev>
 *   node scripts/vrt-color-shift-report.js --markdown         # ジョブサマリ用
 *   node scripts/vrt-color-shift-report.js --limit 40
 *
 * `sharp` を使うのは、宣言済みの devDependency で、`@img/sharp-linux-x64` の
 * prebuilt がロックファイルにあるため CI の `npm ci --ignore-scripts` でも動くから。
 * `pngjs` は transitive にしか無く、依存の更新で黙って消えうるので採らない。
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SNAPSHOT_GLOB = "vrt/**/*.png";

/** shift がこれ以上なら「塗り・文字色が動いた」。2026-07-30 の仕分けの実測値。 */
const REPAINT_SHIFT = 41;
/** shift が小さくても、差分がこれだけ広ければ書体・描かれ方の変化を疑う。 */
const GLYPH_AREA_PERCENT = 1;

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const value = (name, fallback) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};

const base = value("--base", "HEAD");
const head = value("--head", null); // null = 作業ツリー
const asMarkdown = flag("--markdown");
const limit = Number(value("--limit", "0")) || 0;

const git = (args, encoding = "utf8") =>
  execFileSync("git", args, { encoding, maxBuffer: 256 * 1024 * 1024 });

function changedFiles() {
  const args = head
    ? ["diff", "--name-only", base, head, "--", SNAPSHOT_GLOB]
    : ["diff", "--name-only", base, "--", SNAPSHOT_GLOB];
  return git(args).split("\n").filter(Boolean);
}

/** head 側が作業ツリーのときはファイルから、リビジョン指定なら git から読む。 */
function readSide(rev, file) {
  if (rev === null) return fs.existsSync(file) ? fs.readFileSync(file) : null;
  try {
    return git(["show", `${rev}:${file}`], "buffer");
  } catch {
    return null; // 追加・削除された画像
  }
}

async function raw(buffer) {
  return sharp(buffer).raw().toBuffer({ resolveWithObject: true });
}

async function measure(file) {
  const [aBuf, bBuf] = [readSide(base, file), readSide(head, file)];
  const name = path.basename(file).replace("-chromium-linux.png", "");
  if (!aBuf) return { name, kind: "added", shift: Infinity, area: 100 };
  if (!bBuf) return { name, kind: "removed", shift: Infinity, area: 100 };

  const [a, b] = await Promise.all([raw(aBuf), raw(bBuf)]);
  if (a.info.width !== b.info.width || a.info.height !== b.info.height) {
    return { name, kind: "reflow", shift: Infinity, area: 100 };
  }

  const ch = a.info.channels;
  let n = 0;
  let sr = 0;
  let sg = 0;
  let sb = 0;
  for (let i = 0; i < a.data.length; i += ch) {
    const dr = b.data[i] - a.data[i];
    const dg = b.data[i + 1] - a.data[i + 1];
    const db = b.data[i + 2] - a.data[i + 2];
    if (dr || dg || db) {
      n += 1;
      sr += dr;
      sg += dg;
      sb += db;
    }
  }
  const total = a.info.width * a.info.height;
  const shift = n
    ? Math.sqrt((sr / n) ** 2 + (sg / n) ** 2 + (sb / n) ** 2)
    : 0;
  const area = (100 * n) / total;
  const kind =
    shift >= REPAINT_SHIFT
      ? "repaint"
      : area >= GLYPH_AREA_PERCENT
        ? "glyph"
        : "noise";
  return { name, kind, shift, area };
}

const files = changedFiles();
if (files.length === 0) {
  console.log("VRT snapshots: 差分なし。");
  process.exit(0);
}

const rows = [];
for (const f of files) rows.push(await measure(f));

/** reflow / added / removed を先頭に、その後は shift 降順、同点は面積降順。 */
const rank = { reflow: 0, added: 0, removed: 0 };
rows.sort(
  (x, y) =>
    (rank[x.kind] ?? 1) - (rank[y.kind] ?? 1) ||
    y.shift - x.shift ||
    y.area - x.area,
);

const counts = rows.reduce((acc, r) => {
  acc[r.kind] = (acc[r.kind] ?? 0) + 1;
  return acc;
}, {});
const shown = limit > 0 ? rows.slice(0, limit) : rows;
const num = (v) => (Number.isFinite(v) ? v.toFixed(1) : "—");

if (asMarkdown) {
  console.log(`### VRT baseline changes — ${rows.length} image(s)\n`);
  console.log(
    Object.entries(counts)
      .map(([k, v]) => `**${k}** ${v}`)
      .join(" · "),
  );
  console.log(
    "\n`repaint` and `reflow` are real changes. `glyph` means the colours did not move but a wide area did — a typeface or rendering change, which the colour metric alone cannot see. `noise` is anti-aliasing.\n",
  );
  console.log("| # | kind | colour shift | area | snapshot |");
  console.log("|--:|---|--:|--:|---|");
  shown.forEach((r, i) =>
    console.log(
      `| ${i + 1} | ${r.kind} | ${num(r.shift)} | ${r.area.toFixed(2)}% | \`${r.name}\` |`,
    ),
  );
  if (shown.length < rows.length) {
    console.log(`\n_… ${rows.length - shown.length} more, all ranked lower._`);
  }
} else {
  console.log(`--- vrt:report (${rows.length} 枚) ---\n`);
  console.log(
    Object.entries(counts)
      .map(([k, v]) => `${k} ${v}`)
      .join(" / "),
  );
  console.log();
  shown.forEach((r, i) =>
    console.log(
      String(i + 1).padStart(4),
      r.kind.padEnd(8),
      num(r.shift).padStart(7),
      `${r.area.toFixed(2)}%`.padStart(8),
      r.name,
    ),
  );
  if (shown.length < rows.length) {
    console.log(`\n… 残り ${rows.length - shown.length} 枚は下位。`);
  }
}
