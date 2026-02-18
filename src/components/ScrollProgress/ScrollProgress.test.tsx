import { render, screen } from "@testing-library/react";
import { ScrollProgress } from "./ScrollProgress";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("ScrollProgress", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should render correctly", () => {
        render(<ScrollProgress />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("should have correct progress value", () => {
        render(<ScrollProgress />);
        const progressbar = screen.getByRole("progressbar");
        expect(progressbar).toHaveAttribute("aria-valuenow", "0");
    });
});
