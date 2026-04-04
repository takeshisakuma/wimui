const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.join(process.cwd(), 'storybook-static');

console.log(`Cleaning Storybook output directory: ${targetDir}`);

if (fs.existsSync(targetDir)) {
    try {
        // More aggressive cleanup for Windows/Locked files
        if (process.platform === 'win32') {
            execSync(`rmdir /s /q "${targetDir}"`, { stdio: 'inherit' });
        } else {
            execSync(`rm -rf "${targetDir}"`, { stdio: 'inherit' });
        }
        console.log('Cleanup successful.');
    } catch (e) {
        console.error('Cleanup failed via native command, using fs.rmSync as fallback:', e.message);
        fs.rmSync(targetDir, { recursive: true, force: true });
    }
} else {
    console.log('Target directory does not exist, nothing to clean.');
}
