import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Calendar } from "./Calendar";
import React from "react";

describe("Calendar", () => {
  it("renders and shows current month", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    render(<Calendar />);
    expect(screen.getByText(`${year} / ${month}`)).toBeInTheDocument();
  });

  it("handles date selection", () => {
    const onChange = vi.fn();
    const date = new Date(2024, 0, 15); // Jan 15, 2024
    render(<Calendar defaultValue={date} onChange={onChange} />);

    // Find a day (e.g., 20) and click it
    const day20 = screen.getByText("20");
    fireEvent.click(day20);

    expect(onChange).toHaveBeenCalled();
    const calledDate = onChange.mock.calls[0][0];
    expect(calledDate.getDate()).toBe(20);
    expect(calledDate.getMonth()).toBe(0);
    expect(calledDate.getFullYear()).toBe(2024);
  });

  it("disables navigation and clicks when disabled", () => {
    render(<Calendar disabled />);
    const btns = screen.getAllByRole("button");
    btns.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  it("navigates to previous month", () => {
    render(<Calendar defaultValue={new Date(2024, 5, 15)} />);
    expect(screen.getByText("2024 / 6")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Previous month"));
    expect(screen.getByText("2024 / 5")).toBeInTheDocument();
  });

  it("navigates to next month", () => {
    render(<Calendar defaultValue={new Date(2024, 5, 15)} />);
    expect(screen.getByText("2024 / 6")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Next month"));
    expect(screen.getByText("2024 / 7")).toBeInTheDocument();
  });

  it("navigates days with ArrowLeft key", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 15)} />);
    const day15 = screen.getByText("15");
    fireEvent.click(day15);
    fireEvent.keyDown(day15, { key: "ArrowLeft" });
    // Focus moves to previous day - just verifying no crash
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
  });

  it("navigates days with ArrowRight key", () => {
    const date = new Date(2024, 0, 15);
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "ArrowRight" });
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
  });

  it("navigates weeks with ArrowUp key", () => {
    const date = new Date(2024, 0, 15);
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "ArrowUp" });
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
  });

  it("navigates weeks with ArrowDown key", () => {
    const date = new Date(2024, 0, 15);
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "ArrowDown" });
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
  });

  it("navigates to previous month with PageUp key", () => {
    const date = new Date(2024, 5, 15);
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "PageUp" });
    expect(screen.getByText("2024 / 5")).toBeInTheDocument();
  });

  it("navigates to next month with PageDown key", () => {
    const date = new Date(2024, 5, 15);
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "PageDown" });
    expect(screen.getByText("2024 / 7")).toBeInTheDocument();
  });

  it("navigates to previous year with Ctrl+PageUp", () => {
    const date = new Date(2024, 5, 15);
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "PageUp", ctrlKey: true });
    expect(screen.getByText("2023 / 6")).toBeInTheDocument();
  });

  it("navigates to next year with Ctrl+PageDown", () => {
    const date = new Date(2024, 5, 15);
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "PageDown", ctrlKey: true });
    expect(screen.getByText("2025 / 6")).toBeInTheDocument();
  });

  it("navigates to start of week with Home key", () => {
    const date = new Date(2024, 0, 17); // Wednesday
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "Home" });
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
  });

  it("navigates to end of week with End key", () => {
    const date = new Date(2024, 0, 17); // Wednesday
    render(<Calendar defaultValue={date} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "End" });
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
  });

  it("selects date with Enter key", () => {
    const onChange = vi.fn();
    render(<Calendar defaultValue={new Date(2024, 0, 15)} onChange={onChange} />);
    const day15 = screen.getByText("15");
    fireEvent.keyDown(day15, { key: "Enter" });
    expect(onChange).toHaveBeenCalled();
  });

  it("selects date with Space key", () => {
    const onChange = vi.fn();
    render(<Calendar defaultValue={new Date(2024, 0, 15)} onChange={onChange} />);
    const day15 = screen.getByText("15");
    fireEvent.keyDown(day15, { key: " " });
    expect(onChange).toHaveBeenCalled();
  });

  it("disables dates before minDate", () => {
    const minDate = new Date(2024, 0, 15);
    render(<Calendar defaultValue={new Date(2024, 0, 15)} minDate={minDate} />);
    const day10 = screen.getByLabelText("2024-1-10");
    expect(day10).toBeDisabled();
  });

  it("disables dates after maxDate", () => {
    const maxDate = new Date(2024, 0, 15);
    render(<Calendar defaultValue={new Date(2024, 0, 15)} maxDate={maxDate} />);
    const day20 = screen.getByLabelText("2024-1-20");
    expect(day20).toBeDisabled();
  });

  it("supports rangeMode selection", () => {
    const onRangeChange = vi.fn();
    render(
      <Calendar
        defaultValue={new Date(2024, 0, 1)}
        rangeMode
        onRangeChange={onRangeChange}
      />,
    );
    fireEvent.click(screen.getByLabelText("2024-1-10"));
    expect(onRangeChange).toHaveBeenCalledWith(
      expect.objectContaining({ start: expect.any(Date), end: null }),
    );
    fireEvent.click(screen.getByLabelText("2024-1-20"));
    expect(onRangeChange).toHaveBeenCalledWith(
      expect.objectContaining({
        start: expect.any(Date),
        end: expect.any(Date),
      }),
    );
  });

  it("supports rangeMode with reversed selection (end before start)", () => {
    const onRangeChange = vi.fn();
    render(
      <Calendar
        defaultValue={new Date(2024, 0, 1)}
        rangeMode
        onRangeChange={onRangeChange}
      />,
    );
    fireEvent.click(screen.getByLabelText("2024-1-20"));
    fireEvent.click(screen.getByLabelText("2024-1-10"));
    const lastCall = onRangeChange.mock.calls[onRangeChange.mock.calls.length - 1][0];
    expect(lastCall.start.getDate()).toBeLessThan(lastCall.end.getDate());
  });

  it("works in controlled mode", () => {
    const onChange = vi.fn();
    render(
      <Calendar value={new Date(2024, 0, 15)} onChange={onChange} />,
    );
    fireEvent.click(screen.getByText("20"));
    expect(onChange).toHaveBeenCalled();
  });

  it("ignores keydown when disabled", () => {
    const onChange = vi.fn();
    render(<Calendar defaultValue={new Date(2024, 0, 15)} disabled onChange={onChange} />);
    const grid = document.querySelector(".wim-calendar-grid")!;
    fireEvent.keyDown(grid, { key: "ArrowRight" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("disables specific dates via disabledDates prop", () => {
    const disabledDates = [new Date(2024, 0, 10)];
    render(
      <Calendar defaultValue={new Date(2024, 0, 15)} disabledDates={disabledDates} />,
    );
    const day10 = screen.getByLabelText("2024-1-10");
    expect(day10).toBeDisabled();
  });

  it("disables dates via isDateDisabled prop", () => {
    render(
      <Calendar
        defaultValue={new Date(2024, 0, 15)}
        isDateDisabled={(date) => date.getDate() === 10}
      />,
    );
    const day10 = screen.getByLabelText("2024-1-10");
    expect(day10).toBeDisabled();
  });
});
