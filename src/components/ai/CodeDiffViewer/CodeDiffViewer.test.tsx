import { describe, it, expect, vi } from "vitest";
import type React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { CodeDiffViewer } from "./CodeDiffViewer";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const before = `function greet() {\n  return "hello";\n}`;
const after = `function greet(name: string) {\n  return \`hello \${name}\`;\n}`;

// T375: 器の幅で切り替える値は、ブレイクポイントのトークン（BREAKPOINTS）から読む。
// ResizeObserver を差し替え、器の幅を 1 つ渡して、切り替わる境目の前後を確かめる。
const renderAtWidth = (width: number, ui: React.ReactElement) => {
  let callback: ResizeObserverCallback | undefined;
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(cb: ResizeObserverCallback) {
        callback = cb;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  try {
    const result = render(ui);
    act(() => {
      callback?.([{ contentRect: { width } } as ResizeObserverEntry], {} as ResizeObserver);
    });
    return result;
  } finally {
    vi.unstubAllGlobals();
  }
};

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

  // T360: ファイル名に小文字化を当てていて、`Button.tsx` が `button.tsx` と見えていた。
  // 小文字にするのは言語名のときだけ（CSS Modules は vitest でクラス名がそのまま返る）
  it("does not lowercase a filename, only a language name", () => {
    const { unmount } = render(<CodeDiffViewer before={before} after={after} filename="Button.tsx" language="tsx" />);
    expect(screen.getByText("Button.tsx")).not.toHaveClass("language");
    unmount();
    render(<CodeDiffViewer before={before} after={after} language="TypeScript" />);
    expect(screen.getByText("TypeScript")).toHaveClass("language");
  });

  // 左右並べ ↔ 1 列の境目は md（768px）。640〜767px の器は 1 列になる
  it.each([
    [767, "Unified"],
    [768, "Split"],
  ])("器の幅 %spx では %s の表示になる", (width, label) => {
    renderAtWidth(width, <CodeDiffViewer before={before} after={after} />);
    expect(screen.getByLabelText(label)).toHaveAttribute("aria-pressed", "true");
  });
});
