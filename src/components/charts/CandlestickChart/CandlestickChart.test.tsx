import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CandlestickChart } from "./CandlestickChart";

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

const WEEK = [
  { name: "Mon", open: 182.4, high: 186.9, low: 181.2, close: 185.7 },
  { name: "Tue", open: 185.7, high: 188.1, low: 184, close: 184.6 },
];

const dataRows = () =>
  within(screen.getByRole("table"))
    .getAllByRole("row")
    .slice(1)
    .map((row) =>
      [
        ...within(row).getAllByRole("rowheader"),
        ...within(row).getAllByRole("cell"),
      ].map((cell) => cell.textContent),
    );

describe("CandlestickChart", () => {
  it("renders the title and names the figure", () => {
    render(<CandlestickChart data={WEEK} title="Share price" />);
    expect(screen.getByText("Share price")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toHaveAccessibleName("Share price");
  });

  it("has no figure role when it has no name", () => {
    render(<CandlestickChart data={WEEK} />);
    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
  });

  // T230: 1 本が 4 つの数を運ぶので、表も 4 つとも出す。列は OHLC の順。
  it("publishes open, high, low and close for each period", () => {
    render(<CandlestickChart data={WEEK} title="Share price" />);
    const head = within(screen.getByRole("table")).getAllByRole("columnheader");
    expect(head.map((cell) => cell.textContent)).toEqual([
      "Period",
      "Open",
      "High",
      "Low",
      "Close",
    ]);
    expect(dataRows()).toEqual([
      ["Mon", "182.4", "186.9", "181.2", "185.7"],
      ["Tue", "185.7", "188.1", "184", "184.6"],
    ]);
  });

  it("keeps the periods in the order they were given", () => {
    render(<CandlestickChart data={[...WEEK].reverse()} title="Share price" />);
    expect(dataRows().map((row) => row[0])).toEqual(["Tue", "Mon"]);
  });

  it("names the data table after the chart", () => {
    render(<CandlestickChart data={WEEK} aria-label="Price this week" />);
    expect(screen.getByRole("table")).toHaveAccessibleName("Price this week");
  });

  it("draws nothing but stays standing for an empty series", () => {
    const { container } = render(<CandlestickChart data={[]} title="Share price" />);
    expect(container.firstChild).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  it("applies width and height", () => {
    const { container } = render(
      <CandlestickChart data={WEEK} width={500} height={120} />,
    );
    expect(container.firstChild).toHaveStyle({ width: "500px" });
    expect(container.querySelector("[aria-hidden='true']")).toHaveStyle({
      height: "120px",
    });
  });
});
