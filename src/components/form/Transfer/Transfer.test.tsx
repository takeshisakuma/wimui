import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Transfer, TransferItem } from "./Transfer";

const dataSource: TransferItem[] = [
  { key: "1", title: "Content 1" },
  { key: "2", title: "Content 2" },
  { key: "3", title: "Content 3", disabled: true },
  { key: "4", title: "Content 4" },
];

describe("Transfer", () => {
  it("renders source and target lists", () => {
    render(<Transfer dataSource={dataSource} targetKeys={["1"]} />);
    expect(screen.getByText("Content 1")).toBeDefined();
    expect(screen.getByText("Content 2")).toBeDefined();
    expect(screen.getByText("Content 3")).toBeDefined();
    expect(screen.getByText("Content 4")).toBeDefined();
  });

  it("selects items", () => {
    render(<Transfer dataSource={dataSource} />);
    // Item checkboxes are aria-hidden; click the option row directly
    fireEvent.click(screen.getAllByRole("option")[0]); // Content 1
    expect(screen.getAllByRole("option")[0]).toHaveAttribute("aria-selected", "true");
  });

  it("moves items to right", () => {
    const onChange = vi.fn();
    render(<Transfer dataSource={dataSource} onChange={onChange} />);

    // Select "Content 1" by clicking the option row
    fireEvent.click(screen.getAllByRole("option")[0]);

    // Find Right arrow button and click
    const moveRightBtn = screen.getAllByRole("button")[0];
    fireEvent.click(moveRightBtn);

    expect(onChange).toHaveBeenCalledWith(["1"], "toRight", ["1"]);
  });

  it("moves items to left", () => {
    const onChange = vi.fn();
    render(
      <Transfer
        dataSource={dataSource}
        targetKeys={["1"]}
        onChange={onChange}
      />,
    );

    // Select "Content 1" in target list — it's the only option in the target listbox
    const listboxes = screen.getAllByRole("listbox");
    const targetOptions = screen
      .getAllByRole("option")
      .filter((o) => listboxes[1].contains(o));
    fireEvent.click(targetOptions[0]); // Content 1

    // Find Left arrow button and click
    const moveLeftBtn = screen.getAllByRole("button")[1];
    fireEvent.click(moveLeftBtn);

    expect(onChange).toHaveBeenCalledWith([], "toLeft", ["1"]);
  });

  it("selects all items in a list", () => {
    render(<Transfer dataSource={dataSource} />);
    const headerCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(headerCheckbox);

    // Content 3 is disabled, so 3 items should be selected
    expect(screen.getByText("3/4")).toBeDefined();
  });

  describe("ARIA roles", () => {
    it("renders listboxes with correct roles when not empty", () => {
      render(<Transfer dataSource={dataSource} targetKeys={["1"]} />);
      const listboxes = screen.getAllByRole("listbox");
      expect(listboxes).toHaveLength(2);
      listboxes.forEach((lb) => {
        expect(lb).toHaveAttribute("aria-multiselectable", "true");
      });
    });

    it("does not render listbox role when list is empty", () => {
      render(<Transfer dataSource={dataSource} />);
      // Source has items, Target is empty
      const listboxes = screen.getAllByRole("listbox");
      expect(listboxes).toHaveLength(1);
      // Source list should have the role
      expect(screen.getByRole("listbox", { name: "Source" })).toBeInTheDocument();
      // Target list should NOT have the role
      expect(screen.queryByRole("listbox", { name: "Target" })).not.toBeInTheDocument();
    });

    it("renders options with correct roles and aria-selected", () => {
      render(<Transfer dataSource={dataSource} />);
      const options = screen.getAllByRole("option");
      expect(options).toHaveLength(4);
      options.forEach((opt) => {
        expect(opt).toHaveAttribute("aria-selected", "false");
      });
    });

    it("reflects aria-selected after clicking an item", () => {
      render(<Transfer dataSource={dataSource} />);
      const options = screen.getAllByRole("option");
      fireEvent.click(options[0]); // Content 1
      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("keyboard navigation", () => {
    it("ArrowDown moves focus to first item when nothing focused", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      expect(sourceListbox.getAttribute("aria-activedescendant")).toBe(options[0].id);
    });

    it("ArrowDown navigates to next item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 2
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      // Content 2 should be the active descendant
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[1].id);
    });

    it("ArrowDown skips disabled items", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 2
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 4 (skips disabled 3)
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[3].id); // Content 4
    });

    it("ArrowUp moves focus to last item when nothing focused", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowUp" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      // Last non-disabled item is Content 4 (index 3)
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[3].id);
    });

    it("Home moves focus to first non-disabled item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 2
      fireEvent.keyDown(sourceListbox, { key: "Home" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[0].id);
    });

    it("End moves focus to last non-disabled item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "End" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[3].id); // Content 4
    });

    it("Space toggles selection of focused item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: " " }); // select
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      expect(options[0]).toHaveAttribute("aria-selected", "true");

      fireEvent.keyDown(sourceListbox, { key: " " }); // deselect
      expect(options[0]).toHaveAttribute("aria-selected", "false");
    });

    it("Enter moves selected source items to target", () => {
      const onChange = vi.fn();
      render(<Transfer dataSource={dataSource} onChange={onChange} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // focus Content 1
      fireEvent.keyDown(sourceListbox, { key: " " }); // select Content 1
      fireEvent.keyDown(sourceListbox, { key: "Enter" }); // move to right
      expect(onChange).toHaveBeenCalledWith(["1"], "toRight", ["1"]);
    });

    it("Enter moves selected target items to source", () => {
      const onChange = vi.fn();
      render(
        <Transfer dataSource={dataSource} targetKeys={["1"]} onChange={onChange} />,
      );
      const listboxes = screen.getAllByRole("listbox");
      const targetListbox = listboxes[1];
      fireEvent.keyDown(targetListbox, { key: "ArrowDown" }); // focus Content 1
      fireEvent.keyDown(targetListbox, { key: " " }); // select Content 1
      fireEvent.keyDown(targetListbox, { key: "Enter" }); // move to left
      expect(onChange).toHaveBeenCalledWith([], "toLeft", ["1"]);
    });

    it("mouse click updates focused key and toggles selection", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      fireEvent.click(options[1]); // Content 2
      expect(sourceListbox.getAttribute("aria-activedescendant")).toBe(
        options[1].id,
      );
      expect(options[1]).toHaveAttribute("aria-selected", "true");
    });

    it("ArrowDown wraps from last to first", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "End" }); // → Content 4
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → wraps to Content 1
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[0].id);
    });
  });
});

describe("Transfer edge cases", () => {
  it("works uncontrolled (internal state)", () => {
    render(<Transfer dataSource={dataSource} />);
    fireEvent.click(screen.getAllByRole("option")[0]); // Content 1 を選択
    fireEvent.click(screen.getAllByRole("button")[0]); // 右へ移動
    // target 側にも listbox ができ、Content 1 が移動している
    const listboxes = screen.getAllByRole("listbox");
    expect(listboxes).toHaveLength(2);
    expect(listboxes[1].textContent).toContain("Content 1");
    expect(listboxes[0].textContent).not.toContain("Content 1");
  });

  it("does nothing when disabled", () => {
    const onChange = vi.fn();
    render(<Transfer dataSource={dataSource} disabled onChange={onChange} />);
    const option = screen.getAllByRole("option")[0];
    fireEvent.click(option);
    expect(option).toHaveAttribute("aria-selected", "false");
    const [sourceListbox] = screen.getAllByRole("listbox");
    // disabled 中はキーボード操作でフォーカスが進まない（クリック時の値のまま）
    const focusedBefore = sourceListbox.getAttribute("aria-activedescendant");
    fireEvent.keyDown(sourceListbox, { key: "ArrowDown" });
    expect(sourceListbox.getAttribute("aria-activedescendant")).toBe(focusedBefore);
    screen.getAllByRole("button").forEach((b) => expect(b).toBeDisabled());
    expect(onChange).not.toHaveBeenCalled();
  });

  it("toggles select-all on and off via the header checkbox", () => {
    render(<Transfer dataSource={dataSource} />);
    const headerCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(headerCheckbox);
    expect(screen.getByText("3/4")).toBeInTheDocument();
    fireEvent.click(headerCheckbox);
    expect(screen.getAllByText("0/4")[0]).toBeInTheDocument();
  });

  it("shows noData message for empty lists", () => {
    render(<Transfer dataSource={[]} labels={{ noData: "Empty!" }} />);
    expect(screen.getAllByText("Empty!")).toHaveLength(2);
    expect(screen.queryAllByRole("listbox")).toHaveLength(0);
  });

  it("uses custom button labels", () => {
    render(
      <Transfer
        dataSource={dataSource}
        labels={{ moveToTarget: "右へ", moveToSource: "左へ" }}
      />,
    );
    expect(screen.getByLabelText("右へ")).toBeInTheDocument();
    expect(screen.getByLabelText("左へ")).toBeInTheDocument();
  });

  it("announces moves via the aria-live region", async () => {
    render(<Transfer dataSource={dataSource} />);
    fireEvent.click(screen.getAllByRole("option")[0]);
    fireEvent.click(screen.getAllByRole("option")[1]);
    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(await screen.findByText("Moved 2 items to target")).toBeInTheDocument();
    // 戻すと単数形のメッセージ
    const listboxes = screen.getAllByRole("listbox");
    const targetOption = screen
      .getAllByRole("option")
      .filter((o) => listboxes[1].contains(o))[0];
    fireEvent.click(targetOption);
    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(await screen.findByText("Moved 1 item to source")).toBeInTheDocument();
  });

  it("focuses the first enabled item when the list receives focus", () => {
    render(<Transfer dataSource={dataSource} />);
    const [sourceListbox] = screen.getAllByRole("listbox");
    fireEvent.focus(sourceListbox);
    const options = screen
      .getAllByRole("option")
      .filter((o) => sourceListbox.contains(o));
    expect(sourceListbox.getAttribute("aria-activedescendant")).toBe(options[0].id);
  });

  it("ignores Space without focus and Enter without selection", () => {
    const onChange = vi.fn();
    render(<Transfer dataSource={dataSource} onChange={onChange} />);
    const [sourceListbox] = screen.getAllByRole("listbox");
    fireEvent.keyDown(sourceListbox, { key: " " });
    fireEvent.keyDown(sourceListbox, { key: "Enter" });
    expect(onChange).not.toHaveBeenCalled();
    expect(
      screen.getAllByRole("option").every((o) => o.getAttribute("aria-selected") === "false"),
    ).toBe(true);
  });

  it("uses a virtual list for large datasets", () => {
    // 高さを返す ResizeObserver に差し替えて仮想化を有効にする
    const RealRO = window.ResizeObserver;
    window.ResizeObserver = class {
      private cb: ResizeObserverCallback;
      constructor(cb: ResizeObserverCallback) {
        this.cb = cb;
      }
      observe() {
        this.cb(
          [{ contentRect: { height: 200 } } as ResizeObserverEntry],
          this as unknown as ResizeObserver,
        );
      }
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver;

    try {
      const bigData: TransferItem[] = Array.from({ length: 60 }, (_, i) => ({
        key: String(i),
        title: `Item ${i}`,
      }));
      render(<Transfer dataSource={bigData} />);
      const options = screen.getAllByRole("option");
      // 仮想化により全件はレンダリングされない
      expect(options.length).toBeLessThan(60);
      expect(options[0]).toHaveAttribute("aria-setsize", "60");
      // End キーで末尾へ移動するとスクロール調整パスを通る
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "End" });
      expect(sourceListbox.getAttribute("aria-activedescendant")).toContain("option-59");
      fireEvent.keyDown(sourceListbox, { key: "Home" });
      expect(sourceListbox.getAttribute("aria-activedescendant")).toContain("option-0");
    } finally {
      window.ResizeObserver = RealRO;
    }
  });

  it("links the error message to the group via aria-describedby", () => {
    render(<Transfer dataSource={dataSource} error="Required" />);
    const message = screen.getByRole("alert");
    expect(message).toHaveTextContent("Required");
    expect(screen.getByRole("group")).toHaveAttribute("aria-describedby", message.id);
  });
});
