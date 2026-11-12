import React from "react";
import { describe, it, expect, vi } from "vitest";
import { createPortal } from "react-dom";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectionBar } from "./SelectionBar";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

// 部品は件数を受けるだけなので、選択の状態は呼ぶ側が持つ（実際の使い方と同じ形）
const Harness = ({
  initial = 0,
  withReturn = false,
}: {
  initial?: number;
  withReturn?: boolean;
}) => {
  const [count, setCount] = React.useState(initial);
  const selectAllRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <SelectionBar count={count} onClear={() => setCount(0)} returnFocusRef={withReturn ? selectAllRef : undefined}>
        <button type="button">Archive</button>
      </SelectionBar>
      <input type="checkbox" aria-label="Select all" ref={selectAllRef} />
      <button type="button" onClick={() => setCount((n) => n + 1)}>
        Select one more
      </button>
    </>
  );
};

describe("SelectionBar", () => {
  it("件数が 0 のあいだはバーを出さないが、status 領域は置いておく", () => {
    render(<SelectionBar count={0} />);
    expect(screen.queryByRole("toolbar")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("選択があると、件数・操作・解除を 1 つの toolbar に並べる", () => {
    const onClear = vi.fn();
    render(
      <SelectionBar count={3} onClear={onClear}>
        <button type="button">Archive</button>
      </SelectionBar>,
    );
    const toolbar = screen.getByRole("toolbar", { name: "Bulk actions" });
    expect(toolbar).toHaveTextContent("3 selected");
    expect(screen.getByRole("button", { name: "Archive" })).toBeInTheDocument();
    act(() => screen.getByRole("button", { name: "Clear selection" }).click());
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("onClear を渡さなければ解除のボタンを出さない", () => {
    render(<SelectionBar count={2} />);
    expect(screen.queryByRole("button", { name: "Clear selection" })).not.toBeInTheDocument();
  });

  it("文言は countLabel / clearLabel / aria-label で差し替えられる", () => {
    render(
      <SelectionBar
        count={2}
        onClear={() => {}}
        countLabel={(n) => `${n} orders`}
        clearLabel="Deselect"
        aria-label="Order actions"
      />,
    );
    expect(screen.getByRole("toolbar", { name: "Order actions" })).toHaveTextContent("2 orders");
    expect(screen.getByRole("button", { name: "Deselect" })).toBeInTheDocument();
  });

  it("初回は告知せず、件数が変わったときと解除したときに status の文字を書き換える", async () => {
    const user = userEvent.setup();
    render(<Harness initial={2} />);
    const status = screen.getByRole("status");
    expect(status).toBeEmptyDOMElement();

    await user.click(screen.getByRole("button", { name: "Select one more" }));
    expect(status).toHaveTextContent("3 selected");

    await user.click(screen.getByRole("button", { name: "Clear selection" }));
    expect(status).toHaveTextContent("Selection cleared");
    // 告知した領域は、閉じたあとも同じ要素のまま残っている
    expect(screen.getByRole("status")).toBe(status);
  });

  it("解除で閉じたら、フォーカスを returnFocusRef へ移す", async () => {
    const user = userEvent.setup();
    render(<Harness initial={2} withReturn />);
    await user.click(screen.getByRole("button", { name: "Clear selection" }));
    expect(screen.getByRole("checkbox", { name: "Select all" })).toHaveFocus();
  });

  it("returnFocusRef が無ければ、バーの後ろで最初にフォーカスできる要素へ移す（body へ落とさない）", async () => {
    const user = userEvent.setup();
    render(<Harness initial={2} />);
    await user.click(screen.getByRole("button", { name: "Clear selection" }));
    expect(screen.getByRole("checkbox", { name: "Select all" })).toHaveFocus();
  });

  it("後ろにフォーカスできる要素が無ければ、バーの根に置く", async () => {
    const user = userEvent.setup();
    const Alone = () => {
      const [count, setCount] = React.useState(1);
      return <SelectionBar count={count} onClear={() => setCount(0)} />;
    };
    const { container } = render(<Alone />);
    await user.click(screen.getByRole("button", { name: "Clear selection" }));
    expect(container.querySelector(".wim-selection-bar")).toHaveFocus();
  });

  // Popconfirm の経路: バーから開いた面（ポータル）で確定すると、選択が消えてバーが閉じ、
  // 面も閉じる。面が返そうとする引き金はもう無いので、フォーカスは body へ落ちる
  it("バーから開いた面で確定して閉じたときも、フォーカスを戻す", async () => {
    const user = userEvent.setup();
    const WithConfirm = () => {
      const [count, setCount] = React.useState(2);
      const [confirming, setConfirming] = React.useState(false);
      return (
        <>
          <SelectionBar count={count}>
            <button type="button" onClick={() => setConfirming(true)}>
              Delete
            </button>
          </SelectionBar>
          {confirming &&
            createPortal(
              <button
                type="button"
                onClick={() => {
                  setCount(0);
                  // 面の閉じる動きのぶん遅れて消える
                  setTimeout(() => setConfirming(false), 150);
                }}
              >
                Confirm delete
              </button>,
              document.body,
            )}
          <input type="checkbox" aria-label="Select all" />
        </>
      );
    };
    render(<WithConfirm />);
    await user.click(screen.getByRole("button", { name: "Delete" }));
    await user.click(screen.getByRole("button", { name: "Confirm delete" }));
    expect(screen.queryByRole("toolbar")).not.toBeInTheDocument();
    await vi.waitFor(() => expect(screen.getByRole("checkbox", { name: "Select all" })).toHaveFocus());
  });

  it("フォーカスが外にあるときに閉じても、フォーカスを奪わない", async () => {
    const user = userEvent.setup();
    const Outside = () => {
      const [count, setCount] = React.useState(2);
      return (
        <>
          <SelectionBar count={count} onClear={() => setCount(0)} />
          <button type="button" onClick={() => setCount(0)}>
            Reset from outside
          </button>
        </>
      );
    };
    render(<Outside />);
    const outside = screen.getByRole("button", { name: "Reset from outside" });
    await user.click(outside);
    expect(outside).toHaveFocus();
  });

  it("利用者の onFocus / onBlur も呼ばれる", async () => {
    const user = userEvent.setup();
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    render(
      <>
        <SelectionBar count={1} onClear={() => {}} onFocus={onFocus} onBlur={onBlur} />
        <button type="button">After</button>
      </>,
    );
    await user.click(screen.getByRole("button", { name: "Clear selection" }));
    await user.click(screen.getByRole("button", { name: "After" }));
    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });

  it("ref を根の要素へ渡す", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SelectionBar ref={ref} count={0} />);
    expect(ref.current).toHaveClass("wim-selection-bar");
  });
});
