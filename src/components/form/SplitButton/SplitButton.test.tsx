import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SplitButton } from "./SplitButton";

const actions = [
  { label: "Save as draft", onSelect: vi.fn() },
  { label: "Save and close", onSelect: vi.fn() },
];

describe("SplitButton", () => {
  it("runs the main action without opening the menu", async () => {
    const onClick = vi.fn();
    render(
      <SplitButton actions={actions} onClick={onClick} toggleLabel="More save options">
        Save
      </SplitButton>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Save as draft")).not.toBeInTheDocument();
  });

  /**
   * トグルは矢印しか描かないので、名前を与えないと `button` が無名になる。
   * T53（名前の無い progressbar）と同じ形の穴なので `toggleLabel` を必須にして
   * 型で防ぎ、実際に名前が付くことをここで固定する。
   */
  it("names the toggle half, which only shows a chevron", () => {
    render(
      <SplitButton actions={actions} toggleLabel="More save options">
        Save
      </SplitButton>,
    );
    expect(
      screen.getByRole("button", { name: "More save options" }),
    ).toBeInTheDocument();
  });

  it("rejects a toggle with no name at compile time", () => {
    // @ts-expect-error toggleLabel は必須（無名のトグルを作れてはいけない）
    const missing = <SplitButton actions={actions}>Save</SplitButton>;
    expect(missing).toBeTruthy();
  });

  it("opens the menu and runs the chosen action", async () => {
    const onSelect = vi.fn();
    render(
      <SplitButton
        actions={[{ label: "Save as draft", onSelect }]}
        toggleLabel="More save options"
      >
        Save
      </SplitButton>,
    );

    await userEvent.click(screen.getByRole("button", { name: "More save options" }));
    await userEvent.click(screen.getByText("Save as draft"));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("disables both halves together", () => {
    render(
      <SplitButton actions={actions} disabled toggleLabel="More save options">
        Save
      </SplitButton>,
    );
    for (const name of ["Save", "More save options"]) {
      expect(screen.getByRole("button", { name })).toBeDisabled();
    }
  });
});
