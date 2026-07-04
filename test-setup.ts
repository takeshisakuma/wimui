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

// Mock react-i18next
vi.mock("react-i18next", () => {
  const React = require("react");
  const fs = require("node:fs");
  const path = require("node:path");
  const loadJSON = (filePath: string) => {
    try {
      const fullPath = path.join(process.cwd(), filePath);
      const content = fs.readFileSync(fullPath, "utf8");
      return JSON.parse(content);
    } catch (e) {
      return {};
    }
  };
  // Recursively flatten nested JSON into dot-notation keys
  const flatten = (obj: Record<string, unknown>, prefix = ""): Record<string, string> => {
    return Object.entries(obj).reduce((acc, [k, v]) => {
      const key = prefix ? `${prefix}.${k}` : k;
      if (v !== null && typeof v === "object" && !Array.isArray(v)) {
        Object.assign(acc, flatten(v as Record<string, unknown>, key));
      } else {
        acc[key] = String(v);
      }
      return acc;
    }, {} as Record<string, string>);
  };
  const commonData = loadJSON("public/locales/en/common.json");
  const componentsData = loadJSON("public/locales/en/components.json");
  const formData = loadJSON("public/locales/en/form.json");
  const translations = {
    ...flatten(commonData),
    ...flatten(componentsData),
    ...flatten(formData),
  };

  return {
    useTranslation: () => {
      return {
        t: (key: string, options?: Record<string, string>) => {
          let translation = translations[key] || key;
          if (options && typeof translation === "string") {
            Object.keys(options).forEach((k) => {
              translation = translation.replace(`{{${k}}}`, options[k]);
            });
          }
          return translation;
        },
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
    initReactI18next: {
      type: "3rdParty",
      init: () => {},
    },
    // useWimTranslation（内蔵 i18next フォールバック）が参照する API。
    // テストでは上記モックの t が常に使われるよう、外部インスタンスなしを返す
    I18nContext: React.createContext(null),
    getI18n: () => undefined,
  };
});
