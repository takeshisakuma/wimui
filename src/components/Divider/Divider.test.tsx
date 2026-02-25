import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders horizontal divider by default", () => {
    render(<Divider data-testid="divider" />);
    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("wim-divider--horizontal");
    expect(divider).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("renders vertical divider", () => {
    render(<Divider orientation="vertical" data-testid="v-divider" />);
    const divider = screen.getByTestId("v-divider");
    expect(divider).toHaveClass("wim-divider--vertical");
    expect(divider).toHaveAttribute("aria-orientation", "vertical");
  });
});
