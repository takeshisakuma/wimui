import { describe, it, expect, vi, afterEach } from "vitest";
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

  describe("切り抜いた画像を返す（T334）", () => {
    afterEach(() => vi.restoreAllMocks());

    /** jsdom は配置を持たないので、枠と画像の大きさを差し込む。400×300 の画像・200×200 の枠。 */
    const layout = () => {
      const sizes: Record<string, number> = { naturalWidth: 400, naturalHeight: 300, offsetWidth: 400, offsetHeight: 300 };
      for (const [key, value] of Object.entries(sizes)) {
        vi.spyOn(HTMLImageElement.prototype, key as "naturalWidth", "get").mockReturnValue(value);
      }
      vi.spyOn(HTMLImageElement.prototype, "complete", "get").mockReturnValue(true);
      vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(200);
      vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(200);
    };
    const canvas = (toDataURL: () => string) => {
      const noop = () => undefined;
      vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
        fillRect: noop, translate: noop, scale: noop, rotate: noop, drawImage: noop,
      } as unknown as CanvasRenderingContext2D);
      vi.spyOn(HTMLCanvasElement.prototype, "toDataURL").mockImplementation(toDataURL);
    };
    const apply = () => {
      fireEvent.click(screen.getByRole("button", { name: "Apply Crop" }));
      fireEvent.click(screen.getByRole("button", { name: "Apply" }));
    };

    it("確定すると、元の URL ではなく切り抜いた画像と、切り抜きの数値を渡す", () => {
      layout();
      canvas(() => "data:image/png;base64,CROPPED");
      const onCrop = vi.fn();
      const onApply = vi.fn();
      render(<ImageCropper src="photo.png" onCrop={onCrop} onApply={onApply} />);
      fireEvent.keyDown(screen.getByRole("application"), { key: "ArrowRight" });
      apply();

      const detail = { x: 10, y: 0, zoom: 1, rotation: 0, frameWidth: 200, frameHeight: 200, width: 200, height: 200, naturalWidth: 400, naturalHeight: 300 };
      expect(onCrop).toHaveBeenCalledWith("data:image/png;base64,CROPPED", detail);
      expect(onApply).toHaveBeenCalledWith("data:image/png;base64,CROPPED", detail);
    });

    it("maxOutputSize・outputType・outputQuality を、出力に使う", () => {
      layout();
      const toDataURL = vi.fn(() => "data:image/jpeg;base64,X");
      canvas(toDataURL);
      const onCrop = vi.fn();
      render(<ImageCropper src="photo.png" onCrop={onCrop} maxOutputSize={50} outputType="image/jpeg" outputQuality={0.5} />);
      apply();

      expect(toDataURL).toHaveBeenCalledWith("image/jpeg", 0.5);
      expect(onCrop.mock.calls[0][1]).toMatchObject({ width: 50, height: 50 });
    });

    it("画像を作れないときは、onCrop を呼ばず、onCropError に理由と数値を渡す", () => {
      layout();
      canvas(() => {
        throw new DOMException("Tainted canvases may not be exported.", "SecurityError");
      });
      const onCrop = vi.fn();
      const onApply = vi.fn();
      const onCropError = vi.fn();
      render(<ImageCropper src="https://other.example/photo.png" onCrop={onCrop} onApply={onApply} onCropError={onCropError} />);
      apply();

      expect(onCrop).not.toHaveBeenCalled();
      expect(onApply).not.toHaveBeenCalled();
      expect(onCropError).toHaveBeenCalledTimes(1);
      const [error, detail] = onCropError.mock.calls[0];
      expect(error.message).toMatch(/Tainted/);
      expect(detail).toMatchObject({ x: 0, y: 0, zoom: 1, rotation: 0, width: 200, height: 200 });
    });

    it("crossOrigin を、画像の要素に渡す", () => {
      render(<ImageCropper src="https://other.example/photo.png" crossOrigin="anonymous" />);
      expect(screen.getByRole("img")).toHaveAttribute("crossorigin", "anonymous");
    });
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
      fireEvent.pointerDown(viewer, { clientX: 100, clientY: 100, pointerType: "mouse", button: 0 });
      fireEvent.pointerMove(window, { clientX: 130, clientY: 80 });
      fireEvent.pointerUp(window);
      expect(position()).toEqual([30, -20]);
      // 離したあとは、動かしても付いてこない
      fireEvent.pointerMove(window, { clientX: 300, clientY: 300 });
      expect(position()).toEqual([30, -20]);
    });

    it("タッチでも動く（T335）", () => {
      const { viewer, position } = setup();
      fireEvent.pointerDown(viewer, { clientX: 50, clientY: 50, pointerType: "touch" });
      fireEvent.pointerMove(window, { clientX: 20, clientY: 90, pointerType: "touch" });
      expect(position()).toEqual([-30, 40]);
      // ブラウザが操作を取り上げたとき（pointercancel）も、掴んだままにならない
      fireEvent.pointerCancel(window);
      fireEvent.pointerMove(window, { clientX: 200, clientY: 200, pointerType: "touch" });
      expect(position()).toEqual([-30, 40]);
    });

    it("マウスの主ボタン以外では掴まない", () => {
      const { viewer, position } = setup();
      fireEvent.pointerDown(viewer, { clientX: 100, clientY: 100, pointerType: "mouse", button: 2 });
      fireEvent.pointerMove(window, { clientX: 130, clientY: 80 });
      expect(position()).toEqual([0, 0]);
    });
  });
});
