import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { PivotTable, type PivotTableAxisNode } from "./PivotTable";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const ROWS: PivotTableAxisNode[] = [
  {
    key: "drinks",
    label: "Drinks",
    children: [
      { key: "latte", label: "Latte" },
      { key: "tea", label: "Tea" },
    ],
  },
  { key: "gift", label: "Gift cards" },
];

const COLUMNS: PivotTableAxisNode[] = [
  {
    key: "q1",
    label: "Q1",
    children: [
      { key: "jan", label: "Jan" },
      { key: "feb", label: "Feb" },
    ],
  },
  { key: "q2", label: "Q2", children: [{ key: "apr", label: "Apr" }] },
];

// セルの中身に「どの行・どの列を聞かれたか」をそのまま出す
const getValue = (row: string | null, column: string | null) => `${row ?? "ALL"}/${column ?? "ALL"}`;

/** `headers` が指す見出しの文字を、書かれた順に返す（読み上げで辿る順）。 */
const headersOf = (cell: HTMLElement) =>
  (cell.getAttribute("headers") ?? "")
    .split(" ")
    .filter(Boolean)
    .map((id) => document.getElementById(id)?.textContent);

type Layout = {
  scrollWidth?: number;
  clientWidth?: number;
  scrollHeight?: number;
  clientHeight?: number;
  /** 行見出しの列の幅（どの要素にも同じ値を返す）。 */
  offsetWidth?: number;
  /** 見出しの行（`tr`）の高さ。 */
  rowHeight?: number;
};

/**
 * jsdom は配置をしないので、寸法を差し替えて「はみ出している / 収まっている」を作る。
 * 差し替えは必ず元へ戻す ── 元の定義が `HTMLElement.prototype` に無い（`Element.prototype` に
 * ある）ときは、足したものを消す。戻さないと、後ろのテストが差し替えた寸法のまま走る。
 */
const withLayout = (layout: Layout, run: () => void) => {
  const keys = ["scrollWidth", "clientWidth", "scrollHeight", "clientHeight", "offsetWidth"] as const;
  const originals = keys.map((key) => Object.getOwnPropertyDescriptor(HTMLElement.prototype, key));
  keys.forEach((key) => {
    const value = layout[key];
    if (value !== undefined) Object.defineProperty(HTMLElement.prototype, key, { configurable: true, get: () => value });
  });
  const originalRect = HTMLTableRowElement.prototype.getBoundingClientRect;
  if (layout.rowHeight !== undefined) {
    const height = layout.rowHeight;
    HTMLTableRowElement.prototype.getBoundingClientRect = () => ({ height }) as DOMRect;
  }
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
  try {
    run();
  } finally {
    vi.unstubAllGlobals();
    HTMLTableRowElement.prototype.getBoundingClientRect = originalRect;
    keys.forEach((key, i) => {
      const original = originals[i];
      if (original) Object.defineProperty(HTMLElement.prototype, key, original);
      else delete (HTMLElement.prototype as unknown as Record<string, unknown>)[key];
    });
  }
};

describe("PivotTable", () => {
  it("renders a table with one row per row node", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} aria-label="Sales" />);
    const table = screen.getByRole("table", { name: "Sales" });
    expect(table).toHaveClass("wim-pivot-table");
    expect(screen.getAllByRole("rowheader").map((h) => h.textContent)).toEqual(["Drinks", "Latte", "Tea", "Gift cards"]);
  });

  it("forwards the ref to the table element", () => {
    const ref = React.createRef<HTMLTableElement>();
    render(<PivotTable ref={ref} rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    expect(ref.current?.tagName).toBe("TABLE");
  });

  it("spans a column group over its leaves", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    const q1 = screen.getByRole("columnheader", { name: "Q1" });
    expect(q1).toHaveAttribute("colspan", "2");
    expect(q1).toHaveAttribute("scope", "colgroup");
    expect(screen.getByRole("columnheader", { name: "Jan" })).toHaveAttribute("scope", "col");
  });

  it("writes one colgroup for the row headings and one per top-level column node", () => {
    const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    const spans = Array.from(container.querySelectorAll("colgroup")).map((g) => g.getAttribute("span"));
    expect(spans).toEqual([null, "2", "1"]);
  });

  it("asks getValue for the leaf, the group subtotal and nothing else by default", () => {
    const spy = vi.fn(getValue);
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={spy} />);
    expect(screen.getByText("latte/jan")).toBeInTheDocument();
    // グループの行は、そのグループのキーで小計を聞く
    expect(screen.getByText("drinks/feb")).toBeInTheDocument();
    expect(spy.mock.calls.some(([r, c]) => r === null || c === null)).toBe(false);
  });

  it("lists the row path and then the column path in each cell's headers", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    expect(headersOf(screen.getByText("tea/feb"))).toEqual(["Drinks", "Tea", "Q1", "Feb"]);
    expect(headersOf(screen.getByText("gift/apr"))).toEqual(["Gift cards", "Q2", "Apr"]);
    expect(headersOf(screen.getByText("drinks/jan"))).toEqual(["Drinks", "Q1", "Jan"]);
  });

  it("points a nested row heading at its ancestors", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    expect(headersOf(screen.getByRole("rowheader", { name: "Tea" }))).toEqual(["Drinks"]);
    expect(screen.getByRole("rowheader", { name: "Drinks" })).not.toHaveAttribute("headers");
  });

  it("indents row headings by depth", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    const depth = (name: string) =>
      screen.getByRole("rowheader", { name }).style.getPropertyValue("--wim-pivot-table-depth");
    expect(depth("Drinks")).toBe("0");
    expect(depth("Tea")).toBe("1");
  });

  it("shows the row axis label in the corner and includes it in the row headings", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} rowAxisLabel="Product" />);
    const corner = screen.getByRole("columnheader", { name: "Product" });
    expect(corner).toHaveAttribute("rowspan", "2");
    expect(headersOf(screen.getByRole("rowheader", { name: "Tea" }))).toEqual(["Product", "Drinks"]);
  });

  it("leaves the corner as a plain cell when there is no row axis label", () => {
    const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    const first = container.querySelector("thead tr")!.firstElementChild!;
    expect(first.tagName).toBe("TD");
    expect(first).toBeEmptyDOMElement();
  });

  it("adds a subtotal column per column group", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} columnSubtotals />);
    expect(screen.getByRole("columnheader", { name: "Q1" })).toHaveAttribute("colspan", "3");
    expect(headersOf(screen.getByText("latte/q1"))).toEqual(["Drinks", "Latte", "Q1", "Total"]);
  });

  it("adds a grand total column that asks for a null column key", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} totalColumn />);
    expect(headersOf(screen.getByText("latte/ALL"))).toEqual(["Drinks", "Latte", "Total"]);
  });

  it("adds a grand total row in the footer that asks for a null row key", () => {
    const { container } = render(
      <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} totalRow totalColumn rowAxisLabel="Product" />,
    );
    const footer = container.querySelector("tfoot")!;
    expect(within(footer).getByRole("rowheader", { name: "Total" })).toBeInTheDocument();
    expect(headersOf(within(footer).getByText("ALL/jan"))).toEqual(["Total", "Q1", "Jan"]);
    expect(within(footer).getByText("ALL/ALL")).toBeInTheDocument();
  });

  it("has no footer without totalRow", () => {
    const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
    expect(container.querySelector("tfoot")).toBeNull();
  });

  it("uses the label override for every total heading", () => {
    render(
      <PivotTable
        rows={ROWS}
        columns={COLUMNS}
        getValue={getValue}
        columnSubtotals
        totalRow
        totalColumn
        labels={{ total: "Sum" }}
      />,
    );
    // 小計の列 2 本 ＋ 総計の列 1 本
    expect(screen.getAllByRole("columnheader", { name: "Sum" })).toHaveLength(3);
    expect(screen.getByRole("rowheader", { name: "Sum" })).toBeInTheDocument();
    expect(screen.queryByText("Total")).toBeNull();
  });

  it("renders an empty cell when getValue returns nothing", () => {
    const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={() => null} />);
    const cells = container.querySelectorAll("tbody td");
    expect(cells).toHaveLength(4 * 3);
    cells.forEach((cell) => expect(cell).toBeEmptyDOMElement());
  });

  it("names the table by its caption", () => {
    render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} caption="Units sold" />);
    expect(screen.getByRole("table", { name: "Units sold" })).toBeInTheDocument();
  });

  it("gives every heading a unique id, also across two tables on one page", () => {
    const { container } = render(
      <>
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} totalRow />
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} totalRow />
      </>,
    );
    const ids = Array.from(container.querySelectorAll("[id]")).map((el) => el.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  describe("collapsing row groups", () => {
    const headings = () => screen.getAllByRole("rowheader").map((h) => h.textContent);
    const toggleOf = (name: string) => screen.getByRole("button", { name });

    it("expands every group by default and marks the button as expanded", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      expect(headings()).toEqual(["Drinks", "Latte", "Tea", "Gift cards"]);
      expect(toggleOf("Drinks")).toHaveAttribute("aria-expanded", "true");
    });

    it("gives a button only to rows that have children", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      expect(screen.getAllByRole("button")).toHaveLength(1);
      expect(within(screen.getByRole("rowheader", { name: "Latte" })).queryByRole("button")).toBeNull();
    });

    it("collapses a group to its subtotal row on click and expands it again", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      fireEvent.click(toggleOf("Drinks"));
      expect(headings()).toEqual(["Drinks", "Gift cards"]);
      expect(toggleOf("Drinks")).toHaveAttribute("aria-expanded", "false");
      // 小計の行は残る
      expect(screen.getByText("drinks/jan")).toBeInTheDocument();
      expect(screen.queryByText("latte/jan")).toBeNull();
      fireEvent.click(toggleOf("Drinks"));
      expect(headings()).toEqual(["Drinks", "Latte", "Tea", "Gift cards"]);
    });

    it("keeps the heading name plain so cells do not announce the button", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      expect(headersOf(screen.getByText("tea/feb"))).toEqual(["Drinks", "Tea", "Q1", "Feb"]);
    });

    it("keeps the headers of the rows after a collapsed group pointing at the right headings", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} defaultExpandedValues={[]} />);
      expect(headersOf(screen.getByText("gift/apr"))).toEqual(["Gift cards", "Q2", "Apr"]);
    });

    it("starts from defaultExpandedValues", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} defaultExpandedValues={[]} />);
      expect(headings()).toEqual(["Drinks", "Gift cards"]);
    });

    it("reports the new list without changing anything when controlled", () => {
      const onExpandedChange = vi.fn();
      render(
        <PivotTable
          rows={ROWS}
          columns={COLUMNS}
          getValue={getValue}
          expandedValues={["drinks"]}
          onExpandedChange={onExpandedChange}
        />,
      );
      fireEvent.click(toggleOf("Drinks"));
      expect(onExpandedChange).toHaveBeenCalledWith([]);
      // 親が値を変えるまでは開いたまま
      expect(headings()).toEqual(["Drinks", "Latte", "Tea", "Gift cards"]);
    });

    it("follows expandedValues when the parent changes it", () => {
      const { rerender } = render(
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} expandedValues={["drinks"]} />,
      );
      rerender(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} expandedValues={[]} />);
      expect(headings()).toEqual(["Drinks", "Gift cards"]);
    });

    it("reports the added key when a collapsed group is expanded", () => {
      const onExpandedChange = vi.fn();
      render(
        <PivotTable
          rows={ROWS}
          columns={COLUMNS}
          getValue={getValue}
          defaultExpandedValues={[]}
          onExpandedChange={onExpandedChange}
        />,
      );
      fireEvent.click(toggleOf("Drinks"));
      expect(onExpandedChange).toHaveBeenCalledWith(["drinks"]);
    });

    it("has no buttons when the row axis is flat", () => {
      render(<PivotTable rows={[{ key: "a", label: "A" }]} columns={COLUMNS} getValue={getValue} />);
      expect(screen.queryByRole("button")).toBeNull();
    });
  });

  describe("sideways scrolling", () => {
    const withWidths = (scrollWidth: number, clientWidth: number, run: () => void) =>
      withLayout({ scrollWidth, clientWidth }, run);
    const scrollerOf = (container: HTMLElement) => container.querySelector("table")!.parentElement!;

    it("adds no tab stop while the table fits", () => {
      withWidths(300, 300, () => {
        const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} caption="Units sold" />);
        expect(scrollerOf(container)).not.toHaveAttribute("tabindex");
        expect(screen.queryByRole("region")).toBeNull();
      });
    });

    it("makes the scroller reachable by keyboard when the table is wider than it", () => {
      withWidths(800, 300, () => {
        const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
        expect(scrollerOf(container)).toHaveAttribute("tabindex", "0");
      });
    });

    it("names the focusable scroller after the caption", () => {
      withWidths(800, 300, () => {
        render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} caption="Units sold" />);
        expect(screen.getByRole("region", { name: "Units sold" })).toHaveAttribute("tabindex", "0");
      });
    });

    it("names the focusable scroller after aria-label when there is no caption", () => {
      withWidths(800, 300, () => {
        render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} aria-label="Sales" />);
        expect(screen.getByRole("region", { name: "Sales" })).toBeInTheDocument();
      });
    });

    it("does not announce a nameless region", () => {
      withWidths(800, 300, () => {
        const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
        expect(scrollerOf(container)).not.toHaveAttribute("role");
      });
    });
  });

  it("restores the layout stubs after each use", () => {
    withLayout({ scrollWidth: 800, clientWidth: 300 }, () => {});
    expect(document.createElement("div").scrollWidth).toBe(0);
    expect(Object.getOwnPropertyDescriptor(HTMLElement.prototype, "scrollWidth")).toBeUndefined();
  });

  describe("pinned headings", () => {
    const scrollerOf = (container: HTMLElement) => container.querySelector("table")!.parentElement!;
    const pinnedLeft = (el: Element) => el.className.split(" ").includes("stickyLeft");
    const pinnedTop = (el: Element) => el.className.split(" ").includes("stickyTop");

    it("limits the height of the scroller, reading a number as px", () => {
      const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} maxHeight={320} />);
      expect(scrollerOf(container)).toHaveStyle({ maxHeight: "320px" });
    });

    it("does not limit the height by default", () => {
      const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      expect(scrollerOf(container).style.maxHeight).toBe("");
    });

    it("becomes a tab stop when it overflows vertically", () => {
      withLayout({ scrollHeight: 500, clientHeight: 320, scrollWidth: 300, clientWidth: 300 }, () => {
        const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} maxHeight={320} />);
        expect(scrollerOf(container)).toHaveAttribute("tabindex", "0");
      });
    });

    it("leaves the headings unpinned by default", () => {
      const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} rowAxisLabel="Product" />);
      container.querySelectorAll("th").forEach((th) => {
        expect(pinnedTop(th)).toBe(false);
        expect(pinnedLeft(th)).toBe(false);
        expect(th.style.top).toBe("");
      });
    });

    it("stacks the heading levels: each level sits below the measured rows above it", () => {
      withLayout({ rowHeight: 38.39 }, () => {
        render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} rowAxisLabel="Product" stickyHeader />);
        const q1 = screen.getByRole("columnheader", { name: "Q1" });
        const jan = screen.getByRole("columnheader", { name: "Jan" });
        expect(pinnedTop(q1)).toBe(true);
        expect(q1.style.top).toBe("0px");
        // 上の段の高さ（端数は切り捨て）
        expect(jan.style.top).toBe("38px");
      });
    });

    it("puts upper heading levels in front of lower ones and the corner in front of all", () => {
      withLayout({ rowHeight: 40 }, () => {
        render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} rowAxisLabel="Product" stickyHeader />);
        const z = (name: string) => Number(screen.getByRole("columnheader", { name }).style.zIndex);
        expect(z("Q1")).toBeGreaterThan(z("Jan"));
        expect(z("Product")).toBeGreaterThan(z("Q1"));
      });
    });

    it("pins the empty corner cell too", () => {
      withLayout({ rowHeight: 40 }, () => {
        const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} stickyHeader />);
        const corner = container.querySelector("thead td")!;
        expect(pinnedTop(corner)).toBe(true);
      });
    });

    it("pins the row headings, the corner and the total heading with stickyRowHeaders", () => {
      const { container } = render(
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} rowAxisLabel="Product" totalRow stickyRowHeaders />,
      );
      screen.getAllByRole("rowheader").forEach((th) => expect(pinnedLeft(th)).toBe(true));
      expect(pinnedLeft(screen.getByRole("columnheader", { name: "Product" }))).toBe(true);
      expect(pinnedLeft(container.querySelector("tfoot th")!)).toBe(true);
      // 列見出しは横には固定しない
      expect(pinnedLeft(screen.getByRole("columnheader", { name: "Jan" }))).toBe(false);
    });

    it("hands the line of the first value column over to the pinned column", () => {
      const hasGroupLine = (text: string) => screen.getByText(text).className.split(" ").includes("groupStart");
      const { unmount } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      expect(hasGroupLine("latte/jan")).toBe(true);
      expect(hasGroupLine("latte/apr")).toBe(true);
      unmount();
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} stickyRowHeaders />);
      expect(hasGroupLine("latte/jan")).toBe(false);
      // 2 つ目のグループの線はそのまま
      expect(hasGroupLine("latte/apr")).toBe(true);
    });

    it("hands over the line in the heading rows too: the first heading of every level", () => {
      const hasGroupLine = (name: string) =>
        screen.getByRole("columnheader", { name }).className.split(" ").includes("groupStart");
      const { unmount } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      expect(hasGroupLine("Q1")).toBe(true);
      expect(hasGroupLine("Jan")).toBe(true);
      unmount();
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} stickyRowHeaders />);
      expect(hasGroupLine("Q1")).toBe(false);
      expect(hasGroupLine("Jan")).toBe(false);
      expect(hasGroupLine("Q2")).toBe(true);
      expect(hasGroupLine("Apr")).toBe(true);
    });

    it("stops pinning the row headings while they take more than half of the visible width", () => {
      withLayout({ offsetWidth: 323, clientWidth: 358 }, () => {
        render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} stickyRowHeaders />);
        screen.getAllByRole("rowheader").forEach((th) => expect(pinnedLeft(th)).toBe(false));
        // 固定をやめたら、先頭の列の線は元へ戻る
        expect(screen.getByText("latte/jan").className.split(" ")).toContain("groupStart");
      });
    });

    it("keeps pinning the row headings while they take half of the visible width or less", () => {
      withLayout({ offsetWidth: 300, clientWidth: 600 }, () => {
        render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} stickyRowHeaders />);
        screen.getAllByRole("rowheader").forEach((th) => expect(pinnedLeft(th)).toBe(true));
      });
    });
  });

  it("renders the headings when the row axis is empty", () => {
    render(<PivotTable rows={[]} columns={COLUMNS} getValue={getValue} />);
    expect(screen.getByRole("columnheader", { name: "Jan" })).toBeInTheDocument();
    expect(screen.queryAllByRole("rowheader")).toHaveLength(0);
  });
});
