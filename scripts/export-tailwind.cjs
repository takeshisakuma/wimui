const fs = require('fs');
const path = require('path');

/**
 * This script exports WIM UI tokens to a Tailwind CSS configuration object.
 * It reads the CSS variables from the generated files and maps them to Tailwind categories.
 */

const cssVarsPath = path.resolve(__dirname, '../src/tokens/generated/_css-vars.scss');

function parseCssVars(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const vars = {};
  const regex = /--wim-([a-z0-9-]+):\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    vars[match[1]] = `var(--wim-${match[1]})`;
  }
  return vars;
}

const tokens = parseCssVars(cssVarsPath);

const tailwindConfig = {
  theme: {
    extend: {
      colors: {},
      spacing: {},
      borderRadius: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      boxShadow: {},
      transitionDuration: {},
      transitionTimingFunction: {},
      zIndex: {},
    }
  }
};

// Map tokens to Tailwind categories
for (const [key, value] of Object.entries(tokens)) {
  if (key.startsWith('color-')) {
    const name = key.replace('color-', '');
    tailwindConfig.theme.extend.colors[name] = value;
  } else if (key.startsWith('spacing-')) {
    const name = key.replace('spacing-', '');
    tailwindConfig.theme.extend.spacing[name] = value;
  } else if (key.startsWith('radius-')) {
    const name = key.replace('radius-', '');
    tailwindConfig.theme.extend.borderRadius[name] = value;
  } else if (key.startsWith('font-size-')) {
    const name = key.replace('font-size-', '');
    tailwindConfig.theme.extend.fontSize[name] = value;
  } else if (key.startsWith('font-weight-')) {
    const name = key.replace('font-weight-', '');
    tailwindConfig.theme.extend.fontWeight[name] = value;
  } else if (key.startsWith('line-height-')) {
    const name = key.replace('line-height-', '');
    tailwindConfig.theme.extend.lineHeight[name] = value;
  } else if (key.startsWith('shadow-')) {
    const name = key.replace('shadow-', '');
    tailwindConfig.theme.extend.boxShadow[name] = value;
  } else if (key.startsWith('duration-')) {
    const name = key.replace('duration-', '');
    tailwindConfig.theme.extend.transitionDuration[name] = value;
  } else if (key.startsWith('easing-')) {
    const name = key.replace('easing-', '');
    tailwindConfig.theme.extend.transitionTimingFunction[name] = value;
  } else if (key.startsWith('z-')) {
    const name = key.replace('z-', '');
    tailwindConfig.theme.extend.zIndex[name] = value;
  }
}

const outputPath = path.resolve(__dirname, '../wim-tailwind-preset.js');
const outputContent = `/** @type {import('tailwindcss').Config} */
module.exports = ${JSON.stringify(tailwindConfig, null, 2)};
`;

fs.writeFileSync(outputPath, outputContent);
console.log(`Successfully exported tokens to ${outputPath}`);
