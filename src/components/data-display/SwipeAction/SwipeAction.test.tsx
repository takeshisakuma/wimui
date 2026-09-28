import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { createRef } from "react";
import { SwipeAction, SwipeActionRef, SwipeActionItem } from "./SwipeAction";
import { SwipeableList } from "./SwipeableList";
import styles from "./swipe-action.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const getContent = (root: HTMLElement) =>
  root.querySelector(`.${styles.content}`) as HTMLElement;

const swipe = (el: HTMLElement, from: number, to: number, end = true) => {
  fireEvent.touchStart(el, { touches: [{ clientX: from }] });
  fireEvent.touchMove(el, { touches: [{ clientX: to }] });
  if (end) fireEvent.touchEnd(el);
};

const deleteAction = (onClick = vi.fn()): SwipeActionItem => ({
  icon: "TrashIcon",
  label: "Delete",
  onClick,
  intent: "danger",
});

describe("SwipeAction", () => {
  it("renders correctly", () => {
    render(<SwipeAction>Test content</SwipeAction>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <SwipeAction asChild>
        <span data-testid="child">Child</span>
      </SwipeAction>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders left and right action buttons", () => {
    const { container } = render(
      <SwipeAction
        leftActions={[{ icon: "CheckIcon", label: "Done", onClick: vi.fn() }]}
        rightActions={[deleteAction(), { icon: "EditIcon", label: "Edit", onClick: vi.fn(), color: "rebeccapurple" }]}
      >
        row
      </SwipeAction>,
    );
    expect(screen.getByText("Done")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    const editButton = screen.getByText("Edit").closest("button")!;
    expect(editButton.style.backgroundColor).toBe("rebeccapurple");
    const deleteButton = screen.getByText("Delete").closest("button")!;
    expect(deleteButton.className).toContain(styles.danger);
    expect(container.querySelector(`.${styles.left}`)).toHaveStyle({ width: "80px" });
    expect(container.querySelector(`.${styles.right}`)).toHaveStyle({ width: "160px" });
  });

  it("opens left actions when swiped beyond half width", () => {
    const { container } = render(
      <SwipeAction leftActions={[deleteAction()]}>row</SwipeAction>,
    );
    const content = getContent(container);
    swipe(content, 0, 50); // 50 > 80/2
    expect(content.style.transform).toBe("translateX(80px)");
  });

  it("springs back when swiped below half width", () => {
    const { container } = render(
      <SwipeAction leftActions={[deleteAction()]}>row</SwipeAction>,
    );
    const content = getContent(container);
    swipe(content, 0, 30); // 30 < 40
    expect(content.style.transform).toBe("translateX(0px)");
  });

  it("opens right actions when swiped left", () => {
    const { container } = render(
      <SwipeAction rightActions={[deleteAction()]}>row</SwipeAction>,
    );
    const content = getContent(container);
    swipe(content, 100, 50); // -50 < -40
    expect(content.style.transform).toBe("translateX(-80px)");
  });

  it("applies rubber banding beyond the action width", () => {
    const { container } = render(
      <SwipeAction leftActions={[deleteAction()]}>row</SwipeAction>,
    );
    const content = getContent(container);
    // 80 + (200 - 80) * 0.3 = 116
    swipe(content, 0, 200, false);
    expect(content.style.transform).toBe("translateX(116px)");
  });

  it("runs the action and closes on click", () => {
    const onClick = vi.fn();
    const { container } = render(
      <SwipeAction leftActions={[deleteAction(onClick)]}>row</SwipeAction>,
    );
    const content = getContent(container);
    swipe(content, 0, 50);
    fireEvent.click(screen.getByText("Delete"));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(content.style.transform).toBe("translateX(0px)");
  });

  it("keeps actions open when closeOnAction is false", () => {
    const onClick = vi.fn();
    const { container } = render(
      <SwipeAction leftActions={[deleteAction(onClick)]} closeOnAction={false}>
        row
      </SwipeAction>,
    );
    const content = getContent(container);
    swipe(content, 0, 50);
    fireEvent.click(screen.getByText("Delete"));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(content.style.transform).toBe("translateX(80px)");
  });

  it("supports mouse swipes and ends on mouse leave", () => {
    const { container } = render(
      <SwipeAction leftActions={[deleteAction()]}>row</SwipeAction>,
    );
    const content = getContent(container);
    fireEvent.mouseDown(content, { clientX: 0 });
    fireEvent.mouseMove(content, { clientX: 50 });
    fireEvent.mouseLeave(container.firstChild as HTMLElement);
    expect(content.style.transform).toBe("translateX(80px)");
  });

  it("closes programmatically via ref", () => {
    const ref = createRef<SwipeActionRef>();
    const { container } = render(
      <SwipeAction ref={ref} leftActions={[deleteAction()]}>
        row
      </SwipeAction>,
    );
    const content = getContent(container);
    swipe(content, 0, 50);
    expect(content.style.transform).toBe("translateX(80px)");
    act(() => ref.current!.close());
    expect(content.style.transform).toBe("translateX(0px)");
  });

  it("closes other items in an exclusive SwipeableList", async () => {
    const { container } = render(
      <SwipeableList>
        <SwipeAction id="one" leftActions={[deleteAction()]}>
          row1
        </SwipeAction>
        <SwipeAction id="two" leftActions={[deleteAction()]}>
          row2
        </SwipeAction>
      </SwipeableList>,
    );
    const [first, second] = Array.from(
      container.querySelectorAll(`.${styles.content}`),
    ) as HTMLElement[];

    swipe(first, 0, 50);
    expect(first.style.transform).toBe("translateX(80px)");

    // スワイプ直後の保護タイマー(100ms)を過ぎてから2つ目を開く
    await act(() => new Promise<void>((r) => setTimeout(r, 150)));
    swipe(second, 0, 50);
    expect(second.style.transform).toBe("translateX(80px)");
    expect(first.style.transform).toBe("translateX(0px)");
  });

  describe("keyboard (T275)", () => {
    // 以前は操作ボタンが行の内容の裏にあり、Tab でフォーカスが当たっても覆われて見えなかった
    const renderRow = (onEdit = vi.fn()) =>
      render(
        <>
          <SwipeAction
            leftActions={[{ icon: "CheckIcon", label: "Done", onClick: vi.fn() }]}
            rightActions={[{ icon: "EditIcon", label: "Edit", onClick: onEdit }, deleteAction()]}
          >
            row
          </SwipeAction>
          <button type="button">outside</button>
        </>,
      );

    it("reveals the side whose action receives focus", () => {
      const { container } = renderRow();
      const content = getContent(container);
      act(() => screen.getByRole("button", { name: "Done" }).focus());
      expect(content.style.transform).toBe("translateX(80px)");
      act(() => screen.getByRole("button", { name: "Delete" }).focus());
      expect(content.style.transform).toBe("translateX(-160px)");
    });

    it("closes when focus leaves the row", () => {
      const { container } = renderRow();
      const content = getContent(container);
      act(() => screen.getByRole("button", { name: "Edit" }).focus());
      expect(content.style.transform).toBe("translateX(-160px)");
      act(() => screen.getByRole("button", { name: "outside" }).focus());
      expect(content.style.transform).toBe("translateX(0px)");
    });

    it("stays open while focus moves between its own actions", () => {
      const { container } = renderRow();
      const content = getContent(container);
      act(() => screen.getByRole("button", { name: "Edit" }).focus());
      act(() => screen.getByRole("button", { name: "Delete" }).focus());
      expect(content.style.transform).toBe("translateX(-160px)");
    });

    it("returns focus to the row content after an action closes it", () => {
      const onEdit = vi.fn();
      const { container } = renderRow(onEdit);
      const content = getContent(container);
      const edit = screen.getByRole("button", { name: "Edit" });
      act(() => edit.focus());
      fireEvent.click(edit);
      expect(onEdit).toHaveBeenCalled();
      expect(content.style.transform).toBe("translateX(0px)");
      // 閉じると押したボタンは内容の裏へ戻るので、フォーカスを残さない
      expect(document.activeElement).toBe(content);
      expect(content).toHaveAttribute("tabindex", "-1");
    });

    it("puts the content before the actions in the reading order", () => {
      const { container } = renderRow();
      const root = container.querySelector(".wim-swipe-action")!;
      expect(root.firstElementChild).toBe(getContent(container));
    });
  });
});
