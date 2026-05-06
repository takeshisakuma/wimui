import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CodeBlock } from "./CodeBlock";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const sampleCode = `function hello() {\n  console.log("Hello!");\n}`;

describe("CodeBlock", () => {
  it("renders code content", () => {
    render(<CodeBlock code={sampleCode} />);
    expect(screen.getByText(/function hello/)).toBeInTheDocument();
  });

  it("renders language label", () => {
    render(<CodeBlock code={sampleCode} language="tsx" />);
    expect(screen.getByText("tsx")).toBeInTheDocument();
  });

  it("renders filename over language label", () => {
    render(<CodeBlock code={sampleCode} language="tsx" filename="App.tsx" />);
    expect(screen.getByText("App.tsx")).toBeInTheDocument();
    expect(screen.queryByText("tsx")).not.toBeInTheDocument();
  });

  it("shows copy button by default", () => {
    render(<CodeBlock code={sampleCode} />);
    expect(screen.getByLabelText("code_block.copy_label")).toBeInTheDocument();
  });

  it("hides copy button when showCopy is false", () => {
    render(<CodeBlock code={sampleCode} showCopy={false} />);
    expect(screen.queryByLabelText("code_block.copy_label")).not.toBeInTheDocument();
  });

  it("renders line numbers when showLineNumbers is true", () => {
    render(<CodeBlock code={"line1\nline2\nline3"} showLineNumbers showCopy={false} />);
    // aria-hidden line numbers are excluded from accessible queries; use hidden: true
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders expand/collapse button when maxLines is exceeded", () => {
    const longCode = Array.from({ length: 20 }, (_, i) => `line ${i + 1}`).join("\n");
    render(<CodeBlock code={longCode} maxLines={5} />);
    expect(screen.getByLabelText("code_block.expand_label")).toBeInTheDocument();
  });

  it("does not render expand button when lines are within maxLines", () => {
    render(<CodeBlock code="short\ncode" maxLines={10} />);
    expect(screen.queryByLabelText("code_block.expand_label")).not.toBeInTheDocument();
  });

  it("calls clipboard API on copy click", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      writable: true,
    });
    render(<CodeBlock code={sampleCode} />);
    fireEvent.click(screen.getByLabelText("code_block.copy_label"));
    await waitFor(() => expect(writeText).toHaveBeenCalledWith(sampleCode));
  });
});
