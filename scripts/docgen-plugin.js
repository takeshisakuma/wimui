import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parse, builtinResolvers } from 'react-docgen';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Bump this when parsing logic changes to force a full cache invalidation
const CACHE_VERSION = 2;

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
    if (!matches.includes(match[1])) matches.push(match[1]);
  }
  return matches.sort();
}

function md5(content) {
  return crypto.createHash('md5').update(content).digest('hex');
}

function loadCache(cacheFile) {
  try {
    const raw = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    return raw.version === CACHE_VERSION ? (raw.entries ?? {}) : {};
  } catch {
    return {};
  }
}

function saveCache(cacheFile, entries) {
  fs.writeFileSync(
    cacheFile,
    JSON.stringify({ version: CACHE_VERSION, entries }, null, 2),
  );
}

/**
 * Parse a single component file and return the processed entries.
 * Returns null if the file cannot be read.
 */
function processComponent(rootDir, componentRelPath) {
  const componentPath = path.resolve(rootDir, componentRelPath);
  const componentName = path.basename(componentPath, '.tsx');
  const componentDir = path.dirname(componentPath);

  const scssPath = path.join(componentDir, `${componentName.toLowerCase()}.scss`);
  const moduleScssPath = path.join(componentDir, `${componentName.toLowerCase()}.module.scss`);
  const effectiveScss = fs.existsSync(scssPath)
    ? scssPath
    : fs.existsSync(moduleScssPath)
      ? moduleScssPath
      : null;

  let tokens = [];
  let anatomy = [];
  let scssContent = '';
  if (effectiveScss) {
    scssContent = fs.readFileSync(effectiveScss, 'utf8');
    tokens = extractTokens(scssContent);
    anatomy = extractAnatomy(scssContent, componentName);
  }

  let tsxContent;
  try {
    tsxContent = fs.readFileSync(componentPath, 'utf8');
  } catch {
    return null;
  }

  const contentHash = md5(tsxContent + scssContent);

  let parsedComponents;
  try {
    const docgen = parse(tsxContent, {
      filename: componentPath,
      resolver: new builtinResolvers.FindAllDefinitionsResolver(),
    });
    const found = Array.isArray(docgen) ? docgen : [docgen];
    parsedComponents = found
      .filter(c => !(c.displayName || componentName).startsWith('_'))
      .map(c => ({
        name: c.displayName || componentName,
        tokens,
        anatomy,
        props: c.props || {},
      }));
  } catch {
    parsedComponents = [{ name: componentName, tokens, anatomy, props: {} }];
  }

  return { contentHash, componentName, parsedComponents };
}

export async function generateDocgenData() {
  const rootDir = path.resolve(__dirname, '..');
  const dataDir = path.resolve(rootDir, 'src/data');
  const cacheFile = path.join(dataDir, '.docgen-cache.json');

  const components = await glob('src/components/**/[A-Z]*.tsx', {
    cwd: rootDir,
    ignore: ['src/components/_internal/**', 'src/components/**/*.test.tsx'],
  });

  const cache = loadCache(cacheFile);
  let cacheUpdated = false;

  const categorizedData = {};
  const indexData = {};

  for (const componentRelPath of components) {
    const componentName = path.basename(componentRelPath, '.tsx');
    const pathParts = componentRelPath.split(path.sep);
    const category = pathParts[2];

    if (!categorizedData[category]) categorizedData[category] = {};

    const cached = cache[componentRelPath];

    // Fast path: hash files first to decide whether parsing is needed
    const componentPath = path.resolve(rootDir, componentRelPath);
    const componentDir = path.dirname(componentPath);
    const scssPath = path.join(componentDir, `${componentName.toLowerCase()}.scss`);
    const moduleScssPath = path.join(componentDir, `${componentName.toLowerCase()}.module.scss`);
    const effectiveScss = fs.existsSync(scssPath)
      ? scssPath
      : fs.existsSync(moduleScssPath)
        ? moduleScssPath
        : null;

    let tsxContent = '';
    let scssContent = '';
    try {
      tsxContent = fs.readFileSync(componentPath, 'utf8');
    } catch {
      continue;
    }
    if (effectiveScss) scssContent = fs.readFileSync(effectiveScss, 'utf8');

    const contentHash = md5(tsxContent + scssContent);

    if (cached && cached.contentHash === contentHash) {
      // Cache hit — reuse stored parsed result
      for (const entry of cached.parsedComponents) {
        indexData[entry.name] = category;
        categorizedData[category][entry.name] = entry;
      }
      indexData[componentName] = category;
      continue;
    }

    // Cache miss — parse and store result
    let tokens = [];
    let anatomy = [];
    if (effectiveScss) {
      tokens = extractTokens(scssContent);
      anatomy = extractAnatomy(scssContent, componentName);
    }

    let parsedComponents;
    try {
      const docgen = parse(tsxContent, {
        filename: componentPath,
        resolver: new builtinResolvers.FindAllDefinitionsResolver(),
      });
      const found = Array.isArray(docgen) ? docgen : [docgen];
      parsedComponents = found
        .filter(c => !(c.displayName || componentName).startsWith('_'))
        .map(c => ({
          name: c.displayName || componentName,
          tokens,
          anatomy,
          props: c.props || {},
        }));
    } catch {
      parsedComponents = [{ name: componentName, tokens, anatomy, props: {} }];
    }

    cache[componentRelPath] = { contentHash, parsedComponents };
    cacheUpdated = true;

    for (const entry of parsedComponents) {
      indexData[entry.name] = category;
      categorizedData[category][entry.name] = entry;
    }
    indexData[componentName] = category;
  }

  // Persist cache if anything changed
  if (cacheUpdated) saveCache(cacheFile, cache);

  // Write index
  fs.writeFileSync(
    path.join(dataDir, 'docgen_index.json'),
    JSON.stringify(indexData, null, 2),
  );

  // Write per-category files (skip if content unchanged)
  const existingFiles = fs
    .readdirSync(dataDir)
    .filter(f => f.startsWith('docgen_') && f.endsWith('.json') && f !== 'docgen_index.json');
  const currentCategories = Object.keys(categorizedData);

  for (const category of currentCategories) {
    const targetFile = path.join(dataDir, `docgen_${category}.json`);
    const content = JSON.stringify(categorizedData[category], null, 2);
    if (fs.existsSync(targetFile) && fs.readFileSync(targetFile, 'utf-8') === content) continue;
    fs.writeFileSync(targetFile, content);
  }

  // Cleanup obsolete files
  for (const file of existingFiles) {
    const m = file.match(/docgen_(.+)\.json/);
    if (m && !currentCategories.includes(m[1])) {
      fs.unlinkSync(path.join(dataDir, file));
    }
  }

  // Remove legacy monolithic file
  const oldFile = path.join(dataDir, 'docgen.json');
  if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);

  const hitCount = components.length - Object.values(cache).filter(
    (_, i) => i < components.length
  ).length;
  console.log(
    `[docgen-plugin] done — ${cacheUpdated ? 'cache updated' : 'all from cache'}`,
  );
}

// In-memory store for surgical HMR updates
let _categorizedData = null;
let _indexData = null;

/**
 * Re-process only the single changed component and update the affected
 * category file without touching anything else.
 */
async function handleHotFile(file) {
  const rootDir = path.resolve(__dirname, '..');
  const dataDir = path.resolve(rootDir, 'src/data');
  const cacheFile = path.join(dataDir, '.docgen-cache.json');

  const rel = path.relative(rootDir, file).replace(/\\/g, '/');
  // Derive category from the changed file path
  const match = rel.match(/^src\/components\/([^/]+)\//);
  if (!match) return;
  const category = match[1];

  // Find the component TSX for this file (might be the .scss sibling)
  const compDir = path.dirname(file);
  const tsxFiles = fs.readdirSync(compDir).filter(
    f => /^[A-Z]/.test(f) && f.endsWith('.tsx') && !f.endsWith('.test.tsx'),
  );

  const cache = loadCache(cacheFile);

  for (const tsxFile of tsxFiles) {
    const componentPath = path.join(compDir, tsxFile);
    const componentRelPath = path
      .relative(rootDir, componentPath)
      .replace(/\\/g, '/');
    const componentName = path.basename(tsxFile, '.tsx');

    const scssPath = path.join(compDir, `${componentName.toLowerCase()}.scss`);
    const moduleScssPath = path.join(compDir, `${componentName.toLowerCase()}.module.scss`);
    const effectiveScss = fs.existsSync(scssPath)
      ? scssPath
      : fs.existsSync(moduleScssPath)
        ? moduleScssPath
        : null;

    let tsxContent = '';
    let scssContent = '';
    try { tsxContent = fs.readFileSync(componentPath, 'utf8'); } catch { continue; }
    if (effectiveScss) scssContent = fs.readFileSync(effectiveScss, 'utf8');

    const contentHash = md5(tsxContent + scssContent);
    const cached = cache[componentRelPath];
    if (cached && cached.contentHash === contentHash) continue; // truly unchanged

    let tokens = [];
    let anatomy = [];
    if (effectiveScss) {
      tokens = extractTokens(scssContent);
      anatomy = extractAnatomy(scssContent, componentName);
    }

    let parsedComponents;
    try {
      const docgen = parse(tsxContent, {
        filename: componentPath,
        resolver: new builtinResolvers.FindAllDefinitionsResolver(),
      });
      const found = Array.isArray(docgen) ? docgen : [docgen];
      parsedComponents = found
        .filter(c => !(c.displayName || componentName).startsWith('_'))
        .map(c => ({
          name: c.displayName || componentName,
          tokens,
          anatomy,
          props: c.props || {},
        }));
    } catch {
      parsedComponents = [{ name: componentName, tokens, anatomy, props: {} }];
    }

    cache[componentRelPath] = { contentHash, parsedComponents };
    saveCache(cacheFile, cache);

    // Reload the full category from cache and rewrite only that file
    const allForCategory = {};
    for (const [relPath, entry] of Object.entries(cache)) {
      const m = relPath.match(/^src\/components\/([^/]+)\//);
      if (m && m[1] === category) {
        for (const comp of entry.parsedComponents) {
          allForCategory[comp.name] = comp;
        }
      }
    }

    const targetFile = path.join(dataDir, `docgen_${category}.json`);
    const content = JSON.stringify(allForCategory, null, 2);
    const existing = fs.existsSync(targetFile) ? fs.readFileSync(targetFile, 'utf-8') : '';
    if (existing !== content) {
      fs.writeFileSync(targetFile, content);
      console.log(`[docgen-plugin] HMR updated: docgen_${category}.json`);
    }
  }
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
      if (file.includes('src/components') && (file.endsWith('.tsx') || file.endsWith('.scss'))) {
        await handleHotFile(file);
      }
    },
  };
}
