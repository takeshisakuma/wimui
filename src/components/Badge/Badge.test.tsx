import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Badge } from "./Badge";

// Mock useTranslation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (str: string) => str,
    }),
}));

describe("Badge", () => {
    it("renders content", () => {
        render(<Badge content="New" />);
        expect(screen.getByText("New")).toBeInTheDocument();
    });

    it("renders icon", () => {
        render(<Badge icon={<span data-testid="icon">Icon</span>} />);
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("applies variant and color classes", () => {
        const { container } = render(<Badge content="Test" color="error" variant="outline" />);
        const span = container.firstChild;
        expect(span).toHaveClass("wim-badge--error");
        expect(span).toHaveClass("wim-badge--outline");
    });

    it("applies size class", () => {
        const { container } = render(<Badge content="Small" size="small" />);
        expect(container.firstChild).toHaveClass("wim-badge--sm");
    });

    it("applies icon-only class when no content", () => {
        const { container } = render(<Badge icon={<span>Icon</span>} />);
        expect(container.firstChild).toHaveClass("wim-badge--icon-only");
    });
});
