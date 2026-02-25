import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Box } from "./Box";
import React from "react";

describe("Box", () => {
  it("renders children", () => {
    render(<Box>Box Content</Box>);
    expect(screen.getByText("Box Content")).toBeInTheDocument();
  });

  it("applies styles from props", () => {
    const { container } = render(<Box p={10} bg="red" />);
    const box = container.firstChild as HTMLElement;
    expect(box.style.paddingTop).toBe("10px");
    expect(box.style.backgroundColor).toBe("red");
  });

  it("renders as a different element", () => {
    const { container } = render(<Box as="section">Section Box</Box>);
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
