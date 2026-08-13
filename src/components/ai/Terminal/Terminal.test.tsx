import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { render, screen, fireEvent } from "@testing-library/react";
import { Terminal, type TerminalLine } from "./Terminal";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const lines: TerminalLine[] = [
  { id: "1", type: "input", content: "npm run build" },
  { id: "2", type: "output", content: "Build complete." },
  { id: "3", type: "error", content: "Error: module not found" },
  { id: "4", type: "info", content: "Tip: run with --verbose" },
];

describe("Terminal", () => {
  it("renders lines", () => {
    render(<Terminal lines={lines} />);
    expect(screen.getByText("npm run build")).toBeInTheDocument();
    expect(screen.getByText("Build complete.")).toBeInTheDocument();
    expect(screen.getByText("Error: module not found")).toBeInTheDocument();
  });

  it("renders title in the title bar", () => {
    render(<Terminal lines={[]} title="my-app" />);
    expect(screen.getByText("my-app")).toBeInTheDocument();
  });

  it("shows prompt prefix for input lines", () => {
    render(<Terminal lines={[{ type: "input", content: "ls" }]} prompt=">" />);
    expect(screen.getByText(">")).toBeInTheDocument();
  });

  it("shows copy button by default", () => {
    render(<Terminal lines={lines} />);
    expect(screen.getByLabelText("Copy output")).toBeInTheDocument();
  });

  it("hides copy button when showCopy is false", () => {
    render(<Terminal lines={lines} showCopy={false} />);
    expect(screen.queryByLabelText("Copy output")).not.toBeInTheDocument();
  });

  it("shows clear button when onClear is provided", () => {
    const onClear = vi.fn();
    render(<Terminal lines={lines} onClear={onClear} />);
    const btn = screen.getByLabelText("Clear");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onClear).toHaveBeenCalledOnce();
  });

  it("does not wrap CLI tokens mid-word (T166)", () => {
    const scss = readFileSync("src/components/ai/Terminal/terminal.module.scss", "utf8");
    const content = scss.match(/\.content\s*\{([^}]+)\}/);
    expect(content?.[1]).toMatch(/white-space:\s*pre;/);
    expect(content?.[1]).not.toMatch(/pre-wrap/);
    expect(content?.[1]).not.toMatch(/word-break:\s*break-all/);
    expect(scss).toMatch(/\.body\s*\{[^}]*overflow:\s*auto/);
    expect(scss).toMatch(/\.line\s*\{[^}]*width:\s*max-content/);
  });

  it("renders ANSI-colored output without error", () => {
    const ansiLines: TerminalLine[] = [
      { type: "output", content: "\x1b[32mSuccess\x1b[0m: done" },
    ];
    render(<Terminal lines={ansiLines} />);
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText(": done")).toBeInTheDocument();
  });
});
