import { createRef, useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ColorPicker } from "./ColorPicker";
import inputStyles from "../Input/input.module.scss";

describe("ColorPicker", () => {
  it("renders color picker input", () => {
    render(<ColorPicker data-testid="color-picker" id="color-picker" />);
    const input = screen.getByTestId("color-picker");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "color");
  });

  it("applies state classes", () => {
    render(<ColorPicker intent="danger" data-testid="error-picker" id="error-picker" />);
    // Check if the input itself or its wrapper has the error class.
    // In Input component, the input element gets styles.danger
    expect(screen.getByTestId("error-picker")).toHaveClass(inputStyles.danger);
  });

  it("can be disabled", () => {
    render(<ColorPicker disabled data-testid="disabled-picker" />);
    expect(screen.getByTestId("disabled-picker")).toBeDisabled();
  });
});

describe("ColorPicker swatches", () => {
  const swatches = ["#3B82F6", { value: "#f00", label: "Red" }, "#10b981"];

  it("renders the swatches as a named radio group", () => {
    render(<ColorPicker swatches={swatches} defaultValue="#3b82f6" />);
    const group = screen.getByRole("radiogroup", { name: "Color swatches" });
    expect(group).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(3);
    // 大文字と #rgb の見本も、ネイティブの値（小文字の #rrggbb）と突き合わせる
    expect(screen.getByRole("radio", { name: "#3B82F6" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "Red" })).toHaveAttribute("aria-checked", "false");
  });

  it("does not render the group without swatches", () => {
    render(<ColorPicker />);
    expect(screen.queryByRole("radiogroup")).not.toBeInTheDocument();
  });

  it("sets the value and fires onChange when a swatch is clicked", () => {
    const onChange = vi.fn();
    render(<ColorPicker swatches={swatches} data-testid="picker" onChange={onChange} />);
    fireEvent.click(screen.getByRole("radio", { name: "Red" }));
    expect(screen.getByTestId("picker")).toHaveValue("#ff0000");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe("#ff0000");
    expect(screen.getByRole("radio", { name: "Red" })).toHaveAttribute("aria-checked", "true");
  });

  it("follows the controlled value", () => {
    const Controlled = () => {
      const [color, setColor] = useState("#10b981");
      return <ColorPicker swatches={swatches} value={color} onChange={(e) => setColor(e.target.value)} />;
    };
    render(<Controlled />);
    expect(screen.getByRole("radio", { name: "#10b981" })).toHaveAttribute("aria-checked", "true");
    fireEvent.click(screen.getByRole("radio", { name: "#3B82F6" }));
    expect(screen.getByRole("radio", { name: "#3B82F6" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "#10b981" })).toHaveAttribute("aria-checked", "false");
  });

  it("moves and selects with the arrow keys, with one tab stop", () => {
    render(<ColorPicker swatches={swatches} data-testid="picker" />);
    const radios = screen.getAllByRole("radio");
    // どれも選ばれていなければ、最初の見本だけが Tab の停止点
    expect(radios.map((r) => r.getAttribute("tabindex"))).toEqual(["0", "-1", "-1"]);
    radios[0].focus();
    fireEvent.keyDown(radios[0], { key: "ArrowRight" });
    expect(radios[1]).toHaveFocus();
    expect(radios[1]).toHaveAttribute("aria-checked", "true");
    expect(screen.getByTestId("picker")).toHaveValue("#ff0000");
    fireEvent.keyDown(radios[1], { key: "End" });
    expect(radios[2]).toHaveFocus();
    expect(screen.getByTestId("picker")).toHaveValue("#10b981");
  });

  it("disables the swatches with the field", () => {
    render(<ColorPicker swatches={swatches} disabled />);
    screen.getAllByRole("radio").forEach((radio) => expect(radio).toBeDisabled());
  });

  it("forwards the ref to the input", () => {
    const ref = createRef<HTMLInputElement>();
    render(<ColorPicker ref={ref} swatches={swatches} />);
    expect(ref.current).toHaveAttribute("type", "color");
  });
});
