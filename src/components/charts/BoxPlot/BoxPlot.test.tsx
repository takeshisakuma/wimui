import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BoxPlot } from "./BoxPlot";

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

const GROUPS = [
  { name: "/search", min: 41, q1: 78, median: 112, q3: 189, max: 402 },
  { name: "/profile", min: 28, q1: 39, median: 47, q3: 58, max: 91 },
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

describe("BoxPlot", () => {
  it("renders the title and names the figure", () => {
    render(<BoxPlot data={GROUPS} title="Latency" />);
    expect(screen.getByText("Latency")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toHaveAccessibleName("Latency");
  });

  it("has no figure role when it has no name", () => {
    render(<BoxPlot data={GROUPS} />);
    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
  });

  // T230: 図は箱とヒゲの位置でしか語らないので、5 つの数を表にそのまま出す。
  it("publishes all five numbers for each group", () => {
    render(<BoxPlot data={GROUPS} title="Latency" />);
    expect(dataRows()).toEqual([
      ["/search", "41", "78", "112", "189", "402"],
      ["/profile", "28", "39", "47", "58", "91"],
    ]);
  });

  it("labels the columns of the summary", () => {
    render(<BoxPlot data={GROUPS} title="Latency" />);
    const head = within(screen.getByRole("table")).getAllByRole("columnheader");
    expect(head.map((cell) => cell.textContent)).toEqual([
      "Group",
      "Min",
      "Q1",
      "Median",
      "Q3",
      "Max",
    ]);
  });

  it("names the data table after the chart", () => {
    render(<BoxPlot data={GROUPS} aria-label="Response time" />);
    expect(screen.getByRole("table")).toHaveAccessibleName("Response time");
  });

  it("draws nothing but stays standing for an empty group list", () => {
    const { container } = render(<BoxPlot data={[]} title="Latency" />);
    expect(container.firstChild).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  it("applies width and height", () => {
    const { container } = render(<BoxPlot data={GROUPS} width={500} height={120} />);
    expect(container.firstChild).toHaveStyle({ width: "500px" });
    expect(container.querySelector("[aria-hidden='true']")).toHaveStyle({
      height: "120px",
    });
  });
});
