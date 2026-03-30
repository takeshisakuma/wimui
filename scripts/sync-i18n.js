import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
const localesDir = './public/locales';
const sourceLang = 'en';
const targetLangs = ['ja', 'pt'];
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

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `
You are a professional translator for a UI component library (Design System).
Translate the following JSON object from English to ${targetLang === 'ja' ? 'Japanese' : 'Portuguese (Brazil)'}.
Maintain the same JSON structure. Keep keys exactly as they are.
Ensure the tone is consistent with a modern web application (e.g., professional yet approachable).

JSON to translate:
${JSON.stringify(keysAndValues, null, 2)}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
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

async function sync() {
  for (const ns of namespaces) {
    const sourcePath = path.join(localesDir, sourceLang, `${ns}.json`);
    if (!fs.existsSync(sourcePath)) continue;

    const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
    
    for (const targetLang of targetLangs) {
      const targetPath = path.join(localesDir, targetLang, `${ns}.json`);
      let targetData = fs.existsSync(targetPath) 
        ? JSON.parse(fs.readFileSync(targetPath, 'utf8')) 
        : {};

      function findMissingKeysRecursive(source, target, result = {}) {
        for (const key in source) {
          if (typeof source[key] === 'object' && source[key] !== null) {
            if (!target[key] || typeof target[key] !== 'object') {
              // If target doesn't have the object, we need the whole object or its children
              result[key] = source[key];
            } else {
              const nestedMissing = findMissingKeysRecursive(source[key], target[key]);
              if (Object.keys(nestedMissing).length > 0) {
                result[key] = nestedMissing;
              }
            }
          } else if (!target[key]) {
            result[key] = source[key];
          }
        }
        return result;
      }

      const missingKeys = findMissingKeysRecursive(sourceData, targetData);

      const missingCount = Object.keys(missingKeys).length;
      if (missingCount > 0) {
        console.log(`\n[${ns}] Found ${missingCount} missing keys for ${targetLang}`);
        
        // Batch translation if needed, but for now just translate all together
        const translated = await translateKeys(missingKeys, targetLang);
        
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
        
        // Merge
        targetData = deepMerge(targetData, translated);
        
        function sortObject(obj) {
          if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return obj;
          const sorted = {};
          Object.keys(obj).sort().forEach(k => {
            sorted[k] = sortObject(obj[k]);
          });
          return sorted;
        }

        const sortedData = sortObject(targetData);
        fs.writeFileSync(targetPath, JSON.stringify(sortedData, null, 2), 'utf8');
        console.log(`  Successfully updated ${targetPath}`);
      } else {
        console.log(`[${ns}] ${targetLang} is up to date.`);
      }
    }
  }
}

sync().catch(err => console.error(err));
