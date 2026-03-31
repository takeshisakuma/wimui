const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * This script checks if the casing of files tracked by Git matches the actual 
 * casing on the file system. This is crucial for cross-platform development 
 * (Windows/Linux) where Windows is case-insensitive but Linux (CI) is not.
 */

try {
  // 1. Get all files tracked by Git
  const gitFiles = execSync('git ls-files', { encoding: 'utf8' })
    .split('\n')
    .filter(f => f && !f.startsWith('node_modules') && !f.startsWith('.gemini'));

  let errors = [];

  // Use a cache for checked directories to speed up
  const checkedDirs = new Set();

  for (const gitPath of gitFiles) {
    const parts = gitPath.split('/');
    let currentPath = '.';

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const subPath = parts.slice(0, i + 1).join('/');
        
        if (checkedDirs.has(subPath)) {
            currentPath = path.join(currentPath, part);
            continue;
        }

        const realEntries = fs.readdirSync(currentPath);
        
        // Find entry that matches case-insensitively
        const matches = realEntries.filter(e => e.toLowerCase() === part.toLowerCase());
        const exactMatch = realEntries.find(e => e === part);

        if (matches.length > 0 && !exactMatch) {
            errors.push(`Casing mismatch detected:
  Git Index expects: ${gitPath}
  Actual Disk Name: ${matches[0]} (at level: ${currentPath}/${matches[0]})
  
  HOW TO FIX:
  1. Run: git config core.ignorecase false
  2. Run: git rm -r --cached "${subPath}"
  3. Run: git add "${subPath}"
  4. Run: git commit -m "fix: correct casing for ${subPath}"`);
            break;
        }

        if (!exactMatch) {
            // File might not exist yet if it's a new file not yet on disk? 
            // Usually git ls-files only shows what's in index.
            break;
        }

        currentPath = path.join(currentPath, exactMatch);
        checkedDirs.add(subPath);
    }
  }

  if (errors.length > 0) {
    console.error('\x1b[31m%s\x1b[0m', '\nFAIL: Git Casing Consistency Check\n');
    console.error(errors.join('\n\n'));
    console.error('\x1b[33m%s\x1b[0m', '\nInconsistent casing between Git index and filesystem will break CI/CD on Linux.\n');
    process.exit(1);
  } else {
    console.log('\x1b[32m%s\x1b[0m', 'SUCCESS: Git Casing Consistency Check passed.');
    process.exit(0);
  }
} catch (err) {
  console.error('Error running casing check:', err.message);
  process.exit(1);
}
