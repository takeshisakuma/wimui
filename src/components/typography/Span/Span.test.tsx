import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Span } from "./Span";
import styles from "./span.module.scss";

// Mock i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Span", () => {
  it("renders content", () => {
    render(<Span content="Hello" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies size and color classes", () => {
    const { container } = render(
      <Span content="Test" size="lg" color="error" />,
    );
    expect(container.firstChild).toHaveClass(styles.lg);
    expect(container.firstChild).toHaveClass(styles.error);
  });

  it("renders with icon", () => {
    const { container } = render(
      <Span content="Config" iconName="CheckIcon" />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies fontStyle italic class", () => {
    const { container } = render(<Span content="Italic" fontStyle="italic" />);
    expect(container.firstChild).toHaveClass(styles.italic);
  });

  it("renders icon on right side", () => {
    const { container } = render(
      <Span content="Label" iconName="CheckIcon" iconPosition="right" />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies custom hex color as inline style", () => {
    const { container } = render(<Span content="Custom" color="#ff0000" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.color).toBeTruthy();
  });

  it("applies custom var() color as inline style", () => {
    const { container } = render(<Span content="Custom" color="var(--wim-color-primary)" />);
    const el = container.firstChild as HTMLElement;
    // Should not add color class but use inline style
    expect(el.className).not.toContain("var");
  });

  it("applies decoration class", () => {
    const { container } = render(<Span content="Underline" decoration="underline" />);
    expect(container.firstChild).toHaveClass(styles.underline);
  });

  it("applies bold weight class", () => {
    const { container } = render(<Span content="Bold" weight="bold" />);
    expect(container.firstChild).toHaveClass(styles.bold);
  });

  it("supports asChild prop", () => {
    render(
      <Span asChild>
        <strong data-testid="inner-strong">Strong Text</strong>
      </Span>
    );
    const element = screen.getByTestId("inner-strong");
    expect(element.tagName).toBe("STRONG");
    expect(element).toHaveClass(styles.root);
  });

  it("forwards ref to the element", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Span ref={ref}>Ref</Span>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("applies custom className", () => {
    const { container } = render(<Span className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});

