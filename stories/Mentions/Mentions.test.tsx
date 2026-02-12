import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Mentions } from "./Mentions";

// Mock useTranslation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (str: string) => str,
    }),
}));


describe("Mentions", () => {
    const options = [
        { id: 1, display: "Alice" },
        { id: 2, display: "Bob" },
        { id: 3, display: "Charlie" },
    ];

    it("renders textarea", () => {
        render(<Mentions options={options} placeholder="Type @" />);
        expect(screen.getByPlaceholderText("Type @")).toBeInTheDocument();
    });

    it("shows options when trigger character is typed", () => {
        render(<Mentions options={options} />);
        const textarea = screen.getByRole("textbox");

        fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });

        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
        expect(screen.getByText("Charlie")).toBeInTheDocument();
    });

    it("filters options based on query", () => {
        render(<Mentions options={options} />);
        const textarea = screen.getByRole("textbox");

        fireEvent.change(textarea, { target: { value: "@A", selectionStart: 2 } });

        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.queryByText("Bob")).not.toBeInTheDocument();
    });

    it("inserts mention on click", () => {
        const handleSelect = vi.fn();
        render(<Mentions options={options} onSelect={handleSelect} />);
        const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

        fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
        fireEvent.click(screen.getByText("Alice"));

        expect(textarea.value).toBe("@Alice ");
        expect(handleSelect).toHaveBeenCalledWith(options[0]);
    });

    it("navigates and selects with keyboard", () => {
        render(<Mentions options={options} />);
        const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

        fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });

        // Down to Bob
        fireEvent.keyDown(textarea, { key: "ArrowDown" });
        fireEvent.keyDown(textarea, { key: "Enter" });

        expect(textarea.value).toBe("@Bob ");
    });
});
