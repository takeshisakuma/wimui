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

const files = globSync('**/*.mdx', { posix: true });

let allPass = true;
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const missing = requiredKeys.filter(k => {
    if (content.includes(k)) return false;
    
    // Docgen component generates these titles
    if (k === 'doc.anatomy_title' && content.includes('<Docgen') && content.includes('section="anatomy"')) return false;
    if (k === 'doc.tokens_title' && content.includes('<Docgen') && content.includes('section="tokens"')) return false;
    if (k === 'doc.test_title' && content.includes('<Docgen') && content.includes('section="test"')) return false;
    if (k === 'doc.props_title' && content.includes('<Docgen') && content.includes('section="props"')) return false;
    
    return true;
  });
  
  if (missing.length > 0) {
    console.log(`[FAIL] ${file} is missing: ${missing.join(', ')}`);
    allPass = false;
  }
});

if (allPass) {
  console.log('✓ All MDX files contain required sections.');
}
