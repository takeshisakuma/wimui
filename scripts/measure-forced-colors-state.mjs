/**
 * measure:forced-colors-state — **選択・オンの状態と、背景色だけで描いた図形が、強制カラーでも見えるかを実物で測る道具**。
 *
 * 起票の経緯（2026-11-15・T391）。Windows のコントラスト テーマなどの強制カラー（forced-colors）では、
 * `background-color` がページの地の色に置き換わる。背景の色だけで示した「選択中」「オン」は消え、
 * 背景の色だけで描いた図形（Switch の軌道・Progress の値・点・線）は地に溶ける。この道具で
 * Components の 1,116 ストーリーを測り、**選択の印が強制カラーでだけ消えるものが 51 ストーリー・16 部品、
 * 背景だけの図形が地と同じ色になるものが 307 個・29 部品**だった（Switch は部品ごと見えない）。
 *
 * フォーカス表示は `measure:focus-forced-colors`（MAINTENANCE 12-4）が測る。こちらは状態と図形。
 * 直し方は `docs/rules/css.md` の「強制カラーで、状態と図形を消さない」。
 *
 * ── 測り方 ────────────────────────────────────────────────────────────
 *   state（選択の印）
 *     1. 各ストーリーで、選択の印を持つ要素を探す（`aria-selected` / `aria-checked` / `aria-pressed` /
 *        `aria-current`・`input:checked`。種類ごとに最初の 1 つ）
 *     2. その要素の矩形（4px 外まで）を撮る → 選択をほかへ移す（同じ並びの、選ばれていない要素を押す。
 *        無ければ自分を押して切り替える）→ ポインターとフォーカスを外して、同じ矩形を撮り直す
 *     3. 通常の表示と強制カラー（Playwright の `forcedColors: "active"`）で行い、画素の差を比べる
 *   shapes（背景だけの図形）
 *     1. 通常の表示で、文字も枠も outline も持たず、背景の色が地と違う要素に印を付ける
 *     2. 強制カラーに切り替えて、その要素の背景が地と同じ色になったかを見る
 *
 * ── 区分 ──────────────────────────────────────────────────────────────
 *   state:  lost    通常の表示では差が出るのに、強制カラーでは差が 0 画素。**これが不合格**
 *           weak    強制カラーでの差が 12 画素に満たないか、通常の表示での差の 1 割に満たない
 *                   （落とさず、件数と一覧を出す。目で見て判断する）
 *           visible 強制カラーでも差が出る
 *           same    通常の表示でも差が出ない（状態を見た目で示していない。この道具の対象外）
 *           unmoved 押しても状態が変わらなかった（測れていない）
 *   shapes: lost    強制カラーで、地と同じ色になり、枠も outline も無い。**これが不合格**
 *
 * ── 数値を読むときの注意（実際に踏んだ）──────────────────────────────────
 *   - **computed style の比較で合否を決めない。** Radio は、選択の点（`::after`）の不透明度が変わるので
 *     「違いあり」と出たが、点の背景が地の色になるので、画素の差は 0 だった。合否は画素で決める。
 *   - **「印を持つストーリー数」を先に見る。** 描画前に探すと 0 件になる。前回から大きく減ったら、
 *     結果ではなく測り方を疑うこと。unmoved が増えたときも同じ。
 *   - visible は「差がある」で、「見分けやすい」ではない。文字の太さだけが変わる部品も visible に入る。
 *   - **lost と weak の境目は、回によって動く。** CodeDiffViewer の表示切替は、同じビルドで 0 画素の回と
 *     28 画素の回があった（通常の表示では 868 画素）。数画素〜数十画素の差は、状態の印ではなく
 *     描画の揺れのことがある。weak の一覧も、lost と同じ「直す候補」として読むこと。
 *   - 既定は Chromium の強制カラーの模擬。Windows の実機のパレットとは色が違う。
 *   - 測っていないもの: 閉じたポップアップの中（開いた姿のストーリーの分だけ）・疑似要素だけで描いた
 *     図形（Slider のつまみなど。shapes は要素しか見ない）・SVG・グラフ。
 *
 * 使い方:
 *   npm run build-storybook
 *   npx http-server@14 storybook-static -p 6006 -c-1 --silent   # 別ターミナルで配信
 *   node scripts/measure-forced-colors-state.mjs                  # Components を全量（state → shapes）
 *   node scripts/measure-forced-colors-state.mjs --only switch    # ストーリー ID の部分一致で絞る
 *   node scripts/measure-forced-colors-state.mjs --part state     # 片方だけ（state / shapes）
 *   node scripts/measure-forced-colors-state.mjs --base http://localhost:6016
 *   node scripts/measure-forced-colors-state.mjs --shots          # state の前後の画像も残す（<out>/shots）
 *   node scripts/measure-forced-colors-state.mjs --selftest       # 対照を注入して、区分が合うかを確かめる
 *   node scripts/measure-forced-colors-state.mjs --report --out tmp-forced-colors-state
 *                                                                # 取り直さず、前回の結果を集計し直す
 *
 * 結果は `tmp-forced-colors-state/`（state.json / shapes.json）に残す。
 * lost が 1 つでもあれば exit 1（`--allow` で 0 にする）。
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
const SCOPE = opt('--scope', 'Components/');
const PART = opt('--part', 'all');
// 対照は別の置き場へ書く（全量の結果を、あとから流した対照で上書きしない ── 実際に上書きした）
const OUT = opt('--out', args.includes('--selftest') ? 'tmp-forced-colors-state-selftest' : 'tmp-forced-colors-state');
const ALLOW = args.includes('--allow');
const SHOTS = args.includes('--shots');
const SELFTEST = args.includes('--selftest');
// 取り直さず、前回の結果（<out>/state.json・shapes.json）を集計し直す
const REPORT = args.includes('--report');
const CONCURRENCY = 6;
const VIEWPORT = { width: 1280, height: 720 };
// 弱い: 強制カラーでの差が 12 画素に満たないか、通常の表示での差の 1 割に満たない
const WEAK_BELOW = 12;
const WEAK_RATIO = 0.1;
const KINDS = ['aria-selected', 'aria-checked', 'aria-pressed', 'aria-current', 'checked'];

const index = JSON.parse(fs.readFileSync('storybook-static/index.json', 'utf8'));
let stories = Object.values(index.entries).filter((e) => e.type === 'story' && e.title.startsWith(SCOPE));
if (ONLY) stories = stories.filter((s) => s.id.includes(ONLY));
if (SELFTEST) stories = stories.slice(0, 1);
fs.mkdirSync(OUT, { recursive: true });
if (SHOTS) fs.mkdirSync(path.join(OUT, 'shots'), { recursive: true });

const diffPixels = (a, b) => {
  const pa = PNG.sync.read(a);
  const pb = PNG.sync.read(b);
  if (pa.width !== pb.width || pa.height !== pb.height) return -1;
  let n = 0;
  for (let i = 0; i < pa.data.length; i += 4) {
    // アンチエイリアスの揺れを数えない（3 チャンネルの差の合計が 24 を超える画素だけ）
    if (Math.abs(pa.data[i] - pb.data[i]) + Math.abs(pa.data[i + 1] - pb.data[i + 1]) + Math.abs(pa.data[i + 2] - pb.data[i + 2]) > 24) n += 1;
  }
  return n;
};

const open = async (page, id) => {
  await page.goto(`${BASE}/iframe.html?id=${id}&viewMode=story`, { waitUntil: 'load' });
  // 描画前に探すと 0 件になる
  await page.waitForFunction(() => document.querySelector('#storybook-root')?.children.length > 0, null, { timeout: 15000 });
  await page.waitForTimeout(400);
  await page.mouse.move(0, 0);
};

// ── state ──────────────────────────────────────────────────────────────

/** ページの中で走る。その種類の印を持つ要素と、選択を移す先に目印を付け、撮る矩形を返す。 */
const pickPair = (kind) => {
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  // input は、見た目を持つのが label か親のことがある
  const root = (el) => (el.tagName === 'INPUT' ? el.closest('label') || el.parentElement : el);
  const isOn = (el) =>
    kind === 'checked'
      ? el.checked === true
      : kind === 'aria-current'
        ? el.hasAttribute(kind) && el.getAttribute(kind) !== 'false'
        : el.getAttribute(kind) === 'true';
  const candidates =
    kind === 'checked'
      ? [...document.querySelectorAll('input:checked')]
      : [...document.querySelectorAll(kind === 'aria-current' ? '[aria-current]:not([aria-current="false"])' : `[${kind}="true"]`)];
  const on = candidates.find((el) => visible(root(el)) && !el.disabled && el.getAttribute('aria-disabled') !== 'true');
  if (!on) return null;
  let off = null;
  for (let scope = on.parentElement, depth = 0; depth < 5 && scope && !off; depth += 1, scope = scope.parentElement) {
    off = [...scope.querySelectorAll(on.tagName.toLowerCase())].find(
      (el) =>
        el !== on &&
        !el.contains(on) &&
        !on.contains(el) &&
        el.getAttribute('role') === on.getAttribute('role') &&
        (on.tagName !== 'INPUT' || el.type === on.type) &&
        visible(root(el)) &&
        !el.disabled &&
        el.getAttribute('aria-disabled') !== 'true' &&
        !isOn(el),
    );
  }
  on.setAttribute('data-fc-on', '1');
  if (off) off.setAttribute('data-fc-off', '1');
  const r = root(on).getBoundingClientRect();
  const name = (root(on).className || '').toString().split(' ').filter(Boolean)[0] || on.tagName.toLowerCase();
  return {
    clip: { x: Math.max(0, r.x - 4), y: Math.max(0, r.y - 4), width: r.width + 8, height: r.height + 8 },
    via: off ? 'other' : 'self',
    name: name.replace(/_[a-z0-9]{5}_\d+$/, ''),
  };
};

const stillOn = (kind) => {
  const on = document.querySelector('[data-fc-on]');
  if (!on) return 'gone';
  if (kind === 'checked') return on.checked === true;
  if (kind === 'aria-current') return on.hasAttribute(kind) && on.getAttribute(kind) !== 'false';
  return on.getAttribute(kind) === 'true';
};

/**
 * 対照。背景だけで選択を示すタブ（lost と出るはず）と、下線でも示すタブ（visible と出るはず）。
 * button ではなく div で作る ── button は、強制カラーで UA の枠が付き、選択と関係なく差が出る。
 * 「選ばれていない側に透明の枠」も使わない ── 強制カラーでは透明の枠にも色が付き、両方に枠が出て差が消える。
 */
const injectStateControls = (variant) => {
  const selected = variant === 'lost' ? 'background:#0a58ca;color:#fff' : 'background:#0a58ca;color:#fff;box-sizing:border-box;border-bottom:4px solid #000';
  const plain = 'display:inline-block;padding:8px;height:40px;cursor:pointer;';
  const d = document.createElement('div');
  d.setAttribute('role', 'tablist');
  d.innerHTML = `<div role="tab" aria-selected="true" style="${plain}${selected}">One</div><div role="tab" aria-selected="false" style="${plain}">Two</div>`;
  const [a, b] = d.children;
  b.addEventListener('click', () => {
    a.setAttribute('aria-selected', 'false');
    a.style.cssText = plain;
    b.setAttribute('aria-selected', 'true');
  });
  document.body.prepend(d);
};

const measureState = async (browser) => {
  const rows = [];
  let cursor = 0;
  let errors = 0;
  const jobs = SELFTEST ? [{ ...stories[0], control: 'lost' }, { ...stories[0], control: 'visible' }] : stories;
  const worker = async () => {
    const ctx = await browser.newContext({ viewport: VIEWPORT, reducedMotion: 'reduce' });
    let page = await ctx.newPage();
    while (cursor < jobs.length) {
      const s = jobs[cursor++];
      try {
        // 印を持たないストーリーが大半なので、先に 1 回だけ開いて、在る種類を調べる
        await page.emulateMedia({ forcedColors: 'none', reducedMotion: 'reduce' });
        await open(page, s.id);
        const kinds = s.control
          ? ['aria-selected']
          : await page.evaluate(
              (all) =>
                all.filter((kind) =>
                  document.querySelector(
                    kind === 'checked' ? 'input:checked' : kind === 'aria-current' ? '[aria-current]:not([aria-current="false"])' : `[${kind}="true"]`,
                  ),
                ),
              KINDS,
            );
        for (const kind of kinds) {
          const row = { id: s.id, title: s.title, kind, control: s.control };
          // 1 回分。via は、選択を移すために押す相手（other = 並びのほかの要素 / self = 自分）
          const attempt = async (mode, via) => {
            await page.emulateMedia({ forcedColors: mode, reducedMotion: 'reduce' });
            await open(page, s.id);
            if (s.control) await page.evaluate(injectStateControls, s.control);
            const pair = await page.evaluate(pickPair, kind);
            if (!pair) return null;
            const used = via ?? pair.via;
            if (used === 'other' && pair.via !== 'other') return null;
            const before = await page.screenshot({ clip: pair.clip });
            const target = page.locator(used === 'other' ? '[data-fc-off]' : '[data-fc-on]').first();
            // リンクは、押してもページを離れないようにする
            await target.evaluate((el) => (el.tagName === 'A' ? el.addEventListener('click', (e) => e.preventDefault(), { once: true }) : null));
            await target.click({ force: true, timeout: 3000 }).catch(() => {});
            await page.mouse.move(0, 0);
            await page.evaluate(() => document.activeElement?.blur?.());
            await page.waitForTimeout(600);
            const after = await page.screenshot({ clip: pair.clip });
            if (SHOTS) {
              const base = path.join(OUT, 'shots', `${s.id}.${kind}.${mode}`);
              fs.writeFileSync(`${base}.before.png`, before);
              fs.writeFileSync(`${base}.after.png`, after);
            }
            return { name: pair.name, via: used, moved: (await page.evaluate(stillOn, kind)) === false, diff: diffPixels(before, after) };
          };
          let normal = await attempt('none');
          // ほかを押しても外れないもの（チェックボックスやトグルの並び）は、自分を押して切り替える
          if (normal && !normal.moved && normal.via === 'other') normal = (await attempt('none', 'self')) ?? normal;
          if (normal) {
            row.name = normal.name;
            row.via = normal.via;
            row.none = { moved: normal.moved, diff: normal.diff };
            const forced = await attempt('active', normal.via);
            if (forced) row.active = { moved: forced.moved, diff: forced.diff };
          }
          if (row.none) rows.push(row);
        }
      } catch (e) {
        errors += 1;
        rows.push({ id: s.id, title: s.title, error: String(e).slice(0, 160) });
        await page.close().catch(() => {});
        page = await ctx.newPage();
      }
    }
    await ctx.close();
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  fs.writeFileSync(path.join(OUT, 'state.json'), JSON.stringify(rows, null, 1));
  return { rows, errors };
};

const judgeState = (rows) => {
  for (const r of rows) {
    if (r.error) continue;
    r.verdict =
      !r.none.moved || !r.active?.moved
        ? 'unmoved'
        : r.none.diff <= 0
          ? 'same'
          : r.active.diff === 0
            ? 'lost'
            : r.active.diff < WEAK_BELOW || r.active.diff < r.none.diff * WEAK_RATIO
              ? 'weak'
              : 'visible';
  }
};

const reportState = ({ rows, errors }) => {
  judgeState(rows);
  const measured = rows.filter((r) => r.verdict);
  const count = (v) => measured.filter((r) => r.verdict === v).length;
  const comp = (r) => r.title.split('/').pop();
  console.log('\n== state（選択・オンの印）');
  console.log(
    `stories ${stories.length} | 印を持つストーリー ${new Set(measured.map((r) => r.id)).size} | 組 ${measured.length} | errors ${errors}`,
  );
  console.log(`lost ${count('lost')} | weak ${count('weak')} | visible ${count('visible')} | same ${count('same')} | unmoved ${count('unmoved')}`);
  for (const verdict of ['lost', 'weak', 'unmoved']) {
    const list = measured.filter((r) => r.verdict === verdict);
    if (!list.length) continue;
    const byComp = {};
    for (const r of list) (byComp[comp(r)] ||= []).push(r);
    console.log(`\n-- ${verdict}: ${list.length} 組・${new Set(list.map((r) => r.id)).size} ストーリー・${Object.keys(byComp).length} 部品`);
    for (const [name, items] of Object.entries(byComp).sort()) {
      const kinds = [...new Set(items.map((r) => `${r.kind}(${r.via})`))].join(' ');
      const diffs = verdict === 'unmoved' ? '' : ` normal ${items.map((r) => r.none.diff).join('/')} forced ${items.map((r) => r.active.diff).join('/')}`;
      console.log(`  ${name} ×${items.length} ${kinds}${diffs}`);
      if (ONLY || verdict !== 'unmoved') for (const r of items.slice(0, ONLY ? 99 : 3)) console.log(`     ${r.id}`);
    }
  }
  return count('lost');
};

// ── shapes ─────────────────────────────────────────────────────────────

/** ページの中で走る。通常の表示で「背景だけの図形」に目印を付け、数を返す。 */
const markShapes = () => {
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[ ,/]+/).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const ground = (el) => {
    for (let e = el; e; e = e.parentElement) {
      const c = parse(getComputedStyle(e).backgroundColor);
      if (c && c.a > 0.5) return c;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  };
  const dist = (a, b) => Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b);
  let n = 0;
  for (const el of document.querySelectorAll('#storybook-root *, body > div:not(#storybook-root):not(#storybook-docs) *')) {
    if (el instanceof SVGElement || el.closest('svg')) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2 || r.width * r.height < 12) continue;
    // 画面を覆う幕は図形ではない
    if (r.width > 600 && r.height > 300) continue;
    const bg = parse(cs.backgroundColor);
    if (!bg || bg.a < 0.3) continue;
    // 文字や絵を持つ要素は「面」で、ここの対象ではない
    if ((el.textContent || '').trim() !== '') continue;
    if (el.querySelector('svg, img, input, canvas, video')) continue;
    const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some(
      (side) => parseFloat(cs[`border${side}Width`]) > 0 && cs[`border${side}Style`] !== 'none' && (parse(cs[`border${side}Color`])?.a ?? 0) > 0.3,
    );
    if (hasBorder) continue;
    if (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) continue;
    // 通常の表示でも地とほぼ同じ色なら、もともと見えていない
    if (dist(bg, ground(el.parentElement)) < 40) continue;
    el.setAttribute('data-fc-shape', String(n));
    n += 1;
  }
  return n;
};

/** ページの中で走る。強制カラーで、目印の付いた要素が地と見分けられるかを返す。 */
const readShapes = () => {
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[ ,/]+/).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const ground = (el) => {
    for (let e = el; e; e = e.parentElement) {
      const c = parse(getComputedStyle(e).backgroundColor);
      if (c && c.a > 0.5) return c;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  };
  const dist = (a, b) => Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b);
  return [...document.querySelectorAll('[data-fc-shape]')].map((el) => {
    const cs = getComputedStyle(el);
    const bg = parse(cs.backgroundColor);
    // 強制カラーでは、透明の枠にも色が付く（枠があれば、形は残る）
    const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some((side) => parseFloat(cs[`border${side}Width`]) > 0 && cs[`border${side}Style`] !== 'none');
    const hasOutline = cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0;
    const r = el.getBoundingClientRect();
    const cls = (el.className || '').toString().split(' ').filter(Boolean)[0] || el.tagName.toLowerCase();
    return {
      cls: cls.replace(/_[a-z0-9]{5}_\d+$/, ''),
      lost: (!bg || bg.a < 0.3 || dist(bg, ground(el.parentElement)) < 40) && !hasBorder && !hasOutline,
      w: Math.round(r.width),
      h: Math.round(r.height),
    };
  });
};

/** 対照。背景だけ（lost のはず）・透明の枠つき・`forced-color-adjust: none`（どちらも残るはず）。 */
const injectShapeControls = () => {
  const d = document.createElement('div');
  d.innerHTML =
    '<div class="ctl-bg" style="width:40px;height:8px;background:#0a58ca"></div>' +
    '<div class="ctl-border" style="width:40px;height:8px;background:#0a58ca;border:1px solid transparent"></div>' +
    '<div class="ctl-adjust" style="width:40px;height:8px;background:#0a58ca;forced-color-adjust:none"></div>';
  document.querySelector('#storybook-root').appendChild(d);
};

const measureShapes = async (browser) => {
  const rows = [];
  let cursor = 0;
  let errors = 0;
  const worker = async () => {
    const ctx = await browser.newContext({ viewport: VIEWPORT, reducedMotion: 'reduce' });
    let page = await ctx.newPage();
    while (cursor < stories.length) {
      const s = stories[cursor++];
      try {
        await page.emulateMedia({ forcedColors: 'none', reducedMotion: 'reduce' });
        await open(page, s.id);
        if (SELFTEST) await page.evaluate(injectShapeControls);
        const n = await page.evaluate(markShapes);
        if (!n) {
          rows.push({ id: s.id, title: s.title, shapes: [] });
          continue;
        }
        await page.emulateMedia({ forcedColors: 'active', reducedMotion: 'reduce' });
        await page.waitForTimeout(200);
        rows.push({ id: s.id, title: s.title, shapes: await page.evaluate(readShapes) });
      } catch (e) {
        errors += 1;
        rows.push({ id: s.id, title: s.title, error: String(e).slice(0, 160) });
        await page.close().catch(() => {});
        page = await ctx.newPage();
      }
    }
    await ctx.close();
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  fs.writeFileSync(path.join(OUT, 'shapes.json'), JSON.stringify(rows, null, 1));
  return { rows, errors };
};

const reportShapes = ({ rows, errors }) => {
  const comp = {};
  let total = 0;
  let lost = 0;
  for (const r of rows) {
    for (const shape of r.shapes || []) {
      total += 1;
      const c = (comp[r.title.split('/').pop()] ||= { lost: {}, kept: {}, stories: new Set() });
      if (shape.lost) {
        lost += 1;
        c.lost[shape.cls] = (c.lost[shape.cls] || 0) + 1;
        c.stories.add(r.id);
      } else c.kept[shape.cls] = (c.kept[shape.cls] || 0) + 1;
    }
  }
  const withLost = Object.entries(comp).filter(([, c]) => Object.keys(c.lost).length);
  console.log('\n== shapes（背景だけの図形）');
  console.log(`stories ${stories.length} | 図形 ${total} | lost ${lost} | lost を持つ部品 ${withLost.length} | errors ${errors}`);
  const tally = (o) => Object.entries(o).map(([k, v]) => `${k}×${v}`).join(' ');
  for (const [name, c] of (SELFTEST ? Object.entries(comp) : withLost).sort()) {
    console.log(`  ${name} | stories ${c.stories.size} | lost: ${tally(c.lost) || '-'} | kept: ${tally(c.kept).slice(0, 80) || '-'}`);
  }
  return lost;
};

// ── main ───────────────────────────────────────────────────────────────

const saved = (name) => ({ rows: JSON.parse(fs.readFileSync(path.join(OUT, name), 'utf8')), errors: 0 });
const browser = REPORT ? null : await chromium.launch();
let failed = 0;
let selftestOk = true;
if (PART === 'all' || PART === 'state') {
  const result = REPORT ? saved('state.json') : await measureState(browser);
  failed += reportState(result);
  if (SELFTEST) {
    const verdict = (control) => result.rows.find((r) => r.control === control)?.verdict;
    const ok = verdict('lost') === 'lost' && verdict('visible') === 'visible';
    console.log(`\nselftest state: 背景だけのタブ → ${verdict('lost')}（lost のはず）/ 枠もあるタブ → ${verdict('visible')}（visible のはず）: ${ok ? 'OK' : 'NG'}`);
    selftestOk &&= ok;
  }
}
if (PART === 'all' || PART === 'shapes') {
  const result = REPORT ? saved('shapes.json') : await measureShapes(browser);
  failed += reportShapes(result);
  if (SELFTEST) {
    const shapes = result.rows.flatMap((r) => r.shapes || []);
    const lostOf = (cls) => shapes.find((s) => s.cls === cls)?.lost;
    const ok = lostOf('ctl-bg') === true && lostOf('ctl-border') === false && lostOf('ctl-adjust') === false;
    console.log(`\nselftest shapes: 背景だけ → ${lostOf('ctl-bg')}（true のはず）/ 透明の枠 → ${lostOf('ctl-border')}（false のはず）/ forced-color-adjust: none → ${lostOf('ctl-adjust')}（false のはず）: ${ok ? 'OK' : 'NG'}`);
    selftestOk &&= ok;
  }
}
await browser?.close();

if (SELFTEST) process.exit(selftestOk ? 0 : 1);
if (failed > 0 && !ALLOW) {
  console.log(`\n✗ 強制カラーで見えなくなるものが ${failed} 件ある。`);
  process.exit(1);
}
