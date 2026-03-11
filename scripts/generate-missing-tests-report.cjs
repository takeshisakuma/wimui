const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../src/components');
const missingTestsFile = path.resolve(__dirname, '../stories/missing_tests.txt');

/**
 * Recursively scans the components directory for missing test files.
 * @param {string} dir Current directory to scan
 * @param {string[]} missingList Accumulator for missing test file paths
 * @returns {string[]} List of .tsx files that don't have a corresponding .test.tsx
 */
function scanForMissingTests(dir, missingList = []) {
  const items = fs.readdirSync(dir);

  // Identify .tsx files (excluding .test.tsx)
  const tsxFiles = items.filter(
    (item) =>
      item.endsWith('.tsx') &&
      !item.endsWith('.test.tsx') &&
      !item.startsWith('_') && // Skip internal/private files starting with _
      fs.statSync(path.join(dir, item)).isFile()
  );

  tsxFiles.forEach((tsxFile) => {
    const testFile = tsxFile.replace('.tsx', '.test.tsx');
    if (!items.includes(testFile)) {
      // Record relative path from componentsDir
      const relativePath = path.relative(componentsDir, path.join(dir, tsxFile));
      missingList.push(relativePath);
    }
  });

  // Recurse into subdirectories
  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    if (
      fs.statSync(fullPath).isDirectory() &&
      item !== 'node_modules' &&
      item !== 'dist' &&
      item !== '.git' &&
      item !== '_internal' // Skip internal directory
    ) {
      scanForMissingTests(fullPath, missingList);
    }
  });

  return missingList;
}

try {
  console.log('Scanning for missing tests in:', componentsDir);
  const missing = scanForMissingTests(componentsDir);
  
  // Sort for consistency
  missing.sort();

  fs.writeFileSync(missingTestsFile, missing.join('\n'), 'utf8');
  
  console.log(`Scan complete!`);
  console.log(`Found ${missing.length} components missing tests.`);
  console.log(`Report updated at: ${missingTestsFile}`);
} catch (error) {
  console.error('Error scanning for tests:', error);
  process.exit(1);
}
