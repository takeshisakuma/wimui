import { test } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { waitForStoryReady } from "./story-ready";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * CI-8 ① — **`playwright install-deps`（apt）を抜くと VRT が落ちる 4 枚について、
 * 「実際にどのフォントで描かれたか」を CI の実物で採る診断。**
 *
 * ── なぜ測るのか ─────────────────────────────────────────────────────
 * 2026-08-19 に `--with-deps` の apt が固まって 3 ワークフロー・6 ジョブが job
 * タイムアウトまで戻らなかった（CI-8）。`install-deps` を飛ばせば apt は消えるが、
 * **VRT が 4 枚落ちた**:
 *
 *   kbd--keyboard-symbols / code--long-content /
 *   countdown--locale-override / relativetime--locale-override
 *
 * 理由は `install-deps` が共有ライブラリだけでなく**フォントを 9 パッケージ**入れる
 * から（`fonts-liberation` / `fonts-ipafont-gothic` / `fonts-wqy-zenhei` ほか）。
 * ただし **8 つ不足しているのに壊れたのは 4 枚だけ**なので、実際に効いているのは
 * ごく一部。**どの文字が、どのファミリーへ落ちているのか**が分からないと、対策
 * （A: フォントをキャッシュ / B: フォールバックを自前化）を選べない。
 *
 * **ベースラインを一切触らない**（スクリーンショットを撮らない）ので安全に走らせられる。
 * ローカルでは踏めない経路（sudo と apt が要る）なので CI の実物で測る。
 *
 * ── 測り方 ───────────────────────────────────────────────────────────
 * `CSS.getPlatformFontsForNode`（CDP）は **CSS の font-family ではなく、実際に
 * グリフを供給したファミリー**をグリフ数つきで返す。フォールバックは CSS からは
 * 見えない（`font-family` は候補の並びでしかない）ので、ここは CDP でしか測れない。
 *
 * 2 段で採る:
 *   1. **要素ごと** — その要素のテキストを描いたファミリーの一覧（glyphCount つき）
 *   2. **文字ごと** — 画面の外に同じフォント指定の 1 文字プローブを置いて測り直す。
 *      要素単位だと「7 グリフが A、2 グリフが B」までしか分からず、**どの文字が
 *      落ちたのか**が出ない。幅も採るので、VRT が落ちた理由（字送りの差）が直に見える。
 *
 * ── 対照を必ず一緒に測る ─────────────────────────────────────────────
 * **落ちなかったストーリーも同じ手順で測る**（`CONTROL_STORY_IDS`）。同じ
 * コンポーネントの別ストーリーを選んであるので、差が出た/出ないの比較がそのまま
 * 「何が特別だったのか」になる。とくに `kbd--combined` は `⌘`（U+2318）＝
 * **latin サブセットの外の記号なのに落ちていない**ので、「記号だから落ちる」では
 * 説明がつかないことを示す対照になる。**対照側にも差が出るなら、この診断の
 * 見立て（フォント差が 4 枚の原因）自体が違う。**
 *
 * ── 使い方 ───────────────────────────────────────────────────────────
 *   FONT_DIAG_LABEL=with-deps npx playwright test vrt/font-diagnosis.spec.ts
 *
 * 結果は `font-diagnosis/<label>/<storyId>.json`。2 つのラベル（apt あり / なし）で
 * 走らせて `node scripts/font-diagnosis-report.mjs` に食わせると差分表が出る。
 */

/** apt（`playwright install-deps`）を抜くと VRT が落ちた 4 枚。2026-08-19 実測。 */
const FAILING_STORY_IDS = [
  "components-typography-icons-kbd--keyboard-symbols",
  "components-typography-icons-code--long-content",
  "components-data-indicators-countdown--locale-override",
  "components-data-indicators-relativetime--locale-override",
];

/**
 * 同じ 4 コンポーネントの、**落ちなかった**ストーリー。
 * `kbd--combined` は `⌘`(U+2318)、`code--block` は等幅の英数、
 * `countdown--default` / `relativetime--default` は英語のみ。
 */
const CONTROL_STORY_IDS = [
  "components-typography-icons-kbd--combined",
  "components-typography-icons-code--block",
  "components-data-indicators-countdown--default",
  "components-data-indicators-relativetime--default",
];

const LABEL = process.env.FONT_DIAG_LABEL || "unlabeled";

/**
 * **計測器の自己検証用**（CI では使わない）。自前配信の `.woff2` を落として
 * わざとフォールバックを起こす。「差が 0 件」という結果は、**差を検出できることを
 * 別に示していない限り信用できない** ── 同条件を 2 回測れば当然 0 件になるので、
 * それだけでは道具が動いている証拠にならない。
 *
 *   FONT_DIAG_BLOCK_WEBFONTS=1 FONT_DIAG_LABEL=local-blocked \
 *     npx playwright test vrt/font-diagnosis.spec.ts
 */
const BLOCK_WEBFONTS = process.env.FONT_DIAG_BLOCK_WEBFONTS === "1";
const OUT_DIR = path.resolve(__dirname, "../font-diagnosis", LABEL);

interface TextElement {
  idx: number;
  tag: string;
  text: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
}

interface CharProbe {
  idx: number;
  char: string;
  codePoint: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  width: number;
}

interface PlatformFont {
  family: string;
  glyphs: number;
  custom: boolean;
}

/** 読み込めた `@font-face` の一覧。「宣言はあるがバイナリが未着」を見分けるため status も採る。 */
interface LoadedFace {
  family: string;
  weight: string;
  status: string;
  unicodeRange: string;
}

test.describe("CI-8 font diagnosis", () => {
  for (const storyId of [...FAILING_STORY_IDS, ...CONTROL_STORY_IDS]) {
    const role = FAILING_STORY_IDS.includes(storyId) ? "failing" : "control";

    test(`${role} — ${storyId}`, async ({ page }) => {
      // VRT と同じ条件で開く（時刻固定・`__VRT__`・light・en）。**条件がずれると
      // 別のものを測ることになる** ── Countdown / RelativeTime は時刻で描画が変わる。
      await page.clock.setFixedTime(new Date("2024-01-01T00:00:00Z"));
      await page.addInitScript(() => {
        (window as unknown as { __VRT__: boolean }).__VRT__ = true;
      });

      if (BLOCK_WEBFONTS) {
        // **`.woff2` だけでは止まらない。** `@fontsource` の CSS は woff2 のあとに
        // woff を並べるので、片方を落としても browser はもう片方を取りに行く
        // （storybook-static の assets は 18 本 = 9 面 × 2 形式）。
        await page.route("**/*.woff{,2}", (route) => route.abort());
      }

      await page.goto(
        `/iframe.html?id=${storyId}&viewMode=story&globals=theme:light;locale:en`,
        { waitUntil: "domcontentloaded" },
      );
      await waitForStoryReady(page);

      // ── 1. テキストを持つ要素に印を付けて、CSS 側の指定を採る ──────────
      // **`#storybook-root` の中だけ**を見る。`document.body` から歩くと
      // Storybook 自身の隠し UI（Controls の表など。UI フォントは `Nunito Sans`）を
      // 拾い、`relativetime--default` の実文字が 3 語なのに 196 文字を測っていた。
      // VRT が撮るのは描かれているストーリーなので、**測る対象も同じにする** ──
      // 描画されていない要素はフォントの選ばれ方も違いうる。
      const elements: TextElement[] = await page.evaluate(() => {
        const out: TextElement[] = [];
        const root = document.getElementById("storybook-root");
        if (!root) return out;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const seen = new Set<Element>();
        let idx = 0;
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          if (!(node.nodeValue ?? "").trim()) continue;
          const el = node.parentElement;
          if (!el || seen.has(el)) continue;
          // `<style>` / `<script>` の中身は「文字」ではないし、隠れている要素は
          // 撮影対象でもない。
          if (["style", "script", "template"].includes(el.tagName.toLowerCase()))
            continue;
          if (!el.getClientRects().length) continue;
          seen.add(el);
          el.setAttribute("data-font-diag", String(idx));
          const cs = getComputedStyle(el);
          out.push({
            idx,
            tag: el.tagName.toLowerCase(),
            text: (el.textContent ?? "").trim().slice(0, 120),
            fontFamily: cs.fontFamily,
            fontSize: cs.fontSize,
            fontWeight: cs.fontWeight,
          });
          idx += 1;
        }
        return out;
      });

      // ── 2. 文字ごとのプローブを画面外に置く ────────────────────────────
      // 同じ (font-family, weight, size, 文字) は 1 回だけ測る。
      const probes: CharProbe[] = await page.evaluate(() => {
        const host = document.createElement("div");
        // 画面外・非表示だが**レイアウトは走る**位置に置く（`display:none` だと
        // グリフが選ばれないので測れない）。
        host.style.cssText =
          "position:fixed;left:-99999px;top:0;white-space:pre;";
        host.setAttribute("data-font-probe-host", "");
        document.body.appendChild(host);

        const out: CharProbe[] = [];
        const seen = new Set<string>();
        let idx = 0;

        for (const src of Array.from(
          document.querySelectorAll("[data-font-diag]"),
        )) {
          const cs = getComputedStyle(src);
          const text = (src.textContent ?? "").trim().slice(0, 120);
          // `Array.from` はコードポイント単位で回る（サロゲートペアを割らない）。
          for (const ch of new Set(Array.from(text))) {
            if (!ch.trim()) continue;
            const key = `${cs.fontFamily}|${cs.fontWeight}|${cs.fontSize}|${ch}`;
            if (seen.has(key)) continue;
            seen.add(key);

            const span = document.createElement("span");
            span.setAttribute("data-font-probe", String(idx));
            span.style.fontFamily = cs.fontFamily;
            span.style.fontWeight = cs.fontWeight;
            span.style.fontSize = cs.fontSize;
            span.textContent = ch;
            host.appendChild(span);

            out.push({
              idx,
              char: ch,
              codePoint: `U+${(ch.codePointAt(0) ?? 0)
                .toString(16)
                .toUpperCase()
                .padStart(4, "0")}`,
              fontFamily: cs.fontFamily,
              fontSize: cs.fontSize,
              fontWeight: cs.fontWeight,
              width: 0,
            });
            idx += 1;
          }
        }

        // 幅はレイアウト後にまとめて採る（1 文字ずつ読むと毎回同期レイアウトになる）。
        for (const probe of out) {
          const el = host.querySelector(`[data-font-probe="${probe.idx}"]`);
          probe.width = el ? el.getBoundingClientRect().width : -1;
        }
        return out;
      });

      // ── 3. 読み込めた @font-face（自前配信ぶん）────────────────────────
      const faces: LoadedFace[] = await page.evaluate(() =>
        Array.from(document.fonts).map((f) => ({
          family: f.family,
          weight: f.weight,
          status: f.status,
          unicodeRange: f.unicodeRange,
        })),
      );

      // ── 4. CDP で「実際に使われたファミリー」を採る ────────────────────
      const client = await page.context().newCDPSession(page);
      await client.send("DOM.enable");
      await client.send("CSS.enable");
      // `depth: -1` で全部送っておかないと `querySelectorAll` が引けない。
      const { root } = await client.send("DOM.getDocument", { depth: -1 });

      const platformFontsBy = async (
        selector: string,
        attribute: string,
      ): Promise<Record<string, PlatformFont[]>> => {
        const { nodeIds } = await client.send("DOM.querySelectorAll", {
          nodeId: root.nodeId,
          selector,
        });
        const result: Record<string, PlatformFont[]> = {};
        for (const nodeId of nodeIds) {
          const { attributes } = await client.send("DOM.getAttributes", {
            nodeId,
          });
          let key: string | undefined;
          for (let i = 0; i < attributes.length; i += 2) {
            if (attributes[i] === attribute) key = attributes[i + 1];
          }
          if (key === undefined) continue;
          const { fonts } = await client.send("CSS.getPlatformFontsForNode", {
            nodeId,
          });
          result[key] = fonts.map((f) => ({
            family: f.familyName,
            glyphs: f.glyphCount,
            custom: f.isCustomFont,
          }));
        }
        return result;
      };

      const elementFonts = await platformFontsBy(
        "[data-font-diag]",
        "data-font-diag",
      );
      const probeFonts = await platformFontsBy(
        "[data-font-probe]",
        "data-font-probe",
      );

      const report = {
        label: LABEL,
        storyId,
        role,
        measuredAt: new Date().toISOString(),
        faces,
        elements: elements.map((el) => ({
          ...el,
          platformFonts: elementFonts[String(el.idx)] ?? [],
        })),
        chars: probes.map((probe) => ({
          ...probe,
          platformFonts: probeFonts[String(probe.idx)] ?? [],
        })),
      };

      fs.mkdirSync(OUT_DIR, { recursive: true });
      fs.writeFileSync(
        path.join(OUT_DIR, `${storyId}.json`),
        `${JSON.stringify(report, null, 2)}\n`,
        "utf-8",
      );

      // ラン中のログにも要点を残す（アーティファクトを落とさずに読めるように）。
      const fallen = report.chars.filter(
        (c) =>
          c.platformFonts.length > 0 &&
          !c.platformFonts.every((f) => f.custom),
      );
      console.log(
        `[font-diag:${LABEL}] ${storyId}: ${report.chars.length} chars, ` +
          `${fallen.length} rendered by a platform (non-webfont) family` +
          (fallen.length
            ? ` — ${fallen
                .map(
                  (c) =>
                    `${c.codePoint}(${c.char})→${c.platformFonts
                      .map((f) => f.family)
                      .join("/")}`,
                )
                .slice(0, 20)
                .join(", ")}`
            : ""),
      );
    });
  }
});
