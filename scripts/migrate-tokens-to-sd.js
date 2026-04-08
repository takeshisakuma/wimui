import fs from 'fs';
import path from 'path';

const tokensDir = 'tokens';
const scssDir = 'src/tokens';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(path.join(tokensDir, 'color'));
ensureDir(path.join(tokensDir, 'themes'));

function convertToRef(value) {
    return value.replace(/#\{\$pccs-([\w-]+)\}/g, '{pccs.$1}');
}

// 1. Base PCCS
const pccsColors = fs.readFileSync(path.join(scssDir, '_pccs-colors.scss'), 'utf-8');
const pccsJSON = { pccs: {} };
const pccsRegex = /\$pccs-([\w-]+):\s*([^;]+);/g;
let match;
while ((match = pccsRegex.exec(pccsColors)) !== null) {
  const name = match[1];
  const value = match[2];
  if (!name.endsWith('-rgb') && !name.endsWith('-hsl')) {
    pccsJSON.pccs[name] = { value };
  }
}
fs.writeFileSync(path.join(tokensDir, 'color', 'base.json'), JSON.stringify(pccsJSON, null, 2));

// 2. Semantic Colors
const semanticColors = fs.readFileSync(path.join(scssDir, '_semantic-colors.scss'), 'utf-8');

function extractVarsFlexible(content) {
    const vars = {};
    const regex = /--wim-color-([\w-]+):\s*([^;]+);/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        vars[m[1]] = { value: convertToRef(m[2].trim()) };
    }
    return vars;
}

// Split into blocks by searching for keywords
const rootStart = semanticColors.indexOf(':root {');
const rootEnd = semanticColors.indexOf('}', rootStart);
const rootContent = semanticColors.substring(rootStart, rootEnd);

const darkStart = semanticColors.indexOf('@mixin dark-theme {');
const darkEnd = semanticColors.indexOf('\n}', darkStart); // Search for } at start of line roughly
const darkContent = semanticColors.substring(darkStart, darkEnd);

const lightVars = extractVarsFlexible(rootContent);
const darkVars = extractVarsFlexible(darkContent);

// Mark dark vars with theme attribute for Style Dictionary
Object.keys(darkVars).forEach(k => {
    darkVars[k].theme = 'dark';
});

console.log(`Extracted ${Object.keys(lightVars).length} light variables.`);
console.log(`Extracted ${Object.keys(darkVars).length} dark variables.`);

fs.writeFileSync(path.join(tokensDir, 'color', 'semantic.json'), JSON.stringify({ wim: { color: lightVars } }, null, 2));
fs.writeFileSync(path.join(tokensDir, 'themes', 'dark.json'), JSON.stringify({ wim: { color: darkVars } }, null, 2));

// 3. Spacings
const spacings = fs.readFileSync(path.join(scssDir, '_spacings.scss'), 'utf-8');
const sVars = {};
const rVars = {};
const sRegex = /--wim-spacing-([\w-]+):\s*([^;]+);/g;
while ((match = sRegex.exec(spacings)) !== null) sVars[match[1]] = { value: convertToRef(match[2].trim()) };
const rRegex = /--wim-radius-([\w-]+):\s*([^;]+);/g;
while ((match = rRegex.exec(spacings)) !== null) rVars[match[1]] = { value: convertToRef(match[2].trim()) };
fs.writeFileSync(path.join(tokensDir, 'spacing.json'), JSON.stringify({ wim: { spacing: sVars, radius: rVars } }, null, 2));

// 4. Effects
const effects = fs.readFileSync(path.join(scssDir, '_effects.scss'), 'utf-8');
const zVars = {};
const oVars = {};
const shVars = {};
const zRegex = /--wim-z-([\w-]+):\s*([^;]+);/g;
while ((match = zRegex.exec(effects)) !== null) zVars[match[1]] = { value: convertToRef(match[2].trim()) };
const oRegex = /--wim-opacity-([\w-]+):\s*([^;]+);/g;
while ((match = oRegex.exec(effects)) !== null) oVars[match[1]] = { value: convertToRef(match[2].trim()) };
const shRegex = /--wim-shadow-([\w-]+):\s*([^;]+);/g;
while ((match = shRegex.exec(effects)) !== null) shVars[match[1]] = { value: convertToRef(match[2].trim()) };
fs.writeFileSync(path.join(tokensDir, 'effects.json'), JSON.stringify({ wim: { z: zVars, opacity: oVars, shadow: shVars } }, null, 2));

console.log('Migration complete.');
