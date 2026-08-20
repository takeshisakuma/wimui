/**
 * a11y:incomplete:measure — **凍結した `color-contrast` の incomplete を実測する道具**（T206）。
 *
 * `vrt/a11y-incomplete.json` は「見たうえで許す」形の凍結だが、**凍結は目視の代わりにならない**。
 * axe が `color-contrast` を incomplete に落とす理由は「コントラスト比が不明」ではなく
 * **「背景色が決められない」**（画像ノードを含む / グラデーション / 重なり / 擬似要素）なので、
 * **背景さえ与えれば判定は axe がそのままやる**。2026-08-19 にこの道具で凍結分 1325 ノードを
 * 全量測り、4.5:1 を割る 474 件（T212 / T213 / T214）を特定した。
 *
 * ── 測り方 ────────────────────────────────────────────────────────────
 *   1. 対象の**文字だけ透明にして**、その要素の矩形を撮る
 *      （`color` / `fill` / `stroke` / `text-shadow` を透かすだけなので、背景・重なり・
 *        グラデーション・画像はそのまま描かれる）
 *   2. 撮れた画素の**最頻色（面積の大半）・最暗・最明**を取る
 *      （順序づけと頻度だけ。**合否はここで決めない**）
 *   3. その色を地に、対象の computed な文字色・字形で**見本を 1 つ作り、axe に測らせる**
 *
 * **自分でコントラストを計算しない。** 色計算を再実装すると本物と食い違う（T108 で実証済み。
 * 最小 4.62 のところを 1.01 と出した）。この道具がやるのは「背景を決める」ところまで。
 *
 * ── 要素そのものを塗る版は使えない（実証済みの落とし穴）──────────────────
 * 対象の要素（や祖先）を不透明色で塗って測り直す方が素直に見えるが、axe は
 * **塗った要素が文字の矩形を完全に含む**ことを求める（axe-core の `fullyEncompasses`）。
 * 行間が詰まった要素は文字の矩形が要素の箱からはみ出すため `elmPartiallyObscured` になり、
 * **測れているものまで全部 FAIL に見える**。最初の版はこれで誤診しかけた。見本を作る方式なら踏まない。
 *
 * ── 測れないもの ──────────────────────────────────────────────────────
 *   - **覆われている文字**（`SwipeAction` の隠れたラベルなど）。拾える画素は覆っている側の色で、
 *     その要素の背景ではない。白 on 白＝比 1.00（axe の `equalRatio`）として出るので、
 *     結果側で `equalRatio` を見れば分かる。測るなら**出ている状態のストーリー**が要る。
 *   - **支援技術に出ない記号**（`aria-hidden` の差分記号など）。axe が `nonBmp` として測らない。
 *   - **まだ読み込み中のストーリー**（2026-08-20・T213 で実証）。この道具は
 *     `fonts.ready` + 2 rAF でしか待たないので、**その時点で塗られているもの**を測る。
 *     `demoDelay` を持つストーリーはローディングのスケルトンが被さったまま測られる ──
 *     `Audio / Premium Features`（`demoDelay={2000}`）の時刻表示は
 *     **地が `rgb(245,245,245)`＝スケルトンで 1.06** と出るが、2 秒待つと地は本来の
 *     `rgb(38,38,38)`（`surface-inverse` のパネル）で、**実際は 8.13 で通っている**。
 *     `demoDelay` は 27 か所にあるので、`media` 系の結果は疑ってかかること。
 *     **画素が light と dark で完全に同じ値なら、それはテーマに依存しない何か
 *     （スケルトン・写真・覆っている要素）を測っている**というのが手早い見分け方。
 *   - **`mix-blend-mode` が効いている文字**（同上）。この道具は `getComputedStyle` の
 *     `color` を文字色として見本を作るが、**実際に塗られる色は合成結果**なので別物になる。
 *     `Image / BlendingEffects` の `mix-blend-mode: difference` + `color: white` は
 *     「白」として 1.96 と出るが、実際の glyph は地の反転色で、実測は中央値 2.95 だった。
 *     測るなら**文字を透過させた版と通常版を撮って画素ごとに差を取る**（T213 で実施）。
 *
 * ── 数値を読むときの注意 ──────────────────────────────────────────────
 *   - 画素の色はスクリーンショットの丸めで 1 チャンネルあたり ±1 ずれる。実測の誤差は最大 0.07 だったので、
 *     **4.5 から 0.1 以内の値は「際どい」**として扱う。
 *   - Storybook のキャンバス地（`#e5e5e5` / `#262626`）は製品のサーフェストークン
 *     （`#fff` / `#393939`）と違う。境界付近はトークンの地で測り直すこと。
 *
 * 使い方:
 *   npx http-server@14 storybook-static -p 6006 -c-1 --silent   # 別ターミナルで配信（先に build-storybook）
 *   node scripts/measure-a11y-incomplete.mjs --verify           # **道具が正しいことの確認（最初にこれ）**
 *   node scripts/measure-a11y-incomplete.mjs                    # 凍結分を全量測る
 *   node scripts/measure-a11y-incomplete.mjs --only linechart   # ストーリー ID の部分一致で絞る
 *   node scripts/measure-a11y-incomplete.mjs --inject-fg "rgb(215,215,215)" --only linechart
 *                                                              # 故意に文字色を潰す＝**鳴ることの実証**
 *   node scripts/measure-a11y-incomplete.mjs --report tmp-a11y-measure/results.jsonl
 *                                                              # 既存の結果を読み直してまとめ直す
 *
 * 出力は 1 ノード 1 行の JSONL（既定 `tmp-a11y-measure/results.jsonl`。`tmp-` で始まるディレクトリは gitignore 済み）。
 *
 * 前提: `npm run build-storybook` 済みの `storybook-static` を配信していること。
 * 依存は Playwright と @axe-core/playwright だけ（PNG のデコードはブラウザの canvas にやらせる）。
 */
import fs from "fs";
import path from "path";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// ── 引数 ──────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const value = (name, fallback) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};
const only = value("--only", null);
const limit = Number(value("--limit", Infinity));
const concurrency = Number(value("--concurrency", 4));
const baseUrl = value("--base-url", "http://localhost:6006");
const outPath = value("--out", "tmp-a11y-measure/results.jsonl");
const injectFg = value("--inject-fg", null);
const reportOnly = value("--report", null);
const verify = flag("--verify");

// `vrt/a11y.spec.ts` と同じ設定。**ここがずれると測っているものが変わる。**
const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"];
const DISABLED_RULES = [
  "bypass",
  "landmark-one-main",
  "landmark-no-duplicate-main",
  "landmark-main-is-top-level",
  "landmark-unique",
  "page-has-heading-one",
  "region",
  "document-title",
  "html-has-lang",
];

/** 文字だけ透かす。背景・重なり・画像はそのまま描かれる。 */
const HIDE_STYLE = `[data-probe-hide], [data-probe-hide] *, [data-probe-hide]::before, [data-probe-hide]::after {
  color: transparent !important; -webkit-text-fill-color: transparent !important;
  fill: transparent !important; stroke: transparent !important; text-shadow: none !important; }`;

const REASON_LABEL = (r = "") =>
  /image node/.test(r) ? "画像ノード"
  : /background gradient/.test(r) ? "グラデーション"
  : /is overlapped by/.test(r) ? "重なり"
  : /only non-text/.test(r) ? "非テキスト文字"
  : /pseudo element/.test(r) ? "擬似要素"
  : /partially obscured/.test(r) ? "一部が隠れる"
  : /background image/.test(r) ? "背景画像"
  : /partially overlaps/.test(r) ? "一部が重なる"
  : r.slice(0, 40) || "(理由なし)";

// ── ページの中で動く関数 ────────────────────────────────────────────────

/** 撮った PNG をブラウザにデコードさせ、画素の頻度から候補色を選ぶ。合否は決めない。 */
const HISTOGRAM = async ([dataUrl]) => {
  const img = new Image();
  img.src = dataUrl;
  await img.decode();
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const freq = new Map();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const key = `${data[i]},${data[i + 1]},${data[i + 2]}`;
    freq.set(key, (freq.get(key) ?? 0) + 1);
  }
  if (freq.size === 0) return { list: [], distinct: 0 };
  const sum = (k) => k.split(",").reduce((a, b) => a + Number(b), 0);
  const modal = [...freq.entries()].sort((a, b) => b[1] - a[1])[0][0];
  const byLuma = [...freq.keys()].sort((a, b) => sum(a) - sum(b));
  const total = [...freq.values()].reduce((a, b) => a + b, 0);
  const picks = [...new Set([modal, byLuma[0], byLuma[byLuma.length - 1]])];
  return {
    distinct: freq.size,
    list: picks.map((k) => ({
      color: `rgb(${k})`,
      share: Number(((freq.get(k) / total) * 100).toFixed(1)),
      role: k === modal ? "最頻" : k === byLuma[0] ? "最暗" : "最明",
    })),
  };
};

/** 対象と同じ文字色・字形で、指定した地の上に見本を 1 つ作る。 */
const MAKE_PROBE = ([selector, background]) => {
  const el = document.querySelector(selector);
  if (!el) return { error: "no element" };
  const cs = getComputedStyle(el);
  // SVG のテキストは color ではなく fill で塗られる。
  const foreground = el.ownerSVGElement && cs.fill && cs.fill !== "none" ? cs.fill : cs.color;
  // 祖先の opacity は実際の見えに効くので積を持ち込む。
  let opacity = 1;
  for (let cur = el; cur && cur !== document.documentElement; cur = cur.parentElement) {
    const o = parseFloat(getComputedStyle(cur).opacity || "1");
    if (!Number.isNaN(o)) opacity *= o;
  }
  document.getElementById("wim-contrast-probe")?.remove();
  const host = document.createElement("div");
  host.id = "wim-contrast-probe";
  host.style.cssText = `position:fixed;left:0;top:0;z-index:2147483646;padding:24px;background-image:none;background-color:${background};`;
  const span = document.createElement("span");
  span.style.color = foreground;
  span.style.opacity = String(opacity);
  span.style.fontSize = cs.fontSize;
  span.style.fontWeight = cs.fontWeight;
  span.style.fontFamily = cs.fontFamily;
  // 行間は見本側で開ける。詰まっていると axe が文字の矩形を要素の外と判定する。
  span.style.lineHeight = "2";
  span.style.textShadow = "none";
  span.textContent = (el.textContent || "").trim().slice(0, 24) || "XXXXXXXX";
  host.appendChild(span);
  document.body.appendChild(host);
  return { fg: foreground, opacity: Number(opacity.toFixed(3)), fontSize: cs.fontSize, fontWeight: cs.fontWeight };
};

const DROP_PROBE = () => document.getElementById("wim-contrast-probe")?.remove();

// ── ブラウザ操作 ──────────────────────────────────────────────────────

async function waitForStory(page) {
  await page.waitForFunction(
    () => {
      const root = document.getElementById("storybook-root");
      return !!root && root.childElementCount > 0;
    },
    undefined,
    { timeout: 30000 },
  );
  await page.evaluate(async () => { await document.fonts.ready; });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
}

/**
 * axe は 1 ページにつき 1 度しか同時に走れない。**握り潰さない** ── この文言のときだけ待って retry する。
 */
async function analyzeRetry(page, build, tries = 5) {
  for (let i = 0; ; i++) {
    try {
      return await build().analyze();
    } catch (err) {
      if (i >= tries - 1 || !String(err).includes("already running")) throw err;
      await page.waitForTimeout(400 * (i + 1));
    }
  }
}

async function openStory(page, id, theme) {
  await page.goto(`${baseUrl}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme};locale:en`, {
    waitUntil: "domcontentloaded",
  });
  await waitForStory(page);
  // フェード途中の半透明を拾わないよう、最終状態で測る（`vrt/a11y.spec.ts` と同じ）。
  await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
  await page.addStyleTag({ content: HIDE_STYLE });
  if (injectFg) {
    await page.addStyleTag({ content: `*{color:${injectFg}!important;fill:${injectFg}!important}` });
  }
}

/** 対象の矩形を、文字だけ透かして撮り、候補色を返す。 */
async function sampleBackground(page, selector) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded({ timeout: 5000 }).catch(() => undefined);
  const box = await el.boundingBox();
  if (!box || box.width < 1 || box.height < 1) return { error: "no box" };
  await page.evaluate((s) => document.querySelector(s)?.setAttribute("data-probe-hide", ""), selector);
  let shot;
  try {
    // 要素撮りはスクロールも視野外も面倒を見る。取れないときだけ座標で撮る。
    try {
      shot = await el.screenshot({ timeout: 10000 });
    } catch {
      const vp = page.viewportSize() ?? { width: 1280, height: 720 };
      const x = Math.max(0, Math.min(box.x, vp.width - 1));
      const y = Math.max(0, Math.min(box.y, vp.height - 1));
      shot = await page.screenshot({
        clip: { x, y, width: Math.max(1, Math.min(box.width, vp.width - x)), height: Math.max(1, Math.min(box.height, vp.height - y)) },
      });
    }
  } finally {
    await page.evaluate((s) => document.querySelector(s)?.removeAttribute("data-probe-hide"), selector);
  }
  const hist = await page.evaluate(HISTOGRAM, [`data:image/png;base64,${shot.toString("base64")}`]);
  if (!hist.list.length) return { error: "no pixels" };
  return hist;
}

/** 見本を作り、比の判定は axe にさせる。 */
async function measureAgainst(page, selector, background) {
  const info = await page.evaluate(MAKE_PROBE, [selector, background]);
  if (info.error) return { error: info.error };
  const results = await analyzeRetry(page, () =>
    new AxeBuilder({ page }).include("#wim-contrast-probe span").withRules(["color-contrast"]));
  const node = [...results.passes, ...results.violations, ...results.incomplete]
    .filter((r) => r.id === "color-contrast")
    .flatMap((r) => r.nodes)[0];
  await page.evaluate(DROP_PROBE);
  const data = node?.any?.[0]?.data;
  return {
    verdict: results.violations.some((r) => r.id === "color-contrast") ? "FAIL"
      : results.passes.some((r) => r.id === "color-contrast") ? "PASS" : "INCOMPLETE",
    ratio: data?.contrastRatio,
    need: data?.expectedContrastRatio,
    why: data?.messageKey,
    ...info,
  };
}

// ── 対象 ──────────────────────────────────────────────────────────────

function frozenPairs() {
  const baseline = JSON.parse(fs.readFileSync("vrt/a11y-incomplete.json", "utf-8"));
  const pairs = [];
  for (const [id, byTheme] of Object.entries(baseline.stories ?? {})) {
    for (const [theme, rules] of Object.entries(byTheme)) {
      if (rules.includes("color-contrast")) pairs.push({ id, theme });
    }
  }
  return pairs.filter((p) => !only || p.id.includes(only)).slice(0, limit);
}

// ── 実行 ──────────────────────────────────────────────────────────────

async function measureAll(pairs) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const stream = fs.createWriteStream(outPath, { flags: "w" });
  const queue = [...pairs];
  let done = 0;

  const worker = async () => {
    const browser = await chromium.launch();
    const page = await (await browser.newContext()).newPage();
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (;;) {
      const job = queue.shift();
      if (!job) break;
      try {
        await openStory(page, job.id, job.theme);
        const results = await analyzeRetry(page, () =>
          new AxeBuilder({ page }).withTags(TAGS).disableRules(DISABLED_RULES));
        const nodes = results.incomplete
          .filter((r) => r.id === "color-contrast")
          .flatMap((r) => r.nodes)
          // 「短すぎる」は T108 がスペック側で機械的に測り直している。
          .filter((n) => !JSON.stringify(n).includes("too short"));
        for (const node of nodes) {
          const selector = node.target[0];
          const row = {
            ...job,
            sel: selector,
            html: node.html.slice(0, 160),
            reason: node.any?.[0]?.message ?? "",
            need: node.any?.[0]?.data?.expectedContrastRatio,
          };
          if (typeof selector !== "string") {
            stream.write(`${JSON.stringify({ ...row, skipped: "shadow dom target" })}\n`);
            continue;
          }
          try {
            const sample = await sampleBackground(page, selector);
            if (sample.error) {
              stream.write(`${JSON.stringify({ ...row, skipped: sample.error })}\n`);
              continue;
            }
            row.distinctColors = sample.distinct;
            row.measures = [];
            for (const candidate of sample.list) {
              row.measures.push({ ...candidate, ...(await measureAgainst(page, selector, candidate.color)) });
            }
            stream.write(`${JSON.stringify(row)}\n`);
          } catch (err) {
            stream.write(`${JSON.stringify({ ...row, error: String(err).slice(0, 200) })}\n`);
          }
        }
      } catch (err) {
        stream.write(`${JSON.stringify({ ...job, error: String(err).slice(0, 200) })}\n`);
      }
      done += 1;
      if (done % 20 === 0) console.log(`  ${done}/${pairs.length}`);
    }
    await browser.close();
  };

  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, worker));
  await new Promise((r) => stream.end(r));
}

/**
 * **道具が正しいことの確認。** axe が**自力で測れている**ノードに同じ手順をかけ、
 * axe 本来の比と突き合わせる。ずれたらこの道具が壊れている。
 */
async function runVerify(pairs) {
  const browser = await chromium.launch();
  const page = await (await browser.newContext()).newPage();
  await page.emulateMedia({ reducedMotion: "reduce" });
  let exact = 0;
  let near = 0;
  let off = 0;
  let unmeasured = 0;
  const mismatches = [];
  for (const job of pairs) {
    await openStory(page, job.id, job.theme);
    const results = await analyzeRetry(page, () =>
      new AxeBuilder({ page }).withTags(TAGS).disableRules(DISABLED_RULES));
    const native = [...results.passes, ...results.violations]
      .filter((r) => r.id === "color-contrast")
      .flatMap((r) => r.nodes)
      .map((n) => ({ sel: n.target[0], ratio: n.any?.[0]?.data?.contrastRatio, html: n.html.slice(0, 60) }))
      .filter((n) => n.ratio != null && typeof n.sel === "string")
      .slice(0, 30);
    for (const n of native) {
      const sample = await sampleBackground(page, n.sel);
      if (sample.error) { unmeasured += 1; continue; }
      const modal = sample.list.find((c) => c.role === "最頻") ?? sample.list[0];
      const measured = await measureAgainst(page, n.sel, modal.color);
      if (measured.error || measured.ratio == null) { unmeasured += 1; continue; }
      const diff = Math.abs(measured.ratio - n.ratio);
      if (diff <= 0.05) exact += 1;
      else if (diff <= 0.5) { near += 1; mismatches.push({ ...n, probe: measured.ratio, bg: modal.color }); }
      else { off += 1; mismatches.push({ ...n, probe: measured.ratio, bg: modal.color }); }
    }
    console.log(`  ${job.id} (${job.theme}): 一致 ${exact} / 誤差 0.5 以内 ${near} / ずれ ${off} / 測れず ${unmeasured}`);
  }
  await browser.close();
  for (const m of mismatches.slice(0, 20)) {
    console.log(`  axe ${m.ratio} vs 見本 ${m.probe}（地 ${m.bg}）  ${m.html}`);
  }
  console.log(`\n一致 ${exact} / 誤差 0.5 以内 ${near} / ずれ ${off} / 測れず ${unmeasured}`);
  if (off > 0) {
    console.error("✗ 0.5 を超えるずれがある。**この道具の結果を信用しないこと。**");
    process.exitCode = 1;
  } else if (exact + near === 0) {
    console.error("✗ 1 件も突き合わせられていない。0 件は信用しない。");
    process.exitCode = 1;
  } else {
    console.log("✓ axe 本来の比と一致した（誤差は画素の丸め）。");
  }
}

function report(file) {
  const rows = fs.readFileSync(file, "utf-8").trim().split("\n").filter(Boolean).map((l) => JSON.parse(l));
  const measured = rows.filter((r) => r.measures?.length);
  const modal = (r) => r.measures.find((m) => m.role === "最頻") ?? r.measures[0];
  const failed = measured.filter((r) => modal(r).verdict === "FAIL");
  const undecided = measured.filter((r) => modal(r).verdict === "INCOMPLETE");

  console.log(`\n行 ${rows.length} / 測れた ${measured.length} / 測れず ${rows.filter((r) => r.skipped).length} / エラー ${rows.filter((r) => r.error).length}`);
  console.log(`最頻背景（面の大半）で落ちる: ${failed.length}`);
  console.log(`全候補で通る: ${measured.length - failed.length - undecided.length} / 機械では決まらない: ${undecided.length}`);

  const why = {};
  for (const r of undecided) why[modal(r).why ?? "(不明)"] = (why[modal(r).why ?? "(不明)"] ?? 0) + 1;
  if (undecided.length) console.log("決まらない理由:", why, "（equalRatio は覆われている・nonBmp は AT に出ない記号）");

  const groups = new Map();
  for (const r of failed) {
    const cls = (r.html.match(/class="([^"]*)"/) ?? [])[1] ?? "";
    const tag = (r.html.match(/^<([a-zA-Z0-9-]+)/) ?? [])[1] ?? "?";
    const normalized = cls
      .split(/\s+/)
      .map((c) => c.replace(/_([a-zA-Z0-9]+)_[a-z0-9]{5}_\d+/, "$1"))
      .filter(Boolean)
      .slice(0, 4)
      .sort()
      .join(".");
    const key = `${tag}${normalized ? `.${normalized}` : ""}  (${REASON_LABEL(r.reason)})`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }
  if (!groups.size) { console.log("\n落ちたものは無い。"); return; }
  console.log("\n=== 落ちたもの（部品 × 理由）===");
  for (const [key, list] of [...groups.entries()].sort((a, b) => b[1].length - a[1].length)) {
    const rep = list.slice().sort((a, b) => modal(a).ratio - modal(b).ratio)[0];
    const m = modal(rep);
    const stories = [...new Set(list.map((r) => r.id))];
    const ratios = list.map((r) => modal(r).ratio).filter((x) => x != null).sort((a, b) => a - b);
    console.log(`\n[${list.length} ノード / ${stories.length} ストーリー] ${key}`);
    console.log(`  比 ${ratios[0]}〜${ratios[ratios.length - 1]}（必要 ${m.need}） 文字色 ${m.fg} 地 ${m.color}`);
    console.log(`  代表 ${rep.id} (${rep.theme})  ${rep.html.replace(/\s+/g, " ").slice(0, 90)}`);
    console.log(`  ${stories.slice(0, 4).join(", ")}${stories.length > 4 ? ` ほか${stories.length - 4}` : ""}`);
  }
}

async function main() {
  if (reportOnly) {
    report(reportOnly);
    return;
  }

  const response = await fetch(`${baseUrl}/iframe.html`).catch(() => null);
  if (!response?.ok) {
    console.error(`✗ ${baseUrl} に届かない。先に storybook-static を配信すること:\n`);
    console.error("    npm run build-storybook");
    console.error("    npx http-server@14 storybook-static -p 6006 -c-1 --silent\n");
    console.error("  （`serve -s` は clean-url で iframe.html を飛ばすので使わない＝playwright.config.ts の注記）");
    process.exit(1);
  }

  const pairs = frozenPairs();
  if (!pairs.length) {
    console.error("✗ 対象が 0 件。`vrt/a11y-incomplete.json` に color-contrast の凍結が無いか、--only が絞りすぎ。");
    process.exit(1);
  }

  if (verify) {
    console.log(`道具の確認: ${Math.min(pairs.length, 3)} ストーリーで axe 本来の比と突き合わせる\n`);
    await runVerify(pairs.slice(0, 3));
    return;
  }

  console.log(`凍結分 ${pairs.length} 通り（story × theme）を測る${injectFg ? ` / **故意に文字色を ${injectFg} に潰している**` : ""}\n`);
  await measureAll(pairs);
  console.log(`\n書き出した: ${outPath}`);
  report(outPath);
}

await main();
