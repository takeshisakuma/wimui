/**
 * check:slop — AI-slop（AI 的な画面）の機械ガード。
 *
 * DESIGN.md「コンポジションガイドライン（AI 的な画面を避ける）」の禁止パターンのうち、
 * 決定的に検出できる部分集合だけを `stories/Patterns/**` に対して機械強制する。
 * 判断依存のルール（1 画面 1 主役・中央揃え多用・実在感など）は DESIGN.md の
 * セルフレビュー／composition-guidelines skill に委ね、ここでは扱わない。
 *
 * 検出（この初回カット＝ユーザー選択の 3 種）:
 *   1. gradient135  — `linear-gradient(... 135deg ...)` のヒーロー背景（ハードゲート、baseline 0）
 *   2. hype         — 誇張形容詞辞書（多言語）を Pattern デモコピー（docs_stories_recipes）で照合
 *                     （ハードゲート、baseline 0）
 *   3. styleOverride — インライン style の既定値上書き（padding/margin/borderRadius = 0）と
 *                     px 直書き（gap:"16px" 等）。**ラチェット方式**（現状値を凍結し増加をブロック）。
 *                     既存 `PX_BASELINE`（check-hardcoded-values.js）と同じ運用。
 *
 * 使い方:
 *   node scripts/check-slop.js            # stories/Patterns 全体を検査（audit:docs / CI）
 *   node scripts/check-slop.js <file...>  # 指定ファイルのみ（lint-staged 用。Patterns 以外は無視）
 *
 * ベースラインを下回ったら STYLE_OVERRIDE_BASELINE を実測値まで下げてコミットすること。
 */
import fs from 'fs';
import { globSync } from 'glob';

// --- ラチェット基準（既定値上書き＋px 直書きの合計）。増やさない・減らしたら更新する。 ---
const STYLE_OVERRIDE_BASELINE = 40;

// --- 誇張形容詞辞書（多言語・SSOT）。DESIGN.md 禁止パターン「誇張形容詞」と同期する。 ---
// 追加時は DESIGN.md の該当行にも反映すること（将来 A+C で JSON へ SSOT 化する候補）。
// 一部は Nutlope/hallmark の references/copy.md・anti-patterns.md から採掘（同ミッションの反 AI-slop skill）。
const HYPE_WORDS = [
  // en（部分一致。派生形 powerfully / seamlessly 等も拾う）
  'seamless', 'powerful', 'effortless', 'cutting-edge', 'next-gen', 'next-generation',
  'revolutionary', 'game-changing', 'state-of-the-art', 'world-class', 'best-in-class',
  'unparalleled', 'lightning-fast', 'blazing-fast', 'supercharge',
  // en（hallmark 由来のマーケ動詞・形容詞）
  'innovative', 'disruptive', 'harness', 'leverage', 'elevate', 'empower',
  'reimagine', 'unleash', 'delight', 'magical',
  // ja（部分一致）
  '圧倒的', '革新的', '次世代', '究極', '最先端',
];

// 誇張フレーズ（定型オープナー）。hallmark references/copy.md「Banned Opening Lines」由来。
const HYPE_PHRASES = [
  "in today's digital landscape",
  'built for the modern team',
  'supercharge your',
  'unleash your',
  'reimagine the way',
  'experience the power of',
  'innovative solutions',
];

// 定型プレースホルダ名（実在感の無いダミー名）。DESIGN.md「連番・アルファベット順のダミー名」＋
// hallmark「Stock placeholder names」由来。※入力欄プレースホルダ（*placeholder* キー）は
// 「氏名フォーマット例」として正当な UX なのでスコープ外。
const PLACEHOLDER_NAMES = [
  'John Doe', 'Jane Doe', 'John Smith', 'Jane Smith', 'Lorem Ipsum', 'Example User', 'Acme',
];

// Pattern デモコピーが実在する locale ファイル（en/ja/pt）。
// ガイド docs（docs_guide_*）はドキュメント散文であり禁止語を正当に引用しうるため対象外。
const HYPE_SCAN_FILES = [
  'public/locales/en/docs_stories_recipes.json',
  'public/locales/ja/docs_stories_recipes.json',
  'public/locales/pt/docs_stories_recipes.json',
];

const argv = process.argv.slice(2);
const explicitFiles = argv.filter((a) => a.endsWith('.tsx') && !a.endsWith('.test.tsx'));
// lint-staged は全 staged tsx を渡すため Patterns 配下のみに絞る。
const patternFiles = (
  explicitFiles.length > 0
    ? explicitFiles.filter((f) => /(^|\/)stories\/Patterns\//.test(f.replace(/\\/g, '/')))
    : globSync('stories/Patterns/**/*.tsx', { posix: true })
).filter((f) => !f.endsWith('.test.tsx') && fs.existsSync(f));

const gradientHits = [];
const styleHits = [];

const GRADIENT_RE = /linear-gradient\s*\([^)]*135deg/i;
// 既定値上書き: padding / margin / borderRadius を 0（数値 or "0"）へリセット。
// 位置指定の top/right/bottom/left: 0 は正当（絶対配置）なので対象外。
const DEFAULT_OVERRIDE_RE = /\b(padding|margin|border[Rr]adius)([A-Z][A-Za-z]*)?\s*:\s*(0|["']0["'])\s*[,}]/;
// px 直書き: 任意プロパティの "<num>px" 文字列（var() 参照行は除外）。
const PX_LITERAL_RE = /\b[a-zA-Z]+\s*:\s*["'][0-9.]+px["']/;

for (const file of patternFiles) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return; // コメント行
    const loc = `${file}:${i + 1}`;
    if (GRADIENT_RE.test(line)) {
      gradientHits.push(`${loc}: ${line.trim().slice(0, 100)}`);
    }
    if (DEFAULT_OVERRIDE_RE.test(line)) {
      styleHits.push(`${loc} [default-override] ${line.trim().slice(0, 80)}`);
    } else if (PX_LITERAL_RE.test(line) && !/var\(/.test(line)) {
      styleHits.push(`${loc} [px-literal] ${line.trim().slice(0, 80)}`);
    }
  });
}

// --- コピースキャン（locale JSON）: hype 語・hype フレーズ・プレースホルダ名 ---
const esc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hypeRe = new RegExp([...HYPE_WORDS, ...HYPE_PHRASES].map(esc).join('|'), 'i');
const nameRe = new RegExp(PLACEHOLDER_NAMES.map(esc).join('|'), 'i');
const isPlaceholderKey = (line) => /"[^"]*placeholder[^"]*"\s*:/i.test(line);

const hypeHits = [];
const nameHits = [];
for (const file of HYPE_SCAN_FILES) {
  if (!fs.existsSync(file)) continue;
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    const hm = line.match(hypeRe);
    if (hm) hypeHits.push(`${file}:${i + 1}: 「${hm[0]}」 ${line.trim().slice(0, 80)}`);
    // 入力欄プレースホルダの氏名例は正当（スコープ外）
    if (!isPlaceholderKey(line)) {
      const nm = line.match(nameRe);
      if (nm) nameHits.push(`${file}:${i + 1}: 「${nm[0]}」 ${line.trim().slice(0, 80)}`);
    }
  });
}

console.log('--- check:slop (DESIGN.md 禁止パターンの機械ガード) ---');
let failed = false;

if (gradientHits.length > 0) {
  console.log(`\n[FAIL] 135deg グラデヒーローは禁止（面はサーフェス階層トークンで切る）:`);
  for (const h of gradientHits) console.log(`  ${h}`);
  failed = true;
}

if (hypeHits.length > 0) {
  console.log(`\n[FAIL] 誇張形容詞・定型フレーズは禁止（具体的な動作・数値で言う。DESIGN.md 禁止パターン参照）:`);
  for (const h of hypeHits) console.log(`  ${h}`);
  failed = true;
}

if (nameHits.length > 0) {
  console.log(`\n[FAIL] 定型プレースホルダ名は禁止（実在感ある多様な名前にする。DESIGN.md 規約13）:`);
  for (const h of nameHits) console.log(`  ${h}`);
  failed = true;
}

console.log(`\nインライン style の既定値上書き＋px 直書き: ${styleHits.length} 件（baseline: ${STYLE_OVERRIDE_BASELINE}）`);
if (styleHits.length > STYLE_OVERRIDE_BASELINE) {
  console.log(`[FAIL] ベースライン超過。既定値の style 上書き（padding/margin/borderRadius: 0）や`);
  console.log(`       px 直書き（gap:"16px" 等）を増やさないこと。余白・サイズは --wim-spacing-* トークンを使う。`);
  const diff = styleHits.length - STYLE_OVERRIDE_BASELINE;
  console.log(`\n超過候補（全 ${styleHits.length} 件中、直近 ${Math.max(diff, 10)} 件）:`);
  for (const h of styleHits.slice(-Math.max(diff, 10))) console.log(`  ${h}`);
  failed = true;
} else if (styleHits.length < STYLE_OVERRIDE_BASELINE) {
  console.log(`ベースラインを ${styleHits.length} に更新できます（scripts/check-slop.js の STYLE_OVERRIDE_BASELINE）。`);
}

if (failed) {
  console.log('\n✗ check:slop failed.');
  process.exit(1);
}
console.log('\n✓ AI-slop の禁止パターンは検出されませんでした。');
