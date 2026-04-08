import fs from 'fs';
import path from 'path';
import { parse } from 'react-docgen';
import { glob } from 'glob';

/**
 * デザイントークンの抽出
 */
function extractTokens(scssContent) {
  const tokenRegex = /--wim-[\w-]+/g;
  const matches = scssContent.match(tokenRegex) || [];
  return [...new Set(matches)].sort();
}

/**
 * Anatomy（構成要素）の修正。SCSSのクラス名から抽出
 */
function extractAnatomy(scssContent, componentName) {
  const kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  const anatomyRegex = new RegExp(`\\.wim-${kebabName}__([\\w-]+)`, 'g');
  const matches = [];
  let match;
  while ((match = anatomyRegex.exec(scssContent)) !== null) {
    if (!matches.includes(match[1])) {
      matches.push(match[1]);
    }
  }
  return matches.sort();
}

async function generate() {
  const components = await glob('src/components/**/[A-Z]*.tsx', { ignore: ['src/components/_internal/**', 'src/components/**/*.test.tsx'] });
  const data = {};

  for (const componentPath of components) {
    const componentName = path.basename(componentPath, '.tsx');
    const componentDir = path.dirname(componentPath);
    const scssPath = path.join(componentDir, `${componentName.toLowerCase()}.scss`);

    let tokens = [];
    let anatomy = [];

    if (fs.existsSync(scssPath)) {
      const scssContent = fs.readFileSync(scssPath, 'utf8');
      tokens = extractTokens(scssContent);
      anatomy = extractAnatomy(scssContent, componentName);
    }

    try {
      const tsxContent = fs.readFileSync(componentPath, 'utf8');
      const docgen = parse(tsxContent, {
        filename: componentPath,
      });
      
      data[componentName] = {
        name: componentName,
        tokens,
        anatomy,
        props: docgen[0]?.props || {}
      };
    } catch (e) {
      console.error(`Error parsing ${componentPath}:`, e.message);
      // Fallback if docgen fails
      data[componentName] = {
        name: componentName,
        tokens,
        anatomy,
        props: {}
      };
    }
  }

  fs.writeFileSync('src/data/docgen.json', JSON.stringify(data, null, 2));
  console.log('Generated src/data/docgen.json');
}

generate();
