import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ButtonGroup } from "./ButtonGroup";
import React from "react";

describe("ButtonGroup", () => {
  it("renders children", () => {
    render(
      <ButtonGroup>
        <button>Button 1</button>
        <button>Button 2</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Button 1")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
  });

  it("applies gap style", () => {
    const { container } = render(
      <ButtonGroup gap="20px">
        <button>Btn</button>
      </ButtonGroup>,
    );
    const group = container.firstChild as HTMLElement;
    expect(group.style.gap).toBe("20px");
  });
});
