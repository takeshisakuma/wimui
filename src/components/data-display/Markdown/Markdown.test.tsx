import { render, screen } from "@testing-library/react";
import { Markdown } from "./Markdown";
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import styles from "./markdown.module.scss";

describe("Markdown", () => {
  it("should render markdown correctly", () => {
    const content = "# Hello World\n\nThis is a [link](https://example.com)";
    render(<Markdown>{content}</Markdown>);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello World",
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });

  it("should render GFM correctly when enabled", () => {
    const content = "~~strikethrough~~";
    const { container } = render(<Markdown>{content}</Markdown>);
    expect(container.querySelector("del")).toBeInTheDocument();
  });

  it("should render without GFM when gfm=false", () => {
    const content = "Plain **bold** text";
    const { container } = render(<Markdown gfm={false}>{content}</Markdown>);
    expect(container.firstChild).toHaveClass(styles.root);
  });

  it("gives outside list markers a font-relative gutter (T182)", () => {
    const scss = readFileSync(
      "src/components/data-display/Markdown/markdown.module.scss",
      "utf8",
    );
    expect(scss).toMatch(/ul,\s*ol\s*\{[^}]*padding-inline-start:\s*1\.5em/s);
    expect(scss).not.toMatch(
      /ul,\s*ol\s*\{[^}]*padding-left:\s*var\(--wim-spacing-xl\)/s,
    );
  });
});
