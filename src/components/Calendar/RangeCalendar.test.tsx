import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RangeCalendar } from "./RangeCalendar";

describe("RangeCalendar", () => {
  it("renders calendar grid", () => {
    render(<RangeCalendar />);
    expect(screen.getByText("日")).toBeInTheDocument();
    expect(screen.getByText("土")).toBeInTheDocument();
  });

  it("selects a range when dates are clicked", () => {
    const handleChange = vi.fn();
    render(<RangeCalendar onChange={handleChange} />);

    // Find all days of the current month.
    // For simplicity, let's just find by text.
    // Note: multiple days might have the same number if they are from outside months.
    const days = screen
      .getAllByRole("button")
      .filter((b) => !b.classList.contains("wim-calendar-nav-btn"));

    // Click first day
    fireEvent.click(days[10]);
    expect(handleChange).toHaveBeenCalledWith([expect.any(Date), null]);

    // Click another day
    fireEvent.click(days[15]);
    expect(handleChange).toHaveBeenCalledWith([
      expect.any(Date),
      expect.any(Date),
    ]);
  });

  it("handles disabled state", () => {
    render(<RangeCalendar disabled />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => expect(btn).toBeDisabled());
  });
});
