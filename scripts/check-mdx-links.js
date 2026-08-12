import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

/**
 * MDX Link Checker for Storybook
 *
 * Rules:
 * 1. Internal links (starting with ?path= or ./?path=) MUST be <a> tags (not markdown links).
 * 2. <a> tags with internal links MUST have target="_top" to avoid the iframe.html issue.
 * 3. href SHOULD consistently start with ./?path= for clarity.
 * 4. リンク先の docs ID が実在すること（到達性）。
 *
 * ルール 4 を足した理由（T154・2026-08-12）:
 * 1〜3 は**書式しか見ていなかった**ので、`target="_top"` が付いた完璧な書式の
 * リンクが存在しないページを指していても緑だった。実際に 12 か所（5 種類の ID）が
 * 死んでいた。原因はどれも `<Meta title>` の改題にリンク側が追随しないこと
 * （`Architecture/` → `Standardization/`、`Foundation/` → `Components/`）。
 *
 * 正解の ID は **ソースから導く**（`storybook-static/index.json` は読まない）。
 * ローカルの索引は古いビルドのままになりうるので、それを正とすると
 * 「ストーリーを消した直後のローカルだけ緑」という既知の型を踏む。
 * 導出が正しいことは索引と突き合わせて確認済み ── docs ID 287 件が両方向とも
 * 過不足ゼロで一致した（2026-08-12）。docs ページを作るのは MDX だけで、
 * autodocs は使っていないため、MDX の `<Meta>` だけを見れば足りる。
 *
 * 到達性は**引数に関係なく常に全量で見る**。lint-staged は変更ファイルだけを
 * 渡すが、リンクを壊すのは「リンクを書いたファイル」ではなく
 * 「改題されたページ」なので、部分集合で見ると壊した本人が素通りする。
 */

const filesFromArgs = process.argv.slice(2).filter(f => f.endsWith('.mdx'));
const allFiles = [
  ...globSync('**/*.mdx', { posix: true, ignore: ['node_modules/**', 'dist/**'] }),
  ...globSync('public/locales/**/*.json', { posix: true })
];
const files = filesFromArgs.length > 0 ? filesFromArgs : allFiles;

let allPass = true;

/** Storybook (@storybook/csf) の sanitize と同じ規則で ID を作る。 */
const sanitize = (string) =>
  string
    .toLowerCase()
    .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

const titleOfStoriesFile = (file) => {
  if (!fs.existsSync(file)) return null;
  const match = fs.readFileSync(file, 'utf8').match(/title:\s*["'`]([^"'`]+)["'`]/);
  return match ? match[1] : null;
};

/** MDX の `<Meta>` から、実在する docs ページの ID を全部集める。 */
const collectDocsIds = () => {
  const ids = new Set();
  const unresolved = [];

  for (const file of globSync('{docs,stories}/**/*.mdx', { posix: true })) {
    const source = fs.readFileSync(file, 'utf8');

    const byTitle = source.match(/<Meta\s+title=["']([^"']+)["']/);
    if (byTitle) {
      ids.add(`${sanitize(byTitle[1])}--docs`);
      continue;
    }

    // `<Meta of={XStories} />` は import 元の stories ファイルの title を使う。
    const byOf = source.match(/<Meta\s+of=\{(\w+)\}/);
    if (!byOf) {
      unresolved.push(`${file}（<Meta> が読めない）`);
      continue;
    }
    const importMatch = source.match(
      new RegExp(`import\\s+\\*\\s+as\\s+${byOf[1]}\\s+from\\s+["']([^"']+)["']`)
    );
    if (!importMatch) {
      unresolved.push(`${file}（of={${byOf[1]}} の import が読めない）`);
      continue;
    }
    const base = path.join(path.dirname(file), importMatch[1]).replace(/\\/g, '/');
    const target = [`${base}.tsx`, `${base}.ts`].find(p => fs.existsSync(p));
    const title = target && titleOfStoriesFile(target);
    if (title) ids.add(`${sanitize(title)}--docs`);
    else unresolved.push(`${file}（of={${byOf[1]}} の title を解決できない）`);
  }

  return { ids, unresolved };
};

const { ids: validDocsIds, unresolved } = collectDocsIds();

// 読めなかった MDX を黙って捨てると、その分だけ「実在しない ID」を
// 実在すると誤判定するのではなく、実在する ID を壊れていると誤報告する。
// どちらにせよ数を出さないと信用できないので、必ず表に出す。
if (unresolved.length > 0) {
  console.log(`[WARN] <Meta> を解決できなかった MDX が ${unresolved.length} 件あります（その分 ID が欠けます）:`);
  unresolved.forEach(entry => console.log(`  - ${entry}`));
}

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const lineNum = index + 1;

    // Rule 1: Flag Markdown-style internal links
    // Match something like [label](?path=...) or [label](./?path=...)
    const markdownPathRegex = /\[[^\]]*\]\(\.?\?path=[^)]*\)/g;
    let match;
    while ((match = markdownPathRegex.exec(line)) !== null) {
      console.log(`[FAIL] ${file}:${lineNum} - Markdown link found: "${match[0]}". Please convert to <a href="..." target="_top"> to ensure correct navigation in Storybook Docs.`);
      allPass = false;
    }

    // Rule 2 & 3: Check <a> tags for internal links
    const aTagRegex = /<a\s+[^>]*href=["\\]*["']([^"'\\]+)["\\]*["'][^>]*>/g;
    while ((match = aTagRegex.exec(line)) !== null) {
      const href = match[1];
      const fullTag = match[0];
      
      if (href.includes('?path=')) {
        const hasTargetTop = /target=["\\]*["']_top["\\]*["']/.test(fullTag);
        if (!hasTargetTop) {
          console.log(`[FAIL] ${file}:${lineNum} - Internal link missing target="_top": "${fullTag}". This will cause a blank page (iframe.html issue).`);
          allPass = false;
        }
        
        // Should start with ./
        if (href.startsWith('?path=')) {
          // console.log(`[WARN] ${file}:${lineNum} - Internal link should start with "./" for consistency: "${href}"`);
          // We won't fail for this yet, but it's good practice.
        }
      }
    }
  });
});

// Rule 4: リンク先が実在するか（全量・引数を無視する。理由は冒頭のコメント）
let checkedLinks = 0;
let unreachable = 0;
const skippedShapes = [];

allFiles.forEach(file => {
  const lines = fs.readFileSync(file, 'utf8').split('\n');

  lines.forEach((line, index) => {
    const pathRegex = /\?path=\/(docs|story)\/([a-z0-9-]+)/g;
    let match;
    while ((match = pathRegex.exec(line)) !== null) {
      const [, kind, id] = match;

      // 現状 `/story/` 形式も `--docs` 以外の ID も 0 件。増えたら黙って
      // 通さずに数を出す（見ていないものを「見た」と言わないため）。
      if (kind !== 'docs' || !id.endsWith('--docs')) {
        skippedShapes.push(`${file}:${index + 1} - ${match[0]}`);
        continue;
      }

      checkedLinks++;
      if (!validDocsIds.has(id)) {
        console.log(`[FAIL] ${file}:${index + 1} - リンク先が存在しません: "${id}"。<Meta title> の改題にリンクが追随していない可能性があります。`);
        allPass = false;
        unreachable++;
      }
    }
  });
});

if (skippedShapes.length > 0) {
  console.log(`[WARN] 到達性を検査できない形式のリンクが ${skippedShapes.length} 件あります:`);
  skippedShapes.forEach(entry => console.log(`  - ${entry}`));
}

if (allPass) {
  console.log('✓ All MDX internal links are correctly formatted with target="_top".');
  console.log(`✓ リンク先も全部実在します（${checkedLinks} 本を ${validDocsIds.size} 件の docs ID と照合）。`);
  process.exit(0);
} else {
  if (unreachable > 0) {
    console.log(`\nリンク切れ ${unreachable} 件（${checkedLinks} 本中）。正しい ID は各 MDX の <Meta title> から作られます（小文字化し、記号を "-" にしたもの + "--docs"）。`);
  }
  console.log('\nFound link formatting errors in MDX files. Please fix them to ensure documentation works correctly in Storybook.');
  process.exit(1);
}
