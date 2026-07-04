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

console.log('');
console.log(`重複キー: ${duplicateErrors} ファイル / PT-PT 語彙: ${ptPtErrors} 件 / en 完全一致（警告）: ${identicalWarnings} 件 / 指示形 placeholder（警告）: ${placeholderWarnings} 件`);

if (duplicateErrors > 0 || ptPtErrors > 0) {
  process.exit(1);
}
