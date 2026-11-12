import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { findTypeaheadIndex, isTypeaheadKey, useTypeahead } from "./typeahead";

const ITEMS = ["Apple", "Banana", "blueberry", "Cherry", "Blackberry", "Date"];
const find = (query: string, current: number, disabled: number[] = []) =>
  findTypeaheadIndex({
    query,
    current,
    count: ITEMS.length,
    getText: (i) => ITEMS[i],
    isDisabled: (i) => disabled.includes(i),
  });

afterEach(() => {
  vi.useRealTimers();
});

describe("findTypeaheadIndex", () => {
  it("1 文字目は今の次から探し、大文字小文字を区別しない", () => {
    expect(find("b", -1)).toBe(1);
    expect(find("B", 1)).toBe(2);
  });

  it("同じ文字を続けて打つと、その文字で始まる項目を順に巡る（末尾で先頭へ戻る）", () => {
    expect(find("bb", 1)).toBe(2);
    expect(find("bbb", 2)).toBe(4);
    expect(find("bbbb", 4)).toBe(1);
  });

  it("続きの文字は、今の項目から探す（当たっていれば留まる）", () => {
    expect(find("bl", 2)).toBe(2);
    expect(find("bla", 2)).toBe(4);
  });

  it("無効の項目には止まらない", () => {
    expect(find("b", -1, [1, 2])).toBe(4);
  });

  it("当たりが無ければ -1", () => {
    expect(find("z", 0)).toBe(-1);
    expect(find("", 0)).toBe(-1);
  });
});

describe("isTypeaheadKey", () => {
  const key = (k: string, mods: Partial<KeyboardEvent> = {}) => ({ key: k, ctrlKey: false, metaKey: false, altKey: false, ...mods });

  it("1 文字のキーだけを扱い、修飾キーとの組み合わせは扱わない", () => {
    expect(isTypeaheadKey(key("a"), false)).toBe(true);
    expect(isTypeaheadKey(key("ArrowDown"), false)).toBe(false);
    expect(isTypeaheadKey(key("a", { ctrlKey: true }), false)).toBe(false);
  });

  it("空白は、文字をためているときだけ扱う", () => {
    expect(isTypeaheadKey(key(" "), false)).toBe(false);
    expect(isTypeaheadKey(key(" "), true)).toBe(true);
  });
});

describe("useTypeahead", () => {
  it("打った文字をため、0.5 秒あいたら捨てる", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useTypeahead());
    expect(result.current.push("b")).toBe("b");
    expect(result.current.push("l")).toBe("bl");
    expect(result.current.typing()).toBe(true);
    act(() => vi.advanceTimersByTime(500));
    expect(result.current.typing()).toBe(false);
    expect(result.current.push("c")).toBe("c");
  });
});
