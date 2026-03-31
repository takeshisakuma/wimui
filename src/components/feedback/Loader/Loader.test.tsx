import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renders loader", () => {
    render(<Loader />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("applies variant and size", () => {
    render(<Loader variant="dots" size="lg" />);
    const loader = screen.getByRole("status");
    expect(loader).toHaveClass("wim-loader--dots");
    expect(loader).toHaveClass("wim-loader--lg");
  });
});
