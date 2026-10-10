import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ImageCropper } from "./ImageCropper";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("ImageCropper", () => {
  it("renders with default props", () => {
    render(<ImageCropper />);
    expect(screen.getByText("No image selected")).toBeInTheDocument();
  });

  describe("キーボードで画像の位置を動かす（T330）", () => {
    const setup = () => {
      render(<ImageCropper src="photo.png" />);
      const viewer = screen.getByRole("application", { name: "Image position" });
      const image = screen.getByRole("img");
      const position = () => image.style.transform.match(/translate\((-?\d+)px, (-?\d+)px\)/)!.slice(1).map(Number);
      return { viewer, position };
    };

    it("位置の領域は、Tab で届き、名前と使い方の説明を持つ", () => {
      const { viewer } = setup();
      expect(viewer).toHaveAttribute("tabindex", "0");
      expect(viewer).toHaveAccessibleDescription(/arrow keys/i);
    });

    it("矢印キーで、押した向きに動く", () => {
      const { viewer, position } = setup();
      expect(position()).toEqual([0, 0]);
      fireEvent.keyDown(viewer, { key: "ArrowRight" });
      expect(position()).toEqual([10, 0]);
      fireEvent.keyDown(viewer, { key: "ArrowDown" });
      expect(position()).toEqual([10, 10]);
      fireEvent.keyDown(viewer, { key: "ArrowLeft" });
      fireEvent.keyDown(viewer, { key: "ArrowLeft" });
      expect(position()).toEqual([-10, 10]);
      fireEvent.keyDown(viewer, { key: "ArrowUp" });
      expect(position()).toEqual([-10, 0]);
    });

    it("Shift を押しながらだと、大きく動く", () => {
      const { viewer, position } = setup();
      fireEvent.keyDown(viewer, { key: "ArrowRight", shiftKey: true });
      expect(position()).toEqual([50, 0]);
    });

    it("Home で中央に戻る", () => {
      const { viewer, position } = setup();
      fireEvent.keyDown(viewer, { key: "ArrowRight" });
      fireEvent.keyDown(viewer, { key: "ArrowDown", shiftKey: true });
      expect(position()).toEqual([10, 50]);
      fireEvent.keyDown(viewer, { key: "Home" });
      expect(position()).toEqual([0, 0]);
    });

    it("矢印キーは、ページのスクロールに取られない。ほかのキーには手を出さない", () => {
      const { viewer, position } = setup();
      // fireEvent は、preventDefault されると false を返す
      expect(fireEvent.keyDown(viewer, { key: "ArrowDown" })).toBe(false);
      expect(fireEvent.keyDown(viewer, { key: "Tab" })).toBe(true);
      expect(fireEvent.keyDown(viewer, { key: "a" })).toBe(true);
      expect(position()).toEqual([0, 10]);
    });

    it("ドラッグでも、これまでどおり動く", () => {
      const { viewer, position } = setup();
      fireEvent.mouseDown(viewer, { clientX: 100, clientY: 100 });
      fireEvent.mouseMove(window, { clientX: 130, clientY: 80 });
      fireEvent.mouseUp(window);
      expect(position()).toEqual([30, -20]);
    });
  });
});
