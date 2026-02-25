import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LineChart } from "./LineChart";

// Mock ResponsiveContainer and other Recharts components
vi.mock("recharts", async () => {
  const original = (await vi.importActual("recharts")) as any;
  return {
    ...original,
    ResponsiveContainer: ({ children }: any) => (
      <div style={{ width: 800, height: 600 }}>{children}</div>
    ),
  };
});

describe("LineChart", () => {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  ];
  const keys = ["uv", "pv"];
  const xAxisKey = "name";

  it("renders title if provided", () => {
    render(
      <LineChart
        data={data}
        keys={keys}
        xAxisKey={xAxisKey}
        title="Test Title"
      />,
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <LineChart data={data} keys={keys} xAxisKey={xAxisKey} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
