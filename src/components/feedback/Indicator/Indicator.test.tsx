import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Indicator } from "./Indicator";
import styles from "./indicator.module.scss";

describe("Indicator", () => {
  it("renders children and indicator", () => {
    render(<Indicator color="danger">Content</Indicator>);
    expect(screen.getByText("Content")).toBeInTheDocument();
    
    // The dot is a span with specific class.
    const dot = document.querySelector(`.${styles.dot}`);
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass(styles.danger);
  });

  it("renders inline indicator", () => {
    render(<Indicator inline />);
    const dot = document.querySelector(`.${styles.dot}`);
    expect(dot).toBeInTheDocument();
    expect(dot?.parentElement).toHaveClass(styles.inlineRoot);
  });
});
