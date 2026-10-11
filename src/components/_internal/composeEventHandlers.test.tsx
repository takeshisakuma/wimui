/**
 * 利用者が同じ名前のイベントを渡しても、部品の処理が消えないこと（T347）。
 *
 * 部品が `onClick={handleClick}` を書いたあとで `{...props}` を広げていたので、利用者が `onClick` を
 * 渡した時点で、部品の処理が丸ごと置き換わっていた（`onClick={undefined}` でも同じ）。
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { composeEventHandlers } from "./composeEventHandlers";
import { Tabs } from "../navigation/Tabs/Tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../data-display/Accordion/Accordion";
import { Navbar, NavbarToggle, NavbarMenu, NavbarMenuItem } from "../layout/Navbar/Navbar";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "../overlay/Popover/Popover";
import { ImageCompare } from "../media/ImageCompare/ImageCompare";
import { InteractiveArea } from "../layout/InteractiveArea/InteractiveArea";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("composeEventHandlers", () => {
  const event = () => ({ defaultPrevented: false });

  it("利用者の処理を先に、部品の処理をあとに呼ぶ", () => {
    const calls: string[] = [];
    composeEventHandlers(() => calls.push("user"), () => calls.push("internal"))(event());
    expect(calls).toEqual(["user", "internal"]);
  });

  it("利用者の処理が preventDefault したら、部品の処理を呼ばない", () => {
    const internal = vi.fn();
    const e = event();
    composeEventHandlers((ev: { defaultPrevented: boolean }) => { ev.defaultPrevented = true; }, internal)(e);
    expect(internal).not.toHaveBeenCalled();
  });

  it("先に（子の処理で）preventDefault されていたイベントでは、部品の処理をこれまでどおり呼ぶ", () => {
    const internal = vi.fn();
    composeEventHandlers(() => {}, internal)({ defaultPrevented: true });
    expect(internal).toHaveBeenCalledTimes(1);
  });

  it("どちらかが undefined でも、もう一方を呼ぶ", () => {
    const internal = vi.fn();
    const user = vi.fn();
    composeEventHandlers(undefined, internal)(event());
    composeEventHandlers(user, undefined)(event());
    expect(internal).toHaveBeenCalledTimes(1);
    expect(user).toHaveBeenCalledTimes(1);
  });
});

const renderTabs = (triggerProps: React.ComponentProps<typeof Tabs.Trigger> | object) =>
  render(
    <Tabs defaultValue="a">
      <Tabs.List>
        <Tabs.Trigger value="a">A</Tabs.Trigger>
        <Tabs.Trigger value="b" {...triggerProps}>
          B
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="a">panel-a</Tabs.Content>
      <Tabs.Content value="b">panel-b</Tabs.Content>
    </Tabs>,
  );
const selectedTab = () => screen.getAllByRole("tab").find((tab) => tab.getAttribute("aria-selected") === "true")?.textContent;

describe("同じイベントを渡しても、部品が動く", () => {
  it("Tabs.Trigger: onClick を渡しても、タブが切り替わる（利用者の処理も呼ばれる）", () => {
    const onClick = vi.fn();
    renderTabs({ onClick });
    fireEvent.click(screen.getByRole("tab", { name: "B" }));
    // 対照: 以前は「A」のまま（利用者の onClick が、切り替えの処理を置き換えていた）
    expect(selectedTab()).toBe("B");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Tabs.Trigger: onClick={undefined} を渡しても、タブが切り替わる", () => {
    renderTabs({ onClick: undefined });
    fireEvent.click(screen.getByRole("tab", { name: "B" }));
    expect(selectedTab()).toBe("B");
  });

  it("Tabs.Trigger: 利用者が preventDefault したら、切り替えない", () => {
    renderTabs({ onClick: (e: React.MouseEvent) => e.preventDefault() });
    fireEvent.click(screen.getByRole("tab", { name: "B" }));
    expect(selectedTab()).toBe("A");
  });

  it("AccordionTrigger: onClick を渡しても、開く", () => {
    const onClick = vi.fn();
    render(
      <Accordion type="single">
        <AccordionItem value="x">
          <AccordionTrigger onClick={onClick}>Head</AccordionTrigger>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const trigger = screen.getByRole("button", { name: "Head" });
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("AccordionTrigger: onKeyDown を渡しても、矢印キーで隣の見出しへ移る", () => {
    const onKeyDown = vi.fn();
    render(
      <Accordion type="single">
        <AccordionItem value="x">
          <AccordionTrigger onKeyDown={onKeyDown}>First</AccordionTrigger>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
        <AccordionItem value="y">
          <AccordionTrigger>Second</AccordionTrigger>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const first = screen.getByRole("button", { name: "First" });
    first.focus();
    fireEvent.keyDown(first, { key: "ArrowDown" });
    expect(screen.getByRole("button", { name: "Second" })).toHaveFocus();
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("NavbarMenuItem: onClick を渡しても、メニューが閉じる", () => {
    const onClick = vi.fn();
    render(
      <Navbar>
        <NavbarToggle />
        <NavbarMenu>
          <NavbarMenuItem onClick={onClick}>Docs</NavbarMenuItem>
        </NavbarMenu>
      </Navbar>,
    );
    const toggle = screen.getAllByRole("button")[0];
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(screen.getByText("Docs"));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("PopoverClose: onClick を渡しても、閉じる", () => {
    const onClick = vi.fn();
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          Body
          <PopoverClose ariaLabel="Close popover" onClick={onClick} />
        </PopoverContent>
      </Popover>,
    );
    const trigger = screen.getByRole("button", { name: "Open" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(screen.getByRole("button", { name: "Close popover" }));
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("ImageCompare: onPointerDown を渡しても、つまみが動く", () => {
    const onPointerDown = vi.fn();
    const onPositionChange = vi.fn();
    const { container } = render(
      <ImageCompare before="a.png" after="b.png" onPositionChange={onPositionChange} onPointerDown={onPointerDown} />,
    );
    const root = container.querySelector(".wim-image-compare") as HTMLElement;
    root.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 100, right: 200, bottom: 100, x: 0, y: 0, toJSON: () => ({}) });
    root.setPointerCapture = () => {};
    fireEvent.pointerDown(root, { clientX: 50, clientY: 10, pointerId: 1 });
    expect(onPositionChange).toHaveBeenCalledTimes(1);
    expect(onPointerDown).toHaveBeenCalledTimes(1);
  });

  it("InteractiveArea: onKeyDown を渡しても、Enter でクリックになる", () => {
    const onKeyDown = vi.fn();
    const onClick = vi.fn();
    render(
      <InteractiveArea isClickable onClick={onClick} onKeyDown={onKeyDown}>
        Area
      </InteractiveArea>,
    );
    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });
});
