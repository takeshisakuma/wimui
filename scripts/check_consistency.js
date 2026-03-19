import fs from 'fs';
import path from 'path';

const componentsInJson = new Set();
const componentsJson = JSON.parse(fs.readFileSync('src/data/components.json', 'utf8'));
componentsJson.forEach(cat => {
  cat.components.forEach(comp => {
    componentsInJson.add(comp.name);
  });
});

const componentsInDir = new Set(fs.readdirSync('src/components')
  .filter(file => {
      const stats = fs.statSync(path.join('src/components', file));
      return stats.isDirectory() || file.endsWith('.tsx');
  })
  .map(file => file.replace('.tsx', ''))
  .filter(dir => dir !== '_internal' && dir !== 'index'));

console.log('--- Components in src/components but missing from components.json ---');
componentsInDir.forEach(comp => {
  if (!componentsInJson.has(comp)) {
    console.log(comp);
  }
});

console.log('\n--- Components in components.json but missing from src/components ---');
componentsInJson.forEach(comp => {
  if (!componentsInDir.has(comp)) {
    // Check _internal
    const internalDir = path.join('src/components', '_internal', comp);
    const internalFile = path.join('src/components', '_internal', `${comp}.tsx`);
    
    // Check sub-components (e.g. Calendar/RangeCalendar)
    const subComponentFolders = ['Calendar', 'Charts', 'Pickers'];
    let foundSub = false;
    for (const folder of subComponentFolders) {
        if (fs.existsSync(path.join('src/components', folder, `${comp}.tsx`)) || 
            fs.existsSync(path.join('src/components', folder, comp))) {
            foundSub = true;
            break;
        }
    }

    if (!fs.existsSync(internalDir) && !fs.existsSync(internalFile) && !foundSub && 
        !['T', 'SourceCode', 'RefTable', 'Meta', 'Canvas', 'Controls', 'PlatformIcons', 'colorSwatch', 'ContrastChecker'].includes(comp)) {
            console.log(comp);
    }
  }
});

// Check for missing stories/mdx
console.log('\n--- Components missing stories (.stories.[ts|tsx]) ---');
componentsInDir.forEach(comp => {
  const storyPaths = [
    path.join('stories', comp, `${comp}.stories.tsx`),
    path.join('stories', comp, `${comp}.stories.ts`),
    path.join('stories', 'Charts', `${comp}.stories.tsx`)
  ];
  if (!storyPaths.some(p => fs.existsSync(p))) {
    console.log(comp);
  }
});

console.log('\n--- Components missing MDX documentation (.mdx) ---');
componentsInDir.forEach(comp => {
  const mdxPaths = [
    path.join('stories', comp, `${comp}.mdx`),
    path.join('stories', 'Charts', `${comp}.mdx`)
  ];
  if (!mdxPaths.some(p => fs.existsSync(p))) {
    // Special check for individual charts that share BarChart.mdx or similar
    if (comp.endsWith('Chart') && comp !== 'Charts' && fs.existsSync(path.join('stories', 'Charts', 'BarChart.mdx'))) {
        // ignore for now if we know some charts share docs
    } else {
        console.log(comp);
    }
  }
});
