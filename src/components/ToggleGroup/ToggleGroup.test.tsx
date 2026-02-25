import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ToggleGroup } from "./ToggleGroup";

describe("ToggleGroup", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  it("renders all options", () => {
    render(<ToggleGroup options={options} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("handles single selection", () => {
    const handleChange = vi.fn();
    render(<ToggleGroup options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith("opt1");
    expect(screen.getByText("Option 1").parentElement).toHaveClass(
      "wim-toggle-group__item--active",
    );

    fireEvent.click(screen.getByText("Option 2"));
    expect(handleChange).toHaveBeenCalledWith("opt2");
  });

  it("handles multiple selection", () => {
    const handleChange = vi.fn();
    render(
      <ToggleGroup
        options={options}
        selectionMode="multiple"
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith(["opt1"]);

    fireEvent.click(screen.getByText("Option 2"));
    expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"]);

    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith(["opt2"]);
  });

  it("applies size and fullWidth classes", () => {
    const { container } = render(
      <ToggleGroup options={options} size="large" fullWidth />,
    );
    expect(container.firstChild).toHaveClass("wim-toggle-group--lg");
    expect(container.firstChild).toHaveClass("wim-toggle-group--full-width");
  });

  it("disables options when disabled prop is set", () => {
    const optionsWithDisabled = [
      { label: "Disabled", value: "d", disabled: true },
    ];
    render(<ToggleGroup options={optionsWithDisabled} />);
    expect(screen.getByText("Disabled").parentElement).toBeDisabled();
  });
});
