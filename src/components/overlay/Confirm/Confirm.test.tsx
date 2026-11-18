import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, renderHook, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { ConfirmProvider, useConfirm, type ConfirmOptions } from "./Confirm";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

/** 押すと confirm を呼び、結果を results に積むボタン */
const Asker = ({ options, results }: { options: ConfirmOptions[]; results: boolean[] }) => {
  const confirm = useConfirm();
  return (
    <button
      type="button"
      onClick={() => {
        options.forEach((o) => confirm(o).then((r) => results.push(r)));
      }}
    >
      Ask
    </button>
  );
};

const setup = (options: ConfirmOptions[]) => {
  const results: boolean[] = [];
  const utils = render(
    <ConfirmProvider>
      <Asker options={options} results={results} />
    </ConfirmProvider>,
  );
  const trigger = screen.getByRole("button", { name: "Ask" });
  trigger.focus();
  fireEvent.click(trigger);
  return { ...utils, results, trigger };
};

describe("Confirm", () => {
  it("alertdialog に題と説明を出し、確認で true を返す", async () => {
    const { results } = setup([{ title: "Delete this file?", description: "This cannot be undone.", confirmLabel: "Delete" }]);
    const dialog = screen.getByRole("alertdialog", { name: "Delete this file?" });
    expect(dialog).toHaveAccessibleDescription("This cannot be undone.");
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    await waitFor(() => expect(results).toEqual([true]));
    await waitFor(() => expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument());
  });

  it("取り消しと Escape は false を返す", async () => {
    const { results } = setup([{ title: "First?" }, { title: "Second?" }]);
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await screen.findByRole("alertdialog", { name: "Second?" });
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(results).toEqual([false, false]));
  });

  it("既定の文言は翻訳から引く", () => {
    setup([{ title: "Continue?" }]);
    expect(screen.getByRole("button", { name: "OK" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("最初のフォーカスは確認のボタン、danger では取り消しのボタンに置く", async () => {
    const { unmount } = setup([{ title: "Continue?" }]);
    await waitFor(() => expect(screen.getByRole("button", { name: "OK" })).toHaveFocus());
    unmount();
    setup([{ title: "Delete?", confirmLabel: "Delete", intent: "danger" }]);
    await waitFor(() => expect(screen.getByRole("button", { name: "Cancel" })).toHaveFocus());
  });

  it("続けて呼ぶと順に開き、最後に閉じたあと、開く前の要素へフォーカスを戻す", async () => {
    const { results, trigger } = setup([{ title: "First?" }, { title: "Second?" }]);
    expect(screen.getAllByRole("alertdialog")).toHaveLength(1);
    fireEvent.click(screen.getByRole("button", { name: "OK" }));
    const second = await screen.findByRole("alertdialog", { name: "Second?" });
    await waitFor(() => expect(second).toContainElement(document.activeElement as HTMLElement));
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await waitFor(() => expect(results).toEqual([true, false]));
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it("Provider が外れたら、待っている呼び出しは false で終わる", async () => {
    const { results, unmount } = setup([{ title: "First?" }, { title: "Second?" }]);
    act(() => unmount());
    await waitFor(() => expect(results).toEqual([false, false]));
  });

  it("Provider の外で呼ぶと例外を投げる", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useConfirm())).toThrow("useConfirm must be used within a ConfirmProvider");
    vi.restoreAllMocks();
  });
});
