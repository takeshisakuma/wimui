import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Indicator } from "./Indicator";

describe("Indicator", () => {
  it("renders children and indicator", () => {
    render(<Indicator color="error">Content</Indicator>);
    expect(screen.getByText("Content")).toBeInTheDocument();
    // The dot is a span with specific class.
    // We can check existence by class or hierarchy.
    // It's a span with wim-indicator__dot.
    const dot = screen.getByText((content, element) => {
      return element?.classList.contains("wim-indicator__dot") || false;
    });
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass("wim-indicator__dot--error");
  });

  it("renders inline indicator", () => {
    render(<Indicator inline />);
    const dot = screen.getByText((content, element) => {
      return element?.classList.contains("wim-indicator__dot") || false;
    });
    expect(dot).toBeInTheDocument();
    expect(dot.parentElement).toHaveClass("wim-indicator--inline");
  });
});
