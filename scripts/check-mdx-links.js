import fs from 'fs';
import { globSync } from 'glob';

/**
 * MDX Link Checker for Storybook
 * 
 * Rules:
 * 1. Internal links (starting with ?path= or ./?path=) MUST be <a> tags (not markdown links).
 * 2. <a> tags with internal links MUST have target="_top" to avoid the iframe.html issue.
 * 3. href SHOULD consistently start with ./?path= for clarity.
 */

const filesFromArgs = process.argv.slice(2).filter(f => f.endsWith('.mdx'));
const files = filesFromArgs.length > 0
  ? filesFromArgs
  : globSync('**/*.mdx', { 
      posix: true,
      ignore: ['node_modules/**', 'dist/**']
    });

let allPass = true;

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
    const aTagRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/g;
    while ((match = aTagRegex.exec(line)) !== null) {
      const href = match[1];
      const fullTag = match[0];
      
      if (href.includes('?path=')) {
        // Must have target="_top"
        if (!fullTag.includes('target="_top"') && !fullTag.includes("target='_top'")) {
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

if (allPass) {
  console.log('✓ All MDX internal links are correctly formatted with target="_top".');
  process.exit(0);
} else {
  console.log('\nFound link formatting errors in MDX files. Please fix them to ensure documentation works correctly in Storybook.');
  process.exit(1);
}
