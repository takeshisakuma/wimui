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

/** 引き金の `aria-activedescendant` が指している項目（＝いまキーボードで指している項目）。 */
const activeOption = (trigger: HTMLElement) => {
  const id = trigger.getAttribute("aria-activedescendant");
  const el = id ? document.getElementById(id) : null;
  if (!el) throw new Error(`aria-activedescendant（${id}）が指す要素が無い`);
  return el;
};

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
    expect(screen.getByLabelText("Zhejiang / Hangzhou / West Lake")).toBeInTheDocument();
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

  it("does not select disabled options", async () => {
    const onChange = vi.fn();
    const optionsWithDisabled: CascaderOption[] = [
      { label: "Disabled", value: "disabled", disabled: true },
      { label: "Enabled", value: "enabled", children: [{ label: "Child", value: "child" }] },
    ];
    render(<Cascader options={optionsWithDisabled} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Disabled"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not close after clicking an intermediate node (node with children)", async () => {
    render(<Cascader options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Zhejiang"));
    // Dropdown should still be open — submenu appeared
    expect(screen.getByText("Hangzhou")).toBeInTheDocument();
    expect(screen.getByText("Zhejiang")).toBeInTheDocument();
  });

  it("uses custom separator in display value", () => {
    render(
      <Cascader
        options={options}
        defaultValue={["zhejiang", "hangzhou", "west_lake"]}
        separator=" > "
      />,
    );
    expect(screen.getByLabelText("Zhejiang > Hangzhou > West Lake")).toBeInTheDocument();
  });

  it("works as a controlled component", () => {
    const onChange = vi.fn();
    render(
      <Cascader
        options={options}
        value={["zhejiang", "hangzhou", "west_lake"]}
        onChange={onChange}
      />,
    );
    expect(screen.getByLabelText("Zhejiang / Hangzhou / West Lake")).toBeInTheDocument();
  });

  it("closes dropdown with Tab key", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    await waitFor(() => expect(screen.queryByText("Zhejiang")).not.toBeNull());

    fireEvent.keyDown(trigger, { key: "Tab" });
    await waitFor(() => expect(screen.queryByText("Zhejiang")).toBeNull());
  });

  it("navigates to first item with Home key", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    // Move to last item first
    fireEvent.keyDown(trigger, { key: "End" });
    // 動いた先（いま指している項目）を見る（CI-19）。以前は「開いたままである」だけを見ていて、
    // Home や End が何もしなくても通った。
    expect(activeOption(trigger)).toHaveTextContent("Jiangsu");
    // Then Home to go back to first
    fireEvent.keyDown(trigger, { key: "Home" });
    expect(activeOption(trigger)).toHaveTextContent("Zhejiang");
  });

  it("navigates to last item with End key", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    // 対照: 開いた直後は、最後の項目を指していない
    expect(activeOption(trigger)).not.toHaveTextContent("Jiangsu");
    fireEvent.keyDown(trigger, { key: "End" });
    expect(activeOption(trigger)).toHaveTextContent("Jiangsu");
  });

  it("opens dropdown with Space key when closed", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: " " });
    await waitFor(() => expect(screen.queryByText("Zhejiang")).not.toBeNull());
  });

  it("opens dropdown with ArrowDown key when closed", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    await waitFor(() => expect(screen.queryByText("Zhejiang")).not.toBeNull());
  });

  it("ignores keyboard when disabled", async () => {
    render(<Cascader options={options} disabled />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "Enter" });
    await new Promise((r) => setTimeout(r, 50));
    expect(screen.queryByText("Zhejiang")).toBeNull();
  });

  it("does not clear when disabled", () => {
    const onChange = vi.fn();
    render(
      <Cascader
        options={options}
        defaultValue={["zhejiang", "hangzhou", "west_lake"]}
        allowClear
        disabled
        onChange={onChange}
      />,
    );
    // 無効のときは、消すボタンそのものを出さない。以前は「在れば押す」と書いていて、ボタンが無いので
    // 何も押さず、何も確かめていなかった（CI-17）
    expect(screen.queryByLabelText(/clear input/i)).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("shows the clear button when enabled, so the disabled case above is not vacuous", () => {
    render(<Cascader options={options} defaultValue={["zhejiang", "hangzhou", "west_lake"]} allowClear />);
    expect(screen.getByLabelText(/clear input/i)).toBeInTheDocument();
  });

  it("renders aria-label on trigger when no visible label provided", () => {
    render(<Cascader options={options} aria-label="Select location" />);
    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("aria-label", "Select location");
  });

  it("ArrowUp does not go below index 0", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    // 対照: まず下へ動けること、ArrowUp で戻れることを見てから、先頭でもう一度押す（CI-19）。
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(activeOption(trigger)).toHaveTextContent("Jiangsu");
    fireEvent.keyDown(trigger, { key: "ArrowUp" });
    expect(activeOption(trigger)).toHaveTextContent("Zhejiang");
    fireEvent.keyDown(trigger, { key: "ArrowUp" });
    expect(activeOption(trigger)).toHaveTextContent("Zhejiang");
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-expanded", "true");
  });

  it("ArrowLeft at level 0 does not decrease focusedLevel below 0", async () => {
    render(<Cascader options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    // 対照: まず ArrowRight で次の段へ入れること、ArrowLeft で戻れることを見てから、最初の段でもう一度押す（CI-19）。
    fireEvent.keyDown(trigger, { key: "ArrowRight" });
    expect(activeOption(trigger)).toHaveTextContent("Hangzhou");
    fireEvent.keyDown(trigger, { key: "ArrowLeft" });
    expect(activeOption(trigger)).toHaveTextContent("Zhejiang");
    fireEvent.keyDown(trigger, { key: "ArrowLeft" });
    expect(activeOption(trigger)).toHaveTextContent("Zhejiang");
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-expanded", "true");
  });
});
