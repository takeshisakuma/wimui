/**
 * tarball スモークゲートの共通アサーション。
 * ESM(assert.mjs) / CJS(assert.cjs) の両ランナーから呼ばれ、モジュール読込の
 * プリミティブ（load / resolve）だけ差し替えて同一の検査を実行する。
 * 検査対象は「公開される tarball を隔離環境に install したもの」で、
 * リポジトリの src/alias は一切混ざらない（過去の Icon null 回帰がすり抜けた穴を塞ぐ）。
 */
const fs = require("node:fs");

async function runChecks({
  format,
  profile,
  load,
  resolve,
  createElement,
  renderToStaticMarkup,
  manifest,
}) {
  let pass = 0;
  let fail = 0;
  let warn = 0;
  const line = (sym, msg) => console.log(`  ${sym} ${msg}`);
  const ok = (msg) => {
    pass++;
    line("PASS", msg);
  };
  const bad = (msg, err) => {
    fail++;
    line("FAIL", `${msg}${err ? " — " + (err.message || err) : ""}`);
  };
  const wrn = (msg, err) => {
    warn++;
    line("WARN", `${msg}${err ? " — " + (err.message || err) : ""}`);
  };

  const specFor = (sub) => (sub === "." ? "wimui" : "wimui" + sub.slice(1));
  const bareRequired = new Set(manifest.bareRequired);
  const typesOnly = new Set(manifest.typesOnly || []);

  // 1. サブパス import（bare では bareRequired のみ必須、peerDependent は報告のみ）
  const subpaths = [...manifest.bareRequired, ...manifest.peerDependent];
  for (const sub of subpaths) {
    const spec = specFor(sub);
    const required = profile === "full" ? true : bareRequired.has(sub);
    try {
      const mod = await load(spec);
      const keys = Object.keys(mod);
      // types-only エントリ（例: ./tokens）は runtime export 0 が正しい。読込成功のみ検査。
      if (keys.length === 0 && !typesOnly.has(sub))
        throw new Error("module exposes no exports");
      ok(`import ${spec} (${keys.length} exports${typesOnly.has(sub) ? ", types-only" : ""})`);
    } catch (e) {
      if (required) bad(`import ${spec}`, e);
      else wrn(`import ${spec} (peer-dependent, ${profile} profile)`, e);
    }
  }

  // 2. ルートバレルの主要 value export が存在
  try {
    const root = await load("wimui");
    const missing = manifest.rootValueExports.filter(
      (n) => typeof root[n] === "undefined",
    );
    if (missing.length) bad(`root value exports missing: ${missing.join(", ")}`);
    else ok(`root value exports present (${manifest.rootValueExports.length})`);
  } catch (e) {
    bad("root barrel load for export check", e);
  }

  // 3. コアコンポーネントを実際に render（null/空でないこと＝描画欠落の検出）
  try {
    const { Button, Title } = await load("wimui");
    const btn = renderToStaticMarkup(createElement(Button, {}, "SmokeBtn"));
    if (btn.includes("SmokeBtn") && btn.includes("<button"))
      ok("render <Button> -> non-empty <button>");
    else bad(`render <Button> unexpected: ${btn.slice(0, 80)}`);

    const ttl = renderToStaticMarkup(createElement(Title, {}, "SmokeTitle"));
    if (ttl.includes("SmokeTitle")) ok("render <Title> -> non-empty");
    else bad(`render <Title> unexpected: ${ttl.slice(0, 80)}`);
  } catch (e) {
    bad("render core components", e);
  }

  // 4. Icon の name 指定 回帰ガード（'wimui/icons' の副作用登録が前提）
  try {
    const iconsMod = await load("wimui/icons"); // 副作用: アイコン登録
    const { Icon } = await load("wimui");
    const all = iconsMod.ALL_ICONS || {};
    const name = Object.keys(all)[0];
    if (!name) throw new Error("ALL_ICONS is empty");
    const svg = renderToStaticMarkup(createElement(Icon, { name }));
    if (svg.includes("<svg"))
      ok(`render <Icon name="${name}"> -> <svg> (registration side-effect OK)`);
    else
      bad(
        `<Icon name="${name}"> rendered empty/null — registration side-effect broken`,
      );
  } catch (e) {
    bad("Icon-by-name regression guard", e);
  }

  // 5. CSS が解決・非空・トークンマーカーを含む
  for (const cssSpec of manifest.css) {
    try {
      const p = resolve(cssSpec);
      const content = fs.readFileSync(p, "utf8");
      if (content.length === 0) {
        bad(`${cssSpec} is empty`);
      } else if (
        cssSpec.endsWith("styles.css") &&
        !content.includes(manifest.cssMustContain)
      ) {
        bad(`${cssSpec} missing token marker "${manifest.cssMustContain}"`);
      } else {
        ok(`${cssSpec} resolves (${content.length} bytes)`);
      }
    } catch (e) {
      bad(`resolve ${cssSpec}`, e);
    }
  }

  // 6. locale が解決・parse 可能
  try {
    const p = resolve(manifest.locale);
    const json = JSON.parse(fs.readFileSync(p, "utf8"));
    if (json && Object.keys(json).length)
      ok(`${manifest.locale} resolves & parses (${Object.keys(json).length} keys)`);
    else bad(`${manifest.locale} parsed empty`);
  } catch (e) {
    bad(`resolve ${manifest.locale}`, e);
  }

  // 7. llms の部品ごとのファイル（T368）が、llms.txt の数えた部品の数だけ入っている。
  // 生成は public/llms/（gitignore）→ vite が dist/ へ写す、の 2 段なので、どちらかが
  // 落ちても型もテストも通る。tarball の実物で数える。
  try {
    const llms = fs.readFileSync(resolve("wimui/llms.txt"), "utf8");
    const expected = Number(/(\d+) documented components/.exec(llms)?.[1]);
    const sample = resolve(`wimui/llms/${manifest.llmsComponent}.md`);
    const files = fs.readdirSync(require("node:path").dirname(sample)).filter((f) => f.endsWith(".md"));
    const head = fs.readFileSync(sample, "utf8").split("\n")[0];
    if (!expected) bad("wimui/llms.txt: documented component count not found");
    else if (files.length !== expected)
      bad(`wimui/llms/*.md: ${files.length} files, llms.txt documents ${expected}`);
    else if (head !== `# ${manifest.llmsComponent} — wimui`)
      bad(`wimui/llms/${manifest.llmsComponent}.md starts with "${head}"`);
    else ok(`wimui/llms/<Component>.md resolves (${files.length} files = llms.txt count)`);
  } catch (e) {
    bad("resolve wimui/llms/<Component>.md", e);
  }

  console.log(`\n  [${format}/${profile}] pass=${pass} fail=${fail} warn=${warn}`);
  return fail === 0;
}

module.exports = { runChecks };
