import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Sparkline } from "./Sparkline";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

// Recharts' ResponsiveContainer needs a non-zero parent size in jsdom.
vi.mock("recharts", async (importOriginal) => {
  const actual = await importOriginal<typeof import("recharts")>();
  return {
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: 100, height: 24 }}>{children}</div>
    ),
  };
});

const DATA = [3, 5, 2, 8, 6, 9, 7];

describe("Sparkline", () => {
  // Recharts needs a real layout engine to emit its SVG, which jsdom lacks, so
  // these tests exercise the wrapper contract rather than the rendered chart.
  it("renders without crashing for each type", () => {
    for (const type of ["line", "area", "bar"] as const) {
      const { container } = render(<Sparkline data={DATA} type={type} />);
      expect(container.firstChild).toBeInTheDocument();
    }
  });

  it("exposes an accessible label when provided", () => {
    const { getByRole } = render(<Sparkline data={DATA} ariaLabel="Weekly trend" />);
    expect(getByRole("img")).toHaveAttribute("aria-label", "Weekly trend");
  });

  it("is hidden from assistive tech without a label", () => {
    const { container } = render(<Sparkline data={DATA} />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("applies the width and height", () => {
    const { container } = render(<Sparkline data={DATA} width={200} height={40} />);
    expect(container.firstChild).toHaveStyle({ width: "200px", height: "40px" });
  });
});
