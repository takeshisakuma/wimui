import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Heatmap } from "./Heatmap";

// Mock ResponsiveContainer and other Recharts components
vi.mock("recharts", async () => {
    const original = await vi.importActual("recharts") as any;
    return {
        ...original,
        ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 600 }}>{children}</div>,
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
        render(<Heatmap data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} title="Activity Map" />);
        expect(screen.getByText("Activity Map")).toBeInTheDocument();
    });

    it("renders without crashing", () => {
        const { container } = render(<Heatmap data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
