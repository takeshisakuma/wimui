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
    fireEvent.click(screen.getByLabelText("lightbox.next"));
    expect(screen.getByAltText("image-b")).toBeInTheDocument();
    // prev ×2 で先頭からループして末尾へ
    fireEvent.click(screen.getByLabelText("lightbox.previous"));
    fireEvent.click(screen.getByLabelText("lightbox.previous"));
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
    fireEvent.click(screen.getByLabelText("lightbox.zoom_in"));
    expect(wrapper().style.transform).toBe("scale(2)");
    expect(screen.getByLabelText("lightbox.zoom_out")).toBeInTheDocument();
    // ナビゲーションでズームがリセットされる
    fireEvent.click(screen.getByLabelText("lightbox.next"));
    expect(wrapper().style.transform).toBe("scale(1)");
    expect(container).toBeInTheDocument();
  });

  it("closes via the close button", async () => {
    const onOpenChange = vi.fn();
    renderGallery({ defaultOpen: true, onOpenChange });
    fireEvent.click(screen.getByLabelText("lightbox.close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    await waitFor(() => {
      expect(screen.queryByAltText("image-a")).not.toBeInTheDocument();
    });
  });

  it("respects controlled open state", () => {
    const onOpenChange = vi.fn();
    renderGallery({ open: true, onOpenChange });
    fireEvent.click(screen.getByLabelText("lightbox.close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    // controlled なので親が open を変えるまで開いたまま
    expect(screen.getByAltText("image-a")).toBeInTheDocument();
  });

  it("shows counter, title and caption", () => {
    renderGallery({ defaultOpen: true });
    expect(screen.getByText("lightbox.counter")).toBeInTheDocument();
    expect(screen.getByText("Title A")).toBeInTheDocument();
    expect(screen.getByText("Caption A")).toBeInTheDocument();
    // caption のない画像へ移動すると footer が消える
    fireEvent.click(screen.getByLabelText("lightbox.next"));
    expect(screen.queryByText("Title A")).not.toBeInTheDocument();
  });

  it("hides counter / navigation / close button when disabled", () => {
    renderGallery(
      { defaultOpen: true },
      { showCounter: false, showNavigation: false, showCloseButton: false },
    );
    expect(screen.queryByText("lightbox.counter")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("lightbox.next")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("lightbox.close")).not.toBeInTheDocument();
  });

  it("hides navigation and counter for a single item", () => {
    renderGallery({ defaultOpen: true }, {}, [ITEMS[0]]);
    expect(screen.queryByLabelText("lightbox.next")).not.toBeInTheDocument();
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

  it("throws when subcomponents are used outside Lightbox", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<LightboxRoot.Trigger>x</LightboxRoot.Trigger>)).toThrow(
      "Lightbox components must be used within Lightbox",
    );
    spy.mockRestore();
  });
});
