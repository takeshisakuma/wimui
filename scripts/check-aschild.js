import fs from 'fs';
import { globSync } from 'glob';

// RULES.md「実装済み」リスト — ここに載っているコンポーネントは asChild 必須。
// リストを更新した場合は RULES.md 側も同期させること。
const requiredComponents = [
  // Typography
  'Title', 'Text', 'Span', 'Legend', 'Label', 'Highlight', 'Kbd', 'Code', 'Blockquote',
  // Overlay
  'Tooltip', 'Popover', 'Dropdown', 'HoverCard', 'Drawer', 'Dialog', 'BottomSheet',
  // Navigation
  'Link', 'CommandPalette', 'Breadcrumb', 'Stepper',
  // Form
  'Button', 'Input', 'Selectbox', 'Checkbox', 'CheckboxGroup', 'Radio', 'RadioGroup',
  'Slider', 'NumberInput', 'Mentions', 'OtpInput', 'FloatButton', 'FieldTemplate', 'DatePicker',
  'CreditCardInput', 'SwitchGroup',
  // Layout
  'Box', 'Flex', 'Stack', 'Group', 'Grid',
  // Data Display
  'Badge', 'Chip', 'Tag', 'Card', 'Table', 'List', 'Kanban',
  'Accordion', 'Timeline', 'Carousel', 'SwipeAction', 'SortableList', 'PullToRefresh', 'CalendarHeatmap',
  'RelativeTime',
  // Media
  'Lightbox',
];

// glob の posix: true により Windows でも '/' 区切りで返る。
// path.relative() は使わない（Windows では '\\' 区切りになり split('/') が壊れる）。
const componentFiles = globSync('src/components/**/*.tsx', { posix: true })
  .filter((f) => !f.endsWith('.test.tsx'));

// 直接宣言（asChild?: boolean）のほか、Props 型の継承（Omit<BoxProps, ...> 等）で
// prop を受け取り destructure しているケース（asChild = false / asChild, ...）も対象にする
const declaresProp = (content) =>
  /asChild\??\s*:\s*boolean/.test(content) || /[{,]\s*asChild\s*[=,}]/.test(content);
// パターン1: Slot パターン — const Component = asChild ? Slot : "tag"
const wiresSlot = (content) => /asChild\s*\?\s*Slot/.test(content);
// パターン2: トリガー clone パターン — if (asChild && React.isValidElement(children))
const wiresClone = (content) => /asChild\s*&&\s*React\.isValidElement/.test(content);

// 1st pass: 各ファイルの宣言・配線状況を収集
const entries = componentFiles.map((file) => {
  const parts = file.split('/');
  const name = parts[parts.length - 1].replace(/\.tsx$/, '');
  const content = fs.readFileSync(file, 'utf8');
  return {
    file,
    name,
    declares: declaresProp(content),
    wired: wiresSlot(content) || wiresClone(content),
    content,
  };
});

// ローカルに配線済みのコンポーネント名（委譲先として有効）
const capableNames = new Set(entries.filter((e) => e.declares && e.wired).map((e) => e.name));

const failures = [];

// 2nd pass: 宣言しているのに配線がないファイルは、asChild 対応コンポーネントへの
// 委譲（<IndicatorBase {...props}> 等）があるかを確認する
for (const e of entries) {
  if (!e.declares || e.wired) continue;
  const delegated = [...capableNames].some(
    (name) => name !== e.name && new RegExp(`<${name}[\\s/>]`).test(e.content),
  );
  if (delegated) {
    capableNames.add(e.name);
  } else {
    failures.push(
      `[FAIL] ${e.file} declares \`asChild\` but never wires it (no Slot, no cloneElement, no delegation).`,
    );
  }
}

// --list: asChild 対応コンポーネントをカテゴリ別に出力する（RULES.md 同期用）。
// メインコンポーネントファイル（ディレクトリ名 == ファイル名）のみ表示する。
if (process.argv.includes('--list')) {
  const byCategory = new Map();
  for (const e of entries) {
    if (!capableNames.has(e.name)) continue;
    const parts = e.file.split('/');
    // src/components/<category>/<Name>/<Name>.tsx
    if (parts.length < 5 || parts[3] !== e.name) continue;
    const category = parts[2];
    if (!byCategory.has(category)) byCategory.set(category, []);
    byCategory.get(category).push(e.name);
  }
  for (const [category, names] of [...byCategory.entries()].sort()) {
    console.log(`${category}: ${names.sort().join(', ')}`);
  }
  process.exit(0);
}

// 3rd pass: RULES.md の必須リストに漏れがないか
const allNames = new Set(entries.map((e) => e.name));
for (const name of requiredComponents) {
  if (!allNames.has(name)) {
    failures.push(`[FAIL] Required component "${name}" (RULES.md) was not found under src/components/.`);
  } else if (!capableNames.has(name)) {
    failures.push(`[FAIL] ${name} is listed as asChild-implemented in RULES.md but has no working implementation.`);
  }
}

console.log('--- Checking asChild implementation ---');
console.log(`Scanned ${entries.length} files / ${capableNames.size} components support asChild.`);

if (failures.length > 0) {
  for (const f of failures) console.log(f);
  console.log(`\n✗ ${failures.length} problem(s) found.`);
  process.exit(1);
}

console.log('\n✓ All asChild implementations are correctly wired and RULES.md requirements are met.');
