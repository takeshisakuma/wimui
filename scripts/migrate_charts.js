import fs from 'fs';
import path from 'path';

const charts = [
  'AreaChart', 'BarChart', 'FunnelChart', 'GaugeChart', 'Heatmap', 
  'LineChart', 'PieChart', 'RadarChart', 'ScatterChart', 'Treemap'
];

const srcBase = 'c:\\Users\\facto\\Desktop\\github\\wimui\\src\\components';
const storiesBase = 'c:\\Users\\facto\\Desktop\\github\\wimui\\stories';

// 1. Move src/components/Charts/* to src/components/Name/*
for (const chart of charts) {
  const chartDir = path.join(srcBase, chart);
  if (!fs.existsSync(chartDir)) {
    fs.mkdirSync(chartDir, { recursive: true });
  }

  // Move TSX
  const tsxSrc = path.join(srcBase, 'Charts', `${chart}.tsx`);
  const tsxDest = path.join(chartDir, `${chart}.tsx`);
  if (fs.existsSync(tsxSrc)) {
    // Read and update helpers import if necessary
    let content = fs.readFileSync(tsxSrc, 'utf-8');
    content = content.replace('./helpers', '../Charts/helpers');
    fs.writeFileSync(tsxDest, content);
    fs.unlinkSync(tsxSrc);
  }

  // Move Test
  const testSrc = path.join(srcBase, 'Charts', `${chart}.test.tsx`);
  const testDest = path.join(chartDir, `${chart}.test.tsx`);
  if (fs.existsSync(testSrc)) {
    let content = fs.readFileSync(testSrc, 'utf-8');
    content = content.replace('./' + chart, './' + chart); // remains same
    fs.writeFileSync(testDest, content);
    fs.unlinkSync(testSrc);
  }
}

// 2. Move stories/Charts/* to stories/Name/*
for (const chart of charts) {
  const storyDir = path.join(storiesBase, chart);
  if (!fs.existsSync(storyDir)) {
    fs.mkdirSync(storyDir, { recursive: true });
  }

  // Move stories.tsx
  const storySrc = path.join(storiesBase, 'Charts', `${chart}.stories.tsx`);
  const storyDest = path.join(storyDir, `${chart}.stories.tsx`);
  if (fs.existsSync(storySrc)) {
    let content = fs.readFileSync(storySrc, 'utf-8');
    // Update component import
    content = content.replace(`@/components/Charts/${chart}`, `@/components/${chart}/${chart}`);
    // Update story title
    content = content.replace(`title: "Components/Visualization/${chart}"`, `title: "Components/Visualization/${chart}"`); // usually same category
    // Some stories might have Overview titles
    if (chart === 'Overview') {
       // overview stays?
    }
    fs.writeFileSync(storyDest, content);
    fs.unlinkSync(storySrc);
  }

  // Move MDX if exists
  const mdxSrc = path.join(storiesBase, 'Charts', `${chart}.mdx`);
  const mdxDest = path.join(storyDir, `${chart}.mdx`);
  if (fs.existsSync(mdxSrc)) {
    let content = fs.readFileSync(mdxSrc, 'utf-8');
    fs.writeFileSync(mdxDest, content);
    fs.unlinkSync(mdxSrc);
  }
}

// 3. Update src/index.ts
let indexContent = fs.readFileSync('c:\\Users\\facto\\Desktop\\github\\wimui\\src\\index.ts', 'utf-8');
for (const chart of charts) {
  indexContent = indexContent.replace(`./components/Charts/${chart}`, `./components/${chart}/${chart}`);
}
fs.writeFileSync('c:\\Users\\facto\\Desktop\\github\\wimui\\src\\index.ts', indexContent);

console.log('Migration complete.');
