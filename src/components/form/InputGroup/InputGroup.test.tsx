import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputGroup, InputGroupText } from "./InputGroup";

describe("InputGroup", () => {
  it("renders children", () => {
    render(
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <input placeholder="Username" />
      </InputGroup>,
    );
    expect(screen.getByText("@")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  });

  it("applies fullWidth class", () => {
    render(
      <InputGroup fullWidth>
        <input />
      </InputGroup>,
    );
    // Need to check container class.
    // We can add testId or inspect parent of child.
    const input = screen.getByRole("textbox");
    // InputGroup is div.
    expect(input.parentElement).toHaveClass("wim-input-group--full-width");
  });
});
