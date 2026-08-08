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
 *   5. intentSurface — インライン style で **intent の面色**を background に敷いている箇所（T52）。
 *                     ハードゲート（baseline 0）＋ `intent-surface-ok` で個別に逃がす。
 *
 * **5 を足した理由**（T52）: 「薄い intent 面＋濃い同色文字」を素の `<div>` で手組みすると、
 * `Badge variant="subtle"` とまったく同じ見た目になるのに、**トークンやバリアントの変更が
 * そこには届かない**。実際 T51-② で `subtle` にボーダーを入れたとき、手組み側だけが
 * 取り残された。しかも取り残されても**気付けない**（VRT は壊れた状態でベースラインを
 * 撮っているので「いつもどおり」に見える。T45 でページ色を変えたのに 852 枚が旧色のまま
 * 残ったのと同じ構造）。px と違い正当な用途が少ないので、ラチェットではなく 0 で止める。
 *
 * 使い方:
 *   node scripts/check-slop.js            # 対象全体を検査（audit:docs / CI）
 *   node scripts/check-slop.js <file...>  # 指定ファイルのみ（lint-staged 用。対象外のパスは無視）
 *   node scripts/check-slop.js --probe <file...>  # 指定ファイルだけを intentSurface で見る
 *                                                 （過去のコミットを流し込む受け入れ条件の検証用）
 *
 * ベースラインを下回ったら STYLE_OVERRIDE_BASELINE を実測値まで下げてコミットすること。
 */
import fs from 'fs';
import { globSync } from 'glob';

// --- ラチェット基準（既定値上書き＋px 直書きの合計）。増やさない・減らしたら更新する。 ---
// 2026-07-26 の実測 52 件で凍結（stories/Patterns 40 / docs 10 / sandbox 2）。
// docs は T16 で 66 → 10 へ削減。残る 10 件は**トークンが対応しない値**で、
// 寄せるとかえって嘘になるため意図的に残している:
//   - AppLayout.mdx のレイアウト図の寸法（grid-template-rows: 60px 300px 40px 等）
//   - ロゴ画像・凡例の実寸（height: 64px / width: 180px）
//   - h2 のブラウザ既定リセット（margin: 0）
//   - PCCS.mdx の margin-bottom: 60px（最も近い 5xl=35.2px とは 25px 差）
// stories/Patterns の 40 件・sandbox の 2 件も同様に、対応するトークンが無い
// 実寸（min(380px,100%) 等）が中心。減らしたらこの値を下げること。
// 2026-08-02: 50 → 48。T52 のガードで見つかったメンテナンス画面の孤島を `Result`
// （`iconSurface`）へ寄せた結果、80px の直書き 2 件が消えた。
// 2026-08-08: 48 → 47。ComparisonTable の maxWidth / margin:0 auto を CSS クラスへ寄せた。
const STYLE_OVERRIDE_BASELINE = 47;

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

// `--probe` は受け入れ条件の検証専用。過去のコミットから取り出したファイルを渡して
// 「検出すべき既知の事例で実際に鳴るか」を確かめる（check-intent-text-color.js と同じ運用）。
// 通常の引数（lint-staged 由来）とは違い、こちらは**渡されたファイルだけ**を見る。
const argv = process.argv.slice(2);
const probeIdx = argv.indexOf('--probe');
const probeFiles = probeIdx >= 0 ? argv.slice(probeIdx + 1).filter((f) => fs.existsSync(f)) : [];

const composedFiles =
  probeFiles.length > 0
    ? probeFiles
    : TSX_GLOBS.flatMap((g) => globSync(g, { posix: true })).filter(
        (f) => !f.endsWith('.test.tsx') && fs.existsSync(f),
      );
const mdxFiles = MDX_GLOBS.flatMap((g) => globSync(g, { posix: true })).filter((f) => fs.existsSync(f));

const gradientHits = [];
const styleHits = [];
const propBackedHits = [];
const intentSurfaceHits = [];

/**
 * intent の**面色**を指すトークン（T52）。intent 名は SSOT から引く — ここに 6 語を
 * 書き写すと、intent を足したときに新しい名前だけが黙って素通りする。
 *
 * 接尾辞まで含めて `--wim-color-<intent>` の形だけを見るのが要点で、`text-secondary` /
 * `border-secondary` / `surface-subtle` / `chart-primary` は**面ではない or intent 面ではない**
 * ので当たらない（`--wim-color-` の直後に intent 名が来ることを要求している）。
 * `surface-subtle` の縞模様や `border-secondary` の罫線は正当なのでここで落としてはいけない。
 */
const INTENT_NAMES = Object.keys(
  JSON.parse(fs.readFileSync(new URL('../tokens/intents.json', import.meta.url), 'utf8')).canonical,
).filter((n) => n !== 'default');
const INTENT_SURFACE_TOKEN = new RegExp(
  `--wim-color-(${INTENT_NAMES.join('|')})(-(subtle|muted|soft|fill|hover|active|rgb))?\\b`,
);
// background / backgroundColor の**値**としての使用だけを見る。`color:` は別ガード
// （check:intent-text-color）の担当で、あちらは文字色として AA を割る話。
//
// 宣言名だけを見て「同じ行に intent トークンがあるか」で判定すると誤検出する:
// `{ background: "var(--wim-color-surface)", borderColor: "var(--wim-color-primary)" }`
// は面がサーフェスで枠だけがアクセント＝正当なのに落ちる（実装中に AI.stories.tsx:115 で
// 実際に踏んだ）。値を切り出してから照合すること。
const BG_DECL_VALUE = /\bbackground(Color)?\s*:\s*(?:"([^"]*)"|'([^']*)'|([^,}]+))/g;
const bgValues = (line) =>
  [...line.matchAll(BG_DECL_VALUE)].map((m) => m[2] ?? m[3] ?? m[4] ?? '');

/**
 * 逃がす注記を、その行と**直前の連続したコメント行**から探す。理由を 2 行以上で
 * 書いた瞬間に効かなくなる形（直前 1 行だけを見る）は避ける。逃がすこと自体より、
 * 逃がした理由がコードの隣に残ることのほうが目的なので、複数行を許す必要がある。
 */
const EXCUSE = 'intent-surface-ok';
function excused(lines, i) {
  if (lines[i].includes(EXCUSE)) return true;
  for (let k = i - 1; k >= 0; k -= 1) {
    const prev = lines[k].trim();
    if (!prev.startsWith('//') && !prev.startsWith('*') && !prev.startsWith('/*')) return false;
    if (prev.includes(EXCUSE)) return true;
  }
  return false;
}

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
      // 逃がすときは理由を書けるよう、同じ行と**直前の連続したコメント行**を見る。
      // 1 行前だけだと、理由を複数行で書いた瞬間に効かなくなる（実装中に踏んだ）。
      if (!excused(lines, i) && bgValues(line).some((v) => INTENT_SURFACE_TOKEN.test(v))) {
        intentSurfaceHits.push(`${loc} ${line.trim().slice(0, 90)}`);
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

// ハードゲート（baseline 0）。intent の面を素の要素で敷くのは、既にある
// `Badge` / `Tag` / `Chip` / `Alert` の subtle を手で書き直しているのと同じ。
if (intentSurfaceHits.length > 0) {
  console.log(`\n[FAIL] intent の面色をインライン style で敷いています（T52）:`);
  for (const h of intentSurfaceHits) console.log(`  ${h}`);
  console.log(`       同じ見た目は \`Badge\` / \`Tag\` / \`Chip\` の \`variant="subtle"\` や \`Alert\` が持っています。`);
  console.log(`       手組みするとトークン・バリアントの変更がそこだけ届かず、しかも`);
  console.log(`       VRT は壊れた状態のベースラインを撮るので気付けません。`);
  console.log(`       強調として面を敷くこと自体が目的なら \`intent-surface-ok\` を添えて理由を書くこと。`);
  failed = true;
}

// --probe は受け入れ条件の検証なので、intentSurface だけを見て 1 件でも鳴らす。
if (probeFiles.length > 0) {
  console.log(`\n${intentSurfaceHits.length} 件検出（probe: ${probeFiles.length} ファイル）。`);
  process.exit(intentSurfaceHits.length > 0 ? 1 : 0);
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
