import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ColorInput } from "./ColorInput";
import styles from "./color-input.module.scss";

describe("ColorInput", () => {
  it("renders color input", () => {
    render(<ColorInput placeholder="Pick a color" />);
    const input = screen.getByPlaceholderText("Pick a color");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "color");
  });

  it("applies --dark class when the selected color is dark", () => {
    const { container } = render(
      <ColorInput defaultValue="#000000" aria-label="dark color" />,
    );
    // ColorInput has className applied to its root component (Input, which delegates to FieldTemplate)
    expect(container.firstChild).toHaveClass(styles.dark);
  });

  it("does not apply --dark class when the selected color is light", () => {
    const { container } = render(
      <ColorInput defaultValue="#ffffff" aria-label="light color" />,
    );
    expect(container.firstChild).not.toHaveClass(styles.dark);
  });
});
