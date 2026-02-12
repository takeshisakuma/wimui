import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PieChart } from "./PieChart";

// Mock ResponsiveContainer and other Recharts components
vi.mock("recharts", async () => {
    const original = await vi.importActual("recharts") as any;
    return {
        ...original,
        ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 600 }}>{children}</div>,
    };
});

describe("PieChart", () => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
    ];

    it("renders title if provided", () => {
        render(<PieChart data={data} title="Distribution" />);
        expect(screen.getByText("Distribution")).toBeInTheDocument();
    });

    it("renders without crashing", () => {
        const { container } = render(<PieChart data={data} />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
