import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Code } from "./Code";

describe("Code", () => {
  it("renders inline code by default", () => {
    render(<Code code="const a = 1;" />);
    const code = screen.getByText("const a = 1;");
    expect(code.tagName).toBe("CODE");
    expect(code).toHaveClass("wim-code--inline");
  });

  it("renders block code", () => {
    render(<Code block code='console.log("hello")' />);
    const pre = screen.getByText('console.log("hello")').closest("pre");
    expect(pre).toBeInTheDocument();
    expect(pre).toHaveClass("wim-code--block");
  });

  it("applies language class", () => {
    render(<Code code="var x = 10;" language="javascript" />);
    expect(screen.getByText("var x = 10;")).toHaveClass("wim-code");
    // Inline code doesn't wrap in pre, wrapper is 'code'.
    // Implementation:
    // const Component = block ? "pre" : "code";
    // return <Component className="... language-javascript ...">...</Component>

    const element = screen.getByText("var x = 10;");
    expect(element).toHaveClass("language-javascript");
  });

  it("applies language class to inner code in block mode", () => {
    render(<Code block language="python" code='print("hi")' />);
    // Implementation:
    // <pre ...><code className="language-python">...</code></pre>
    const code = screen.getByText('print("hi")');
    expect(code.tagName).toBe("CODE");
    expect(code).toHaveClass("language-python");
  });
});
