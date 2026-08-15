import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { MarkdownRenderer } from "./MarkdownRenderer";
import titleStyles from "../../typography/Title/title.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("MarkdownRenderer", () => {
  it("renders plain text content", () => {
    render(<MarkdownRenderer content="Hello world" />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders h1 heading", () => {
    render(<MarkdownRenderer content="# Title" />);
    expect(screen.getByRole("heading", { level: 1, name: "Title" })).toBeInTheDocument();
  });

  it("renders h2 heading", () => {
    render(<MarkdownRenderer content="## Subtitle" />);
    expect(screen.getByRole("heading", { level: 2, name: "Subtitle" })).toBeInTheDocument();
  });

  it("renders h3 heading", () => {
    render(<MarkdownRenderer content="### Section" />);
    expect(screen.getByRole("heading", { level: 3, name: "Section" })).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(<MarkdownRenderer content="[Click here](https://example.com)" />);
    const link = screen.getByRole("link", { name: "Click here" });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("renders an unordered list", () => {
    render(<MarkdownRenderer content={"- Item A\n- Item B"} />);
    expect(screen.getByText("Item A")).toBeInTheDocument();
    expect(screen.getByText("Item B")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renders an ordered list", () => {
    render(<MarkdownRenderer content={"1. First\n2. Second"} />);
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("renders a blockquote", () => {
    render(<MarkdownRenderer content="> A wise quote" />);
    expect(screen.getByText("A wise quote")).toBeInTheDocument();
    expect(screen.getByRole("blockquote")).toBeInTheDocument();
  });

  it("renders a fenced code block", () => {
    const md = "```javascript\nconst x = 1;\n```";
    render(<MarkdownRenderer content={md} />);
    expect(screen.getByText("const x = 1;")).toBeInTheDocument();
  });

  it("renders inline code", () => {
    render(<MarkdownRenderer content="Use `npm install`" />);
    expect(screen.getByText("npm install")).toBeInTheDocument();
  });

  it("renders a table", () => {
    const md = "| Col A | Col B |\n|---|---|\n| 1 | 2 |";
    render(<MarkdownRenderer content={md} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Col A")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("applies custom className to root element", () => {
    const { container } = render(
      <MarkdownRenderer content="text" className="custom-md" />,
    );
    expect(container.firstChild).toHaveClass("custom-md");
  });

  // T160: 既定は従来の絶対写像。ここが動くと既存ストーリーの VRT が全部動く。
  it("maps default headings to the Title size ladder starting at 2xl", () => {
    const { rerender } = render(<MarkdownRenderer content="# One" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveClass(titleStyles.xl2);
    rerender(<MarkdownRenderer content="## Two" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass(titleStyles.xl);
    rerender(<MarkdownRenderer content="### Three" />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveClass(titleStyles.lg);
    rerender(<MarkdownRenderer content="#### Four" />);
    expect(screen.getByRole("heading", { level: 4 })).toHaveClass(titleStyles.md);
  });

  it("steps heading sizes down from baseLevel without changing the HTML tag", () => {
    render(
      <MarkdownRenderer
        content={"# One\n## Two\n### Three\n#### Four"}
        baseLevel="md"
      />,
    );
    expect(screen.getByRole("heading", { level: 1, name: "One" })).toHaveClass(titleStyles.md);
    expect(screen.getByRole("heading", { level: 2, name: "Two" })).toHaveClass(titleStyles.sm);
    expect(screen.getByRole("heading", { level: 3, name: "Three" })).toHaveClass(titleStyles.xs);
    expect(screen.getByRole("heading", { level: 4, name: "Four" })).toHaveClass(titleStyles.xs);
  });

  it("clamps stepped sizes at xs", () => {
    render(<MarkdownRenderer content={"# One\n## Two"} baseLevel="xs" />);
    expect(screen.getByRole("heading", { level: 1, name: "One" })).toHaveClass(titleStyles.xs);
    expect(screen.getByRole("heading", { level: 2, name: "Two" })).toHaveClass(titleStyles.xs);
  });

  it("gives outside list markers a font-relative gutter (T184)", () => {
    const scss = readFileSync(
      "src/components/ai/MarkdownRenderer/markdown-renderer.module.scss",
      "utf8",
    );
    expect(scss).toMatch(/\.list\s*\{[^}]*padding-inline-start:\s*1\.5em/s);
    expect(scss).not.toMatch(
      /\.list\s*\{[^}]*padding-left:\s*var\(--wim-spacing-xl\)/s,
    );
  });
});
