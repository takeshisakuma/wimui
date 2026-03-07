import fs from 'fs';
import path from 'path';

const localesDir = './public/locales';
const languages = ['en', 'ja', 'pt'];

const docsPrefixes = [
  'doc', 'story', 'guide', 'philosophy', 'tone', 'voiceandtone', 
  'viz', 'pccs', 'auto', 'cat', 'chart', 'principle', 'practice'
];
const commonPrefixes = [
  'a11y', 'greeting', 'language', 'welcome', 'token', 'aria', 'label'
];

function getNamespace(key) {
  const prefix = key.split('_')[0].toLowerCase();
  
  if (docsPrefixes.includes(prefix)) return 'docs';
  if (commonPrefixes.includes(prefix)) return 'common';
  
  // Default to components if it has an underscore (likely component_key)
  if (key.includes('_')) return 'components';
  
  // Truly random keys go to common
  return 'common';
}

languages.forEach(lng => {
  const filePath = path.join(localesDir, lng, 'translation.json');
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }

  console.log(`Processing ${lng}...`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const namespaces = {
    common: {},
    docs: {},
    components: {}
  };

  Object.entries(data).forEach(([key, value]) => {
    const ns = getNamespace(key);
    namespaces[ns][key] = value;
  });

  // Write new files
  Object.entries(namespaces).forEach(([ns, content]) => {
    const nsPath = path.join(localesDir, lng, `${ns}.json`);
    fs.writeFileSync(nsPath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`  Created ${nsPath} (${Object.keys(content).length} keys)`);
  });

  // Note: We'll delete the original translation.json later if everything looks good.
  // fs.unlinkSync(filePath);
});
