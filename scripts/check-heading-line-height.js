#!/usr/bin/env node
/**
 * Guard: 見出し役の行間は、本文用の比率ではなく見出し用のトークンで決める（T208）。
 *
 * `line-height` は単位なし＝比率なので、宣言が無ければ子孫が自分の font-size に掛ける。
 * `lang.scss` は `body` に `--wim-line-height-normal`（1.4 / ja は 1.6）を配っており、
 * **素の見出しは何もしないと本文の比率のまま**になる ── 実測で `<h1>`（UA 既定 2em＝32px）は
 * 行送り 45px / ja 51px、字の見た目の高さ約 22px の 2 倍以上まで開いていた（T208 の起票）。
 *
 * 直し方は 2 層に分かれ、**どちらの層で解くかは要素で決まる**:
 *
 *   ① 素の `<h1>`〜`<h6>` は `@layer base`（`src/base.scss`）の規則が面倒を見る。
 *      → クラス側は **何も宣言しないのが正しい**。継承はその要素に宣言が無いときだけ
 *        働くので、base の宣言がそのまま効く。
 *      → ただし **クラスが自前で `line-height` を宣言すると base は届かない**
 *        （`component` 層のクラス > `base` 層の要素）。宣言するなら見出し用トークンで。
 *
 *   ② `role="heading"` を載せた `div` / `button` には base の規則が**構造的に届かない**
 *      （セレクタが要素名なので）。→ 自分で見出し用トークンを宣言する義務がある。
 *
 * 検出するもの:
 *   A. 素の `<h1>`〜`<h6>` に付いたクラスが、**本文用トークンやトークン外の値**で
 *      `line-height` を宣言している（base を上書きして間延びを温存する）
 *   B. `role="heading"` の非見出し要素のクラスが、見出し用の `line-height` を持たない
 *      （base が届かないので本文比率のまま残る）
 *   C. `src/base.scss` から素の見出しの規則そのものが消えている（①の土台が抜ける）
 *
 * 見出し用トークンは `Title`（`title.module.scss`）の判断に合わせる ── 欧文 `snug` /
 * 和文 `snug-jp` を既定、`tight` 系はディスプレイ段。素の見出しの UA 既定は h1 の 32px が
 * 最大で `Title` の `.lg`（2rem）と同じ帯なので、`snug` 側が既定になる。
 *
 * **見えない範囲（既知）**: 別コンポーネントが描く見出しへ `className` を渡す書き方
 * （`<Drawer.Title className={styles.title}>` は `Drawer` 側で `<h2>` になる）は、
 * 1 ファイルの走査では要素が分からないので追えていない。現状こういう外側のクラスは
 * どれも `line-height` を宣言しておらず実害は無いが、**このガードが緑でも
 * その経路は保証していない**。追うならコンポーネント間の解決が要る。
 *
 * 引数は取らず常に全量を読む（lint-staged からファイル名を渡されても無視する）。
 * ── 部分集合だけを見るガードは、全体を突き合わせる種類だと常に素通りする（T164 / 型 2）。
 *
 * Usage: node scripts/check-heading-line-height.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const COMPONENTS = path.join(root, "src", "components");
const BASE_SCSS = path.join(root, "src", "base.scss");

/** 見出し役として許す `line-height` の値。`Title` の語彙と揃える。 */
const HEADING_TOKENS = new Set([
  "var(--wim-line-height-snug)",
  "var(--wim-line-height-snug-jp)",
  "var(--wim-line-height-tight)",
  "var(--wim-line-height-tight-jp)",
]);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

/**
 * SCSS から「クラス名 `cls` で始まる最上位ブロック」を波括弧の釣り合いで切り出し、
 * その中の `line-height` 宣言を返す。ネスト（`&:hover` / `[lang="ja"]`）の中も拾う。
 */
function lineHeightsFor(scssPath, cls) {
  if (!fs.existsSync(scssPath)) return null;
  const lines = fs.readFileSync(scssPath, "utf8").split(/\r?\n/);
  const needle = "." + cls;
  const found = [];
  for (let i = 0; i < lines.length; i++) {
    const at = lines[i].indexOf(needle);
    if (at < 0) continue;
    // 前後が識別子文字なら別のクラス（`.title` に対する `.titleRow` / `.subtitle`）
    const before = at > 0 ? lines[i][at - 1] : " ";
    if (/[A-Za-z0-9_-]/.test(before)) continue;
    const after = lines[i][at + needle.length];
    if (after !== undefined && /[A-Za-z0-9_-]/.test(after)) continue;

    let depth = 0;
    let started = false;
    let j = i;
    for (; j < lines.length; j++) {
      const cur = lines[j];
      if (cur.includes("line-height:") && started) {
        found.push({
          line: j + 1,
          value: cur.split("line-height:")[1].split(";")[0].trim(),
        });
      }
      for (const ch of cur) {
        if (ch === "{") {
          depth++;
          started = true;
        } else if (ch === "}") depth--;
      }
      if (started && depth <= 0) break;
    }
    if (started) i = j;
  }
  return found;
}

/**
 * TSX の中で「素の見出しになる動的タグ」の名前を集める。
 *
 * 2026-08-18 の調査で**このガード自身の穴**として出た経路 ── `Dashboard` は
 * `const Heading = \`h${titleLevel}\`` を作って `<Heading className={styles.widgetTitle}>`
 * と書く。DOM に出るのは素の `h2`〜`h6` なので `@layer base` の規則の対象だが、
 * ソース上は `<h2>` という文字列がどこにも無いため、素朴な `<h[1-6]>` 走査では見えない。
 * 実際 `.widgetTitle` に本文用トークンを入れても exit 0 のまま素通りした。
 */
function dynamicHeadingTags(src) {
  const names = new Set();
  // const Heading = `h${level}` as "h2" | …
  const re = /const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*`h\$\{/g;
  let m;
  while ((m = re.exec(src)) !== null) names.add(m[1]);
  return names;
}

/** `className={styles.foo}` / `classNames(styles.foo, …)` から最初の styles.X を取る。 */
function classFromTag(tagText) {
  const m = tagText.match(/styles\.([A-Za-z][A-Za-z0-9_]*)/);
  return m ? m[1] : null;
}

function scssSiblingFor(tsxPath) {
  const dir = path.dirname(tsxPath);
  const candidates = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".module.scss"))
    .map((f) => path.join(dir, f));
  return candidates[0] || null;
}

function main() {
  const violations = [];
  let headingElements = 0;
  let roleHeadings = 0;

  // --- C: base 層の土台が残っているか ------------------------------------
  const baseSrc = fs.existsSync(BASE_SCSS) ? fs.readFileSync(BASE_SCSS, "utf8") : "";
  const hasBareRule =
    /h1,\s*\n?\s*h2,\s*\n?\s*h3,\s*\n?\s*h4,\s*\n?\s*h5,\s*\n?\s*h6\s*\{[^}]*line-height:\s*var\(--wim-line-height-(snug|tight)\)/m.test(
      baseSrc,
    );
  const hasJaRule =
    /\[lang="ja"\][\s\S]{0,400}line-height:\s*var\(--wim-line-height-(snug|tight)-jp\)/m.test(
      baseSrc,
    );
  if (!hasBareRule) {
    violations.push({
      rel: "src/base.scss",
      line: 0,
      why: "素の `h1`〜`h6` の行間規則が無い（宣言の無い見出しクラスが全部本文比率に戻る）",
      text: "@layer base の h1〜h6 { line-height: var(--wim-line-height-snug) } が見つからない",
    });
  }
  if (!hasJaRule) {
    violations.push({
      rel: "src/base.scss",
      line: 0,
      why: "素の見出しの和文用の行間規則が無い（ja だけ本文比率 1.6 のまま残る）",
      text: '[lang="ja"] の h1〜h6 { line-height: var(--wim-line-height-snug-jp) } が見つからない',
    });
  }

  // --- A / B: コンポーネントの見出し役 ------------------------------------
  const tsxFiles = walk(COMPONENTS).filter(
    (f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx"),
  );

  for (const tsx of tsxFiles) {
    const src = fs.readFileSync(tsx, "utf8");
    const rel = path.relative(root, tsx).replace(/\\/g, "/");
    const scss = scssSiblingFor(tsx);
    const scssRel = scss ? path.relative(root, scss).replace(/\\/g, "/") : "(なし)";
    const lines = src.split(/\r?\n/);
    const dynTags = dynamicHeadingTags(src);
    const dynRe = dynTags.size
      ? new RegExp(`<(${[...dynTags].join("|")})[\\s>]`)
      : null;

    lines.forEach((line, idx) => {
      // A: 素の <h1>〜<h6>。動的タグ（`const H = \`h${n}\``）と
      //    `Title` 系に `tag="hN"` / `as="hN"` を渡す書き方も同じ扱いにする
      //    ── どれも DOM に出るのは素の見出しなので base の規則の対象。
      const headingMatch =
        line.match(/<h[1-6](\s[^>]*)?>/) ||
        (dynRe && dynRe.test(line)) ||
        /\b(tag|as)=["']h[1-6]["']/.test(line);
      if (headingMatch) {
        headingElements++;
        const cls = classFromTag(line);
        if (cls && scss) {
          const decls = lineHeightsFor(scss, cls);
          for (const d of decls || []) {
            if (!HEADING_TOKENS.has(d.value)) {
              violations.push({
                rel: `${scssRel}:${d.line}`,
                line: d.line,
                why: `素の見出しに付く \`.${cls}\` が見出し用でない行間を宣言している（\`@layer base\` の規則が届かなくなる）`,
                text: `line-height: ${d.value};   ← ${rel}:${idx + 1} の <h*> に付く`,
              });
            }
          }
        }
      }

      // B: role="heading" の非見出し要素
      if (line.includes('role="heading"')) {
        roleHeadings++;
        // 同じ行か直前の行にタグ名とクラスがある想定で、前後 2 行を見る
        const ctx = lines.slice(Math.max(0, idx - 2), idx + 3).join("\n");
        if (/<h[1-6][\s>]/.test(ctx)) return; // 素の見出しなら A で見る
        const cls = classFromTag(ctx);
        if (!cls || !scss) return;
        const decls = lineHeightsFor(scss, cls) || [];
        const ok = decls.some((d) => HEADING_TOKENS.has(d.value));
        if (!ok) {
          violations.push({
            rel: `${scssRel}`,
            line: idx + 1,
            why: `\`role="heading"\` だが要素が見出しではないため \`@layer base\` の規則が届かない。\`.${cls}\` が見出し用の行間を宣言していない`,
            text: `${rel}:${idx + 1}  role="heading" / .${cls}`,
          });
        }
      }
    });
  }

  if (violations.length) {
    console.error("✗ heading-line-height: 見出し役の行間が本文比率のまま:");
    for (const v of violations) {
      console.error(`  - ${v.rel}  ${v.why}`);
      console.error(`      ${v.text}`);
    }
    console.error(
      "\n  見出し役の `line-height` は `Title` の語彙に揃える:\n" +
        "    欧文 var(--wim-line-height-snug) / 和文 var(--wim-line-height-snug-jp)\n" +
        "    ディスプレイ段のみ var(--wim-line-height-tight) / -tight-jp\n" +
        "  素の <h1>〜<h6> なら、**クラス側で宣言しない**のがいちばん安い（base が面倒を見る）。\n" +
        "  `role=\"heading\"` を div/button に載せている場合だけ、自分で宣言する義務がある。",
    );
    process.exit(1);
  }

  console.log(
    `✓ heading-line-height OK (素の見出し ${headingElements} 箇所、role="heading" ${roleHeadings} 箇所、base の土台あり)。`,
  );
}

main();
