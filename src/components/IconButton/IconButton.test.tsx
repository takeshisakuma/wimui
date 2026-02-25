import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("renders with icon and aria-label", () => {
    render(<IconButton iconName="SearchIcon" aria-label="Search" />);
    const button = screen.getByLabelText("Search");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("wim-button--icon-only");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <IconButton
        iconName="SearchIcon"
        aria-label="Add"
        onClick={handleClick}
      />,
    );
    fireEvent.click(screen.getByLabelText("Add"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <IconButton iconName="SearchIcon" aria-label="Add" state="disabled" />,
    );
    expect(screen.getByLabelText("Add")).toBeDisabled();
  });
});
