import fs from 'fs';
import path from 'path';

const COMPONENTS_BASE = 'src/components';
const INTERNAL_DIR = path.join(COMPONENTS_BASE, '_internal');
const DOCS_ONLY_COMPONENTS = new Set([
  'T', 'SourceCode', 'RefTable', 'Meta', 'Canvas', 'Controls',
  'PlatformIcons', 'colorSwatch', 'ContrastChecker',
  'Charts', // チャートカテゴリの概要ページ（src/components に実体なし）
]);

/**
 * src/components を2階層スキャンして実コンポーネント名のSetを返す。
 *
 * - カテゴリフォルダ（form/, feedback/ 等）: 自身に CompName.tsx がなければカテゴリと判断し、
 *   その子ディレクトリを対象にする。
 * - 直接コンポーネントフォルダ: 自身に CompName.tsx があればコンポーネントと判断する。
 * - _internal は除外する。
 */
function getComponentsFromDir() {
  const components = new Set();

  for (const entry of fs.readdirSync(COMPONENTS_BASE)) {
    if (entry === '_internal') continue;

    const entryPath = path.join(COMPONENTS_BASE, entry);
    const stats = fs.statSync(entryPath);

    if (!stats.isDirectory()) continue;

    // CompName/CompName.tsx があればコンポーネントフォルダ
    if (fs.existsSync(path.join(entryPath, `${entry}.tsx`))) {
      components.add(entry);
      continue;
    }

    // なければカテゴリフォルダとして子を走査
    for (const child of fs.readdirSync(entryPath)) {
      const childPath = path.join(entryPath, child);
      if (!fs.statSync(childPath).isDirectory()) continue;
      if (fs.existsSync(path.join(childPath, `${child}.tsx`))) {
        components.add(child);
      }
    }
  }

  return components;
}

/**
 * コンポーネント名が src/components 以下のどこかに存在するか確認する。
 * - _internal/CompName/ または _internal/CompName.tsx
 * - カテゴリフォルダ直下の CompName/ ディレクトリ
 * - コンポーネントフォルダ内のサブファイル (例: Calendar/RangeCalendar.tsx)
 */
function findComponentAnywhere(compName) {
  // _internal 内を確認
  const internalDir = path.join(INTERNAL_DIR, compName);
  const internalFile = path.join(INTERNAL_DIR, `${compName}.tsx`);
  if (fs.existsSync(internalDir) || fs.existsSync(internalFile)) return true;

  for (const entry of fs.readdirSync(COMPONENTS_BASE)) {
    if (entry === '_internal') continue;

    const entryPath = path.join(COMPONENTS_BASE, entry);
    if (!fs.statSync(entryPath).isDirectory()) continue;

    // 直接コンポーネントフォルダの場合はスキップ（getComponentsFromDir で処理済み）
    const isDirectComponent = fs.existsSync(path.join(entryPath, `${entry}.tsx`));
    if (isDirectComponent) continue;

    // カテゴリフォルダ内を確認
    const compDir = path.join(entryPath, compName);
    const compFile = path.join(entryPath, `${compName}.tsx`);
    if (fs.existsSync(compDir) || fs.existsSync(compFile)) return true;

    // コンポーネントフォルダ内のサブファイルを確認 (例: Calendar/RangeCalendar.tsx)
    for (const child of fs.readdirSync(entryPath)) {
      const childPath = path.join(entryPath, child);
      if (!fs.statSync(childPath).isDirectory()) continue;
      if (fs.existsSync(path.join(childPath, `${compName}.tsx`))) return true;
    }
  }

  return false;
}

// --- メイン処理 ---

const componentsInJson = new Set();
const componentsJson = JSON.parse(fs.readFileSync('src/data/components.json', 'utf8'));
componentsJson.forEach(cat => {
  cat.components.forEach(comp => {
    componentsInJson.add(comp.name);
  });
});

const componentsInDir = getComponentsFromDir();

console.log('--- Components in src/components but missing from components.json ---');
componentsInDir.forEach(comp => {
  if (!componentsInJson.has(comp)) {
    console.log(comp);
  }
});

console.log('\n--- Components in components.json but missing from src/components ---');
componentsInJson.forEach(comp => {
  if (DOCS_ONLY_COMPONENTS.has(comp)) return;
  if (componentsInDir.has(comp)) return;
  if (!findComponentAnywhere(comp)) {
    console.log(comp);
  }
});

/**
 * stories/ を2階層スキャンし、コンポーネント名 → ストーリーフォルダパスの
 * マップを構築する。
 * フラット構造 (stories/CompName/) とカテゴリ構造 (stories/cat/CompName/) の
 * 両方に対応する。
 */
function buildStoriesMap() {
  const map = new Map(); // compName → folderPath
  for (const entry of fs.readdirSync('stories')) {
    const entryPath = path.join('stories', entry);
    if (!fs.statSync(entryPath).isDirectory()) continue;

    // カテゴリフォルダ（中にさらにサブフォルダがある）
    const children = fs.readdirSync(entryPath).filter(c =>
      fs.statSync(path.join(entryPath, c)).isDirectory()
    );
    if (children.length > 0) {
      for (const child of children) {
        map.set(child, path.join(entryPath, child));
      }
    } else {
      // フラットなコンポーネントフォルダ
      map.set(entry, entryPath);
    }
  }
  return map;
}

const storiesMap = buildStoriesMap();

console.log('\n--- Components missing stories (.stories.[ts|tsx]) ---');
componentsInDir.forEach(comp => {
  const folder = storiesMap.get(comp);
  const found = folder && (
    fs.existsSync(path.join(folder, `${comp}.stories.tsx`)) ||
    fs.existsSync(path.join(folder, `${comp}.stories.ts`))
  );
  if (!found) console.log(comp);
});

console.log('\n--- Components missing MDX documentation (.mdx) ---');
componentsInDir.forEach(comp => {
  const folder = storiesMap.get(comp);
  const found = folder && fs.existsSync(path.join(folder, `${comp}.mdx`));
  if (!found) console.log(comp);
});
