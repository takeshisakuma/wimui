import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ScatterChart } from "./ScatterChart";

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

describe("ScatterChart", () => {
  const data = [
    { x: 100, y: 200, z: 200, name: "Point 1" },
    { x: 120, y: 100, z: 260, name: "Point 2" },
  ];

  it("renders title if provided", () => {
    render(<ScatterChart data={data} title="Analysis" />);
    expect(screen.getByText("Analysis")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { container } = render(<ScatterChart data={data} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
