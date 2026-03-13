
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

// Load all English translations
const localesPath = 'c:\\Users\\facto\\Desktop\\github\\wimui\\public\\locales\\en';
const localeFiles = fs.readdirSync(localesPath).filter(f => f.endsWith('.json'));
const allTranslations = new Set();

localeFiles.forEach(file => {
  const data = JSON.parse(fs.readFileSync(path.join(localesPath, file), 'utf8'));
  Object.keys(data).forEach(key => allTranslations.add(key));
});

// Find all story files
const storiesPath = 'c:\\Users\\facto\\Desktop\\github\\wimui\\stories';
function getFiles(dir) {
    const subdirs = fs.readdirSync(dir);
    const files = subdirs.map((subdir) => {
        const res = path.resolve(dir, subdir);
        return fs.statSync(res).isDirectory() ? getFiles(res) : res;
    });
    return files.flat();
}
const storyFiles = getFiles(storiesPath).filter(f => f.endsWith('.stories.tsx'));

const missingKeys = new Set();
const keyToFiles = {};

storyFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Capture the first string argument of t()
  const matches = content.matchAll(/\bt\s*\(\s*['"]([^'"]*?)['"]\s*[,)]/g);
  for (const match of matches) {
    let key = match[1];
    // Skip keys with interpolation or complex logic
    if (key.includes('${') || key.includes('`')) continue;
    
    // Handle namespaces (e.g., "components:...")
    if (key.includes(':')) {
      key = key.split(':')[1];
    }

    // Check if key exists in any translation file
    if (!allTranslations.has(key)) {
      missingKeys.add(key);
      if (!keyToFiles[key]) keyToFiles[key] = [];
      keyToFiles[key].push(path.relative(storiesPath, file));
    }
  }
});

if (missingKeys.size > 0) {
  console.log('Missing keys found in stories:');
  missingKeys.forEach(key => {
    console.log(`\nKey: ${key}`);
    console.log(`Files: ${[...new Set(keyToFiles[key])].join(', ')}`);
  });
} else {
  console.log('No missing keys found in stories.');
}
