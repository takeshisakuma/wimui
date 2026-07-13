/**
 * Props 説明文（doc.<component>_prop_<prop>）のバックフィルスクリプト。
 *
 * docgen JSON（src/data/docgen_*.json）から JSDoc 付きの props を抽出し、
 * public/locales/<lang>/docs_props_<category>.json に翻訳キーを生成する。
 * <Docgen section="props" /> はこのキーを優先表示し、無ければ JSDoc に
 * フォールバックする（stories/Docgen.tsx / RULES.md 参照）。
 *
 * JSDoc の言語を自動判定して振り分ける:
 *   - 英語 JSDoc → en ファイルへ（ja/pt は `npm run i18n:sync` で自動翻訳）
 *   - 日本語 JSDoc → ja ファイルへ（en/pt は `--translate` で自動翻訳）
 *
 * Usage:
 *   node scripts/backfill-prop-keys.js              # レポートのみ（書き込みなし）
 *   node scripts/backfill-prop-keys.js --write      # 欠落キーをロケールファイルへ生成
 *   node scripts/backfill-prop-keys.js --translate  # ja 起点キーの en/pt を AI 翻訳で補完
 *                                                   # (要 GOOGLE_GENERATIVE_AI_API_KEY)
 *
 * 完全なバックフィル手順:
 *   1. --write        … JSDoc をソース言語のファイルへ配置
 *   2. --translate    … 日本語 JSDoc 由来キーの en / pt を補完
 *   3. npm run i18n:sync … 英語 JSDoc 由来キーの ja / pt を補完
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const DATA_DIR = './src/data';
const LOCALES_DIR = './public/locales';
const LANGS = ['en', 'ja', 'pt'];
const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const TRANSLATE = args.includes('--translate');

// Docgen.tsx の toDocBaseName と同じ変換（relativeTime_title 等の既存規約に一致）
// Table.Header → tableHeader（ドット除去後に lowerFirst。i18next の . ネスト衝突を避ける）
const toDocBaseName = (name) => {
  const compact = name.replace(/\./g, '');
  return compact.charAt(0).toLowerCase() + compact.slice(1);
};

const hasJapanese = (text) => /[぀-ヿ㐀-鿿]/.test(text);

// カテゴリスラッグ → ロケールファイル名（docs_data_display 等の既存規約に合わせる）
const nsForCategory = (cat) =>
  `docs_props_${cat.replace(/^_/, '').replace(/-/g, '_')}`;

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const writeJson = (p, obj) =>
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');

const sortObject = (obj) => {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((k) => {
      sorted[k] =
        typeof obj[k] === 'object' && obj[k] !== null
          ? sortObject(obj[k])
          : obj[k];
    });
  return sorted;
};

// 全ロケールファイルの "doc" グループから既存キーを収集（言語別）
const collectExistingDocKeys = () => {
  const existing = Object.fromEntries(LANGS.map((l) => [l, new Set()]));
  for (const lang of LANGS) {
    const dir = path.join(LOCALES_DIR, lang);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      const data = readJson(path.join(dir, file));
      if (data.doc && typeof data.doc === 'object') {
        Object.keys(data.doc).forEach((k) => existing[lang].add(k));
      }
    }
  }
  return existing;
};

// docgen から { category, component, prop, key, description, sourceLang } を列挙
const collectPropEntries = () => {
  const entries = [];
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => /^docgen_(?!index)/.test(f) && f.endsWith('.json'));
  for (const file of files) {
    const category = file.replace(/^docgen_/, '').replace(/\.json$/, '');
    const data = readJson(path.join(DATA_DIR, file));
    for (const [componentName, component] of Object.entries(data)) {
      // Leaf および Table.Header 等の複合サブコンポーネントを対象にする。
      // ドットは toDocBaseName で除去し、i18next のキー区切り衝突を避ける。
      if (!/^[A-Za-z0-9.]+$/.test(componentName)) continue;
      if (!component.props) continue;
      for (const [propName, propInfo] of Object.entries(component.props)) {
        const description = (propInfo.description ?? '').trim();
        if (!description) continue;
        entries.push({
          category,
          componentName,
          propName,
          key: `${toDocBaseName(componentName)}_prop_${propName}`,
          description,
          sourceLang: hasJapanese(description) ? 'ja' : 'en',
        });
      }
    }
  }
  return entries;
};

const loadNsFile = (lang, ns) => {
  const p = path.join(LOCALES_DIR, lang, `${ns}.json`);
  return fs.existsSync(p) ? readJson(p) : { doc: {} };
};

const saveNsFile = (lang, ns, data) => {
  writeJson(path.join(LOCALES_DIR, lang, `${ns}.json`), sortObject(data));
};

// sync-i18n.js と同じ Gemini API でキー群を一括翻訳する
async function translateBatch(keysAndValues, fromLang, toLang) {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const langNames = { en: 'English', ja: 'Japanese', pt: 'Portuguese (Brazil)' };
  const prompt = `
You are a professional translator for a UI component library (Design System).
The following JSON values are descriptions of React component props.
Translate them from ${langNames[fromLang]} to ${langNames[toLang]}.
Maintain the same JSON structure. Keep keys exactly as they are.
Keep code-like tokens (prop names, values such as "digital", CSS units, ISO 8601, BCP 47) untranslated.

JSON to translate:
${JSON.stringify(keysAndValues, null, 2)}
`;
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: prompt,
  });
  const text = response.text ?? '';
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Failed to parse JSON from AI response');
  return JSON.parse(jsonMatch[0]);
}

async function main() {
  const existing = collectExistingDocKeys();
  const entries = collectPropEntries();

  const missing = entries.filter(
    (e) => !LANGS.some((lang) => existing[lang].has(e.key)),
  );

  // ---- レポート ----
  const byCategory = {};
  for (const e of missing) {
    byCategory[e.category] ??= { en: 0, ja: 0 };
    byCategory[e.category][e.sourceLang]++;
  }
  console.log(`Described props in docgen: ${entries.length}`);
  console.log(`Already keyed:             ${entries.length - missing.length}`);
  console.log(`Missing keys:              ${missing.length}`);
  for (const [cat, counts] of Object.entries(byCategory).sort()) {
    console.log(
      `  ${nsForCategory(cat).padEnd(36)} en-source: ${String(counts.en).padStart(4)}  ja-source: ${String(counts.ja).padStart(4)}`,
    );
  }

  // ---- --write: JSDoc をソース言語のファイルへ配置 ----
  if (WRITE && missing.length > 0) {
    const touchedNs = new Set(missing.map((e) => nsForCategory(e.category)));
    for (const ns of touchedNs) {
      // 名前空間の自動登録（i18n-namespace-plugin）と check-i18n の
      // トップレベル整合のため、3言語すべてにファイルを用意する
      const files = Object.fromEntries(
        LANGS.map((lang) => [lang, loadNsFile(lang, ns)]),
      );
      for (const e of missing.filter((m) => nsForCategory(m.category) === ns)) {
        files[e.sourceLang].doc[e.key] = e.description;
      }
      for (const lang of LANGS) saveNsFile(lang, ns, files[lang]);
      console.log(`Updated ${ns}.json (en/ja/pt)`);
    }
  } else if (WRITE) {
    console.log('Nothing to write.');
  }

  // ---- --translate: ja 起点キーの en/pt を補完 ----
  if (TRANSLATE) {
    if (!API_KEY) {
      console.error(
        '\n--translate requires GOOGLE_GENERATIVE_AI_API_KEY in .env (same key as i18n:sync).',
      );
      process.exitCode = 1;
      return;
    }
    // ja にあり en に無いキーを ns ごとに収集して翻訳
    const nsSet = new Set(
      fs
        .readdirSync(path.join(LOCALES_DIR, 'ja'))
        .filter((f) => f.startsWith('docs_props_') && f.endsWith('.json'))
        .map((f) => f.replace('.json', '')),
    );
    for (const ns of nsSet) {
      const jaData = loadNsFile('ja', ns);
      for (const toLang of ['en', 'pt']) {
        const targetData = loadNsFile(toLang, ns);
        const todo = Object.fromEntries(
          Object.entries(jaData.doc).filter(([k]) => !(k in targetData.doc)),
        );
        const count = Object.keys(todo).length;
        if (count === 0) continue;
        console.log(`[${ns}] translating ${count} keys ja -> ${toLang} ...`);
        const translated = await translateBatch(todo, 'ja', toLang);
        Object.assign(targetData.doc, translated);
        saveNsFile(toLang, ns, targetData);
      }
    }
    console.log(
      'Done. Run `npm run i18n:sync` to fill ja/pt for en-source keys.',
    );
  }

  if (!WRITE && !TRANSLATE) {
    console.log(
      '\nDry run (no files changed). Use --write to generate keys, then --translate + `npm run i18n:sync` to fill the remaining languages.',
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
