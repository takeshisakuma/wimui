import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NumberInput } from "./NumberInput";
import { Input } from "../Input/Input";

/**
 * kg・%・円 はフォームの定番なのに単位を添える手段が無く、ラベルに「（kg）」と
 * 書き足す回避しかなかった（T32 2 枚目 ⑪）。`suffix` は Input に足したので
 * NumberInput にも継承で届く。
 */
describe("suffix", () => {
  it("renders the unit next to the field", () => {
    render(<NumberInput label="Weight" suffix="kg" />);
    expect(screen.getByTestId("input-suffix")).toHaveTextContent("kg");
  });

  // 見えているのに読み上げられないなら、ラベルに単位を書く回避に戻ってしまう。
  it("announces the unit with the field", () => {
    render(<NumberInput label="Weight" suffix="kg" />);
    const field = screen.getByLabelText("Weight");
    const describedBy = field.getAttribute("aria-describedby");

    expect(describedBy).toBeTruthy();
    const described = describedBy!
      .split(" ")
      .map((id) => document.getElementById(id)?.textContent)
      .join(" ");
    expect(described).toContain("kg");
  });

  it("keeps the error described as well as the unit", () => {
    render(<NumberInput label="Weight" suffix="kg" error="Too heavy" />);
    const field = screen.getByLabelText("Weight");
    const described = field
      .getAttribute("aria-describedby")!
      .split(" ")
      .map((id) => document.getElementById(id)?.textContent)
      .join(" ");

    expect(described).toContain("Too heavy");
    expect(described).toContain("kg");
  });

  it("renders nothing when no suffix is given", () => {
    render(<NumberInput label="Weight" />);
    expect(screen.queryByTestId("input-suffix")).toBeNull();
  });

  it("treats an empty string as no suffix", () => {
    render(<NumberInput label="Weight" suffix="" />);
    expect(screen.queryByTestId("input-suffix")).toBeNull();
  });

  it("works on Input itself, not just NumberInput", () => {
    render(<Input label="Share" suffix="%" />);
    expect(screen.getByTestId("input-suffix")).toHaveTextContent("%");
  });

  it("leaves aria-describedby unset when there is neither error nor suffix", () => {
    render(<Input label="Plain" />);
    expect(screen.getByLabelText("Plain")).not.toHaveAttribute("aria-describedby");
  });
});
