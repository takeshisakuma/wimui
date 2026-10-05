import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  getWimLocale,
  setWimLocale,
  subscribeWimLocale,
  wimTranslate,
} from "./instance";
import { commonNs } from "./generated/common";
import { componentsNs } from "./generated/components";

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
    expect(wimTranslate([commonNs], "a11y.close_menu")).toBe("Close menu");
  });

  it("interpolates {{vars}}", () => {
    expect(wimTranslate([componentsNs], "treeview.expand", { label: "Docs" })).toBe(
      "Expand Docs",
    );
  });

  // T318: 渡していない名前空間は探さない（以前は、残りの全名前空間へ探し直していた）。
  // 探し直すには全部の翻訳を import している必要があり、使わない部品の文言まで同梱される。
  it("looks only in the namespaces it was given", () => {
    expect(wimTranslate([commonNs], "treeview.expand", { label: "X" })).toBe("treeview.expand");
    expect(wimTranslate([commonNs, componentsNs], "treeview.expand", { label: "X" })).toBe("Expand X");
  });

  it("resolves an explicit ns:key among the given namespaces", () => {
    expect(wimTranslate([commonNs, componentsNs], "components:treeview.expand", { label: "X" })).toBe(
      "Expand X",
    );
  });

  it("returns the key when no namespace is given", () => {
    expect(wimTranslate([], "a11y.close_menu")).toBe("a11y.close_menu");
  });

  it("returns the key when unresolved, or defaultValue when provided", () => {
    expect(wimTranslate([commonNs], "nope.missing")).toBe("nope.missing");
    expect(wimTranslate([commonNs], "nope.missing", { defaultValue: "Fallback" })).toBe(
      "Fallback",
    );
  });

  it("switches locale and resolves the localized string", () => {
    setWimLocale("ja");
    expect(getWimLocale()).toBe("ja");
    expect(wimTranslate([commonNs], "a11y.close_menu")).toBe("メニューを閉じる");
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
