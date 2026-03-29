import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders children", () => {
    render(<Chip>Test Chip</Chip>);
    expect(screen.getByText("Test Chip")).toBeInTheDocument();
  });

  it("handles onClick", () => {
    const handleClick = vi.fn();
    render(<Chip onClick={handleClick}>Clickable</Chip>);

    fireEvent.click(screen.getByRole("button", { name: /Clickable/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("handles onDelete", () => {
    const handleDelete = vi.fn();
    render(<Chip onDelete={handleDelete}>Deletable</Chip>);

    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("renders avatar", () => {
    render(<Chip avatar={<span>A</span>}>With Avatar</Chip>);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("can be disabled", () => {
    const handleClick = vi.fn();
    render(<Chip onClick={handleClick} disabled>Disabled</Chip>);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();

    fireEvent.click(screen.getByRole("button", { name: "Disabled" }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("triggers onDelete with Enter key on delete button", () => {
    const handleDelete = vi.fn();
    render(<Chip onDelete={handleDelete}>Deletable</Chip>);
    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    fireEvent.keyDown(deleteButton, { key: "Enter" });
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("triggers onDelete with Space key on delete button", () => {
    const handleDelete = vi.fn();
    render(<Chip onDelete={handleDelete}>Deletable</Chip>);
    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    fireEvent.keyDown(deleteButton, { key: " " });
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("does not trigger onDelete for other keys", () => {
    const handleDelete = vi.fn();
    render(<Chip onDelete={handleDelete}>Deletable</Chip>);
    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    fireEvent.keyDown(deleteButton, { key: "Escape" });
    expect(handleDelete).not.toHaveBeenCalled();
  });
});
