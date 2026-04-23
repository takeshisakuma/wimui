import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, builtinResolvers } from 'react-docgen';
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
  const dataDir = path.resolve(rootDir, 'src/data');
  const components = await glob('src/components/**/[A-Z]*.tsx', { 
    cwd: rootDir,
    ignore: ['src/components/_internal/**', 'src/components/**/*.test.tsx'] 
  });
  
  const categorizedData = {};
  const indexData = {};

  for (const componentRelPath of components) {
    const componentPath = path.resolve(rootDir, componentRelPath);
    const componentName = path.basename(componentPath, '.tsx');
    const componentDir = path.dirname(componentPath);
    
    // Extract category from path: src/components/<category>/<componentName>/...
    const pathParts = componentRelPath.split(path.sep);
    const category = pathParts[2]; // [src, components, category, ...]
    
    if (!categorizedData[category]) categorizedData[category] = {};
    indexData[componentName] = category;

    const scssPath = path.join(componentDir, `${componentName.toLowerCase()}.scss`);
    const moduleScssPath = path.join(componentDir, `${componentName.toLowerCase()}.module.scss`);

    let tokens = [];
    let anatomy = [];

    if (fs.existsSync(scssPath)) {
      const scssContent = fs.readFileSync(scssPath, 'utf8');
      tokens = extractTokens(scssContent);
      anatomy = extractAnatomy(scssContent, componentName);
    } else if (fs.existsSync(moduleScssPath)) {
      const scssContent = fs.readFileSync(moduleScssPath, 'utf8');
      tokens = extractTokens(scssContent);
      anatomy = extractAnatomy(scssContent, componentName);
    }

    try {
      const tsxContent = fs.readFileSync(componentPath, 'utf8');
      // findAll: true to get all components in the file
      const docgen = parse(tsxContent, {
        filename: componentPath,
        resolver: new builtinResolvers.FindAllDefinitionsResolver(),
      });
      
      const foundComponents = Array.isArray(docgen) ? docgen : [docgen];
      
      for (const comp of foundComponents) {
        // Use displayName if it exists, otherwise fallback to filename
        const name = comp.displayName || componentName;
        
        // Skip internal components that might be picked up
        if (name.startsWith('_')) continue;
        
        indexData[name] = category;
        categorizedData[category][name] = {
          name: name,
          tokens,
          anatomy,
          props: comp.props || {}
        };
      }
    } catch (e) {
      // Fallback if parsing fails
      indexData[componentName] = category;
      categorizedData[category][componentName] = {
        name: componentName,
        tokens,
        anatomy,
        props: {}
      };
    }
  }

  // Write index
  fs.writeFileSync(path.join(dataDir, 'docgen_index.json'), JSON.stringify(indexData, null, 2));

  // Write category files and cleanup old ones
  const existingFiles = fs.readdirSync(dataDir).filter(f => f.startsWith('docgen_') && f.endsWith('.json') && f !== 'docgen_index.json');
  const currentCategories = Object.keys(categorizedData);

  for (const category of currentCategories) {
    const targetFile = path.join(dataDir, `docgen_${category}.json`);
    const content = JSON.stringify(categorizedData[category], null, 2);
    
    if (fs.existsSync(targetFile)) {
      if (fs.readFileSync(targetFile, 'utf-8') === content) continue;
    }
    fs.writeFileSync(targetFile, content);
  }

  // Cleanup obsolete files
  for (const file of existingFiles) {
    const categoryMatch = file.match(/docgen_(.+)\.json/);
    if (categoryMatch && !currentCategories.includes(categoryMatch[1])) {
      fs.unlinkSync(path.join(dataDir, file));
    }
  }

  // Remove old monolithic file if exists
  const oldFile = path.join(dataDir, 'docgen.json');
  if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);

  console.log(`[docgen-plugin] Generated split docgen data and index in src/data/`);
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
