import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;
window.HTMLElement.prototype.scrollTo = vi.fn();
window.HTMLElement.prototype.scrollIntoView = vi.fn();

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
window.IntersectionObserver = IntersectionObserver as unknown as typeof window.IntersectionObserver;

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock requestAnimationFrame
window.requestAnimationFrame = (callback) => setTimeout(callback, 0);
window.cancelAnimationFrame = (id) => clearTimeout(id);

// Mock react-i18next
vi.mock("react-i18next", () => {
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
  const translations = {
    ...flatten(commonData),
    ...flatten(componentsData),
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
  };
});
