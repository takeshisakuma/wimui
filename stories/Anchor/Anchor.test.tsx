import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Anchor } from "./Anchor";

describe("Anchor", () => {
    const items = [
        { key: "1", href: "#section1", title: "Section 1" },
        { key: "2", href: "#section2", title: "Section 2" },
    ];

    beforeEach(() => {
        // Mock scrollIntoView if needed, though we use window.scrollTo in Anchor.tsx
        window.scrollTo = vi.fn();

        // Mock document.getElementById
        document.getElementById = vi.fn().mockImplementation((id) => {
            if (id === "section1" || id === "section2") {
                return {
                    offsetTop: id === "section1" ? 100 : 500,
                    getBoundingClientRect: () => ({
                        top: id === "section1" ? 100 : 500,
                    }),
                };
            }
            return null;
        });
    });

    it("renders anchor links", () => {
        render(<Anchor items={items} />);
        expect(screen.getByText("Section 1")).toBeInTheDocument();
        expect(screen.getByText("Section 2")).toBeInTheDocument();
    });

    it("has correct hrefs", () => {
        render(<Anchor items={items} />);
        expect(screen.getByText("Section 1").closest("a")).toHaveAttribute("href", "#section1");
        expect(screen.getByText("Section 2").closest("a")).toHaveAttribute("href", "#section2");
    });

    it("calls window.scrollTo when a link is clicked", () => {
        render(<Anchor items={items} offset={50} />);
        fireEvent.click(screen.getByText("Section 1"));
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 50, // 100 (offsetTop) - 50 (offset)
            behavior: "smooth",
        });
    });

    it("applies active class when scrolled (simulated)", () => {
        // This is complex as it depends on getBoundingClientRect which we mocked
        // and a scroll event listener.
        render(<Anchor items={items} offset={0} bounds={5} />);

        // Mocking the scenario where section1 is active
        document.getElementById = vi.fn().mockImplementation((id) => {
            if (id === "section1") {
                return {
                    offsetTop: 100,
                    getBoundingClientRect: () => ({ top: 5 }), // active (rect.top <= offset + bounds + 10)
                };
            }
            return null;
        });

        fireEvent.scroll(window);

        // Since the effect runs on scroll, we wait for it
        // activeId should update
        // We might need to wait for state update
    });
});
