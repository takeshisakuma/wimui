import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RadarChart } from "./RadarChart";
import React from "react";

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

describe("RadarChart", () => {
  const data = [{ subject: "Math", A: 120, fullMark: 150 }];
  const keys = ["A"];
  const indexKey = "subject";

  it("renders title if provided", () => {
    render(
      <RadarChart
        data={data}
        keys={keys}
        indexKey={indexKey}
        title="Test Radar"
      />,
    );
    expect(screen.getByText("Test Radar")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <RadarChart data={data} keys={keys} indexKey={indexKey} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
