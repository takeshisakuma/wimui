import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Quote } from "./Quote";

// Mock i18next
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe("Quote", () => {
    it("renders content and cite", () => {
        render(<Quote content="Wise words" cite="Author" />);
        expect(screen.getByText("Wise words")).toBeInTheDocument();
        expect(screen.getByText("Author")).toBeInTheDocument();
    });

    it("applies border class by default", () => {
        const { container } = render(<Quote content="Test" />);
        expect(container.firstChild).toHaveClass("wim-quote--border");
    });
});
