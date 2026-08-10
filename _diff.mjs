import { execSync } from 'node:child_process';
import { PNG } from 'pngjs';

const SHA = '88aacbfea';
const files = execSync(`git show --name-only ${SHA} --format=""`, { encoding: 'utf8' })
  .split('\n')
  .filter((f) => f.endsWith('.png'));

const read = (rev, f) => execSync(`git show ${rev}:"${f}"`, { encoding: 'buffer', maxBuffer: 1 << 28 });

// 自己検証: 旧新のバイト数が違うことを先に確かめる（前回 cmd.exe の ^ で同一を比べた）
const probe = files[0];
const a0 = read(`${SHA}~1`, probe);
const b0 = read(SHA, probe);
console.log(`自己検証: ${probe.split('/').pop().slice(0, 40)} 旧 ${a0.length} / 新 ${b0.length} — ${a0.length === b0.length ? '同一（要注意）' : '異なる'}\n`);

const rows = [];
for (const f of files) {
  let a;
  let b;
  try {
    a = PNG.sync.read(read(`${SHA}~1`, f));
    b = PNG.sync.read(read(SHA, f));
  } catch {
    continue;
  }
  if (a.width !== b.width || a.height !== b.height) {
    rows.push({ f, pct: 100, note: 'サイズ違い' });
    continue;
  }
  let n = 0;
  let max = 0;
  for (let i = 0; i < a.data.length; i += 4) {
    const d = Math.abs(a.data[i] - b.data[i]) + Math.abs(a.data[i + 1] - b.data[i + 1]) + Math.abs(a.data[i + 2] - b.data[i + 2]);
    if (d > 0) {
      n += 1;
      if (d > max) max = d;
    }
  }
  rows.push({ f, pct: (n / (a.width * a.height)) * 100, max });
}
rows.sort((x, y) => y.pct - x.pct);
const short = (f) => f.replace(/.*snapshots\//, '').replace(/-chromium-linux\.png/, '');
console.log('差分の大きい順（上位 12）');
for (const r of rows.slice(0, 12)) console.log(`  ${r.pct.toFixed(3).padStart(7)}%  最大差 ${String(r.max ?? '-').padStart(3)}  ${short(r.f)}`);
const band = (lo, hi) => rows.filter((r) => r.pct >= lo && r.pct < hi).length;
console.log(`\n1% 以上: ${rows.filter((r) => r.pct >= 1).length} / 0.1〜1%: ${band(0.1, 1)} / 0.01〜0.1%: ${band(0.01, 0.1)} / 0.01% 未満: ${band(0, 0.01)}`);
