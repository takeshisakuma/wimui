import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { Pagination, PaginationPage } from "./Pagination";

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

    const trigger = screen.getByLabelText("Items per page");
    fireEvent.click(trigger);

    fireEvent.click(screen.getByText("20 items per page"));

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

  it("supports asChild on the root nav", () => {
    render(
      <Pagination asChild total={50} current={1} simple>
        <nav data-testid="pagination-nav" />
      </Pagination>,
    );
    const nav = screen.getByTestId("pagination-nav");
    expect(nav.tagName).toBe("NAV");
    expect(nav).toHaveAttribute("aria-label");
    expect(screen.getByText("1 / 5")).toBeInTheDocument();
  });

  it("exposes wim-pagination on the default root (T187)", () => {
    const { container } = render(<Pagination total={50} current={1} />);
    expect(container.querySelector(".wim-pagination")).not.toBeNull();
  });

  it("exposes wim-pagination in simple mode (T187)", () => {
    const { container } = render(<Pagination total={50} simple current={2} />);
    expect(container.querySelector(".wim-pagination")).not.toBeNull();
  });

  it("does not render a root when hideOnSinglePage hides the control (T187)", () => {
    const { container } = render(
      <Pagination total={5} pageSize={10} hideOnSinglePage />,
    );
    expect(container.firstChild).toBeNull();
    expect(container.querySelector(".wim-pagination")).toBeNull();
  });

  it("hides the mobile 1/2 with .item.mobileIndicator so .item display cannot override it (T188)", () => {
    const scss = readFileSync(
      "src/components/navigation/Pagination/pagination.module.scss",
      "utf8",
    );
    expect(scss).toMatch(/&\.mobileIndicator\s*\{[\s\S]*?display:\s*none/);
    expect(scss).toMatch(/&\.number[\s\S]*?container-down\(md\)[\s\S]*?display:\s*none/);
  });

  it("supports asChild on PaginationPage", () => {
    render(
      <PaginationPage asChild page={2} isActive>
        <a href="/page/2" data-testid="page-link">
          2
        </a>
      </PaginationPage>,
    );
    const link = screen.getByTestId("page-link");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("aria-current", "page");
  });
});
