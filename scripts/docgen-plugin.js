import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'react-docgen';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function extractTokens(scssContent) {
  const tokenRegex = /--wim-[\w-]+/g;
  const matches = scssContent.match(tokenRegex) || [];
  return [...new Set(matches)].sort();
}

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

export async function generateDocgenData() {
  const rootDir = path.resolve(__dirname, '..');
  const targetFile = path.resolve(rootDir, 'src/data/docgen.json');
  const components = await glob('src/components/**/[A-Z]*.tsx', { 
    cwd: rootDir,
    ignore: ['src/components/_internal/**', 'src/components/**/*.test.tsx'] 
  });
  const data = {};

  for (const componentRelPath of components) {
    const componentPath = path.resolve(rootDir, componentRelPath);
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
      // console.error(`Error parsing ${componentPath}:`, e.message);
      data[componentName] = {
        name: componentName,
        tokens,
        anatomy,
        props: {}
      };
    }
  }

  const content = JSON.stringify(data, null, 2);
  
  // 内容が変わっていない場合は書き込まない
  if (fs.existsSync(targetFile)) {
    const currentContent = fs.readFileSync(targetFile, 'utf-8');
    if (currentContent === content) return;
  }

  fs.writeFileSync(targetFile, content);
  console.log(`[docgen-plugin] Generated ${path.relative(rootDir, targetFile)}`);
}

/**
 * Vite プラグイン
 */
export default function docgenPlugin() {
  return {
    name: 'docgen-plugin',
    async buildStart() {
      await generateDocgenData();
    },
    async handleHotUpdate({ file }) {
      // コンポーネントやSCSSが更新された場合に再生成
      if (file.includes('src/components') && (file.endsWith('.tsx') || file.endsWith('.scss'))) {
         await generateDocgenData();
      }
    }
  };
}
