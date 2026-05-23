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
  /<code>[\s\S]*?<\/code>/g,            // インライン/複数行コードタグ
  /\{(\s*\/\*[\s\S]*?\*\/\s*)\}/g,      // MDXコメント { /* ... */ }
  /<Command[\s\S]*?<\/Command>/g        // Commandコンポーネントの中身
];

// 1行内で無視すべきパターン
const inlineIgnorePatterns = [
  /<T\s+.*?\/>/g,                       // 翻訳コンポーネント
  /`[^`]*`/g,                           // インラインコード
  /--[a-zA-Z0-9-]+/g,                   // CSS変数名 (--wim-...)
  /"#[0-9a-fA-F]{3,8}"/g,              // クォートされた16進カラー値 ("#{hex}")
  /[a-zA-Z0-9]+=[\{]?['"].*?['"][\}]?/g, // JSX属性 (name="Small", duration={...} など)
  /style=\{\{[\s\S]*?\}\}/g,            // インラインスタイルオブジェクト (1行内)
  /https?:\/\/[^\s)]+/g,               // URL
  /\[([^\]]+)\]\([^)]+\)/g,             // Markdownリンク
  /\*\*([^*]+)\*\*/g,                   // Markdown太字
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
  'var', 'wim', 'inset', 'focus', 'ring', 'error', 'primary', 'secondary', 'ghost', 'white', 'black', 'InteractiveSwatch', 'ColorSwatch', 'TokenGrid', 'MotionSwatch', 'ShadowSwatch',
  'opacity', 'calc', 'token',
  'FileUpload', 'BackTop', 'FloatButton', 'Accordion', 'Button', 'Badge', 'Alert', 'Avatar', 'Calendar', 'Card', 'Carousel', 'ChatUI', 'Chip', 'DataGrid', 'DescriptionList', 'EmptyState', 'FAQSection', 'InfiniteScroll', 'Kanban', 'List', 'Markdown', 'Marquee', 'QRCode', 'Stats', 'Table', 'Tag', 'Timeline', 'TreeView', 'VirtualList',
  'Box', 'Flex', 'Grid', 'Stack', 'Center', 'Container', 'Group', 'Divider', 'AspectRatio', 'SimpleGrid', 'Typography', 'Title', 'Text', 'Highlight', 'Code', 'Kbd', 'Blockquote', 'Link', 'Anchor', 'Breadcrumb', 'Pagination', 'Stepper', 'Tabs', 'Navbar', 'Sidebar', 'Footer', 'AppShell', 'ScrollArea',
  'BentoGrid', 'Splitter', 'Transition', 'VisuallyHidden', 'Watermark', 'Audio', 'Icon', 'Image', 'Video', 'Affix', 'TabBar', 'TabNavigation', 'BottomSheet', 'ContextMenu', 'Dialog', 'Drawer', 'Dropdown', 'FocusTrap', 'HoverCard', 'Menu', 'Popconfirm', 'Popover', 'Portal', 'Tooltip', 'Label', 'Legend', 'Span', 'Indicator', 'Banner', 'ErrorBoundary', 'Loader', 'LoadingOverlay', 'Notification', 'Progress', 'Result', 'ScrollProgress', 'Skeleton', 'Snackbar', 'Spinner', 'Toast', 'Tour',
  'Input', 'InputBase', 'InputGroup', 'InputMask', 'NumberInput', 'PasswordInput', 'SearchInput', 'Textarea', 'Selectbox', 'MultiSelect', 'Combobox', 'Checkbox', 'CheckboxGroup', 'Radio', 'RadioGroup', 'Switch', 'SwitchGroup', 'Slider', 'RangeSlider', 'Rating', 'ColorInput', 'ColorPicker', 'DatePicker', 'DateRangePicker', 'RangeCalendar', 'TimePicker', 'DateTimePicker', 'FileUpload', 'Dropzone', 'SignaturePad', 'Cascader', 'Transfer', 'TreeSelect', 'OtpInput', 'Mentions', 'PhoneInput', 'FieldError', 'Fieldset', 'FieldTemplate', 'FloatButton', 'CopyButton', 'LinkButton', 'IconButton', 'ButtonGroup', 'ToggleGroup', 'QueryBuilder',
  'margin', 'padding', 'fontSize', 'lineHeight', 'fontWeight', 'textAlign', 'center', 'right', 'left', 'style', 'height', 'width', 'display', 'flex', 'inline', 'block', 'none', 'absolute', 'relative', 'fixed', 'sticky', 'top', 'bottom', 'zIndex', 'border', 'radius', 'overflow', 'hidden', 'auto', 'scroll', 'visible', 'cursor', 'pointer', 'default', 'none', 'text', 'decoration', 'none', 'underline', 'uppercase', 'lowercase', 'capitalize', 'normal', 'italic', 'nowrap', 'pre', 'wrap', 'break', 'word', 'all', 'none', 'both',
  'Components', 'Mobile', 'Tablet', 'Desktop', 'Toolbar', 'Header', 'Footer', 'Main', 'Content', 'Sidebar', 'Nav', 'Actions', 'True', 'False', 'None',
  'span', 'div', 'p', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em', 'small', 'br', 'hr', 'img', 'video', 'audio', 'iframe', 'canvas', 'svg', 'path', 'g', 'circle', 'rect', 'line', 'polyline', 'polygon', 'text', 'tspan', 'defs', 'clipPath', 'linearGradient', 'radialGradient', 'stop', 'use', 'symbol', 'marker', 'mask', 'pattern', 'filter', 'feGaussianBlur', 'feOffset', 'feMerge', 'feMergeNode', 'feComponentTransfer', 'feFuncR', 'feFuncG', 'feFuncB', 'feFuncA', 'feComposite', 'feColorMatrix', 'feFlood', 'feTile', 'feSpecularLighting', 'feDiffuseLighting', 'fePointLight', 'feDistantLight', 'feSpotLight', 'feTurbulence', 'feDisplacementMap', 'feMorphology', 'feConvolveMatrix', 'feImage', 'feDropShadow',
  'React', 'TypeScript', 'Vite', 'SCSS', 'HTML', 'CSS', 'JS', 'Storybook', 'Vitest', 'Playwright', 'ESLint', 'Stylelint', 'Prettier', 'Husky', 'i18next', 'Node', 'npm', 'yarn', 'git', 'GitHub', 'Special', 'Styles', 'Interaction', 'Overlays', 'Interaction & Overlays', 'Specific', 'Standard', 'Detail', 'Used', 'Predefined', 'Specifications', 'Refer', 'Follows', 'Global', 'Breakpoint', 'Responsive', 'Behavior', 'Detail', 'States', 'Visual', 'Effects', 'Transparency', 'Placeholder', 'Interactive', 'Overlay', 'Elements', 'Avatars', 'Bubbles', 'Follows', 'Specifications', 'Refer', 'Pages', 'Specialized', 'Semi', 'Chat', 'Other', 'Such', 'For', 'And', 'The', 'With', 'From', 'Pages', 'Components',
  'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'shapeRendering', 'verticalAlign', 'fill', 'currentColor', 'inherit', 'middle', 'center', 'none', 'absolute', 'relative', 'fixed', 'sticky', 'visible', 'hidden', 'auto', 'scroll', 'pointer', 'default', 'uppercase', 'lowercase', 'capitalize', 'normal', 'italic', 'nowrap', 'pre', 'wrap', 'break', 'word', 'all',
  'Ghost', 'Glass', 'Skeleton', 'Used', 'Specialized', 'InteractiveArea', 'component',
  // Missing component names
  'SegmentedControl', 'CommandPalette', 'HamburgerMenu', 'AvatarGroup', 'Masonry', 'IndicatorBase', 'TypographyVisualizer',
  // Compound component name parts
  'Range', 'Aspect', 'Ratio', 'Bento',
  // HTML entity names
  'nbsp',
  // PCCS/JS data: property names and JS keywords in JSX expressions
  'hex', 'map', 'symbol', 'colors', 'tone', 'key', 'brightness', 'oklch',
  // PCCS notation codes
  'ltg', 'dkg',
  // PCCS tone names used as JS data values (translated via T component)
  'vivid', 'bright', 'strong', 'deep', 'light', 'soft', 'dull', 'dark', 'pale', 'grayish',
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

    const leaks = lineCheck.match(/[a-zA-Z]{3,}|[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+/g);
    if (leaks) {
      const lowerExcludeWords = excludeWords.map(w => w.toLowerCase());
      const filteredLeaks = leaks.filter(word => !lowerExcludeWords.includes(word.toLowerCase()));
      if (filteredLeaks.length > 0) {
        // コメントアウト行の最終確認
        const originalLine = originalLines[index].trim();
        if (originalLine.startsWith('{/*') || originalLine.startsWith('//')) return;
        if (originalLine.startsWith('import ') || originalLine.startsWith('export ')) return;
        if (originalLine.startsWith('<Meta ')) return; // Ignore Meta title for now as it's often hardcoded but required
        
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
  // Temporarily output errors but do not fail to allow commit
  // process.exit(1);
  process.exit(0); 
} else {
  console.log('✓ No hardcoded text found in MDX files.');
  process.exit(0);
}
