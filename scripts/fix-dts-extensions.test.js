import path from "node:path";
import { describe, it, expect } from "vitest";
import { resolveSpecifier, rewrite } from "./fix-dts-extensions.js";

/**
 * 型の .d.ts の相対 import に拡張子を補う後処理（#1188）。
 *
 * ファイルの在る・無しは、渡した一覧で決める（dist を作らずに、経路ごとに確かめる）。
 * 配布物での実証は Tarball Smoke の型の検査（scripts/smoke/types.mjs）が受け持つ。
 */
const dist = path.resolve("/dist");
const files = new Set(
  ["tokens.d.ts", "form/index.d.ts", "components/form/Button/Button.d.ts", "icon/alert-circle.js"].map((f) => path.join(dist, f)),
);
const exists = (p) => files.has(path.resolve(p));
const from = path.join(dist, "index.d.ts");

describe("fix-dts-extensions", () => {
  it("adds .js to a specifier that names a .d.ts file", () => {
    expect(resolveSpecifier(from, "./tokens", exists)).toBe("./tokens.js");
  });

  it("points a directory specifier at its index", () => {
    expect(resolveSpecifier(from, "./form", exists)).toBe("./form/index.js");
  });

  it("leaves a specifier that already has an extension", () => {
    expect(resolveSpecifier(from, "./tokens.js", exists)).toBe("./tokens.js");
  });

  it("points a build-only svg component import at the compiled module", () => {
    expect(resolveSpecifier(path.join(dist, "icon", "index.d.ts"), "./alert-circle.svg?react", exists)).toBe("./alert-circle.js");
  });

  it("returns null when nothing can be found", () => {
    expect(resolveSpecifier(from, "./missing", exists)).toBeNull();
  });

  it("rewrites export, import, and import() forms", () => {
    const source = [
      "export * from './tokens';",
      "import { Button } from \"./components/form/Button/Button\";",
      "export declare const x: import('./tokens').Size;",
    ].join("\n");
    const { out, unresolved } = rewrite(from, source, exists);
    expect(unresolved).toEqual([]);
    expect(out).toBe(
      [
        "export * from './tokens.js';",
        "import { Button } from \"./components/form/Button/Button.js\";",
        "export declare const x: import('./tokens.js').Size;",
      ].join("\n"),
    );
  });

  // JSDoc の説明に書いた import の例まで書き換えると、行き先の無い例が「解決できない」として落ちる
  it("does not touch specifiers inside comments", () => {
    const source = "/**\n * `export * from \"./Card/Card\"`\n */\nexport * from './tokens';\n// from './nowhere'\n";
    const { out, unresolved } = rewrite(from, source, exists);
    expect(unresolved).toEqual([]);
    expect(out).toContain('`export * from "./Card/Card"`');
    expect(out).toContain("// from './nowhere'");
    expect(out).toContain("export * from './tokens.js';");
  });

  it("reports specifiers it cannot resolve instead of leaving them silently", () => {
    const { unresolved, svgTargets } = rewrite(from, "export * from './missing';\nimport A from './alert-circle.svg?react';", exists);
    expect(unresolved).toEqual(["./missing", "./alert-circle.svg?react"]);
    expect(svgTargets).toEqual([]);
  });
});
