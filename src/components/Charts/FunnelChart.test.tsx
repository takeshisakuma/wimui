import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FunnelChart } from "./FunnelChart";
import React from "react";

// Mock ResponsiveContainer and other Recharts components
vi.mock("recharts", async () => {
    const original = await vi.importActual("recharts") as any;
    return {
        ...original,
        ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 600 }}>{children}</div>,
    };
});

describe("FunnelChart", () => {
    const data = [{ value: 100, name: 'Impressions' }];

    it("renders title if provided", () => {
        render(<FunnelChart data={data} dataKey="value" nameKey="name" title="Test Funnel" />);
        expect(screen.getByText("Test Funnel")).toBeInTheDocument();
    });

    it("renders without crashing", () => {
        const { container } = render(<FunnelChart data={data} dataKey="value" nameKey="name" />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
