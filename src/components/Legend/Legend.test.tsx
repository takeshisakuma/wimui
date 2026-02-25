import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Legend } from "./Legend";

describe("Legend", () => {
  it("renders children", () => {
    render(<Legend>Details</Legend>);
    // Role of legend is not implicitly 'legend' in all browsers/testing-lib versions sometimes?
    // But usually it is. Or simply getByText.
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
});
