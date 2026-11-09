import { describe, it, expect } from "vitest";
import { getRovingIndex, isRovingKey } from "./rovingIndex";

describe("getRovingIndex", () => {
  const base = { count: 4 };

  it("moves forward and back, wrapping at the ends", () => {
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: 1 })).toBe(2);
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: 3 })).toBe(0);
    expect(getRovingIndex({ ...base, key: "ArrowLeft", current: 0 })).toBe(3);
    expect(getRovingIndex({ ...base, key: "ArrowDown", current: 0 })).toBe(1);
    expect(getRovingIndex({ ...base, key: "ArrowUp", current: 2 })).toBe(1);
  });

  it("goes to the ends with Home and End", () => {
    expect(getRovingIndex({ ...base, key: "Home", current: 2 })).toBe(0);
    expect(getRovingIndex({ ...base, key: "End", current: 0 })).toBe(3);
  });

  it("skips disabled items, including at Home and End", () => {
    const isDisabled = (i: number) => i === 0 || i === 2;
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: 1, isDisabled })).toBe(3);
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: 3, isDisabled })).toBe(1);
    expect(getRovingIndex({ ...base, key: "Home", current: 3, isDisabled })).toBe(1);
    expect(getRovingIndex({ ...base, key: "End", current: 1, isDisabled: (i) => i === 3 })).toBe(2);
  });

  it("only answers the arrows of its orientation", () => {
    expect(getRovingIndex({ ...base, key: "ArrowDown", current: 0, orientation: "horizontal" })).toBeNull();
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: 0, orientation: "vertical" })).toBeNull();
    expect(getRovingIndex({ ...base, key: "ArrowDown", current: 0, orientation: "vertical" })).toBe(1);
    expect(isRovingKey("ArrowUp", "horizontal")).toBe(false);
    expect(isRovingKey("Home", "horizontal")).toBe(true);
    expect(isRovingKey("Tab")).toBe(false);
  });

  it("stays at the end when wrapping is off", () => {
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: 3, wrap: false })).toBe(3);
    expect(getRovingIndex({ ...base, key: "ArrowLeft", current: 0, wrap: false })).toBe(0);
  });

  it("starts from the edge when nothing is current", () => {
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: -1 })).toBe(0);
    expect(getRovingIndex({ ...base, key: "ArrowLeft", current: -1 })).toBe(3);
  });

  it("returns null when every item is disabled or the list is empty", () => {
    expect(getRovingIndex({ ...base, key: "ArrowRight", current: 0, isDisabled: () => true })).toBeNull();
    expect(getRovingIndex({ ...base, key: "Home", current: 0, isDisabled: () => true })).toBeNull();
    expect(getRovingIndex({ key: "ArrowRight", current: 0, count: 0 })).toBeNull();
  });
});
