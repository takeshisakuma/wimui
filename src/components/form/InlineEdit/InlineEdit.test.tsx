import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InlineEdit } from "./InlineEdit";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("InlineEdit", () => {
  it("renders correctly", () => {
    render(<InlineEdit defaultValue="Test content" />);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("switches to edit mode on click", async () => {
    const user = userEvent.setup();
    render(<InlineEdit defaultValue="Test content" />);
    
    const previewText = screen.getByText("Test content");
    await user.click(previewText);

    expect(screen.getByRole("textbox")).toHaveValue("Test content");
  });

  it("calls onSave and exits edit mode", async () => {
    const user = userEvent.setup();
    const handleSave = vi.fn();
    render(<InlineEdit defaultValue="Initial" onSave={handleSave} />);
    
    await user.click(screen.getByText("Initial"));
    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "Updated");
    
    await user.click(screen.getByLabelText("action.save"));
    expect(handleSave).toHaveBeenCalledWith("Updated");
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.getByText("Updated")).toBeInTheDocument();
  });

  it("calls onCancel and exits edit mode without saving", async () => {
    const user = userEvent.setup();
    const handleCancel = vi.fn();
    render(<InlineEdit defaultValue="Initial" onCancel={handleCancel} />);
    
    await user.click(screen.getByText("Initial"));
    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "Updated");
    
    await user.click(screen.getByLabelText("action.cancel"));
    expect(handleCancel).toHaveBeenCalled();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.getByText("Initial")).toBeInTheDocument();
  });

  it("handles keyboard events (Enter/Esc)", async () => {
    const user = userEvent.setup();
    const handleSave = vi.fn();
    const handleCancel = vi.fn();
    render(
      <InlineEdit
        defaultValue="Initial"
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
    
    await user.click(screen.getByText("Initial"));
    const input = screen.getByRole("textbox");
    
    // Type and Enter to save
    await user.clear(input);
    await user.type(input, "Update1{Enter}");
    expect(handleSave).toHaveBeenCalledWith("Update1");

    // Click again, Type and Esc to cancel
    await user.click(screen.getByText("Update1"));
    const input2 = screen.getByRole("textbox");
    await user.clear(input2);
    await user.type(input2, "Update2{Escape}");
    expect(handleCancel).toHaveBeenCalled();
    expect(screen.getByText("Update1")).toBeInTheDocument();
  });

  it("calls onEdit and onChange", async () => {
    const user = userEvent.setup();
    const handleEdit = vi.fn();
    const handleChange = vi.fn();
    render(<InlineEdit defaultValue="Text" onEdit={handleEdit} onChange={handleChange} />);

    await user.click(screen.getByText("Text"));
    expect(handleEdit).toHaveBeenCalledTimes(1);

    await user.type(screen.getByRole("textbox"), "!");
    expect(handleChange).toHaveBeenCalledWith("Text!");
  });

  it("enters edit mode with Enter and Space keys on the preview", async () => {
    const user = userEvent.setup();
    render(<InlineEdit defaultValue="Text" />);

    const preview = screen.getByRole("button");
    preview.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();

    screen.getByRole("button").focus();
    await user.keyboard(" ");
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("does not enter edit mode when disabled", async () => {
    const user = userEvent.setup();
    const handleEdit = vi.fn();
    render(<InlineEdit defaultValue="Text" disabled onEdit={handleEdit} />);

    const preview = screen.getByText("Text").closest("[role='button']") as HTMLElement;
    expect(preview).toHaveAttribute("aria-disabled", "true");
    expect(preview).toHaveAttribute("tabindex", "-1");

    await user.click(preview);
    expect(handleEdit).not.toHaveBeenCalled();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  it("ignores save and cancel while disabled", async () => {
    const user = userEvent.setup();
    const handleSave = vi.fn();
    const handleCancel = vi.fn();
    const { rerender } = render(
      <InlineEdit defaultValue="Text" onSave={handleSave} onCancel={handleCancel} />
    );

    // 編集開始後に disabled へ切り替え、保存・キャンセルが無効になることを確認
    await user.click(screen.getByText("Text"));
    rerender(
      <InlineEdit defaultValue="Text" disabled onSave={handleSave} onCancel={handleCancel} />
    );

    await user.click(screen.getByLabelText("action.save"));
    expect(handleSave).not.toHaveBeenCalled();
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    await user.click(screen.getByLabelText("action.cancel"));
    expect(handleCancel).not.toHaveBeenCalled();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("shows the placeholder when the value is empty", () => {
    render(<InlineEdit placeholder="Click to edit" />);
    expect(screen.getByText("Click to edit")).toBeInTheDocument();
  });

  it("renders a non-breaking space when value and placeholder are empty", () => {
    render(<InlineEdit />);
    expect(screen.getByRole("button").textContent).toContain(" ");
  });

  it("works in controlled mode without mutating the displayed value", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const handleSave = vi.fn();
    render(<InlineEdit value="Fixed" onChange={handleChange} onSave={handleSave} />);

    await user.click(screen.getByText("Fixed"));
    const input = screen.getByRole("textbox");
    await user.type(input, "X");

    // controlled のため表示値は親の value のまま
    expect(input).toHaveValue("Fixed");
    expect(handleChange).toHaveBeenCalledWith("FixedX");

    await user.click(screen.getByLabelText("action.save"));
    expect(handleSave).toHaveBeenCalledWith("Fixed");
    expect(screen.getByText("Fixed")).toBeInTheDocument();
  });

  it("renders a label via FieldTemplate", () => {
    render(<InlineEdit defaultValue="Text" label="Nickname" />);
    expect(screen.getByText("Nickname")).toBeInTheDocument();
  });

  it("renders in fullWidth mode in both preview and edit states", async () => {
    const user = userEvent.setup();
    render(<InlineEdit defaultValue="Text" fullWidth />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    await user.click(screen.getByText("Text"));
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

});
