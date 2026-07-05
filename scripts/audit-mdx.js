import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const requiredKeys = [
  'doc.design_intent_title',
  'doc.choice_matrix_title',
  'doc.anatomy_title',
  'doc.content_guidelines_title',
  'doc.motion_spec_title',
  'doc.a11y_spec_title',
  'doc.real_world_scenarios_title',
  'doc.best_practices_title',
  'doc.props_title',
  'doc.tokens_title',
  'doc.responsive_title',
  'doc.keyboard_nav_title',
  'doc.i18n_title',
  'doc.test_title'
];

const prohibitedPlaceholders = [
  'description...',
  'intent here...',
  'matrix here...',
  'guidelines here...',
  'spec here...',
  'scenarios here...',
  'practices here...',
  'info here...'
];


const componentFiles = globSync('stories/**/*.mdx', { posix: true });
const guideFiles = globSync('docs/**/*.mdx', { posix: true });

let allPass = true;

console.log('--- Auditing Component MDX Files ---');
componentFiles.forEach(file => {
  // Ignore MDX files that don't have a corresponding .stories.tsx (likely internal or guide-like)
  const dir = path.dirname(file);
  const baseName = path.basename(file, '.mdx');
  const storyFile = path.join(dir, `${baseName}.stories.tsx`);
  
  if (!fs.existsSync(storyFile)) {
    // console.log(`[SKIP] ${file} (No corresponding story file found)`);
    return;
  }

  const content = fs.readFileSync(file, 'utf8');
  const missing = requiredKeys.filter(k => {
    if (content.includes(k)) return false;
    
    // Docgen component generates these titles
    if (k === 'doc.anatomy_title' && (content.includes('section="anatomy"') || content.includes('componentName='))) return false;
    if (k === 'doc.tokens_title' && (content.includes('section="tokens"') || content.includes('componentName='))) return false;
    if (k === 'doc.test_title' && (content.includes('section="test"') || content.includes('componentName='))) return false;
    if (k === 'doc.props_title' && (content.includes('section="props"') || content.includes('componentName='))) return false;
    
    return true;
  });
  
  const foundPlaceholders = prohibitedPlaceholders.filter(p => content.includes(p));
  
  if (missing.length > 0 || foundPlaceholders.length > 0) {
    if (missing.length > 0) {
      console.log(`[FAIL] ${file} is missing: ${missing.join(', ')}`);
    }
    if (foundPlaceholders.length > 0) {
      console.log(`[FAIL] ${file} contains placeholders: ${foundPlaceholders.join(', ')}`);
    }
    allPass = false;
  }
});

console.log('\n--- Auditing Guide MDX Files ---');
guideFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Guides only need a title (h1) or Meta title
  if (!content.includes('# ') && !content.includes('<Meta title=')) {
    console.log(`[FAIL] ${file} is missing a title or Meta title.`);
    allPass = false;
  }
});

console.log('\n--- Auditing Docgen References ---');
// MDX 内の <Docgen componentName="X" ... /> が docgen データに実在するか検証する。
// 参照先が存在しないと Storybook 上では赤いエラーボックスが表示され、
// Props / Anatomy / Tokens / Test セクションが機能しない
{
  const docgenAll = {};
  const dataDir = 'src/data';
  if (fs.existsSync(dataDir)) {
    fs.readdirSync(dataDir)
      .filter(f => /^docgen_(?!index).+\.json$/.test(f))
      .forEach(f => {
        Object.assign(docgenAll, JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8')));
      });
  }
  if (Object.keys(docgenAll).length === 0) {
    console.log('[WARN] docgen data not found — run a build or storybook once to generate src/data/docgen_*.json');
  } else {
    componentFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      for (const m of content.matchAll(/componentName="([^"]+)"/g)) {
        if (!docgenAll[m[1]]) {
          console.log(`[FAIL] ${file} references <Docgen componentName="${m[1]}"> but no docgen entry exists (renders an error box in Storybook)`);
          allPass = false;
        }
      }
    });
  }
}

console.log('\n--- Auditing Markdown Format Rules ---');
// RULES.md「mdxの記述形式」: 表は <table>、リストは <ul><li> で記述する。
// Markdown 記法（`- 項目` / `| a | b |`）はスタイルが当たらないため禁止。
[...componentFiles, ...guideFiles].forEach(file => {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let inCodeBlock = false;
  lines.forEach((line, i) => {
    if (/^\s*```/.test(line)) {
      inCodeBlock = !inCodeBlock;
      return;
    }
    if (inCodeBlock) return;
    if (/^[-*] /.test(line)) {
      console.log(`[FAIL] ${file}:${i + 1} uses a Markdown list ("${line.trim().slice(0, 40)}..."). Use <ul><li> instead (RULES.md).`);
      allPass = false;
    }
    if (/^\|.*\|\s*$/.test(line)) {
      console.log(`[FAIL] ${file}:${i + 1} uses a Markdown table. Use <table> instead (RULES.md).`);
      allPass = false;
    }
  });
});

console.log('\n--- Auditing I18n File Governance ---');
const localeFiles = globSync('public/locales/en/*.json', { posix: true });
localeFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n').length;
  if (lines > 1000) {
    console.log(`[FAIL] ${file} exceeds 1000 lines (${lines} lines). Please split it into semantically named files.`);
    allPass = false;
  } else if (lines > 800) {
    console.log(`[WARN] ${file} is approaching 1000 lines (${lines} lines). Consider planning a split.`);
  }
});

if (allPass) {
  console.log('\n✓ All audits passed.');
} else {
  console.log('\n✗ Some audits failed.');
  process.exit(1);
}
