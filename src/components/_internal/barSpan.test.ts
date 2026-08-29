import { describe, it, expect } from "vitest";
import { spanPixel, isFiniteNumber, spanDomain, type BarSpan } from "./barSpan";

describe("spanPixel", () => {
  // recharts は `[lo, hi]` を `y = scale(hi)` / `height = scale(lo) - scale(hi)` の
  // 矩形にする。上端が hi、下端が lo。
  const rect = { y: 100, height: 200 };

  it("puts the ends of the span on the ends of the rect", () => {
    expect(spanPixel(50, [0, 50], rect)).toBe(100);
    expect(spanPixel(0, [0, 50], rect)).toBe(300);
  });

  it("places a value in between by ratio", () => {
    expect(spanPixel(25, [0, 50], rect)).toBe(200);
    expect(spanPixel(40, [0, 50], rect)).toBe(140);
  });

  it("works when the span does not start at zero", () => {
    expect(spanPixel(15, [10, 20], rect)).toBe(200);
  });

  it("works across zero", () => {
    expect(spanPixel(0, [-50, 50], rect)).toBe(200);
  });

  // 幅の無い span（始値＝終値 / 全部同じ値）。比が取れないので上端に寄せ、
  // 呼び出し側が線として描く。0 で割って NaN を座標に入れない。
  it("returns the top edge for a zero-width span", () => {
    expect(spanPixel(7, [7, 7], { y: 42, height: 0 })).toBe(42);
  });
});

describe("isFiniteNumber", () => {
  it("accepts finite numbers only", () => {
    expect(isFiniteNumber(0)).toBe(true);
    expect(isFiniteNumber(-1.5)).toBe(true);
  });

  // 欠測を 0 と読み替えないための番人。
  it.each([null, undefined, NaN, Infinity, "3", {}])("rejects %p", (value) => {
    expect(isFiniteNumber(value)).toBe(false);
  });
});

describe("spanDomain", () => {
  it("has no opinion when there is nothing to measure", () => {
    expect(spanDomain([])).toBeUndefined();
  });

  // 実測で出た欠陥 1: 端を丸めないと、余色の生の掛け算がそのまま目盛りに出る
  // （軸に `-11.399999999999999` と描かれた）。
  it("returns bounds that read as tick labels", () => {
    const domain = spanDomain([
      [41, 402],
      [12, 12],
      [28, 91],
    ]) as [number, number];
    for (const bound of domain) {
      expect(String(bound)).not.toMatch(/\d{6,}/);
    }
  });

  // 実測で出た欠陥 2: ミリ秒に負は無いのに軸が -113 から始まっていた。
  it("does not invent negative values for data that has none", () => {
    const [low] = spanDomain([
      [41, 402],
      [210, 2380],
      [28, 91],
    ]) as [number, number];
    expect(low).toBe(0);
  });

  // ただし 0 へ寄せるのは丸めた下端が負のときだけ。値が 0 から遠いデータで
  // 0 まで引き伸ばすと、図の下半分が空になって箱が潰れる。
  it("keeps a positive floor when the data sits well above zero", () => {
    const [low, high] = spanDomain([
      [32, 58],
      [58, 210],
      [40, 240],
    ]) as [number, number];
    expect(low).toBeGreaterThan(0);
    expect(low).toBeLessThan(32);
    expect(high).toBeGreaterThan(240);
  });

  it("keeps negative data negative", () => {
    const [low, high] = spanDomain([
      [-40, -10],
      [-25, -5],
    ]) as [number, number];
    expect(low).toBeLessThan(-40);
    expect(high).toBeGreaterThanOrEqual(-5);
  });

  it("always contains every value it was given", () => {
    const spans: BarSpan[] = [
      [178.3, 185.2],
      [181.2, 186.9],
      [182.5, 190.6],
    ];
    const [low, high] = spanDomain(spans) as [number, number];
    for (const [lo, hi] of spans) {
      expect(low).toBeLessThanOrEqual(lo);
      expect(high).toBeGreaterThanOrEqual(hi);
    }
  });

  // 全部同じ値でも軸は潰せない（高さ 0 の描画域になる）。
  it("still produces a range when every value is identical", () => {
    const [low, high] = spanDomain([
      [7, 7],
      [7, 7],
    ]) as [number, number];
    expect(high).toBeGreaterThan(low);
    expect(low).toBeLessThanOrEqual(7);
    expect(high).toBeGreaterThanOrEqual(7);
  });
});
