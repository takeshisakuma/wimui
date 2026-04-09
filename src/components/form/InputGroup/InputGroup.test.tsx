import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputGroup, InputGroupText } from "./InputGroup";
import styles from "./input-group.module.scss";

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
    const input = screen.getByRole("textbox");
    expect(input.parentElement).toHaveClass(styles.fullWidth);
  });
});
