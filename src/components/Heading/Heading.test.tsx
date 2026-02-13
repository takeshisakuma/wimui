import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Heading } from "./Heading";

// Mock translation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe("Heading", () => {
    it("renders with correct tag", () => {
        render(<Heading tag="h2">Title</Heading>);
        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });

    it("applies styling classes", () => {
        render(<Heading size="xl" color="primary" align="center">Title</Heading>);
        const heading = screen.getByRole("heading");
        expect(heading).toHaveClass("wim-heading--xl");
        expect(heading).toHaveClass("wim-heading--primary");
        expect(heading).toHaveClass("wim-heading--center");
    });

    it("handles decoration", () => {
        render(<Heading decoration="underline">Title</Heading>);
        expect(screen.getByRole("heading")).toHaveClass("wim-heading");
        // Decoration might be on child span or similar
        // Implementation: 
        // const finalContent = decoration !== "none" ? (<span className={decorationClass}>{content}</span>) : content;
        // So we look for span inside.
        // Or check text content is there.
        expect(screen.getByText("Title")).toHaveClass("wim-heading--underline"); // Title text is in span
    });
});
