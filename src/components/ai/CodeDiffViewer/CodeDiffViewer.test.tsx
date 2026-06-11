import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CodeDiffViewer } from "./CodeDiffViewer";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const before = `function greet() {\n  return "hello";\n}`;
const after = `function greet(name: string) {\n  return \`hello \${name}\`;\n}`;

describe("CodeDiffViewer", () => {
  it("renders without crashing", () => {
    const { container } = render(<CodeDiffViewer before={before} after={after} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("shows filename when provided", () => {
    render(<CodeDiffViewer before={before} after={after} filename="greet.ts" />);
    expect(screen.getByText("greet.ts")).toBeInTheDocument();
  });

  it("shows language label when filename is not provided", () => {
    render(<CodeDiffViewer before={before} after={after} language="tsx" />);
    expect(screen.getByText("tsx")).toBeInTheDocument();
  });

  it("renders split view toggle buttons", () => {
    render(<CodeDiffViewer before={before} after={after} />);
    expect(screen.getByLabelText("code_diff_viewer.split_view")).toBeInTheDocument();
    expect(screen.getByLabelText("code_diff_viewer.unified_view")).toBeInTheDocument();
  });

  it("renders Apply button when onApply is provided", () => {
    const onApply = vi.fn();
    render(<CodeDiffViewer before={before} after={after} onApply={onApply} />);
    const btn = screen.getByText("code_diff_viewer.apply");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onApply).toHaveBeenCalledOnce();
  });

  it("renders Reject button when onReject is provided", () => {
    const onReject = vi.fn();
    render(<CodeDiffViewer before={before} after={after} onReject={onReject} />);
    const btn = screen.getByText("code_diff_viewer.reject");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onReject).toHaveBeenCalledOnce();
  });

  it("does not render Apply/Reject when callbacks not provided", () => {
    render(<CodeDiffViewer before={before} after={after} />);
    expect(screen.queryByText("code_diff_viewer.apply")).not.toBeInTheDocument();
    expect(screen.queryByText("code_diff_viewer.reject")).not.toBeInTheDocument();
  });

  it("shows copy button", () => {
    render(<CodeDiffViewer before={before} after={after} />);
    expect(screen.getByLabelText("code_diff_viewer.copy_label")).toBeInTheDocument();
  });

  it("switches to unified view on button click", () => {
    render(<CodeDiffViewer before={before} after={after} />);
    const unifiedBtn = screen.getByLabelText("code_diff_viewer.unified_view");
    fireEvent.click(unifiedBtn);
    expect(unifiedBtn).toHaveAttribute("aria-pressed", "true");
  });
});
