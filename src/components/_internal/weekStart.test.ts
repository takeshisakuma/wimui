import { describe, it, expect, afterEach } from "vitest";
import { getLocaleWeekStart, toIntlLocale } from "./weekStart";

describe("getLocaleWeekStart (T388)", () => {
  const proto = Intl.Locale.prototype as unknown as Record<string, unknown>;
  const original = Object.getOwnPropertyDescriptor(proto, "getWeekInfo");
  afterEach(() => {
    if (original) Object.defineProperty(proto, "getWeekInfo", original);
    delete proto.weekInfo;
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
    expect(getLocaleWeekStart("de")).toBe(0);
  });
});

describe("toIntlLocale (T388)", () => {
  it("canonicalizes a readable locale and falls back for an unreadable one", () => {
    expect(toIntlLocale("en-gb", "en")).toBe("en-GB");
    expect(toIntlLocale("xx_YY", "en")).toBe("en");
  });
});
