import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Calendar } from "./Calendar";
import React from "react";
import styles from "./calendar.module.scss";

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

  // T304: 以前のキーのテストは「落ちないこと」しか見ておらず、矢印は実際には何もしていなかった。
  // フォーカスのある日（data-date）で確かめる。2024-01-15 は月曜、日曜始まりの週は 14〜20 日。
  const focusedDay = () => document.activeElement?.getAttribute("data-date");
  const press = (key: string, init: Record<string, unknown> = {}) =>
    fireEvent.keyDown(document.activeElement as HTMLElement, { key, ...init });
  const focusDay = (label: string) => act(() => screen.getByLabelText(label).focus());

  it("keeps exactly one day in the tab order (the selected day)", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 15)} />);
    const stops = screen.getAllByRole("gridcell").filter((cell) => cell.tabIndex === 0);
    expect(stops).toHaveLength(1);
    expect(stops[0]).toHaveAttribute("data-date", "2024-1-15");
  });

  it("moves focus by a day with ArrowLeft / ArrowRight", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 15)} />);
    focusDay("2024-1-15");
    press("ArrowLeft");
    expect(focusedDay()).toBe("2024-1-14");
    press("ArrowRight");
    press("ArrowRight");
    expect(focusedDay()).toBe("2024-1-16");
    // 停止点も付いてくる
    expect(screen.getAllByRole("gridcell").filter((cell) => cell.tabIndex === 0)).toHaveLength(1);
    expect(document.activeElement).toHaveAttribute("tabindex", "0");
  });

  it("moves focus by a week with ArrowUp / ArrowDown", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 15)} />);
    focusDay("2024-1-15");
    press("ArrowUp");
    expect(focusedDay()).toBe("2024-1-8");
    press("ArrowDown");
    press("ArrowDown");
    expect(focusedDay()).toBe("2024-1-22");
  });

  it("crosses into the next month and turns the page", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 31)} />);
    focusDay("2024-1-31");
    press("ArrowRight");
    expect(screen.getByText("2024 / 2")).toBeInTheDocument();
    expect(focusedDay()).toBe("2024-2-1");
    press("ArrowLeft");
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
    expect(focusedDay()).toBe("2024-1-31");
  });

  it("moves to the ends of the week with Home / End", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 17)} />);
    focusDay("2024-1-17");
    press("Home");
    expect(focusedDay()).toBe("2024-1-14");
    press("End");
    expect(focusedDay()).toBe("2024-1-20");
  });

  it("counts the week from Monday when weekStartsOn is 1", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 17)} weekStartsOn={1} />);
    focusDay("2024-1-17");
    press("Home");
    expect(focusedDay()).toBe("2024-1-15");
    press("End");
    expect(focusedDay()).toBe("2024-1-21");
  });

  it("skips disabled days in the direction of travel", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 15)} disabledDates={[new Date(2024, 0, 16)]} />);
    focusDay("2024-1-15");
    press("ArrowRight");
    expect(focusedDay()).toBe("2024-1-17");
  });

  it("stops at minDate instead of losing focus", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 15)} minDate={new Date(2024, 0, 15)} />);
    focusDay("2024-1-15");
    press("ArrowLeft");
    expect(focusedDay()).toBe("2024-1-15");
  });

  it("does nothing for arrow keys pressed outside a day", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 15)} />);
    const next = screen.getByLabelText("Next month");
    act(() => next.focus());
    press("ArrowRight");
    expect(next).toHaveFocus();
    expect(screen.getByText("2024 / 1")).toBeInTheDocument();
  });

  it("pages by a month with PageUp / PageDown and keeps the day", () => {
    render(<Calendar defaultValue={new Date(2024, 5, 15)} />);
    focusDay("2024-6-15");
    press("PageUp");
    expect(screen.getByText("2024 / 5")).toBeInTheDocument();
    expect(focusedDay()).toBe("2024-5-15");
    press("PageDown");
    press("PageDown");
    expect(screen.getByText("2024 / 7")).toBeInTheDocument();
    expect(focusedDay()).toBe("2024-7-15");
  });

  it("clamps to the last day when the target month is shorter", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 31)} />);
    focusDay("2024-1-31");
    press("PageDown");
    expect(focusedDay()).toBe("2024-2-29");
  });

  it("pages by a year with Ctrl or Shift + PageUp / PageDown", () => {
    render(<Calendar defaultValue={new Date(2024, 5, 15)} />);
    focusDay("2024-6-15");
    press("PageUp", { ctrlKey: true });
    expect(screen.getByText("2023 / 6")).toBeInTheDocument();
    expect(focusedDay()).toBe("2023-6-15");
    press("PageDown", { shiftKey: true });
    expect(screen.getByText("2024 / 6")).toBeInTheDocument();
  });

  it("pages from the grid without a focused day (view only)", () => {
    const { container } = render(<Calendar defaultValue={new Date(2024, 5, 15)} />);
    const grid = container.querySelector(`.${styles.grid}`)!;
    fireEvent.keyDown(grid, { key: "PageUp" });
    expect(screen.getByText("2024 / 5")).toBeInTheDocument();
    fireEvent.keyDown(grid, { key: "PageDown", ctrlKey: true });
    expect(screen.getByText("2025 / 5")).toBeInTheDocument();
  });

  it("keeps one tab stop after the month buttons turn the page", () => {
    render(<Calendar defaultValue={new Date(2024, 0, 31)} />);
    const next = screen.getByLabelText("Next month");
    act(() => next.focus());
    fireEvent.click(next);
    // ボタンからフォーカスを奪わない。停止点は、送り先の月の同じ日（無ければ月末）
    expect(next).toHaveFocus();
    const stops = screen.getAllByRole("gridcell").filter((cell) => cell.tabIndex === 0);
    expect(stops).toHaveLength(1);
    expect(stops[0]).toHaveAttribute("data-date", "2024-2-29");
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
    const { container } = render(<Calendar defaultValue={new Date(2024, 0, 15)} disabled onChange={onChange} />);
    const grid = container.querySelector(`.${styles.grid}`)!;
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
