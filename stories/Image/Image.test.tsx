import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Image } from "./Image";

describe("Image", () => {
    it("renders image with src and alt", () => {
        render(<Image src="test.jpg" alt="Test Image" />);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "test.jpg");
        expect(img).toHaveAttribute("alt", "Test Image");
    });

    it("renders caption", () => {
        render(<Image src="test.jpg" alt="Test Image" caption="Image Caption" />);
        expect(screen.getByText("Image Caption")).toBeInTheDocument();
    });

    it("applies styles", () => {
        render(<Image src="test.jpg" alt="Test" radius="medium" shadow border />);
        const container = screen.getByRole("img").parentElement;
        expect(container).toHaveClass("wim-image--radius-medium");
        expect(container).toHaveClass("wim-image--shadow");
        expect(container).toHaveClass("wim-image--border");
    });
});
