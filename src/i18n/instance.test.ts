import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  getWimLocale,
  setWimLocale,
  subscribeWimLocale,
  wimTranslate,
} from "./instance";

// 内蔵 i18n ストア（i18next 非依存）の実挙動を検証する。
// コンポーネントテストでは useWimTranslation がモックされ t がキーを返すため、
// 解決ロジックそのものはここで担保する。
describe("wim i18n store", () => {
  beforeEach(() => {
    setWimLocale("en");
  });

  it("defaults to 'en'", () => {
    expect(getWimLocale()).toBe("en");
  });

  it("resolves a bundled key in the requested namespace", () => {
    expect(wimTranslate("common", "a11y.close_menu")).toBe("Close menu");
  });

  it("interpolates {{vars}}", () => {
    expect(wimTranslate("components", "treeview.expand", { label: "Docs" })).toBe(
      "Expand Docs",
    );
  });

  it("falls back across namespaces (fallbackNS)", () => {
    // components のキーを common 指定でも解決できる
    expect(wimTranslate("common", "treeview.expand", { label: "X" })).toBe("Expand X");
  });

  it("returns the key when unresolved, or defaultValue when provided", () => {
    expect(wimTranslate("common", "nope.missing")).toBe("nope.missing");
    expect(wimTranslate("common", "nope.missing", { defaultValue: "Fallback" })).toBe(
      "Fallback",
    );
  });

  it("switches locale and resolves the localized string", () => {
    setWimLocale("ja");
    expect(getWimLocale()).toBe("ja");
    expect(wimTranslate("common", "a11y.close_menu")).toBe("メニューを閉じる");
  });

  it("resolves a language subtag ('ja-JP' -> 'ja')", () => {
    setWimLocale("ja-JP");
    expect(getWimLocale()).toBe("ja");
  });

  it("notifies subscribers on locale change and unsubscribes cleanly", () => {
    const listener = vi.fn();
    const unsubscribe = subscribeWimLocale(listener);
    setWimLocale("pt");
    expect(listener).toHaveBeenCalledTimes(1);
    unsubscribe();
    setWimLocale("en");
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
