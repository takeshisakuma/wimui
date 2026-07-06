import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SpeedDial } from "./SpeedDial";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SpeedDial", () => {
  it("renders correctly", () => {
    render(<SpeedDial actions={[]} />);
    expect(screen.getByLabelText("PlusIcon")).toBeInTheDocument();
  });

  it("opens on mouse enter and closes on mouse leave with hover trigger", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} onOpenChange={onOpenChange} />
    );
    const root = container.firstChild as HTMLElement;

    fireEvent.mouseEnter(root);
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
    expect(screen.getByLabelText("CloseIcon")).toHaveAttribute("aria-expanded", "true");

    fireEvent.mouseLeave(root);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(screen.getByLabelText("PlusIcon")).toHaveAttribute("aria-expanded", "false");
  });

  it("does not react to hover with click trigger", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <SpeedDial actions={[]} trigger="click" onOpenChange={onOpenChange} />
    );

    fireEvent.mouseEnter(container.firstChild as HTMLElement);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByLabelText("PlusIcon")).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles open state on click with click trigger", async () => {
    const user = userEvent.setup();
    render(<SpeedDial actions={[]} trigger="click" />);

    await user.click(screen.getByLabelText("PlusIcon"));
    expect(screen.getByLabelText("CloseIcon")).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByLabelText("CloseIcon"));
    expect(screen.getByLabelText("PlusIcon")).toHaveAttribute("aria-expanded", "false");
  });

  it("does not toggle on click with hover trigger", () => {
    render(<SpeedDial actions={[]} />);

    // fireEvent.click は hover 副作用なしにクリックのみ発火する
    fireEvent.click(screen.getByLabelText("PlusIcon"));
    expect(screen.getByLabelText("PlusIcon")).toHaveAttribute("aria-expanded", "false");
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

    await user.click(screen.getByLabelText("PlusIcon"));
    await user.click(screen.getByLabelText("Edit"));
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("PlusIcon")).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps open after action click with hover trigger", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} />
    );

    fireEvent.mouseEnter(container.firstChild as HTMLElement);
    // onClick 未指定のアクションでもクリックでクラッシュしないこと
    await user.click(screen.getByLabelText("Edit"));
    expect(screen.getByLabelText("CloseIcon")).toHaveAttribute("aria-expanded", "true");
  });

  it("respects controlled open state", () => {
    render(<SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} open />);
    expect(screen.getByLabelText("CloseIcon")).toHaveAttribute("aria-expanded", "true");
  });

  it("notifies onOpenChange without changing controlled state", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <SpeedDial actions={[]} trigger="click" open={false} onOpenChange={onOpenChange} />
    );

    await user.click(screen.getByLabelText("PlusIcon"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    // controlled なので open のまま親が更新しない限り閉じたまま
    expect(screen.getByLabelText("PlusIcon")).toHaveAttribute("aria-expanded", "false");
  });

  it("uses custom icon and activeIcon", () => {
    render(
      <SpeedDial actions={[]} icon="EditIcon" activeIcon="CheckIcon" open />
    );
    expect(screen.getByLabelText("CheckIcon")).toBeInTheDocument();
  });

  it("renders all provided actions", () => {
    render(
      <SpeedDial
        actions={[
          { icon: "EditIcon", label: "Edit" },
          { icon: "CheckIcon", label: "Approve", intent: "positive" },
        ]}
        direction="down"
      />
    );
    expect(screen.getByLabelText("Edit")).toBeInTheDocument();
    expect(screen.getByLabelText("Approve")).toBeInTheDocument();
  });
});
