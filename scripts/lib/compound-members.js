/**
 * docgen の「親.子」の名前（`List.Item`）が、公開している親の型で本当に書けるかを調べる（T377）。
 *
 * docgen の名前は `displayName` から来る。`ListItem.displayName = "List.Item"` と書けば、
 * 親に `Item` が無くても docgen は「List.Item」を立て、AI 向けのファイルはその名前で節を載せる。
 * 読んだエージェントは `<List.Item>` と書き、tsc で落ちた（T371 の 2 回目の測定）。
 * 実行時に子を付けていても、export した親の型に無ければ同じく落ちる（`Lightbox` がそうだった）。
 *
 * 判定は型チェッカーで行う: カテゴリのエントリ（`src/<category>.ts`）から export された親の型に、
 * 子の名前のプロパティがあるか。
 */
import fs from 'node:fs';
import path from 'node:path';

/**
 * @param {string} root リポジトリの根
 * @param {string[]} categories `src/<category>.ts` の名前
 * @returns {Promise<(dottedName: string) => boolean | null>} 書けるなら true、
 *   無ければ false、親が export に無ければ null
 */
export async function compoundMemberChecker(root, categories) {
  const ts = (await import('typescript')).default;
  const entries = categories
    .map((c) => path.join(root, 'src', `${c}.ts`))
    .filter((f) => fs.existsSync(f));
  const program = ts.createProgram(entries, {
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
  const exported = new Map();
  for (const file of entries) {
    const moduleSymbol = checker.getSymbolAtLocation(program.getSourceFile(file));
    if (!moduleSymbol) continue;
    for (const sym of checker.getExportsOfModule(moduleSymbol)) exported.set(sym.name, sym);
  }
  return (dottedName) => {
    const [parent, ...members] = dottedName.split('.');
    const sym = exported.get(parent);
    if (!sym) return null;
    const target = sym.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(sym) : sym;
    let type = checker.getTypeOfSymbol(target);
    for (const member of members) {
      const prop = type.getProperty(member);
      if (!prop) return false;
      type = checker.getTypeOfSymbol(prop);
    }
    return true;
  };
}
