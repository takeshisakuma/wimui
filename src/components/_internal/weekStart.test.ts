import { describe, it, expect, afterEach } from "vitest";
import { getLocaleWeekStart, toIntlLocale } from "./weekStart";

describe("getLocaleWeekStart (T388)", () => {
  // 実行環境の実装（Node 26 は getWeekInfo、Node 22 は weekInfo のプロパティ）を差し替えて試すので、
  // 両方を元の記述子へ戻す。無かったものだけを消す ── 以前は weekInfo を無条件に消していて、
  // Node 22（CI）では本物の実装が 2 つ目のテストから無くなっていた
  const proto = Intl.Locale.prototype as unknown as Record<string, unknown>;
  const originals = {
    getWeekInfo: Object.getOwnPropertyDescriptor(proto, "getWeekInfo"),
    weekInfo: Object.getOwnPropertyDescriptor(proto, "weekInfo"),
  };
  afterEach(() => {
    for (const [name, descriptor] of Object.entries(originals)) {
      if (descriptor) Object.defineProperty(proto, name, descriptor);
      else delete proto[name];
    }
  });

  it("starts on Sunday for the bundled locales without a region", () => {
    expect(getLocaleWeekStart("en")).toBe(0);
    expect(getLocaleWeekStart("ja")).toBe(0);
    expect(getLocaleWeekStart("pt")).toBe(0);
  });

  it("follows the region", () => {
    expect(getLocaleWeekStart("en-GB")).toBe(1);
    expect(getLocaleWeekStart("de")).toBe(1);
    expect(getLocaleWeekStart("en-US")).toBe(0);
  });

  it("falls back to Sunday for a Saturday locale and for an unreadable one", () => {
    expect(getLocaleWeekStart("ar-EG")).toBe(0);
    expect(getLocaleWeekStart("not a locale")).toBe(0);
  });

  it("reads the legacy weekInfo accessor (older Chrome / Safari)", () => {
    Object.defineProperty(proto, "getWeekInfo", { value: undefined, configurable: true, writable: true });
    Object.defineProperty(proto, "weekInfo", { get: () => ({ firstDay: 1 }), configurable: true });
    expect(getLocaleWeekStart("en")).toBe(1);
  });

  it("falls back to Sunday when the browser has no week info", () => {
    Object.defineProperty(proto, "getWeekInfo", { value: undefined, configurable: true, writable: true });
    Object.defineProperty(proto, "weekInfo", { value: undefined, configurable: true, writable: true });
    expect(getLocaleWeekStart("de")).toBe(0);
  });
});

describe("toIntlLocale (T388)", () => {
  it("canonicalizes a readable locale and falls back for an unreadable one", () => {
    expect(toIntlLocale("en-gb", "en")).toBe("en-GB");
    expect(toIntlLocale("xx_YY", "en")).toBe("en");
  });
});
