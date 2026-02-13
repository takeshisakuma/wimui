import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Progress } from "./Progress";

describe("Progress", () => {
    it("renders with percentage width", () => {
        render(<Progress value={50} max={100} />);
        const progressBar = document.querySelector(".wim-progress__bar") as HTMLElement;
        expect(progressBar.style.width).toBe("50%");
    });

    it("renders label and percentage text", () => {
        render(<Progress value={75} label="Loading" showValue />);
        expect(screen.getByText("Loading")).toBeInTheDocument();
        expect(screen.getByText("75%")).toBeInTheDocument();
    });

    it("renders indeterminate state", () => {
        render(<Progress indeterminate />);
        const progress = screen.getByRole("progressbar");
        expect(progress).toHaveClass("wim-progress--indeterminate");
        const progressBar = document.querySelector(".wim-progress__bar") as HTMLElement;
        expect(progressBar.style.width).toBe("100%");
    });
});
