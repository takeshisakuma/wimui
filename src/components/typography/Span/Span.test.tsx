import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Span } from "./Span";

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
    expect(container.firstChild).toHaveClass("wim-span--lg");
    expect(container.firstChild).toHaveClass("wim-span--error");
  });

  it("renders with icon", () => {
    const { container } = render(
      <Span content="Config" iconName="CheckIcon" />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies fontStyle italic class", () => {
    const { container } = render(<Span content="Italic" fontStyle="italic" />);
    expect(container.firstChild).toHaveClass("wim-span--italic");
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
    expect(el).not.toHaveClass("wim-span--var(--wim-color-primary)");
  });

  it("applies decoration class", () => {
    const { container } = render(<Span content="Underline" decoration="underline" />);
    expect(container.firstChild).toHaveClass("wim-span--underline");
  });

  it("applies bold weight class", () => {
    const { container } = render(<Span content="Bold" weight="bold" />);
    expect(container.firstChild).toHaveClass("wim-span--bold");
  });
});
