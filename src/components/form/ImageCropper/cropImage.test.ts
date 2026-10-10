import { describe, it, expect, vi, afterEach } from "vitest";
import { cropImage, resolveCropDetail, type CropGeometry } from "./cropImage";

/** 400×300 の画像を、等倍で置いた状態。枠は 200×200。 */
const base: CropGeometry = {
  x: 0,
  y: 0,
  zoom: 1,
  rotation: 0,
  frameWidth: 200,
  frameHeight: 200,
  layoutWidth: 400,
  layoutHeight: 300,
  naturalWidth: 400,
  naturalHeight: 300,
};

describe("resolveCropDetail", () => {
  it("等倍なら、出力は枠と同じ大きさ", () => {
    const { detail, scale } = resolveCropDetail(base);
    expect([detail.width, detail.height]).toEqual([200, 200]);
    expect(scale).toBe(1);
  });

  it("2 倍に拡大していると、枠が覆う元の画像は半分なので、出力も半分になる", () => {
    const { detail, scale } = resolveCropDetail({ ...base, zoom: 2 });
    expect([detail.width, detail.height]).toEqual([100, 100]);
    expect(scale).toBe(0.5);
  });

  it("画面より大きい元の画像は、元の解像度で切る（画面の大きさで粗くしない）", () => {
    // 4000×3000 の写真を、400×300 に縮めて置いている
    const { detail } = resolveCropDetail({ ...base, naturalWidth: 4000, naturalHeight: 3000 });
    expect([detail.width, detail.height]).toEqual([2000, 2000]);
  });

  it("maxOutputSize は、長いほうの辺の上限。縦横比は保つ", () => {
    const { detail } = resolveCropDetail({
      ...base,
      frameHeight: 100,
      naturalWidth: 4000,
      naturalHeight: 3000,
      maxOutputSize: 512,
    });
    expect([detail.width, detail.height]).toEqual([512, 256]);
  });

  it("maxOutputSize より小さい出力は、引き伸ばさない", () => {
    const { detail } = resolveCropDetail({ ...base, maxOutputSize: 1024 });
    expect([detail.width, detail.height]).toEqual([200, 200]);
  });

  it("渡した位置・拡大・回転・枠・元の大きさを、そのまま返す", () => {
    const { detail } = resolveCropDetail({ ...base, x: 30, y: -20, zoom: 1.5, rotation: 90 });
    expect(detail).toMatchObject({
      x: 30,
      y: -20,
      zoom: 1.5,
      rotation: 90,
      frameWidth: 200,
      frameHeight: 200,
      naturalWidth: 400,
      naturalHeight: 300,
    });
  });
});

describe("cropImage", () => {
  afterEach(() => vi.restoreAllMocks());

  const image = (complete = true) => ({ complete }) as unknown as HTMLImageElement;

  /** jsdom は Canvas を持たない。描く順番と値を記録する差し替え。 */
  const mockCanvas = (toDataURL: () => string = () => "data:image/png;base64,AAAA") => {
    const calls: [string, ...unknown[]][] = [];
    const ctx = {
      fillStyle: "",
      fillRect: (...a: unknown[]) => calls.push(["fillRect", ...a]),
      translate: (...a: unknown[]) => calls.push(["translate", ...a]),
      scale: (...a: unknown[]) => calls.push(["scale", ...a]),
      rotate: (...a: unknown[]) => calls.push(["rotate", ...a]),
      drawImage: (_img: unknown, ...a: unknown[]) => calls.push(["drawImage", ...a]),
    };
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(ctx as unknown as CanvasRenderingContext2D);
    const dataUrl = vi.spyOn(HTMLCanvasElement.prototype, "toDataURL").mockImplementation(toDataURL);
    return { calls, dataUrl };
  };

  it("画面の transform を、枠の中心を原点にして同じ順番で写す", () => {
    const { calls, dataUrl } = mockCanvas();
    const out = cropImage(image(), { ...base, x: 30, y: -20, zoom: 2, rotation: 90 }, "image/png", 0.92);

    expect(out.dataUrl).toBe("data:image/png;base64,AAAA");
    expect([out.detail.width, out.detail.height]).toEqual([100, 100]);
    expect(calls).toEqual([
      ["translate", 50, 50], // 出力の中心
      ["scale", 0.5, 0.5], // 枠の 1 CSS px → 出力の px
      ["translate", 30, -20], // 画像の位置
      ["rotate", Math.PI / 2],
      ["scale", 2, 2],
      ["drawImage", -200, -150, 400, 300], // 画像の中心を原点に
    ]);
    expect(dataUrl).toHaveBeenCalledWith("image/png", 0.92);
  });

  it("JPEG は、画像が覆っていない部分を白で塗ってから描く", () => {
    const { calls } = mockCanvas();
    cropImage(image(), base, "image/jpeg", 0.8);
    expect(calls[0]).toEqual(["fillRect", 0, 0, 200, 200]);
  });

  it("PNG は塗らない（透明のまま）", () => {
    const { calls } = mockCanvas();
    cropImage(image(), base, "image/png", 0.92);
    expect(calls.some(([name]) => name === "fillRect")).toBe(false);
  });

  it("画像が読めていなければ投げる", () => {
    mockCanvas();
    expect(() => cropImage(image(false), base, "image/png", 0.92)).toThrow(/has not loaded/);
    expect(() => cropImage(image(), { ...base, naturalWidth: 0, naturalHeight: 0 }, "image/png", 0.92)).toThrow(/has not loaded/);
  });

  it("Canvas が汚染されていて取り出せないときは、ブラウザの例外をそのまま投げる", () => {
    mockCanvas(() => {
      throw new DOMException("Tainted canvases may not be exported.", "SecurityError");
    });
    expect(() => cropImage(image(), base, "image/png", 0.92)).toThrow(/Tainted/);
  });
});
