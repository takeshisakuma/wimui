import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Fieldset } from "./Fieldset";
import styles from "./fieldset.module.scss";

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

  // Card の中に枠つき fieldset を置くと枠が二重になる（必須ルール 9）。
  // plain はクロームだけ落とし、グループの意味論は残す — そこが要点なので
  // role=group と legend が生きていることまで見る。
  it("drops the frame but keeps the grouping with variant='plain'", () => {
    render(
      <Fieldset variant="plain">
        <legend>Delivery</legend>
        <input aria-label="Input" />
      </Fieldset>,
    );
    const group = screen.getByRole("group");
    expect(group).toHaveClass(styles.plain);
    expect(group.tagName).toBe("FIELDSET");
    expect(screen.getByText("Delivery")).toBeInTheDocument();
  });

  it("keeps the frame on the other variants", () => {
    const { rerender } = render(<Fieldset><input aria-label="a" /></Fieldset>);
    expect(screen.getByRole("group")).not.toHaveClass(styles.plain);

    rerender(<Fieldset variant="full-width"><input aria-label="a" /></Fieldset>);
    expect(screen.getByRole("group")).not.toHaveClass(styles.plain);
    expect(screen.getByRole("group")).toHaveClass(styles.fullWidth);
  });

  it("still disables its fields when plain", () => {
    render(
      <Fieldset variant="plain" disabled>
        <input aria-label="Input" />
      </Fieldset>,
    );
    expect(screen.getByLabelText("Input")).toBeDisabled();
  });
});
