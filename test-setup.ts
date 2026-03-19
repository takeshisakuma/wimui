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
      console.log("DEBUG: Loading translation from:", fullPath);
      const content = fs.readFileSync(fullPath, "utf8");
      return JSON.parse(content);
    } catch (e) {
      console.error("DEBUG: Failed to load translation:", filePath, e);
      return {};
    }
  };
  const commonData = loadJSON("public/locales/en/common.json");
  const componentsData = loadJSON("public/locales/en/components.json");
  const translations = { 
    ...commonData, 
    ...componentsData,
    // Add critical keys manually just in case
    "a11y_close": "Close",
    "a11y_clear_input": "Clear input",
    "datepicker_placeholder": "Select date"
  };
  console.log("DEBUG: Translations loaded keys count:", Object.keys(translations).length);
  console.log("DEBUG: a11y_close value:", translations["a11y_close"]);

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
