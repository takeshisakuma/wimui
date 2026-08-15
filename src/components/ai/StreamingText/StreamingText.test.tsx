import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { StreamingText } from "./StreamingText";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("StreamingText", () => {
  it("renders markdown content as HTML", () => {
    render(<StreamingText content="**bold text**" />);
    expect(screen.getByText("bold text")).toBeInTheDocument();
  });

  it("shows a cursor when isStreaming is true", () => {
    const { container } = render(<StreamingText content="Typing..." isStreaming />);
    expect(container.querySelector("[aria-hidden='true']")).toBeInTheDocument();
  });

  it("hides the cursor when isStreaming is false", () => {
    const { container } = render(<StreamingText content="Done" />);
    expect(container.querySelector("[aria-hidden='true']")).not.toBeInTheDocument();
  });

  it("sets aria-live when streaming", () => {
    const { container } = render(<StreamingText content="..." isStreaming />);
    expect(container.firstChild).toHaveAttribute("aria-live", "polite");
  });

  it("does not set aria-live when not streaming", () => {
    const { container } = render(<StreamingText content="Done" />);
    expect(container.firstChild).not.toHaveAttribute("aria-live");
  });

  it("applies className to the root element", () => {
    const { container } = render(<StreamingText content="" className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("gives outside list markers a font-relative gutter (T184)", () => {
    const scss = readFileSync(
      "src/components/ai/StreamingText/streaming-text.module.scss",
      "utf8",
    );
    expect(scss).toMatch(/ul,\s*ol\s*\{[^}]*padding-inline-start:\s*1\.5em/s);
    expect(scss).not.toMatch(
      /ul,\s*ol\s*\{[^}]*padding-left:\s*var\(--wim-spacing-xl\)/s,
    );
  });
});
