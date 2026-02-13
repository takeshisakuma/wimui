import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
    it("renders page numbers correctly", () => {
        render(<Pagination total={50} pageSize={10} current={1} />);
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.queryByText("6")).not.toBeInTheDocument();
    });

    it("calls onChange when a page number is clicked", () => {
        const handleChange = vi.fn();
        render(<Pagination total={50} current={1} onChange={handleChange} />);

        fireEvent.click(screen.getByText("2"));
        expect(handleChange).toHaveBeenCalledWith(2, 10);
    });

    it("handles next and previous buttons", () => {
        const handleChange = vi.fn();
        render(<Pagination total={50} current={3} onChange={handleChange} />);

        fireEvent.click(screen.getByLabelText("Go to next page"));
        expect(handleChange).toHaveBeenCalledWith(4, 10);

        fireEvent.click(screen.getByLabelText("Go to previous page"));
        expect(handleChange).toHaveBeenCalledWith(2, 10);
    });

    it("disables previous button on first page", () => {
        render(<Pagination total={50} current={1} />);
        expect(screen.getByLabelText("Go to previous page")).toBeDisabled();
    });

    it("disables next button on last page", () => {
        render(<Pagination total={50} current={5} />);
        expect(screen.getByLabelText("Go to next page")).toBeDisabled();
    });

    it("renders ellipsis for many pages", () => {
        render(<Pagination total={100} current={1} siblingCount={1} />);
        expect(screen.getByText("...")).toBeInTheDocument();
        expect(screen.getByText("10")).toBeInTheDocument();
    });

    it("handles quick jumper", () => {
        const handleChange = vi.fn();
        render(<Pagination total={100} current={1} showQuickJumper onChange={handleChange} />);

        const jumpInput = screen.getByLabelText("Jump to page");
        fireEvent.change(jumpInput, { target: { value: "5" } });
        fireEvent.keyDown(jumpInput, { key: "Enter" });

        expect(handleChange).toHaveBeenCalledWith(5, 10);
    });

    it("handles page size changer", () => {
        const handlePageSizeChange = vi.fn();
        const handleChange = vi.fn();
        render(
            <Pagination
                total={100}
                showSizeChanger
                onPageSizeChange={handlePageSizeChange}
                onChange={handleChange}
            />
        );

        const select = screen.getByLabelText("Items per page");
        fireEvent.change(select, { target: { value: "20" } });

        expect(handlePageSizeChange).toHaveBeenCalledWith(20);
        expect(handleChange).toHaveBeenCalledWith(1, 20); // Reset to page 1
    });

    it("renders simple mode", () => {
        render(<Pagination total={50} simple current={2} />);
        expect(screen.getByText("2 / 5")).toBeInTheDocument();
    });
});
