import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

// Required sections split by purpose:
//  - editorial (component-specific, hand-written): design_intent, choice_matrix,
//    real_world_scenarios, best_practices
//  - Docgen-generated: anatomy, props, tokens, test, i18n
//  - a11y-relevant (kept required for interactive components): a11y_spec, keyboard_nav
// Boilerplate/low-value sections (responsive, motion_spec, content_guidelines)
// are now OPTIONAL — they were near-identical filler across components.
const requiredKeys = [
  'doc.design_intent_title',
  'doc.choice_matrix_title',
  'doc.anatomy_title',
  'doc.a11y_spec_title',
  'doc.real_world_scenarios_title',
  'doc.best_practices_title',
  'doc.props_title',
  'doc.tokens_title',
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
    if (k === 'doc.i18n_title' && content.includes('section="i18n"')) return false;

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
  // Guides only need a title: a markdown/HTML heading, a `<Meta title=…>`, or a
  // `<Meta of={…}>` that inherits the title from the referenced story.
  const hasTitle =
    content.includes('# ') ||
    /<h1[\s>]/.test(content) ||
    content.includes('<Meta title=') ||
    /<Meta\s+of=\{/.test(content);
  if (!hasTitle) {
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

  // props 表に出る説明に Markdown の強調が混ざっていないか。
  //
  // Docgen はバックティックと改行しか組み立てない（`**` は解釈しない）ので、
  // 書くと**生のアスタリスクが表に出る**。ロケール側は check-i18n-quality.js が
  // 見ているが、翻訳キーが無いコンポーネントはソースの JSDoc がそのまま出るため、
  // そちらは誰も見ていなかった（実例: `Transition.enterPreset`）。
  //
  // 鳴らすのは**実際に表に出るものだけ**にする。翻訳キーがあればそちらが勝つし、
  // props 表を出していないコンポーネントの JSDoc は誰の目にも触れない。
  // 内部ユーティリティのコメントまで巻き込むと、読み手のいない文章を直すことになる。
  if (Object.keys(docgenAll).length > 0) {
    const translated = new Set();
    const enDir = 'public/locales/en';
    if (fs.existsSync(enDir)) {
      for (const f of fs.readdirSync(enDir).filter(x => x.endsWith('.json'))) {
        const flat = (o, pre = '') => {
          for (const k of Object.keys(o)) {
            const v = o[k];
            const q = pre ? `${pre}.${k}` : k;
            if (v && typeof v === 'object') flat(v, q);
            else translated.add(q);
          }
        };
        flat(JSON.parse(fs.readFileSync(path.join(enDir, f), 'utf8')));
      }
    }

    const rendered = new Set();
    [...componentFiles, ...guideFiles].forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      for (const m of content.matchAll(/<Docgen[^>]*\/>/g)) {
        if (!/section="props"/.test(m[0])) continue;
        const name = m[0].match(/componentName="([^"]+)"/);
        if (name) rendered.add(name[1]);
      }
    });

    for (const comp of rendered) {
      const props = docgenAll[comp] && docgenAll[comp].props;
      if (!props) continue;
      const compact = comp.replace(/\./g, '');
      const base = compact.charAt(0).toLowerCase() + compact.slice(1);
      for (const [propName, info] of Object.entries(props)) {
        const desc = info && info.description;
        if (typeof desc !== 'string' || !desc.includes('**')) continue;
        if (translated.has(`doc.${base}_prop_${propName}`)) continue;
        console.log(
          `[FAIL] ${comp}.${propName} の JSDoc に \`**\` があります。props 表には生のアスタリスクが出ます（強調は文の組み立てで表してください）`,
        );
        allPass = false;
      }
    }
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

console.log('\n--- Auditing Table Structure ---');
// 1 列しかない <table> は表ではない。列が 1 本ならセル同士を突き合わせる軸が無く、
// 罫線で囲まれた箇条書きにしかならない（読み上げも「表」と宣言してから意味の無い
// 行を読む）。列が 1 本なら <ul><li> に、見出し付きで 1 行しか無いなら隣の節と
// 同じ列構成に揃えること。
//
// 入れ子の表が実在するので（docs/NumericInputStandardization.mdx）、深さを持って
// 走査し、セルは「いま開いている一番内側の表」に数える。
const scanTables = content => {
  const found = [];
  const stack = [];
  for (const m of content.matchAll(/<table[\s>]|<\/table>|<tr[\s>]|<\/tr>|<t[dh][\s>]/g)) {
    const tag = m[0];
    if (tag.startsWith('<table')) {
      stack.push({ line: content.slice(0, m.index).split('\n').length, rows: 0, cells: 0, maxCells: 0 });
      continue;
    }
    const top = stack[stack.length - 1];
    if (!top) continue;
    if (tag === '</table>') {
      found.push(stack.pop());
    } else if (tag.startsWith('<tr')) {
      top.rows += 1;
      top.cells = 0;
    } else if (tag === '</tr>') {
      top.cells = 0;
    } else {
      top.cells += 1;
      top.maxCells = Math.max(top.maxCells, top.cells);
    }
  }
  return found;
};

[...componentFiles, ...guideFiles].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  scanTables(content).forEach(t => {
    if (t.maxCells <= 1) {
      console.log(`[FAIL] ${file}:${t.line} has a single-column <table> (${t.rows} rows). A one-column table is a list — use <ul><li>, or give it the same columns as its sibling tables.`);
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
