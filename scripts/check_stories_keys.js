
import fs from 'fs';
import path from 'path';

// Load all English translations
const localesPath = path.resolve('public/locales/en');
const localeFiles = fs.readdirSync(localesPath).filter(f => f.endsWith('.json'));
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const allTranslations = new Set();

console.log('--- Loading Translations ---');
localeFiles.forEach(file => {
  const filePath = path.join(localesPath, file);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    getAllKeys(data).forEach(key => allTranslations.add(key));
  } catch (err) {
    console.error(`\n❌ ERROR parsing JSON: ${filePath}`);
    console.error(`   Message: ${err.message}`);
    process.exit(1); 
  }
});

// Find all story/docs files
const storiesPath = path.resolve('stories');
const docsPath = path.resolve('docs'); // Also check docs directory for MDX

function getFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    const subdirs = fs.readdirSync(dir);
    const files = subdirs.map((subdir) => {
        const res = path.resolve(dir, subdir);
        return fs.statSync(res).isDirectory() ? getFiles(res) : res;
    });
    return files.flat();
}

const targetFiles = [
  ...getFiles(storiesPath),
  ...getFiles(docsPath)
].filter(f => f.endsWith('.stories.tsx') || f.endsWith('.mdx'));

const missingKeys = new Set();
const keyToFiles = {};

console.log(`\n--- Scanning ${targetFiles.length} files ---`);

targetFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // 1. Capture the first string argument of t()
  const tMatches = content.matchAll(/\bt\s*\(\s*['"]([^'"]*?)['"]\s*[,)]/g);
  // 2. Capture k="..." in <T k="..." />
  const TMatches = content.matchAll(/<T\s+k\s*=\s*['"]([^'"]*?)['"]/g);
  // 3. Capture specific props used for translation keys (e.g., textKey, titleKey, descKey)
  const keyPropMatches = content.matchAll(/\b(text|title|desc|label|name)Key\s*=\s*['"]([^'"]*?)['"]/g);

  for (const match of tMatches) processMatch(match[1], file);
  for (const match of TMatches) processMatch(match[1], file);
  for (const match of keyPropMatches) processMatch(match[2], file);
});

// 3. Scan JSON data files (e.g. src/data/components.json)
const dataPath = path.resolve('src/data');
if (fs.existsSync(dataPath)) {
  const dataFiles = getFiles(dataPath).filter(f => f.endsWith('.json'));
  console.log(`\n--- Scanning ${dataFiles.length} data files ---`);
  
  dataFiles.forEach(file => {
    try {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      
      const findKeys = (obj) => {
        if (Array.isArray(obj)) {
          obj.forEach(findKeys);
        } else if (typeof obj === 'object' && obj !== null) {
          for (const k in obj) {
            if (k.endsWith('Key') && typeof obj[k] === 'string') {
              processMatch(obj[k], file);
            }
            findKeys(obj[k]);
          }
        }
      };
      
      findKeys(data);
    } catch (err) {
      console.error(`\n❌ ERROR parsing JSON: ${file}`);
    }
  });
}

function processMatch(key, sourceFile) {
  // Skip keys with interpolation or complex logic
  if (!key || key.includes('${') || key.includes('`')) return;
  
  // Handle namespaces (e.g., "components:...")
  let baseKey = key;
  if (key.includes(':')) {
    baseKey = key.split(':')[1];
  }

  // Check if key exists in any translation file
  if (!allTranslations.has(baseKey)) {
    missingKeys.add(key);
    if (!keyToFiles[key]) keyToFiles[key] = [];
    keyToFiles[key].push(path.relative(process.cwd(), sourceFile || "unknown"));
  }
}

if (missingKeys.size > 0) {
  console.log('\n❌ Missing keys found:');
  missingKeys.forEach(key => {
    console.log(`\nKey: ${key}`);
    console.log(`Files: ${[...new Set(keyToFiles[key])].join(', ')}`);
  });
  process.exit(1);
} else {
  console.log('\n✅ No missing keys found.');
}
