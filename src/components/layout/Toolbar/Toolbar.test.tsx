import type React from "react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toolbar } from "./Toolbar";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Toolbar", () => {
  it("exposes role=toolbar", () => {
    render(
      <Toolbar aria-label="Formatting">
        <button type="button">Bold</button>
      </Toolbar>,
    );
    expect(screen.getByRole("toolbar", { name: "Formatting" })).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <Toolbar asChild aria-label="Actions">
        <section data-testid="child">
          <button type="button">A</button>
        </section>
      </Toolbar>,
    );
    expect(screen.getByTestId("child")).toHaveAttribute("role", "toolbar");
  });

  it("renders groups and separators", () => {
    render(
      <Toolbar aria-label="Editor">
        <Toolbar.Group aria-label="Style">
          <button type="button">Bold</button>
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Group aria-label="Align">
          <button type="button">Left</button>
        </Toolbar.Group>
      </Toolbar>,
    );
    expect(screen.getByRole("group", { name: "Style" })).toBeInTheDocument();
    expect(screen.getAllByRole("separator", { hidden: true }).length).toBeGreaterThan(0);
  });

  it("moves focus with arrow keys", async () => {
    const user = userEvent.setup();
    render(
      <Toolbar aria-label="Nav">
        <button type="button">One</button>
        <button type="button">Two</button>
        <button type="button">Three</button>
      </Toolbar>,
    );
    const [one, two] = screen.getAllByRole("button");
    one.focus();
    await user.keyboard("{ArrowRight}");
    expect(two).toHaveFocus();
  });

  // T315: 中のボタンが全部 Tab の停止点で、矢印でも動いた。停止点は 1 つにまとめる。
  describe("roving tabindex", () => {
    const tabStops = () =>
      screen.getAllByRole("button").filter((el) => el.getAttribute("tabindex") !== "-1");

    it("is a single Tab stop, and Tab leaves the toolbar", async () => {
      const user = userEvent.setup();
      render(
        <>
          <Toolbar aria-label="Nav">
            <button type="button">One</button>
            <button type="button">Two</button>
            <button type="button">Three</button>
          </Toolbar>
          <button type="button">After</button>
        </>,
      );
      expect(tabStops().map((el) => el.textContent)).toEqual(["One", "After"]);
      await user.tab();
      expect(screen.getByRole("button", { name: "One" })).toHaveFocus();
      await user.tab();
      expect(screen.getByRole("button", { name: "After" })).toHaveFocus();
    });

    it("remembers the control used last, so Shift+Tab returns to it", async () => {
      const user = userEvent.setup();
      render(
        <>
          <Toolbar aria-label="Nav">
            <button type="button">One</button>
            <button type="button">Two</button>
            <button type="button">Three</button>
          </Toolbar>
          <button type="button">After</button>
        </>,
      );
      await user.tab();
      await user.keyboard("{ArrowRight}");
      expect(tabStops().map((el) => el.textContent)).toEqual(["Two", "After"]);
      await user.tab();
      await user.tab({ shift: true });
      expect(screen.getByRole("button", { name: "Two" })).toHaveFocus();
    });

    it("Home and End jump to the ends, and the arrows wrap", async () => {
      const user = userEvent.setup();
      render(
        <Toolbar aria-label="Nav">
          <button type="button">One</button>
          <button type="button">Two</button>
          <button type="button">Three</button>
        </Toolbar>,
      );
      await user.tab();
      await user.keyboard("{End}");
      expect(screen.getByRole("button", { name: "Three" })).toHaveFocus();
      await user.keyboard("{ArrowRight}");
      expect(screen.getByRole("button", { name: "One" })).toHaveFocus();
      await user.keyboard("{ArrowLeft}");
      expect(screen.getByRole("button", { name: "Three" })).toHaveFocus();
      await user.keyboard("{Home}");
      expect(screen.getByRole("button", { name: "One" })).toHaveFocus();
    });

    it("leaves a control the consumer took out of the tab order alone", () => {
      render(
        <Toolbar aria-label="Nav">
          <button type="button">One</button>
          <button type="button" tabIndex={-1}>
            Skipped
          </button>
          <button type="button">Two</button>
        </Toolbar>,
      );
      expect(screen.getByRole("button", { name: "Skipped" })).not.toHaveAttribute(
        "data-wim-toolbar-roving",
      );
      expect(tabStops().map((el) => el.textContent)).toEqual(["One"]);
    });

    it("moves the Tab stop when the current control becomes disabled", async () => {
      const { rerender } = render(
        <Toolbar aria-label="Nav">
          <button type="button">One</button>
          <button type="button">Two</button>
        </Toolbar>,
      );
      rerender(
        <Toolbar aria-label="Nav">
          <button type="button" disabled>
            One
          </button>
          <button type="button">Two</button>
        </Toolbar>,
      );
      expect(screen.getByRole("button", { name: "Two" })).not.toHaveAttribute("tabindex", "-1");
    });

    // 入力欄の矢印を取り上げると、キャレットが動かせない。入力欄は自分の停止点と矢印を持ったままにする。
    it("leaves text fields out: they keep their own Tab stop and their arrow keys", async () => {
      const user = userEvent.setup();
      render(
        <Toolbar aria-label="Nav">
          <button type="button">One</button>
          <input aria-label="Search" defaultValue="abc" />
          <button type="button">Two</button>
        </Toolbar>,
      );
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveAttribute("tabindex");
      await user.tab();
      await user.keyboard("{ArrowRight}");
      expect(screen.getByRole("button", { name: "Two" })).toHaveFocus();
      await user.tab({ shift: true });
      expect(input).toHaveFocus();
      await user.keyboard("{ArrowLeft}{Home}{End}");
      expect(input).toHaveFocus();
    });

    // 中の部品が自分でも矢印を処理して端で折り返すと、Tab の停止点が 1 つのとき、後ろへ届かなくなる。
    it("keeps the main-axis arrows, so a nested widget that wraps cannot trap focus", async () => {
      const user = userEvent.setup();
      const Wrapping = () => (
        <div
          role="radiogroup"
          tabIndex={-1}
          onKeyDown={(event) => {
            if (event.key !== "ArrowRight") return;
            event.preventDefault();
            (event.currentTarget.querySelector("button") as HTMLElement).focus();
          }}
        >
          <button type="button">Inner</button>
        </div>
      );
      render(
        <Toolbar aria-label="Nav">
          <button type="button">One</button>
          <Wrapping />
          <button type="button">Last</button>
        </Toolbar>,
      );
      await user.tab();
      await user.keyboard("{ArrowRight}");
      expect(screen.getByRole("button", { name: "Inner" })).toHaveFocus();
      await user.keyboard("{ArrowRight}");
      expect(screen.getByRole("button", { name: "Last" })).toHaveFocus();
    });
  });
});

describe('Toolbar overflow="collapse"（T361）', () => {
  // jsdom は幅を持たないので、子は data-w の幅、「…」の包み（aria-expanded のボタンを持つ）は 30px、
  // 器は data-available から読ませる
  const rectSpy = vi.spyOn(HTMLElement.prototype, "getBoundingClientRect");
  const clientWidthDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth");

  beforeAll(() => {
    rectSpy.mockImplementation(function (this: HTMLElement) {
      const width = this.dataset.w
        ? Number(this.dataset.w)
        : this.querySelector(":scope > button[aria-expanded]")
          ? 30
          : 0;
      return { width, height: 0, top: 0, left: 0, right: width, bottom: 0, x: 0, y: 0, toJSON: () => ({}) };
    });
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get(this: HTMLElement) {
        return Number(this.closest<HTMLElement>("[data-available]")?.dataset.available ?? 0);
      },
    });
  });

  afterAll(() => {
    rectSpy.mockRestore();
    if (clientWidthDescriptor) Object.defineProperty(HTMLElement.prototype, "clientWidth", clientWidthDescriptor);
  });

  const renderToolbar = (available: number, props: Partial<React.ComponentProps<typeof Toolbar>> = {}) =>
    render(
      <div data-available={available}>
        <Toolbar aria-label="Formatting" overflow="collapse" {...props}>
          <Toolbar.Group aria-label="Text style" data-w={100}>
            <button type="button">Bold</button>
            <button type="button">Italic</button>
          </Toolbar.Group>
          <Toolbar.Separator data-w={1} />
          <button type="button" data-w={40}>
            Link
          </button>
          <button type="button" data-w={40}>
            Image
          </button>
        </Toolbar>
      </div>,
    );

  const more = () => screen.getByRole("button", { name: /Show hidden tools/ });

  it("keeps the leading children that fit and moves the rest behind a named … button", () => {
    // 100 + 1 + 30 = 131 <= 150 < 171（Link まで並べると「…」が入らない）
    renderToolbar(150);
    expect(screen.getByRole("toolbar")).toContainElement(screen.getByRole("group", { name: "Text style" }));
    expect(screen.queryByRole("button", { name: "Link" })).toBeNull();
    expect(more()).toHaveAccessibleName("Show hidden tools (2)");
    expect(more()).toHaveAttribute("aria-expanded", "false");
  });

  it("opens the hidden controls themselves in the panel, without separators", () => {
    renderToolbar(100);
    fireEvent.click(more());
    const panel = document.getElementById(more().getAttribute("aria-controls")!)!;
    expect(panel).toContainElement(screen.getByRole("group", { name: "Text style" }));
    expect(panel).toContainElement(screen.getByRole("button", { name: "Link" }));
    expect(panel).toContainElement(screen.getByRole("button", { name: "Image" }));
    expect(panel.querySelector('[role="separator"]')).toBeNull();
  });

  it("reaches the … button and then the opened controls with the arrow keys", async () => {
    const user = userEvent.setup();
    renderToolbar(150);
    await user.tab();
    expect(screen.getByRole("button", { name: "Bold" })).toHaveFocus();
    await user.keyboard("{End}");
    expect(more()).toHaveFocus();
    await user.keyboard("{Enter}");
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("button", { name: "Link" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(more()).toHaveFocus();
    expect(screen.queryByRole("button", { name: "Link" })).toBeNull();
  });

  it("shows every child and no … button when they all fit", () => {
    renderToolbar(1000);
    expect(screen.getByRole("button", { name: "Image" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Show hidden tools/ })).toBeNull();
  });

  it("uses moreLabel for the … button's name", () => {
    renderToolbar(150, { moreLabel: (count) => `${count} more` });
    expect(screen.getByRole("button", { name: "2 more" })).toBeInTheDocument();
  });

  it("does not collapse a vertical toolbar", () => {
    renderToolbar(100, { orientation: "vertical" });
    expect(screen.getByRole("button", { name: "Image" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Show hidden tools/ })).toBeNull();
  });
});
