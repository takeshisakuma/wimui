// @vitest-environment node
//
// SSR スモークテスト
//
// DOM のない node 環境で全公開コンポーネントを renderToString に通し、
// モジュールスコープまたはレンダーパスでの window / document 等の
// ブラウザグローバル参照（SSR で即クラッシュする欠陥）を検出する。
//
// - このファイルの import 自体が「全モジュールスコープの SSR 安全性」の検証になる
//   （モジュールスコープに未ガードの window 参照があれば import 時点で落ちる）
// - レンダリング中の ReferenceError（未定義のブラウザグローバル参照）のみを失敗とする。
//   必須 props 不足に起因する TypeError 等はこのテストの対象外（各単体テストの責務）
import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { createElement, type ComponentType } from "react";
import { isValidElementType } from "react-is";
import * as WimUI from "./index";
import "./tokens";

// React の SSR 警告（useLayoutEffect does nothing on the server 等）でログが
// 埋まらないよう抑制する。エラー自体は throw で検出されるため情報は失われない
vi.spyOn(console, "error").mockImplementation(() => {});
vi.spyOn(console, "warn").mockImplementation(() => {});

// エクスポートは i18n インスタンスやアイコンマップ等も含む巨大な union のため、
// React コンポーネントかを実行時に判定してから ComponentType へ絞り込む
const componentEntries = Object.entries(WimUI)
  .filter(
    ([name, value]) =>
      /^[A-Z]/.test(name) &&
      (typeof value === "function" || typeof value === "object") &&
      isValidElementType(value),
  )
  .map(([name, value]): [string, ComponentType] => [
    name,
    value as unknown as ComponentType,
  ]);

describe("SSR smoke test (node, no DOM)", () => {
  it("window / document が存在しない環境である", () => {
    expect(typeof window).toBe("undefined");
    expect(typeof document).toBe("undefined");
  });

  it("公開コンポーネントを列挙できる", () => {
    expect(componentEntries.length).toBeGreaterThan(100);
  });

  it.each(componentEntries)(
    "%s は renderToString でブラウザグローバルを参照しない",
    (name, Component) => {
      try {
        renderToString(createElement(Component));
      } catch (error) {
        // ReferenceError = 未定義グローバル（window 等）への参照 → SSR 非対応として失敗
        if (error instanceof ReferenceError) {
          throw new Error(
            `${name} は SSR でクラッシュします: ${error.message}`,
            { cause: error },
          );
        }
        // それ以外（必須 props 不足による TypeError 等）は SSR 安全性の対象外
      }
    },
  );
});
