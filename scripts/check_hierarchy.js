
import fs from 'fs';
import path from 'path';

const componentsDir = 'src/components';
const mdxFile = 'docs/Hierarchy.mdx';

// Recursively find all component directories (PascalCase directories inside categories)
const components = [];
const categories = fs.readdirSync(componentsDir).filter(name => {
    const fullPath = path.join(componentsDir, name);
    return fs.statSync(fullPath).isDirectory() && !name.startsWith('_');
});

categories.forEach(category => {
    const categoryPath = path.join(componentsDir, category);
    const items = fs.readdirSync(categoryPath).filter(name => {
        const fullPath = path.join(categoryPath, name);
        // Components are PascalCase directories
        return fs.statSync(fullPath).isDirectory() && /^[A-Z]/.test(name);
    });
    components.push(...items);
});

// Remove duplicates if any
const uniqueComponents = [...new Set(components)];

const mdxContent = fs.readFileSync(mdxFile, 'utf-8');
// Updated regex to match components either wrapped in backticks or inside <td> tags
const listedComponentsMatch = mdxContent.match(/`([A-Z][a-zA-Z0-9]+)`|<td>`?([A-Z][a-zA-Z0-9]+)`?<\/td>/g);
const listedComponents = new Set(listedComponentsMatch ? listedComponentsMatch.map(s => {
    // Extract the component name from the matched string
    const match = s.match(/([A-Z][a-zA-Z0-9]+)/);
    return match ? match[1] : null;
}).filter(Boolean) : []);

const missingInMdx = uniqueComponents.filter(c => !listedComponents.has(c));
const extraInMdx = Array.from(listedComponents).filter(c => !uniqueComponents.includes(c));

console.log('Components in src/components:', JSON.stringify(uniqueComponents.sort(), null, 2));
console.log('Components listed in MDX:', JSON.stringify(Array.from(listedComponents).sort(), null, 2));

if (missingInMdx.length > 0) {
    console.error('✗ Missing in MDX (Found in src but not in Hierarchy.mdx):', JSON.stringify(missingInMdx.sort(), null, 2));
} else {
    console.log('✓ All components found in src are listed in MDX.');
}

if (extraInMdx.length > 0) {
    // Some "extra" might be internal components or sub-components mentioned in MDX, 
    // so we log them as warnings but don't necessarily fail.
    console.warn('! Extra in MDX (Found in MDX but not as top-level component directory):', JSON.stringify(extraInMdx.sort(), null, 2));
}

if (missingInMdx.length > 0) {
    process.exit(1);
}
