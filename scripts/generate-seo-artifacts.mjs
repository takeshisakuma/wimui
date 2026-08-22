#!/usr/bin/env node
/**
 * 公開 Storybook の「検索から読まれる面」をビルド後に整える（T207）。
 *
 * **2026-08-22 の実測**（https://takeshisakuma.github.io/wimui/index.html）:
 * `<title>` は `storybook - Storybook`／meta は charset と viewport だけ／
 * `<body>` は 1,849 バイトで**本文テキストは 0 文字**／`robots.txt` も
 * `sitemap.xml` も 404。
 *
 * ここでやるのは 2 つ:
 *
 *   ① **`<title>` の差し替え。** Storybook が自分のテンプレートで出す
 *      `<title>storybook - Storybook</title>` は **manager-head.html より先**に
 *      置かれるので、あとから `<title>` を足しても「最初の 1 つが文書のタイトル」
 *      という規則で負ける。`main.ts` の `managerHead`（関数形）も試したが、
 *      **渡ってくるのは manager-head.html の中身だけ**で Storybook 側の
 *      テンプレートには届かなかった（実測）。だからビルド結果を後処理する。
 *
 *   ② **`sitemap.xml` の生成。** 本文は `?path=/docs/<id>` でしか辿れず、
 *      リンクは JS で組み立てられるので、**クローラは一覧を持っていないと
 *      個々のページに到達できない。** `type === "docs"` だけを出す ──
 *      ストーリー単体（`?path=/story/…`）は同じ内容の断片で、出すと重複ばかりの
 *      sitemap になる。
 *
 * `robots.txt` は中身がビルドに依存しないので `public/` に置いてある
 * （`staticDirs` で配られる）。
 *
 * **本文が `iframe.html` という別ドキュメントにしか存在しない**という構造の
 * ほうは、ここでは解いていない（T207 の残り）。
 *
 * Usage:
 *   npm run build-storybook && npm run seo:build
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const OUT_DIR = path.join(root, "storybook-static");
const INDEX_HTML = path.join(OUT_DIR, "index.html");
const INDEX_JSON = path.join(OUT_DIR, "index.json");

const TITLE = "WIM UI — React component library";

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const base = String(pkg.homepage || "").replace(/\/?$/, "/");
if (!/^https?:\/\//.test(base)) {
  console.error(`package.json の homepage が URL ではない: ${JSON.stringify(pkg.homepage)}`);
  process.exit(1);
}

for (const f of [INDEX_HTML, INDEX_JSON]) {
  if (!fs.existsSync(f)) {
    console.error(`${path.relative(root, f)} が無い。先に \`npm run build-storybook\`。`);
    process.exit(1);
  }
}

// ── ① <title> ────────────────────────────────────────────────────────────────
{
  const html = fs.readFileSync(INDEX_HTML, "utf8");
  const m = html.match(/<title>[\s\S]*?<\/title>/);
  // **見つからなければ落とす。** 黙って素通りすると「直したつもり」が残る
  // （検出器の失敗は緑に化ける）。Storybook のテンプレートが変わった合図。
  if (!m) {
    console.error("storybook-static/index.html に <title> が無い。テンプレートが変わった疑い。");
    process.exit(1);
  }
  if (m[0] === `<title>${TITLE}</title>`) {
    console.log("· <title> は既に差し替え済み");
  } else {
    fs.writeFileSync(INDEX_HTML, html.replace(m[0], `<title>${TITLE}</title>`));
    console.log(`✓ <title> を差し替えた: ${m[0]} → <title>${TITLE}</title>`);
  }
}

// ── ② sitemap.xml ────────────────────────────────────────────────────────────
{
  const entries = Object.values(JSON.parse(fs.readFileSync(INDEX_JSON, "utf8")).entries ?? {});
  const docs = entries.filter((e) => e.type === "docs");

  // 自己検証: 走査が壊れると「1 件だけの sitemap」が静かに出来上がる。
  if (docs.length < 50) {
    console.error(`docs エントリが ${docs.length} 件しか無い。index.json の形が変わった疑い。`);
    process.exit(1);
  }

  const esc = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const urls = [base, ...docs.map((e) => `${base}?path=/docs/${e.id}`)];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url>\n    <loc>${esc(u)}</loc>\n  </url>`).join("\n") +
    "\n</urlset>\n";

  fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), xml);
  console.log(`✓ sitemap.xml に ${urls.length} 件（トップ + docs ${docs.length} 件）を書いた`);
}
