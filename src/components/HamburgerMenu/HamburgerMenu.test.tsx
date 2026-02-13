import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HamburgerMenu } from "./HamburgerMenu";

describe("HamburgerMenu", () => {
    it("renders correctly", () => {
        render(<HamburgerMenu />);
        expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument();
    });

    it("toggles state class", () => {
        render(<HamburgerMenu isOpen />);
        const button = screen.getByRole("button", { name: "Close menu" });
        expect(button).toHaveClass("wim-hamburger-menu--open");
    });

    it("handles click", () => {
        const handleClick = vi.fn();
        render(<HamburgerMenu onClick={handleClick} />);
        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalled();
    });
});
