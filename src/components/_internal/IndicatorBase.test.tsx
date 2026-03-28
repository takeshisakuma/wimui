import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IndicatorBase } from "./IndicatorBase";

describe("IndicatorBase", () => {
  it("renders as span by default", () => {
    const { container } = render(<IndicatorBase prefixClass="wim-badge">ok</IndicatorBase>);
    expect(container.querySelector("span.wim-badge")).toBeInTheDocument();
  });

  it("renders as a custom element when as prop is provided", () => {
    const { container } = render(
      <IndicatorBase prefixClass="wim-badge" as="div">ok</IndicatorBase>,
    );
    expect(container.querySelector("div.wim-badge")).toBeInTheDocument();
  });

  it("applies status modifier class", () => {
    const { container } = render(
      <IndicatorBase prefixClass="wim-badge" status="success">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("wim-badge--success");
  });

  it("applies variant modifier class", () => {
    const { container } = render(
      <IndicatorBase prefixClass="wim-badge" variant="outline">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("wim-badge--outline");
  });

  it("maps size small to sm modifier class", () => {
    const { container } = render(
      <IndicatorBase prefixClass="wim-badge" size="small">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("wim-badge--sm");
  });

  it("maps size medium to md modifier class", () => {
    const { container } = render(
      <IndicatorBase prefixClass="wim-badge" size="medium">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("wim-badge--md");
  });

  it("renders icon when provided", () => {
    render(
      <IndicatorBase prefixClass="wim-badge" icon={<span data-testid="badge-icon" />}>
        ok
      </IndicatorBase>,
    );
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("renders string children through translation", () => {
    render(<IndicatorBase prefixClass="wim-badge">Hello</IndicatorBase>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders ReactNode children directly", () => {
    render(
      <IndicatorBase prefixClass="wim-badge">
        <strong>Bold</strong>
      </IndicatorBase>,
    );
    expect(screen.getByText("Bold")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <IndicatorBase prefixClass="wim-badge" className="extra">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("extra");
  });
});
