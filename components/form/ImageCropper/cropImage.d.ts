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
export declare function resolveCropDetail(g: CropGeometry): {
    detail: ImageCropDetail;
    scale: number;
};
/**
 * 画面に見えている枠の中を、Canvas に描いて data URL にする。
 *
 * 画面の `transform`（`translate → rotate → scale`。原点は画像の中心）を、枠の中心を原点にして
 * そのまま Canvas に写す。失敗（画像が読めていない・別オリジンの画像で Canvas が汚染された）は投げる。
 */
export declare function cropImage(image: HTMLImageElement, g: CropGeometry, type: ImageCropOutputType, quality: number): {
    dataUrl: string;
    detail: ImageCropDetail;
};
