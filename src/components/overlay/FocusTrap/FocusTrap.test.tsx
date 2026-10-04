import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FocusTrap } from "./FocusTrap";

describe("FocusTrap", () => {
  it("renders children", () => {
    render(
      <FocusTrap>
        <button>Click</button>
      </FocusTrap>,
    );
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  it("auto focuses first element", () => {
    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
      </FocusTrap>,
    );
    expect(screen.getByText("First")).toHaveFocus();
  });

  it("does not auto focus when initialFocus=false", () => {
    const btn = document.createElement("button");
    btn.textContent = "Outside";
    document.body.appendChild(btn);
    btn.focus();

    render(
      <FocusTrap initialFocus={false}>
        <button>Inside</button>
      </FocusTrap>,
    );

    expect(screen.getByText("Inside")).not.toHaveFocus();
    document.body.removeChild(btn);
  });

  it("does not trap focus when active=false", () => {
    render(
      <FocusTrap active={false}>
        <button>Button</button>
      </FocusTrap>,
    );
    expect(screen.getByText("Button")).not.toHaveFocus();
  });

  it("wraps Tab from last to first element", () => {
    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
        <button>Last</button>
      </FocusTrap>,
    );
    const last = screen.getByText("Last");
    last.focus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: false });
    expect(screen.getByText("First")).toHaveFocus();
  });

  it("wraps Shift+Tab from first to last element", () => {
    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
        <button>Last</button>
      </FocusTrap>,
    );
    screen.getByText("First").focus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(screen.getByText("Last")).toHaveFocus();
  });

  // 末尾が tabindex="-1" のボタンだと、以前は「最後の要素」がそのボタンになり、Tab で実際に出ていく
  // 要素（ここでは Item）が端として扱われず、フォーカスが外へ出た（TreeSelect の開いたパネル）。
  it("wraps Tab from the last tabbable element when untabbable buttons follow it", () => {
    render(
      <FocusTrap initialFocus={false}>
        <div tabIndex={0}>Item</div>
        <button tabIndex={-1}>Hidden action 1</button>
        <button tabIndex={-1}>Hidden action 2</button>
      </FocusTrap>,
    );
    const item = screen.getByText("Item");
    item.focus();
    const notPrevented = fireEvent.keyDown(document, { key: "Tab" });
    expect(notPrevented).toBe(false);
    expect(item).toHaveFocus();
  });

  it("does not auto focus an untabbable element", () => {
    render(
      <FocusTrap>
        <button tabIndex={-1}>Skipped</button>
        <button>First tabbable</button>
      </FocusTrap>,
    );
    expect(screen.getByText("First tabbable")).toHaveFocus();
  });

  // フォーカスが、停止点の一覧に無い要素（スクリプトでフォーカスした tabindex="-1" の入れ物）に
  // あるとき。前にも後ろにも停止点が無い方向へは、外へ出さずに折り返す。
  it("wraps when focus sits on a programmatically focused container", () => {
    render(
      <FocusTrap initialFocus={false}>
        <div tabIndex={-1} data-testid="container">
          <button>Inner</button>
        </div>
      </FocusTrap>,
    );
    const container = screen.getByTestId("container");
    container.focus();
    // 入れ物より前に停止点は無い → Shift+Tab は最後の停止点へ折り返す
    const back = fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(back).toBe(false);
    expect(screen.getByText("Inner")).toHaveFocus();

    // 入れ物より後ろには停止点がある → Tab は止めない（ブラウザが次へ進める）
    container.focus();
    const forward = fireEvent.keyDown(document, { key: "Tab" });
    expect(forward).toBe(true);
  });

  it("leaves Tab alone when focus is outside the trap", () => {
    const outside = document.createElement("button");
    document.body.appendChild(outside);
    render(
      <FocusTrap initialFocus={false}>
        <button>Inside</button>
      </FocusTrap>,
    );
    outside.focus();
    const notPrevented = fireEvent.keyDown(document, { key: "Tab" });
    expect(notPrevented).toBe(true);
    expect(outside).toHaveFocus();
    document.body.removeChild(outside);
  });

  it("prevents default Tab when no focusable elements", () => {
    render(
      <FocusTrap>
        <div>No buttons here</div>
      </FocusTrap>,
    );
    // Should not throw
    expect(() => fireEvent.keyDown(document, { key: "Tab" })).not.toThrow();
  });

  it("ignores non-Tab keydown", () => {
    render(
      <FocusTrap>
        <button>First</button>
      </FocusTrap>,
    );
    expect(() => fireEvent.keyDown(document, { key: "Enter" })).not.toThrow();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FocusTrap className="my-trap">
        <button>X</button>
      </FocusTrap>,
    );
    expect(container.firstChild).toHaveClass("my-trap");
  });

  // 中身が自分の effect でフォーカスを取る部品（検索欄つきのパレットなど）。子の effect は親より
  // 先に走るので、effect の中で「前のフォーカス」を読むと、既に罠の中の要素になっている（T308）。
  it("restores focus to the opener even when a child grabs focus in its own effect", () => {
    const AutoFocusInput = () => {
      const ref = React.useRef<HTMLInputElement>(null);
      React.useEffect(() => {
        ref.current?.focus();
      }, []);
      return <input ref={ref} aria-label="search" />;
    };
    const opener = document.createElement("button");
    opener.textContent = "Open";
    document.body.appendChild(opener);
    opener.focus();

    const { unmount } = render(
      <FocusTrap initialFocus={false}>
        <AutoFocusInput />
      </FocusTrap>,
    );
    expect(screen.getByLabelText("search")).toHaveFocus();

    unmount();
    expect(opener).toHaveFocus();
    document.body.removeChild(opener);
  });

  it("restores focus to previously focused element on unmount", () => {
    const outsideBtn = document.createElement("button");
    outsideBtn.textContent = "Outside";
    document.body.appendChild(outsideBtn);
    outsideBtn.focus();

    const { unmount } = render(
      <FocusTrap>
        <button>Inside</button>
      </FocusTrap>,
    );

    expect(screen.getByText("Inside")).toHaveFocus();
    unmount();
    expect(document.activeElement).toBe(outsideBtn);

    document.body.removeChild(outsideBtn);
  });
});
