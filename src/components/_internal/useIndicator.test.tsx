import React from "react";
import { render, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { useIndicator } from "./useIndicator";

/**
 * 「測る要素を監視しているか」を見るテスト。
 *
 * スライダーの寸法は active item の `offsetWidth` / `offsetLeft` から取るのに、
 * ResizeObserver がコンテナしか見ていなかった（〜2026-08-01）。横並びのタブは
 * コンテナが `width: 100%` なので、Web フォントの差し替えで item が伸びても
 * コンテナのサイズは動かず再計測が走らない＝フォールバック字形で測った寸法が
 * そのまま残る。実測で 1.73〜8.03px ずれていた（T43。詳細は useIndicator.ts）。
 *
 * jsdom ではフォントの差し替えを再現できないので、代わりに**監視対象**を見る。
 * 「コンテナだけ監視」に戻すと最初のテストが落ちる。
 */
class RecordingResizeObserver {
  static instances: RecordingResizeObserver[] = [];

  observed = new Set<Element>();

  constructor(private readonly callback: ResizeObserverCallback) {
    RecordingResizeObserver.instances.push(this);
  }

  observe(el: Element) {
    this.observed.add(el);
  }

  unobserve(el: Element) {
    this.observed.delete(el);
  }

  disconnect() {
    this.observed.clear();
  }

  /** レイアウト変化の通知を模す。 */
  fire() {
    this.callback([], this as unknown as ResizeObserver);
  }
}

/** jsdom の offsetWidth は常に 0 なので、要素ごとに実寸を差し込む。 */
const setWidth = (el: HTMLElement, width: number, left = 0) => {
  Object.defineProperty(el, "offsetWidth", { value: width, configurable: true });
  Object.defineProperty(el, "offsetLeft", { value: left, configurable: true });
};

const Harness = ({ activeIndex }: { activeIndex: number }) => {
  const { containerRef, sliderStyle } = useIndicator({ activeSelector: ".active" });
  return (
    <div ref={containerRef} data-testid="list">
      <div data-testid="slider" style={sliderStyle} />
      <button data-testid="item-0" className={activeIndex === 0 ? "active" : ""}>
        First
      </button>
      <button data-testid="item-1" className={activeIndex === 1 ? "active" : ""}>
        Second
      </button>
    </div>
  );
};

describe("useIndicator", () => {
  const original = window.ResizeObserver;

  beforeEach(() => {
    RecordingResizeObserver.instances = [];
    window.ResizeObserver =
      RecordingResizeObserver as unknown as typeof window.ResizeObserver;
  });

  afterEach(() => {
    window.ResizeObserver = original;
  });

  it("observes the active item as well as the container", () => {
    const { getByTestId } = render(<Harness activeIndex={0} />);

    const observer = RecordingResizeObserver.instances[0];
    expect(observer).toBeDefined();
    expect(observer.observed.has(getByTestId("list"))).toBe(true);
    // ここが本題。コンテナだけを見ていると、item だけが伸びる変化を取り逃す。
    expect(observer.observed.has(getByTestId("item-0"))).toBe(true);
    // スライダー自身は監視しない（自分で書いた width が自分を再発火させるため）。
    expect(observer.observed.has(getByTestId("slider"))).toBe(false);
  });

  it("re-measures when only the active item changes size", () => {
    const { getByTestId } = render(<Harness activeIndex={0} />);
    const observer = RecordingResizeObserver.instances[0];

    setWidth(getByTestId("item-0"), 117);
    act(() => observer.fire());

    expect(getByTestId("slider").style.width).toBe("117px");
  });

  it("moves the observation when the active item changes", () => {
    const { getByTestId, rerender } = render(<Harness activeIndex={0} />);
    const observer = RecordingResizeObserver.instances[0];

    rerender(<Harness activeIndex={1} />);
    act(() => observer.fire());

    expect(observer.observed.has(getByTestId("item-1"))).toBe(true);
    expect(observer.observed.has(getByTestId("item-0"))).toBe(false);
  });
});
