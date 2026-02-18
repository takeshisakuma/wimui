import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Treemap } from "./Treemap";
import React from "react";

// Mock ResponsiveContainer and other Recharts components
vi.mock("recharts", async () => {
    const original = await vi.importActual("recharts") as any;
    return {
        ...original,
        ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 600 }}>{children}</div>,
    };
});

describe("Treemap", () => {
    const data = [{ name: 'Category A', value: 400 }];

    it("renders title if provided", () => {
        render(<Treemap data={data} dataKey="value" title="Test Treemap" />);
        expect(screen.getByText("Test Treemap")).toBeInTheDocument();
    });

    it("renders without crashing", () => {
        const { container } = render(<Treemap data={data} dataKey="value" />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
