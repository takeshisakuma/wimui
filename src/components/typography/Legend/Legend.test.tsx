import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Legend } from "./Legend";

describe("Legend", () => {
  it("renders children", () => {
    // label prop is passed to FieldLabelContent
    render(<Legend label="Details" />);
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
  
  it("renders children alongside label", () => {
    render(<Legend label="Title">Subcontent</Legend>);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Subcontent")).toBeInTheDocument();
  });

  // `label` 無しは docs の Usage サンプルそのもの。ここで空の
  // <div><span></span></div> が挟まると children が block で分断され、
  // 見出しを直接置く用途（<legend> は heading content を含められる）が壊れる。
  it("puts children straight into the legend when there is no label", () => {
    const { container } = render(
      <Legend>
        <h2>Group title</h2>
      </Legend>,
    );
    const legend = container.querySelector("legend")!;
    expect(legend.firstElementChild?.tagName).toBe("H2");
    expect(legend.querySelector("div")).toBeNull();
  });

  // 型で受け付けておいて転送しないと、指定した文言は無視されたうえ
  // DOM 属性（requiredlabel="...") として出力に漏れる。
  it("forwards requiredLabel to the badge instead of leaking it to the DOM", () => {
    const { container } = render(<Legend label="Contact" required requiredLabel="必須です" />);
    const legend = container.querySelector("legend")!;
    expect(screen.getByText("必須です")).toBeInTheDocument();
    expect(legend.hasAttribute("requiredlabel")).toBe(false);
  });

  it("forwards optionalLabel to the badge instead of leaking it to the DOM", () => {
    const { container } = render(<Legend label="Nickname" showOptional optionalLabel="任意" />);
    const legend = container.querySelector("legend")!;
    expect(screen.getByText("任意")).toBeInTheDocument();
    expect(legend.hasAttribute("optionallabel")).toBe(false);
  });

  // バッジだけ出したいケース（label 無し + required）でラベル層を消さない。
  it("still renders the badge when only required is given", () => {
    render(<Legend required>Group</Legend>);
    expect(screen.getByText("Required")).toBeInTheDocument();
    expect(screen.getByText("Group")).toBeInTheDocument();
  });
});
