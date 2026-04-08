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
 * Anatomy（構成要素）の抽出。SCSSのクラス名から抽出
 */
function extractAnatomy(scssContent, componentName) {
  const kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  
  // 従来の wim-{component}__part 形式
  const legacyRegex = new RegExp(`\\.wim-${kebabName}__([\\w-]+)`, 'g');
  // CSS Modules 形式（.partName）
  const moduleRegex = /^\s*\.([a-z][a-zA-Z0-9]+)/gm;
  
  const matches = new Set();
  let match;
  
  while ((match = legacyRegex.exec(scssContent)) !== null) {
    matches.add(match[1]);
  }
  
  // 共通の修飾子やルートクラスを除外
  const ignoredClasses = [
    'root', 'sm', 'md', 'lg', 'xl', 'xs', 
    'primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral',
    'solid', 'outline', 'subtle', 'ghost', 'iconOnly'
  ];
  
  while ((match = moduleRegex.exec(scssContent)) !== null) {
    const className = match[1];
    if (!ignoredClasses.includes(className)) {
      matches.add(className);
    }
  }
  
  return [...matches].sort();
}

async function generate() {
  const components = await glob('src/components/**/[A-Z]*.tsx', { ignore: ['src/components/_internal/**', 'src/components/**/*.test.tsx'] });
  const data = {};

  for (const componentPath of components) {
    const componentName = path.basename(componentPath, '.tsx');
    process.stdout.write(`Processing ${componentName}... `);
    const componentDir = path.dirname(componentPath);
    let scssPath = path.join(componentDir, `${componentName.toLowerCase()}.scss`);
    
    if (!fs.existsSync(scssPath)) {
      // CSS Modules 用のパスも確認
      scssPath = path.join(componentDir, `${componentName.toLowerCase()}.module.scss`);
    }

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
