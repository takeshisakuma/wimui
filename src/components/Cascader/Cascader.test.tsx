import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Cascader, CascaderOption } from "./Cascader";

const options: CascaderOption[] = [
  {
    label: "Zhejiang",
    value: "zhejiang",
    children: [
      {
        label: "Hangzhou",
        value: "hangzhou",
        children: [
          {
            label: "West Lake",
            value: "west_lake",
          },
        ],
      },
    ],
  },
  {
    label: "Jiangsu",
    value: "jiangsu",
    children: [
      {
        label: "Nanjing",
        value: "nanjing",
        children: [
          {
            label: "Zhonghua Gate",
            value: "zhonghua_gate",
          },
        ],
      },
    ],
  },
];

describe("Cascader", () => {
  it("renders with placeholder", () => {
    render(<Cascader options={options} placeholder="Please select" />);
    expect(screen.getByText("Please select")).toBeDefined();
  });

  it("opens dropdown on click", () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    expect(screen.getByText("Zhejiang")).toBeDefined();
    expect(screen.getByText("Jiangsu")).toBeDefined();
  });

  it("expands submenus", () => {
    render(<Cascader options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Zhejiang"));
    expect(screen.getByText("Hangzhou")).toBeDefined();
  });

  it("calls onChange when leaf is selected", () => {
    const onChange = vi.fn();
    render(<Cascader options={options} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Zhejiang"));
    fireEvent.click(screen.getByText("Hangzhou"));
    fireEvent.click(screen.getByText("West Lake"));

    expect(onChange).toHaveBeenCalledWith(
      ["zhejiang", "hangzhou", "west_lake"],
      expect.any(Array),
    );
  });

  it("renders with defaultValue", () => {
    render(
      <Cascader
        options={options}
        defaultValue={["zhejiang", "hangzhou", "west_lake"]}
      />,
    );
    expect(screen.getByText("Zhejiang / Hangzhou / West Lake")).toBeDefined();
  });

  it("does not open when disabled", () => {
    render(<Cascader options={options} disabled />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    expect(screen.queryByText("Zhejiang")).toBeNull();
  });

  it("expands on hover when expandTrigger is hover", async () => {
    const user = userEvent.setup();
    render(<Cascader options={options} expandTrigger="hover" />);
    fireEvent.click(screen.getByRole("combobox"));
    
    // Check if Zhejiang is there
    expect(screen.queryByText("Zhejiang")).not.toBeNull();
    
    const zhejiang = screen.getByText("Zhejiang");
    await user.hover(zhejiang);
    
    // Wait for Hangzhou
    await waitFor(() => expect(screen.queryByText("Hangzhou")).not.toBeNull(), { timeout: 2000 });
  });

  it("handles clearing the value", () => {
    const onChange = vi.fn();
    render(
      <Cascader
        options={options}
        defaultValue={["zhejiang", "hangzhou", "west_lake"]}
        allowClear
        onChange={onChange}
      />
    );
    
    const clearButton = screen.getByLabelText(/clear input/i);
    fireEvent.click(clearButton);
    
    expect(onChange).toHaveBeenCalledWith([], []);
  });

  it("handles keyboard navigation: ArrowDown, ArrowUp, ArrowRight, ArrowLeft, Enter", async () => {
    const onChange = vi.fn();
    render(<Cascader options={options} onChange={onChange} />);
    const trigger = screen.getByRole("combobox");
    
    // Open with keyboard
    fireEvent.keyDown(trigger, { key: "Enter" });
    await waitFor(() => expect(screen.queryByText("Zhejiang")).not.toBeNull());
    
    // Navigate down to Jiangsu
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    // Navigate right to Nanjing
    fireEvent.keyDown(trigger, { key: "ArrowRight" });
    await waitFor(() => expect(screen.getByText("Nanjing")).not.toBeNull());
    
    // Navigate left back to first menu
    fireEvent.keyDown(trigger, { key: "ArrowLeft" });
    // Navigate up to Zhejiang
    fireEvent.keyDown(trigger, { key: "ArrowUp" });
    
    // Navigate right to Hangzhou
    fireEvent.keyDown(trigger, { key: "ArrowRight" });
    // Navigate right to West Lake
    fireEvent.keyDown(trigger, { key: "ArrowRight" });
    // Press Enter to select
    fireEvent.keyDown(trigger, { key: "Enter" });
    
    expect(onChange).toHaveBeenCalledWith(["zhejiang", "hangzhou", "west_lake"], expect.any(Array));
  });

  it("closes on Escape", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    await waitFor(() => expect(screen.queryByText("Zhejiang")).not.toBeNull());
    
    fireEvent.keyDown(trigger, { key: "Escape" });
    await waitFor(() => expect(screen.queryByText("Zhejiang")).toBeNull());
  });
});
