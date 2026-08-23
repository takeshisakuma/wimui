/**
 * ロケールのキーを **i18next と同じ順序で解決する**。
 *
 * `stories/Docgen.tsx` は `useTranslation(ALL_NAMESPACES)` で引くので、
 * `t("doc.x")` は **`ALL_NAMESPACES` の並び順で最初に見つかった名前空間**の値を返す。
 * ところがガード側は「`public/locales/en` を再帰で歩いて 1 つの表に潰す」書き方を
 * していた。`readdir` はアルファベット順なので**後のファイルが前のファイルを上書きし、
 * i18next とは逆の勝者**になる。
 *
 * これは机上の話ではなく、実際に間違った測定をしていた（2026-08-23 / T222 の 3 回目）:
 *
 *   - `doc.label_a11y_desc` は `common` と `docs_data_display` の両方にある。
 *     **i18next は `common`（中身のある文）を返す**が、ガードは `docs_data_display`
 *     （定型文）を読み、「定型文のまま」と数えていた。
 *   - `doc.visuallyhidden_a11y_desc` も同じ形で、実際に出ていたのは
 *     「DevTools で確認できる」という別種の文だった。
 *
 * **en の 15195 キーのうち 379 キーが複数ファイルに存在する。** `check-i18n-quality`
 * の重複検出は**1 ファイルの中**しか見ないので（生の出現数とパース後の数の比較）、
 * ファイルを跨いだ重複は誰にも見えていない。負けている複製は黙って腐る ──
 * 上の 2 件は実際にドリフトしていた。
 *
 * ここを通せば、ガードは**画面に出るほうの値**を読む。
 */
import fs from "node:fs";
import path from "node:path";

/** `stories/i18nConstants.ts`（自動生成）から名前空間の並びを読む。 */
export function readNamespaceOrder(root) {
  const file = path.join(root, "stories", "i18nConstants.ts");
  const src = fs.readFileSync(file, "utf8");
  const body = src.slice(src.indexOf("["), src.indexOf("]") + 1);
  const order = [...body.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (!order.length) throw new Error(`名前空間の並びを読めなかった: ${file}`);
  return order;
}

/**
 * ロケール 1 言語ぶんを、**i18next の解決順で**平坦な表にして返す。
 *
 * 返り値のキーは `doc.x` のような名前空間内のパス。値は勝つほうの文字列。
 * 名前空間の並びに無いファイルは、並びの後ろに回す（負ける側に倒す）。
 */
export function resolveLocale(root, locale = "en") {
  const dir = path.join(root, "public", "locales", locale);
  const order = readNamespaceOrder(root);
  const rank = new Map(order.map((ns, i) => [ns, i]));

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ file: path.join(dir, f), ns: path.basename(f, ".json") }))
    .sort((a, b) => (rank.get(a.ns) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.ns) ?? Number.MAX_SAFE_INTEGER));

  const out = {};
  const sources = {};
  for (const { file, ns } of files) {
    const json = JSON.parse(fs.readFileSync(file, "utf8"));
    const flatten = (obj, prefix = "") => {
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "string") {
          // **先に入ったほうが勝つ**（i18next と同じ）。後から来た複製は捨てる。
          if (!(prefix + k in out)) {
            out[prefix + k] = v;
            sources[prefix + k] = ns;
          }
        } else if (v && typeof v === "object") {
          flatten(v, `${prefix}${k}.`);
        }
      }
    };
    flatten(json);
  }
  return { values: out, sources };
}

/** キーの末端（`doc.foo_bar` → `foo_bar`）。 */
export const leafOf = (key) => key.slice(key.lastIndexOf(".") + 1);
