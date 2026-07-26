import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parse, builtinResolvers } from 'react-docgen';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Bump this when parsing logic changes to force a full cache invalidation
const CACHE_VERSION = 7;

// FindAll: JSX を返す通常のコンポーネントを検出
// FindAnnotated: createPortal 返しなど JSX と認識されない定義を JSDoc の @component 注釈で検出
function createResolver() {
  return new builtinResolvers.ChainResolver(
    [
      new builtinResolvers.FindAllDefinitionsResolver(),
      new builtinResolvers.FindAnnotatedDefinitionsResolver(),
    ],
    { chainingLogic: builtinResolvers.ChainResolver.Logic.ALL },
  );
}

// react-docgen はファイルを跨いだ型参照（React.ComponentProps<typeof Input> や
// Omit<BoxProps, "as"> & {...} の交差型）を解決できないことがあるため、
// 継承元コンポーネントの props をマージする。継承関係は原則 detectInheritance() が
// ソースコードから自動検出するので、宣言的な型エイリアス
// （type XProps = Omit<YProps, "..."> & {...} 等）で書かれていれば登録不要。
// この手書きマップは自動検出できない複雑ケース（コンポーネント引数のインライン型注釈、
// 2段階の型参照など）専用で、自動検出より優先される。
const CROSS_FILE_PROPS = {
  // (props: React.ComponentProps<typeof Input>) のインライン引数型
  SearchInput: { from: 'Input' },
  ColorInput: { from: 'Input' },
  // type PasswordInputProps = ComponentProps<typeof Input> を引数側で Omit する2段構え
  PasswordInput: {
    from: 'Input',
    omit: ['type', 'rightIcon', 'onRightIconClick', 'showPasswordToggle', 'placeholder'],
  },
};

// ソースコードから props 型の継承関係を自動検出する。
// 対応パターン（いずれも type エイリアス宣言。X が docgen エントリ名と一致すること）:
//   type XProps = Omit<YProps, "a" | "b"> & {...}   → X は Y を継承（a, b を除外）
//   type XProps = YProps & {...}                    → X は Y を継承
//   type XProps = React.ComponentProps<typeof Y>    → X は Y を継承
// 返り値: { X: { from: 'Y', omit: [...] }, ... }
function detectInheritance(tsxContent) {
  const map = {};
  // Omit<YProps, "..."> 形式
  for (const m of tsxContent.matchAll(
    /type\s+(\w+?)Props\s*=\s*Omit<\s*(\w+?)Props\s*,([^>]*)>/g,
  )) {
    const omit = [...m[3].matchAll(/"([^"]+)"/g)].map((q) => q[1]);
    if (m[1] !== m[2]) map[m[1]] = { from: m[2], omit };
  }
  // YProps & {...} 形式（Omit 形式が既に登録済みなら上書きしない）
  for (const m of tsxContent.matchAll(/type\s+(\w+?)Props\s*=\s*(\w+?)Props\s*&/g)) {
    if (m[1] !== m[2] && !map[m[1]]) map[m[1]] = { from: m[2], omit: [] };
  }
  // React.ComponentProps<typeof Y> 形式
  for (const m of tsxContent.matchAll(
    /type\s+(\w+?)Props\s*=\s*(?:React\.)?ComponentProps(?:WithoutRef)?<typeof\s+(\w+)>/g,
  )) {
    if (m[1] !== m[2] && !map[m[1]]) map[m[1]] = { from: m[2], omit: [] };
  }
  return map;
}

function applyCrossFileProps(categoryData, lookup) {
  const out = {};
  for (const [name, entry] of Object.entries(categoryData)) {
    // 手書きマップ > 自動検出（entry.inherits）
    const alias = CROSS_FILE_PROPS[name] ?? entry.inherits;
    const source = alias ? lookup[alias.from] : null;
    if (source && Object.keys(source.props ?? {}).length > 0) {
      const inherited = { ...(source.props ?? {}) };
      for (const omitted of alias.omit ?? []) delete inherited[omitted];
      const own = entry.props ?? {};
      // 自前 props を先頭・優先にしつつ継承分を追加する
      out[name] = { ...entry, props: { ...own, ...inherited, ...own } };
    } else {
      // 自動検出の継承元が lookup にない場合は黙ってスキップする
      // （UseCalendarProps のようなコンポーネント以外の型が正当に該当するため）
      out[name] = entry;
    }
  }
  return out;
}

// Anatomy の動的フィルタ用に、抽出済み props から修飾子候補を収集する。
// - boolean 型の prop 名（bordered, hoverable 等）→ 同名クラスは状態修飾子
// - 文字列リテラル union の値（"elevated" | "flat" 等）→ 同名クラスはバリアント修飾子
// label（ReactNode 型）のような構造パーツと同名の prop は boolean でないため除外されない
function collectModifierFilters(entries) {
  const names = new Set();
  const values = new Set();
  for (const e of entries) {
    for (const [propName, def] of Object.entries(e.props ?? {})) {
      const t = def.tsType;
      if (!t) continue;
      if (t.name === 'boolean') names.add(propName);
      if (t.name === 'union' && Array.isArray(t.elements)) {
        for (const el of t.elements) {
          if (el.name === 'literal' && typeof el.value === 'string') {
            values.add(el.value.replace(/^["']|["']$/g, ''));
          } else if (typeof el.raw === 'string' && /^["'].*["']$/.test(el.raw)) {
            values.add(el.raw.slice(1, -1));
          }
        }
      }
    }
  }
  return { names, values };
}

/**
 * react-docgen の解析結果を docgen エントリへ変換する。
 * - 同名の定義が複数ある場合（Inner に displayName を付けた上で薄い Compound を
 *   同名で公開するパターン等）は props を持つ方を優先する
 * - 公開名 X の props が空で同一ファイルに XInner がある場合、XInner の props を
 *   採用する（Compound ラッパーは型注釈経由のため props を抽出できない）
 */
function toDocgenEntries(found, componentName, tokens, anatomy, tsxContent) {
  const inheritance = detectInheritance(tsxContent ?? '');
  const byName = new Map();
  for (const c of found) {
    const name = c.displayName || componentName;
    if (name.startsWith('_')) continue;
    const entry = { name, tokens, anatomy: anatomy.parts, anatomyStyle: anatomy.style, props: c.props || {} };
    if (inheritance[name]) entry.inherits = inheritance[name];
    const prev = byName.get(name);
    if (!prev || (Object.keys(prev.props).length === 0 && Object.keys(entry.props).length > 0)) {
      byName.set(name, entry);
    }
  }
  for (const entry of byName.values()) {
    if (Object.keys(entry.props).length === 0) {
      const inner = byName.get(`${entry.name}Inner`);
      if (inner && Object.keys(inner.props).length > 0) {
        entry.props = inner.props;
      }
    }
  }
  // XRoot / XInner しか抽出されない合成パターン
  // （export const X = XRoot as XComponent 等、公開名の定義を docgen が検出できない）
  // では公開名 X のエントリを複製して補完する
  for (const suffix of ['Root', 'Inner']) {
    for (const [name, entry] of [...byName.entries()]) {
      if (!name.endsWith(suffix)) continue;
      const publicName = name.slice(0, -suffix.length);
      if (publicName && !byName.has(publicName)) {
        byName.set(publicName, { ...entry, name: publicName });
      }
    }
  }
  // ファイル名と同名のエントリがない場合（ChatUI.tsx が Chat* 群のみを定義する等、
  // 関連コンポーネント群をまとめたファイル）は、MDX が Anatomy / Tokens / Test
  // セクションでファイル名を参照できるようエントリを補完する
  if (!byName.has(componentName)) {
    byName.set(componentName, { name: componentName, tokens, anatomy: anatomy.parts, anatomyStyle: anatomy.style, props: {} });
  }
  // CSS Modules の anatomy から、props 情報に基づく修飾子クラスを除外する
  if (anatomy.style === 'module' && anatomy.parts.length > 0) {
    const { names, values } = collectModifierFilters([...byName.values()]);
    const filtered = anatomy.parts.filter((p) => !names.has(p) && !values.has(p));
    for (const entry of byName.values()) entry.anatomy = filtered;
  }
  return [...byName.values()];
}

// SCSS ファイルはコンポーネント名の小文字連結（button.scss）と
// kebab-case（date-picker.module.scss、RULES.md の規約）の両方が存在するため、
// 候補をすべて探索する。見つからなければ null
function resolveScssPath(componentDir, componentName) {
  const lower = componentName.toLowerCase();
  const kebab = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  for (const base of lower === kebab ? [lower] : [lower, kebab]) {
    for (const ext of ['.scss', '.module.scss']) {
      const candidate = path.join(componentDir, `${base}${ext}`);
      if (fs.existsSync(candidate)) return candidate;
    }
  }
  return null;
}

function extractTokens(scssContent) {
  const tokenRegex = /--wim-[\w-]+/g;
  const matches = scssContent.match(tokenRegex) || [];
  return [...new Set(matches)].sort();
}

// Anatomy 抽出から除外する共通修飾子クラス（RULES.md の Anatomy 仕様）。
// 構成要素（構造パーツ）ではなく、props の値に対応する見た目・状態の切り替えクラス
const ANATOMY_MODIFIER_CLASSES = new Set([
  'root',
  // サイズ修飾子
  'xs', 'sm', 'md', 'lg', 'xl',
  // 色・意図修飾子
  'default', 'primary', 'secondary', 'success', 'warning', 'error', 'info',
  'neutral', 'destructive', 'positive',
  // バリアント修飾子
  'solid', 'outline', 'ghost', 'subtle',
  // 状態・レイアウト修飾子
  'active', 'disabled', 'loading', 'checked', 'selected', 'open', 'closed',
  'fullWidth', 'full-width', 'inline', 'vertical', 'horizontal',
]);

// Anatomy（構成要素）を SCSS から抽出する。
// - 旧式グローバルクラス（.wim-<kebab>__<part>）があればそれを優先（style: 'global'）
// - CSS Modules（*.module.scss）は .root と共通修飾子を除いたユニークなクラス名を
//   構成要素として抽出する（style: 'module'。クラス名はビルド時にハッシュ化される）
// 返り値: { style: 'global' | 'module', parts: string[] }
function extractAnatomy(scssContent, componentName, isModule) {
  const kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  const anatomyRegex = new RegExp(`\\.wim-${kebabName}__([\\w-]+)`, 'g');
  const legacy = [];
  let match;
  while ((match = anatomyRegex.exec(scssContent)) !== null) {
    if (!legacy.includes(match[1])) legacy.push(match[1]);
  }
  if (legacy.length > 0 || !isModule) {
    return { style: 'global', parts: legacy.sort() };
  }

  const parts = new Set();
  for (const m of scssContent.matchAll(/(?<![\w-])\.(-?[a-zA-Z_][\w-]*)/g)) {
    const cls = m[1];
    if (ANATOMY_MODIFIER_CLASSES.has(cls)) continue;
    if (cls.startsWith('wim-')) continue; // :global(.wim-*) の安定オーバーライドポイント
    // padding-lg / radius-sm のような「プロパティ-サイズ値」合成修飾子を除外
    if (/^[a-z]+-(?:none|xs|sm|md|lg|xl)$/.test(cls)) continue;
    parts.add(cls);
  }
  return { style: 'module', parts: [...parts].sort() };
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

  const effectiveScss = resolveScssPath(componentDir, componentName);

  let tokens = [];
  let anatomy = { style: 'global', parts: [] };
  let scssContent = '';
  if (effectiveScss) {
    scssContent = fs.readFileSync(effectiveScss, 'utf8');
    tokens = extractTokens(scssContent);
    anatomy = extractAnatomy(scssContent, componentName, effectiveScss.endsWith('.module.scss'));
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
      resolver: createResolver(),
    });
    const found = Array.isArray(docgen) ? docgen : [docgen];
    parsedComponents = toDocgenEntries(found, componentName, tokens, anatomy, tsxContent);
  } catch {
    parsedComponents = [{ name: componentName, tokens, anatomy: anatomy.parts, anatomyStyle: anatomy.style, props: {} }];
  }

  return { contentHash, componentName, parsedComponents };
}

export async function generateDocgenData() {
  const rootDir = path.resolve(__dirname, '..');
  const dataDir = path.resolve(rootDir, 'src/data');
  const cacheFile = path.join(dataDir, '.docgen-cache.json');

  // _internal も対象に含める（BaseListItem.mdx など内部アーキテクチャの
  // ドキュメントページが Docgen を参照するため。カテゴリ名は "_internal" になる）
  const components = await glob('src/components/**/[A-Z]*.tsx', {
    cwd: rootDir,
    ignore: ['src/components/**/*.test.tsx'],
  });

  const cache = loadCache(cacheFile);
  let cacheUpdated = false;

  const categorizedData = {};
  const indexData = {};

  for (const componentRelPath of components) {
    // glob / path.relative が OS 依存の区切りを返すことがあるため POSIX に揃える
    const normalizedRel = componentRelPath.replace(/\\/g, '/');
    const componentName = path.basename(normalizedRel, '.tsx');
    const pathParts = normalizedRel.split('/');
    const category = pathParts[2];

    if (!categorizedData[category]) categorizedData[category] = {};

    const cached = cache[normalizedRel];

    // Fast path: hash files first to decide whether parsing is needed
    const componentPath = path.resolve(rootDir, normalizedRel);
    const componentDir = path.dirname(componentPath);
    const effectiveScss = resolveScssPath(componentDir, componentName);

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
    let anatomy = { style: 'global', parts: [] };
    if (effectiveScss) {
      tokens = extractTokens(scssContent);
      anatomy = extractAnatomy(scssContent, componentName, effectiveScss.endsWith('.module.scss'));
    }

    let parsedComponents;
    try {
      const docgen = parse(tsxContent, {
        filename: componentPath,
        resolver: createResolver(),
      });
      const found = Array.isArray(docgen) ? docgen : [docgen];
      parsedComponents = toDocgenEntries(found, componentName, tokens, anatomy, tsxContent);
    } catch {
      parsedComponents = [{ name: componentName, tokens, anatomy: anatomy.parts, anatomyStyle: anatomy.style, props: {} }];
    }

    cache[normalizedRel] = { contentHash, parsedComponents };
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

  // カテゴリ横断の継承解決用に全エントリの lookup を作る
  const lookup = {};
  for (const category of currentCategories) Object.assign(lookup, categorizedData[category]);

  for (const category of currentCategories) {
    const targetFile = path.join(dataDir, `docgen_${category}.json`);
    const content = JSON.stringify(applyCrossFileProps(categorizedData[category], lookup), null, 2);
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

    const effectiveScss = resolveScssPath(compDir, componentName);

    let tsxContent = '';
    let scssContent = '';
    try { tsxContent = fs.readFileSync(componentPath, 'utf8'); } catch { continue; }
    if (effectiveScss) scssContent = fs.readFileSync(effectiveScss, 'utf8');

    const contentHash = md5(tsxContent + scssContent);
    const cached = cache[componentRelPath];
    if (cached && cached.contentHash === contentHash) continue; // truly unchanged

    let tokens = [];
    let anatomy = { style: 'global', parts: [] };
    if (effectiveScss) {
      tokens = extractTokens(scssContent);
      anatomy = extractAnatomy(scssContent, componentName, effectiveScss.endsWith('.module.scss'));
    }

    let parsedComponents;
    try {
      const docgen = parse(tsxContent, {
        filename: componentPath,
        resolver: createResolver(),
      });
      const found = Array.isArray(docgen) ? docgen : [docgen];
      parsedComponents = toDocgenEntries(found, componentName, tokens, anatomy, tsxContent);
    } catch {
      parsedComponents = [{ name: componentName, tokens, anatomy: anatomy.parts, anatomyStyle: anatomy.style, props: {} }];
    }

    cache[componentRelPath] = { contentHash, parsedComponents };
    saveCache(cacheFile, cache);

    // Reload the full category from cache and rewrite only that file.
    // Normalize Windows backslashes so cache keys always match the category regex.
    const allForCategory = {};
    for (const [rawPath, entry] of Object.entries(cache)) {
      const relPath = rawPath.replace(/\\/g, '/');
      const m = relPath.match(/^src\/components\/([^/]+)\//);
      if (m && m[1] === category) {
        for (const comp of entry.parsedComponents) {
          allForCategory[comp.name] = comp;
        }
      }
    }

    const lookup = {};
    for (const cached of Object.values(cache)) {
      for (const comp of cached.parsedComponents) lookup[comp.name] = comp;
    }

    const targetFile = path.join(dataDir, `docgen_${category}.json`);
    const content = JSON.stringify(applyCrossFileProps(allForCategory, lookup), null, 2);
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
