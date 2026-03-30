import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ButtonGroup } from "./ButtonGroup";

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

  it("applies joined class and no gap when joined=true", () => {
    const { container } = render(
      <ButtonGroup joined>
        <button>Btn</button>
      </ButtonGroup>,
    );
    const group = container.firstChild as HTMLElement;
    expect(group).toHaveClass("wim-button-group--joined");
    expect(group.style.gap).toBe("");
  });

  it("applies variant to child elements", () => {
    render(
      <ButtonGroup variant="filled">
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Btn")).toBeInTheDocument();
  });

  it("skips non-element children when variant is set", () => {
    render(
      <ButtonGroup variant="outlined">
        {"text"}
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Btn")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ButtonGroup className="my-group">
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(container.firstChild).toHaveClass("my-group");
  });
});
