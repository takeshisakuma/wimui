import { render, screen } from "@testing-library/react";
import { Markdown } from "./Markdown";
import { describe, it, expect } from "vitest";

describe("Markdown", () => {
    it("should render markdown correctly", () => {
        const content = "# Hello World\n\nThis is a [link](https://example.com)";
        render(<Markdown>{content}</Markdown>);

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello World");
        expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
    });

    it("should render GFM correctly when enabled", () => {
        const content = "~~strikethrough~~";
        const { container } = render(<Markdown>{content}</Markdown>);
        expect(container.querySelector("del")).toBeInTheDocument();
    });
});
