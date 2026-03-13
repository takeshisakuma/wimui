const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const storiesDir = path.join(process.cwd(), 'stories');
const files = getAllFiles(storiesDir).filter(f => f.endsWith('.stories.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('import { ALL_NAMESPACES }')) {
    const lines = content.split('\n');
    let brokenIndex = -1;
    let importLine = '';
    
    // Find the broken line
    lines.forEach((line, idx) => {
      if (line.includes('import { ALL_NAMESPACES }')) {
        // Check if the previous line looks like an open import {
        if (idx > 0 && lines[idx-1].trim() === 'import {') {
          brokenIndex = idx;
          importLine = line;
        }
      }
    });

    if (brokenIndex !== -1) {
      console.log(`Fixing broken import in ${file}`);
      // Remove the broken line
      lines.splice(brokenIndex, 1);
      
      // Find the best place to insert it (after the final top-level import })
      let lastTopLevelImportEnd = -1;
      lines.forEach((line, idx) => {
        if (line.startsWith('} from "') || line.startsWith('} from \'') || (line.startsWith('import ') && line.includes(';'))) {
           lastTopLevelImportEnd = idx;
        }
      });
      
      // If we couldn't find a good spot, just put it at 0
      if (lastTopLevelImportEnd === -1) lastTopLevelImportEnd = 0;
      
      lines.splice(lastTopLevelImportEnd + 1, 0, importLine);
      fs.writeFileSync(file, lines.join('\n'), 'utf8');
    }
  }
});
