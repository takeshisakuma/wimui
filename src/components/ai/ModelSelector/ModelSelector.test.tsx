import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ModelSelector, ModelOption } from "./ModelSelector";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const MODELS: ModelOption[] = [
  { id: "gpt", name: "GPT", contextLength: 128000, pricing: { input: 2.5, output: 10 } },
  { id: "claude", name: "Claude", contextLength: 200000, badge: "New" },
  { id: "old", name: "Legacy", disabled: true },
];

describe("ModelSelector", () => {
  it("shows the placeholder when nothing is selected", () => {
    render(<ModelSelector models={MODELS} labels={{ placeholder: "Pick one" }} />);
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("shows the selected model name", () => {
    render(<ModelSelector models={MODELS} value="claude" />);
    expect(screen.getByText("Claude")).toBeInTheDocument();
  });

  it("opens the dropdown and selects a model", () => {
    const onChange = vi.fn();
    render(<ModelSelector models={MODELS} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
    fireEvent.click(screen.getByText("GPT"));
    expect(onChange).toHaveBeenCalledWith("gpt", MODELS[0]);
  });

  it("does not select a disabled model", () => {
    const onChange = vi.fn();
    render(<ModelSelector models={MODELS} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Legacy"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders context and pricing metadata", () => {
    render(<ModelSelector models={MODELS} defaultValue="gpt" />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.getByText(/128K/)).toBeInTheDocument();
    expect(screen.getByText(/\$2\.5/)).toBeInTheDocument();
  });

  it("exposes the trigger as a combobox whose value is the selected model", () => {
    render(<ModelSelector models={MODELS} value="claude" />);
    const trigger = screen.getByRole("combobox", { name: "Select a model" });
    expect(trigger).toHaveTextContent("Claude");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).not.toHaveAttribute("aria-activedescendant");
  });

  it("moves the active option from the trigger with arrow keys, skipping disabled ones", () => {
    render(<ModelSelector models={MODELS} defaultValue="gpt" />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    const options = screen.getAllByRole("option");
    expect(trigger).toHaveAttribute("aria-controls", screen.getByRole("listbox").id);
    expect(trigger).toHaveAttribute("aria-activedescendant", options[0].id);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[1].id);
    // 3 つ目は disabled なので、先頭へ回る
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[0].id);
    fireEvent.keyDown(trigger, { key: "End" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[1].id);
    fireEvent.keyDown(trigger, { key: "Home" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[0].id);
  });

  it("selects the active option with Enter and closes", () => {
    const onChange = vi.fn();
    render(<ModelSelector models={MODELS} defaultValue="gpt" onChange={onChange} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "Enter" });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("claude", MODELS[1]);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveTextContent("Claude");
  });

  it("closes with Escape without changing the value", () => {
    const onChange = vi.fn();
    render(<ModelSelector models={MODELS} defaultValue="gpt" onChange={onChange} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: " " });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("keeps the listbox out of the tab order", () => {
    render(<ModelSelector models={MODELS} />);
    fireEvent.click(screen.getByRole("combobox"));
    const listbox = screen.getByRole("listbox");
    // Chrome はスクロールする要素を Tab の停止点にするので、明示して外す
    expect(listbox).toHaveAttribute("tabindex", "-1");
    expect(listbox).not.toHaveAttribute("aria-activedescendant");
  });
});
