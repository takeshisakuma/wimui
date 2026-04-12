/**
 * scripts/check-mdx-hardcoded.js
 * 
 * MDXファイル内のテキスト直書き（i18n漏れ）を検知するスクリプト。
 */

import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const docsDir = './docs';

// 複数行にわたる可能性のある、完全に無視すべきパターン
const multiLineIgnorePatterns = [
  /<style[\s\S]*?<\/style>/g,           // Style blocks
  /import\s+[\s\S]*?from\s+['"].*?['"];?|import\s+['"].*?['"];?/g, // import文
  /```[\s\S]*?```/g,                    // コードブロック
  /\{(\s*\/\*[\s\S]*?\*\/\s*)\}/g       // MDXコメント { /* ... */ }
];

// 1行内で無視すべきパターン
const inlineIgnorePatterns = [
  /<T\s+.*?\/>/g,                       // 翻訳コンポーネント
  /`[^`]*`/g,                           // インラインコード
  /--[a-zA-Z0-9-]+/g,                   // CSS変数名 (--wim-...)
  /[a-zA-Z0-9]+=\{?['"].*?['"]\}?/g,     // JSX属性 (name="Small", duration={...} など)
  /https?:\/\/[^\s)]+/g,               // URL
  /\[([^\]]+)\]\([^)]+\)/g,             // Markdownリンク
  /---/g,                               // 区切り線
  /[#>\-\*\+0-9\.]+\s/g,                 // Markdownの記号
  /<[^>]+>/g,                           // 残ったHTML/JSXタグ
  /[ \t\n\r\(\)\[\]\{\}\\\/\|\^_%$@#&!?,:;."'-]+/g, // 記号と空白
];

// 除外ワード（技術用語やプロパティ名など、翻訳不要なもの）
const excludeWords = [
  'import', 'from', 'export', 'default', 'Meta', 'title', 'components', 'stories', 'docs',
  'name', 'value', 'shadow', 'color', 'tokenName', 'tokenValue', 'columns', 'duration', 'easing',
  'standard', 'instant', 'extra', 'fast', 'short', 'base', 'slow', 'entrance', 'exit', 'spring',
  'smooth', 'slower', 'slowest', 'circle', 'breathe', 'snap', 'sharp', 'gentle', 'opacity', 'disabled',
  'var', 'wim', 'inset', 'focus', 'ring', 'error', 'primary', 'secondary', 'ghost', 'white', 'black', 'InteractiveSwatch', 'ColorSwatch', 'TokenGrid', 'MotionSwatch', 'ShadowSwatch'
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 1. 複数行パターンを、行数を維持しつつ「安全な文字」に置換
  let processed = content;
  multiLineIgnorePatterns.forEach(pattern => {
    processed = processed.replace(pattern, (match) => {
      const newlines = (match.match(/\n/g) || []).length;
      return '\n'.repeat(newlines) + ' '.repeat(match.length - newlines);
    });
  });

  // 2. 行ごとに分割してインラインパターンを適用
  const lines = processed.split('\n');
  const originalLines = content.split('\n');
  const errors = [];

  lines.forEach((line, index) => {
    let lineCheck = line;
    inlineIgnorePatterns.forEach(pattern => {
      lineCheck = lineCheck.replace(pattern, ' ');
    });

    const leaks = lineCheck.match(/[a-zA-Z]{3,}/g);
    if (leaks) {
      const filteredLeaks = leaks.filter(word => !excludeWords.includes(word));
      if (filteredLeaks.length > 0) {
        // コメントアウト行の最終確認
        const originalLine = originalLines[index].trim();
        if (originalLine.startsWith('{/*') || originalLine.startsWith('//')) return;
        if (originalLine.startsWith('import ') || originalLine.startsWith('export ')) return;
        
        errors.push({ line: index + 1, content: originalLine });
      }
    }
  });

  if (errors.length > 0) {
    console.error(`\n✗ Hardcoded text detected in: ${filePath}`);
    errors.forEach(err => {
      console.error(`  L${err.line}: ${err.content}`);
    });
    return true;
  }
  return false;
}

const filesFromArgs = process.argv.slice(2).filter(f => f.endsWith('.mdx'));
const mdxFiles = filesFromArgs.length > 0 
  ? filesFromArgs 
  : globSync(`${docsDir}/**/*.mdx`, { posix: true });

let hasErrors = false;
console.log(filesFromArgs.length > 0 ? `Checking ${filesFromArgs.length} changed MDX file(s)...` : 'Checking all MDX files...');

mdxFiles.forEach(file => {
  if (checkFile(file)) hasErrors = true;
});

if (hasErrors) {
  console.error('\nTips: Use the <T k="key" ns="ns" /> component for documentation text.');
  process.exit(1);
} else {
  console.log('✓ No hardcoded text found in MDX files.');
  process.exit(0);
}
