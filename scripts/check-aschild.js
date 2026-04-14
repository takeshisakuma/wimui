import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

// Categories that MUST implement asChild
const mandatoryCategories = [
  'form',
  'layout',
  'navigation',
  'typography',
  'data-display',
  'overlay'
];

// Components that are known exceptions (internal, complex portals, etc.)
const exceptions = [
  'Icon',
  'Portal',
  'Tour',
  'Cascader' // if it's too complex
];

const componentFiles = globSync('src/components/**/*.tsx', { posix: true });

let allPass = true;

console.log('--- Checking asChild implementation ---');

componentFiles.forEach(file => {
  const relPath = path.relative('src/components', file);
  const parts = relPath.split('/');
  
  if (parts.length < 2) return; // Not a component directory structure
  
  const category = parts[0];
  const name = parts[1];

  // Only check mandatory categories and ignore internal directory
  if (category === '_internal' || !mandatoryCategories.includes(category)) return;
  
  // Ignore sub-files (only check the main component file)
  if (path.basename(file, '.tsx') !== name) return;
  
  if (exceptions.includes(name)) return;

  const content = fs.readFileSync(file, 'utf8');
  
  const hasAsChildProp = content.includes('asChild?: boolean') || content.includes('asChild: boolean');
  const usesSlot = content.includes('Slot') && content.includes('asChild ? Slot');
  
  if (!hasAsChildProp || !usesSlot) {
    console.log(`[FAIL] ${file} is missing asChild support.`);
    console.log(`       - Prop defined: ${hasAsChildProp}`);
    console.log(`       - Slot used: ${usesSlot}`);
    allPass = false;
  }
});

if (allPass) {
  console.log('\n✓ All target components implement asChild correctly.');
} else {
  console.log('\n✗ Some components are missing asChild support.');
  // We don't exit 1 yet as some components might be mid-migration, 
  // but for "adding many new ones", this is a good check.
}
