import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { Editor as TiptapCore, type Editor as TiptapEditor } from "@tiptap/core";
import { StarterKit } from "@tiptap/starter-kit";
import { Markdown } from "@tiptap/markdown";
import { describe, it, expect, vi } from "vitest";
import { RichTextEditor } from "./RichTextEditor";
import { isSafeImageUrl, isSafeLinkUrl } from "./safeUrl";
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

    // 利用者が onChange の値を整形して返しても（末尾の改行など）、文書が同じなら置き換えない。
    // 置き換えると文書全体の置換になり、キャレットが末尾へ飛ぶ。キャレットは Tiptap が編集領域の DOM に載せる
    // エディタから直接読む（jsdom ではツールバーのクリックの focus でも選択が動くため、ボタンの状態では測れない）。
    it.each([
      ["html", "<p>abc def</p>"],
      ["markdown", "abc def"],
    ] as const)("keeps the caret when the parent echoes an equivalent %s value", async (format, initial) => {
      const Normalizing = () => {
        const [value, setValue] = React.useState<string>(initial);
        return <RichTextEditor format={format} value={value} onChange={(v) => setValue(`${v}\n`)} />;
      };
      render(<Normalizing />);
      const { editor: ed } = (await findEditor()) as HTMLElement & { editor: TiptapEditor };
      // 「abc」の後ろ（段落の頭が 1）にキャレットを置いて 1 文字入れる → onChange → 親が "\n" を足して返す
      act(() => {
        ed.commands.setTextSelection(4);
        ed.commands.insertContent("X");
      });
      await waitFor(() => expect(ed.getText()).toBe("abcX def"));
      expect(ed.state.selection.from).toBe(5);
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

  describe("image", () => {
    const openImageDialog = async () => {
      await findEditor();
      fireEvent.click(screen.getByRole("button", { name: /insert image/i }));
      return screen.findByRole("dialog");
    };

    it("is not in the default toolbar", () => {
      render(<RichTextEditor />);
      expect(screen.queryByRole("button", { name: /insert image/i })).not.toBeInTheDocument();
    });

    it("inserts an image with alternative text from the dialog", async () => {
      const onChange = vi.fn();
      render(<RichTextEditor toolbar={["image"]} onChange={onChange} />);
      await openImageDialog();
      fireEvent.change(screen.getByLabelText("Image URL"), { target: { value: "https://ok.example/chart.png" } });
      const alt = screen.getByLabelText("Alternative text");
      expect(alt).toHaveAccessibleDescription(/decorative/i);
      fireEvent.change(alt, { target: { value: "Sales by month" } });
      fireEvent.click(screen.getByRole("button", { name: /apply/i }));
      await waitFor(() =>
        expect(onChange).toHaveBeenLastCalledWith('<img src="https://ok.example/chart.png" alt="Sales by month">'),
      );
    });

    it("refuses a URL that is not allowed for images", async () => {
      const onChange = vi.fn();
      render(<RichTextEditor toolbar={["image"]} onChange={onChange} labels={{ imageInvalid: "Bad image URL" }} />);
      await openImageDialog();
      fireEvent.change(screen.getByLabelText("Image URL"), { target: { value: "data:image/png;base64,AAAA" } });
      fireEvent.click(screen.getByRole("button", { name: /apply/i }));
      expect(await screen.findByText("Bad image URL")).toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });

    it("offers a file picker only with onImageUpload, and fills the URL with the uploaded one", async () => {
      const { unmount } = render(<RichTextEditor toolbar={["image"]} />);
      await openImageDialog();
      expect(screen.queryByRole("button", { name: /choose a file/i })).not.toBeInTheDocument();
      unmount();

      const onImageUpload = vi.fn().mockResolvedValue("https://cdn.example/up.png");
      const { container } = render(<RichTextEditor toolbar={["image"]} onImageUpload={onImageUpload} />);
      await openImageDialog();
      expect(screen.getByRole("button", { name: /choose a file/i })).toBeInTheDocument();
      const file = new File(["x"], "photo.png", { type: "image/png" });
      const input = document.body.querySelector<HTMLInputElement>('input[type="file"]')!;
      expect(container.contains(input) || document.body.contains(input)).toBe(true);
      fireEvent.change(input, { target: { files: [file] } });
      await waitFor(() => expect(screen.getByLabelText("Image URL")).toHaveValue("https://cdn.example/up.png"));
      expect(onImageUpload).toHaveBeenCalledWith(file);
    });

    it("shows an error when the upload fails or returns a URL that is not allowed", async () => {
      const onImageUpload = vi.fn().mockResolvedValue("javascript:alert(1)");
      render(<RichTextEditor toolbar={["image"]} onImageUpload={onImageUpload} labels={{ imageUploadFailed: "Upload failed" }} />);
      await openImageDialog();
      const input = document.body.querySelector<HTMLInputElement>('input[type="file"]')!;
      fireEvent.change(input, { target: { files: [new File(["x"], "a.png", { type: "image/png" })] } });
      expect(await screen.findByText("Upload failed")).toBeInTheDocument();
      expect(screen.getByLabelText("Image URL")).toHaveValue("");
    });

    it("uploads and inserts image files pasted into the editor", async () => {
      const onChange = vi.fn();
      const onImageUpload = vi.fn().mockResolvedValue("https://cdn.example/pasted.png");
      const { rerender } = render(<RichTextEditor onImageUpload={onImageUpload} onChange={onChange} />);
      const editor = await findEditor();
      // 属性が変わる再描画（setOptions）を挟んでも、貼り付けの処理が効き続けることを見る
      rerender(<RichTextEditor onImageUpload={onImageUpload} onChange={onChange} error="Check the image" />);
      await waitFor(() => expect(editor).toHaveAttribute("aria-invalid", "true"));
      const file = new File(["x"], "shot.png", { type: "image/png" });
      const event = new Event("paste", { bubbles: true, cancelable: true });
      Object.defineProperty(event, "clipboardData", { value: { files: [file], getData: () => "", types: ["Files"] } });
      editor.dispatchEvent(event);
      await waitFor(() => expect(onChange).toHaveBeenLastCalledWith(expect.stringContaining('<img src="https://cdn.example/pasted.png"')));
      expect(onImageUpload).toHaveBeenCalledWith(file);
      expect(event.defaultPrevented).toBe(true);
    });

    it("leaves pasted files alone without onImageUpload", async () => {
      render(<RichTextEditor />);
      const editor = await findEditor();
      const event = new Event("paste", { bubbles: true, cancelable: true });
      Object.defineProperty(event, "clipboardData", {
        value: { files: [new File(["x"], "shot.png", { type: "image/png" })], getData: () => "", types: ["Files"] },
      });
      editor.dispatchEvent(event);
      expect(editor.querySelector("img")).toBeNull();
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
      expect(html).not.toMatch(/<script|<style|onclick|onerror|javascript:|data:/i);
      expect(html).toContain('<a href="https://ok.example">good</a>');
      expect(html).toContain("bad");
      expect(html).toContain("data");
      // 画像そのものは許可しているので、安全な src の img は on* だけ落として残る
      expect(html).toMatch(/<img src="x"/);
    });

    it("keeps images with an allowed src and drops the others", async () => {
      render(
        <RichTextEditor
          defaultValue={
            '<p>a</p><img src="https://ok.example/a.png" alt="A chart">' +
            '<img src="/relative/b.png" alt="">' +
            '<img src="javascript:alert(1)" alt="js">' +
            '<img src="data:image/png;base64,iVBORw0KGgo=" alt="inline">' +
            '<img src="blob:https://ok.example/123" alt="blob">'
          }
        />,
      );
      const images = Array.from((await findEditor()).querySelectorAll("img"));
      expect(images.map((img) => img.getAttribute("src"))).toEqual(["https://ok.example/a.png", "/relative/b.png"]);
      expect(images[0]).toHaveAttribute("alt", "A chart");
    });

    it("sanitizes a controlled value the same way", async () => {
      const { rerender } = render(<RichTextEditor value="<p>One</p>" />);
      const editor = await findEditor();
      rerender(<RichTextEditor value={'<p><a href="JaVaScRiPt:alert(1)">x</a><iframe src="https://evil"></iframe></p>'} />);
      await waitFor(() => expect(editor.textContent).toBe("x"));
      expect(editor.innerHTML).not.toMatch(/<a|<iframe|javascript:/i);
    });
  });

  describe('format="markdown"', () => {
    it("reads Markdown into the same structure as HTML", async () => {
      render(
        <RichTextEditor
          format="markdown"
          defaultValue={"# Title\n\n**b** *i* ~~s~~ [link](https://ok.example)\n\n- a\n- b\n\n1. c"}
        />,
      );
      expect((await findEditor()).innerHTML).toBe(
        '<h1>Title</h1><p><strong>b</strong> <em>i</em> <s>s</s> <a href="https://ok.example">link</a></p>' +
          "<ul><li><p>a</p></li><li><p>b</p></li></ul><ol><li><p>c</p></li></ol>",
      );
    });

    it("reports Markdown on change", async () => {
      const onChange = vi.fn();
      render(<RichTextEditor format="markdown" defaultValue="plain and **bold**" toolbar={["h2"]} onChange={onChange} />);
      await findEditor();
      fireEvent.click(screen.getByRole("button", { name: /heading 2/i }));
      await waitFor(() => expect(onChange).toHaveBeenLastCalledWith("## plain and **bold**"));
    });

    // Markdown に下線の記法は無い。<u> で書くと、生の HTML を描かない表示（wimui の Markdown を含む）でタグが文字のまま出る
    it("has no underline: keeps only the text of <u> and ++, and hides the underline button", async () => {
      const onChange = vi.fn();
      render(
        <RichTextEditor
          format="markdown"
          defaultValue="<u>under</u> and ++plus++ and C++"
          toolbar={["underline", "separator", "bold", "separator", "underline", "h1"]}
          onChange={onChange}
        />,
      );
      expect((await findEditor()).innerHTML).toBe("<p>under and ++plus++ and C++</p>");
      // 下線を外した後に端に残る区切りも出さない
      expect(screen.getAllByRole("button").map((b) => b.getAttribute("aria-label"))).toEqual([
        expect.stringMatching(/bold/i),
        expect.stringMatching(/heading 1/i),
      ]);
      expect(document.querySelectorAll(`.${styles.toolbarSep}`)).toHaveLength(1);
      fireEvent.click(screen.getByRole("button", { name: /heading 1/i }));
      await waitFor(() => expect(onChange).toHaveBeenCalled());
      expect(onChange.mock.lastCall?.[0]).toMatch(/^# under and /);
      expect(onChange.mock.lastCall?.[0]).not.toContain("<u>");
    });

    it("round-trips its own output", async () => {
      const markdown =
        "# T\n\n**b** *i* ~~s~~ [l](https://ok.example) a\\*b\n\n![A chart](https://ok.example/a.png)\n\n- a\n- b\n\n1. c";
      const onChange = vi.fn();
      render(<RichTextEditor format="markdown" defaultValue={markdown} toolbar={["h1"]} onChange={onChange} />);
      await findEditor();
      // 見出しを付けて外すと文書は元に戻る。そのときの出力が読んだ Markdown と一致する
      fireEvent.click(screen.getByRole("button", { name: /heading 1/i }));
      fireEvent.click(screen.getByRole("button", { name: /heading 1/i }));
      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2));
      expect(onChange).toHaveBeenLastCalledWith(markdown);
    });

    it("does not read ++ as underline (C++ stays text)", async () => {
      render(<RichTextEditor format="markdown" defaultValue="C++ and C++" />);
      expect((await findEditor()).innerHTML).toBe("<p>C++ and C++</p>");
    });

    // @tiptap/markdown は記法を marked の共有インスタンスに足す。HTML の形式のエディタ（下線あり）が先に作られても、
    // 同じページの Markdown の形式のエディタが `++` を下線として読まないこと
    it("is not affected by an HTML editor on the same page", async () => {
      render(
        <>
          <RichTextEditor aria-label="html" defaultValue="<p><u>u</u></p>" />
          <RichTextEditor aria-label="md" format="markdown" defaultValue="C++ and C++" />
        </>,
      );
      expect((await screen.findByRole("textbox", { name: "html" })).innerHTML).toBe("<p><u>u</u></p>");
      expect((await screen.findByRole("textbox", { name: "md" })).innerHTML).toBe("<p>C++ and C++</p>");
    });

    // 利用者自身の Tiptap エディタ（下線＋Markdown 拡張）は共有の marked に `++` を足す。部品はエディタごとに
    // 独立した marked を使うので、それにも影響されないこと
    it("is not affected by the consumer's own Tiptap editor that registers ++ on the shared marked", async () => {
      const foreign = new TiptapCore({ extensions: [StarterKit, Markdown] });
      try {
        render(<RichTextEditor format="markdown" defaultValue="C++ and C++" />);
        expect((await findEditor()).innerHTML).toBe("<p>C++ and C++</p>");
      } finally {
        foreign.destroy();
      }
    });

    it("keeps the text of structures the editor has no toolbar for", async () => {
      render(
        <RichTextEditor
          format="markdown"
          defaultValue={
            "> quote\n\n```js\nconst a = 1;\nconst b = 2;\n```\n\n`inline` text\n\n#### h4\n\n" +
            "| a | *b* |\n|---|---|\n| 1 | 2 |\n\n---\n\n- [ ] task"
          }
        />,
      );
      expect((await findEditor()).innerHTML).toBe(
        "<p>quote</p><p>const a = 1;<br>const b = 2;</p><p>inline text</p><p>h4</p>" +
          "<p>a | <em>b</em></p><p>1 | 2</p><ul><li><p>task</p></li></ul>",
      );
    });

    it("applies the same URL rules as HTML (links, images) and drops raw HTML the schema does not allow", async () => {
      render(
        <RichTextEditor
          format="markdown"
          defaultValue={
            "[bad](javascript:alert(1)) [good](https://ok.example)\n\n" +
            "![js](javascript:alert(1)) ![inline](data:image/png;base64,iVBORw0KGgo=) ![ok](https://ok.example/a.png)\n\n" +
            '<script>alert(1)</script>\n\n<img src="x" onerror="alert(2)">\n\n<a href="javascript:alert(3)">raw</a>'
          }
        />,
      );
      const editor = await findEditor();
      const html = editor.innerHTML;
      expect(html).not.toMatch(/<script|onerror|javascript:|data:/i);
      expect(html).toContain('<a href="https://ok.example">good</a>');
      expect(html).toContain("bad");
      expect(html).toContain("raw");
      expect(Array.from(editor.querySelectorAll("img")).map((img) => img.getAttribute("src"))).toEqual([
        "https://ok.example/a.png",
        "x",
      ]);
      // 画像はブロックとして置く（段落の中に入らない）
      expect(editor.querySelector("p img")).toBeNull();
    });

    it("syncs a controlled Markdown value, sanitized, without calling onChange", async () => {
      const onChange = vi.fn();
      const { rerender } = render(<RichTextEditor format="markdown" value="One" onChange={onChange} />);
      const editor = await findEditor();
      expect(editor.innerHTML).toBe("<p>One</p>");
      rerender(<RichTextEditor format="markdown" value={"## Two\n\n[x](javascript:alert(1))"} onChange={onChange} />);
      await waitFor(() => expect(editor.innerHTML).toBe("<h2>Two</h2><p>x</p>"));
      expect(onChange).not.toHaveBeenCalled();
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

describe("isSafeImageUrl", () => {
  it.each(["https://example.com/a.png", "http://example.com/a.png", "/img/a.png", "a.png", "//cdn.example.com/a.png"])(
    "allows %s",
    (url) => {
      expect(isSafeImageUrl(url)).toBe(true);
    },
  );

  it.each([
    "javascript:alert(1)",
    "data:image/png;base64,iVBORw0KGgo=",
    "blob:https://example.com/123",
    "mailto:someone@example.com",
    "",
    null,
    undefined,
  ])("refuses %j", (url) => {
    expect(isSafeImageUrl(url)).toBe(false);
  });
});
