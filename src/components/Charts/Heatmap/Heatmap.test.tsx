import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Heatmap } from "./Heatmap";

type TooltipContentProps = {
  active?: boolean;
  payload?: Array<{ payload: { labelX: string; labelY: string; value: number } }>;
};

type XAxisProps = {
  tickFormatter?: (val: number) => string;
};

// Mock Recharts components
vi.mock("recharts", async () => {
  const original = await vi.importActual<typeof import("recharts")>("recharts");
  return {
    ...original,
    ResponsiveContainer: ({ children }: React.PropsWithChildren<object>) => (
      <div style={{ width: 800, height: 600 }}>{children}</div>
    ),
    ScatterChart: ({ children }: React.PropsWithChildren<object>) => (
      <div data-testid="scatter-chart">{children}</div>
    ),
    Tooltip: ({ content }: { content: (props: TooltipContentProps) => React.ReactNode }) => {
      const rendered = content({
        active: true,
        payload: [{ payload: { labelX: "A", labelY: "1", value: 42 } }],
      });
      return <div data-testid="tooltip">{rendered}</div>;
    },
    XAxis: ({ tickFormatter }: XAxisProps) => {
      const label = tickFormatter ? tickFormatter(0) : "";
      return <div data-testid="xaxis">{label}</div>;
    },
    YAxis: ({ tickFormatter }: XAxisProps) => {
      const label = tickFormatter ? tickFormatter(0) : "";
      return <div data-testid="yaxis">{label}</div>;
    },
    ZAxis: () => null,
    Scatter: ({ children }: React.PropsWithChildren<object>) => <g>{children}</g>,
    Cell: () => null,
  };
});

describe("Heatmap", () => {
  const data = [
    { x: "A", y: "1", value: 10 },
    { x: "B", y: "2", value: 20 },
  ];
  const xAxisKey = ["A", "B"];
  const yAxisKey = ["1", "2"];

  it("renders title if provided", () => {
    render(
      <Heatmap
        data={data}
        xAxisKey={xAxisKey}
        yAxisKey={yAxisKey}
        title="Activity Map"
      />,
    );
    expect(screen.getByText("Activity Map")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <Heatmap data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders tooltip content with active payload", () => {
    render(
      <Heatmap data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} />,
    );
    expect(screen.getByText("A / 1")).toBeInTheDocument();
    expect(screen.getByText("Value: 42")).toBeInTheDocument();
  });

  it("renders x-axis tick label", () => {
    render(
      <Heatmap data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} />,
    );
    expect(screen.getByTestId("xaxis")).toHaveTextContent("A");
  });

  it("renders y-axis tick label", () => {
    render(
      <Heatmap data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} />,
    );
    expect(screen.getByTestId("yaxis")).toHaveTextContent("1");
  });

  it("renders without title", () => {
    const { container } = render(
      <Heatmap data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} />,
    );
    expect(container.querySelector("h3")).not.toBeInTheDocument();
  });
});
