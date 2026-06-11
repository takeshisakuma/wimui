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

});
