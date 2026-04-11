import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Kbd } from "./Kbd";
import styles from "./kbd.module.scss";

describe("Kbd", () => {
  it("renders children", () => {
    render(<Kbd>Ctrl</Kbd>);
    expect(screen.getByText("Ctrl")).toBeInTheDocument();
  });

  it("applies size class", () => {
    render(<Kbd size="sm">A</Kbd>);
    expect(screen.getByText("A")).toHaveClass(styles.sm);
  });

  it("supports asChild prop", () => {
    render(
      <Kbd asChild>
        <span data-testid="custom">S</span>
      </Kbd>,
    );
    const element = screen.getByTestId("custom");
    expect(element.tagName).toBe("SPAN");
    expect(element).toHaveClass(styles.root);
  });

  it("forwards ref to the element", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Kbd ref={ref}>Ref</Kbd>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("applies custom className", () => {
    render(<Kbd className="custom-class">K</Kbd>);
    expect(screen.getByText("K")).toHaveClass("custom-class");
  });
});
