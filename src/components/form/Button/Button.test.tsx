import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

// Mock Icon because it might use assets/etc
vi.mock("../../media/Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    const { container } = render(
      <Button onClick={handleClick} disabled>Click me</Button>,
    );
    expect(container.querySelector("button")).toBeDisabled();
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies correct classes for size and variant", () => {
    const { container } = render(
      <Button size="lg" variant="filled">Test</Button>,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("wim-button--lg");
    expect(button).toHaveClass("wim-button--filled");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Button className="custom-class">Test</Button>,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders icon only when no label", () => {
    const { container } = render(<Button icon="SearchIcon" />);
    expect(buttonWithIcon(container)).toHaveClass("wim-button--icon-only");
    expect(screen.getByTestId("icon")).toHaveTextContent("SearchIcon");
  });

  it("renders icon via icon prop (JSX element)", () => {
    const { container } = render(
      <Button icon={<span data-testid="custom-icon">★</span>}>Search</Button>,
    );
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(buttonWithIcon(container)).not.toHaveClass("wim-button--icon-only");
  });

  it("applies fullWidth class", () => {
    const { container } = render(<Button fullWidth>Full</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveClass("wim-button--full-width");
  });

  it("does not apply fullWidth class by default", () => {
    const { container } = render(<Button>Normal</Button>);
    const button = container.querySelector("button");
    expect(button).not.toHaveClass("wim-button--full-width");
  });

  it("handles loading state properly", () => {
    const { container } = render(<Button loading>Load</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveClass("wim-button--loading");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("aria-label", "Loading");
    expect(button).toBeDisabled();
  });

  it("calculates animated width on label change", () => {
    // We must mock getBoundingClientRect
    const originalRequestAnimationFrame = window.requestAnimationFrame;
    const originalCancelAnimationFrame = window.cancelAnimationFrame;
    window.requestAnimationFrame = (cb) => {
      cb(0);
      return 1;
    };
    window.cancelAnimationFrame = vi.fn();

    const { rerender, container } = render(<Button animateWidth>Initial</Button>);
    const button = container.querySelector("button") as HTMLButtonElement;
    
    // Mock getBoundingClientRect
    button.getBoundingClientRect = vi.fn().mockReturnValue({ width: 100 });

    // Rerender with new label to trigger effect
    rerender(<Button animateWidth>Updated</Button>);

    expect(button).toHaveStyle({ width: "102px" }); // targetWidth is 100 + 2=102

    window.requestAnimationFrame = originalRequestAnimationFrame;
    window.cancelAnimationFrame = originalCancelAnimationFrame;
  });

  it("renders children", () => {
    render(<Button>Children</Button>);
    expect(screen.getByText(/Children/)).toBeInTheDocument();
  });
});

function buttonWithIcon(container: HTMLElement) {
  return container.querySelector("button");
}
