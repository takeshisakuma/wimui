import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { GaugeChart } from "./GaugeChart";
import React from "react";

// Mock ResponsiveContainer and other Recharts components
vi.mock("recharts", async () => {
    const original = await vi.importActual("recharts") as any;
    return {
        ...original,
        ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 600 }}>{children}</div>,
    };
});

describe("GaugeChart", () => {
    it("renders title if provided", () => {
        render(<GaugeChart value={75} title="Test Gauge" />);
        expect(screen.getByText("Test Gauge")).toBeInTheDocument();
    });

    it("renders label if provided", () => {
        render(<GaugeChart value={75} label="HIGH" />);
        expect(screen.getByText("HIGH")).toBeInTheDocument();
    });

    it("defaults to showing value if no label provided", () => {
        render(<GaugeChart value={75} />);
        expect(screen.getByText("75")).toBeInTheDocument();
    });

    it("renders without crashing", () => {
        const { container } = render(<GaugeChart value={75} />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
