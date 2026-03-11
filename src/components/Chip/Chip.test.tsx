import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders label (deprecated prop)", () => {
    render(<Chip label="Test Chip" />);
    // "Test Chip" might be passed to t(). If t returns the key, it works.
    expect(screen.getByText("Test Chip")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<Chip>Child Content</Chip>);
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("children takes priority over label", () => {
    render(<Chip label="Old">New Content</Chip>);
    expect(screen.getByText("New Content")).toBeInTheDocument();
    expect(screen.queryByText("Old")).not.toBeInTheDocument();
  });

  it("handles onClick", () => {
    const handleClick = vi.fn();
    render(<Chip label="Clickable" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button", { name: /Clickable/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("handles onDelete", () => {
    const handleDelete = vi.fn();
    render(<Chip label="Deletable" onDelete={handleDelete} />);

    const deleteButton = screen.getByRole("button", { name: /Delete/i });
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
