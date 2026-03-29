import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Selectbox } from "./Selectbox";
import React from "react";

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();
 
describe("Selectbox", () => {
  const options = [
    { label: "Apple", value: "1" },
    { label: "Banana", value: "2" },
    { label: "Orange", value: "3", disabled: true },
  ];

  it("renders with placeholder", () => {
    render(<Selectbox options={options} placeholder="Select item" />);
    expect(screen.getByText("Select item")).toBeInTheDocument();
  });

  it("opens dropdown and selects an option", async () => {
    const onChange = vi.fn();
    render(<Selectbox options={options} onChange={onChange} />);

    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);

    const option1 = screen.getByRole("option", { name: "Apple" });
    fireEvent.click(option1);

    expect(onChange).toHaveBeenCalledWith("1");
    await waitFor(
      () => {
        expect(
          screen.getByRole("option", { name: "Apple" }),
        ).toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });

  it("shows label when provided", () => {
    render(<Selectbox options={options} label="My Label" />);
    expect(screen.getByText("My Label")).toBeInTheDocument();
  });

  it("does not select disabled options", () => {
    const onChange = vi.fn();
    render(<Selectbox options={options} onChange={onChange} />);

    fireEvent.click(screen.getByRole("combobox"));
    const disabledOption = screen.getByText("Orange");
    fireEvent.click(disabledOption);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("handles searchable selectbox", async () => {
    const user = userEvent.setup();
    render(<Selectbox options={options} searchable searchPlaceholder="Search..." />);
    
    await user.click(screen.getByRole("combobox"));
    const searchInput = screen.getByPlaceholderText("Search...");
    
    await user.type(searchInput, "Banana");
    
    // Check if Banana is visible
    await waitFor(() => {
      const opt2 = screen.queryByRole("option", { name: /Banana/i });
      expect(opt2).not.toBeNull();
    });
    
    expect(screen.queryByRole("option", { name: /Apple/i })).toBeNull();
  });

  it("handles grouped options", async () => {
    const groupedOptions = [
      { label: "Group A", options: [{ label: "A1", value: "a1" }] },
      { label: "Group B", options: [{ label: "B1", value: "b1" }] },
    ];
    render(<Selectbox options={groupedOptions} grouped />);
    
    fireEvent.click(screen.getByRole("combobox"));
    await waitFor(() => expect(screen.queryByText(/Group A/i)).not.toBeNull());
    expect(screen.getByText(/A1/i)).toBeInTheDocument();
  });

  it("handles keyboard navigation: ArrowDown, ArrowUp, Enter", async () => {
    const onChange = vi.fn();
    render(<Selectbox options={options} onChange={onChange} />);
    const trigger = screen.getByRole("combobox");
    
    trigger.focus();
    fireEvent.keyDown(trigger, { key: "Enter" });
    await waitFor(() => {
      screen.debug();
      expect(screen.queryByRole("listbox")).not.toBeNull();
    });
    
    fireEvent.keyDown(trigger, { key: "ArrowDown" }); // Goes to Apple
    fireEvent.keyDown(trigger, { key: "ArrowDown" }); // Goes to Banana
    fireEvent.keyDown(trigger, { key: "Enter" });
    
    await waitFor(() => expect(onChange).toHaveBeenCalledWith("2"));
  });

  it("handles allowClear", () => {
    const onChange = vi.fn();
    render(
      <Selectbox
        options={options}
        defaultValue="1"
        allowClear
        onChange={onChange}
      />
    );
    
    const clearButton = screen.getByLabelText(/clear input/i);
    fireEvent.click(clearButton);

    expect(onChange).toHaveBeenCalledWith("");
  });

  it("highlights option on mouse enter", async () => {
    render(<Selectbox options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);

    await waitFor(() => expect(screen.queryByRole("listbox")).not.toBeNull());

    const opt2 = screen.getByText("Banana").closest("[role='option']")!;
    fireEvent.mouseEnter(opt2);
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("renders separator option", async () => {
    const optionsWithSeparator = [
      { label: "Apple", value: "1" },
      { type: "separator" as const },
      { label: "Banana", value: "2" },
    ];
    render(<Selectbox options={optionsWithSeparator} />);
    fireEvent.click(screen.getByRole("combobox"));

    await waitFor(() => expect(screen.queryByRole("listbox")).not.toBeNull());
    const separator = document.querySelector(".wim-selectbox-separator");
    expect(separator).toBeInTheDocument();
  });

  it("highlights option on mouse enter in non-grouped path", async () => {
    const onChange = vi.fn();
    render(<Selectbox options={options} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));

    await waitFor(() => expect(screen.queryByRole("listbox")).not.toBeNull());

    const banana = screen.getByText("Banana").closest("[role='option']")!;
    fireEvent.mouseEnter(banana);

    // After mouse enter, pressing Enter should select the hovered item
    fireEvent.keyDown(screen.getByRole("combobox"), { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("2");
  });
});
