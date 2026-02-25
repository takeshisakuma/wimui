import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MultiSelect } from "./MultiSelect";

// Mock useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe("MultiSelect", () => {
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

    const deleteButton = screen.getByLabelText("Delete");
    fireEvent.click(deleteButton);

    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it("does not open dropdown when disabled", () => {
    render(<MultiSelect options={options} disabled />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
