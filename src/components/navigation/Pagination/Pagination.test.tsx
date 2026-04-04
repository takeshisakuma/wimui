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
    render(
      <Pagination
        total={100}
        current={1}
        showQuickJumper
        onChange={handleChange}
      />,
    );

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
      />,
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

  it("renders ellipsis on both sides (current in middle)", () => {
    render(<Pagination total={200} current={10} siblingCount={1} />);
    // Should show both left and right ellipsis
    const ellipses = screen.getAllByText("...");
    expect(ellipses.length).toBeGreaterThanOrEqual(2);
  });

  it("renders ellipsis on left side only (current near last page)", () => {
    render(<Pagination total={200} current={20} siblingCount={1} />);
    // Current near end: left ellipsis only
    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("returns null when hideOnSinglePage and only 1 page", () => {
    const { container } = render(<Pagination total={5} pageSize={10} hideOnSinglePage />);
    expect(container.firstChild).toBeNull();
  });

  it("ignores invalid page change (page out of range)", () => {
    const onChange = vi.fn();
    render(<Pagination total={50} current={1} onChange={onChange} />);
    // Clicking disabled previous button should not call onChange
    fireEvent.click(screen.getByLabelText("Go to previous page"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders showTotal function", () => {
    render(
      <Pagination
        total={100}
        current={1}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
      />,
    );
    expect(screen.getByText("1-10 of 100")).toBeInTheDocument();
  });
});
