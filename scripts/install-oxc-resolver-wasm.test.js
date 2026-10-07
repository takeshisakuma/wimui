import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { WASM_KEY, collectLockClosure, matchesIntegrity } from "./install-oxc-resolver-wasm.mjs";

/**
 * storybook:fix-resolver（oxc-resolver の WASM 版を手元に入れる）。
 *
 * ネットワークと node_modules には触らず、判定の 2 つだけを見る:
 * - lock から「入れるもの」を正しく拾うか（入れ子の node_modules・外側への解決・無い依存）
 * - integrity が合わない中身を通さないか
 */
const sha512 = (text) => `sha512-${crypto.createHash("sha512").update(text).digest("base64")}`;

describe("collectLockClosure", () => {
  const packages = {
    "": {},
    "node_modules/shared": { version: "1.0.0" },
    "node_modules/unrelated": { version: "9.0.0" },
    "node_modules/@scope/wasm": {
      version: "2.0.0",
      dependencies: { nested: "^1.0.0", shared: "^1.0.0" },
    },
    "node_modules/@scope/wasm/node_modules/nested": {
      version: "1.2.0",
      dependencies: { deep: "^1.0.0", shared: "^1.0.0" },
    },
    "node_modules/@scope/wasm/node_modules/deep": { version: "1.0.1" },
  };

  it("入れ子の依存と、外側で解決される依存をたどる", () => {
    expect(collectLockClosure(packages, "node_modules/@scope/wasm").sort()).toEqual([
      "node_modules/@scope/wasm",
      "node_modules/@scope/wasm/node_modules/deep",
      "node_modules/@scope/wasm/node_modules/nested",
      "node_modules/shared",
    ]);
  });

  it("関係の無いパッケージは拾わない", () => {
    expect(collectLockClosure(packages, "node_modules/@scope/wasm")).not.toContain("node_modules/unrelated");
  });

  it("起点が lock に無ければ落とす", () => {
    expect(() => collectLockClosure(packages, "node_modules/@scope/missing")).toThrow(/lock に .* が無い/);
  });

  it("依存が lock の中で解決できなければ落とす", () => {
    const broken = {
      "node_modules/@scope/wasm": { version: "2.0.0", dependencies: { gone: "^1.0.0" } },
    };
    expect(() => collectLockClosure(broken, "node_modules/@scope/wasm")).toThrow(/解決できない依存/);
  });

  it("optional の依存は、lock に無くても落とさない", () => {
    const optional = {
      "node_modules/@scope/wasm": { version: "2.0.0", optionalDependencies: { gone: "^1.0.0" } },
    };
    expect(collectLockClosure(optional, "node_modules/@scope/wasm")).toEqual(["node_modules/@scope/wasm"]);
  });

  it("peer の依存も、解決先（最上位の別の版）までたどる", () => {
    const withPeer = {
      "node_modules/runtime": { version: "1.0.0", peerDependencies: { core: "^1.0.0" } },
      "node_modules/core": { version: "1.1.0", dependencies: { threads: "1.0.0" } },
      "node_modules/threads": { version: "1.0.0" },
      "node_modules/@scope/wasm": { version: "2.0.0", dependencies: { runtime: "^1.0.0", core: "2.0.0" } },
      "node_modules/@scope/wasm/node_modules/core": { version: "2.0.0" },
    };
    expect(collectLockClosure(withPeer, "node_modules/@scope/wasm").sort()).toEqual([
      "node_modules/@scope/wasm",
      "node_modules/@scope/wasm/node_modules/core",
      "node_modules/core",
      "node_modules/runtime",
      "node_modules/threads",
    ]);
  });

  it("必須の peer が lock に無ければ落とし、optional の peer なら落とさない", () => {
    const required = {
      "node_modules/@scope/wasm": { version: "2.0.0", peerDependencies: { gone: "^1.0.0" } },
    };
    expect(() => collectLockClosure(required, "node_modules/@scope/wasm")).toThrow(/解決できない依存/);
    const optionalPeer = {
      "node_modules/@scope/wasm": {
        version: "2.0.0",
        peerDependencies: { gone: "^1.0.0" },
        peerDependenciesMeta: { gone: { optional: true } },
      },
    };
    expect(collectLockClosure(optionalPeer, "node_modules/@scope/wasm")).toEqual(["node_modules/@scope/wasm"]);
  });

  it("このリポジトリの lock では、WASM の実行に要る最上位の @emnapi/core まで拾う", () => {
    const lockPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "package-lock.json");
    const real = JSON.parse(fs.readFileSync(lockPath, "utf8")).packages;
    const closure = collectLockClosure(real, WASM_KEY);
    // `@napi-rs/wasm-runtime`（最上位）が peer で要るもの。入れ子の版（WASM 版の直下）とは別に要る
    expect(closure).toContain("node_modules/@napi-rs/wasm-runtime");
    expect(closure).toContain("node_modules/@emnapi/core");
    expect(closure).toContain("node_modules/@emnapi/runtime");
  });

  it("このリポジトリの lock から、WASM 版と取得元・integrity のそろった依存を拾える", () => {
    const lockPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "package-lock.json");
    const real = JSON.parse(fs.readFileSync(lockPath, "utf8")).packages;
    const closure = collectLockClosure(real, WASM_KEY);
    expect(closure).toContain(WASM_KEY);
    expect(closure.length).toBeGreaterThan(1);
    // WASM 版は oxc-resolver 本体と同じ版でなければ、切り替わった先で版が食い違う
    expect(real[WASM_KEY].version).toBe(real["node_modules/oxc-resolver"].version);
    for (const key of closure) {
      expect(real[key].resolved, key).toMatch(/^https:\/\/registry\.npmjs\.org\//);
      expect(real[key].integrity, key).toMatch(/^sha512-/);
    }
  });
});

describe("matchesIntegrity", () => {
  it("中身が一致すれば通す", () => {
    expect(matchesIntegrity(Buffer.from("payload"), sha512("payload"))).toBe(true);
  });

  it("中身が 1 文字でも違えば通さない", () => {
    expect(matchesIntegrity(Buffer.from("payloae"), sha512("payload"))).toBe(false);
  });

  it("sha512 が無い integrity は通さない", () => {
    expect(matchesIntegrity(Buffer.from("payload"), "sha1-abc")).toBe(false);
    expect(matchesIntegrity(Buffer.from("payload"), undefined)).toBe(false);
  });

  it("複数の方式が並んでいても、sha512 で判定する", () => {
    expect(matchesIntegrity(Buffer.from("payload"), `sha1-abc ${sha512("payload")}`)).toBe(true);
  });
});
