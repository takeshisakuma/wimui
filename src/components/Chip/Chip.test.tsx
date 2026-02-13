import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Chip } from "./Chip";

// Mock translation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe("Chip", () => {
    it("renders label", () => {
        render(<Chip label="Test Chip" />);
        expect(screen.getByText("Test Chip")).toBeInTheDocument();
    });

    it("handles onClick", () => {
        const handleClick = vi.fn();
        render(<Chip label="Clickable" onClick={handleClick} />);

        fireEvent.click(screen.getByRole("button", { name: "Clickable" }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("handles onDelete", () => {
        const handleDelete = vi.fn();
        render(<Chip label="Deletable" onDelete={handleDelete} />);

        const deleteButton = screen.getByRole("button", { name: "Delete" });
        fireEvent.click(deleteButton);
        expect(handleDelete).toHaveBeenCalledTimes(1);
    });

    it("renders avatar", () => {
        render(<Chip label="With Avatar" avatar={<span>A</span>} />);
        expect(screen.getByText("A")).toBeInTheDocument();
    });

    it("can be disabled", () => {
        const handleClick = vi.fn();
        render(<Chip label="Disabled" onClick={handleClick} disabled />);
        expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();

        fireEvent.click(screen.getByRole("button", { name: "Disabled" }));
        expect(handleClick).not.toHaveBeenCalled();
    });
});
