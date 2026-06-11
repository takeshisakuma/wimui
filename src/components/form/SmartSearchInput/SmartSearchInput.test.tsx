import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { createRef } from "react";
import { SmartSearchInput } from "./SmartSearchInput";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SmartSearchInput", () => {
  // ── Rendering ────────────────────────────────────────────────────────────

  it("renders a textarea", () => {
    render(<SmartSearchInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders a label", () => {
    render(<SmartSearchInput label="Search" />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    render(<SmartSearchInput placeholder="Type to search…" />);
    expect(screen.getByPlaceholderText("Type to search…")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<SmartSearchInput error="Required field" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required field");
  });

  // ── Uncontrolled mode ────────────────────────────────────────────────────

  it("calls onChange with a string value when user types", () => {
    const onChange = vi.fn();
    render(<SmartSearchInput onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "hello" } });
    expect(onChange).toHaveBeenCalledWith("hello");
  });

  it("updates display value in uncontrolled mode", () => {
    render(<SmartSearchInput defaultValue="initial" />);
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "updated" } });
    expect(textarea.value).toBe("updated");
  });

  // ── Controlled mode ──────────────────────────────────────────────────────

  it("reflects controlled value", () => {
    render(<SmartSearchInput value="controlled" onChange={() => {}} />);
    expect((screen.getByRole("textbox") as HTMLTextAreaElement).value).toBe("controlled");
  });

  it("calls onChange but does not mutate value in controlled mode", () => {
    const onChange = vi.fn();
    render(<SmartSearchInput value="fixed" onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "new" } });
    expect(onChange).toHaveBeenCalledWith("new");
    // value stays as-is because parent controls it
    expect((screen.getByRole("textbox") as HTMLTextAreaElement).value).toBe("fixed");
  });

  // ── Submit behaviour ─────────────────────────────────────────────────────

  it("calls onSubmit with trimmed value on Enter", () => {
    const onSubmit = vi.fn();
    render(<SmartSearchInput defaultValue="  hello  " onSubmit={onSubmit} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: false });
    expect(onSubmit).toHaveBeenCalledWith("hello");
  });

  it("does not call onSubmit on Shift+Enter", () => {
    const onSubmit = vi.fn();
    render(<SmartSearchInput defaultValue="hello" onSubmit={onSubmit} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: true });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not call onSubmit when value is empty", () => {
    const onSubmit = vi.fn();
    render(<SmartSearchInput defaultValue="" onSubmit={onSubmit} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: false });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not call onSubmit when value is whitespace only", () => {
    const onSubmit = vi.fn();
    render(<SmartSearchInput defaultValue="   " onSubmit={onSubmit} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: false });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not call onSubmit when disabled", () => {
    const onSubmit = vi.fn();
    render(<SmartSearchInput defaultValue="hello" onSubmit={onSubmit} disabled />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: false });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  // ── Clear button ─────────────────────────────────────────────────────────

  it("shows a clear button when the field has a value", () => {
    render(<SmartSearchInput defaultValue="hello" allowClear />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onClear when clear button is clicked", () => {
    const onClear = vi.fn();
    render(<SmartSearchInput defaultValue="hello" allowClear onClear={onClear} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClear).toHaveBeenCalled();
  });

  it("calls onChange with empty string on clear", () => {
    const onChange = vi.fn();
    render(<SmartSearchInput defaultValue="hello" allowClear onChange={onChange} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("resets internal value to empty on clear", () => {
    render(<SmartSearchInput defaultValue="hello" allowClear />);
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    fireEvent.click(screen.getByRole("button"));
    expect(textarea.value).toBe("");
  });

  // ── maxLength / character count ──────────────────────────────────────────

  it("shows character count when maxLength is set", () => {
    render(<SmartSearchInput defaultValue="Hi" maxLength={100} />);
    const counter = screen.getByText((_, el) =>
      el?.textContent?.replace(/\s+/g, " ").trim() === "2 / 100",
    );
    expect(counter).toBeInTheDocument();
  });

  it("does not show character count when maxLength is not set and value is empty", () => {
    const { container } = render(<SmartSearchInput />);
    // FieldCharacterCount returns null in this case
    expect(container.querySelector("[aria-live]")).not.toBeInTheDocument();
  });

  it("respects the maxLength attribute on the textarea", () => {
    render(<SmartSearchInput maxLength={50} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "50");
  });

  // ── Disabled ─────────────────────────────────────────────────────────────

  it("disables the textarea when disabled prop is true", () => {
    render(<SmartSearchInput disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  // ── Ref forwarding ───────────────────────────────────────────────────────

  it("forwards ref to the underlying textarea element", () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<SmartSearchInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
