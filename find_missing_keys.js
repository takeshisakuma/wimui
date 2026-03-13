import fs from 'fs';
import path from 'path';

const locales = ['en', 'ja', 'pt'];
const namespaces = [
  'common',
  'components',
  'docs_actions',
  'docs_display',
  'docs_guides',
  'docs_inputs',
  'docs_layout',
  'docs_navigation',
  'docs_overlay',
  'docs_stories'
];

const basePath = 'c:\\Users\\facto\\Desktop\\github\\wimui\\public\\locales';

namespaces.forEach(ns => {
  const enPath = path.join(basePath, 'en', `${ns}.json`);
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const enKeys = Object.keys(enData);

  locales.slice(1).forEach(lang => {
    const langPath = path.join(basePath, lang, `${ns}.json`);
    const langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    const langKeys = new Set(Object.keys(langData));

    const missing = enKeys.filter(key => !langKeys.has(key));
    if (missing.length > 0) {
      console.log(`\n[${ns}] Missing keys in ${lang}:`);
      missing.forEach(key => console.log(` - ${key}`));
    }

    const empty = enKeys.filter(key => langKeys.has(key) && (langData[key] === "" || langData[key].includes("MISSING_TRANSLATION")));
    if (empty.length > 0) {
      console.log(`\n[${ns}] Empty or missing values in ${lang}:`);
      empty.forEach(key => console.log(` - ${key}`));
    }
  });
});

