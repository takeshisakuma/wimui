import { render, screen, fireEvent } from "@testing-library/react";
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
});
