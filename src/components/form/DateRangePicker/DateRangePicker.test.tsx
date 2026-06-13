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
});
