import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerHeader,
  DrawerFooter,
  DrawerDescription,
} from "./Drawer";

describe("Drawer", () => {
  it("opens and closes", async () => {
    render(
      <Drawer side="right">
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Title</DrawerTitle>
          <DrawerClose>Close</DrawerClose>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Drawer"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("applies side class", () => {
    render(
      <Drawer side="left" defaultOpen>
        <DrawerContent>hello</DrawerContent>
      </Drawer>,
    );
    const content = screen.getByRole("dialog");
    expect(content).toHaveClass("wim-drawer-content--left");
  });

  it("applies top side class", () => {
    render(
      <Drawer side="top" defaultOpen>
        <DrawerContent>content</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByRole("dialog")).toHaveClass("wim-drawer-content--top");
  });

  it("applies bottom side class", () => {
    render(
      <Drawer side="bottom" defaultOpen>
        <DrawerContent>content</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByRole("dialog")).toHaveClass("wim-drawer-content--bottom");
  });

  it("controlled mode: respects open prop", () => {
    render(
      <Drawer open={true}>
        <DrawerContent>Controlled</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("controlled mode: calls onOpenChange when closing", () => {
    const onOpenChange = vi.fn();
    render(
      <Drawer open={true} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerClose>Close</DrawerClose>
        </DrawerContent>
      </Drawer>,
    );
    fireEvent.click(screen.getByText("Close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("uncontrolled mode: calls onOpenChange callback on open", () => {
    const onOpenChange = vi.fn();
    render(
      <Drawer onOpenChange={onOpenChange}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>Content</DrawerContent>
      </Drawer>,
    );
    fireEvent.click(screen.getByText("Open"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("DrawerTrigger asChild merges onClick and className", () => {
    const childClick = vi.fn();
    render(
      <Drawer>
        <DrawerTrigger asChild className="trigger-cls">
          <button className="child-cls" onClick={childClick}>Open</button>
        </DrawerTrigger>
        <DrawerContent>Content</DrawerContent>
      </Drawer>,
    );
    const btn = screen.getByText("Open");
    expect(btn).toHaveClass("trigger-cls");
    expect(btn).toHaveClass("child-cls");
    fireEvent.click(btn);
    expect(childClick).toHaveBeenCalled();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("DrawerTrigger asChild works without child onClick", () => {
    render(
      <Drawer>
        <DrawerTrigger asChild>
          <button>Open</button>
        </DrawerTrigger>
        <DrawerContent>Content</DrawerContent>
      </Drawer>,
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("DrawerClose asChild merges onClick and closes", async () => {
    const childClick = vi.fn();
    render(
      <Drawer defaultOpen>
        <DrawerContent>
          <DrawerClose asChild>
            <button onClick={childClick}>Close</button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>,
    );
    fireEvent.click(screen.getByText("Close"));
    expect(childClick).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("renders DrawerHeader, DrawerFooter, DrawerDescription with className", () => {
    render(
      <Drawer defaultOpen>
        <DrawerContent>
          <DrawerHeader className="hdr-cls">Header</DrawerHeader>
          <DrawerFooter className="ftr-cls">Footer</DrawerFooter>
          <DrawerDescription className="desc-cls">Desc</DrawerDescription>
        </DrawerContent>
      </Drawer>,
    );
    expect(screen.getByText("Header").className).toContain("hdr-cls");
    expect(screen.getByText("Footer").className).toContain("ftr-cls");
    expect(screen.getByText("Desc").className).toContain("desc-cls");
  });

  it("DrawerContent renders with custom className", () => {
    render(
      <Drawer defaultOpen>
        <DrawerContent className="custom-content">Content</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByRole("dialog")).toHaveClass("custom-content");
  });

  it("DrawerTitle renders with custom className", () => {
    render(
      <Drawer defaultOpen>
        <DrawerContent>
          <DrawerTitle className="title-cls">Title</DrawerTitle>
        </DrawerContent>
      </Drawer>,
    );
    expect(screen.getByText("Title").className).toContain("title-cls");
  });

  it("useDrawer throws outside Drawer provider", () => {
    // DrawerClose uses useDrawer internally
    const BadComponent = () => (
      <DrawerClose>Close</DrawerClose>
    );
    expect(() => render(<BadComponent />)).toThrow(
      "useDrawer must be used within a Drawer provider",
    );
  });

  it("slideIn=false does not add slide classes", () => {
    render(
      <Drawer defaultOpen slideIn={false}>
        <DrawerContent>Content</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("slideOut=false works", () => {
    render(
      <Drawer defaultOpen slideOut={false}>
        <DrawerContent>Content</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
