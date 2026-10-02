import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, within, fireEvent, act } from "@testing-library/react";
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
  /** 本文（`tbody`）の上端の位置。スクロールすると上へ動く（実物と同じ）。 */
  bodyTop?: () => number;
  /** 見出しのセルの幅。列幅を測る処理に返す。 */
  cellWidth?: (cell: HTMLElement) => number;
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
  const originalSectionRect = HTMLTableSectionElement.prototype.getBoundingClientRect;
  if (layout.bodyTop) {
    const bodyTop = layout.bodyTop;
    HTMLTableSectionElement.prototype.getBoundingClientRect = () => ({ top: bodyTop() }) as DOMRect;
  }
  const originalCellRect = HTMLTableCellElement.prototype.getBoundingClientRect;
  if (layout.cellWidth) {
    const cellWidth = layout.cellWidth;
    HTMLTableCellElement.prototype.getBoundingClientRect = function (this: HTMLTableCellElement) {
      return { width: cellWidth(this) } as DOMRect;
    };
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
    HTMLTableSectionElement.prototype.getBoundingClientRect = originalSectionRect;
    HTMLTableCellElement.prototype.getBoundingClientRect = originalCellRect;
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
      const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      expect(within(container.querySelector("tbody")!).getAllByRole("button")).toHaveLength(1);
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
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} defaultExpandedRowValues={[]} />);
      expect(headersOf(screen.getByText("gift/apr"))).toEqual(["Gift cards", "Q2", "Apr"]);
    });

    it("starts from defaultExpandedRowValues", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} defaultExpandedRowValues={[]} />);
      expect(headings()).toEqual(["Drinks", "Gift cards"]);
    });

    it("reports the new list without changing anything when controlled", () => {
      const onExpandedRowChange = vi.fn();
      render(
        <PivotTable
          rows={ROWS}
          columns={COLUMNS}
          getValue={getValue}
          expandedRowValues={["drinks"]}
          onExpandedRowChange={onExpandedRowChange}
        />,
      );
      fireEvent.click(toggleOf("Drinks"));
      expect(onExpandedRowChange).toHaveBeenCalledWith([]);
      // 親が値を変えるまでは開いたまま
      expect(headings()).toEqual(["Drinks", "Latte", "Tea", "Gift cards"]);
    });

    it("follows expandedRowValues when the parent changes it", () => {
      const { rerender } = render(
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} expandedRowValues={["drinks"]} />,
      );
      rerender(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} expandedRowValues={[]} />);
      expect(headings()).toEqual(["Drinks", "Gift cards"]);
    });

    it("reports the added key when a collapsed group is expanded", () => {
      const onExpandedRowChange = vi.fn();
      render(
        <PivotTable
          rows={ROWS}
          columns={COLUMNS}
          getValue={getValue}
          defaultExpandedRowValues={[]}
          onExpandedRowChange={onExpandedRowChange}
        />,
      );
      fireEvent.click(toggleOf("Drinks"));
      expect(onExpandedRowChange).toHaveBeenCalledWith(["drinks"]);
    });

    it("has no row buttons when the row axis is flat", () => {
      const { container } = render(<PivotTable rows={[{ key: "a", label: "A" }]} columns={COLUMNS} getValue={getValue} />);
      expect(within(container.querySelector("tbody")!).queryByRole("button")).toBeNull();
    });
  });

  describe("collapsing column groups", () => {
    const NESTED: PivotTableAxisNode[] = [
      { key: "station", label: "Station", children: COLUMNS },
      { key: "other", label: "Other" },
    ];
    const columnNames = () => screen.getAllByRole("columnheader").map((h) => h.textContent);
    const toggleOf = (name: string) => screen.getByRole("button", { name });
    const colgroupSpans = (container: HTMLElement) =>
      Array.from(container.querySelectorAll("colgroup")).map((g) => g.getAttribute("span"));

    it("expands every group by default and gives a button to every column group", () => {
      const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      const buttons = within(container.querySelector("thead")!).getAllByRole("button");
      expect(buttons.map((b) => b.textContent)).toEqual(["Q1", "Q2"]);
      buttons.forEach((b) => expect(b).toHaveAttribute("aria-expanded", "true"));
      expect(within(screen.getByRole("columnheader", { name: "Jan" })).queryByRole("button")).toBeNull();
    });

    it("collapses a group to one column that asks for the group's key, and expands it again", () => {
      const { container } = render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      fireEvent.click(toggleOf("Q1"));
      expect(columnNames()).toEqual(["Q1", "Q2", "Apr"]);
      expect(toggleOf("Q1")).toHaveAttribute("aria-expanded", "false");
      // 配下の列は消え、グループの値の列が 1 本残る
      expect(screen.queryByText("latte/jan")).toBeNull();
      expect(screen.getByText("latte/q1")).toBeInTheDocument();
      expect(colgroupSpans(container)).toEqual([null, "1", "1"]);
      fireEvent.click(toggleOf("Q1"));
      expect(columnNames()).toEqual(["Q1", "Q2", "Jan", "Feb", "Apr"]);
      expect(colgroupSpans(container)).toEqual([null, "2", "1"]);
    });

    it("stretches the collapsed heading down to the last level and keeps it a column group", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} defaultExpandedColumnValues={["q2"]} />);
      const q1 = screen.getByRole("columnheader", { name: "Q1" });
      expect(q1).toHaveAttribute("rowspan", "2");
      expect(q1).not.toHaveAttribute("colspan");
      expect(q1).toHaveAttribute("scope", "colgroup");
    });

    it("lists only the group in the headers of its collapsed column", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} defaultExpandedColumnValues={["q2"]} />);
      expect(headersOf(screen.getByText("tea/q1"))).toEqual(["Drinks", "Tea", "Q1"]);
      // 後ろの列の見出しは、番号が詰まっても正しい見出しを指す
      expect(headersOf(screen.getByText("tea/apr"))).toEqual(["Drinks", "Tea", "Q2", "Apr"]);
    });

    it("shows the same single column whether or not columnSubtotals is set", () => {
      render(
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} columnSubtotals defaultExpandedColumnValues={["q2"]} />,
      );
      // Q1 は 1 列だけ（「Total」の小見出しは持たない）。開いている Q2 は小計の列を持つ
      expect(columnNames()).toEqual(["Q1", "Q2", "Apr", "Total"]);
      expect(headersOf(screen.getByText("latte/q1"))).toEqual(["Drinks", "Latte", "Q1"]);
      expect(headersOf(screen.getByText("latte/q2"))).toEqual(["Drinks", "Latte", "Q2", "Total"]);
    });

    it("drops a heading level when no group is expanded", () => {
      const { container } = render(
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} rowAxisLabel="Product" defaultExpandedColumnValues={[]} />,
      );
      expect(container.querySelectorAll("thead tr")).toHaveLength(1);
      expect(screen.getByRole("columnheader", { name: "Product" })).toHaveAttribute("rowspan", "1");
      expect(columnNames()).toEqual(["Product", "Q1", "Q2"]);
    });

    it("hides the nested groups of a collapsed group and remembers their state", () => {
      render(<PivotTable rows={ROWS} columns={NESTED} getValue={getValue} />);
      fireEvent.click(toggleOf("Q1"));
      fireEvent.click(toggleOf("Station"));
      expect(columnNames()).toEqual(["Station", "Other"]);
      expect(screen.getByText("latte/station")).toBeInTheDocument();
      fireEvent.click(toggleOf("Station"));
      // Q1 は畳んだまま戻る
      expect(toggleOf("Q1")).toHaveAttribute("aria-expanded", "false");
      expect(toggleOf("Q2")).toHaveAttribute("aria-expanded", "true");
    });

    it("keeps the row and the column state apart", () => {
      const onExpandedRowChange = vi.fn();
      const onExpandedColumnChange = vi.fn();
      render(
        <PivotTable
          rows={ROWS}
          columns={COLUMNS}
          getValue={getValue}
          onExpandedRowChange={onExpandedRowChange}
          onExpandedColumnChange={onExpandedColumnChange}
        />,
      );
      fireEvent.click(toggleOf("Q1"));
      expect(onExpandedColumnChange).toHaveBeenCalledWith(["q2"]);
      expect(onExpandedRowChange).not.toHaveBeenCalled();
      fireEvent.click(toggleOf("Drinks"));
      expect(onExpandedRowChange).toHaveBeenCalledWith([]);
      expect(onExpandedColumnChange).toHaveBeenCalledTimes(1);
    });

    it("reports the new list without changing anything when controlled", () => {
      const onExpandedColumnChange = vi.fn();
      const { rerender } = render(
        <PivotTable
          rows={ROWS}
          columns={COLUMNS}
          getValue={getValue}
          expandedColumnValues={["q1", "q2"]}
          onExpandedColumnChange={onExpandedColumnChange}
        />,
      );
      fireEvent.click(toggleOf("Q1"));
      expect(onExpandedColumnChange).toHaveBeenCalledWith(["q2"]);
      // 親が値を変えるまでは開いたまま
      expect(screen.getByRole("columnheader", { name: "Jan" })).toBeInTheDocument();
      rerender(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} expandedColumnValues={["q2"]} />);
      expect(screen.queryByRole("columnheader", { name: "Jan" })).toBeNull();
    });

    it("keeps focus on the button of the group that was collapsed", () => {
      render(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} />);
      const q1 = toggleOf("Q1");
      act(() => q1.focus());
      fireEvent.click(q1);
      expect(document.activeElement).toBe(q1);
      expect(q1).toHaveAttribute("aria-expanded", "false");
    });

    it("keeps focus on a later group's button when an earlier group is collapsed from outside", () => {
      const { rerender } = render(
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} expandedColumnValues={["q1", "q2"]} />,
      );
      const q2 = toggleOf("Q2");
      act(() => q2.focus());
      rerender(<PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} expandedColumnValues={["q2"]} />);
      // Q1 を畳むと Q2 の見出しの番号は変わるが、要素は同じまま
      expect(q2).toBeInTheDocument();
      expect(document.activeElement).toBe(q2);
    });

    it("has no column buttons when the column axis is flat", () => {
      const { container } = render(<PivotTable rows={ROWS} columns={[{ key: "a", label: "A" }]} getValue={getValue} />);
      expect(within(container.querySelector("thead")!).queryByRole("button")).toBeNull();
    });

    it("keeps the grand total row and column after a collapse", () => {
      render(
        <PivotTable rows={ROWS} columns={COLUMNS} getValue={getValue} totalRow totalColumn defaultExpandedColumnValues={[]} />,
      );
      expect(screen.getByText("ALL/q1")).toBeInTheDocument();
      expect(headersOf(screen.getByText("latte/ALL"))).toEqual(["Drinks", "Latte", "Total"]);
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

  describe("virtualized rows", () => {
    // 3 グループ × 40 行（グループの行を入れて 123 行）
    const MANY: PivotTableAxisNode[] = ["a", "b", "c"].map((group) => ({
      key: group,
      label: `Group ${group}`,
      children: Array.from({ length: 40 }, (_, i) => ({ key: `${group}${i}`, label: `Row ${group}${i}` })),
    }));
    const scrollerOf = (container: HTMLElement) => container.querySelector("table")!.parentElement!;
    const renderedIndices = (container: HTMLElement) =>
      Array.from(container.querySelectorAll<HTMLElement>("tbody tr[data-row-index]")).map((tr) => Number(tr.dataset.rowIndex));
    const gapsOf = (container: HTMLElement) =>
      Array.from(container.querySelectorAll<HTMLElement>('tbody tr[aria-hidden="true"] td')).map((td) => td.style.height);

    // 行 40px・見えている高さ 320px（8 行）。本文の上端はスクロールした分だけ上へ動く
    const inViewport = (run: (scrollTo: (container: HTMLElement, top: number) => void) => void, extra: Layout = {}) => {
      let scrollTop = 0;
      withLayout({ rowHeight: 40, clientHeight: 320, bodyTop: () => -scrollTop, ...extra }, () => {
        run((container, top) => {
          scrollTop = top;
          const scroller = scrollerOf(container);
          scroller.scrollTop = top;
          fireEvent.scroll(scroller);
        });
      });
    };

    it("renders every row and adds no row bookkeeping when it is off", () => {
      const { container } = render(<PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} />);
      expect(container.querySelectorAll("tbody tr")).toHaveLength(123);
      expect(container.querySelector("table")).not.toHaveAttribute("aria-rowcount");
      expect(container.querySelector("tbody tr")).not.toHaveAttribute("aria-rowindex");
      expect(container.querySelector('tbody tr[aria-hidden="true"]')).toBeNull();
      expect(container.querySelector<HTMLElement>("thead th")!.style.minWidth).toBe("");
    });

    it("renders only the rows in view plus the overscan, and one spacer for the rest", () => {
      inViewport(() => {
        const { container } = render(
          <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized />,
        );
        // 見えている 8 行 ＋ 下の余分 8 行
        expect(renderedIndices(container)).toEqual(Array.from({ length: 16 }, (_, i) => i));
        expect(gapsOf(container)).toEqual([`${(123 - 16) * 40}px`]);
      });
    });

    it("moves the window when the scroller scrolls, keeping the total height", () => {
      inViewport((scrollTo) => {
        const { container } = render(
          <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized />,
        );
        scrollTo(container, 2000);
        const indices = renderedIndices(container);
        // 50 行目から見える。上下に 8 行ずつ余分
        expect(indices[0]).toBe(42);
        expect(indices[indices.length - 1]).toBe(65);
        const gaps = gapsOf(container).map((h) => parseFloat(h));
        expect(gaps).toEqual([42 * 40, (123 - 66) * 40]);
        expect(gaps[0] + gaps[1] + indices.length * 40).toBe(123 * 40);
      });
    });

    it("sizes the spacer by the measured row height, not by the estimate", () => {
      withLayout({ rowHeight: 50, clientHeight: 300, bodyTop: () => 0 }, () => {
        const { container } = render(
          <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={300} virtualized />,
        );
        // 300 / 50 = 6 行 ＋ 余分 8 行
        expect(renderedIndices(container)).toHaveLength(14);
        expect(gapsOf(container)).toEqual([`${(123 - 14) * 50}px`]);
      });
    });

    it("counts the rows that are not rendered: aria-rowcount and aria-rowindex", () => {
      inViewport((scrollTo) => {
        const { container } = render(
          <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized totalRow />,
        );
        // 見出し 2 段 ＋ 123 行 ＋ 総計
        expect(container.querySelector("table")).toHaveAttribute("aria-rowcount", "126");
        expect(Array.from(container.querySelectorAll("thead tr")).map((tr) => tr.getAttribute("aria-rowindex"))).toEqual(["1", "2"]);
        scrollTo(container, 2000);
        expect(container.querySelector("tbody tr[data-row-index]")).toHaveAttribute("aria-rowindex", "45");
        expect(container.querySelector("tfoot tr")).toHaveAttribute("aria-rowindex", "126");
      });
    });

    it("never points headers at a heading that is not rendered", () => {
      inViewport((scrollTo) => {
        const { container } = render(
          <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized rowAxisLabel="Product" />,
        );
        scrollTo(container, 2000);
        const refs = Array.from(container.querySelectorAll("[headers]")).flatMap((cell) =>
          cell.getAttribute("headers")!.split(" ").filter(Boolean),
        );
        expect(refs.length).toBeGreaterThan(50);
        refs.forEach((id) => expect(document.getElementById(id)).not.toBeNull());
        // グループ b の行（42 行目〜）: 祖先（41 行目の「Group b」）は描かれていない
        expect(headersOf(screen.getByText("b5/feb"))).toEqual(["Group b, Row b5", "Q1", "Feb"]);
      });
    });

    it("carries the names of the ancestors inside the row heading instead", () => {
      inViewport(() => {
        render(<PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized />);
        // 名前の計算は、隠した要素の末尾の空白を落とす。区切りの読点が入っていることを見る
        expect(screen.getByRole("rowheader", { name: /^Group a,\s*Row a0$/ })).toBeInTheDocument();
        // グループの行は祖先を持たないので、名前はそのまま。ボタンの名前にも祖先は混ざらない
        expect(screen.getByRole("rowheader", { name: "Group a" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Group a" })).toBeInTheDocument();
      });
    });

    it("keeps the row that has focus rendered after it scrolls out of the window", () => {
      inViewport((scrollTo) => {
        const { container } = render(
          <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized />,
        );
        const button = screen.getByRole("button", { name: "Group a" });
        act(() => button.focus());
        scrollTo(container, 2000);
        const indices = renderedIndices(container);
        expect(indices[0]).toBe(0);
        expect(indices[1]).toBe(42);
        expect(button).toBeInTheDocument();
        expect(document.activeElement).toBe(button);
        // 上の空白は 2 つに割れる（0 行目の前は無し・0 行目と窓の間）
        expect(gapsOf(container).map((h) => parseFloat(h))).toEqual([41 * 40, (123 - 66) * 40]);
        // フォーカスが外れたら、もう描かない
        act(() => button.blur());
        expect(renderedIndices(container)[0]).toBe(42);
      });
    });

    it("recomputes the window when a group is collapsed", () => {
      inViewport(() => {
        const { container } = render(
          <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized />,
        );
        fireEvent.click(screen.getByRole("button", { name: "Group a" }));
        // 123 − 40 行。先頭の 16 行を描く: グループ a、グループ b とその配下
        expect(gapsOf(container)).toEqual([`${(83 - 16) * 40}px`]);
        expect(screen.getByRole("rowheader", { name: "Group b" })).toBeInTheDocument();
      });
    });

    it("remembers the widest width of each column and never narrows it", () => {
      let width = 100;
      inViewport(
        (scrollTo) => {
          const { container } = render(
            <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized rowAxisLabel="Product" />,
          );
          const jan = screen.getByRole("columnheader", { name: "Jan" });
          const corner = screen.getByRole("columnheader", { name: "Product" });
          expect(jan.style.minWidth).toBe("100px");
          expect(corner.style.minWidth).toBe("100px");
          // まとめた見出しは列を 1 つに決められないので、幅を持たない
          expect(screen.getByRole("columnheader", { name: "Q1" }).style.minWidth).toBe("");
          width = 80;
          scrollTo(container, 400);
          expect(jan.style.minWidth).toBe("100px");
          width = 131.5;
          scrollTo(container, 800);
          expect(jan.style.minWidth).toBe("131.5px");
        },
        { cellWidth: () => width, clientWidth: 900 },
      );
    });

    it("forgets the remembered widths when the scroller changes width", () => {
      let width = 140;
      let clientWidth = 900;
      let scrollTop = 0;
      const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth");
      withLayout({ rowHeight: 40, clientHeight: 320, bodyTop: () => -scrollTop, cellWidth: () => width }, () => {
        Object.defineProperty(HTMLElement.prototype, "clientWidth", { configurable: true, get: () => clientWidth });
        try {
          const { container } = render(
            <PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized />,
          );
          const jan = screen.getByRole("columnheader", { name: "Jan" });
          expect(jan.style.minWidth).toBe("140px");
          clientWidth = 500;
          width = 90;
          scrollTop = 400;
          const scroller = scrollerOf(container);
          scroller.scrollTop = 400;
          fireEvent.scroll(scroller);
          expect(jan.style.minWidth).toBe("90px");
        } finally {
          if (original) Object.defineProperty(HTMLElement.prototype, "clientWidth", original);
          else delete (HTMLElement.prototype as unknown as Record<string, unknown>).clientWidth;
        }
      });
    });

    it("remembers widths per column, not per position, across a column collapse", () => {
      const widths: Record<string, number> = { Jan: 300, Feb: 100, Apr: 100, Q1: 80 };
      const minWidthOf = (name: string) => screen.getByRole("columnheader", { name }).style.minWidth;
      inViewport(
        () => {
          render(<PivotTable rows={MANY} columns={COLUMNS} getValue={getValue} maxHeight={320} virtualized />);
          expect(minWidthOf("Jan")).toBe("300px");
          fireEvent.click(screen.getByRole("button", { name: "Q1" }));
          // Q1 は Jan のいた位置に来るが、Jan の幅は引き継がない。後ろの列も自分の幅のまま
          expect(minWidthOf("Q1")).toBe("80px");
          expect(minWidthOf("Apr")).toBe("100px");
          // 開き直すと、覚えていた幅に戻る（いま測った幅が狭くても）
          widths.Jan = 90;
          fireEvent.click(screen.getByRole("button", { name: "Q1" }));
          expect(minWidthOf("Jan")).toBe("300px");
          expect(minWidthOf("Feb")).toBe("100px");
        },
        { cellWidth: (cell) => widths[cell.textContent ?? ""] ?? 50, clientWidth: 900 },
      );
    });
  });

  it("renders the headings when the row axis is empty", () => {
    render(<PivotTable rows={[]} columns={COLUMNS} getValue={getValue} />);
    expect(screen.getByRole("columnheader", { name: "Jan" })).toBeInTheDocument();
    expect(screen.queryAllByRole("rowheader")).toHaveLength(0);
  });
});
