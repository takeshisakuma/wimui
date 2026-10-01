import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
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

  describe("sideways scrolling", () => {
    // jsdom は配置をしないので、器と中身の幅を差し替えて「はみ出している / 収まっている」を作る
    const withWidths = (scrollWidth: number, clientWidth: number, run: () => void) => {
      const original = {
        scroll: Object.getOwnPropertyDescriptor(HTMLElement.prototype, "scrollWidth"),
        client: Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth"),
      };
      Object.defineProperty(HTMLElement.prototype, "scrollWidth", { configurable: true, get: () => scrollWidth });
      Object.defineProperty(HTMLElement.prototype, "clientWidth", { configurable: true, get: () => clientWidth });
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
        if (original.scroll) Object.defineProperty(HTMLElement.prototype, "scrollWidth", original.scroll);
        if (original.client) Object.defineProperty(HTMLElement.prototype, "clientWidth", original.client);
      }
    };
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

  it("renders the headings when the row axis is empty", () => {
    render(<PivotTable rows={[]} columns={COLUMNS} getValue={getValue} />);
    expect(screen.getByRole("columnheader", { name: "Jan" })).toBeInTheDocument();
    expect(screen.queryAllByRole("rowheader")).toHaveLength(0);
  });
});
