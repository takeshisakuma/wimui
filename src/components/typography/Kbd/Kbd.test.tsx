import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Kbd } from "./Kbd";

describe("Kbd", () => {
  it("renders children", () => {
    render(<Kbd>Ctrl</Kbd>);
    expect(screen.getByText("Ctrl")).toBeInTheDocument();
  });

  it("applies size class", () => {
    render(<Kbd size="sm">A</Kbd>);
    expect(screen.getByText("A")).toHaveClass("wim-kbd--sm");
  });
});
