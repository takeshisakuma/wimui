import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IndicatorBase } from "./IndicatorBase";

const mockStyles = {
  root: "test-root",
  success: "test-success",
  outline: "test-outline",
  sm: "test-sm",
  md: "test-md",
  icon: "test-icon",
};

describe("IndicatorBase", () => {
  it("renders as span by default", () => {
    const { container } = render(<IndicatorBase styles={mockStyles}>ok</IndicatorBase>);
    expect(container.querySelector("span.test-root")).toBeInTheDocument();
  });

  it("renders as a custom element when as prop is provided", () => {
    const { container } = render(
      <IndicatorBase styles={mockStyles} as="div">ok</IndicatorBase>,
    );
    expect(container.querySelector("div.test-root")).toBeInTheDocument();
  });

  it("applies status modifier class", () => {
    const { container } = render(
      <IndicatorBase styles={mockStyles} intent="success">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("test-success");
  });

  it("applies variant modifier class", () => {
    const { container } = render(
      <IndicatorBase styles={mockStyles} variant="outline">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("test-outline");
  });

  it("maps size small to sm modifier class", () => {
    const { container } = render(
      <IndicatorBase styles={mockStyles} size="sm">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("test-sm");
  });

  it("maps size medium to md modifier class", () => {
    const { container } = render(
      <IndicatorBase styles={mockStyles} size="md">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("test-md");
  });

  it("renders icon when provided", () => {
    render(
      <IndicatorBase styles={mockStyles} icon={<span data-testid="badge-icon" />}>
        ok
      </IndicatorBase>,
    );
    const iconWrapper = screen.getByTestId("badge-icon").parentElement;
    expect(iconWrapper).toHaveClass("test-icon");
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("renders string children directly", () => {
    render(<IndicatorBase styles={mockStyles}>Hello</IndicatorBase>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders ReactNode children directly", () => {
    render(
      <IndicatorBase styles={mockStyles}>
        <strong>Bold</strong>
      </IndicatorBase>,
    );
    expect(screen.getByText("Bold")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <IndicatorBase styles={mockStyles} className="extra">ok</IndicatorBase>,
    );
    expect(container.firstChild).toHaveClass("extra");
  });

  it("renders content prop as alternative to children", () => {
    render(<IndicatorBase styles={mockStyles} content="From Prop" />);
    expect(screen.getByText("From Prop")).toBeInTheDocument();
  });
});
