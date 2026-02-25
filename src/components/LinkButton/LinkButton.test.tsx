import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("renders like a button but is anchor", () => {
    render(<LinkButton href="/link" label="Go" />);
    const link = screen.getByRole("link", { name: "Go" });
    // Note: LinkButton renders text in span inside.
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("wim-button");
    expect(link).toHaveAttribute("href", "/link");
  });
});
