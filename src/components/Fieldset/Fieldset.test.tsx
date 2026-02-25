import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Fieldset } from "./Fieldset";

describe("Fieldset", () => {
  it("renders children", () => {
    render(
      <Fieldset>
        <legend>Personal Info</legend>
        <input />
      </Fieldset>,
    );
    expect(screen.getByText("Personal Info")).toBeInTheDocument();
    expect(screen.getByRole("group")).toBeInTheDocument(); // fieldset role is group
  });

  it("can be disabled", () => {
    render(
      <Fieldset disabled>
        <input aria-label="Input" />
      </Fieldset>,
    );
    expect(screen.getByRole("group")).toBeDisabled();
    // Inputs inside disabled fieldset should be disabled (browser behavior),
    // testing-library usually reflects this.
    expect(screen.getByLabelText("Input")).toBeDisabled();
  });
});
