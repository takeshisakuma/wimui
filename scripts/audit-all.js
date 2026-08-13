/**
 * Comprehensive Audit Script for WIM UI.
 *
 * Checks are tagged `lib` or `docs`:
 *   - lib  : structural guards on the shipped library surface (public API,
 *            tokens, intent vocabulary, SCSS integrity, asChild, root hooks).
 *            These gate library work and must stay green to add components.
 *   - docs : the Storybook/MDX site and its 3-language documentation copy
 *            (MDX structure, doc-key i18n consistency, hardcoded-text linting).
 *            These police the documentation, not the library's behaviour.
 *
 * Usage:
 *   node scripts/audit-all.js            # everything (audit:all)
 *   node scripts/audit-all.js --lib      # library structural guards only (audit:lib)
 *   node scripts/audit-all.js --docs     # documentation/i18n checks only (audit:docs)
 */

import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const checks = [
  // --- docs: Storybook/MDX site + 3-language documentation copy ---
  {
    category: "docs",
    name: "MDX Structure and Placeholders",
    command: "node scripts/audit-mdx.js",
  },
  {
    category: "docs",
    name: "Choice matrix (guidance that does not guide)",
    command: "node scripts/check-choice-matrix.js",
  },
  {
    category: "docs",
    name: "Docs vs implementation drift",
    command: "node scripts/check-doc-drift.js",
  },
  {
    category: "docs",
    name: "I18n Consistency and File Size",
    command: "node scripts/check-i18n.js",
  },
  {
    category: "docs",
    name: "MDX Hardcoded Text Detection",
    command: "node scripts/check-mdx-hardcoded.js",
  },
  {
    category: "docs",
    // T154（2026-08-12）: このガードは **CI で一度も走っていなかった**。
    // `package.json` の `check:links` はあるが `audit:docs` が呼ばず、
    // 実際に走るのは lint-staged の `**/*.mdx` 経由だけだった。
    // その結果、MDX を触らずに `<Meta title>` だけ変えた変更や、
    // 翻訳 JSON の中のリンク（lint-staged の locales ブロックは
    // このガードを呼ばない）は誰にも見られず、12 か所が死んでいた。
    name: "MDX link format and reachability",
    command: "node scripts/check-mdx-links.js",
  },
  {
    category: "docs",
    name: "Storybook Hierarchy Depth",
    command: "node scripts/check_hierarchy.js",
  },
  {
    category: "docs",
    name: "Hardcoded UI Text in Stories (i18n)",
    command: "node scripts/check-stories-hardcoded.js --all",
  },
  {
    category: "docs",
    name: "i18n-ignore ratchet (stories escape hatch)",
    command: "node scripts/check-i18n-ignore.js",
  },
  {
    category: "docs",
    name: "Story/docs translation key references",
    command: "node scripts/check_stories_keys.js",
  },
  {
    category: "docs",
    name: "Peer import paths (root barrel must not pull optional peers)",
    command: "node scripts/check-imports.js",
  },
  {
    category: "docs",
    name: "IMPROVEMENTS.md status column matches the body",
    command: "node scripts/check-improvements-status.js",
  },
  {
    category: "docs",
    name: "Story/sandbox/docs token references resolve",
    command: "node scripts/check-story-tokens.js",
  },
  {
    category: "docs",
    // README は npm のパッケージページにそのまま出る。peer 範囲や import 経路が
    // package.json とずれていると、利用者は install 前に間違った情報を読む（T37）。
    name: "README claims match package.json (peers / export paths)",
    command: "node scripts/check-readme-claims.js",
  },
  {
    category: "docs",
    // 上が README の「表」の主張を見るのに対し、こちらは**コード例そのもの**を
    // コンパイルする（T37 の残り）。llms.txt のレシピは generate-llms.js の中に
    // 手書きで存在し、「実 API に対して検証済み」とコメントされているだけだった。
    name: "README / llms.txt code examples compile",
    command: "node scripts/check-code-examples.js",
  },
  {
    category: "docs",
    // 「Open in StackBlitz」が install するバージョン。手書きだった頃は `^0.3.0` の
    // まま 7 リリース放置され、プレビューと sandbox が別のライブラリになっていた。
    name: "StackBlitz scaffold pins the published version",
    command: "node scripts/check-sandbox-pin.js",
  },
  {
    category: "docs",
    // 合成ルールは DESIGN.md / llms.txt / judge-slop の 3 箇所で使われる。
    // 手で同期していた頃は既にドリフトしていた（T39）。
    name: "Composition rules single source (DESIGN.md / llms.txt / judge-slop)",
    command: "node scripts/check-composition-rules.js",
  },
  {
    category: "docs",
    name: "AI-slop composition guard (Patterns anti-pattern gates)",
    command: "node scripts/check-slop.js",
  },
  {
    category: "docs",
    // public/ のコミット済みコピーが GitHub Pages で配信され、docs が AI エージェントに
    // 案内している URL の中身になる。ビルド結果をコミットし忘れると版落ちしたまま残る。
    name: "llms.txt freshness (committed copy matches source)",
    command: "node scripts/generate-llms.js --check",
  },
  {
    category: "docs",
    // 別名は「他所の語彙で探した人を実装名へ導く」ためのものなので、
    // 間違えると**別のコンポーネントへ誘導する**（T46）。既存名との衝突・
    // 全体での重複を禁じる。全量を見る必要があるため引数は取らない。
    name: "External vocabulary aliases (no collisions or duplicates)",
    command: "node scripts/check-aliases.js",
  },
  {
    category: "lib",
    // 単体では正しいトークンが、組み合わせたときだけ不可視になる事故を防ぐ。
    // axe も VRT も捕まえられない種類（T34）。
    name: "Contrast / fill visibility (intent × variant × surface)",
    command: "node scripts/check-contrast.js",
  },
  {
    category: "lib",
    // ある軸の語彙が別の軸の prop に漏れていないか（T114）。
    // **9 件あった検出が 0 になったので配線した**（T118 / T119 まで片付いた 2026-08-10）。
    // 「同じ prop 名で値の集合が違う」ではなく「軸の混線」を見る ── 前者は
    // 73 種類中 16 種類が割れており、その大半は割れているのが正しい。
    name: "Prop values stay on their own axis (intent vs variant vs CSS)",
    command: "node scripts/check-prop-vocabulary.js",
  },
  {
    category: "lib",
    // 色を当てる経路は 2 つ（mappedColors のクラス / getColorValue）あり、
    // **どちらでも解決されない値はそのまま CSS へ渡って宣言ごと破棄される**。
    // 型は WimColor（補完付きの任意文字列）なので通り、VRT はその絵を正として
    // 撮るため、色が付いていないことに誰も気づかない（T118）。
    name: "Color literals actually resolve to a colour",
    command: "node scripts/check-color-values.js",
  },
  {
    category: "lib",
    // .module.scss が書き出していない名前を参照すると undefined になり、
    // classNames が黙って落とす。型も lint も鳴らず、VRT は装いが当たっていない
    // 絵を正として撮る（T121）。クラス名は自分で SCSS を読まず Vite に聞く。
    name: "CSS Modules class references actually resolve",
    command: "node scripts/check-class-references.js",
  },
  {
    category: "lib",
    // 上の check-contrast.js が見るのは intents SSOT の 4 ロールだけで、
    // **`semantic.json` の `*-subtle` 群は誰も測っていなかった**（T102）。
    // しかも下限だけでは足りない: 一律アルファは hue ごとに効きが違うため、
    // 片方が消えかけ・片方が濃すぎという**両側の**ずれを生む。
    name: "Subtle fill tokens stay visible, consistent, and off the border",
    command: "node scripts/check-subtle-tokens.js",
  },
  {
    category: "lib",
    // 上が「宣言された組み合わせ」を見るのに対し、こちらは **SCSS に実際に
    // 書かれた color / background の対**を解いて比を出す（T41 案②）。
    // 宣言が正しくても実装が SSOT を迂回していれば、上は緑のまま通る。
    name: "Contrast resolved from the SCSS that actually ships",
    command: "node scripts/check-contrast-scss.js",
  },
  {
    category: "lib",
    // 型が受け付けるのに CSS が無い prop 値＝「書いても効かない prop」。
    // 呼び出し側が style へ逃げる原因になる（T33）。
    name: "Prop values without a CSS class",
    command: "node scripts/check-prop-classes.js",
  },
  // --- lib: structural guards on the shipped library surface ---
  {
    category: "lib",
    name: "Polymorphic asChild Compliance",
    command: "node scripts/check-aschild.js",
  },
  {
    category: "lib",
    name: "Hardcoded Values (colors / px ratchet)",
    command: "node scripts/check-hardcoded-values.js",
  },
  {
    category: "lib",
    name: "Public API Surface (npm freeze guard)",
    command: "node scripts/check-public-api.js",
  },
  {
    category: "lib",
    // 上は**変化**しか見ないので、**最初から載っていない部品は永久に緑**になる。
    // `ArtifactsOverlay` は components.json / MDX / Hierarchy.mdx / ストーリーに
    // ありながら、どのバレルからも export されていなかった（0.22.0 の
    // dist/ai.d.ts に名前が無い＝利用者は import できない）。
    name: "Documented components reach a public barrel (docs claim vs npm surface)",
    command: "node scripts/check-documented-exports.js",
  },
  {
    category: "lib",
    // 上は「exports マップ + シンボル名」しか見ないので、**prop の型が狭まっても
    // 任意が必須になっても無風で通る**（T38 で実測）。こちらは prop シグネチャを
    // 凍結し、差分を破壊/加算に分類して**破壊だけで落とす**（T54）。
    name: "Prop signatures (breaking changes the symbol guard cannot see)",
    command: "node scripts/check-prop-api.js",
  },
  {
    category: "lib",
    name: "Root override hooks (wim-<name> stability)",
    command: "node scripts/check-root-hooks.js",
  },
  {
    category: "lib",
    name: "Chart palette (series colours must be tellable apart)",
    command: "node scripts/check-chart-palette.js",
  },
  {
    category: "lib",
    name: "Design token surface (theming freeze guard)",
    command: "node scripts/check-tokens.js",
  },
  {
    category: "lib",
    name: "Token TS types vs SCSS :root",
    command: "node scripts/check-token-types.js",
  },
  {
    category: "lib",
    name: "Intent vocabulary (generated intent .ts/.scss up to date)",
    command: "node scripts/generate-intents.js --check",
  },
  {
    category: "lib",
    name: "SCSS color-token reference integrity",
    command: "node scripts/check-scss-token-refs.js",
  },
  {
    category: "lib",
    // 線幅が揃っていても塗りが混ざれば重さは揃わない。契約は RULES.md
    // 「SVG の描き方」に数値で書いてあり、既知の逸脱はファイル名で列挙している（T77）。
    name: "Icon family contract (line-art, 24×24, stroke 2)",
    command: "node scripts/check-icons.js",
  },
  {
    category: "lib",
    // 「自分で描いたつもり」は出所の証拠にならない。中身を上流と突き合わせる
    // 以外に検出手段が無いので、NOTICE の正しさを機械に見張らせる（T80）。
    name: "Icon provenance (shipped icons vs Feather / Lucide, keeps NOTICE honest)",
    command: "node scripts/check-icon-provenance.js",
  },
  {
    category: "lib",
    name: "Intent → SCSS class coverage (no silently-unstyled intents)",
    command: "node scripts/check-intents-scss.js",
  },
  {
    category: "lib",
    // 型は「キーの間違い」を守るが、**t() を呼ばない生文字列**は誰の網にも
    // かからない。stories 用のガードは stories しか見ず、check-i18n-components は
    // 意図的に src を走査しない（T40）。
    name: "Raw UI strings in src (i18n ratchet)",
    command: "node scripts/check-src-hardcoded.js",
  },
  {
    // category が無いと `--lib` / `--docs` のどちらにも入らない。lint.yml は
    // `audit:lib` と `audit:docs` しか呼ばないので、**このガードは CI で一度も
    // 走っていなかった**（T92 の「対象なのに起動しない」と同じ形が、ワークフローの
    // paths ではなく検査の一覧側に出たもの）。
    category: "lib",
    name: "External story assets (VRT must not depend on the network)",
    command: "node scripts/check-external-assets.js",
  },
  {
    category: "lib",
    // VRT / a11y は `paths` フィルタを持つため、フィルタが漏れると「対象なのに
    // 1 本も起動しない」形で壊れる。**2 ファイル × 2 トリガー = 4 箇所が独立に
    // 腐る**うえ、壊れた瞬間は何も起きず、次の無関係な PR が落ちて初めて分かる。
    // 同じ形で 3 度再発している（#185 / #219 / #250・#272）ので機械に見張らせる（T92）。
    name: "VRT / a11y trigger paths (the run that never starts)",
    command: "node scripts/check-ci-paths.js",
  },
  {
    category: "lib",
    name: "Shrinkable roots (width:100% + min-width:0 collapse in a flex row)",
    command: "node scripts/check-shrinkable-roots.js",
  },
  {
    category: "lib",
    // T125（2026-08-12）: `check:shrinkable` は**逆向き**の事故（`width: 100%` ＋
    // `min-width: 0` で 1 文字幅まで潰れる）を見るもので、**伸びる側は誰も
    // 見ていなかった**。`FieldTemplate` の flex アイテムでは `display: inline-*`
    // が blockify されて捨てられ、書いた意図と逆に親いっぱいへ伸びる。
    name: "Field roots declare their width (no silent stretch)",
    command: "node scripts/check-field-roots.js",
  },
  {
    category: "lib",
    name: "Monospace contract (token + descendant inheritance, always paired)",
    command: "node scripts/check-mono-family.js",
  },
];

const wantLib = process.argv.includes("--lib");
const wantDocs = process.argv.includes("--docs");
// No filter flag → run everything.
const filter = wantLib === wantDocs ? null : wantLib ? "lib" : "docs";
const selected = filter ? checks.filter((c) => c.category === filter) : checks;

const scope = filter ? filter.toUpperCase() : "FULL";
let failed = false;

console.log(`=== WIM UI Audit (${scope}) ===\n`);

for (const check of selected) {
  console.log(`Running: ${check.name}...`);
  try {
    execSync(check.command, { stdio: "inherit", cwd: path.join(__dirname, "..") });
    console.log(`✓ ${check.name} passed.\n`);
  } catch (error) {
    console.error(`✗ ${check.name} failed.\n`);
    failed = true;
  }
}

if (failed) {
  console.error(`=== Audit FAILED (${scope}) ===`);
  console.error("Please resolve the issues above before proceeding.");
  process.exit(1);
} else {
  console.log(`=== Audit PASSED (${scope}) ===`);
  if (filter === "lib") console.log("Library structural guards are green.");
  else if (filter === "docs") console.log("Documentation and i18n checks are green.");
  else console.log("All systems go! You are ready to add new components.");
}
