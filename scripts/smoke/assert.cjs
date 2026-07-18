/* CJS ランナー: 公開 tarball を require() 経由で検査する。 */
const { runChecks } = require("./checks.cjs");
const manifest = require("./manifest.json");
const { createElement } = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const profile = process.argv[2] === "full" ? "full" : "bare";

runChecks({
  format: "cjs",
  profile,
  load: (spec) => require(spec),
  resolve: (spec) => require.resolve(spec),
  createElement,
  renderToStaticMarkup,
  manifest,
}).then((okAll) => process.exit(okAll ? 0 : 1));
