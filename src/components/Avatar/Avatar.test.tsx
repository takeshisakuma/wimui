import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
    it("renders image when src provided", () => {
        render(<Avatar src="image.jpg" alt="User Avatar" />);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "image.jpg");
        expect(img).toHaveAttribute("alt", "User Avatar");
    });

    it("renders initials when no src", () => {
        const { container } = render(<Avatar initials="TS" />);
        expect(screen.getByText("TS")).toBeInTheDocument();
        expect(container.querySelector(".wim-avatar__initials")).toBeInTheDocument();
    });

    it("renders fallback icon when no src and no initials", () => {
        const { container } = render(<Avatar />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("applies size and shape classes", () => {
        const { container } = render(<Avatar size="lg" shape="rounded" />);
        expect(container.firstChild).toHaveClass("wim-avatar--lg");
        expect(container.firstChild).toHaveClass("wim-avatar--rounded");
    });


});
