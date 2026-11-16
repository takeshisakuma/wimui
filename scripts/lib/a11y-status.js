/**
 * 部品ごとの「アクセシビリティを、どこまで確かめてあるか」の材料を集める（T400）。
 *
 * 部品の文書ページの「確かめたこと」の表は、3 つの欄を持つ（2026-11-16 のユーザー判断）:
 *   1. 自動検査（axe）── `vrt/a11y.spec.ts` は全ストーリーを light / dark で流すので、
 *      ストーリーを持つ部品は確認済み。ここではストーリーの数を数える
 *   2. ブラウザでの操作テスト ── `vrt/*.e2e.spec.ts` に書かれたストーリー ID から、部品を引く。
 *      全ストーリーから対象を動的に拾うファイル（density・play-functions・pressed-states）は、
 *      ID を書いていないので数えない（文書の表の注記にもそう書く）
 *   3. 実機の読み上げ ── `src/data/a11y-screen-reader.json`（人が書く正本）。ここでは扱わず、
 *      文書ページが直接読む
 *
 * 部品とストーリーは、題名の最後の段で結ぶ（`Components/Overlays/Dialog` → Dialog）。
 * ストーリー ID は Storybook と同じ規則で題名から作る（index.json は Storybook の起動のあとにしか無い）。
 */
import fs from "node:fs";
import path from "node:path";

/** Storybook の `sanitize`（@storybook/csf）と同じ規則。 */
export const sanitize = (s) =>
  s
    .toLowerCase()
    .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith(".stories.tsx") ? [p] : [];
  });

/**
 * @returns {Record<string, { stories: number, e2e: string[] }>} 部品名 → ストーリーの数（おおよそ）と E2E のファイル名
 */
export function collectA11yStatus(rootDir, { onUnmapped = () => {} } = {}) {
  const byId = new Map();
  const status = {};
  for (const file of walk(path.join(rootDir, "stories"))) {
    const source = fs.readFileSync(file, "utf8");
    const title = source.match(/^\s*title:\s*["']([^"']+)["']/m)?.[1];
    if (!title?.startsWith("Components/")) continue;
    const name = title.split("/").pop();
    byId.set(sanitize(title), name);
    // 数は「ストーリーがあるか」の判定にだけ使う。補助の部品を export しているファイル（CodeBlock の
    // `Button`）と、関数の形のストーリー（Slider の `Controlled`）は書き方で見分けられないので、表に数は出さない
    const stories = (source.match(/^export const [A-Z]\w*\s*[:=]/gm) ?? []).length;
    status[name] = { stories: (status[name]?.stories ?? 0) + stories, e2e: [] };
  }
  const vrt = path.join(rootDir, "vrt");
  for (const file of fs.readdirSync(vrt).filter((f) => f.endsWith(".e2e.spec.ts")).sort()) {
    const source = fs.readFileSync(path.join(vrt, file), "utf8");
    for (const m of source.matchAll(/\b(components-[a-z0-9-]+)--[a-z0-9-]+/g)) {
      const name = byId.get(m[1]);
      // 結び付けられない ID は、表から黙って消える（a11y-status.test.js が 0 個を確かめる）
      if (!name) onUnmapped(file, m[0]);
      else if (!status[name].e2e.includes(file)) status[name].e2e.push(file);
    }
  }
  return status;
}
