import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ColorInput } from "./ColorInput";

/**
 * T122: 以前の ColorInput は `<Input type="color">` を出すだけで、
 * docs が言う「正確な色値を文字で入れる」ができなかった（`ColorPicker` と
 * 同じ見た目・同じ操作）。ここで固定するのは**文字で入れられること**。
 */
describe("ColorInput", () => {
  it("shows the colour as text you can read and edit", () => {
    render(<ColorInput defaultValue="#f3ece1" aria-label="Headline colour" />);
    const field = screen.getByLabelText("Headline colour");
    expect(field).toHaveAttribute("type", "text");
    expect(field).toHaveValue("#f3ece1");
  });

  it("has a colour swatch with its own name", () => {
    render(<ColorInput defaultValue="#123f35" aria-label="Band colour" />);
    const swatch = screen.getByLabelText("Pick a colour");
    expect(swatch).toHaveAttribute("type", "color");
    expect(swatch).toHaveValue("#123f35");
  });

  it("commits a typed hex value", () => {
    const onChange = vi.fn();
    render(
      <ColorInput defaultValue="#000000" aria-label="Colour" onChange={onChange} />,
    );
    fireEvent.change(screen.getByLabelText("Colour"), {
      target: { value: "#7a1f1f" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Pick a colour")).toHaveValue("#7a1f1f");
  });

  it("keeps what you typed while it is not yet a colour, without committing", () => {
    const onChange = vi.fn();
    render(
      <ColorInput defaultValue="#000000" aria-label="Colour" onChange={onChange} />,
    );
    const field = screen.getByLabelText("Colour");
    fireEvent.change(field, { target: { value: "#7a1" + "f" } });
    expect(field).toHaveValue("#7a1f");
    expect(onChange).not.toHaveBeenCalled();
    // 見本は最後に確定した色のまま
    expect(screen.getByLabelText("Pick a colour")).toHaveValue("#000000");
  });

  it("expands a 3-digit hex for the swatch but leaves the text as typed", () => {
    render(<ColorInput defaultValue="#abc" aria-label="Colour" />);
    expect(screen.getByLabelText("Colour")).toHaveValue("#abc");
    expect(screen.getByLabelText("Pick a colour")).toHaveValue("#aabbcc");
  });

  it("takes the colour from the swatch", () => {
    const onChange = vi.fn();
    render(
      <ColorInput defaultValue="#000000" aria-label="Colour" onChange={onChange} />,
    );
    fireEvent.change(screen.getByLabelText("Pick a colour"), {
      target: { value: "#ffd166" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Colour")).toHaveValue("#ffd166");
  });

  it("follows the value prop when controlled", () => {
    const { rerender } = render(<ColorInput value="#111111" aria-label="Colour" />);
    expect(screen.getByLabelText("Colour")).toHaveValue("#111111");
    rerender(<ColorInput value="#222222" aria-label="Colour" />);
    expect(screen.getByLabelText("Colour")).toHaveValue("#222222");
  });

  it("does not move on its own when controlled and the parent ignores onChange", () => {
    const onChange = vi.fn();
    render(<ColorInput value="#111111" aria-label="Colour" onChange={onChange} />);
    fireEvent.change(screen.getByLabelText("Pick a colour"), {
      target: { value: "#999999" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Pick a colour")).toHaveValue("#111111");
  });

  it("falls back to black in the swatch when the text is not a colour", () => {
    render(<ColorInput defaultValue="notahex" aria-label="Colour" />);
    expect(screen.getByLabelText("Colour")).toHaveValue("notahex");
    expect(screen.getByLabelText("Pick a colour")).toHaveValue("#000000");
  });

  it("disables the swatch together with the field", () => {
    render(<ColorInput defaultValue="#000000" aria-label="Colour" disabled />);
    expect(screen.getByLabelText("Pick a colour")).toBeDisabled();
  });
});
