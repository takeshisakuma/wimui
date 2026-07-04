import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DatePicker } from "./DatePicker";
import styles from "./date-picker.module.scss";

describe("DatePicker", () => {
  it("renders input", () => {
    render(<DatePicker placeholder="Select Date" />);
    expect(screen.getByPlaceholderText("Select Date")).toBeInTheDocument();
  });

  it("opens calendar on click", async () => {
    render(<DatePicker placeholder="Select date" />);
    const input = screen.getByPlaceholderText(/Select date/i);

    expect(
      document.querySelector(`.${styles.dropdown}`),
    ).not.toBeInTheDocument();

    fireEvent.click(input);

    expect(
      document.querySelector(`.${styles.dropdown}`),
    ).toBeInTheDocument();
  });

  it("displays formatted date", () => {
    const date = new Date(2023, 0, 15); // Jan 15 2023
    render(<DatePicker value={date} format="YYYY-MM-DD" readOnly />);

    expect(screen.getByDisplayValue("2023-01-15")).toBeInTheDocument();
  });

  it("can be cleared", () => {
    const handleChange = vi.fn();
    const date = new Date(2023, 0, 15);
    render(<DatePicker value={date} onChange={handleChange} clearable />);

    const clearBtn = screen.getByLabelText(/Clear/i);
    fireEvent.click(clearBtn);

    expect(handleChange).toHaveBeenCalledWith(null);
  });

  it("clears in uncontrolled mode", () => {
    const handleChange = vi.fn();
    const date = new Date(2023, 0, 15);
    render(<DatePicker defaultValue={date} onChange={handleChange} clearable />);

    const clearBtn = screen.getByLabelText(/Clear/i);
    fireEvent.click(clearBtn);

    expect(handleChange).toHaveBeenCalledWith(null);
  });

  it("opens calendar with Enter key", () => {
    render(<DatePicker />);
    const input = screen.getByRole("combobox");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(document.querySelector(`.${styles.dropdown}`)).toBeInTheDocument();
  });

  it("opens calendar with Space key", () => {
    render(<DatePicker />);
    const input = screen.getByRole("combobox");
    fireEvent.keyDown(input, { key: " " });
    expect(document.querySelector(`.${styles.dropdown}`)).toBeInTheDocument();
  });

  it("closes calendar with Escape key", async () => {
    render(<DatePicker />);
    const input = screen.getByRole("combobox");
    fireEvent.click(input);
    expect(document.querySelector(`.${styles.dropdown}`)).toBeInTheDocument();
    fireEvent.keyDown(input, { key: "Escape" });
    await waitFor(() => {
      expect(document.querySelector(`.${styles.dropdown}`)).not.toBeInTheDocument();
    });
  });

  it("does not open when disabled", () => {
    render(<DatePicker disabled />);
    const input = screen.getByRole("combobox");
    fireEvent.click(input);
    expect(document.querySelector(`.${styles.dropdown}`)).not.toBeInTheDocument();
  });
});
