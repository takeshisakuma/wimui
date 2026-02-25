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
    expect(
      screen.getByText(new RegExp(`${year}年 ${month}月`)),
    ).toBeInTheDocument();
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
});
