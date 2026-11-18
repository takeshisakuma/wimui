import { describe, it, expect } from "vitest";
import { largeStepOf } from "./slider-utils";

// T410: PageUp / PageDown の幅。範囲の 10 分の 1 を step の倍数に丸め、step より小さくしない
describe("largeStepOf", () => {
  it("is a tenth of the range", () => {
    expect(largeStepOf(0, 100, 1)).toBe(10);
  });

  it("rounds to a multiple of step so the value stays on the grid", () => {
    expect(largeStepOf(0, 1000, 50)).toBe(100);
    expect(largeStepOf(0, 100, 3)).toBe(9);
  });

  it("is never smaller than one step", () => {
    expect(largeStepOf(0, 1, 0.1)).toBe(0.1);
    expect(largeStepOf(0, 10, 5)).toBe(5);
  });
});
