/**
 * 利用者が import できる hooks の一覧（T380）。
 *
 * `generate-llms.js`（llms の「Hooks」の節）と `check-hooks-docs.js`（文書の欠けを落とす）の
 * 2 か所が同じ一覧を要る。片方だけが数え方を変えると、もう片方がずれた一覧で緑を返すので、
 * 数え方はここ 1 つに置く（`prop-types.js` と同じ理由）。
 *
 * **公開の入口から型チェッカーで数える。** `src` を `export function use…` で grep すると、
 * 部品の中だけで使う hooks まで数える（2026-11-14 に 36 個と数えたが、公開は 13 個だった）。
 * 入口は `src/index.ts` と、package.json の `exports` に載せているカテゴリの入口。
 * `export *` で意図せず出た hooks も、ここでは「公開」として数える ── 利用者からは区別できない。
 */
import fs from 'node:fs';
import path from 'node:path';

/** hooks を出しうる公開の入口（`wimui` と `wimui/<cat>`）。 */
export const HOOK_ENTRIES = [
  ['wimui', 'src/index.ts'],
  ...['layout', 'form', 'feedback', 'navigation', 'data-display', 'overlay', 'typography', 'media', 'charts', 'ai'].map(
    (cat) => [`wimui/${cat}`, `src/${cat}.ts`],
  ),
];

let cache = null;

/**
 * @returns {Promise<Array<{ name: string, importPath: string, entries: string[], signature: string,
 *   summary: string, doc: string, example: string | null, file: string }>>}
 *   名前の順。`importPath` はカテゴリの入口があればそれ（ルートしか無ければ `wimui`）。
 */
export async function publicHooks(root) {
  if (cache) return cache;
  const ts = (await import('typescript')).default;
  const entries = HOOK_ENTRIES.filter(([, file]) => fs.existsSync(path.join(root, file)));
  const program = ts.createProgram(
    entries.map(([, file]) => path.join(root, file)),
    {
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      skipLibCheck: true,
      noEmit: true,
      baseUrl: root,
      paths: { '@/*': ['src/*'] },
    },
  );
  const checker = program.getTypeChecker();
  const byName = new Map();
  for (const [spec, file] of entries) {
    const sf = program.getSourceFile(path.join(root, file));
    const moduleSymbol = sf && checker.getSymbolAtLocation(sf);
    if (!moduleSymbol) continue;
    for (const exported of checker.getExportsOfModule(moduleSymbol)) {
      if (!/^use[A-Z]/.test(exported.name)) continue;
      const target = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
      if (!(target.flags & (ts.SymbolFlags.Function | ts.SymbolFlags.Variable))) continue; // 型だけの export は除く
      const decl = target.valueDeclaration ?? target.declarations?.[0];
      const prev = byName.get(exported.name);
      if (prev) {
        prev.entries.push(spec);
        continue;
      }
      const type = checker.getTypeOfSymbolAtLocation(target, decl);
      const sig = type.getCallSignatures()[0];
      const doc = ts.displayPartsToString(target.getDocumentationComment(checker)).trim();
      const exampleTag = target.getJsDocTags(checker).find((t) => t.name === 'example');
      const example = exampleTag ? ts.displayPartsToString(exampleTag.text).trim() : null;
      byName.set(exported.name, {
        name: exported.name,
        entries: [spec],
        signature: sig
          ? checker.signatureToString(sig, undefined, ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope, ts.SignatureKind.Call)
          : checker.typeToString(type),
        // 最初の段落（空行まで）。llms の一覧の 1 行に使う
        summary: doc.split(/\n\s*\n/)[0].replace(/\s+/g, ' ').trim(),
        doc,
        example,
        file: path.relative(root, decl.getSourceFile().fileName).split(path.sep).join('/'),
      });
    }
  }
  cache = [...byName.values()]
    .map((h) => ({ ...h, importPath: h.entries.find((e) => e !== 'wimui') ?? 'wimui' }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return cache;
}
