import type React from "react";
import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SpeedDial } from "./SpeedDial";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SpeedDial", () => {
  const actions: React.ComponentProps<typeof SpeedDial>["actions"] = [{ icon: "EditIcon", label: "Edit" }];

  it("renders correctly", () => {
    render(<SpeedDial actions={[]} />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("opens on mouse enter and closes on mouse leave with hover trigger", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} onOpenChange={onOpenChange} />
    );
    const root = container.firstChild as HTMLElement;

    fireEvent.mouseEnter(root);
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
    expect(screen.getByLabelText("Close menu")).toHaveAttribute("aria-expanded", "true");

    fireEvent.mouseLeave(root);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(screen.getByLabelText("Open menu")).toHaveAttribute("aria-expanded", "false");
  });

  it("does not react to hover with click trigger", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <SpeedDial actions={[]} trigger="click" onOpenChange={onOpenChange} />
    );

    fireEvent.mouseEnter(container.firstChild as HTMLElement);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByLabelText("Open menu")).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles open state on click with click trigger", async () => {
    const user = userEvent.setup();
    render(<SpeedDial actions={[]} trigger="click" />);

    await user.click(screen.getByLabelText("Open menu"));
    expect(screen.getByLabelText("Close menu")).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByLabelText("Close menu"));
    expect(screen.getByLabelText("Open menu")).toHaveAttribute("aria-expanded", "false");
  });

  it("does not toggle on click with hover trigger", () => {
    render(<SpeedDial actions={[]} />);

    // fireEvent.click は hover 副作用なしにクリックのみ発火する
    fireEvent.click(screen.getByLabelText("Open menu"));
    expect(screen.getByLabelText("Open menu")).toHaveAttribute("aria-expanded", "false");
  });

  it("fires action onClick and closes with click trigger", async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();
    render(
      <SpeedDial
        actions={[{ icon: "EditIcon", label: "Edit", onClick: onAction }]}
        trigger="click"
      />
    );

    await user.click(screen.getByLabelText("Open menu"));
    await user.click(screen.getByLabelText("Edit"));
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Open menu")).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps open after action click with hover trigger", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} />
    );

    fireEvent.mouseEnter(container.firstChild as HTMLElement);
    // onClick 未指定のアクションでもクリックでクラッシュしないこと
    await user.click(screen.getByLabelText("Edit"));
    expect(screen.getByLabelText("Close menu")).toHaveAttribute("aria-expanded", "true");
  });

  it("respects controlled open state", () => {
    render(<SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} open />);
    expect(screen.getByLabelText("Close menu")).toHaveAttribute("aria-expanded", "true");
  });

  it("notifies onOpenChange without changing controlled state", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <SpeedDial actions={[]} trigger="click" open={false} onOpenChange={onOpenChange} />
    );

    await user.click(screen.getByLabelText("Open menu"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    // controlled なので open のまま親が更新しない限り閉じたまま
    expect(screen.getByLabelText("Open menu")).toHaveAttribute("aria-expanded", "false");
  });

  it("puts aria-label on the trigger, not the icon name", () => {
    render(<SpeedDial actions={[]} aria-label="Crane actions" />);
    expect(screen.getByLabelText("Crane actions")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.queryByLabelText("PlusIcon")).not.toBeInTheDocument();
  });

  // 名前を渡さないとアイコン名（「PlusIcon」）が名前になっていた（T306）。翻訳つきの既定の名前を使う。
  it("names the trigger with a translated default, not the icon name", () => {
    render(<SpeedDial actions={actions} />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
    expect(screen.queryByLabelText("PlusIcon")).not.toBeInTheDocument();
  });

  // 見た目は opacity: 0 で消しているだけなので、外さないと Tab で見えないボタンに着く（T306）。
  it("takes the actions out of interaction while closed", () => {
    render(<SpeedDial actions={actions} />);
    const edit = screen.getByLabelText("Edit");
    expect(edit.closest("[inert]")).not.toBeNull();
    fireEvent.mouseEnter(edit.closest(".wim-speed-dial") as HTMLElement);
    expect(screen.getByLabelText("Edit").closest("[inert]")).toBeNull();
  });

  // 既定（hover）ではクリックで開かないので、キーボードで開く手段が無かった（T306）。
  it("opens from the keyboard in hover mode, focuses the first action, and closes on Escape", async () => {
    const user = userEvent.setup();
    render(<SpeedDial actions={actions} />);
    const trigger = screen.getByLabelText("Open menu");
    trigger.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByLabelText("Close menu")).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByLabelText("Edit")).toHaveFocus();

    await user.keyboard("{Escape}");
    const closed = screen.getByLabelText("Open menu");
    expect(closed).toHaveAttribute("aria-expanded", "false");
    expect(closed).toHaveFocus();
  });

  // hover モードをキーボードで開くと、アクションを実行しても開いたまま残っていた（T322）。
  it("closes and returns focus to the trigger after running an action from the keyboard", async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();
    render(<SpeedDial actions={[{ icon: "EditIcon", label: "Edit", onClick: onAction }]} />);
    screen.getByLabelText("Open menu").focus();
    await user.keyboard("{Enter}");
    expect(screen.getByLabelText("Edit")).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(onAction).toHaveBeenCalledTimes(1);
    const closed = screen.getByLabelText("Open menu");
    expect(closed).toHaveAttribute("aria-expanded", "false");
    expect(closed).toHaveFocus();
  });

  // click モードは実行すると閉じるが、フォーカスを持ったアクションが inert になり、行き先が無かった。
  it("returns focus to the trigger after running an action with click trigger", async () => {
    const user = userEvent.setup();
    render(<SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} trigger="click" />);
    screen.getByLabelText("Open menu").focus();
    await user.keyboard("{Enter}");
    await user.keyboard("{Enter}");
    const closed = screen.getByLabelText("Open menu");
    expect(closed).toHaveAttribute("aria-expanded", "false");
    expect(closed).toHaveFocus();
  });

  it("closes when focus leaves after a keyboard open", async () => {
    const user = userEvent.setup();
    render(
      <>
        <SpeedDial actions={actions} />
        <button>after</button>
      </>,
    );
    screen.getByLabelText("Open menu").focus();
    await user.keyboard(" ");
    expect(screen.getByLabelText("Close menu")).toHaveAttribute("aria-expanded", "true");
    act(() => screen.getByText("after").focus());
    expect(screen.getByLabelText("Open menu")).toHaveAttribute("aria-expanded", "false");
  });

  it("passes action intent through to the action button", () => {
    render(
      <SpeedDial
        actions={[{ icon: "SquareIcon", label: "Stop hoist", intent: "danger" }]}
        open
      />,
    );
    expect(screen.getByLabelText("Stop hoist").className).toMatch(/danger/);
  });

  it("uses custom icon and activeIcon", () => {
    // 以前は、引き金の名前（アイコン名）で見分けていた。名前が既定の文言になったので、描かれた
    // アイコンそのものを比べる（開いているときは activeIcon、閉じているときは icon）。
    const { rerender } = render(
      <SpeedDial actions={[]} icon="EditIcon" activeIcon="CheckIcon" open />
    );
    const custom = { open: screen.getByLabelText("Close menu").innerHTML, closed: "" };
    rerender(<SpeedDial actions={[]} icon="EditIcon" activeIcon="CheckIcon" open={false} />);
    custom.closed = screen.getByLabelText("Open menu").innerHTML;
    rerender(<SpeedDial actions={[]} open />);
    const defaultOpen = screen.getByLabelText("Close menu").innerHTML;

    expect(custom.open).not.toBe(custom.closed);
    expect(custom.open).not.toBe(defaultOpen);
  });

  it("renders all provided actions", () => {
    render(
      <SpeedDial
        actions={[
          { icon: "EditIcon", label: "Edit" },
          { icon: "CheckIcon", label: "Approve", intent: "success" },
        ]}
        direction="down"
      />
    );
    expect(screen.getByLabelText("Edit")).toBeInTheDocument();
    expect(screen.getByLabelText("Approve")).toBeInTheDocument();
  });

  it("pins up/down actions to inline-end so long labels grow toward start (T175)", () => {
    const scss = readFileSync(
      "src/components/navigation/SpeedDial/speed-dial.module.scss",
      "utf8",
    );
    const up = scss.match(/\.up\s*&\s*\{([^}]+)\}/);
    const down = scss.match(/\.down\s*&\s*\{([^}]+)\}/);
    expect(up?.[1]).toMatch(/inset-inline-end:\s*0/);
    expect(up?.[1]).toMatch(/align-items:\s*end/);
    expect(down?.[1]).toMatch(/inset-inline-end:\s*0/);
    expect(down?.[1]).toMatch(/align-items:\s*end/);
  });
});
