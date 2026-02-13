import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer, FooterSection, FooterBottom } from "./Footer";

describe("Footer", () => {
    it("renders footer and sections", () => {
        render(
            <Footer>
                <FooterSection title="Section 1">Content 1</FooterSection>
                <FooterBottom>Bottom Content</FooterBottom>
            </Footer>
        );
        expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // footer role
        expect(screen.getByText("Section 1")).toBeInTheDocument();
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        expect(screen.getByText("Bottom Content")).toBeInTheDocument();
    });

    it("applies border class", () => {
        render(<Footer bordered />);
        expect(screen.getByRole("contentinfo")).toHaveClass("wim-footer--bordered");
    });
});
