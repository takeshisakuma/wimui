import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { formNs } from "@/i18n/generated/form";
import { Slider } from "../Slider/Slider";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button/Button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  DialogClose
} from "../../overlay/Dialog/Dialog";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { cropImage, resolveCropDetail, type CropGeometry, type ImageCropDetail, type ImageCropOutputType } from "./cropImage";
import styles from "./image-cropper.module.scss";

export type { ImageCropDetail, ImageCropOutputType };

/** 矢印キー 1 回で画像が動く量（px）。Shift を押しているときは大きいほう。 */
const KEY_STEP = 10;
const KEY_STEP_LARGE = 50;

export interface ImageCropperProps extends React.ComponentPropsWithoutRef<"div"> {
  /** URL or data URL of the image to crop */
  src?: string;
  /** Aspect ratio (width / height); 1 produces a square */
  aspectRatio?: number;
  /** Whether to display a circular crop area (for profile images) */
  circular?: boolean;
  /**
   * Called with the cropped image as a data URL once the crop is confirmed. The second argument
   * describes the crop (offset, zoom, rotation, frame and output size) so it can be redone elsewhere.
   */
  onCrop?: (dataUrl: string, detail: ImageCropDetail) => void;
  /** Whether to show the rotation button */
  showRotation?: boolean;
  /** Whether to show the zoom slider */
  showZoom?: boolean;
  /** Whether to show the apply button */
  showApplyButton?: boolean;
  /** Label of the apply button */
  applyLabel?: string;
  /** Called with the cropped image and the crop detail when the crop is applied (after confirming in the dialog) */
  onApply?: (dataUrl: string, detail: ImageCropDetail) => void;
  /**
   * Called instead of onCrop and onApply when the image cannot be produced, with the crop detail.
   * The usual cause is an image from another origin drawn without CORS approval: the browser then
   * refuses to read the canvas. Set crossOrigin and serve the image with CORS headers, or crop on
   * the server from the detail.
   */
  onCropError?: (error: Error, detail: ImageCropDetail) => void;
  /**
   * Upper bound, in px, for the longer side of the output image. The crop is taken at the
   * resolution of the source image; without a bound a large photo produces a large data URL.
   */
  maxOutputSize?: number;
  /**
   * Image format of the output. "image/png" keeps transparency where the image does not cover the frame.
   * @default "image/png"
   */
  outputType?: ImageCropOutputType;
  /**
   * Quality from 0 to 1 for "image/jpeg" and "image/webp". Ignored for "image/png".
   * @default 0.92
   */
  outputQuality?: number;
  /**
   * CORS mode used to load the image. Needed to crop an image served from another origin;
   * the server must send matching CORS headers or the image will not load at all.
   */
  crossOrigin?: "anonymous" | "use-credentials";
}

/**
 * Component for cropping and rotating an image.
 * Suitable for setting user profile images.
 */
export const ImageCropper = React.forwardRef<HTMLDivElement, ImageCropperProps>(
  (
    {
      src,
      aspectRatio = 1,
      circular = false,
      onCrop,
      showRotation = true,
      showZoom = true,
      showApplyButton = true,
      applyLabel,
      onApply,
      onCropError,
      maxOutputSize,
      outputType = "image/png",
      outputQuality = 0.92,
      crossOrigin,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation([formNs, commonNs]);
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const hintId = useId();

    // 画像が読み込まれたら位置をリセット
    useEffect(() => {
      setPosition({ x: 0, y: 0 });
      setZoom(1);
      setRotation(0);
    }, [src]);

    // ドラッグは、以前はマウスのイベントで組んでいて、タッチでは画像を動かせなかった（T335）。
    // ポインタのイベントは、マウス・タッチ・ペンを 1 つの口で受ける。
    const handlePointerDown = (e: React.PointerEvent) => {
      // マウスは主ボタンだけ（右クリックのメニューや中ボタンで掴まない）
      if (e.pointerType === "mouse" && e.button !== 0) return;
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handlePointerMove = useCallback(
      (e: PointerEvent) => {
        if (!isDragging) return;
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      },
      [isDragging, dragStart],
    );

    const handlePointerUp = useCallback(() => {
      setIsDragging(false);
    }, []);

    useEffect(() => {
      if (!isDragging) return;
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      // タッチは、ブラウザが操作を取り上げると `pointerup` の代わりに `pointercancel` が来る
      window.addEventListener("pointercancel", handlePointerUp);
      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("pointercancel", handlePointerUp);
      };
    }, [isDragging, handlePointerMove, handlePointerUp]);

    // 位置を動かす口は、以前はドラッグにしか無かった（T330）。キーボードだけの利用者は、
    // 画像の中央しか切り抜けなかった。矢印キーで同じことができるようにする。
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const step = e.shiftKey ? KEY_STEP_LARGE : KEY_STEP;
      const moves: Record<string, [number, number]> = {
        ArrowLeft: [-step, 0],
        ArrowRight: [step, 0],
        ArrowUp: [0, -step],
        ArrowDown: [0, step],
      };
      const move = moves[e.key];
      if (move) {
        // ページのスクロールに取られないようにする
        e.preventDefault();
        setPosition((prev) => ({ x: prev.x + move[0], y: prev.y + move[1] }));
      } else if (e.key === "Home") {
        e.preventDefault();
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleRotate = () => {
      setRotation((prev) => (prev + 90) % 360);
    };

    const handleApplyClick = () => {
      setIsDialogOpen(true);
    };

    const handleConfirmApply = () => {
      // 以前は切り抜かず、`src` をそのまま返していた（T334）。画面に見えている枠の中を、元の画像の
      // 解像度で Canvas に描いて返す。
      const image = imageRef.current;
      const frame = frameRef.current;
      setIsDialogOpen(false);
      if (!image || !frame) return;
      const geometry: CropGeometry = {
        x: position.x,
        y: position.y,
        zoom,
        rotation,
        // 枠の線の内側（利用者に見えている範囲）
        frameWidth: frame.clientWidth,
        frameHeight: frame.clientHeight,
        // `transform` の前の大きさ。拡大と回転は、上の値で別に持つ
        layoutWidth: image.offsetWidth,
        layoutHeight: image.offsetHeight,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        maxOutputSize,
      };
      try {
        const { dataUrl, detail } = cropImage(image, geometry, outputType, outputQuality);
        onCrop?.(dataUrl, detail);
        onApply?.(dataUrl, detail);
      } catch (error) {
        // 画像は作れなくても、数値は必ず返す（サーバーの側で切り抜き直せる）
        onCropError?.(error instanceof Error ? error : new Error(String(error)), resolveCropDetail(geometry).detail);
      }
    };

    if (!src) {
      return (
        <div ref={ref} className={classNames("wim-image-cropper", styles.root, styles.empty, className)} {...props}>
          <div className={styles.emptyContent}>
            {t("image_cropper.no_image")}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={classNames("wim-image-cropper", styles.root, className)} {...props}>
        {/* `application` は、キーを自前で扱う要素のためのロール。規則の一覧には操作要素として載っていない。 */}
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <div
          ref={containerRef}
          className={styles.viewer} 
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
          // Tab で届き、矢印キーを受ける（以前は `presentation`）。ロールは `application` ── 矢印キーを
          // 自前で扱う部品で、当てはまるウィジェットのロールが無い。`group` だと、スクリーンリーダーの
          // 閲覧モードが矢印キーを取ってしまい、部品に届かない。
          role="application"
          tabIndex={0}
          aria-label={t("image_cropper.position_label")}
          aria-describedby={hintId}
        >
          <VisuallyHidden id={hintId}>{t("image_cropper.position_hint")}</VisuallyHidden>
          <div className={styles.imageContainer}>
            <img
              ref={imageRef}
              src={src}
              alt={t("a11y.crop_target")}
              crossOrigin={crossOrigin}
              className={styles.image}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${zoom})`,
              }}
              draggable={false}
            />
          </div>
          <div className={styles.overlay}>
            <div 
              ref={frameRef}
              className={classNames(styles.cropArea, { [styles.circular]: circular })}
              style={{ aspectRatio }}
            />
          </div>
        </div>

        <div className={styles.controls}>
          {showZoom && (
            <div className={styles.zoomControl}>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(v) => setZoom(v as number)}
                label={t("image_cropper.zoom")}
                styles={{ root: styles.zoomSlider }}
              />
            </div>
          )}
          {showRotation && (
            <div className={styles.rotationControl}>
              <IconButton
                iconName="RefreshIcon"
                onClick={handleRotate}
                aria-label={t("image_cropper.rotate")}
                variant="outline"
                size="sm"
              />
            </div>
          )}
          {showApplyButton && (
            <div className={styles.applyControl}>
              <Button onClick={handleApplyClick} size="sm" variant="solid">
                {applyLabel || t("image_cropper.apply")}
              </Button>
            </div>
          )}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("image_cropper.confirm_title")}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              {t("image_cropper.confirm_message")}
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">
                  {t("image_cropper.cancel")}
                </Button>
              </DialogClose>
              <Button onClick={handleConfirmApply} variant="solid">
                {t("image_cropper.confirm")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
);

ImageCropper.displayName = "ImageCropper";
