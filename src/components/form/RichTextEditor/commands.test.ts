import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  createLink,
  getActiveFormats,
  removeAllFormatting,
  removeLink,
  setBlock,
  toggleInline,
  toggleList,
} from "./commands";

let root: HTMLDivElement;

const setup = (html: string): HTMLDivElement => {
  root.innerHTML = html;
  return root;
};

/** el 内の最初のテキストノードの [start, end) を選択する */
const selectText = (el: Element, start: number, end: number): void => {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const text = walker.nextNode() as Text;
  const range = document.createRange();
  range.setStart(text, start);
  range.setEnd(text, end);
  const selection = window.getSelection()!;
  selection.removeAllRanges();
  selection.addRange(range);
};

/** el の内容全体を選択する */
const selectAll = (el: Element): void => {
  const range = document.createRange();
  range.selectNodeContents(el);
  const selection = window.getSelection()!;
  selection.removeAllRanges();
  selection.addRange(range);
};

beforeEach(() => {
  root = document.createElement("div");
  document.body.appendChild(root);
});

afterEach(() => {
  window.getSelection()?.removeAllRanges();
  root.remove();
});

describe("toggleInline", () => {
  it("wraps the selection in <strong>", () => {
    setup("<p>Hello world</p>");
    selectText(root.querySelector("p")!, 0, 5);
    toggleInline(root, "bold");
    expect(root.innerHTML).toBe("<p><strong>Hello</strong> world</p>");
    // 適用後の再選択（strong を外側から包む選択）でもアクティブ判定できること
    expect(getActiveFormats(root).has("bold")).toBe(true);
  });

  it("unwraps when the whole selection is already bold", () => {
    setup("<p><strong>Hello</strong> world</p>");
    selectAll(root.querySelector("strong")!);
    toggleInline(root, "bold");
    expect(root.querySelector("strong")).toBeNull();
    expect(root.textContent).toBe("Hello world");
  });

  it("splits a partially selected formatted element", () => {
    setup("<p><strong>abcdef</strong></p>");
    selectText(root.querySelector("strong")!, 2, 4);
    toggleInline(root, "bold");
    const html = root.innerHTML;
    expect(html).toContain("<strong>ab</strong>");
    expect(html).toContain("<strong>ef</strong>");
    expect(root.textContent).toBe("abcdef");
  });

  it("normalizes legacy <b> tags when toggling off", () => {
    setup("<p><b>Hello</b></p>");
    selectAll(root.querySelector("b")!);
    toggleInline(root, "bold");
    expect(root.querySelector("b")).toBeNull();
    expect(root.textContent).toBe("Hello");
  });

  it("applies italic with <em> without disturbing other formats", () => {
    setup("<p><strong>Hello</strong></p>");
    selectAll(root.querySelector("strong")!);
    toggleInline(root, "italic");
    expect(root.querySelector("strong")).not.toBeNull();
    expect(root.querySelector("em")).not.toBeNull();
  });
});

describe("getActiveFormats", () => {
  it("detects inline formats and block tag from the caret ancestors", () => {
    setup("<h2><strong><em>Hi</em></strong></h2>");
    selectText(root.querySelector("em")!, 0, 1);
    const active = getActiveFormats(root);
    expect(active.has("bold")).toBe(true);
    expect(active.has("italic")).toBe(true);
    expect(active.has("h2")).toBe(true);
  });

  it("detects list membership", () => {
    setup("<ul><li>item</li></ul>");
    selectText(root.querySelector("li")!, 0, 2);
    expect(getActiveFormats(root).has("ul")).toBe(true);
  });

  it("returns empty set when selection is outside the editor", () => {
    setup("<p>Hello</p>");
    window.getSelection()?.removeAllRanges();
    expect(getActiveFormats(root).size).toBe(0);
  });
});

describe("setBlock", () => {
  it("converts a paragraph to a heading", () => {
    setup("<p>Title</p>");
    selectText(root.querySelector("p")!, 0, 3);
    setBlock(root, "h1");
    expect(root.innerHTML).toBe("<h1>Title</h1>");
  });

  it("toggles the same heading back to a paragraph", () => {
    setup("<h1>Title</h1>");
    selectText(root.querySelector("h1")!, 0, 3);
    setBlock(root, "h1");
    expect(root.innerHTML).toBe("<p>Title</p>");
  });

  it("wraps bare inline content into the block tag", () => {
    setup("just text");
    selectText(root, 0, 4);
    setBlock(root, "h2");
    expect(root.innerHTML).toBe("<h2>just text</h2>");
  });
});

describe("toggleList", () => {
  it("wraps a paragraph into a list", () => {
    setup("<p>item</p>");
    selectText(root.querySelector("p")!, 0, 2);
    toggleList(root, "ul");
    expect(root.innerHTML).toBe("<ul><li>item</li></ul>");
  });

  it("unwraps a list of the same type back to paragraphs", () => {
    setup("<ul><li>one</li><li>two</li></ul>");
    selectText(root.querySelector("li")!, 0, 2);
    toggleList(root, "ul");
    expect(root.innerHTML).toBe("<p>one</p><p>two</p>");
  });

  it("converts a list to the other type", () => {
    setup("<ul><li>one</li></ul>");
    selectText(root.querySelector("li")!, 0, 2);
    toggleList(root, "ol");
    expect(root.innerHTML).toBe("<ol><li>one</li></ol>");
  });
});

describe("createLink / removeLink", () => {
  it("wraps the selection in an anchor", () => {
    setup("<p>Visit here now</p>");
    selectText(root.querySelector("p")!, 6, 10);
    createLink(root, "https://example.com");
    expect(root.innerHTML).toBe('<p>Visit <a href="https://example.com">here</a> now</p>');
  });

  it("inserts the URL as link text when the selection is collapsed", () => {
    setup("<p></p>");
    const range = document.createRange();
    range.selectNodeContents(root.querySelector("p")!);
    range.collapse(true);
    const selection = window.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
    createLink(root, "https://example.com");
    expect(root.querySelector("a")?.getAttribute("href")).toBe("https://example.com");
    expect(root.querySelector("a")?.textContent).toBe("https://example.com");
  });

  it("removes the anchor around the caret", () => {
    setup('<p><a href="https://example.com">here</a></p>');
    selectText(root.querySelector("a")!, 0, 2);
    removeLink(root);
    expect(root.querySelector("a")).toBeNull();
    expect(root.textContent).toBe("here");
  });
});

describe("removeAllFormatting", () => {
  it("strips inline formatting and demotes headings across the editor when collapsed", () => {
    setup("<h1><strong>Title</strong></h1><p><em>body</em></p>");
    window.getSelection()?.removeAllRanges();
    removeAllFormatting(root);
    expect(root.innerHTML).toBe("<p>Title</p><p>body</p>");
  });

  it("keeps links (parity with execCommand removeFormat)", () => {
    setup('<p><strong><a href="https://example.com">x</a></strong></p>');
    window.getSelection()?.removeAllRanges();
    removeAllFormatting(root);
    expect(root.querySelector("a")).not.toBeNull();
    expect(root.querySelector("strong")).toBeNull();
  });

  it("only affects the selection when one exists", () => {
    setup("<p><strong>one</strong></p><p><strong>two</strong></p>");
    selectAll(root.querySelector("p")!);
    removeAllFormatting(root);
    expect(root.querySelectorAll("strong")).toHaveLength(1);
    expect(root.querySelectorAll("strong")[0].textContent).toBe("two");
  });
});
