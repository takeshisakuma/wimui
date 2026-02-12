import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ScrollArea } from "./ScrollArea";

// Mock i18next
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe("ScrollArea", () => {
    it("renders text and content", () => {
        render(<ScrollArea text="Scrolling Content" />);
        expect(screen.getByText("Scrolling Content")).toBeInTheDocument();
    });

    it("applies maxHeight style", () => {
        render(<ScrollArea maxHeight="100px">Content</ScrollArea>);
        const element = screen.getByText("Content");
        expect(element.style.maxHeight).toBe("100px");
    });

    it("applies overflow styles based on scrollAxis", () => {
        const { rerender } = render(<ScrollArea scrollAxis="x">Content</ScrollArea>);
        let element = screen.getByText("Content");
        expect(element.style.overflowX).toBe("auto");
        expect(element.style.overflowY).toBe("hidden");

        rerender(<ScrollArea scrollAxis="y">Content</ScrollArea>);
        expect(element.style.overflowX).toBe("hidden");
        expect(element.style.overflowY).toBe("auto");

        rerender(<ScrollArea scrollAxis="both">Content</ScrollArea>);
        expect(element.style.overflowX).toBe("auto");
        expect(element.style.overflowY).toBe("auto");
    });
});
