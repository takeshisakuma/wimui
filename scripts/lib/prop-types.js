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

/**
 * tsType からリテラル値を再帰的に集める。リテラル以外が混ざる型は null。
 *
 * **数値リテラルも集める**（2026-09-19・T249）。以前は文字列リテラルだけを見ており、
 * `span?: 1 | 2 | 3` は「値を列挙できない型」として **`check:prop-classes` の対象外**に
 * 落ちていた。ヘッダーが言う「`number` は全値に対応するクラスという概念が成り立たない」
 * は**上限の無い `number`** の話であって、閉じた数値リテラルの union には当てはまらない。
 * `true` / `false` は集めない ── `.foo-true` というクラスを書く習慣がこの repo に無く、
 * 「クラスが無い」と言われても直しようがないため。
 *
 * **名前だけの別名も解く**（T378）。docgen は import した別名を辿らず、`intent: FieldIntent`
 * は `{ name: "FieldIntent" }` だけになる。以前はここで null を返し、2 つのガードとも
 * その prop を「列挙できない型」として対象外にしていた ── 値を減らす破壊的変更も、
 * 値に対応するクラスの欠落も見落とす。`aliases` は `literalTypeAliases()` の `values`。
 */
export function literalValues(tsType, aliases) {
  if (!tsType) return null;
  if (aliases?.has(tsType.name) && !tsType.elements) {
    return aliases.get(tsType.name).map((v) => (v.startsWith('"') ? JSON.parse(v) : v));
  }
  if (tsType.name === 'literal') {
    const raw = String(tsType.value);
    const quoted = raw.match(/^"(.*)"$/);
    if (quoted) return [quoted[1]];
    return /^-?\d+(\.\d+)?$/.test(raw) ? [raw] : null;
  }
  if (tsType.name === 'union' && Array.isArray(tsType.elements)) {
    const out = [];
    for (const el of tsType.elements) {
      const vs = literalValues(el, aliases);
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
 * `tsxPath` を渡すと `(typeof CONST)[number]` も、`aliases` を渡すと名前だけの別名も解ける。
 */
export function enumerableValues(tsType, tsxPath, aliases) {
  const direct = literalValues(tsType, aliases);
  if (direct) return direct;
  return tsxPath ? resolveConstArray(tsType?.raw, tsxPath) : null;
}

let literalAliasCache = null;

/**
 * 名前だけで届く型の別名（`FieldIntent` など）を、リテラルの union へ解決する表（T376）。
 *
 * docgen は import した別名を辿らず、`tsType` が `{ name: "FieldIntent" }` だけになる。
 * AI 向けのファイルがそれをそのまま書くと値が分からず、読んだエージェントは説明の
 * 「e.g. error state」から `"error"` を書いた（T371 の 1 回目の測定で tsc が落ちた）。
 *
 * 表は TypeScript の型チェッカーで作る（正規表現で宣言を読むと、`= GeneratedFieldIntent`
 * のような別名の別名を辿れない）。対象は `src/types` と `src/components` の別名のうち、
 * 解決した型が文字列・数値のリテラルだけの union になるもの。同じ名前で値の違う別名が
 * 2 つあれば、どちらとも決められないので `ambiguous` に入れて表からは外す。
 *
 * @returns {{ values: Map<string, string[]>, ambiguous: Set<string> }}
 */
export async function literalTypeAliases(root) {
  if (literalAliasCache) return literalAliasCache;
  const ts = (await import('typescript')).default;
  const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) return walk(p);
      return /\.tsx?$/.test(e.name) && !/\.(test|stories)\.tsx?$/.test(e.name) ? [p] : [];
    });
  // 読む順を固定する（readdir の順は OS で違う。同じ名前の別名が 2 つあるとき、どちらが残るかが変わる）
  const files = ['src/types', 'src/components']
    .flatMap((d) => walk(path.join(root, d)))
    .sort((a, b) => (a.split(path.sep).join('/') < b.split(path.sep).join('/') ? -1 : 1));
  const program = ts.createProgram(files, {
    jsx: ts.JsxEmit.ReactJSX,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    skipLibCheck: true,
    noEmit: true,
    baseUrl: root,
    paths: { '@/*': ['src/*'] },
  });
  const checker = program.getTypeChecker();
  const values = new Map();
  const ambiguous = new Set();
  // 型チェッカーの union は内部の順に並ぶ（`"danger" | "default"`）。別名の別名を辿って、
  // リテラルを並べた宣言に行き着けば、その順を使う（既定の値が先頭に来る書き方を保つ）
  const declaredOrder = (symbol, depth = 0) => {
    const decl = symbol?.declarations?.find((d) => ts.isTypeAliasDeclaration(d));
    if (!decl || depth > 5) return null;
    const node = decl.type;
    if (ts.isUnionTypeNode(node) && node.types.every((n) => ts.isLiteralTypeNode(n))) {
      return node.types.map((n) =>
        ts.isStringLiteral(n.literal) ? JSON.stringify(n.literal.text) : n.literal.getText(),
      );
    }
    if (ts.isTypeReferenceNode(node) && !node.typeArguments) {
      let next = checker.getSymbolAtLocation(node.typeName);
      if (next && next.flags & ts.SymbolFlags.Alias) next = checker.getAliasedSymbol(next);
      return declaredOrder(next, depth + 1);
    }
    return null;
  };
  const add = (name, type, symbol) => {
    const parts = type.isUnion() ? type.types : [type];
    let vals = [];
    for (const t of parts) {
      if (t.isStringLiteral()) vals.push(JSON.stringify(t.value));
      else if (t.isNumberLiteral()) vals.push(String(t.value));
      else return; // リテラル以外が混ざる（string & {} など）
    }
    if (vals.length === 0) return;
    // 宣言の順が取れない別名（テンプレートリテラルで組む @floating-ui の `Placement`・`Extract<>`）は、
    // 型チェッカーの内部の順がファイルを読む順で変わり、Linux の CI と Windows で並びがずれた
    // （#1137 の check:llms）。そのときは文字コード順に並べ、どこで生成しても同じにする
    const ordered = declaredOrder(symbol);
    if (ordered && ordered.length === vals.length && ordered.every((v) => vals.includes(v))) {
      vals = ordered;
    } else {
      vals.sort();
    }
    const prev = values.get(name);
    if (prev && [...prev].sort().join('|') !== [...vals].sort().join('|')) ambiguous.add(name);
    else values.set(name, vals);
  };
  const normalized = new Set(files.map((f) => path.normalize(f)));
  for (const sf of program.getSourceFiles()) {
    if (!normalized.has(path.normalize(sf.fileName))) continue;
    ts.forEachChild(sf, (node) => {
      if (ts.isTypeAliasDeclaration(node)) {
        add(node.name.text, checker.getTypeAtLocation(node.name), checker.getSymbolAtLocation(node.name));
        return;
      }
      // 外のパッケージから import した別名（Popover の `Placement` は @floating-ui のもの）
      const named = ts.isImportDeclaration(node) && node.importClause?.namedBindings;
      if (!named || !ts.isNamedImports(named)) return;
      for (const spec of named.elements) {
        const local = checker.getSymbolAtLocation(spec.name);
        if (!local) continue;
        const target = local.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(local) : local;
        if (!(target.flags & ts.SymbolFlags.TypeAlias)) continue;
        add(spec.name.text, checker.getDeclaredTypeOfSymbol(target), target);
      }
    });
  }
  for (const name of ambiguous) values.delete(name);
  literalAliasCache = { values, ambiguous };
  return literalAliasCache;
}
