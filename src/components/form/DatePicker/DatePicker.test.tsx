import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
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

  it("keeps controlled mode when value is null after clear", () => {
    const Controlled = () => {
      const [value, setValue] = useState<Date | null>(new Date(2023, 0, 15));
      return <DatePicker value={value} onChange={setValue} clearable placeholder="Pick" />;
    };
    render(<Controlled />);

    expect(screen.getByDisplayValue("2023-01-15")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/Clear/i));
    expect(screen.getByPlaceholderText("Pick")).toHaveValue("");
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

  // T349: 3 つとも受け取って捨てていて、範囲外の日を選べた。
  describe("selectable range", () => {
    const renderOpen = (onChange = vi.fn()) => {
      render(
        <DatePicker
          defaultValue={new Date(2024, 0, 15)}
          minDate={new Date(2024, 0, 12)}
          maxDate={new Date(2024, 0, 20)}
          disabledDates={[new Date(2024, 0, 17)]}
          onChange={onChange}
        />,
      );
      fireEvent.click(screen.getByRole("combobox"));
      return onChange;
    };

    it("disables days outside minDate / maxDate and the disabledDates", () => {
      renderOpen();
      expect(screen.getByLabelText("2024-1-11")).toBeDisabled();
      expect(screen.getByLabelText("2024-1-21")).toBeDisabled();
      expect(screen.getByLabelText("2024-1-17")).toBeDisabled();
      // 対照: 範囲内の日は押せる
      expect(screen.getByLabelText("2024-1-12")).toBeEnabled();
      expect(screen.getByLabelText("2024-1-20")).toBeEnabled();
    });

    it("does not select a day outside the range", () => {
      const onChange = renderOpen();
      fireEvent.click(screen.getByLabelText("2024-1-11"));
      expect(onChange).not.toHaveBeenCalled();
      fireEvent.click(screen.getByLabelText("2024-1-16"));
      expect(onChange).toHaveBeenCalledWith(new Date(2024, 0, 16));
    });
  });
});
