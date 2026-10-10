/** What the crop was made from. Enough to redo the crop elsewhere (for example on a server). */
export type ImageCropDetail = {
  /** Horizontal offset of the image center from the center of the crop frame, in CSS px. */
  x: number;
  /** Vertical offset of the image center from the center of the crop frame, in CSS px. */
  y: number;
  /** Zoom factor applied to the image (1 = the size it is laid out at). */
  zoom: number;
  /** Clockwise rotation in degrees. */
  rotation: number;
  /** Width of the crop frame on screen, in CSS px. */
  frameWidth: number;
  /** Height of the crop frame on screen, in CSS px. */
  frameHeight: number;
  /** Width of the output image in px, after `maxOutputSize` is applied. */
  width: number;
  /** Height of the output image in px, after `maxOutputSize` is applied. */
  height: number;
  /** Natural width of the source image in px. */
  naturalWidth: number;
  /** Natural height of the source image in px. */
  naturalHeight: number;
};

export type ImageCropOutputType = "image/png" | "image/jpeg" | "image/webp";

export type CropGeometry = {
  x: number;
  y: number;
  zoom: number;
  rotation: number;
  frameWidth: number;
  frameHeight: number;
  /** 画像が、拡大の前に画面で占めている大きさ（CSS px）。 */
  layoutWidth: number;
  layoutHeight: number;
  naturalWidth: number;
  naturalHeight: number;
  maxOutputSize?: number;
};

/**
 * 出力の大きさと、枠の 1 CSS px が出力の何 px になるかを決める。
 *
 * 画面の枠の大きさで切ると、拡大して見ている写真は粗くなる。元の画像の解像度で切る ──
 * 枠が元の画像の何 px ぶんを覆っているかを、出力の大きさにする。`maxOutputSize` は長いほうの辺の上限。
 */
export function resolveCropDetail(g: CropGeometry): { detail: ImageCropDetail; scale: number } {
  // 拡大なしのとき、画面の 1 CSS px が元の画像の何 px か
  const naturalPerCss = g.layoutWidth > 0 ? g.naturalWidth / g.layoutWidth : 1;
  let scale = naturalPerCss / g.zoom;
  const longest = Math.max(g.frameWidth, g.frameHeight) * scale;
  if (g.maxOutputSize !== undefined && g.maxOutputSize > 0 && longest > g.maxOutputSize) {
    scale *= g.maxOutputSize / longest;
  }
  const width = Math.max(1, Math.round(g.frameWidth * scale));
  const height = Math.max(1, Math.round(g.frameHeight * scale));
  const detail: ImageCropDetail = {
    x: g.x,
    y: g.y,
    zoom: g.zoom,
    rotation: g.rotation,
    frameWidth: g.frameWidth,
    frameHeight: g.frameHeight,
    width,
    height,
    naturalWidth: g.naturalWidth,
    naturalHeight: g.naturalHeight,
  };
  // 丸めたあとの大きさに合わせる（枠の端と出力の端を一致させる）
  return { detail, scale: width / g.frameWidth };
}

/**
 * 画面に見えている枠の中を、Canvas に描いて data URL にする。
 *
 * 画面の `transform`（`translate → rotate → scale`。原点は画像の中心）を、枠の中心を原点にして
 * そのまま Canvas に写す。失敗（画像が読めていない・別オリジンの画像で Canvas が汚染された）は投げる。
 */
export function cropImage(
  image: HTMLImageElement,
  g: CropGeometry,
  type: ImageCropOutputType,
  quality: number,
): { dataUrl: string; detail: ImageCropDetail } {
  const { detail, scale } = resolveCropDetail(g);
  if (!image.complete || g.naturalWidth === 0 || g.naturalHeight === 0) {
    throw new Error("ImageCropper: the image has not loaded, so there is nothing to crop.");
  }
  const canvas = document.createElement("canvas");
  canvas.width = detail.width;
  canvas.height = detail.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("ImageCropper: a 2D canvas context is not available.");
  }
  if (type === "image/jpeg") {
    // JPEG は透明を持てない。画像が枠を覆っていない部分は、黒ではなく白にする
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, detail.width, detail.height);
  }
  ctx.translate(detail.width / 2, detail.height / 2);
  ctx.scale(scale, scale);
  ctx.translate(g.x, g.y);
  ctx.rotate((g.rotation * Math.PI) / 180);
  ctx.scale(g.zoom, g.zoom);
  ctx.drawImage(image, -g.layoutWidth / 2, -g.layoutHeight / 2, g.layoutWidth, g.layoutHeight);
  // 別オリジンの画像を CORS の許可なしで描いていると、ここで SecurityError が投げられる
  const dataUrl = canvas.toDataURL(type, quality);
  return { dataUrl, detail };
}
