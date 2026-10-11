#!/usr/bin/env node
/**
 * 部品が自分で使うイベントと `style` を、props のスプレッドより**前**に書いていないかを見る。
 *
 * 前に書くと、利用者が同じ名前を渡した時点で、部品の処理や値が丸ごと置き換わる:
 *
 *   <button onClick={handleClick} {...props} />      // 利用者の onClick が、handleClick を消す
 *   <div style={{ "--x": x }} {...props} />          // 利用者の style が、--x を消す
 *
 * 2026-10-12 の定期点検 7-4 で、この形が 35 か所あった（T347 のイベント 31 タグと、#981 の style
 * 4 部品）。`Tabs.Trigger` に `onClick` を渡すとタブが切り替わらない、`Button` に `style` を渡すと
 * `justify` が効かない、など。`onClick={undefined}` を渡しただけでも起きる。型もテストも通るので、
 * 赤が出ない。
 *
 * **判定**（TypeScript の構文木で読む。正規表現では、入れ子の波かっこを追えない）:
 *   JSX の開始タグの中で、`on〜` か `style` の属性のあとに、利用者の props のスプレッド
 *   （`{...props}` / `{...rest}`）があり、その名前が、囲む関数の分割代入で取り出されていない
 *   （＝スプレッドの中に残っている）もの。
 *
 * 直し方は `docs/rules/implementation.md`:
 *   - イベント: スプレッドのあとに置き、`_internal/composeEventHandlers.ts` でまとめる
 *   - style: スプレッドのあとに置き、利用者の `style` を混ぜる
 *
 * **baseline**（`scripts/spread-order-baseline.json`）は、直さないと決めたものだけ:
 *   - props の型がその名前を受けない（TypeScript からは渡せない）もの
 *   - `style` をそのまま渡しているだけで、部品が入れる値を持たないもの
 * baseline に無いものが出たら落ちる。baseline にあるのに、もう該当しないものも落とす（掃除させる）。
 *
 * MAINTENANCE §7 の教訓に従い、**自己検証を先に置く** ── 走査が壊れると「0 件」に化けるので、
 * わざと作った違反を検出できなければ止める。
 *
 * Usage:
 *   node scripts/check-spread-order.js                  # 全量
 *   node scripts/check-spread-order.js <file> [...]     # 渡したファイルだけ（lint-staged）
 *   node scripts/check-spread-order.js --update         # baseline を今の状態で上書き
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ts from "typescript";
import { globSync } from "glob";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baselinePath = path.join(root, "scripts", "spread-order-baseline.json");

const SPREAD_OF_USER_PROPS = /^(props|rest|restProps|otherProps|others)\b|\bprops\b/;

/** 1 つのソースから、違反の候補を返す。キーは `ファイル :: <タグ> :: 属性`（行番号は入れない）。 */
export const findViolations = (rel, text) => {
  const sf = ts.createSourceFile(rel, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const out = [];
  const destructuredIn = (fn) => {
    const names = new Set();
    const collect = (n) => {
      if (ts.isBindingElement(n)) {
        names.add(n.propertyName ? n.propertyName.getText(sf).replace(/["']/g, "") : n.name.getText(sf));
      }
      ts.forEachChild(n, collect);
    };
    fn.parameters.forEach(collect);
    if (fn.body) {
      const visitBody = (n) => {
        if (ts.isFunctionLike(n) && n !== fn) return;
        if (ts.isVariableDeclaration(n) && ts.isObjectBindingPattern(n.name)) collect(n.name);
        ts.forEachChild(n, visitBody);
      };
      visitBody(fn.body);
    }
    return names;
  };
  const visit = (node, fnStack) => {
    const stack = ts.isFunctionLike(node) ? [...fnStack, node] : fnStack;
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const attrs = node.attributes.properties;
      const tag = node.tagName.getText(sf);
      const line = sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1;
      attrs.forEach((spread, i) => {
        if (!ts.isJsxSpreadAttribute(spread)) return;
        const expr = spread.expression.getText(sf).replace(/\s+/g, " ");
        if (!SPREAD_OF_USER_PROPS.test(expr)) return;
        let taken = null;
        for (let j = 0; j < i; j++) {
          const attr = attrs[j];
          if (!ts.isJsxAttribute(attr)) continue;
          const name = attr.name.getText(sf);
          if (!/^on[A-Z]/.test(name) && name !== "style") continue;
          if (!taken) {
            taken = new Set();
            for (const fn of stack) for (const n of destructuredIn(fn)) taken.add(n);
          }
          if (taken.has(name)) continue;
          out.push({ key: `${rel} :: <${tag}> :: ${name}`, file: rel, line, tag, name, spread: expr.slice(0, 40) });
        }
      });
    }
    ts.forEachChild(node, (child) => visit(child, stack));
  };
  visit(sf, []);
  return out;
};

const main = () => {
  // ---- 自己検証: わざと作った違反を拾えること・直した形を拾わないこと
  const bad = findViolations(
    "self-test.tsx",
    `const A = ({ className, ...props }) => <button className={className} onClick={() => {}} style={{ color: "red" }} {...props} />;`,
  );
  const good = findViolations(
    "self-test.tsx",
    `const A = ({ className, style, onClick, ...props }) => <button onClick={onClick} style={style} {...props} />;
     const B = ({ className, ...props }) => <button {...props} onClick={() => {}} style={{ ...props.style }} />;`,
  );
  if (bad.length !== 2 || good.length !== 0) {
    console.error(`✗ check-spread-order の自己検証に失敗（違反 ${bad.length} 件・正しい形 ${good.length} 件。期待は 2 / 0）。走査が壊れています。`);
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const update = args.includes("--update");
  const fileArgs = args.filter((a) => !a.startsWith("--"));
  const isTarget = (rel) => rel.startsWith("src/components/") && rel.endsWith(".tsx") && !/\.(test|stories)\.tsx$/.test(rel);
  const all = globSync("src/components/**/*.tsx", { cwd: root, posix: true }).filter(isTarget).sort();
  const files = fileArgs.length
    ? fileArgs.map((f) => path.relative(root, path.resolve(f)).split(path.sep).join("/")).filter(isTarget)
    : all;
  if (!fileArgs.length && all.length < 100) {
    console.error(`✗ 部品のファイルが ${all.length} 件しか見つからない。走査の範囲が壊れています。`);
    process.exit(1);
  }

  const found = [];
  for (const rel of files) found.push(...findViolations(rel, fs.readFileSync(path.join(root, rel), "utf8")));
  const foundKeys = [...new Set(found.map((v) => v.key))].sort();

  if (update) {
    if (fileArgs.length) {
      console.error("✗ --update は、ファイルを渡さずに全量で流してください。");
      process.exit(1);
    }
    fs.writeFileSync(
      baselinePath,
      JSON.stringify(
        {
          comment:
            "部品のイベント・style を props のスプレッドより前に書いているが、直さないと決めたもの（scripts/check-spread-order.js）。増やさない。理由の無いものを足さない。",
          known: foundKeys,
        },
        null,
        2,
      ) + "\n",
    );
    console.log(`baseline を書いた: ${foundKeys.length} 件`);
    return;
  }

  const known = new Set(JSON.parse(fs.readFileSync(baselinePath, "utf8")).known);
  const fresh = found.filter((v) => !known.has(v.key));
  // 掃除: baseline にあるのに、もう該当しないもの（見たファイルの分だけ ── 部分集合で流したときに、
  // 見ていないファイルの行を「もう無い」と誤って数えない）
  const seenFiles = new Set(files);
  const stale = [...known].filter((k) => seenFiles.has(k.split(" :: ")[0]) && !foundKeys.includes(k));

  if (fresh.length || stale.length) {
    if (fresh.length) {
      console.error(`✗ props のスプレッドより前に書かれたイベント / style が ${fresh.length} 件あります。`);
      console.error("  利用者が同じ名前を渡すと、部品の処理や値が丸ごと置き換わります（onClick={undefined} でも）。\n");
      for (const v of fresh) console.error(`  ${v.file}:${v.line}  <${v.tag}> ${v.name} が {...${v.spread}} より前`);
      console.error("\n  直し方（docs/rules/implementation.md）:");
      console.error("    イベント → スプレッドのあとに置き、composeEventHandlers(props.onX, 部品の処理) でまとめる");
      console.error("    style    → スプレッドのあとに置き、利用者の style を混ぜる（{ 部品の値, ...props.style }）");
    }
    if (stale.length) {
      console.error(`\n✗ baseline にあるのに、もう該当しないものが ${stale.length} 件あります（直したなら、baseline から消す）:`);
      for (const k of stale) console.error(`  ${k}`);
      console.error("\n  npm run check:spread-order:update");
    }
    process.exit(1);
  }
  console.log(`✓ イベント / style の置き場: ${files.length} ファイルを見て、新しい違反は 0 件（凍結済み ${known.size} 件）。`);
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
