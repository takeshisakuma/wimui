import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
const localesDir = './public/locales';
const sourceLang = 'en';
const targetLangs = ['ja', 'pt'];
const snapshotPath = path.join(localesDir, '.sync-snapshot.json');
const namespaces = fs.readdirSync(path.join(localesDir, sourceLang))
  .filter(file => file.endsWith('.json'))
  .map(file => file.replace('.json', ''));

async function translateKeys(keysAndValues, targetLang) {
  if (!API_KEY) {
    console.log(`  [Skip] GOOGLE_GENERATIVE_AI_API_KEY not found in .env. Using placeholders.`);

    function generatePlaceholders(src, targetLang) {
      if (typeof src === 'object' && src !== null && !Array.isArray(src)) {
        const result = {};
        for (const key in src) {
          result[key] = generatePlaceholders(src[key], targetLang);
        }
        return result;
      }
      return `[MISSING_TRANSLATION: ${targetLang}] ${src}`;
    }

    const translated = generatePlaceholders(keysAndValues, targetLang);
    return translated;
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  const prompt = `
You are a professional translator for a UI component library (Design System).
Translate the following JSON object from English to ${targetLang === 'ja' ? 'Japanese' : 'Portuguese (Brazil)'}.
Maintain the same JSON structure. Keep keys exactly as they are.
Ensure the tone is consistent with a modern web application (e.g., professional yet approachable).

JSON to translate:
${JSON.stringify(keysAndValues, null, 2)}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });
    const text = response.text ?? '';
    // Extract JSON from response (handling potential markdown blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('Failed to parse JSON from AI response');
  } catch (error) {
    console.error('  [Error] AI Translation failed:', error.message);
    return {};
  }
}

// en に存在するが target に存在しない（または空・プレースホルダー）キーを収集
function findMissingKeysRecursive(source, target, result = {}) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      if (!target[key] || typeof target[key] !== 'object') {
        result[key] = source[key];
      } else {
        const nestedMissing = findMissingKeysRecursive(source[key], target[key]);
        if (Object.keys(nestedMissing).length > 0) {
          result[key] = nestedMissing;
        }
      }
    } else if (
      !target[key] ||
      target[key] === "" ||
      (typeof target[key] === "string" && target[key].includes("MISSING_TRANSLATION"))
    ) {
      result[key] = source[key];
    }
  }
  return result;
}

// target には訳があるが、前回スナップショット以降に en 値が変わったキーを収集
function findStaleKeysRecursive(source, target, prevSource, result = {}) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      const nested = findStaleKeysRecursive(
        source[key],
        target?.[key] || {},
        prevSource?.[key] || {}
      );
      if (Object.keys(nested).length > 0) result[key] = nested;
    } else {
      const isTranslated =
        target?.[key] &&
        typeof target[key] === 'string' &&
        !target[key].includes('MISSING_TRANSLATION') &&
        target[key] !== '';
      const prevVal = prevSource?.[key];
      // スナップショットに記録があり、かつ en 値が変わっていれば stale
      if (isTranslated && prevVal !== undefined && prevVal !== source[key]) {
        result[key] = source[key];
      }
    }
  }
  return result;
}

function deepMerge(target, source) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function sortObject(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return obj;
  const sorted = {};
  Object.keys(obj).sort().forEach(k => {
    sorted[k] = sortObject(obj[k]);
  });
  return sorted;
}

// ネストを含むリーフキー数を返す
function countLeafKeys(obj) {
  if (typeof obj !== 'object' || obj === null) return 1;
  return Object.values(obj).reduce((sum, v) => sum + countLeafKeys(v), 0);
}

async function sync() {
  const snapshot = fs.existsSync(snapshotPath)
    ? JSON.parse(fs.readFileSync(snapshotPath, 'utf8'))
    : {};

  for (const ns of namespaces) {
    const sourcePath = path.join(localesDir, sourceLang, `${ns}.json`);
    if (!fs.existsSync(sourcePath)) continue;

    const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
    const nsSnapshot = snapshot[ns] || {};

    for (const targetLang of targetLangs) {
      const targetPath = path.join(localesDir, targetLang, `${ns}.json`);
      let targetData = fs.existsSync(targetPath)
        ? JSON.parse(fs.readFileSync(targetPath, 'utf8'))
        : {};

      const missingKeys = findMissingKeysRecursive(sourceData, targetData);
      const staleKeys = findStaleKeysRecursive(sourceData, targetData, nsSnapshot);
      // API キーがない場合、stale（en 変更に伴う再翻訳）を実行すると既存の正常な訳を
      // [MISSING_TRANSLATION] プレースホルダーで上書きしてしまう。
      // en と同時に ja/pt を手動更新するワークフローを壊さないよう、missing のみ扱う
      const includeStale = Boolean(API_KEY);
      const keysToTranslate = includeStale
        ? deepMerge({ ...missingKeys }, staleKeys)
        : { ...missingKeys };

      const skippedStale = includeStale ? 0 : countLeafKeys(staleKeys);
      if (skippedStale > 0) {
        console.log(
          `[${ns}] ${targetLang}: ${skippedStale} stale keys detected (en changed) but no API key — existing translations kept.`
        );
      }

      const missingCount = countLeafKeys(missingKeys);
      const staleCount = includeStale ? countLeafKeys(staleKeys) : 0;
      const totalCount = missingCount + staleCount;

      if (totalCount > 0) {
        const parts = [];
        if (missingCount > 0) parts.push(`${missingCount} missing`);
        if (staleCount > 0) parts.push(`${staleCount} stale`);
        console.log(`\n[${ns}] Found ${parts.join(', ')} keys for ${targetLang}`);

        const translated = await translateKeys(keysToTranslate, targetLang);

        targetData = deepMerge(targetData, translated);

        const sortedData = sortObject(targetData);
        fs.writeFileSync(targetPath, JSON.stringify(sortedData, null, 2) + '\n', 'utf8');
        console.log(`  Successfully updated ${targetPath}`);
      } else {
        console.log(`[${ns}] ${targetLang} is up to date.`);
      }
    }

    // 全言語処理後にスナップショットを更新
    snapshot[ns] = sourceData;
  }

  fs.writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2) + '\n');
}

sync().catch(err => console.error(err));
