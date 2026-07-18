/* ESM ランナー: 公開 tarball を import() 経由で検査する。 */
import { createRequire } from "node:module";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { runChecks } from "./checks.cjs";

const require = createRequire(import.meta.url);
const manifest = require("./manifest.json");
const profile = process.argv[2] === "full" ? "full" : "bare";

const okAll = await runChecks({
  format: "esm",
  profile,
  load: (spec) => import(spec),
  resolve: (spec) => require.resolve(spec),
  createElement,
  renderToStaticMarkup,
  manifest,
});
process.exit(okAll ? 0 : 1);
