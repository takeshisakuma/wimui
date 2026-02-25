import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders children", () => {
    render(
      <Flex>
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>,
    );
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("applies flex styles", () => {
    const { container } = render(
      <Flex
        direction="column"
        align="center"
        justify="between"
        wrap="wrap"
        gap={10}
      >
        <div>Child</div>
      </Flex>,
    );
    const div = container.firstChild as HTMLElement;
    expect(div.style.flexDirection).toBe("column");
    expect(div.style.alignItems).toBe("center");
    expect(div.style.justifyContent).toBe("space-between");
    expect(div.style.flexWrap).toBe("wrap");
    expect(div.style.gap).toBe("10px");
  });

  it("renders inline flex", () => {
    const { container } = render(
      <Flex inline>
        <div>Child</div>
      </Flex>,
    );
    const div = container.firstChild as HTMLElement;
    expect(div.style.display).toBe("inline-flex");
  });

  it("accepts custom className", () => {
    const { container } = render(
      <Flex className="custom-flex">
        <div>Child</div>
      </Flex>,
    );
    expect(container.firstChild).toHaveClass("custom-flex");
  });
});
