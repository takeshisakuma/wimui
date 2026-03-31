const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Fix docs/icons.mdx
const mdxPath = path.join(process.cwd(), 'docs/icons.mdx');
if (fs.existsSync(mdxPath)) {
    let content = fs.readFileSync(mdxPath, 'utf8');
    content = content.replace(/@\/components\/Icon\/Icon/g, '@/components/media/Icon/Icon');
    fs.writeFileSync(mdxPath, content);
    console.log('Updated docs/icons.mdx');
}

// 2. Fix implicit any in GanttChart.stories.tsx
const ganttPath = path.join(process.cwd(), 'stories/GanttChart/GanttChart.stories.tsx');
if (fs.existsSync(ganttPath)) {
    let content = fs.readFileSync(ganttPath, 'utf8');
    content = content.replace(/onTaskClick=\{\(task\)/g, 'onTaskClick={(task: any)');
    fs.writeFileSync(ganttPath, content);
    console.log('Updated GanttChart.stories.tsx');
}

// 3. Force lowercase charts in Git
try {
    // We need to move to a temp name first because Windows might consider 'Charts' and 'charts' the same.
    execSync('git mv src/components/charts src/components/charts_temp');
    execSync('git mv src/components/charts_temp src/components/charts');
    console.log('Force renamed charts category in Git');
} catch (e) {
    console.log('Git mv failed (maybe already lowercase or not staged), continuing...');
}

// 4. Check for any other Charts/Charts occurrences
function processFiles(dir) {
    fs.readdirSync(dir).forEach(f => {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
            processFiles(full);
        } else if (/\.(ts|tsx|mdx)$/.test(f)) {
            let content = fs.readFileSync(full, 'utf8');
            let newContent = content.replace(/(@\/components\/charts\/)Charts\//g, '$1')
                                    .replace(/(\.\.\/charts\/)Charts\//g, '$1');
            if (newContent !== content) {
                fs.writeFileSync(full, newContent);
                console.log(`FIXED extra Charts/ in: ${full}`);
            }
        }
    });
}
processFiles(path.join(process.cwd(), 'src'));
processFiles(path.join(process.cwd(), 'stories'));

console.log('ACTIONS FIX DONE');
