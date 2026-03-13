
import fs from 'fs';
import path from 'path';

const componentsDir = 'c:/Users/facto/Desktop/github/wimui/src/components';
const mdxFile = 'c:/Users/facto/Desktop/github/wimui/docs/Hierarchy.mdx';

const components = fs.readdirSync(componentsDir).filter(name => {
    return fs.statSync(path.join(componentsDir, name)).isDirectory() && !name.startsWith('_');
});

const mdxContent = fs.readFileSync(mdxFile, 'utf-8');
// Updated regex to match components either wrapped in backticks or inside <td> tags
const listedComponentsMatch = mdxContent.match(/`([A-Z][a-zA-Z]+)`|<td>`?([A-Z][a-zA-Z]+)`?<\/td>/g);
const listedComponents = new Set(listedComponentsMatch ? listedComponentsMatch.map(s => {
    // Extract the component name from the matched string
    const match = s.match(/([A-Z][a-zA-Z]+)/);
    return match ? match[1] : null;
}).filter(Boolean) : []);

const missingInMdx = components.filter(c => !listedComponents.has(c));
const extraInMdx = Array.from(listedComponents).filter(c => !components.includes(c));

console.log('Components in src/components:', JSON.stringify(components.sort(), null, 2));
console.log('Components listed in MDX:', JSON.stringify(Array.from(listedComponents).sort(), null, 2));
console.log('Missing in MDX:', JSON.stringify(missingInMdx, null, 2));
console.log('Extra in MDX:', JSON.stringify(extraInMdx, null, 2));
