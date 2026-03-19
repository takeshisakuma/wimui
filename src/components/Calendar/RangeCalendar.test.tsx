import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RangeCalendar } from "./RangeCalendar";

describe("RangeCalendar", () => {
  it("renders calendar grid", () => {
    render(<RangeCalendar />);
    expect(screen.getByText(/Sun/i)).toBeInTheDocument();
    expect(screen.getByText(/Sat/i)).toBeInTheDocument();
  });

  it("selects a range when dates are clicked", () => {
    const handleChange = vi.fn();
    render(<RangeCalendar onChange={handleChange} />);

    // Find all day cells (role="gridcell"). Nav buttons have role="button", not "gridcell".
    const days = screen.getAllByRole("gridcell");

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

  it("renders with controlled value", () => {
    const start = new Date(2024, 0, 10);
    const end = new Date(2024, 0, 20);
    render(<RangeCalendar value={[start, end]} />);
    expect(screen.getByText(/Sun/i)).toBeInTheDocument();
  });

  it("renders with defaultValue", () => {
    const start = new Date(2024, 0, 5);
    const end = new Date(2024, 0, 15);
    render(<RangeCalendar defaultValue={[start, end]} />);
    expect(screen.getByText(/Sun/i)).toBeInTheDocument();
  });
});
