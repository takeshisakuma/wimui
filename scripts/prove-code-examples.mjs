// check:examples の MDX 拡張を、故意の違反で鳴らす（鳴ってはいけない側も見る）。
import fs from "node:fs";
import { spawnSync } from "node:child_process";

const run = () => {
  const r = spawnSync(process.execPath, ["scripts/check-code-examples.js"], { encoding: "utf8" });
  return { code: r.status, out: `${r.stdout}${r.stderr}` };
};
const TOAST = "stories/feedback/Toast/Toast.mdx";
const NAVBAR = "stories/layout/Navbar/Navbar.mdx";
const CAL = "stories/data-display/Calendar/Calendar.mdx";

const cases = [
  { name: "import つきの例: 存在しない prop（Toast の intent → status）", file: TOAST, from: 'intent: "success",', to: 'status: "success",', expect: 1, must: "'status' does not exist" },
  { name: "断片: 存在しない prop（Navbar の bordered → borderedd）", file: NAVBAR, from: "<Navbar bordered>", to: "<Navbar borderedd>", expect: 1, must: "borderedd" },
  { name: "断片: 部品名の綴り誤り（Calendar → Calendarr）", file: CAL, from: "<Calendar rangeMode range={range} onRangeChange={setRange} />", to: "<Calendarr rangeMode range={range} onRangeChange={setRange} />", expect: 1, must: "Calendarr" },
  { name: "鳴らない: 読者側の変数（onClick={handleBrand}）", file: NAVBAR, from: "<Navbar.Brand>Brand</Navbar.Brand>", to: "<Navbar.Brand onClick={handleBrand}>Brand</Navbar.Brand>", expect: 0 },
  { name: "鳴らない: skip 指示つきの壊れた例", file: TOAST, from: '```tsx\nimport { ToastProvider, useToast } from "wimui";', to: '{/* code-example: skip — 実証用 */}\n\n```tsx\nimport { ToastProvider, useToastt } from "wimui";', expect: 0, must: "実証用" },
];

let bad = 0;
const base = run();
console.log(`無傷: exit ${base.code}`);
if (base.code !== 0) bad += 1;
for (const c of cases) {
  const raw = fs.readFileSync(c.file, "utf8");
  const src = raw.replace(/\r\n/g, "\n");
  if (src.split(c.from).length !== 2) {
    console.log(`  [準備失敗] ${c.name}`);
    bad += 1;
    continue;
  }
  fs.writeFileSync(c.file, src.replace(c.from, () => c.to));
  let r;
  try {
    r = run();
  } finally {
    fs.writeFileSync(c.file, raw);
  }
  const ok = r.code === c.expect && (!c.must || r.out.includes(c.must));
  console.log(`  [${ok ? "OK" : "NG"}] ${c.name} → exit ${r.code}`);
  if (!ok) {
    bad += 1;
    console.log(r.out.split("\n").slice(0, 12).join("\n"));
  }
}
process.exit(bad ? 1 : 0);
