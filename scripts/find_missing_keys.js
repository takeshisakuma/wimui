import fs from 'fs';
import path from 'path';

const locales = ['en', 'ja', 'pt'];
const basePath = 'public/locales';
const namespaces = fs.readdirSync(path.join(basePath, 'en'))
  .filter(file => file.endsWith('.json'))
  .map(file => file.replace('.json', ''));

function getAllKeysAndValues(obj, prefix = '') {
  let entries = {};
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(entries, getAllKeysAndValues(obj[key], fullKey));
    } else {
      entries[fullKey] = obj[key];
    }
  }
  return entries;
}

namespaces.forEach(ns => {
  const enPath = path.join(basePath, 'en', `${ns}.json`);
  if (!fs.existsSync(enPath)) return;
  
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const enEntries = getAllKeysAndValues(enData);
  const enKeys = Object.keys(enEntries);

  locales.slice(1).forEach(lang => {
    const langPath = path.join(basePath, lang, `${ns}.json`);
    if (!fs.existsSync(langPath)) return;

    const langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    const langEntries = getAllKeysAndValues(langData);

    const missing = enKeys.filter(key => !(key in langEntries));
    if (missing.length > 0) {
      console.log(`\n[${ns}] Missing keys in ${lang}:`);
      missing.forEach(key => console.log(` - ${key}`));
    }

    const empty = enKeys.filter(key => (key in langEntries) && (langEntries[key] === "" || langEntries[key]?.includes("MISSING_TRANSLATION")));
    if (empty.length > 0) {
      console.log(`\n[${ns}] Empty or missing values in ${lang}:`);
      empty.forEach(key => console.log(` - ${key}`));
    }
  });
});

