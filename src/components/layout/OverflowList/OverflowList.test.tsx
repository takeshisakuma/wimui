import type React from "react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { OverflowList } from "./OverflowList";
import { getVisibleCount } from "./getVisibleCount";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

// jsdom は幅を持たないので、data-w（項目）と data-available（器）から読ませる
const rectSpy = vi.spyOn(HTMLElement.prototype, "getBoundingClientRect");
let clientWidthDescriptor: PropertyDescriptor | undefined;

beforeAll(() => {
  rectSpy.mockImplementation(function (this: HTMLElement) {
    const width = Number(this.dataset.w ?? 0);
    return { width, height: 0, top: 0, left: 0, right: width, bottom: 0, x: 0, y: 0, toJSON: () => ({}) };
  });
  clientWidthDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth");
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get(this: HTMLElement) {
      return Number(this.dataset.available ?? 0);
    },
  });
});

afterAll(() => {
  rectSpy.mockRestore();
  if (clientWidthDescriptor) Object.defineProperty(HTMLElement.prototype, "clientWidth", clientWidthDescriptor);
});

const ITEMS = ["alpha", "beta", "gamma", "delta", "epsilon"];

const renderList = (available: number, props: Partial<React.ComponentProps<typeof OverflowList<string>>> = {}) =>
  render(
    <OverflowList
      data-testid="list"
      data-available={available}
      items={ITEMS}
      renderItem={(item) => (
        <span data-w="50" data-testid="item">
          {item}
        </span>
      )}
      renderOverflow={(hidden) => (
        <button type="button" data-w="30" data-testid="overflow">
          +{hidden.length}
        </button>
      )}
      {...props}
    />,
  );

// 見えている並び（根の最初の子。2 つ目は測る層の写し）
const visibleTexts = () =>
  Array.from(screen.getByTestId("list").firstElementChild!.children).map((el) => el.textContent);

describe("getVisibleCount", () => {
  const base = { overflowWidth: 30, gap: 10, minVisibleItems: 0, alwaysRenderOverflow: false };

  it("keeps every item when they fit, without reserving room for the indicator", () => {
    // 50 + 10 + 50 = 110
    expect(getVisibleCount({ ...base, itemWidths: [50, 50], available: 110 })).toBe(2);
  });

  it("reserves the indicator and its gap once items no longer fit", () => {
    // 30 + (10 + 50) = 90 は入り、もう 1 つ（150）は 120 に入らない
    expect(getVisibleCount({ ...base, itemWidths: [50, 50, 50], available: 120 })).toBe(1);
  });

  it("does not collapse a row that fits only within sub-pixel rounding", () => {
    expect(getVisibleCount({ ...base, itemWidths: [50.3, 50.3], available: 110.4 })).toBe(2);
  });

  it("never goes below minVisibleItems, nor above the number of items", () => {
    expect(getVisibleCount({ ...base, itemWidths: [50, 50, 50], available: 0, minVisibleItems: 2 })).toBe(2);
    expect(getVisibleCount({ ...base, itemWidths: [50], available: 0, minVisibleItems: 5 })).toBe(1);
  });

  it("reserves the indicator even when everything fits if it is always rendered", () => {
    expect(getVisibleCount({ ...base, itemWidths: [50, 50], available: 110, alwaysRenderOverflow: true })).toBe(1);
  });
});

describe("OverflowList", () => {
  it("renders every item and no indicator when they fit", () => {
    renderList(250);
    expect(visibleTexts()).toEqual(ITEMS);
    expect(screen.getByTestId("list")).toHaveAttribute("data-hidden-count", "0");
  });

  it("collapses items from the end into the indicator, which counts exactly the hidden ones", () => {
    // 30 + 50 * 3 = 180 <= 200 < 230
    renderList(200);
    expect(visibleTexts()).toEqual(["alpha", "beta", "gamma", "+2"]);
    expect(screen.getByTestId("list")).toHaveAttribute("data-hidden-count", "2");
  });

  it("collapses from the start and keeps the last items", () => {
    renderList(200, { collapseFrom: "start" });
    expect(visibleTexts()).toEqual(["+2", "gamma", "delta", "epsilon"]);
  });

  it("passes the hidden items in order to renderOverflow and onOverflow", () => {
    const renderOverflow = vi.fn((hidden: string[]) => <span data-w="30">{hidden.join(",")}</span>);
    const onOverflow = vi.fn();
    renderList(200, { renderOverflow, onOverflow });
    expect(screen.getByText("delta,epsilon")).toBeInTheDocument();
    expect(onOverflow).toHaveBeenLastCalledWith(["delta", "epsilon"]);
    expect(onOverflow).toHaveBeenCalledTimes(1);
  });

  it("does not call onOverflow when nothing is hidden on mount", () => {
    const onOverflow = vi.fn();
    renderList(250, { onOverflow });
    expect(onOverflow).not.toHaveBeenCalled();
  });

  it("brings items back when the row gets wider", () => {
    const { rerender } = renderList(120);
    expect(visibleTexts()).toEqual(["alpha", "+4"]);
    rerender(
      <OverflowList
        data-testid="list"
        data-available={250}
        items={ITEMS}
        renderItem={(item) => <span data-w="50">{item}</span>}
        renderOverflow={(hidden) => <span data-w="30">+{hidden.length}</span>}
      />,
    );
    expect(visibleTexts()).toEqual(ITEMS);
  });

  it("keeps the measuring copy out of the accessibility tree and the tab order", () => {
    renderList(120);
    const layer = screen.getByTestId("list").querySelector('[aria-hidden="true"]');
    expect(layer).toHaveAttribute("inert");
    // 見えている「+N」は 1 つだけ（測る層のものは role の検索に出ない）
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("supports asChild", () => {
    render(
      <OverflowList
        asChild
        items={["a"]}
        renderItem={(item) => <span>{item}</span>}
        renderOverflow={() => null}
      >
        <section data-testid="child" />
      </OverflowList>,
    );
    const root = screen.getByTestId("child");
    expect(root).toHaveClass("wim-overflow-list");
    expect(root).toHaveTextContent("a");
  });
});
