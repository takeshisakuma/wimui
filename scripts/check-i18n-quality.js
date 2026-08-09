// 翻訳品質チェック
//
// 1. duplicate    — 同一オブジェクト内のキー重複（JSON.parse では後勝ちで静かに握り潰される）→ エラー
// 2. pt-pt        — pt ロケールへの欧州ポルトガル語（PT-PT）語彙の混入（RULES.md の禁止表）→ エラー
// 3. identical    — ja / pt の値が en と完全一致する複数語の文（翻訳漏れの疑い）→ 警告
// 4. placeholder  — placeholder 値が指示形（RULES.md: 実際の入力例にすべき）→ 警告
//
// 使い方: node scripts/check-i18n-quality.js
// 終了コード: duplicate / pt-pt が1件でもあれば 1、identical / placeholder のみなら 0（警告表示）
import fs from 'fs';
import path from 'path';

const localesDir = 'public/locales';
const langs = ['en', 'ja', 'pt'];

// en と同一でも正当なキー（レビュー済み）。
// コンポーネント名・キーボードキー・技術用語・補間のみ・プレースホルダー・固有名詞など、
// 翻訳しないことが正しい値。新たに en 完全一致の警告が出た場合は、
// 翻訳するか、レビューの上ここに追加すること
const IDENTICAL_ALLOWLIST = new Set([
  // コンポーネント名・技術用語
  'ai_agent_voice_check',
  'ai_terminal_diff_check',
  'config.test_tool_a11y_detail',
  'config.test_tool_unit_detail',
  'doc.icon_comp_icon_type',
  'guide.css_layers_title',
  'guide.external_react_flow',
  'guide.lvb_title',
  'guide.rvc_title',
  'guide.z_overlay_desc',
  'nav.steps_type',
  'selection.btn_group_joined_label',
  'selection.seg_vs_btn_group_title',
  'selection.seg_vs_dropdown_title',
  'selection.seg_vs_tabs_title',
  'loading.spinner_vs_loader',
  'token.bp_cq_label',
  'token.bp_mq_label',
  'doc.scenario_hero_title',
  'doc.scenario_status_title',
  'doc.scenario_toggle_title',
  'doc.scenario_404_title',
  'doc.std_column_horiz_vert',
  'doc.std_column_manual_sort',
  'doc.std_column_sm_md',
  'doc.std_column_sm_md_lg',
  'doc.numeric_std_browser_chrome_firefox',
  'doc.segmentedcontrol_ex_size',
  'story.splitter_logs',
  // メニュー語彙ページ（T65）の俗称欄。値は「外の世界で実際に使われている呼び名」の
  // 一覧なので、翻訳すると探し物が見つからなくなる。ja は katakana 表記が定着している
  // ぶんだけ併記できるが、pt はこの 2 群に定着した現地語形が無く、英語のまま呼ばれる
  'menuvocab.switcher_nick',
  'menuvocab.filter_nick',
  // キーボードキー
  'table.key_delete',
  'table.key_page_up_down',
  'table.key_shift_enter',
  'table.key_tab',
  // 補間のみ・プレースホルダー
  'ganttchart.aria_task_bar',
  'lightbox.counter',
  'sample_credit_card_placeholder',
  'story.credit_card_placeholder',
  // 固有名詞・定型句
  'compare.feat_4',
  'feature_comparison.feat_sso',
  'pricing.ent_feat_2',
  'picker.call_to_action_annotation',
  'story.appshell_rights',
  'story.footer_rights',
  'story.sourcecitation_mdn_docs_title',
  'story.thoughtprocess_title_complex',
  // en 側もプレースホルダーのままのキー（翻訳ではなく en の改善が必要）
  'doc.common_customization_desc_generic',
  // 値がパッケージ名・API 識別子のみで、訳す部分が無いキー
  // （"`wimui`, `wimui/form`, …" / "`react-hook-form` + `zod` 4 (+ resolvers)" /
  //  "`data-density` / `setWimDensity` — comfortable / compact"）
  'config.scope_core_import',
  'config.scope_rhf_peers',
  'doc.token_density_desc',
]);

// RULES.md「PT-PT（禁止）」の表 + 明確な PT-PT 語彙
const PT_PT_FORBIDDEN = [
  /\butilizador(es)?\b/i,
  /\bficheiros?\b/i,
  /\becr[ãa]s?\b/i,
  /\bcontentor(es)?\b/i,
  /arrastar e largar/i,
  /por defeito/i,
  /\bdetetar\b/i,
  /\bdetetad[oa]s?\b/i,
  /\bdete[çc][ãa]o\b/i,
  /\binqu[ée]ritos?\b/i,
  /\bpartilhad[oa]s?\b/i,
  /\bpartilhar\b/i,
];

// --- 1. 重複キー検出 -------------------------------------------------------
// 生テキスト中の「キー出現数」とパース後の「キー数」を比較する。
// 値の文字列に ":" を含んでも、直後にコロンが続く文字列のみ数えるため誤検出しない
function countRawKeys(raw) {
  return (raw.match(/"(?:[^"\\]|\\.)*"(?=\s*:)/g) || []).length;
}

function countParsedKeys(node) {
  if (Array.isArray(node)) {
    return node.reduce((n, v) => n + countParsedKeys(v), 0);
  }
  if (node !== null && typeof node === 'object') {
    let n = 0;
    for (const v of Object.values(node)) n += 1 + countParsedKeys(v);
    return n;
  }
  return 0;
}

// 重複しているキー名の特定（生出現数 > パース後出現数のキー）
function findDuplicateKeyNames(raw, data) {
  const rawCounts = {};
  for (const m of raw.matchAll(/"((?:[^"\\]|\\.)*)"(?=\s*:)/g)) {
    rawCounts[m[1]] = (rawCounts[m[1]] || 0) + 1;
  }
  const parsedCounts = {};
  (function walk(node) {
    if (Array.isArray(node)) return node.forEach(walk);
    if (node !== null && typeof node === 'object') {
      for (const [k, v] of Object.entries(node)) {
        parsedCounts[k] = (parsedCounts[k] || 0) + 1;
        walk(v);
      }
    }
  })(data);
  return Object.keys(rawCounts).filter((k) => rawCounts[k] > (parsedCounts[k] || 0));
}

// --- 2/3. 値の走査 ---------------------------------------------------------
function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) flatten(v, key, out);
    else out[key] = v;
  }
  return out;
}

const wordCount = (s) => String(s).trim().split(/\s+/).length;

let duplicateErrors = 0;
let ptPtErrors = 0;
let identicalWarnings = 0;

for (const lang of langs) {
  const dir = path.join(localesDir, lang);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
    const p = path.join(dir, file);
    const raw = fs.readFileSync(p, 'utf8');
    const data = JSON.parse(raw);

    // 1. 重複キー
    const rawKeys = countRawKeys(raw);
    const parsedKeys = countParsedKeys(data);
    if (rawKeys !== parsedKeys) {
      const names = findDuplicateKeyNames(raw, data);
      console.log(`[FAIL] ${p}: キーが ${rawKeys - parsedKeys} 件重複（後勝ちで一方が無視されています）: ${names.slice(0, 8).join(', ')}${names.length > 8 ? ', ...' : ''}`);
      duplicateErrors++;
    }

    // 2. PT-PT 語彙（pt のみ）
    if (lang === 'pt') {
      const flat = flatten(data);
      for (const [key, value] of Object.entries(flat)) {
        if (typeof value !== 'string') continue;
        for (const re of PT_PT_FORBIDDEN) {
          const m = value.match(re);
          if (m) {
            console.log(`[FAIL] ${p} > ${key}: PT-PT 語彙 "${m[0]}"（RULES.md の対訳表を参照）`);
            ptPtErrors++;
          }
        }
      }
    }
  }
}

// 3. en と完全一致（翻訳漏れの疑い）
for (const lang of ['ja', 'pt']) {
  const enDir = path.join(localesDir, 'en');
  for (const file of fs.readdirSync(enDir).filter((f) => f.endsWith('.json'))) {
    const target = path.join(localesDir, lang, file);
    if (!fs.existsSync(target)) continue;
    const en = flatten(JSON.parse(fs.readFileSync(path.join(enDir, file), 'utf8')));
    const tr = flatten(JSON.parse(fs.readFileSync(target, 'utf8')));
    for (const [key, value] of Object.entries(tr)) {
      if (typeof value !== 'string' || value !== en[key]) continue;
      // "Props" や固有名詞のような1〜2語の一致は正当なので、3語以上の文のみ疑う
      if (wordCount(value) < 3) continue;
      if (IDENTICAL_ALLOWLIST.has(key)) continue;
      console.log(`[WARN] ${lang}/${file} > ${key}: en と完全一致（翻訳漏れの疑い）`);
      identicalWarnings++;
    }
  }
}

// 4. placeholder の指示形チェック
// RULES.md: 「placeholder は説明・指示・制限事項ではなく、実際にユーザーが入力する
// ような内容にしてください」— 命令形で始まる値を警告する
const INSTRUCTION_PATTERNS = {
  en: /^(enter|type|select|search|choose|add|write|click|input|pick|ask|use)\b/i,
  ja: /(してください|を入力|を選択|を検索|を追加)/,
  pt: /^(digite|selecione|escolha|insira|adicione|pesquise|busque|clique|use|escreva|pergunte)\b/i,
};
// placeholder の「値」として使われるキーのみ対象（*_content_placeholder 等の
// ガイドライン文書キーは除外）
const isPlaceholderValueKey = (key, file) => {
  if (/content_placeholder$/.test(key)) return false;
  if (/(_|\.)placeholder(_interactive)?$/i.test(key)) return true;
  // common.json 等の placeholder.xxx 値グループ。
  // docs_guide_* の placeholder.* は「placeholder についての解説文」なので対象外
  return !/^docs_guide/.test(file) && /(^|\.)placeholder\.[^.]+$/.test(key);
};

let placeholderWarnings = 0;
for (const lang of langs) {
  const re = INSTRUCTION_PATTERNS[lang];
  const dir = path.join(localesDir, lang);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
    const flat = flatten(JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')));
    for (const [key, value] of Object.entries(flat)) {
      if (typeof value !== 'string' || !isPlaceholderValueKey(key, file)) continue;
      if (re.test(value)) {
        console.log(`[WARN] ${lang}/${file} > ${key}: placeholder が指示形です（実際の入力例にしてください）: "${value}"`);
        placeholderWarnings++;
      }
    }
  }
}

// 5. stories の placeholder 配線チェック
// - placeholder={t("...")} に placeholder/sample 系でないキー（label 等）を流用していないか
// - ハードコードの placeholder="..." が指示形になっていないか
// どちらも「説明・指示ではなく実際の入力例にする」ルール（RULES.md）の担保
// キー名は placeholder/sample 系でないが、値が入力例として適正なレビュー済みキー
const WIRING_ALLOWLIST = new Set([
  'story.multiselect_fruits', // "Grapes"（果物の例示）
  'story.command_type_command', // "/settings"（コマンドの例示）
  'doc.ft_no_label', // "John Doe"（ラベルなしデモの入力例）
]);

let wiringWarnings = 0;
{
  const storyFiles = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|mdx)$/.test(e.name)) storyFiles.push(p);
    }
  })('stories');
  for (const file of storyFiles) {
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(/placeholder=\{t\(\s*["']([^"']+)["']/g)) {
      const key = m[1];
      if (WIRING_ALLOWLIST.has(key.replace(/^[\w-]+:/, ''))) continue;
      // `_ph` 接尾辞も placeholder キーの命名（例: story.density_email_ph）。
      // これを見ていなかったため、正しく placeholder 用に作られたキーまで
      // 「label の使い回し」として警告していた。
      if (!/placeholder|sample/i.test(key) && !/_ph$/.test(key)) {
        console.log(`[WARN] ${path.relative('.', file)}: placeholder に非 placeholder キーを流用: ${key}（label の使い回しは説明文表示になります）`);
        wiringWarnings++;
      }
    }
    for (const m of src.matchAll(/placeholder="([^"]+)"/g)) {
      if (INSTRUCTION_PATTERNS.en.test(m[1]) || INSTRUCTION_PATTERNS.ja.test(m[1])) {
        console.log(`[WARN] ${path.relative('.', file)}: ハードコード placeholder が指示形です: "${m[1]}"`);
        wiringWarnings++;
      }
    }
    // パスワード入力に placeholder は付けない（平文表示は入力例として機能せず、
    // 伏字風の文字列は「入力済み」と誤認されるため）
    for (const m of src.matchAll(/<(?:PasswordInput\w*|Input\b[^>]*type="password")[^>]*placeholder=/g)) {
      console.log(`[WARN] ${path.relative('.', file)}: パスワード入力に placeholder が指定されています（不要です）: ${m[0].slice(0, 60)}...`);
      wiringWarnings++;
    }
  }
}

// 6. stories TSX の JSX ハードコードテキスト
// t() を通らない英文はロケールを切り替えても翻訳されない。
// MDX には check-mdx-hardcoded.js があるが .stories.tsx は対象外だったため、ここで検査する
const HARDCODED_TEXT_ALLOWLIST = new Set([
  // ユーティリティクラス・トークン・アニメーション名（翻訳すべきでない技術識別子）
  'Glass Sm', 'Glass Md', 'Glass Lg',
  'Shadow SM', 'Shadow MD', 'Shadow LG',
  'Pulse',
  // ブランド・コンポーネント名・固有名詞
  'WIM UI', 'HoverCard', 'GitHub', 'WelcomeCard.tsx',
  'State of JS 2023', 'React 19 release notes', 'Vue 3.4 performance benchmarks', 'MDN Web Docs',
  // 引用元サンプルのドキュメント名（実在文書の固有名詞として英語のまま）
  'React Documentation', 'Internal Design Guide', 'TypeScript Handbook',
  // コード例の内容（コードとその描画結果の一致を保つため翻訳しない）
  'Hello World', 'This is a long code block to test scrolling behavior.',
  // ターミナル出力モック（コード類）
  'Starting server on port 3000...',
  'Error: EADDRINUSE: address already in use :::3000',
  'Tip: run `lsof -i :3000` to find the conflicting process',
  // サンプル人名・サービス名
  'John Doe', 'Sarah Miller', 'WimStore',
  // ダッシュボードデモのユーザー名（人名は各ロケールで訳さない）
  'Aoi Tanaka',
]);
const JSX_TEXT_RE = />([A-Z][a-zA-Z0-9 .,&!?()'/-]{4,})<\/(Text|Title|Button|Badge|Tag|span|p|h[1-6]|Label|Legend|strong|b|li|td|th|Dialog\.Title|Drawer\.Title|BottomSheet\.Title)>/g;
// 複数行のテキストノード（<Text>\n  English text\n</Text> 形式）
const JSX_MULTILINE_TEXT_RE = />\s*\n\s*([A-Z][a-zA-Z0-9 .,&!?()'’/;:-]{4,}?)\s*\n\s*<\//g;
// テキストを持つ属性のハードコード英文
const JSX_ATTR_TEXT_RE = /\b(title|label|caption|description|message|subtitle|alt|content|error)="([A-Z][^"{}<>\n]{4,})"/g;
// オブジェクトリテラル内のテキスト（{ label: "English text" } 形式。
// 誤検出を避けるため、値にスペースを含む文のみ対象）
const OBJ_TEXT_RE = /\b(label|title|description|content|message|subtitle|text):\s*"([A-Z][^"\n]* [^"\n]*)"/g;

let hardcodedWarnings = 0;
{
  const storyFiles = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.stories.tsx')) storyFiles.push(p);
    }
  })('stories');
  for (const file of storyFiles) {
    const src = fs.readFileSync(file, 'utf8');

    // 意図的な英語（ブランド名・モデル名・VRT 固定データ等）の抑制マーカーを尊重する。
    // check-stories-hardcoded.js と同じ意味論: i18n-ignore（同一行） /
    // i18n-ignore-next-line（直後の 1 行） / i18n-ignore-start 〜 -end（ブロック）。
    // ここが未対応だったため、既に理由付きで ignore 済みの箇所まで警告が出ていた
    // （ModelSelector のモデル名・プロバイダ名など）。
    const srcLines = src.split('\n');
    const ignoredLines = new Set();
    let ignoreBlock = false;
    srcLines.forEach((line, i) => {
      if (line.includes('i18n-ignore-start')) { ignoreBlock = true; ignoredLines.add(i); return; }
      if (line.includes('i18n-ignore-end')) { ignoreBlock = false; ignoredLines.add(i); return; }
      if (ignoreBlock || line.includes('i18n-ignore')) ignoredLines.add(i);
      if (i > 0 && srcLines[i - 1].includes('i18n-ignore-next-line')) ignoredLines.add(i);
    });
    // 文字オフセット → 0 起点の行番号
    const lineOf = (index) => src.slice(0, index).split('\n').length - 1;

    const report = (text, kind, index) => {
      const trimmed = text.trim();
      if (HARDCODED_TEXT_ALLOWLIST.has(trimmed)) return;
      if (index !== undefined && ignoredLines.has(lineOf(index))) return;
      console.log(`[WARN] ${path.relative('.', file)}: ハードコード${kind}（t() 未使用のため翻訳されません）: "${trimmed}"`);
      hardcodedWarnings++;
    };
    for (const m of src.matchAll(JSX_TEXT_RE)) report(m[1], 'テキスト', m.index);
    for (const m of src.matchAll(JSX_MULTILINE_TEXT_RE)) report(m[1], 'テキスト（複数行）', m.index);
    for (const m of src.matchAll(JSX_ATTR_TEXT_RE)) report(m[2], `属性 ${m[1]}`, m.index);
    for (const m of src.matchAll(OBJ_TEXT_RE)) {
      //  等を含む値はターミナル出力等のコード類なので対象外
      if (/\\u00/.test(m[2])) continue;
      // Storybook のサイドバー階層パス（meta.title）は構造識別子なので対象外
      if (m[1] === 'title' && /^(Components|Audit|Patterns)\//.test(m[2])) continue;
      // argTypes 内の description は Storybook Controls パネル用メタデータなので対象外
      if (m[1] === 'description') {
        const before = src.slice(0, m.index);
        const ctx = before.lastIndexOf('argTypes');
        const other = Math.max(before.lastIndexOf('render:'), before.lastIndexOf(' args:'), before.lastIndexOf('= ['));
        if (ctx > other) continue;
      }
      report(m[2], `オブジェクト ${m[1]}`, m.index);
    }
  }
}

// 6. ロケール値の `**` — 画面に生のアスタリスクとして出る
//
// `stories/T.tsx` の processText が変換するのは**バッククォート（→ `<code>`）と改行だけ**で、
// Markdown の強調は解釈しない。値に `**` を書くと `<strong>` にはならず、
// **アスタリスクがそのまま表示される**。しかも i18n:check も audit-mdx も
// キーの整合しか見ないので、崩れた画面のまま緑になる。
// 実例: #322 で出した `docs_guide_width_placement.json`（ja）は生の `**` を 3 対含んでいた。
//
// **鳴ってはいけない経路**: `MarkdownRenderer` / `StreamingText` の `content` に渡す値は
// マークダウンの本文そのもので、`**` は正しく `<strong>` になる。T を通らないので対象外。
const BOLD_ALLOWLIST = new Set([
  'story.markdown_renderer_content', // <MarkdownRenderer content={t(...)} />
  'story.artifacts_overlay_content', // 同上
  'story.streamingtext_sample', // <StreamingText content={t(...)} />
]);

let boldErrors = 0;
{
  for (const lang of langs) {
    const dir = path.join(localesDir, lang);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      const p = path.join(dir, file);
      let data;
      try {
        data = JSON.parse(fs.readFileSync(p, 'utf8'));
      } catch {
        continue;
      }
      for (const [key, value] of Object.entries(flatten(data))) {
        if (typeof value !== 'string' || !value.includes('**')) continue;
        if (BOLD_ALLOWLIST.has(key.replace(/^[\w-]+:/, ''))) continue;
        boldErrors += 1;
        console.error(`✗ ${lang}/${file} の ${key} に \`**\` があります（画面には生のアスタリスクが出ます）`);
      }
    }
  }
  if (boldErrors > 0) {
    console.error('  強調は文の組み立てで表してください。装飾が要る場合は MDX 側のマークアップで行います。');
  }
}

console.log('');
console.log(`重複キー: ${duplicateErrors} ファイル / PT-PT 語彙: ${ptPtErrors} 件 / 生の \`**\`: ${boldErrors} 件 / en 完全一致（警告）: ${identicalWarnings} 件 / 指示形 placeholder（警告）: ${placeholderWarnings} 件 / stories 配線（警告）: ${wiringWarnings} 件 / TSX ハードコード（警告）: ${hardcodedWarnings} 件`);

if (duplicateErrors > 0 || ptPtErrors > 0 || boldErrors > 0) {
  process.exit(1);
}
