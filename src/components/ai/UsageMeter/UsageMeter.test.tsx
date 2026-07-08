import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsageMeter, TokenCounter } from "./UsageMeter";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("UsageMeter", () => {
  it("renders the raw count against the max", () => {
    render(<UsageMeter used={1234} max={8000} labels={{ label: "Tokens" }} />);
    expect(screen.getByText("1,234 / 8,000")).toBeInTheDocument();
  });

  it("renders a counter-only display without max", () => {
    render(<UsageMeter used={4200} labels={{ unit: "tokens" }} />);
    expect(screen.getByText("4,200 tokens")).toBeInTheDocument();
  });

  it("shows a percentage when requested", () => {
    render(<UsageMeter used={4000} max={8000} showPercentage />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("exposes meter ARIA attributes", () => {
    render(<UsageMeter used={2000} max={8000} />);
    const meter = screen.getByRole("meter");
    expect(meter).toHaveAttribute("aria-valuenow", "2000");
    expect(meter).toHaveAttribute("aria-valuemax", "8000");
  });

  it("applies the danger level near the limit", () => {
    const { container } = render(<UsageMeter used={7800} max={8000} dangerThreshold={0.9} />);
    expect(container.firstChild).toHaveClass("danger");
  });

  it("clamps the readout percentage to 100%", () => {
    render(<UsageMeter used={9000} max={8000} showPercentage />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("exposes TokenCounter as an alias", () => {
    expect(TokenCounter).toBe(UsageMeter);
  });
});
