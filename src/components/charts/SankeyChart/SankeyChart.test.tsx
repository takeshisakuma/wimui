import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { SankeyChart } from "./SankeyChart";
import { resetSankeyWarnings } from "./warn-unknown-node";

// recharts の ResponsiveContainer は親の実寸を要る。jsdom は測れないので枠だけ置く。
vi.mock("recharts", async () => {
  const original = await vi.importActual<typeof import("recharts")>("recharts");
  return {
    ...original,
    ResponsiveContainer: ({ children }: React.PropsWithChildren<object>) => (
      <div style={{ width: 800, height: 400 }}>{children}</div>
    ),
  };
});

const NODES = ["Search", "Direct", "Pricing page", "Signed up"];
const LINKS = [
  { source: "Search", target: "Pricing page", value: 2840 },
  { source: "Direct", target: "Pricing page", value: 910 },
  { source: "Pricing page", target: "Signed up", value: 1490 },
];

/** 併記される表（`ChartDataTable`）の行。図そのものは jsdom では描かれない。 */
const dataRows = () => within(screen.getByRole("table")).getAllByRole("row").slice(1);

describe("SankeyChart", () => {
  beforeEach(() => {
    resetSankeyWarnings();
  });

  it("renders the title", () => {
    render(<SankeyChart nodes={NODES} links={LINKS} title="Traffic" />);
    expect(screen.getByText("Traffic")).toBeInTheDocument();
  });

  it("names the figure with the title, and with aria-label when given", () => {
    const { unmount } = render(
      <SankeyChart nodes={NODES} links={LINKS} title="Traffic" />,
    );
    expect(screen.getByRole("figure")).toHaveAccessibleName("Traffic");
    unmount();

    render(<SankeyChart nodes={NODES} links={LINKS} aria-label="Where it goes" />);
    expect(screen.getByRole("figure")).toHaveAccessibleName("Where it goes");
  });

  it("has no figure role when it has no name", () => {
    render(<SankeyChart nodes={NODES} links={LINKS} />);
    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
  });

  // T230: 描画は支援技術から隠し、同じ値を表で渡す。1 行が 1 本の流れ。
  it("publishes one table row per flow", () => {
    render(<SankeyChart nodes={NODES} links={LINKS} title="Traffic" />);
    const rows = dataRows();
    expect(rows).toHaveLength(LINKS.length);
    expect(within(rows[0]).getByRole("rowheader")).toHaveTextContent("Search");
    expect(
      within(rows[0])
        .getAllByRole("cell")
        .map((cell) => cell.textContent),
    ).toEqual(["Pricing page", "2840"]);
  });

  it("names the data table after the chart", () => {
    render(<SankeyChart nodes={NODES} links={LINKS} title="Traffic" />);
    expect(screen.getByRole("table")).toHaveAccessibleName("Traffic");
  });

  it("hides the drawing from assistive tech", () => {
    const { container } = render(
      <SankeyChart nodes={NODES} links={LINKS} title="Traffic" />,
    );
    expect(container.querySelector("[aria-hidden='true']")).toBeInTheDocument();
  });

  it("applies width and height", () => {
    const { container } = render(
      <SankeyChart nodes={NODES} links={LINKS} width={500} height={120} />,
    );
    expect(container.firstChild).toHaveStyle({ width: "500px" });
    expect(container.querySelector("[aria-hidden='true']")).toHaveStyle({
      height: "120px",
    });
  });

  describe("the same node name twice in nodes", () => {
    let warn: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    });
    afterEach(() => {
      warn.mockRestore();
    });

    // 重複したノードには 1 本も流れが届かない。画面には出ないので警告で出す。
    it("is reported once, by name", () => {
      render(
        <SankeyChart
          nodes={[...NODES, "Search"]}
          links={LINKS}
          title="Traffic"
        />,
      );
      expect(warn).toHaveBeenCalledTimes(1);
      expect(String(warn.mock.calls[0][0])).toContain('"Search"');
    });

    it("still draws every flow, resolved to the first copy", () => {
      render(
        <SankeyChart
          nodes={[...NODES, "Search"]}
          links={LINKS}
          title="Traffic"
        />,
      );
      expect(dataRows()).toHaveLength(LINKS.length);
    });
  });
  describe("a link naming a node that is not in nodes", () => {
    let warn: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    });
    afterEach(() => {
      warn.mockRestore();
    });

    it("is dropped from the chart and from the table", () => {
      render(
        <SankeyChart
          nodes={NODES}
          links={[...LINKS, { source: "Search", target: "Typo", value: 5 }]}
          title="Traffic"
        />,
      );
      expect(dataRows()).toHaveLength(LINKS.length);
    });

    it("is reported once, by name, with the names it could have been", () => {
      render(
        <SankeyChart
          nodes={NODES}
          links={[
            { source: "Search", target: "Typo", value: 5 },
            { source: "Typo", target: "Direct", value: 7 },
          ]}
          title="Traffic"
        />,
      );
      expect(warn).toHaveBeenCalledTimes(1);
      const message = String(warn.mock.calls[0][0]);
      expect(message).toContain('"Typo"');
      expect(message).toContain('"Search"');
    });
  });
});
