/**
 * check:slop — AI-slop（AI 的な画面）の機械ガード。
 *
 * DESIGN.md「コンポジションガイドライン（AI 的な画面を避ける）」の禁止パターンのうち、
 * 決定的に検出できる部分集合だけを、合成画面を書く 3 か所に対して機械強制する:
 *   - `stories/Patterns/**`  Pattern デモ
 *   - `sandbox/**`           Playground のギャラリーと StackBlitz へ出るレシピ
 *   - `docs/*.mdx` の <style> ドキュメントページ自身のレイアウト CSS
 * 判断依存のルール（1 画面 1 主役・中央揃え多用・実在感など）は DESIGN.md の
 * セルフレビュー／composition-guidelines skill に委ね、ここでは扱わない。
 *
 * 検出（この初回カット＝ユーザー選択の 3 種）:
 *   1. gradient135  — `linear-gradient(... 135deg ...)` のヒーロー背景（ハードゲート、baseline 0）
 *   2. hype         — 誇張形容詞辞書（多言語）を Pattern デモコピー（docs_stories_recipes）で照合
 *                     （ハードゲート、baseline 0）
 *   3. propBacked   — prop があるのに style で書いている（ルール 3 の本体。ハードゲート、baseline 0）
 *   4. styleOverride — インライン style の既定値上書き（padding/margin/borderRadius = 0）と
 *                     px 直書き（gap:"16px" 等）。**ラチェット方式**（現状値を凍結し増加をブロック）。
 *                     既存 `PX_BASELINE`（check-hardcoded-values.js）と同じ運用。
 *                     MDX の <style> ブロックは CSS 宣言（`padding: 24px;`）として同じ 2 種を見る。
 *
 * 使い方:
 *   node scripts/check-slop.js            # 対象全体を検査（audit:docs / CI）
 *   node scripts/check-slop.js <file...>  # 指定ファイルのみ（lint-staged 用。対象外のパスは無視）
 *
 * ベースラインを下回ったら STYLE_OVERRIDE_BASELINE を実測値まで下げてコミットすること。
 */
import fs from 'fs';
import { globSync } from 'glob';

// --- ラチェット基準（既定値上書き＋px 直書きの合計）。増やさない・減らしたら更新する。 ---
// 2026-07-26 の実測 108 件で凍結（docs 66 / stories/Patterns 40 / sandbox 2）。
// docs の 66 件は Configure / Colors / AppLayout など既存ページの負債で、この
// スコープ拡張で初めて可視化されたもの。減らしたらこの値を下げること。
const STYLE_OVERRIDE_BASELINE = 108;

// --- 辞書は単一ソース（SSOT）から読む。同じ JSON を generate-llms.js も読み、llms.txt に反映する。 ---
// 辞書を増やすときは scripts/slop-dictionary.json だけを編集し、`npm run llms:build` で llms.txt を再生成する。
// HYPE_WORDS: 誇張形容詞（部分一致。派生形 powerfully / seamlessly 等も拾う。ja は部分一致）
// HYPE_PHRASES: 誇張フレーズ（定型オープナー）
// PLACEHOLDER_NAMES: 定型ダミー名（※入力欄 placeholder の氏名フォーマット例は正当な UX なのでスコープ外）
const DICT = JSON.parse(fs.readFileSync(new URL('./slop-dictionary.json', import.meta.url), 'utf8'));
const HYPE_WORDS = DICT.hypeWords;
const HYPE_PHRASES = DICT.hypePhrases;
const PLACEHOLDER_NAMES = DICT.placeholderNames;

// Pattern デモコピーが実在する locale ファイル（en/ja/pt）。
// ガイド docs（docs_guide_*）はドキュメント散文であり禁止語を正当に引用しうるため対象外。
const HYPE_SCAN_FILES = [
  'public/locales/en/docs_stories_recipes.json',
  'public/locales/ja/docs_stories_recipes.json',
  'public/locales/pt/docs_stories_recipes.json',
];

// 対象は常に全量。lint-staged は staged ファイルだけを渡してくるが、それで絞ると
// styleHits の合計がベースラインを必ず下回り、ラチェットが素通りしてしまう
// （合計を凍結する方式なので、部分集合と全体の基準を比べても意味がない）。
// 走査対象は数百ファイル程度なので、毎回全量で数える。引数は互換のため無視する。
const TSX_GLOBS = ['stories/Patterns/**/*.tsx', 'sandbox/**/*.tsx'];
const MDX_GLOBS = ['docs/*.mdx'];

const composedFiles = TSX_GLOBS.flatMap((g) => globSync(g, { posix: true })).filter(
  (f) => !f.endsWith('.test.tsx') && fs.existsSync(f),
);
const mdxFiles = MDX_GLOBS.flatMap((g) => globSync(g, { posix: true })).filter((f) => fs.existsSync(f));

const gradientHits = [];
const styleHits = [];
const propBackedHits = [];

/**
 * prop があるのに style で書いている箇所。DESIGN.md 必須ルール 3 の本体だが、
 * styleOverride（px 直書き＋0 リセット）はこれを取りこぼす: `padding:
 * "var(--wim-spacing-3xl)"` はトークンを使っているので px 直書きに当たらず、
 * 0 リセットでもないため、どちらの網にもかからない。実際 2026-07-26 の監査で
 * 消した 31 件の style 宣言のうち、styleOverride が数えていたのは 1 件だけだった。
 *
 * 値がトークンかどうかに関係なく「その prop が存在するコンポーネントで
 * インライン指定している」ことを見る。誤検出を避けるため、prop との対応が
 * 明確なものだけを対象にする（例: borderColor は Card に対応する prop が無く、
 * 強調の意味付けに使う正当なケースがあるので対象外）。
 */
const PROP_BACKED = {
  Card: { padding: 'padding', borderRadius: 'radius', border: 'variant' },
  Stats: { padding: 'padding', borderRadius: 'radius', border: 'variant' },
  Box: { padding: 'p', borderRadius: 'radius', boxShadow: 'shadow' },
};
const PROP_BACKED_TAGS = Object.keys(PROP_BACKED).join('|');
const OPEN_TAG_RE = new RegExp(`<(${PROP_BACKED_TAGS})\\b`);

const GRADIENT_RE = /linear-gradient\s*\([^)]*135deg/i;
// 既定値上書き: padding / margin / borderRadius を 0（数値 or "0"）へリセット。
// 位置指定の top/right/bottom/left: 0 は正当（絶対配置）なので対象外。
const DEFAULT_OVERRIDE_RE = /\b(padding|margin|border[Rr]adius)([A-Z][A-Za-z]*)?\s*:\s*(0|["']0["'])\s*[,}]/;
// px 直書き: 任意プロパティの値に px を含む文字列（var() 参照行は除外）。
// 単独値 gap:"16px" だけでなく padding:"0 16px" や width:"min(380px, 100%)" も拾う。
const PX_LITERAL_RE = /\b[a-zA-Z]+\s*:\s*["'][^"']*\b[0-9.]+px\b/;

/** 開きタグ（属性列）を、対応する `>` まで読む。 */
function readOpenTag(lines, start) {
  let depth = 0;
  for (let i = start; i < Math.min(lines.length, start + 24); i += 1) {
    const line = lines[i];
    for (const ch of line) {
      if (ch === '{') depth += 1;
      else if (ch === '}') depth -= 1;
      else if (ch === '>' && depth <= 0) return lines.slice(start, i + 1).join('\n');
    }
  }
  return lines.slice(start, start + 24).join('\n');
}

for (const file of composedFiles) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  // `style={{ ... }}` の内側かどうかを波括弧の深さで追う。ルールが対象にするのは
  // インライン style であって、散文や設定オブジェクトではない（`description:
  // "One card, 380px..."` のような普通の文字列を px 直書きと誤検出しないため）。
  let styleDepth = 0;

  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return; // コメント行
    const loc = `${file}:${i + 1}`;
    if (GRADIENT_RE.test(line)) {
      gradientHits.push(`${loc}: ${line.trim().slice(0, 100)}`);
    }

    const opensHere = /\bstyle\s*=\s*\{\{/.test(line);
    const inStyle = styleDepth > 0 || opensHere;
    if (inStyle) {
      if (DEFAULT_OVERRIDE_RE.test(line)) {
        styleHits.push(`${loc} [default-override] ${line.trim().slice(0, 80)}`);
      } else if (PX_LITERAL_RE.test(line) && !/var\(/.test(line)) {
        styleHits.push(`${loc} [px-literal] ${line.trim().slice(0, 80)}`);
      }
    }

    // 深さ更新は判定のあと。style= で始まった行はその行の増減だけを数える。
    const delta = (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length;
    if (opensHere) styleDepth = Math.max(0, delta);
    else if (styleDepth > 0) styleDepth = Math.max(0, styleDepth + delta);

    // prop があるのに style で書いている箇所（ルール 3 の本体）
    const tag = line.match(OPEN_TAG_RE);
    if (!tag) return;
    const openTag = readOpenTag(lines, i);
    if (!/\bstyle\s*=\s*\{\{/.test(openTag)) return;
    for (const [cssProp, propName] of Object.entries(PROP_BACKED[tag[1]])) {
      // borderRadius は border より長いので、border の判定が食わないよう境界を付ける
      const re = new RegExp(`\\b${cssProp}\\s*:`);
      if (re.test(openTag.replace(/<[^>]*?\bstyle\s*=\s*\{\{/, ''))) {
        propBackedHits.push(
          `${file}:${i + 1} <${tag[1]} style={{ ${cssProp} }}> → prop \`${propName}\` を使う`,
        );
      }
    }
  });
}

// --- MDX の <style> ブロック: CSS 宣言として同じ 2 種を見る ---
// ドキュメントページのレイアウト CSS も合成画面の一部なので、px 直書きを許すと
// トークンを持つデザインシステムのドキュメントがトークンを使っていない状態になる。
const CSS_DEFAULT_OVERRIDE_RE = /\b(padding|margin|border-radius)(-[a-z]+)?\s*:\s*0\s*(!important)?\s*;/;
const CSS_PX_LITERAL_RE = /:\s*[^;]*\b[0-9.]+px\b/;
const STYLE_BLOCK_RE = /<style[^>]*>([\s\S]*?)<\/style>/g;

for (const file of mdxFiles) {
  const source = fs.readFileSync(file, 'utf8');
  const upto = (index) => source.slice(0, index).split('\n').length; // 1-origin
  for (const block of source.matchAll(STYLE_BLOCK_RE)) {
    const startLine = upto(block.index);
    block[1].split('\n').forEach((line, i) => {
      if (/^\s*(\/\*|\*)/.test(line)) return; // コメント行
      // メディアクエリの px はトークン化できない（CSS 変数は @media で解決されない）
      if (/^\s*@media/.test(line)) return;
      const loc = `${file}:${startLine + i}`;
      if (GRADIENT_RE.test(line)) {
        gradientHits.push(`${loc}: ${line.trim().slice(0, 100)}`);
      }
      if (CSS_DEFAULT_OVERRIDE_RE.test(line)) {
        styleHits.push(`${loc} [default-override] ${line.trim().slice(0, 80)}`);
      } else if (CSS_PX_LITERAL_RE.test(line) && !/var\(/.test(line)) {
        styleHits.push(`${loc} [px-literal] ${line.trim().slice(0, 80)}`);
      }
    });
  }
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

// ハードゲート（baseline 0）。2026-07-26 の T15 で全件解消済みなのでラチェットにしない。
if (propBackedHits.length > 0) {
  console.log(`\n[FAIL] prop があるのに style で指定している（DESIGN.md 必須ルール 3）:`);
  for (const h of propBackedHits) console.log(`  ${h}`);
  console.log(`       余白や枠はコンポーネントの prop で表現する。prop の刻みが足りない場合は`);
  console.log(`       style で回避せず、コンポーネント側に段を足すこと（T15 で Card の padding に`);
  console.log(`       xl / 2xl / 3xl を追加したのがその例）。`);
  failed = true;
}

// 3 領域それぞれの内訳。合計だけだと「どこが増えたか」が分からずラチェットを更新しづらい。
const area = (h) =>
  h.startsWith('sandbox/') ? 'sandbox' : h.startsWith('docs/') ? 'docs' : 'stories/Patterns';
const byArea = styleHits.reduce((acc, h) => ((acc[area(h)] = (acc[area(h)] ?? 0) + 1), acc), {});
const breakdown = Object.entries(byArea)
  .sort((a, b) => b[1] - a[1])
  .map(([k, v]) => `${k} ${v}`)
  .join(' / ');

console.log(`\nインライン style の既定値上書き＋px 直書き: ${styleHits.length} 件（${breakdown}）（baseline: ${STYLE_OVERRIDE_BASELINE}）`);
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
