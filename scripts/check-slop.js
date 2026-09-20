/**
 * check:slop — AI-slop（AI 的な画面）の機械ガード。
 *
 * docs/design/composition.md「コンポジションガイドライン（AI 的な画面を避ける）」の禁止パターンのうち、
 * 決定的に検出できる部分集合だけを、合成画面を書く 3 か所に対して機械強制する:
 *   - `stories/Patterns/**`  Pattern デモ
 *   - `sandbox/**`           Playground のギャラリーと StackBlitz へ出るレシピ
 *   - `docs/*.mdx` の <style> ドキュメントページ自身のレイアウト CSS
 * 判断依存のルール（1 画面 1 主役・中央揃え多用・実在感など）は
 * docs/design/composition.md のセルフレビュー／composition-guidelines skill に委ね、ここでは扱わない。
 *
 * 検出（この初回カット＝ユーザー選択の 3 種）:
 *   1. gradient135  — `linear-gradient(... 135deg ...)` のヒーロー背景（ハードゲート、baseline 0）
 *   2. hype         — 誇張形容詞辞書（多言語）をストーリーデモコピー（docs_stories_*）で照合
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
// NUMBERED_PLACEHOLDER_ALLOW: **番号が意味を持つ語**。`Heading 1` は HTML の見出し
// レベルの名前そのものだし、`Tier 1` は設計ガイドの階層の呼称、`Week 1` はチャートの
// 時系列の軸、`Track 2` はアルバムのトラック番号。ここを除かないと、下の連番規則は
// 種で数えて 3 割強が偽陽性になる（T255 の実測: 48 種のうち 17 種が正当だった）。
const NUMBERED_PLACEHOLDER_ALLOW = new Set(DICT.numberedPlaceholderAllow ?? []);
// EMPTY_COPY: 中身の無い定型コピー。hype（誇張）とは別の欠陥で、hype が「言い過ぎ」なら
// こちらは「何も言っていない」。同じ配列に混ぜると、どちらの辞書も育てにくくなる。
const EMPTY_COPY = DICT.emptyCopy ?? [];
/** 部分一致が正当語を踏むときの除外（elevate ⊂ elevated 等）。辞書 SSOT。 */
const HYPE_FALSE_POSITIVES = new Set(
  (DICT.hypeFalsePositives ?? []).map((w) => String(w).toLowerCase()),
);

// ストーリーデモコピーが実在する locale ファイル（en/ja/pt の docs_stories_*）と、
// **カタログのストーリー本体**（`stories/**/*.stories.tsx`）。
//
// ストーリー本体を足した理由: locale だけを見ていると、`t()` を通さず TSX に直書きされた
// 英語がまるごと素通りする。カタログの Default ストーリーは「その部品の使い方の見本」
// として読まれるので、Pattern デモと同じ基準で見る（composition.md `default_anatomy`）。
//
// `stories/*.tsx`（Docgen.tsx など）は**ドキュメントの土台**でありデモコピーではないので
// 入れない。ガイド docs（docs_guide_*）や props 説明（docs_* の非 stories）も、
// 禁止語を正当に引用しうるドキュメント散文なので対象外。
//
// **`audit.json` は意図的に入れない（2026-09-20 に測って決めた）。**
// `stories/Audit/*.stories.tsx` のほうは**既に対象**なので、外れているのは locale だけ。
//
// 入れたら何が鳴るかを、このガード自身で測った:
//   hype 0 / 定型名 0 / emptyCopy 1 / 連番（リテラル）7 / 連番（補間）7
//   内訳は `Option 1` `Option 2` `Option 3` / `Toggle 1` `Toggle 2` /
//   `Mix Input 1` `Mix Input 2` / `No data found`。**8 件はハードゲートなので即座に赤**になる。
//
// **入れない理由は「直すのが面倒だから」ではなく、ページの目的が違うから。**
// `Audit/*Family` は**内部 QA 用の見比べる道具**で（VRT からも意図的に外している。
// 理由は `vrt/vrt.spec.ts` と T217）、`RadioGroup` に 3 つ選択肢が並んだ姿を
// 家族どうしで比べるのが仕事。そこで選択肢の中身に意味を持たせると、
// **読み手の視線が内容へ行って比較の邪魔になる**。
// カタログの Default ストーリーが「使い方の見本」として実在感を要求されるのとは、
// 見る人も目的も違う（`composition.md` の `realism` / `default_anatomy` はカタログの話）。
//
// **判断が変わる条件**: Audit ページを外部に見せる（公開 docs に載せる・スクショを配る）
// ようになったとき。そのときは「見比べる道具」ではなくなるので、この例外は無効になる。
const COPY_SCAN_FILES = [
  ...['en', 'ja', 'pt'].flatMap((locale) =>
    globSync(`public/locales/${locale}/docs_stories_*.json`, { posix: true }),
  ),
  ...globSync('stories/**/*.stories.tsx', { posix: true }),
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
 * 各行が**コメントの中か**を、ブロックコメントの開閉を跨いで判定する（T161）。
 *
 * 以前は判定側で行頭のマーカー（`//` / `*` / `/*`）だけを見ていたため、
 * **ブロックコメントの 2 行目以降が素通り**していた。実測: 合成画面のコメントに
 * 禁止例のインライン style を引用した瞬間、ラチェットが 47 → 48 になって赤くなった
 * ＝**規則を実装の隣に書き残せない**。
 *
 * **重いのは逆向き** ── ラチェットは総数しか見ないので、
 * **コメントに紛れた 1 件を消せば実コードを 1 件増やしても通ってしまう**。
 * 数える対象を実コードだけに揃えないと、ラチェットの数字は信用できない。
 *
 * `//` は行頭のみをコメントとする。文字列中の `//`（`"https://…"`）をコメント開始と
 * 読むと、その行の実コードを丸ごと見逃す＝**偽陰性**になるので、ここは広げない。
 * ブロックコメントは、JSX の波括弧で包んだ形（`{` + `/*` … `*` + `/}`）も同じ経路で拾える。
 */
function commentMask(lines) {
  const mask = new Array(lines.length).fill(false);
  let inBlock = false;
  lines.forEach((line, i) => {
    if (inBlock) {
      mask[i] = true;
      if (line.includes('*/')) inBlock = false;
      return;
    }
    if (/^\s*\/\//.test(line)) {
      mask[i] = true;
      return;
    }
    const open = line.indexOf('/*');
    if (open !== -1 && !line.includes('*/', open + 2)) {
      // 開いたまま終わる行。開始位置より前に実コードがあり得るので、その行自体は
      // 行頭がマーカーのときだけコメント扱いにする（`foo(); /* 説明` を見逃さない）。
      inBlock = true;
      mask[i] = /^\s*(\/\*|\{\s*\/\*)/.test(line);
    } else {
      mask[i] = /^\s*(\/\/|\*|\/\*|\{\s*\/\*)/.test(line);
    }
  });
  return mask;
}

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
 * prop があるのに style で書いている箇所。composition.md 必須ルール 3 の本体だが、
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

/**
 * 量産型の**斜め**グラデーション。以前は `135deg` だけを見ていたが、同じ絵になる
 * 書き方を 1 つも見ていなかった: `to bottom right` は 135deg とまったく同じ向きで、
 * 実際 `BentoGrid` の `itemHeader` がこの書き方で素通りしていた（2026-09-19）。
 *
 * **軸に平行なグラデ（90deg / 180deg / to right / to bottom）は対象外**にする。
 * Skeleton・Audio・Image・Video のローディング shimmer はすべて `90deg` で、
 * これは装飾ではなく**動きの実装**（背景を横に流す）。角度で切ると除外リストが
 * 要らない — 斜めかどうかだけが「量産型グラデに逃げた」の判定になる。
 */
const GRADIENT_RE =
  /linear-gradient\s*\([^)]*(?:(?<![\d.])(?:45|135|225|315)deg|to\s+(?:bottom|top)\s+(?:right|left))/i;
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
  const isComment = commentMask(lines);

  lines.forEach((line, i) => {
    if (isComment[i]) return; // コメント行（ブロックの 2 行目以降を含む — T161）
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
    const cssLines = block[1].split('\n');
    const cssIsComment = commentMask(cssLines);
    cssLines.forEach((line, i) => {
      if (cssIsComment[i]) return; // コメント行（ブロックの 2 行目以降を含む — T161）
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

// --- 部品本体の SCSS: 斜めグラデだけを見る ---
// **合成画面だけを見ていたのがこのガードの穴だった**（2026-09-19）。禁止表の
// 「量産型グラデーション」は画面を書く人の癖として書かれていたが、実際には
// **部品の既定レンダー**に埋まっていて、その部品を素で置いた画面すべてに出ていた
// （`BentoGrid` の `itemHeader`）。既定が禁止パターンなら、画面ではなく既定が悪い
// （composition.md `default_anatomy`）。
//
// px 直書き・既定値上書きはここでは見ない。SCSS 側のハードコードは
// `audit:hardcoded` / `check:scss-refs` の担当で、二重に数えるとラチェットが壊れる。
const SCSS_GLOBS = ['src/components/**/*.scss', 'src/styles/**/*.scss'];
const scssFiles = SCSS_GLOBS.flatMap((g) => globSync(g, { posix: true })).filter((f) =>
  fs.existsSync(f),
);

for (const file of scssFiles) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const isComment = commentMask(lines);
  lines.forEach((line, i) => {
    if (isComment[i]) return;
    if (GRADIENT_RE.test(line)) {
      gradientHits.push(`${file}:${i + 1}: ${line.trim().slice(0, 100)}`);
    }
  });
}

// --- コピースキャン（locale JSON）: hype 語・hype フレーズ・プレースホルダ名 ---
const esc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hypeRe = new RegExp([...HYPE_WORDS, ...HYPE_PHRASES].map(esc).join('|'), 'i');
// 名前は**語境界つき**で照合する。裸の交替だと `Bob` が `Bobby` に、`Alice` が
// pt の `alicerce` に刺さる。hype と違い名前は派生形を拾う必要がないので境界を付けられる。
const nameRe = new RegExp(`\\b(?:${PLACEHOLDER_NAMES.map(esc).join('|')})\\b`, 'i');
const emptyCopyRe = new RegExp(EMPTY_COPY.map(esc).join('|'), 'i');
// 入力欄 placeholder の**氏名例**（"John Doe" 等）は正当な UX なので名前スキャンから外す。
// **emptyCopy には適用しない** — 適用すると `"dashboard_chart_placeholder": "Chart placeholder"`
// のように**キー名に placeholder を含むだけ**の行が丸ごと素通りする（実測で 1 件）。
// この除外は「氏名フォーマットの例示」のためのもので、キー名の綴りのためではない。
const isPlaceholderKey = (line) => /"[^"]*placeholder[^"]*"\s*:/i.test(line);

// --- 連番プレースホルダ（`Item 1` / `Option 2` / `Knowledge Node 3`）-------------
//
// `PLACEHOLDER_NAMES` は**実例の列挙**なので、誰かが気づいた綴りしか拾えない。
// T255（2026-09-19）の実測では、辞書に `User 1` / `Step 1` が載っているのに
// `Item 1` / `Option 1` / `Panel 1` / `Accordion 1` / `Knowledge Node 1` は
// **1 つも載っておらず**、48 種すべてが素通りしていた。列挙ではなく形で捕まえる。
//
// **en だけを見る。** この正規表現はラテン文字なら何語でも当たるので、pt の
// `Faixa 2`（= `Track 2` の訳）や `Painel 1`（= `Panel 1`）まで拾ってしまい、
// 除外リストを言語ごとに持つ羽目になる。コピーは en が正本で ja / pt はその訳
// なので、**en を直して sync すれば訳も直る**。ja は字種が違うので元から当たらない。
const NUMBERED_PLACEHOLDER_RE = /^(?:[A-Z][a-z]+ ){1,3}\d{1,2}$/;

/** 行の中の文字列リテラル（JSON の値・TSX の 3 種のクォート）を取り出す。 */
const stringLiterals = (line) =>
  [...line.matchAll(/"([^"\\\n]*)"|'([^'\\\n]*)'|`([^`\\\n]*)`/g)].map(
    (m) => m[1] ?? m[2] ?? m[3],
  );

const numberedPlaceholderHit = (line) => {
  for (const lit of stringLiterals(line)) {
    const s = (lit ?? '').trim();
    if (!NUMBERED_PLACEHOLDER_RE.test(s)) continue;
    if (NUMBERED_PLACEHOLDER_ALLOW.has(s.replace(/\s+\d{1,2}$/, ''))) continue;
    return s;
  }
  return null;
};

/**
 * **番号がリテラルの外にある書き方**（T261・2026-09-20）。
 *
 * 上の `numberedPlaceholderHit` は**1 行の中の文字列リテラル**しか見ないので、
 * 番号をリテラルの外に置くと永久に映らない。T255 で 50 → 0 にした直後に実測したら、
 * 同じ欠陥が **2 経路**で残っていた。
 *
 * **① JSX で番号を足す形**: `{t("story.list_item_small")} 1`。
 * リテラルはキー名なので規則に当たらない。**T256（RadioGroup が `Option 1 2` を
 * 表示していた）はこの形の事故**で、実害の前例がある。
 */
const JSX_NUMBER_SUFFIX = /\{\s*t\(\s*["'][^"']+["'][^)]*\)\s*\}\s*(\d{1,2})\b/;
const jsxNumberHit = (line) => {
  const m = line.match(JSX_NUMBER_SUFFIX);
  return m ? m[0].trim() : null;
};

/**
 * **② i18n 補間で番号を足す形**: en の値が `Item {{count}}`。
 * `\d{1,2}$` に当たらないので素通りする。
 *
 * **同じ形の中に正しい用法と欠陥が混ざっている**のが難しいところで、
 * `Delete {{name}}` / `Expand {{label}}` / `Barcode {{value}}` は**実体を差し込む
 * aria-label** なので正しい。分ける手がかりは**名詞ではなく、差し込む変数のほう** ──
 * `n` / `index` / `count` / `number` / `id` は「何番目か」しか運ばない。
 * 実測（2026-09-20）: 同じ形の en キーは 30 件あり、この規則で拾うと 16 件。
 *
 * 番号が意味を持つ語（`Source 1` の引用番号、`Digit 1` の桁）は、リテラル版と同じ
 * `numberedPlaceholderAllow` で逃がす（辞書を 2 つに割らない）。
 */
const INDEX_VARIABLE = /^(n|i|idx|num|index|count|number|id)$/i;
const INTERPOLATED_NUMBER = /^((?:[A-Z][a-z]+ ){1,3})\{\{\s*(\w+)\s*\}\}$/;
const interpolatedNumberHit = (value) => {
  const m = String(value ?? '').trim().match(INTERPOLATED_NUMBER);
  if (!m) return null;
  if (!INDEX_VARIABLE.test(m[2])) return null;
  if (NUMBERED_PLACEHOLDER_ALLOW.has(m[1].trim())) return null;
  return m[0];
};

/** この行が en 側か（連番規則は en 限定）。 */
const isEnglishSource = (file) =>
  !file.includes('/locales/') || file.includes('/locales/en/');

/** 部分一致ヒットをラテン語トークン全体に広げ、偽陽性語なら捨てる。 */
const hypeHitOnLine = (line) => {
  const hm = line.match(hypeRe);
  if (!hm || hm.index === undefined) return null;
  const token = line.slice(hm.index).match(/^[A-Za-z]+/)?.[0] ?? hm[0];
  if (HYPE_FALSE_POSITIVES.has(token.toLowerCase())) return null;
  return hm[0];
};

const hypeHits = [];
const nameHits = [];
const emptyCopyHits = [];
const numberedHits = [];
const jsxNumberHits = [];
const interpolatedNumberHits = [];
for (const file of COPY_SCAN_FILES) {
  if (!fs.existsSync(file)) continue;
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  // ストーリー側は**コメントに禁止例を引用できる**必要がある（T161 と同じ理由）。
  // 実際 Marketing.stories.tsx は禁止表の CTA "Get Started" を、なぜ使わないかの
  // 説明として引用している。ここでマスクしないと、規則を実装の隣に書けなくなる。
  const isComment = commentMask(lines);
  lines.forEach((line, i) => {
    if (isComment[i]) return;
    const hit = hypeHitOnLine(line);
    if (hit) hypeHits.push(`${file}:${i + 1}: 「${hit}」 ${line.trim().slice(0, 80)}`);
    const ec = line.match(emptyCopyRe);
    if (ec) emptyCopyHits.push(`${file}:${i + 1}: 「${ec[0]}」 ${line.trim().slice(0, 80)}`);
    // 入力欄プレースホルダの氏名例は正当（スコープ外）
    if (!isPlaceholderKey(line)) {
      const nm = line.match(nameRe);
      if (nm) nameHits.push(`${file}:${i + 1}: 「${nm[0]}」 ${line.trim().slice(0, 80)}`);
    }
    if (isEnglishSource(file)) {
      const num = numberedPlaceholderHit(line);
      if (num) numberedHits.push(`${file}:${i + 1}: 「${num}」 ${line.trim().slice(0, 80)}`);
      // ① 番号がリテラルの外（JSX の隣）にある形。TSX にしか出ない。
      const jsxNum = jsxNumberHit(line);
      if (jsxNum) jsxNumberHits.push(`${file}:${i + 1}: 「${jsxNum}」`);
      // ② 番号が i18n の補間にある形。en の locale 値だけを見る。
      const interp = line.match(/"([^"\\\n]*)"\s*:\s*"([^"\\\n]*)"/);
      if (interp) {
        const hit = interpolatedNumberHit(interp[2]);
        if (hit) interpolatedNumberHits.push(`${file}:${i + 1}: 「${hit}」`);
      }
    }
  });
}

console.log('--- check:slop (docs/design/composition.md 禁止パターンの機械ガード) ---');
let failed = false;

if (gradientHits.length > 0) {
  console.log(`\n[FAIL] 斜めグラデ（135deg / to bottom right 等）は禁止（面はサーフェス階層トークンで切る）:`);
  for (const h of gradientHits) console.log(`  ${h}`);
  console.log(`       部品の SCSS で出た場合は、その部品を素で置いた画面すべてに出ています。`);
  console.log(`       画面ではなく既定を直すこと（composition.md \`default_anatomy\`）。`);
  console.log(`       軸に平行なグラデ（90deg の shimmer 等）は動きの実装なので対象外です。`);
  failed = true;
}

if (hypeHits.length > 0) {
  console.log(`\n[FAIL] 誇張形容詞・定型フレーズは禁止（具体的な動作・数値で言う。composition.md 禁止パターン参照）:`);
  for (const h of hypeHits) console.log(`  ${h}`);
  failed = true;
}

if (emptyCopyHits.length > 0) {
  console.log(`\n[FAIL] 中身の無い定型コピーは禁止（何の画面かが分かる具体へ。composition.md 禁止パターン参照）:`);
  for (const h of emptyCopyHits) console.log(`  ${h}`);
  console.log(`       「No data found」「Get started」「This is a description」は、置いた人が`);
  console.log(`       まだ内容を決めていないことを表示しているだけで、読み手には何も伝わりません。`);
  failed = true;
}

if (nameHits.length > 0) {
  console.log(`\n[FAIL] 定型プレースホルダ名は禁止（実在感ある多様な名前にする。composition.md 禁止パターン）:`);
  for (const h of nameHits) console.log(`  ${h}`);
  failed = true;
}

/**
 * 連番プレースホルダのハードゲート。2026-09-19（T255）に **このガード自身で**測り、
 * 50 → 0 まで潰し切ったので、以後は 1 件でも入れば赤にする。
 *
 * ラチェットを入れた日は 50 だった（手元の使い捨てスクリプトでは 52。ガードは
 * コメント行をマスクするため数が違う）。**基準は必ずそれを判定する道具で測ること。**
 *
 * 50 件の中身は `Item 1` / `Option 1` / `Panel 1` / `Accordion 1` /
 * `Knowledge Node 1` / `Skill 1` / `Part 1` で、直すには 1 件ずつ「その画面で
 * 何を並べているのか」を決める必要があった（Flex はボードの絞り込み、Splitter は
 * ファイル / エディタ / プレビュー、Transfer は CSV に出す列、という具合）。
 *
 * **番号を継ぎ足す書き方が本体の不具合になった例がある** ── T256 の RadioGroup は
 * 翻訳済みの文字列に番号を足して `Option 1 2` を表示していた。このゲートがあれば
 * 入った日に鳴っていた。
 *
 * 番号が意味を持つ語（Heading / Tier / Week 等）は
 * scripts/slop-dictionary.json の numberedPlaceholderAllow に足すこと。
 */
const NUMBERED_PLACEHOLDER_BASELINE = 0;

/**
 * **番号がリテラルの外にある 2 経路のラチェット**（T261・2026-09-20）。
 *
 * 上のリテラル版は 50 → 0 まで潰してからハードゲートにしたが、**こちらは現状を凍結して
 * 増加だけ止める**（ユーザー判断）。先にガードを置くのは、**T256 のような新規の事故を
 * 今日から止めるため** ── RadioGroup が `Option 1 2` を表示していたのは ① の形で、
 * このゲートがあれば入った日に鳴っていた。
 *
 * **ラチェットには固有の穴がある。** lint-staged は変更されたファイルだけを渡すので、
 * 部分集合の件数を全体の基準と比べると常に素通りする（`check:slop` が実際にそうだった）。
 * このスクリプトは**引数を無視して常に全量を数える**のでその穴は塞がっているが、
 * **0 にするまでは穴の形そのものは残る**（T255 で 0 にして消したのと同じ話）。
 *
 * **数はこのガード自身で測った**（2026-09-20）。手元の走査と数が違って当然で、
 * ② は `COPY_SCAN_FILES`（docs_stories_ の locale と stories 配下の .stories.tsx）の中だけを見る。
 * `audit.json` の 8 件（`Item {{n}}` / `Card {{n}}` ほか）は**走査対象の外なので入っていない** ──
 * 走査を広げるかどうかは別の判断なので、ここでは広げない。
 *
 * 減らしたらこの値を下げること。0 にできたらハードゲートへ移す。
 */
const JSX_NUMBER_BASELINE = 37;
const INTERPOLATED_NUMBER_BASELINE = 7;

if (numberedHits.length > NUMBERED_PLACEHOLDER_BASELINE) {
  console.log(
    `\n[FAIL] 連番プレースホルダが増えています（${numberedHits.length} 箇所 / baseline: ${NUMBERED_PLACEHOLDER_BASELINE}）:`,
  );
  for (const h of numberedHits) console.log(`  ${h}`);
  console.log(`       \`Item 1\` \`Option 2\` の類は「何を並べているか」を言っていません。`);
  console.log(`       その画面で実際に並ぶものの名前にしてください（composition.md \`realism\`）。`);
  console.log(`       番号が意味を持つ語（Heading / Tier / Week 等）は`);
  console.log(`       scripts/slop-dictionary.json の numberedPlaceholderAllow に足します。`);
  failed = true;
} else if (numberedHits.length < NUMBERED_PLACEHOLDER_BASELINE) {
  console.log(
    `\n連番プレースホルダ: ${numberedHits.length} 箇所（baseline: ${NUMBERED_PLACEHOLDER_BASELINE}）。` +
      `\n  減ったので scripts/check-slop.js の NUMBERED_PLACEHOLDER_BASELINE を下げてください。`,
  );
}

/** 番号がリテラルの外にある 2 経路（T261）。ラチェットなので、増えたときだけ落とす。 */
for (const [hits, baseline, label, howto] of [
  [
    jsxNumberHits,
    JSX_NUMBER_BASELINE,
    'JSX で番号を足している箇所',
    '`{t("story.list_item")} 1` の形です。翻訳された語の隣に番号を置くと、' +
      '辞書にも連番規則にも映りません（T256 の `Option 1 2` はこの形の事故）。' +
      'その画面で実際に並ぶものの名前をキーごと用意してください。',
  ],
  [
    interpolatedNumberHits,
    INTERPOLATED_NUMBER_BASELINE,
    'i18n 補間で番号を足している en キー',
    '`Item {{count}}` の形です。差し込む変数が「何番目か」しか運んでいません。' +
      '`Delete {{name}}` のように**実体**を差し込むのは正当なので、' +
      '番号が意味を持つ語は scripts/slop-dictionary.json の numberedPlaceholderAllow に足してください。',
  ],
]) {
  if (hits.length > baseline) {
    console.log(`\n[FAIL] ${label}が増えています（${hits.length} 箇所 / baseline: ${baseline}）:`);
    for (const h of hits) console.log(`  ${h}`);
    console.log(`       ${howto}`);
    failed = true;
  } else if (hits.length < baseline) {
    console.log(
      `\n${label}: ${hits.length} 箇所（baseline: ${baseline}）。` +
        `\n  減ったので scripts/check-slop.js の baseline を下げてください。`,
    );
  }
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
  console.log(`\n[FAIL] prop があるのに style で指定している（composition.md 必須ルール 3）:`);
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
// 成功メッセージで「禁止パターンは検出されませんでした」と言わないこと。このガードが
// 見ているのは**機械層だけ**で、禁止表の大半（1 主役・中央揃え・rule of three・実在感・
// 届かない状態）は 1 行も見ていない。「検出されませんでした」は、見ていない項目まで
// 通ったかのように読める＝**このガードが最も事故を起こした読み方**（合成画面を
// 「問題なし」と自己申告した 2026-07-26 の件と同じ構造）。
console.log('\n✓ 機械層（斜めグラデ / hype / 空コピー / 定型名 / 連番 / style / intent 面）は基準内です。');
console.log('  判断依存のルール（1 画面 1 主役・中央揃え・rule of three・実在感・届かない状態）は');
console.log('  ここでは 1 件も見ていません。docs/design/composition.md のセルフレビューと judge:slop で');
console.log('  別途確認すること。');
