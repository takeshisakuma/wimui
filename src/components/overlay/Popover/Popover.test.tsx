import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./Popover";

describe("Popover", () => {
  it("renders trigger and opens content on click", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Popover Content")).toBeInTheDocument();
  });

  it("positions the content next to an asChild trigger that has its own ref", async () => {
    const userRef = { current: null as HTMLButtonElement | null };
    render(
      <Popover placement="bottom-start">
        <PopoverTrigger asChild>
          <button ref={userRef} type="button">Open</button>
        </PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );
    const trigger = screen.getByRole("button", { name: "Open" });
    // jsdom はレイアウトを持たないので、引き金の位置だけ与える
    trigger.getBoundingClientRect = () =>
      ({ x: 200, y: 100, left: 200, top: 100, right: 240, bottom: 124, width: 40, height: 24, toJSON: () => ({}) }) as DOMRect;
    fireEvent.click(trigger);
    const dialog = await screen.findByRole("dialog");
    // React 19 では子の ref も props に入る。子の props を後から広げると、位置合わせの ref が上書きされ、
    // 位置が一度も計算されず、面は `translate(0px)` のまま画面の左上に出ていた（T416）。
    // jsdom の座標そのものは当てにならないので、「計算されて、引き金の下へ動いたか」だけを見る。
    await waitFor(() => expect(dialog.style.transform).toMatch(/^translate\([\d.]+px, [1-9][\d.]*px\)$/));
    expect(userRef.current).toBe(trigger);
  });

  it("closes when close button is clicked", async () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          Popover Content
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>,
    );

    expect(screen.getByText("Popover Content")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Close"));
    await waitFor(() => {
      expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
    });
  });

  it("names the dialog with the trigger when no name is given", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Set dimensions</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(
      screen.getByRole("dialog", { name: "Set dimensions" }),
    ).toBeInTheDocument();
  });

  it("still names the dialog when aria-labelledby is passed as undefined", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Set dimensions</PopoverTrigger>
        <PopoverContent aria-labelledby={undefined}>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(
      screen.getByRole("dialog", { name: "Set dimensions" }),
    ).toBeInTheDocument();
  });

  it("names the dialog with an asChild trigger and keeps its id", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button type="button" id="my-trigger">Filters</button>
        </PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(screen.getByRole("button", { name: "Filters" })).toHaveAttribute("id", "my-trigger");
    expect(screen.getByRole("dialog", { name: "Filters" })).toHaveAttribute(
      "aria-labelledby",
      "my-trigger",
    );
  });

  it("lets a given aria-label or aria-labelledby win over the trigger", () => {
    render(
      <>
        <Popover defaultOpen>
          <PopoverTrigger>Open A</PopoverTrigger>
          <PopoverContent aria-label="Label A">A</PopoverContent>
        </Popover>
        <Popover defaultOpen>
          <PopoverTrigger>Open B</PopoverTrigger>
          <PopoverContent aria-labelledby="heading-b">
            <h2 id="heading-b">Heading B</h2>
          </PopoverContent>
        </Popover>
      </>,
    );

    expect(screen.getByRole("dialog", { name: "Label A" })).not.toHaveAttribute("aria-labelledby");
    expect(screen.getByRole("dialog", { name: "Heading B" })).toBeInTheDocument();
  });

  it("keeps focus where it is when open from the first render", async () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <button type="button">Inside</button>
        </PopoverContent>
      </Popover>,
    );

    expect(screen.getByRole("button", { name: "Inside" })).toBeInTheDocument();
    // FloatingFocusManager moves focus after a frame; wait past it before checking
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(document.body).toHaveFocus();
  });

  it("moves focus into the content when the user opens it", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <button type="button">Inside</button>
        </PopoverContent>
      </Popover>,
    );

    fireEvent.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Inside" })).toHaveFocus();
    });
  });

  it("moves focus in on a later open, after starting open and closing", async () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>,
    );

    fireEvent.click(screen.getByText("Close"));
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    fireEvent.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /close/i })).toHaveFocus();
    });
  });

  it("closes when clicking outside", async () => {
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <Popover defaultOpen>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Popover Content</PopoverContent>
        </Popover>
      </div>,
    );

    expect(screen.getByText("Popover Content")).toBeInTheDocument();
    fireEvent.pointerDown(screen.getByTestId("outside"));
    await waitFor(() => {
      expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
