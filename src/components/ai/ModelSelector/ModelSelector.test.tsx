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
    fireEvent.click(screen.getByRole("button"));
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
    fireEvent.click(screen.getByText("GPT"));
    expect(onChange).toHaveBeenCalledWith("gpt", MODELS[0]);
  });

  it("does not select a disabled model", () => {
    const onChange = vi.fn();
    render(<ModelSelector models={MODELS} onChange={onChange} />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Legacy"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders context and pricing metadata", () => {
    render(<ModelSelector models={MODELS} defaultValue="gpt" />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/128K/)).toBeInTheDocument();
    expect(screen.getByText(/\$2\.5/)).toBeInTheDocument();
  });
});
