import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PromptInput } from "./PromptInput";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

vi.mock("@/icon", () => ({
  SendIcon: () => <svg data-testid="send-icon" />,
  PaperclipIcon: () => <svg data-testid="paperclip-icon" />,
}));

describe("PromptInput", () => {
  it("renders a textarea", () => {
    render(<PromptInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("calls onSubmit when the send button is clicked", () => {
    const onSubmit = vi.fn();
    render(<PromptInput defaultValue="Hello" onSubmit={onSubmit} />);
    fireEvent.click(screen.getByLabelText("prompt_input.send_label"));
    expect(onSubmit).toHaveBeenCalledWith("Hello");
  });

  it("calls onSubmit on Enter key", () => {
    const onSubmit = vi.fn();
    render(<PromptInput defaultValue="Hello" onSubmit={onSubmit} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: false });
    expect(onSubmit).toHaveBeenCalledWith("Hello");
  });

  it("does not submit on Shift+Enter", () => {
    const onSubmit = vi.fn();
    render(<PromptInput defaultValue="Hello" onSubmit={onSubmit} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: true });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("disables send button when input is empty", () => {
    render(<PromptInput defaultValue="" />);
    expect(screen.getByLabelText("prompt_input.send_label")).toBeDisabled();
  });

  it("shows char count when maxLength is set", () => {
    render(<PromptInput defaultValue="Hi" maxLength={100} />);
    expect(screen.getByText("2 / 100")).toBeInTheDocument();
  });

  it("shows attachment button when showAttach is true", () => {
    render(<PromptInput showAttach />);
    expect(screen.getByLabelText("prompt_input.attach_label")).toBeInTheDocument();
  });

  it("disables all interactions when disabled", () => {
    render(<PromptInput disabled defaultValue="test" />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
