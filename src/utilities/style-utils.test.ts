import { describe, it, expect } from "vitest";
import {
  getColorValue,
  getSpacingValue,
  getRadiusValue,
  getShadowValue,
  getFontSizeValue,
  getFontWeightValue,
  getLineHeightValue,
  getOpacityValue,
} from "./style-utils";

describe("getColorValue", () => {
  it("returns undefined for undefined", () => {
    expect(getColorValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getColorValue(null as any)).toBeUndefined();
  });

  it("returns CSS var for known color token", () => {
    expect(getColorValue("primary")).toBe("var(--wim-color-primary)");
    expect(getColorValue("text-primary")).toBe("var(--wim-color-text-primary)");
    expect(getColorValue("surface-app")).toBe("var(--wim-color-surface-app)");
    expect(getColorValue("overlay-strong")).toBe("var(--wim-color-overlay-strong)");
  });

  it("returns CSS var for scrollbar tokens", () => {
    expect(getColorValue("scrollbar-thumb")).toBe("var(--wim-scrollbar-thumb)");
    expect(getColorValue("scrollbar-track")).toBe("var(--wim-scrollbar-track)");
  });

  it("returns raw string for unknown values", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getColorValue("#ff0000" as any)).toBe("#ff0000");
  });
});

describe("getSpacingValue", () => {
  it("returns undefined for undefined", () => {
    expect(getSpacingValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getSpacingValue(null as any)).toBeUndefined();
  });

  it("returns px string for number", () => {
    expect(getSpacingValue(0)).toBe("0px");
    expect(getSpacingValue(16)).toBe("16px");
  });

  it("returns CSS var for known spacing token", () => {
    expect(getSpacingValue("xs")).toBe("var(--wim-spacing-xs)");
    expect(getSpacingValue("md")).toBe("var(--wim-spacing-md)");
    expect(getSpacingValue("3xl")).toBe("var(--wim-spacing-3xl)");
  });

  it("returns raw string for unknown token", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getSpacingValue("huge" as any)).toBe("huge");
  });
});

describe("getRadiusValue", () => {
  it("returns undefined for undefined", () => {
    expect(getRadiusValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getRadiusValue(null as any)).toBeUndefined();
  });

  it("returns px string for number", () => {
    expect(getRadiusValue(4)).toBe("4px");
  });

  it("returns CSS var for known radius token", () => {
    expect(getRadiusValue("sm")).toBe("var(--wim-radius-sm)");
    expect(getRadiusValue("full")).toBe("var(--wim-radius-full)");
  });

  it("returns raw string for unknown token", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getRadiusValue("custom" as any)).toBe("custom");
  });
});

describe("getShadowValue", () => {
  it("returns undefined for undefined", () => {
    expect(getShadowValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getShadowValue(null as any)).toBeUndefined();
  });

  it("returns CSS var for known shadow token", () => {
    expect(getShadowValue("none")).toBe("var(--wim-shadow-none)");
    expect(getShadowValue("md")).toBe("var(--wim-shadow-md)");
    expect(getShadowValue("focus")).toBe("var(--wim-shadow-focus)");
  });

  it("returns raw string for unknown token", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getShadowValue("custom" as any)).toBe("custom");
  });
});

describe("getFontSizeValue", () => {
  it("returns undefined for undefined", () => {
    expect(getFontSizeValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getFontSizeValue(null as any)).toBeUndefined();
  });

  it("returns CSS var for known font size token", () => {
    expect(getFontSizeValue("xs")).toBe("var(--wim-font-size-xs)");
    expect(getFontSizeValue("2xl")).toBe("var(--wim-font-size-2xl)");
    expect(getFontSizeValue("7xl")).toBe("var(--wim-font-size-7xl)");
  });

  it("returns raw string for unknown token", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getFontSizeValue("10xl" as any)).toBe("10xl");
  });
});

describe("getFontWeightValue", () => {
  it("returns undefined for undefined", () => {
    expect(getFontWeightValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getFontWeightValue(null as any)).toBeUndefined();
  });

  it("returns CSS var for known font weight token", () => {
    expect(getFontWeightValue("normal")).toBe("var(--wim-font-weight-normal)");
    expect(getFontWeightValue("bold")).toBe("var(--wim-font-weight-bold)");
  });

  it("returns raw string for unknown token", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getFontWeightValue("extrabold" as any)).toBe("extrabold");
  });
});

describe("getLineHeightValue", () => {
  it("returns undefined for undefined", () => {
    expect(getLineHeightValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getLineHeightValue(null as any)).toBeUndefined();
  });

  it("returns CSS var for known line height token", () => {
    expect(getLineHeightValue("normal")).toBe("var(--wim-line-height-normal)");
    expect(getLineHeightValue("loose-jp")).toBe("var(--wim-line-height-loose-jp)");
    expect(getLineHeightValue("tight")).toBe("var(--wim-line-height-tight)");
  });

  it("returns raw string for unknown token", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getLineHeightValue("1.5" as any)).toBe("1.5");
  });
});

describe("getOpacityValue", () => {
  it("returns undefined for undefined", () => {
    expect(getOpacityValue(undefined)).toBeUndefined();
  });

  it("returns undefined for null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getOpacityValue(null as any)).toBeUndefined();
  });

  it("returns CSS var for known opacity token", () => {
    expect(getOpacityValue("disabled")).toBe("var(--wim-opacity-disabled)");
    expect(getOpacityValue("ghost")).toBe("var(--wim-opacity-ghost)");
    expect(getOpacityValue("secondary")).toBe("var(--wim-opacity-secondary)");
  });

  it("returns raw string for unknown token", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getOpacityValue("0.5" as any)).toBe("0.5");
  });
});
