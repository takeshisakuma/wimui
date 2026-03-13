import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

// Mock Icon because it might use assets/etc
vi.mock("../Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

// Mock useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    const { container } = render(
      <Button label="Click me" onClick={handleClick} state="disabled" />,
    );
    // Button should be disabled
    // Note: The disabled HTML attribute might handle this, but the click handler logic relies on state prop too
    expect(container.querySelector("button")).toBeDisabled();

    // Attempt click by bypassing the HTML disabled behavior if possible, or just standard click
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies correct classes for size and priority", () => {
    const { container } = render(
      <Button label="Test" size="large" priority="primary" />,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("wim-button--lg");
    expect(button).toHaveClass("wim-button--primary");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Button label="Test" className="custom-class" />,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders icon only when no label", () => {
    const { container } = render(<Button iconName="SearchIcon" />);
    expect(buttonWithIcon(container)).toHaveClass("wim-button--icon-only");
    expect(screen.getByTestId("icon")).toHaveTextContent("SearchIcon");
  });

  it("renders icon via icon prop (JSX element)", () => {
    const { container } = render(
      <Button label="Search" icon={<span data-testid="custom-icon">★</span>} />,
    );
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(buttonWithIcon(container)).not.toHaveClass("wim-button--icon-only");
  });

  it("applies fullWidth class", () => {
    const { container } = render(<Button label="Full" fullWidth />);
    const button = container.querySelector("button");
    expect(button).toHaveClass("wim-button--full-width");
  });

  it("does not apply fullWidth class by default", () => {
    const { container } = render(<Button label="Normal" />);
    const button = container.querySelector("button");
    expect(button).not.toHaveClass("wim-button--full-width");
  });
});

function buttonWithIcon(container: HTMLElement) {
  return container.querySelector("button");
}
