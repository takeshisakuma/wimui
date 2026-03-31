const fs = require('fs');
const path = require('path');

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const storiesRoot = path.join(root, 'stories');

function processFiles(dir, filter, fixer) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
            processFiles(full, filter, fixer);
        } else if (filter(f)) {
            const content = fs.readFileSync(full, 'utf8');
            const newContent = fixer(content, full);
            if (newContent !== content) {
                fs.writeFileSync(full, newContent);
                console.log(`FIXED: ${full}`);
            }
        }
    });
}

// 1. Fix double "charts/Charts"
processFiles(root, f => /\.(ts|tsx|scss)$/.test(f), (content, file) => {
    return content.replace(/(@\/components\/charts\/)Charts\//g, '$1')
                  .replace(/(\.\.\/charts\/)Charts\//g, '$1');
});

// 2. Fix Audio hooks (relative path over-correction)
processFiles(path.join(srcRoot, 'components/media/Audio/hooks'), f => /\.(ts|tsx)$/.test(f), (content, file) => {
    return content.replace(/(\.\.\/\.\.\/\.\.\/media\/Audio)/g, '../Audio');
});

// 3. Fix Image hooks if any
processFiles(path.join(srcRoot, 'components/media/Image/hooks'), f => /\.(ts|tsx)$/.test(f), (content, file) => {
     return content.replace(/(\.\.\/\.\.\/\.\.\/media\/Image)/g, '../Image');
});

// 4. Fix stories paths (some might have extra "charts/" if the script was run twice)
processFiles(storiesRoot, f => /\.(ts|tsx)$/.test(f), (content, file) => {
    return content.replace(/(@\/components\/charts\/)charts\//g, '$1');
});

console.log('ABSOLUTE FIX DONE');
