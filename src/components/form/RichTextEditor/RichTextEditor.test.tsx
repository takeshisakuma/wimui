import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RichTextEditor } from "./RichTextEditor";
import { isSafeLinkUrl } from "./safeUrl";
import styles from "./rich-text-editor.module.scss";

// jsdom は Range / Element の矩形を持たない。ProseMirror はコマンドの後にキャレットを画面内へ
// スクロールさせるため矩形を読むので、空の矩形を返す代用を置く（編集操作そのものは e2e で本物のブラウザで確かめる）。
const emptyRects = () => Object.assign([], { item: () => null }) as unknown as DOMRectList;
if (!Range.prototype.getClientRects) Range.prototype.getClientRects = emptyRects;
if (!Range.prototype.getBoundingClientRect) Range.prototype.getBoundingClientRect = () => new DOMRect();
if (!(Element.prototype as { getClientRects?: unknown }).getClientRects) Element.prototype.getClientRects = emptyRects;
if (!document.elementFromPoint) document.elementFromPoint = () => null;

// 編集領域（ProseMirror の contenteditable）はマウント後に作られる（immediatelyRender: false）。
const findEditor = () => screen.findByRole("textbox");

describe("RichTextEditor", () => {
  describe("props contract", () => {
    it("renders the toolbar and editor area", async () => {
      render(<RichTextEditor />);
      expect(screen.getByRole("toolbar")).toBeInTheDocument();
      expect(await findEditor()).toHaveAttribute("contenteditable", "true");
    });

    it("renders with a label and names the editor with it", async () => {
      render(<RichTextEditor label="Content" />);
      expect(await screen.findByRole("textbox", { name: "Content" })).toBeInTheDocument();
    });

    it("falls back to a built-in accessible name when no label is given", async () => {
      render(<RichTextEditor />);
      const editor = await findEditor();
      expect(editor).toHaveAttribute("aria-label");
      expect(editor.getAttribute("aria-label")).not.toBe("");
    });

    it("applies aria-label and aria-labelledby to the editor", async () => {
      const { unmount } = render(<RichTextEditor aria-label="Body" />);
      expect(await screen.findByRole("textbox", { name: "Body" })).toBeInTheDocument();
      unmount();
      render(
        <>
          <span id="ext-label">External</span>
          <RichTextEditor aria-labelledby="ext-label" />
        </>,
      );
      expect(await screen.findByRole("textbox", { name: "External" })).toBeInTheDocument();
    });

    it("renders the error message and marks the editor invalid", async () => {
      render(<RichTextEditor error="Required" />);
      expect(screen.getByText("Required")).toBeInTheDocument();
      const editor = await findEditor();
      expect(editor).toHaveAttribute("aria-invalid", "true");
      expect(editor).toHaveAccessibleDescription("Required");
    });

    it("sets aria-required when required", async () => {
      render(<RichTextEditor required />);
      expect(await findEditor()).toHaveAttribute("aria-required", "true");
    });

    it("applies a custom id to the editor and points the toolbar at it", async () => {
      render(<RichTextEditor id="my-editor" />);
      expect(await findEditor()).toHaveAttribute("id", "my-editor");
      expect(screen.getByRole("toolbar")).toHaveAttribute("aria-controls", "my-editor");
    });

    it("makes the editor read-only and disables the toolbar when disabled", async () => {
      render(<RichTextEditor disabled toolbar={["bold", "link"]} />);
      const editor = await findEditor();
      expect(editor).toHaveAttribute("contenteditable", "false");
      expect(editor).toHaveAttribute("aria-disabled", "true");
      expect(screen.getByRole("button", { name: /bold/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /link/i })).toBeDisabled();
    });

    it("shows the placeholder on the empty first paragraph", async () => {
      render(<RichTextEditor placeholder="Write something..." />);
      const editor = await findEditor();
      expect(editor).toHaveAttribute("aria-placeholder", "Write something...");
      await waitFor(() => {
        expect(editor.querySelector("p.is-editor-empty")).toHaveAttribute("data-placeholder", "Write something...");
      });
    });

    it("renders defaultValue", async () => {
      render(<RichTextEditor defaultValue="<p>Initial</p>" />);
      expect((await findEditor()).innerHTML).toBe("<p>Initial</p>");
    });

    it("syncs an updated controlled value into the editor", async () => {
      const { rerender } = render(<RichTextEditor value="<p>One</p>" />);
      const editor = await findEditor();
      expect(editor.innerHTML).toBe("<p>One</p>");
      rerender(<RichTextEditor value="<p>Two</p>" />);
      await waitFor(() => expect(editor.innerHTML).toBe("<p>Two</p>"));
    });

    it("does not call onChange when the controlled value is set from outside", async () => {
      const onChange = vi.fn();
      const { rerender } = render(<RichTextEditor value="<p>One</p>" onChange={onChange} />);
      const editor = await findEditor();
      rerender(<RichTextEditor value="<p>Two</p>" onChange={onChange} />);
      await waitFor(() => expect(editor.innerHTML).toBe("<p>Two</p>"));
      expect(onChange).not.toHaveBeenCalled();
    });

    it("renders only the requested toolbar items, with separators", () => {
      const { container } = render(<RichTextEditor toolbar={["bold", "separator", "italic"]} />);
      expect(screen.getAllByRole("button")).toHaveLength(2);
      expect(container.querySelectorAll(`.${styles.toolbarSep}`)).toHaveLength(1);
    });

    it("uses custom labels for the toolbar and its buttons", () => {
      render(<RichTextEditor toolbar={["bold"]} labels={{ bold: "Negrito", toolbar: "Formatação" }} />);
      expect(screen.getByRole("toolbar", { name: "Formatação" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Negrito" })).toBeInTheDocument();
    });

    it("applies the width and variant classes", () => {
      const { container, rerender } = render(<RichTextEditor fullWidth variant="ghost" />);
      const root = () => container.querySelector(".wim-rich-text-editor")!;
      expect(root()).toHaveClass(styles.fullWidth, styles.ghost);
      rerender(<RichTextEditor width={320} />);
      expect(root()).toHaveClass(styles.hasCustomWidth);
      expect((root() as HTMLElement).style.getPropertyValue("--wim-input-width")).toBe("320px");
      rerender(<RichTextEditor width="md" />);
      expect(root()).toHaveClass(styles.widthMd);
      rerender(<RichTextEditor width="md" fullWidth />);
      expect(root()).not.toHaveClass(styles.widthMd);
    });

    it("prevents default on toolbar mousedown to keep the editor selection", () => {
      render(<RichTextEditor toolbar={["bold"]} />);
      const event = new MouseEvent("mousedown", { bubbles: true, cancelable: true });
      screen.getByRole("toolbar").dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
    });
  });

  describe("commands", () => {
    it("applies a heading via the toolbar and reports the HTML", async () => {
      const onChange = vi.fn();
      render(<RichTextEditor defaultValue="<p>Title</p>" toolbar={["h1"]} onChange={onChange} />);
      await findEditor();
      fireEvent.click(screen.getByRole("button", { name: /heading 1/i }));
      await waitFor(() => expect(onChange).toHaveBeenLastCalledWith("<h1>Title</h1>"));
      expect(screen.getByRole("button", { name: /heading 1/i })).toHaveAttribute("aria-pressed", "true");
    });

    it("reports an emptied editor as an empty string", async () => {
      const onChange = vi.fn();
      render(<RichTextEditor defaultValue="<h1>Title</h1>" toolbar={["removeFormat"]} onChange={onChange} />);
      await findEditor();
      fireEvent.click(screen.getByRole("button", { name: /clear formatting|remove format/i }));
      await waitFor(() => expect(onChange).toHaveBeenLastCalledWith("<p>Title</p>"));
    });
  });

  describe("link dialog", () => {
    it("opens the dialog and does not call onChange when cancelled", async () => {
      const onChange = vi.fn();
      render(<RichTextEditor toolbar={["link"]} onChange={onChange} labels={{ linkPrompt: "Link address" }} />);
      await findEditor();
      fireEvent.click(screen.getByRole("button", { name: /link/i }));
      expect(await screen.findByRole("dialog")).toBeInTheDocument();
      expect(screen.getByLabelText("Link address")).toHaveValue("https://");
      fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
      await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
      expect(onChange).not.toHaveBeenCalled();
    });

    it("inserts a link at the caret", async () => {
      const onChange = vi.fn();
      render(<RichTextEditor toolbar={["link"]} onChange={onChange} labels={{ linkPrompt: "Link address" }} />);
      await findEditor();
      fireEvent.click(screen.getByRole("button", { name: /link/i }));
      fireEvent.change(await screen.findByLabelText("Link address"), { target: { value: "https://example.com" } });
      fireEvent.click(screen.getByRole("button", { name: /apply/i }));
      await waitFor(() =>
        expect(onChange).toHaveBeenLastCalledWith('<p><a href="https://example.com">https://example.com</a></p>'),
      );
    });

    it("refuses a javascript: URL and keeps the dialog open with an error", async () => {
      const onChange = vi.fn();
      render(
        <RichTextEditor
          toolbar={["link"]}
          onChange={onChange}
          labels={{ linkPrompt: "Link address", linkInvalid: "Not allowed" }}
        />,
      );
      await findEditor();
      fireEvent.click(screen.getByRole("button", { name: /link/i }));
      fireEvent.change(await screen.findByLabelText("Link address"), { target: { value: "javascript:alert(1)" } });
      fireEvent.click(screen.getByRole("button", { name: /apply/i }));
      expect(await screen.findByText("Not allowed")).toBeInTheDocument();
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("toolbar keyboard (roving tabindex)", () => {
    it("puts only one button in the tab order and moves with the arrow keys, Home and End", () => {
      render(<RichTextEditor toolbar={["bold", "separator", "italic", "underline"]} />);
      const [boldBtn, italicBtn, underlineBtn] = screen.getAllByRole("button");
      expect(boldBtn).toHaveAttribute("tabindex", "0");
      expect(italicBtn).toHaveAttribute("tabindex", "-1");
      expect(underlineBtn).toHaveAttribute("tabindex", "-1");

      boldBtn.focus();
      fireEvent.keyDown(boldBtn, { key: "ArrowRight" });
      expect(italicBtn).toHaveFocus();
      expect(italicBtn).toHaveAttribute("tabindex", "0");
      expect(boldBtn).toHaveAttribute("tabindex", "-1");

      fireEvent.keyDown(italicBtn, { key: "End" });
      expect(underlineBtn).toHaveFocus();
      fireEvent.keyDown(underlineBtn, { key: "ArrowRight" });
      expect(boldBtn).toHaveFocus();
      fireEvent.keyDown(boldBtn, { key: "ArrowLeft" });
      expect(underlineBtn).toHaveFocus();
      fireEvent.keyDown(underlineBtn, { key: "Home" });
      expect(boldBtn).toHaveFocus();
    });
  });

  describe("sanitizing (the schema rebuilds every input)", () => {
    it("drops script, event handlers, unknown tags and unsafe link URLs", async () => {
      render(
        <RichTextEditor
          defaultValue={
            '<p onclick="steal()">Hi<script>alert(1)</script><img src="x" onerror="alert(2)">' +
            '<a href="javascript:alert(3)">bad</a> <a href="https://ok.example">good</a>' +
            '<a href="data:text/html,<script>alert(4)</script>">data</a></p><style>p{}</style>'
          }
        />,
      );
      const html = (await findEditor()).innerHTML;
      expect(html).not.toMatch(/<script|<img|<style|onclick|onerror|javascript:|data:/i);
      expect(html).toContain('<a href="https://ok.example">good</a>');
      expect(html).toContain("bad");
      expect(html).toContain("data");
    });

    it("sanitizes a controlled value the same way", async () => {
      const { rerender } = render(<RichTextEditor value="<p>One</p>" />);
      const editor = await findEditor();
      rerender(<RichTextEditor value={'<p><a href="JaVaScRiPt:alert(1)">x</a><iframe src="https://evil"></iframe></p>'} />);
      await waitFor(() => expect(editor.textContent).toBe("x"));
      expect(editor.innerHTML).not.toMatch(/<a|<iframe|javascript:/i);
    });
  });
});

describe("isSafeLinkUrl", () => {
  it.each([
    "https://example.com",
    "http://example.com/a?b=c#d",
    "mailto:someone@example.com",
    "HTTPS://EXAMPLE.COM",
    "/relative/path",
    "#section",
    "?q=1",
    "page.html",
    "//cdn.example.com/x",
  ])("allows %s", (url) => {
    expect(isSafeLinkUrl(url)).toBe(true);
  });

  it.each([
    "javascript:alert(1)",
    "JavaScript:alert(1)",
    " javascript:alert(1)",
    "java\tscript:alert(1)",
    "java\nscript:alert(1)",
    "\u0000javascript:alert(1)",
    "vbscript:msgbox(1)",
    "data:text/html;base64,PHNjcmlwdD4=",
    "file:///etc/passwd",
    "",
    "   ",
  ])("refuses %j", (url) => {
    expect(isSafeLinkUrl(url)).toBe(false);
  });
});
