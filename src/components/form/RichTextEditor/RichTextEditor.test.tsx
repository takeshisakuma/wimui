import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RichTextEditor } from "./RichTextEditor";
import styles from "./rich-text-editor.module.scss";

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
    expect(container.querySelector(`.${styles.fullWidth}`)).toBeInTheDocument();
  });

  it("applies ghost variant class", () => {
    const { container } = render(<RichTextEditor variant="ghost" />);
    expect(container.querySelector(`.${styles.ghost}`)).toBeInTheDocument();
  });

  it("has correct aria-label on toolbar", () => {
    render(<RichTextEditor />);
    expect(screen.getByRole("toolbar")).toHaveAttribute("aria-label");
  });

  it("does not call onChange during IME composition but fires on compositionEnd", () => {
    const onChange = vi.fn();
    render(<RichTextEditor onChange={onChange} />);
    const editor = screen.getByRole("textbox");

    editor.innerHTML = "Hello";
    fireEvent.compositionStart(editor);
    editor.innerHTML = "Hello中";
    fireEvent.input(editor);
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.compositionEnd(editor);
    expect(onChange).toHaveBeenCalledWith("Hello中");
  });

  it("opens window.prompt when link button is clicked", () => {
    const promptSpy = vi.spyOn(window, "prompt").mockReturnValueOnce(null);
    render(<RichTextEditor toolbar={["link"]} />);
    fireEvent.click(screen.getByRole("button", { name: /link/i }));
    expect(promptSpy).toHaveBeenCalled();
    promptSpy.mockRestore();
  });

  it("does not call onChange when link prompt is cancelled", () => {
    vi.spyOn(window, "prompt").mockReturnValueOnce(null);
    const onChange = vi.fn();
    render(<RichTextEditor toolbar={["link"]} onChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: /link/i }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("link button is disabled when component is disabled", () => {
    render(<RichTextEditor disabled toolbar={["link"]} />);
    expect(screen.getByRole("button", { name: /link/i })).toBeDisabled();
  });

  it("removeFormat button is rendered and accessible", () => {
    render(<RichTextEditor toolbar={["removeFormat"]} />);
    const btn = screen.getByRole("button", { name: /remove formatting/i });
    expect(btn).toBeInTheDocument();
    expect(btn).not.toBeDisabled();
  });

  it("removeFormat button is disabled when component is disabled", () => {
    render(<RichTextEditor disabled toolbar={["removeFormat"]} />);
    expect(screen.getByRole("button", { name: /remove formatting/i })).toBeDisabled();
  });

  it("prevents default on toolbar mousedown to preserve editor focus", () => {
    render(<RichTextEditor />);
    const toolbar = screen.getByRole("toolbar");
    const event = createEvent.mouseDown(toolbar);
    fireEvent(toolbar, event);
    expect(event.defaultPrevented).toBe(true);
  });

  it("applies hasCustomWidth class for numeric width", () => {
    const { container } = render(<RichTextEditor width={400} />);
    expect(container.querySelector(`.${styles.hasCustomWidth}`)).toBeInTheDocument();
  });

  it("applies hasCustomWidth class for string px width", () => {
    const { container } = render(<RichTextEditor width="300px" />);
    expect(container.querySelector(`.${styles.hasCustomWidth}`)).toBeInTheDocument();
  });

  it("applies semantic width class for named width", () => {
    const { container } = render(<RichTextEditor width="md" />);
    expect(container.querySelector(`.${styles.widthMd}`)).toBeInTheDocument();
  });

  it("does not apply semantic width class when fullWidth overrides it", () => {
    const { container } = render(<RichTextEditor width="md" fullWidth />);
    expect(container.querySelector(`.${styles.widthMd}`)).not.toBeInTheDocument();
    expect(container.querySelector(`.${styles.fullWidth}`)).toBeInTheDocument();
  });

  it("syncs updated controlled value to editor DOM", () => {
    const { rerender } = render(<RichTextEditor value="<p>Initial</p>" />);
    const editor = screen.getByRole("textbox");
    expect(editor.innerHTML).toBe("<p>Initial</p>");
    rerender(<RichTextEditor value="<p>Updated</p>" />);
    expect(editor.innerHTML).toBe("<p>Updated</p>");
  });

  it("does not reset DOM when controlled value is unchanged", () => {
    const { rerender } = render(<RichTextEditor value="<p>Same</p>" />);
    const editor = screen.getByRole("textbox");
    rerender(<RichTextEditor value="<p>Same</p>" />);
    expect(editor.innerHTML).toBe("<p>Same</p>");
  });

  it("applies aria-label to textbox", () => {
    render(<RichTextEditor aria-label="Rich text input" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-label", "Rich text input");
  });

  it("applies aria-labelledby to textbox", () => {
    render(<RichTextEditor aria-labelledby="external-id" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-labelledby", "external-id");
  });

  it("applies custom id to the editor element", () => {
    render(<RichTextEditor id="my-editor" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "my-editor");
  });

  it("renders toolbar buttons with custom labels", () => {
    render(<RichTextEditor toolbar={["bold"]} labels={{ bold: "太字" }} />);
    expect(screen.getByRole("button", { name: "太字" })).toBeInTheDocument();
  });

  it("sets custom toolbar aria-label via labels prop", () => {
    render(<RichTextEditor labels={{ toolbar: "書式ツールバー" }} />);
    expect(screen.getByRole("toolbar")).toHaveAttribute("aria-label", "書式ツールバー");
  });

  it("handles keyUp event without error", () => {
    render(<RichTextEditor />);
    expect(() => fireEvent.keyUp(screen.getByRole("textbox"))).not.toThrow();
  });

  it("handles mouseUp event without error", () => {
    render(<RichTextEditor />);
    expect(() => fireEvent.mouseUp(screen.getByRole("textbox"))).not.toThrow();
  });

  it("renders toolbar separators", () => {
    const { container } = render(
      <RichTextEditor toolbar={["bold", "separator", "italic"]} />,
    );
    expect(container.querySelectorAll(`.${styles.toolbarSep}`)).toHaveLength(1);
  });

  it("applies error intent class on error", () => {
    const { container } = render(<RichTextEditor error="Required" />);
    expect(container.querySelector(`.${styles.danger}`)).toBeInTheDocument();
  });

  it("applies aria-required when required", () => {
    render(<RichTextEditor required />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-required", "true");
  });

  it("uses custom link prompt label", () => {
    const promptSpy = vi.spyOn(window, "prompt").mockReturnValueOnce(null);
    render(<RichTextEditor toolbar={["link"]} labels={{ linkPrompt: "URLを入力" }} />);
    fireEvent.click(screen.getByRole("button", { name: /link/i }));
    expect(promptSpy).toHaveBeenCalledWith("URLを入力", expect.any(String));
    promptSpy.mockRestore();
  });

  it("renders all heading toolbar items", () => {
    render(<RichTextEditor toolbar={["h1", "h2", "h3"]} />);
    expect(screen.getByRole("button", { name: /heading 1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /heading 2/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /heading 3/i })).toBeInTheDocument();
  });

  it("renders ul and ol toolbar items", () => {
    render(<RichTextEditor toolbar={["ul", "ol"]} />);
    expect(screen.getByRole("button", { name: "Bullet list" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Numbered list" })).toBeInTheDocument();
  });

  it("renders unlink toolbar item", () => {
    render(<RichTextEditor toolbar={["unlink"]} />);
    expect(screen.getByRole("button", { name: /remove link/i })).toBeInTheDocument();
  });

  it("bold button is rendered and accessible when not disabled", () => {
    render(<RichTextEditor toolbar={["bold"]} />);
    const boldBtn = screen.getByRole("button", { name: /bold/i });
    expect(boldBtn).toBeInTheDocument();
    expect(boldBtn).not.toBeDisabled();
  });
});
