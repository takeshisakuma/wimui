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
    console.warn('  [Skip] GOOGLE_GENERATIVE_AI_API_KEY not found in .env. Using placeholders.');
    const mocked = {};
    Object.keys(keysAndValues).forEach(k => {
      mocked[k] = `[MISSING_TRANSLATION: ${targetLang}] ${keysAndValues[k]}`;
    });
    return mocked;
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

      const missingKeys = {};
      Object.keys(sourceData).forEach(key => {
        if (!targetData[key]) {
          missingKeys[key] = sourceData[key];
        }
      });

      const missingCount = Object.keys(missingKeys).length;
      if (missingCount > 0) {
        console.log(`\n[${ns}] Found ${missingCount} missing keys for ${targetLang}`);
        
        // Batch translation if needed, but for now just translate all together
        const translated = await translateKeys(missingKeys, targetLang);
        
        // Merge
        targetData = { ...targetData, ...translated };
        
        // Sort keys alphabetically to keep it clean
        const sortedData = {};
        Object.keys(targetData).sort().forEach(k => {
          sortedData[k] = targetData[k];
        });

        fs.writeFileSync(targetPath, JSON.stringify(sortedData, null, 2), 'utf8');
        console.log(`  Successfully updated ${targetPath}`);
      } else {
        console.log(`[${ns}] ${targetLang} is up to date.`);
      }
    }
  }
}

sync().catch(err => console.error(err));
