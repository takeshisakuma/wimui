import "@testing-library/jest-dom";
import { vi } from "vitest";
// 文字列ベースの icon/name API をテスト全体で有効化（全アイコン登録）
import "./src/icons";

// ブラウザ API のモックは jsdom 環境でのみ適用する。
// SSR スモークテスト（src/ssr.test.tsx）は node 環境で実行されるため window が存在しない
const isJsdom = typeof window !== "undefined";

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const mockContext = {
  fillRect: vi.fn(),
  clearRect: vi.fn(),
  getImageData: vi.fn(),
  putImageData: vi.fn(),
  createImageData: vi.fn(),
  setTransform: vi.fn(),
  drawImage: vi.fn(),
  save: vi.fn(),
  restore: vi.fn(),
  beginPath: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  closePath: vi.fn(),
  stroke: vi.fn(),
  translate: vi.fn(),
  scale: vi.fn(),
  rotate: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  measureText: vi.fn().mockReturnValue({ width: 0 }),
  transform: vi.fn(),
  rect: vi.fn(),
  clip: vi.fn(),
};

// Mock IntersectionObserver — immediately fires callback as intersecting so lazy-loaded media renders in tests
class IntersectionObserver {
  private callback: IntersectionObserverCallback;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  observe(target: Element) {
    this.callback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this as unknown as globalThis.IntersectionObserver,
    );
  }
  unobserve() {}
  disconnect() {}
}

if (isJsdom) {
  window.ResizeObserver = ResizeObserver;
  window.HTMLElement.prototype.scrollTo = vi.fn();
  window.HTMLElement.prototype.scrollIntoView = vi.fn();

  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue(mockContext);

  if (typeof globalThis.OffscreenCanvas !== 'undefined') {
    globalThis.OffscreenCanvas.prototype.getContext = vi.fn().mockReturnValue(mockContext);
  }

  window.IntersectionObserver = IntersectionObserver as unknown as typeof window.IntersectionObserver;
}

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock requestAnimationFrame
if (isJsdom) {
  window.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  window.cancelAnimationFrame = (id) => clearTimeout(id);
}

// wimui コンポーネントは内蔵 i18n フック（useWimTranslation, i18next 非依存）を使う。
// テストでは本物の解決ロジック（wimTranslate）へ委譲し、本番と同一の文言を検証する。
vi.mock("@/i18n/useWimTranslation", async () => {
  const actual = await vi.importActual<typeof import("./src/i18n/instance")>(
    "./src/i18n/instance",
  );
  return {
    useWimTranslation: (ns?: string | readonly string[]) => ({
      t: (key: string, options?: Record<string, unknown>) =>
        actual.wimTranslate(ns, key, options),
      i18n: { language: "en", changeLanguage: () => {} },
    }),
  };
});
