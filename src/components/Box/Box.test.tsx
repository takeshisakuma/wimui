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

  it("applies individual spacing props", () => {
    const { container } = render(<Box pt={5} pb={10} ml="auto" px="xl" radius="md" shadow="var(--wim-shadow-sm)" />);
    const box = container.firstChild as HTMLElement;
    expect(box.style.paddingTop).toBe("5px");
    expect(box.style.paddingBottom).toBe("10px");
    expect(box.style.marginLeft).toBe("auto");
    expect(box.style.paddingLeft).toContain("var"); // xl should be a var
    expect(box.style.borderRadius).toContain("var"); // md should be a var
    expect(box.style.boxShadow).toBe("var(--wim-shadow-sm)");
  });

  it("handles responsive width and height objects", () => {
    const { container } = render(
      <Box w={{ base: "100%", md: "50%" }} h={{ base: 200, lg: 400 }} />
    );
    const box = container.firstChild as HTMLElement;
    expect(box.style.width).toBe("var(--wim-box-w)");
    expect(box.style.height).toBe("var(--wim-box-h)");
  });
});
