/**
 * measure:focus-forced-colors — **キーボードのフォーカス表示が、強制カラーでも出るかを実物で測る道具**。
 *
 * 起票の経緯（2026-10-03）。Windows のハイコントラストなどの強制カラー（forced-colors）では
 * box-shadow が描かれない。`outline: none` にして影だけでフォーカスを示す部品は、そこで表示が
 * 丸ごと消える。この道具で Components の 1063 ストーリー・1499 の停止点を測り、**246 が画素差 0、
 * 115 が文字カーソルか下線の色だけ、67 が 1px の枠の色だけ**だった（Pagination / Link / Menu /
 * Tabs / Accordion / SegmentedControl / 入力欄ほか）。直し方は `src/styles/_focus-mixins.scss` の
 * `forced-colors-outline`（透明の outline。強制カラーでだけ色が付く）。
 *
 * `check:focus-indicator` は SCSS の書き方しか見ない（focus-forced-colors の規則）。**実際に
 * 見えるかはこの道具でしか分からない** ── 親が切り取る・別の規則が勝つ、はコードから決められない。
 *
 * ── 測り方 ────────────────────────────────────────────────────────────
 *   1. 各ストーリーで Tab を最大 8 回押す。ポップアップを持つ要素（`aria-haspopup` /
 *      `aria-expanded="false"`）は最初の 1 つだけ開いて、中でフォーカスが当たった要素も測る
 *   2. 停止点ごとに、フォーカス中と `blur()` 後で ①要素の周り（8px 外まで）の画素 ②computed
 *      style（要素・親 3 段・子孫 40 個の outline / box-shadow / 枠の色 / 背景 / 下線 / stroke）を比べる
 *   3. 同じことを通常の表示と強制カラー（Playwright の `forcedColors: "active"`）で行い、
 *      停止点ごとに突き合わせる
 *
 * ── 区分（強制カラー側）────────────────────────────────────────────────
 *   - outline        outline の線種が none 以外に変わる（要素・親・子孫のどれか）。**これが合格**
 *   - nothing        画素差 0。何も出ていない
 *   - weak           画素差が「輪 1px 分」（＝周長）に満たない。文字カーソルだけ・下線の色だけ、など
 *   - other-visible  outline は無いが、周長以上の画素が変わる。枠の色だけ変わる、SVG の線、など
 *
 * ── 数値を読むときの注意（実際に踏んだ）──────────────────────────────────
 *   - **画素差 > 0 を「見える」と数えない。** 強制カラーでは `caret-color: transparent` が効かず、
 *     入力欄は文字カーソルの分（20 画素前後）だけ差が出る。枠の色が Highlight に変わるだけの差も
 *     出る（模擬パレットでは黒 → 濃い紫で、ほぼ見分けられない）。合否は outline の有無で決める。
 *   - computed style は強制後の値を返す（box-shadow は `none`）。`outline: none` のブロックでも
 *     outline-color だけは Highlight に変わって見えるが、線種が none なので描かれない。
 *   - **描画前に Tab を押すと 0 件になる。** `#storybook-root` に子が出るまで待っている。
 *     「停止点 0 のストーリー数」が前回から大きく増えたら、結果ではなく測り方を疑うこと。
 *   - 既定は Chromium の強制カラーの模擬。Windows の実機のパレットとは色が違う（`--system` で実機）。
 *   - **「outline が出ている」は「見分けられる」ではない。** 合否は線種しか見ていない。外枠の
 *     `:focus-within` に出した outline は、色を指定しないと本文の色（CanvasText）になり、枠と同じ色の
 *     線が足されるだけだった（入力欄。実機の画像を見て初めて分かった）。色まで見るなら画像を見ること。
 *   - 閉じたポップアップの中は、最初の 1 つを開いた分しか測らない。
 *
 * 使い方:
 *   npm run build-storybook
 *   npx http-server@14 storybook-static -p 6006 -c-1 --silent   # 別ターミナルで配信
 *   node scripts/measure-focus-forced-colors.mjs                  # Components を全量（各 10 分弱 × 2 回）
 *   node scripts/measure-focus-forced-colors.mjs --only tabs      # ストーリー ID の部分一致で絞る
 *   node scripts/measure-focus-forced-colors.mjs --scope Patterns/ --out tmp-focus-forced-colors-patterns
 *                                                                # 合成画面（題が Patterns/ で始まるストーリー）を測る
 *   node scripts/measure-focus-forced-colors.mjs --base http://localhost:6016
 *   node scripts/measure-focus-forced-colors.mjs --system --only input
 *                                                                # OS のコントラスト テーマをそのまま使う（実機のパレット。ウィンドウが開く）
 *   node scripts/measure-focus-forced-colors.mjs --report tmp-focus-forced-colors
 *                                                                # 取り直さず、前回の結果を集計し直す
 *
 * 結果は `tmp-focus-forced-colors/`（none.jsonl / active.jsonl / joined.json）に残す。
 * 強制カラーで nothing / weak の停止点が 1 つでもあれば exit 1（`--allow` で 0 にする）。
 * other-visible は落とさず件数だけ出す（NodeGraph の線・iframe。目で見て判断する）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';
import pngjs from 'pngjs';

const { PNG } = pngjs;
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const BASE = opt('--base', 'http://localhost:6006');
const ONLY = opt('--only', null);
// 題（title）の先頭で対象を決める。既定は Components。Patterns を測るなら `--scope Patterns/`。
const SCOPE = opt('--scope', 'Components/');
const REPORT = opt('--report', null);
const OUT = REPORT ?? opt('--out', 'tmp-focus-forced-colors');
const ALLOW = args.includes('--allow');
// OS の強制カラー（Windows のコントラスト テーマ）をそのまま使う。模擬ではなく実機のパレットで測る。
// 画面を出さないモードは OS の設定に従わないので、ウィンドウを開く（測っている間、画面に出る）。
const SYSTEM = args.includes('--system');
const CONCURRENCY = 6;
const MAX_TABS = 8;
const PAD = 8;
const VIEWPORT = { width: 1280, height: 800 };

const diffPixels = (a, b) => {
  const pa = PNG.sync.read(a);
  const pb = PNG.sync.read(b);
  if (pa.width !== pb.width || pa.height !== pb.height) return -1;
  let n = 0;
  for (let i = 0; i < pa.data.length; i += 4) {
    if (pa.data[i] !== pb.data[i] || pa.data[i + 1] !== pb.data[i + 1] || pa.data[i + 2] !== pb.data[i + 2]) n += 1;
  }
  return n;
};

// ページの中に置く測定関数
const INIT = () => {
  const PROPS = ['outlineStyle', 'outlineWidth', 'outlineColor', 'boxShadow', 'borderTopColor', 'borderBottomColor', 'borderLeftColor', 'backgroundColor', 'textDecorationLine', 'stroke', 'strokeWidth'];
  // フォーカスを子や親に出す部品がある（TreeView の項目 → .labelContainer、入力欄 → 外枠）
  const nodesFor = (el) => {
    const list = [['self', el]];
    let p = el.parentElement;
    for (let i = 0; i < 3 && p; i += 1, p = p.parentElement) list.push([`anc${i + 1}`, p]);
    Array.from(el.querySelectorAll('*')).slice(0, 40).forEach((d, i) => list.push([`desc${i}`, d]));
    return list;
  };
  window.__snap = (el) => nodesFor(el).map(([where, n]) => {
    const cs = getComputedStyle(n);
    const o = { where };
    PROPS.forEach((k) => { o[k] = cs[k]; });
    return o;
  });
  window.__diff = (a, b) => {
    const changes = [];
    a.forEach((x, i) => {
      const y = b[i];
      if (!y) return;
      PROPS.forEach((k) => {
        if (x[k] !== y[k]) changes.push({ where: x.where, prop: k, focused: x[k], blurred: y[k] });
      });
    });
    return changes;
  };
  window.__describe = (el) => {
    let hook = null;
    for (let n = el; n && !hook; n = n.parentElement) {
      const c = Array.from(n.classList || []).find((t) => /^wim-[a-z]/.test(t) && !t.startsWith('wim-ui-'));
      if (c) hook = c;
    }
    return {
      tag: el.tagName.toLowerCase(),
      role: el.getAttribute('role'),
      hook,
      textEntry: el.matches('input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=button]):not([type=submit]):not([type=file]):not([type=color]), textarea, [contenteditable=""], [contenteditable=true]'),
      popup: el.hasAttribute('aria-haspopup') || el.getAttribute('aria-expanded') === 'false',
    };
  };
};

const frames = (page) => page.evaluate(() => new Promise((r) => { requestAnimationFrame(() => requestAnimationFrame(() => r())); }));

async function measure(page, viaPopup) {
  const info = await page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body || el === document.documentElement) return null;
    if (el.dataset.sweepSeen) return { seen: true };
    el.dataset.sweepSeen = '1';
    el.scrollIntoView({ block: 'center', inline: 'center' });
    return window.__describe(el);
  });
  if (!info || info.seen) return null;
  await frames(page);
  const rect = await page.evaluate(() => {
    const r = document.activeElement.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  });
  const clip = { x: Math.max(0, Math.floor(rect.x - PAD)), y: Math.max(0, Math.floor(rect.y - PAD)) };
  clip.width = Math.min(VIEWPORT.width, Math.ceil(rect.x + rect.w + PAD)) - clip.x;
  clip.height = Math.min(VIEWPORT.height, Math.ceil(rect.y + rect.h + PAD)) - clip.y;
  const measurable = clip.width > 0 && clip.height > 0;
  const shotA = measurable ? await page.screenshot({ clip }) : null;
  const after = await page.evaluate(() => {
    const el = document.activeElement;
    window.__el = el;
    const a = window.__snap(el);
    el.blur();
    return new Promise((res) => {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        // blur でポップアップごと閉じる要素は、比べる相手が無いので測れない
        const still = el.isConnected && el.getClientRects().length > 0;
        res({ changes: still ? window.__diff(a, window.__snap(el)) : null, still });
      }));
    });
  });
  const shotB = measurable && after.still ? await page.screenshot({ clip }) : null;
  const px = shotA && shotB ? diffPixels(shotA, shotB) : null;
  await page.evaluate(() => { if (window.__el && window.__el.isConnected) window.__el.focus({ preventScroll: true }); });
  await frames(page);
  return { ...info, viaPopup, rect, px, still: after.still, changes: after.changes };
}

async function runStory(page, story) {
  const rec = { id: story.id, title: story.title, stops: [], error: null };
  try {
    await page.goto(`${BASE}/iframe.html?id=${story.id}&viewMode=story`, { waitUntil: 'load' });
    await page.waitForSelector('#storybook-root > *', { state: 'attached', timeout: 15000 });
    await page.addStyleTag({ content: '*,*::before,*::after{caret-color:transparent!important;transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important;animation-delay:0s!important}' });
    await page.evaluate(INIT);
    await page.waitForTimeout(400);
    for (let i = 0; i < MAX_TABS; i += 1) {
      await page.keyboard.press('Tab');
      await frames(page);
      const stop = await measure(page, false);
      if (!stop) break;
      rec.stops.push(stop);
      if (!stop.still) break;
      if (stop.popup) {
        await page.keyboard.press('Enter');
        await page.waitForTimeout(350);
        let inner = await measure(page, true);
        if (!inner) {
          await page.keyboard.press('ArrowDown');
          await page.waitForTimeout(150);
          inner = await measure(page, true);
        }
        if (inner) rec.stops.push(inner);
        await page.keyboard.press('Escape');
        break;
      }
    }
  } catch (e) {
    rec.error = String(e.message).split('\n')[0];
  }
  return rec;
}

async function sweep(mode, stories) {
  const file = path.join(OUT, `${mode}.jsonl`);
  const out = fs.createWriteStream(file);
  const useSystem = SYSTEM && mode === 'active';
  const browser = await chromium.launch({ headless: !useSystem });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    // null ＝ Playwright の模擬を外して OS の設定に従わせる
    forcedColors: useSystem ? null : mode === 'active' ? 'active' : 'none',
    colorScheme: useSystem ? null : 'light',
    reducedMotion: 'reduce',
  });
  if (useSystem) {
    const probe = await context.newPage();
    const on = await probe.evaluate(() => matchMedia('(forced-colors: active)').matches);
    await probe.close();
    if (!on) {
      await browser.close();
      console.error('[FAIL] --system: OS の強制カラーが有効ではありません。コントラスト テーマを適用してから流してください（左 Alt + 左 Shift + PrintScreen）。');
      process.exit(1);
    }
  }
  let cursor = 0;
  let done = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    const page = await context.newPage();
    while (cursor < stories.length) {
      const story = stories[cursor];
      cursor += 1;
      const rec = await runStory(page, story);
      out.write(`${JSON.stringify(rec)}\n`);
      done += 1;
      if (done % 100 === 0) console.log(`  ${mode}: ${done}/${stories.length}`);
    }
    await page.close();
  }));
  await new Promise((r) => { out.end(r); });
  await browser.close();
}

const read = (mode) => fs.readFileSync(path.join(OUT, `${mode}.jsonl`), 'utf8').trim().split('\n').map((l) => JSON.parse(l));
const hasOutline = (s) => (s.changes || []).some((c) => c.prop === 'outlineStyle' && c.focused !== 'none');
const normalKind = (s) => {
  if (s.px === null) return 'unmeasurable';
  const ch = s.changes || [];
  if (hasOutline(s)) return 'outline';
  const sh = ch.filter((c) => c.prop === 'boxShadow' && c.focused !== 'none');
  if (sh.some((c) => /inset/.test(c.focused))) return 'shadow-inset';
  if (sh.length) return 'shadow-outer';
  if (ch.some((c) => /border/.test(c.prop))) return 'border-only';
  if (ch.length) return 'other-style';
  return s.px > 0 ? 'pixel-only' : 'nothing';
};
const forcedClass = (s) => {
  // iframe は中身が別の文書で、フォーカスはその中に入る（画素差は埋め込み先の描画の揺れ）
  if (s.px === null || s.tag === 'iframe') return 'unmeasurable';
  if (hasOutline(s)) return 'outline';
  if (s.px === 0) return 'nothing';
  return s.px < 2 * (s.rect.w + s.rect.h) ? 'weak' : 'other-visible';
};

function report() {
  const none = read('none');
  const active = read('active');
  for (const [name, rows] of [['通常      ', none], ['強制カラー', active]]) {
    const stops = rows.reduce((n, r) => n + r.stops.length, 0);
    const errors = rows.filter((r) => r.error);
    // 測れた件数を先に出す。ここが動いたら結果ではなく測り方を疑う
    console.log(`${name}: ストーリー ${rows.length} / エラー ${errors.length} / 停止点 0 のストーリー ${rows.filter((r) => !r.error && r.stops.length === 0).length} / 停止点 ${stops}`);
    errors.slice(0, 5).forEach((r) => console.log(`    ${r.id}: ${r.error}`));
  }
  const byId = new Map(active.map((r) => [r.id, r]));
  const table = {};
  const cells = {};
  const joined = [];
  let unjoined = 0;
  for (const r of none) {
    const a = byId.get(r.id);
    r.stops.forEach((s, i) => {
      const t = a && a.stops[i];
      if (!t || t.tag !== s.tag || t.hook !== s.hook) { unjoined += 1; return; }
      const k = normalKind(s);
      const f = forcedClass(t);
      table[k] ??= {};
      table[k][f] = (table[k][f] || 0) + 1;
      const label = `${s.hook || '(フックなし)'}${s.textEntry ? ' [文字入力]' : ''}`;
      cells[`${k} -> ${f}`] ??= {};
      cells[`${k} -> ${f}`][label] = (cells[`${k} -> ${f}`][label] || 0) + 1;
      joined.push({ id: r.id, i, hook: s.hook, tag: s.tag, role: s.role, textEntry: s.textEntry, viaPopup: s.viaPopup, normal: k, forced: f, pxNormal: s.px, pxForced: t.px, w: Math.round(s.rect.w), h: Math.round(s.rect.h) });
    });
  }
  fs.writeFileSync(path.join(OUT, 'joined.json'), JSON.stringify(joined));
  console.log(`突き合わせられなかった停止点: ${unjoined}`);
  const cols = ['outline', 'other-visible', 'weak', 'nothing', 'unmeasurable'];
  console.log(`\n${'通常 \\ 強制カラー'.padEnd(20)}${cols.map((c) => c.padStart(15)).join('')}`);
  for (const k of Object.keys(table)) console.log(`${k.padEnd(24)}${cols.map((c) => String(table[k][c] || 0).padStart(15)).join('')}`);
  for (const key of Object.keys(cells).sort()) {
    if (key.endsWith('-> outline')) continue;
    const list = Object.entries(cells[key]).sort((x, y) => y[1] - x[1]);
    console.log(`\n## ${key}`);
    console.log(`  ${list.map(([h, n]) => `${h}:${n}`).join('  ')}`);
  }
  // other-visible（SVG の線の色が変わる NodeGraph、中身が別文書の iframe）は目で見て判断する。落とすのは消える分だけ
  const missing = joined.filter((j) => j.forced === 'nothing' || j.forced === 'weak').length;
  const review = joined.filter((j) => j.forced === 'other-visible' || j.forced === 'unmeasurable').length;
  console.log(`\n強制カラーで消える・弱い停止点: ${missing} / ${joined.length}　outline 以外で見えている（要目視）: ${review}（詳細は ${path.join(OUT, 'joined.json')}）`);
  return { missing, joined: joined.length, unjoined };
}

if (!REPORT) {
  const res = await fetch(`${BASE}/index.json`).catch(() => null);
  if (!res || !res.ok) {
    console.error(`[FAIL] ${BASE}/index.json が取れません。先に build-storybook して http-server で配信してください。`);
    process.exit(1);
  }
  const index = await res.json();
  let stories = Object.values(index.entries).filter((e) => e.type === 'story' && e.title.startsWith(SCOPE));
  if (ONLY) stories = stories.filter((s) => s.id.includes(ONLY));
  if (stories.length === 0) {
    console.error('[FAIL] 対象のストーリーが 0 件です。--scope / --only の指定か、index.json の中身を確かめてください。');
    process.exit(1);
  }
  fs.mkdirSync(OUT, { recursive: true });
  console.log(`対象: ${stories.length} ストーリー（${SCOPE}・${BASE}）`);
  await sweep('none', stories);
  await sweep('active', stories);
}
const result = report();
if (result.joined === 0) {
  console.error('[FAIL] 停止点が 1 つも測れていません。');
  process.exit(1);
}
process.exit(result.missing > 0 && !ALLOW ? 1 : 0);
