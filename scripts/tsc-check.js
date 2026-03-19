import { spawnSync } from 'node:child_process';
import process from 'node:process';

// Ignore any arguments passed by lint-staged
const result = spawnSync('npx', ['tsc', '--noEmit'], {
  stdio: 'inherit',
  shell: true
});

process.exit(result.status ?? (result.error ? 1 : 0));
