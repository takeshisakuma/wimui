import { describe, it, expect, vi } from "vitest";
import type React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LightboxRoot, { Lightbox, LightboxItem } from "./Lightbox";
import styles from "./lightbox.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const ITEMS: LightboxItem[] = [
  { src: "/a.png", alt: "image-a", title: "Title A", caption: "Caption A" },
  { src: "/b.png", alt: "image-b" },
  { src: "/c.png", alt: "image-c" },
];

const renderGallery = (
  rootProps: Partial<React.ComponentProps<typeof LightboxRoot>> = {},
  contentProps: React.ComponentProps<typeof LightboxRoot.Content> = {},
  items: LightboxItem[] = ITEMS,
) =>
  render(
    <LightboxRoot {...rootProps}>
      <LightboxRoot.Gallery items={items}>
        <LightboxRoot.Trigger index={0}>open-first</LightboxRoot.Trigger>
        <LightboxRoot.Trigger index={1}>open-second</LightboxRoot.Trigger>
      </LightboxRoot.Gallery>
      <LightboxRoot.Content {...contentProps} />
    </LightboxRoot>,
  );

describe("Lightbox", () => {
  it("renders correctly", () => {
    render(<Lightbox>Test content</Lightbox>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("is closed by default and opens via trigger", () => {
    const onOpenChange = vi.fn();
    renderGallery({ onOpenChange });
    expect(screen.queryByAltText("image-a")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("open-first"));
    expect(screen.getByAltText("image-a")).toBeInTheDocument();
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("opens at the trigger's index", () => {
    renderGallery();
    fireEvent.click(screen.getByText("open-second"));
    expect(screen.getByAltText("image-b")).toBeInTheDocument();
  });

  it("adds a new item when trigger has an unknown src", () => {
    render(
      <LightboxRoot>
        <LightboxRoot.Gallery items={ITEMS}>
          <LightboxRoot.Trigger src="/new.png" alt="new-image">
            open-new
          </LightboxRoot.Trigger>
        </LightboxRoot.Gallery>
        <LightboxRoot.Content />
      </LightboxRoot>,
    );
    fireEvent.click(screen.getByText("open-new"));
    expect(screen.getByAltText("new-image")).toBeInTheDocument();
  });

  it("jumps to the existing item when trigger src already exists", () => {
    render(
      <LightboxRoot>
        <LightboxRoot.Gallery items={ITEMS}>
          <LightboxRoot.Trigger src="/b.png">open-b</LightboxRoot.Trigger>
        </LightboxRoot.Gallery>
        <LightboxRoot.Content />
      </LightboxRoot>,
    );
    fireEvent.click(screen.getByText("open-b"));
    expect(screen.getByAltText("image-b")).toBeInTheDocument();
  });

  it("navigates with next/prev buttons and wraps around", () => {
    renderGallery({ defaultOpen: true });
    fireEvent.click(screen.getByLabelText("Next"));
    expect(screen.getByAltText("image-b")).toBeInTheDocument();
    // prev ×2 で先頭からループして末尾へ
    fireEvent.click(screen.getByLabelText("Previous"));
    fireEvent.click(screen.getByLabelText("Previous"));
    expect(screen.getByAltText("image-c")).toBeInTheDocument();
  });

  it("supports keyboard navigation and Escape to close", async () => {
    renderGallery({ defaultOpen: true });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByAltText("image-b")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(screen.getByAltText("image-a")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByAltText("image-a")).not.toBeInTheDocument();
    });
  });

  it("toggles zoom and resets it on navigation", () => {
    const { container } = renderGallery({ defaultOpen: true });
    const wrapper = () =>
      document.querySelector(`.${styles.mediaWrapper}`) as HTMLElement;
    expect(wrapper().style.transform).toBe("scale(1)");
    fireEvent.click(screen.getByLabelText("Zoom in"));
    expect(wrapper().style.transform).toBe("scale(2)");
    expect(screen.getByLabelText("Zoom out")).toBeInTheDocument();
    // ナビゲーションでズームがリセットされる
    fireEvent.click(screen.getByLabelText("Next"));
    expect(wrapper().style.transform).toBe("scale(1)");
    expect(container).toBeInTheDocument();
  });

  it("closes via the close button", async () => {
    const onOpenChange = vi.fn();
    renderGallery({ defaultOpen: true, onOpenChange });
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    await waitFor(() => {
      expect(screen.queryByAltText("image-a")).not.toBeInTheDocument();
    });
  });

  it("respects controlled open state", () => {
    const onOpenChange = vi.fn();
    renderGallery({ open: true, onOpenChange });
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    // controlled なので親が open を変えるまで開いたまま
    expect(screen.getByAltText("image-a")).toBeInTheDocument();
  });

  it("shows counter, title and caption", () => {
    renderGallery({ defaultOpen: true });
    expect(screen.getByText(/\d+ \/ \d+/)).toBeInTheDocument();
    expect(screen.getByText("Title A")).toBeInTheDocument();
    expect(screen.getByText("Caption A")).toBeInTheDocument();
    // caption のない画像へ移動すると footer が消える
    fireEvent.click(screen.getByLabelText("Next"));
    expect(screen.queryByText("Title A")).not.toBeInTheDocument();
  });

  it("hides counter / navigation / close button when disabled", () => {
    renderGallery(
      { defaultOpen: true },
      { showCounter: false, showNavigation: false, showCloseButton: false },
    );
    expect(screen.queryByText("lightbox.counter")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Next")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
  });

  it("hides navigation and counter for a single item", () => {
    renderGallery({ defaultOpen: true }, {}, [ITEMS[0]]);
    expect(screen.queryByLabelText("Next")).not.toBeInTheDocument();
    expect(screen.queryByText("lightbox.counter")).not.toBeInTheDocument();
  });

  it("renders nothing when there are no items", () => {
    render(
      <LightboxRoot defaultOpen>
        <LightboxRoot.Content />
      </LightboxRoot>,
    );
    expect(document.querySelector(`.${styles.container}`)).toBeNull();
  });

  /*
   * T68 で「同一コミットなのに 1 回目だけ `Media/Lightbox` が `button-name` で
   * 赤」と記録されていた件。名前が入れ子の `alt` 由来だと、中身の `Image` が
   * まだ `<img>` を描いていない瞬間に**名前の無いボタン**になる。ここは子に
   * 画像を一切置かないので、**その瞬間を固定して**名前が出ることを確かめる。
   *
   * 期待値がキーではなく英語なのは、`useWimTranslation` が `react-i18next` を
   * 経由せず**内蔵リソースから解決する**ため（ファイル冒頭のモックはこのフックには
   * 効かない）。出荷時と同じ経路を通っていることの確認も兼ねる。
   */
  it("names the trigger without depending on a rendered image", () => {
    renderGallery();
    expect(
      screen.getByRole("button", { name: "Open image: image-a" }),
    ).toBeInTheDocument();
  });

  it("gives each gallery trigger its own name from the item data", () => {
    renderGallery();
    expect(
      screen.getByRole("button", { name: "Open image: image-a" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Open image: image-b" }),
    ).toBeInTheDocument();
  });

  it("falls back to the generic name when no alt is available", () => {
    render(
      <LightboxRoot>
        <LightboxRoot.Trigger src="/no-alt.png">x</LightboxRoot.Trigger>
        <LightboxRoot.Content />
      </LightboxRoot>,
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Open image",
    );
  });

  it("leaves a caller-supplied aria-label alone", () => {
    render(
      <LightboxRoot>
        <LightboxRoot.Gallery items={ITEMS}>
          <LightboxRoot.Trigger index={0} aria-label="Open the city photo">
            x
          </LightboxRoot.Trigger>
        </LightboxRoot.Gallery>
        <LightboxRoot.Content />
      </LightboxRoot>,
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Open the city photo",
    );
  });

  it("throws when subcomponents are used outside Lightbox", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<LightboxRoot.Trigger>x</LightboxRoot.Trigger>)).toThrow(
      "Lightbox components must be used within Lightbox",
    );
    spy.mockRestore();
  });
});
