import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SimpleGrid } from "./SimpleGrid";

describe("SimpleGrid", () => {
  it("renders children in grid layout", () => {
    render(
      <SimpleGrid cols={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("applies correct grid style for columns", () => {
    const { container } = render(<SimpleGrid cols={4} />);
    const grid = container.firstChild as HTMLElement;
    expect(grid).toHaveStyle({
      "--wim-simple-grid-cols": "repeat(4, minmax(0, 1fr))",
    });
  });

  it("applies minChildWidth if provided", () => {
    const { container } = render(<SimpleGrid minChildWidth={200} />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.style.gridTemplateColumns).toBe(
      "repeat(auto-fill, minmax(200px, 1fr))",
    );
  });
});
