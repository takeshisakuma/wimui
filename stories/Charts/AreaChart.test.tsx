import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AreaChart } from "./AreaChart";

// Mock ResponsiveContainer and other Recharts components
vi.mock("recharts", async () => {
    const original = await vi.importActual("recharts") as any;
    return {
        ...original,
        ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 600 }}>{children}</div>,
    };
});

describe("AreaChart", () => {
    const data = [
        { name: "Mon", visitors: 4000 },
        { name: "Tue", visitors: 3000 },
    ];
    const keys = ["visitors"];
    const xAxisKey = "name";

    it("renders title if provided", () => {
        render(<AreaChart data={data} keys={keys} xAxisKey={xAxisKey} title="Traffic" />);
        expect(screen.getByText("Traffic")).toBeInTheDocument();
    });

    it("renders without crashing", () => {
        const { container } = render(<AreaChart data={data} keys={keys} xAxisKey={xAxisKey} />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
