/**
 * docgen の `tsType` から「その prop が受け付ける値」を取り出す共通処理。
 *
 * 2 箇所が同じことを必要とする:
 *   - `check:prop-classes`（T33）… 値ごとに CSS クラスが在るか
 *   - `check:prop-api`（T54）    … 値が減っていないか（＝破壊的変更か）
 *
 * 片方だけが `(typeof CONST)[number]` を解けると、**もう片方は同じ変更を
 * 見落とす**。実際 T38 で `CardProps` をその形にした瞬間、`check:prop-classes`
 * から `Card` が丸ごと見えなくなった（対象外に落ちて緑）。同じ穴を 2 度作らない
 * ために、解決規則はここ 1 つに置く。
 */
import fs from 'node:fs';
import path from 'node:path';

/** tsType から文字列リテラルを再帰的に集める。リテラル以外が混ざる型は null。 */
export function literalValues(tsType) {
  if (!tsType) return null;
  if (tsType.name === 'literal') {
    const m = String(tsType.value).match(/^"(.*)"$/);
    return m ? [m[1]] : null;
  }
  if (tsType.name === 'union' && Array.isArray(tsType.elements)) {
    const out = [];
    for (const el of tsType.elements) {
      const vs = literalValues(el);
      if (!vs) return null; // number など、値を列挙できない要素が混ざっている
      out.push(...vs);
    }
    return out;
  }
  return null;
}

const constArrayCache = new Map();

/**
 * `(typeof SOME_CONST)[number]` を、その `as const` 配列の中身へ解決する。
 *
 * 配列は `as const` で、要素が文字列リテラルのものだけを受け付ける。
 * 見つからなければ null（＝呼び出し側は「列挙できない型」として扱う）。
 *
 * @param raw     docgen の `tsType.raw`
 * @param tsxPath その prop を宣言している .tsx（import 元を辿るのに使う）
 */
export function resolveConstArray(raw, tsxPath) {
  const m = /^\(typeof\s+([A-Za-z_$][\w$]*)\)\[number\]$/.exec(raw ?? '');
  if (!m) return null;
  const name = m[1];

  const src = fs.readFileSync(tsxPath, 'utf8');
  const imp = new RegExp(
    `import\\s*\\{[^}]*\\b${name}\\b[^}]*\\}\\s*from\\s*["']([^"']+)["']`,
  ).exec(src);
  const from = imp ? imp[1] : null;
  const file = from ? path.resolve(path.dirname(tsxPath), `${from}.ts`) : tsxPath;

  const key = `${file}#${name}`;
  if (constArrayCache.has(key)) return constArrayCache.get(key);

  let values = null;
  if (fs.existsSync(file)) {
    const decl = new RegExp(`\\b${name}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s*as\\s+const`).exec(
      fs.readFileSync(file, 'utf8'),
    );
    if (decl) {
      const items = [...decl[1].matchAll(/["']([^"']+)["']/g)].map((x) => x[1]);
      if (items.length > 0) values = items;
    }
  }
  constArrayCache.set(key, values);
  return values;
}

/**
 * 値を列挙できるなら配列で、できないなら null。
 * `tsxPath` を渡すと `(typeof CONST)[number]` も解ける。
 */
export function enumerableValues(tsType, tsxPath) {
  const direct = literalValues(tsType);
  if (direct) return direct;
  return tsxPath ? resolveConstArray(tsType?.raw, tsxPath) : null;
}
