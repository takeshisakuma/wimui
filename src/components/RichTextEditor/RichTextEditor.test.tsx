import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RichTextEditor } from "./RichTextEditor";

describe("RichTextEditor", () => {
  it("renders the toolbar and editor area", () => {
    render(<RichTextEditor />);
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with a label via FieldTemplate", () => {
    render(<RichTextEditor label="Content" />);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<RichTextEditor error="Required" />);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("marks textbox as aria-invalid on error", () => {
    render(<RichTextEditor error="Required" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("sets aria-disabled on disabled state", () => {
    render(<RichTextEditor disabled />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-disabled", "true");
  });

  it("disables toolbar buttons when disabled", () => {
    render(<RichTextEditor disabled toolbar={["bold"]} />);
    expect(screen.getByRole("button", { name: /bold/i })).toBeDisabled();
  });

  it("shows placeholder via data attribute", () => {
    render(<RichTextEditor placeholder="Write something..." />);
    expect(screen.getByRole("textbox")).toHaveAttribute("data-placeholder", "Write something...");
  });

  it("calls onChange when content is input", () => {
    const onChange = vi.fn();
    render(<RichTextEditor onChange={onChange} />);
    const editor = screen.getByRole("textbox");
    fireEvent.input(editor, { target: { innerHTML: "<p>Hello</p>" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("renders with defaultValue", () => {
    render(<RichTextEditor defaultValue="<p>Initial</p>" />);
    const editor = screen.getByRole("textbox");
    expect(editor.innerHTML).toBe("<p>Initial</p>");
  });

  it("renders custom toolbar items only", () => {
    render(<RichTextEditor toolbar={["bold", "italic"]} />);
    expect(screen.getByRole("button", { name: /bold/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /italic/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /underline/i })).not.toBeInTheDocument();
  });

  it("applies fullWidth class", () => {
    const { container } = render(<RichTextEditor fullWidth />);
    expect(container.querySelector(".wim-rte--full-width")).toBeInTheDocument();
  });

  it("applies ghost variant class", () => {
    const { container } = render(<RichTextEditor variant="ghost" />);
    expect(container.querySelector(".wim-rte--ghost")).toBeInTheDocument();
  });

  it("has correct aria-label on toolbar", () => {
    render(<RichTextEditor />);
    expect(screen.getByRole("toolbar")).toHaveAttribute("aria-label");
  });
});
