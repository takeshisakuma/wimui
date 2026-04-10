import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Code } from "./Code";

describe("Code", () => {
  it("renders inline code by default", () => {
    render(<Code code="const a = 1;" />);
    const code = screen.getByText("const a = 1;");
    expect(code.tagName).toBe("CODE");
    expect(code.className).toContain("inline");
  });

  it("renders block code", () => {
    render(<Code block code='console.log("hello")' />);
    const pre = screen.getByText('console.log("hello")').closest("pre");
    expect(pre).toBeInTheDocument();
    expect(pre?.className).toContain("block");
  });

  it("applies language class", () => {
    render(<Code code="var x = 10;" language="javascript" />);
    // The component uses styles.root, so we check if it has a class (modular)
    const element = screen.getByText("var x = 10;");
    expect(element.className).toContain("root");
    expect(element).toHaveClass("language-javascript");
  });

  it("applies language class to inner code in block mode", () => {
    render(<Code block language="python" code='print("hi")' />);
    const code = screen.getByText('print("hi")');
    expect(code.tagName).toBe("CODE");
    expect(code).toHaveClass("language-python");
  });

  it("renders children when no code prop (inline)", () => {
    render(<Code>let x = 5;</Code>);
    expect(screen.getByText("let x = 5;")).toBeInTheDocument();
  });

  it("renders children when no code prop (block)", () => {
    render(<Code block>return true;</Code>);
    expect(screen.getByText("return true;")).toBeInTheDocument();
  });

  it("renders block without language class", () => {
    render(<Code block code="x = 1" />);
    const pre = screen.getByText("x = 1").closest("pre");
    expect(pre?.className).toContain("block");
  });
});
