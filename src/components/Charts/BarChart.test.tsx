import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BarChart } from "./BarChart";

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

describe("BarChart", () => {
  const data = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
  ];
  const keys = ["sales"];
  const xAxisKey = "name";

  it("renders title if provided", () => {
    render(
      <BarChart
        data={data}
        keys={keys}
        xAxisKey={xAxisKey}
        title="Weekly Sales"
      />,
    );
    expect(screen.getByText("Weekly Sales")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <BarChart data={data} keys={keys} xAxisKey={xAxisKey} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
