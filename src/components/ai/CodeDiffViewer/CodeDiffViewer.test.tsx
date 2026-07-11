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
    expect(screen.getByLabelText("Split")).toBeInTheDocument();
    expect(screen.getByLabelText("Unified")).toBeInTheDocument();
  });

  it("renders Apply button when onApply is provided", () => {
    const onApply = vi.fn();
    render(<CodeDiffViewer before={before} after={after} onApply={onApply} />);
    const btn = screen.getByText("Apply");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onApply).toHaveBeenCalledOnce();
  });

  it("renders Reject button when onReject is provided", () => {
    const onReject = vi.fn();
    render(<CodeDiffViewer before={before} after={after} onReject={onReject} />);
    const btn = screen.getByText("Reject");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onReject).toHaveBeenCalledOnce();
  });

  it("does not render Apply/Reject when callbacks not provided", () => {
    render(<CodeDiffViewer before={before} after={after} />);
    expect(screen.queryByText("Apply")).not.toBeInTheDocument();
    expect(screen.queryByText("Reject")).not.toBeInTheDocument();
  });

  it("shows copy button", () => {
    render(<CodeDiffViewer before={before} after={after} />);
    expect(screen.getByLabelText("Copy")).toBeInTheDocument();
  });

  it("switches to unified view on button click", () => {
    render(<CodeDiffViewer before={before} after={after} />);
    const unifiedBtn = screen.getByLabelText("Unified");
    fireEvent.click(unifiedBtn);
    expect(unifiedBtn).toHaveAttribute("aria-pressed", "true");
  });
});
