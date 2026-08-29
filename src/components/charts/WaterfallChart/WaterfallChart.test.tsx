import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { WaterfallChart } from "./WaterfallChart";

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

const STEPS = [
  { name: "Revenue", value: 1000 },
  { name: "Costs", value: -400 },
  { name: "Tax", value: -100 },
  { name: "Profit", value: 0, total: true },
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

describe("WaterfallChart", () => {
  it("renders the title and names the figure", () => {
    render(<WaterfallChart data={STEPS} title="Quarterly profit" />);
    expect(screen.getByText("Quarterly profit")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toHaveAccessibleName("Quarterly profit");
  });

  it("has no figure role when it has no name", () => {
    render(<WaterfallChart data={STEPS} />);
    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
  });

  // T230: 描画は支援技術から隠し、同じ値を表で渡す。
  it("publishes the change and the running total for each step", () => {
    render(<WaterfallChart data={STEPS} title="Quarterly profit" />);
    expect(dataRows()).toEqual([
      ["Revenue", "+1000", "1000"],
      ["Costs", "-400", "600"],
      ["Tax", "-100", "500"],
      ["Profit", "500", "500"],
    ]);
  });

  // **`total` の段で running total を作り直さない。** 足し直すと開始総額を
  // `total` として渡した図で 1 段ぶん二重に足される。
  it("does not add a total step into the running total", () => {
    render(
      <WaterfallChart
        data={[
          { name: "Opening", value: 128 },
          { name: "Subtotal", value: 0, total: true },
          { name: "Hired", value: 2 },
          { name: "Closing", value: 0, total: true },
        ]}
        title="Headcount"
      />,
    );
    expect(dataRows().map((row) => row[2])).toEqual(["128", "128", "130", "130"]);
  });

  // 符号は色を読まなくても向きが分かるようにするためのもの（グレースケール）。
  it("signs the changes but not the totals", () => {
    render(<WaterfallChart data={STEPS} title="Quarterly profit" />);
    const changes = dataRows().map((row) => row[1]);
    expect(changes).toEqual(["+1000", "-400", "-100", "500"]);
  });

  it("carries the running total below zero and back", () => {
    render(
      <WaterfallChart
        data={[
          { name: "Opening", value: 240 },
          { name: "Refunds", value: -410 },
          { name: "Top-up", value: 120 },
          { name: "Closing", value: 0, total: true },
        ]}
        title="Cash"
      />,
    );
    expect(dataRows().map((row) => row[2])).toEqual(["240", "-170", "-50", "-50"]);
  });

  // 欠測を 0 と読み替えるのは黙った主張になるが、running total は進めない
  // ことでしか表現できないので、値としては 0 段として扱う。
  it("treats a missing value as no movement rather than crashing", () => {
    render(
      <WaterfallChart
        data={[
          { name: "Opening", value: 10 },
          { name: "Unknown", value: undefined as unknown as number },
        ]}
        title="Odd"
      />,
    );
    expect(dataRows().map((row) => row[2])).toEqual(["10", "10"]);
  });

  it("applies width and height", () => {
    const { container } = render(
      <WaterfallChart data={STEPS} width={500} height={120} />,
    );
    expect(container.firstChild).toHaveStyle({ width: "500px" });
    expect(container.querySelector("[aria-hidden='true']")).toHaveStyle({
      height: "120px",
    });
  });
});
