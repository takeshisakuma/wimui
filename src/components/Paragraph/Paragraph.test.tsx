import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Paragraph } from "./Paragraph";

// Mock useTranslation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (str: string) => str,
    }),
}));

describe("Paragraph", () => {
    it("renders content", () => {
        render(<Paragraph content="Hello World" />);
        expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("applies correct size class", () => {
        const { container } = render(<Paragraph content="Test" size="large" />);
        expect(container.firstChild).toHaveClass("wim-paragraph--lg");
    });

    it("applies bold class", () => {
        const { container } = render(<Paragraph content="Test" weight="bold" />);
        expect(container.firstChild).toHaveClass("wim-paragraph--bold");
    });

    it("applies italic class", () => {
        const { container } = render(<Paragraph content="Test" fontStyle="italic" />);
        expect(container.firstChild).toHaveClass("wim-paragraph--italic");
    });

    it("applies decoration class to inner span", () => {
        render(<Paragraph content="Test" decoration="underline" />);
        const span = screen.getByText("Test");
        expect(span).toHaveClass("wim-paragraph--underline");
    });

    it("applies color class", () => {
        const { container } = render(<Paragraph content="Test" color="error" />);
        expect(container.firstChild).toHaveClass("wim-paragraph--error");
    });

    it("applies custom className", () => {
        const { container } = render(<Paragraph content="Test" className="custom-p" />);
        expect(container.firstChild).toHaveClass("custom-p");
    });
});
