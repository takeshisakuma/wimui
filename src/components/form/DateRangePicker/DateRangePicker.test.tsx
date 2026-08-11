import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DateRangePicker } from "./DateRangePicker";

describe("DateRangePicker", () => {
  it("renders two date pickers", () => {
    render(
      <DateRangePicker
        startProps={{ placeholder: "Start Date" }}
        endProps={{ placeholder: "End Date" }}
      />,
    );
    expect(screen.getByPlaceholderText("Start Date")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("End Date")).toBeInTheDocument();
    expect(screen.getByText("~")).toBeInTheDocument();
  });

  it("propagates error state to both inputs and the group", () => {
    render(
      <DateRangePicker
        error="Required"
        startProps={{ placeholder: "Start Date" }}
        endProps={{ placeholder: "End Date" }}
      />,
    );
    expect(screen.getByPlaceholderText("Start Date")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByPlaceholderText("End Date")).toHaveAttribute("aria-invalid", "true");
    const message = screen.getByRole("alert");
    expect(message).toHaveTextContent("Required");
    expect(screen.getByRole("group")).toHaveAttribute("aria-describedby", message.id);
  });
// T130: 以前は startProps/endProps の label を label={undefined} で捨てており、
  // 内側の入力 2 つが無名のまま出荷されていた（axe の label = critical）。
  it("gives both inputs an accessible name by default", () => {
    render(<DateRangePicker label="Applications open" />);
    expect(screen.getByLabelText("Start date")).toBeInTheDocument();
    expect(screen.getByLabelText("End date")).toBeInTheDocument();
  });

  it("keeps the label passed through startProps / endProps", () => {
    render(
      <DateRangePicker
        startProps={{ label: "From" }}
        endProps={{ label: "Until" }}
      />,
    );
    expect(screen.getByLabelText("From")).toBeInTheDocument();
    expect(screen.getByLabelText("Until")).toBeInTheDocument();
    // 既定名は上書きされる（二重に名前が付かない）
    expect(screen.queryByLabelText("Start date")).not.toBeInTheDocument();
  });

  it("lets an explicit aria-label win over the built-in name", () => {
    render(<DateRangePicker startProps={{ "aria-label": "Opens" }} />);
    expect(screen.getByLabelText("Opens")).toBeInTheDocument();
  });

  it("shows an error message passed through startProps", () => {
    render(
      <DateRangePicker startProps={{ label: "From", error: "Pick a date" }} />,
    );
    expect(screen.getByText("Pick a date")).toBeInTheDocument();
  });
});
