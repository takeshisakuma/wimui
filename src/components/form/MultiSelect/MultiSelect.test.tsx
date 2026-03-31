import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MultiSelect } from "./MultiSelect";

describe("MultiSelect", () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  it("renders with placeholder", () => {
    render(<MultiSelect options={options} placeholder="Select something" />);
    expect(screen.getByText("Select something")).toBeInTheDocument();
  });

  it("opens dropdown when clicked", () => {
    render(<MultiSelect options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("selects multiple options", () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByRole("combobox"));
    // Click Option 1 in the listbox
    const option1 = screen.getAllByText("Option 1")[0];
    fireEvent.click(option1);

    expect(handleChange).toHaveBeenCalledWith(["opt1"]);
    // After selection, it might be in the trigger (as a Chip) and in the list
    expect(screen.getAllByText("Option 1").length).toBeGreaterThanOrEqual(1);

    fireEvent.click(screen.getByText("Option 2"));
    expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"]);
  });

  it("removes option on chip delete click", () => {
    const handleChange = vi.fn();
    render(
      <MultiSelect
        options={options}
        defaultValue={["opt1"]}
        onChange={handleChange}
      />,
    );

    const deleteButton = screen.getByLabelText(/Delete/i);
    fireEvent.click(deleteButton);

    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it("does not open dropdown when disabled", () => {
    render(<MultiSelect options={options} disabled />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("opens dropdown with ArrowDown key", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("navigates options with ArrowDown and ArrowUp keys", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    expect(combobox).toHaveAttribute("aria-activedescendant");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "ArrowUp" });
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("selects option with Enter key", () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={options} onChange={handleChange} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "Enter" });
    expect(handleChange).toHaveBeenCalledWith(["opt1"]);
  });

  it("selects option with Space key", () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={options} onChange={handleChange} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: " " });
    expect(handleChange).toHaveBeenCalledWith(["opt1"]);
  });

  it("closes dropdown with Escape key", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.click(combobox);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    fireEvent.keyDown(combobox, { key: "Escape" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("navigates to first option with Home key", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "Home" });
    expect(combobox).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("-option-0"),
    );
  });

  it("navigates to last option with End key", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "End" });
    expect(combobox).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining(`-option-${options.length - 1}`),
    );
  });

  it("closes dropdown with Tab key", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.click(combobox);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    fireEvent.keyDown(combobox, { key: "Tab" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("wraps ArrowDown from last to first option", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "End" });
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    expect(combobox).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("-option-0"),
    );
  });

  it("wraps ArrowUp from first to last option", () => {
    render(<MultiSelect options={options} />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "ArrowUp" });
    expect(combobox).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining(`-option-${options.length - 1}`),
    );
  });

  it("highlights option on mouse enter", () => {
    render(<MultiSelect options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    const opt2 = screen.getByText("Option 2").closest("li")!;
    fireEvent.mouseEnter(opt2);
    const combobox = screen.getByRole("combobox");
    expect(combobox).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("-option-1"),
    );
  });

  it("resets keyboard nav state on mouse move", () => {
    render(<MultiSelect options={options} />);
    const container = document.querySelector(".wim-multiselect")!;
    fireEvent.mouseMove(container);
    expect(container).toHaveAttribute("data-keyboard-nav", "false");
  });

  it("works in controlled mode", () => {
    const handleChange = vi.fn();
    render(
      <MultiSelect
        options={options}
        value={["opt1"]}
        onChange={handleChange}
      />,
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Option 2"));
    expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"]);
  });

  it("deselects option when clicked again in controlled mode", () => {
    const handleChange = vi.fn();
    render(
      <MultiSelect
        options={options}
        value={["opt1"]}
        onChange={handleChange}
      />,
    );
    fireEvent.click(screen.getByRole("combobox"));
    // In the listbox, Option 1 should appear as an option (may also appear as chip in trigger)
    const listbox = screen.getByRole("listbox");
    const opt1InList = listbox.querySelector('[aria-selected="true"]')!;
    fireEvent.click(opt1InList);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it("shows clear button and clears all selections when allowClear is true", () => {
    const handleChange = vi.fn();
    render(
      <MultiSelect
        options={options}
        defaultValue={["opt1", "opt2"]}
        allowClear
        onChange={handleChange}
      />,
    );
    const clearBtn = screen.getByLabelText("Clear input");
    expect(clearBtn).toBeInTheDocument();
    fireEvent.click(clearBtn);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it("does not open when clicking badge remove in disabled state", () => {
    render(
      <MultiSelect options={options} defaultValue={["opt1"]} disabled />,
    );
    const deleteButton = screen.queryByLabelText(/Delete/i);
    expect(deleteButton).not.toBeInTheDocument();
  });

  it("renders with label and error", () => {
    render(
      <MultiSelect
        options={options}
        label="My Label"
        error="Required field"
      />,
    );
    expect(screen.getByText("My Label")).toBeInTheDocument();
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("does not open dropdown when Enter pressed on closed disabled", () => {
    render(<MultiSelect options={options} disabled />);
    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "Enter" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("does not skip disabled options on click", () => {
    const disabledOptions = [
      { label: "Option 1", value: "opt1" },
      { label: "Option 2", value: "opt2", disabled: true },
      { label: "Option 3", value: "opt3" },
    ];
    const handleChange = vi.fn();
    render(<MultiSelect options={disabledOptions} onChange={handleChange} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Option 2"));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
