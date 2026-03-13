const fs = require('fs');
const path = require('path');

const locales = ['en', 'ja', 'pt'];
const baseDir = path.join(process.cwd(), 'public', 'locales');

const mapping = {
  alert_: 'docs_feedback.json',
  appshell_: 'docs_guide_layout.json',
  basicinput_: 'docs_guide_forms.json',
  button_: 'docs_guide_components.json',
  datastructure_: 'docs_guide_data.json',
  formlabels_: 'docs_guide_forms.json',
  formlayout_: 'docs_guide_forms.json',
  formui_: 'docs_guide_forms.json',
  icons_: 'docs_guide_philosophy.json',
  layout_: 'docs_guide_layout.json',
  loading_: 'docs_feedback.json',
  media_: 'docs_media.json',
  nav_: 'docs_guide_navigation.json',
  navutil_: 'docs_guide_navigation.json',
  overlay_: 'docs_overlay.json',
  picker_: 'docs_guide_forms.json',
  placeholder_: 'docs_guide_forms.json',
  selection_: 'docs_guide_forms.json',
  voiceandtone_: 'docs_guide_philosophy.json',
  // Special cases
  a11y_: 'components.json',
  icon_: 'components.json',
  chat_: 'components.json'
};

function processLocale(lang) {
  const compPath = path.join(baseDir, lang, 'components.json');
  if (!fs.existsSync(compPath)) return;
  const compData = JSON.parse(fs.readFileSync(compPath, 'utf8'));

  const result = {
    'components.json': {}
  };

  const keys = Object.keys(compData).sort();
  for (const key of keys) {
    const value = compData[key];
    let matched = false;
    for (const [prefix, target] of Object.entries(mapping)) {
      if (key.startsWith(prefix)) {
        if (!result[target]) {
          const targetPath = path.join(baseDir, lang, target);
          result[target] = fs.existsSync(targetPath) ? JSON.parse(fs.readFileSync(targetPath, 'utf8')) : {};
        }
        result[target][key] = value;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result['components.json'][key] = value;
    }
  }

  // Save all modified files
  for (const [filename, content] of Object.entries(result)) {
    const targetPath = path.join(baseDir, lang, filename);
    fs.writeFileSync(targetPath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`  Updated ${filename} in ${lang} (${Object.keys(content).length} keys)`);
  }
}

locales.forEach(lang => {
  console.log(`Processing ${lang}...`);
  processLocale(lang);
});
console.log('Done!');
