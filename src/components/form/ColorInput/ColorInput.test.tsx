import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
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

  it("treats 3-character hex shorthand #000 as dark", () => {
    const { container } = render(
      <ColorInput defaultValue="#000" aria-label="short dark" />,
    );
    expect(container.firstChild).toHaveClass(styles.dark);
  });

  it("treats 3-character hex shorthand #fff as light", () => {
    const { container } = render(
      <ColorInput defaultValue="#fff" aria-label="short light" />,
    );
    expect(container.firstChild).not.toHaveClass(styles.dark);
  });

  it("invalid hex value is treated as not dark", () => {
    const { container } = render(
      <ColorInput defaultValue="#gggggg" aria-label="invalid" />,
    );
    expect(container.firstChild).not.toHaveClass(styles.dark);
  });

  it("hex value with non-hex characters returns not dark", () => {
    const { container } = render(
      <ColorInput defaultValue="notahex" aria-label="bad hex" />,
    );
    expect(container.firstChild).not.toHaveClass(styles.dark);
  });

  it("calls onChange when color changes in uncontrolled mode", () => {
    const onChange = vi.fn();
    render(
      <ColorInput defaultValue="#000000" placeholder="Pick" onChange={onChange} />,
    );
    const input = screen.getByPlaceholderText("Pick");
    fireEvent.change(input, { target: { value: "#ff0000" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("removes dark class when uncontrolled color changes to light", () => {
    const { container } = render(
      <ColorInput defaultValue="#000000" placeholder="Pick" />,
    );
    expect(container.firstChild).toHaveClass(styles.dark);
    const input = screen.getByPlaceholderText("Pick");
    fireEvent.change(input, { target: { value: "#ffffff" } });
    expect(container.firstChild).not.toHaveClass(styles.dark);
  });

  it("adds dark class when uncontrolled color changes to dark", () => {
    const { container } = render(
      <ColorInput defaultValue="#ffffff" placeholder="Pick" />,
    );
    expect(container.firstChild).not.toHaveClass(styles.dark);
    const input = screen.getByPlaceholderText("Pick");
    fireEvent.change(input, { target: { value: "#000000" } });
    expect(container.firstChild).toHaveClass(styles.dark);
  });

  it("calls onChange in controlled mode", () => {
    const onChange = vi.fn();
    render(
      <ColorInput value="#000000" placeholder="Pick" onChange={onChange} />,
    );
    const input = screen.getByPlaceholderText("Pick");
    fireEvent.change(input, { target: { value: "#ffffff" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("dark class persists in controlled mode since value prop is unchanged", () => {
    const { container } = render(
      <ColorInput value="#000000" placeholder="Pick" />,
    );
    expect(container.firstChild).toHaveClass(styles.dark);
    const input = screen.getByPlaceholderText("Pick");
    fireEvent.change(input, { target: { value: "#ffffff" } });
    expect(container.firstChild).toHaveClass(styles.dark);
  });

  it("detects medium-dark color (#666666) as dark", () => {
    const { container } = render(
      <ColorInput defaultValue="#666666" aria-label="medium dark" />,
    );
    expect(container.firstChild).toHaveClass(styles.dark);
  });

  it("detects medium-light color (#aaaaaa) as light", () => {
    const { container } = render(
      <ColorInput defaultValue="#aaaaaa" aria-label="medium light" />,
    );
    expect(container.firstChild).not.toHaveClass(styles.dark);
  });
});
